/*
Copyright (c) 2008 notmasteryet

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

function BitReader(reader)
{
    this.bitsLength = 0;
    this.bits = 0;
    this.reader = reader;
    this.readBit = function() {
        if(this.bitsLength == 0) {
            var nextByte = this.reader.readByte();
            if(nextByte < 0) throw new "Unexpected end of stream";
            this.bits = nextByte;
            this.bitsLength = 8;
        }            

        var bit = (this.bits & 1) != 0;
        this.bits >>= 1;
        --this.bitsLength;
        return bit;
    };
    this.align = function() { this.bitsLength = 0; }
    this.readLSB = function(length) {
        var data = 0;
        for(var i=0;i<length;++i)
        {
             if(this.readBit()) data |= 1 << i;
        }
        return data;
    };
    this.readMSB = function(length) {
        var data = 0;
        for(var i=0;i<length;++i)
        {                 
             if(this.readBit()) data = (data << 1) | 1; else data <<= 1;
        }
        return data;
    };
}

/* inflate stuff - RFC 1950 */

var staticCodes, staticDistances;

var encodedLengthStart = new Array(3,4,5,6,7,8,9,10,
        11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,
        115,131,163,195,227,258);
        
var encodedLengthAdditionalBits = new Array(0,0,0,0,0,0,0,0,
        1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0);

var encodedDistanceStart = new Array(1,2,3,4, 5,7,9,
        13,17,25, 33,49,65, 97,129,193,257,385,513,769,1025,1537,2049,
        3073,4097,6145,8193,12289,16385,24577);

var encodedDistanceAdditionalBits = new Array(0,0,0,0,1,1,2,2,3,3,4,4,
        5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13);

var clenMap = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);

function buildCodes(lengths)
{
    var codes = new Array(lengths.length);
    var maxBits = lengths[0];
    for (var i=1; i<lengths.length; i++)
    {
        if (maxBits < lengths[i]) maxBits = lengths[i];
    }

    var bitLengthsCount = new Array(maxBits + 1);
    for (var i=0; i<=maxBits; i++) bitLengthsCount[i]=0;
    
    for (var i=0; i<lengths.length; i++)
    {
        ++bitLengthsCount[lengths[i]];
    }

    var nextCode = new Array(maxBits + 1);
    var code = 0;
    bitLengthsCount[0] = 0;
    for (var bits=1; bits<=maxBits; bits++)
    {
        code = (code + bitLengthsCount[bits - 1]) << 1;
        nextCode[bits] = code;
    }

    for (var n=0; n<codes.length; n++)
    {
        var len = lengths[n];
        if (len != 0)
        {
            codes[n] = nextCode[len];
            nextCode[len]++;
        }
    }
    return codes;
}

function initializeStaticTrees()
{
    var codes = new Array(288);
    var codesLengths = new Array(288);
    
    for (var i = 0; i <= 143; i++)
    {
        codes[i] = 0x0030 + i;
        codesLengths[i] = 8;
    }
    for (var i = 144; i <= 255; i++)
    {
        codes[i] = 0x0190 + i - 144;
        codesLengths[i] = 9;
    }
    for (var i = 256; i <= 279; i++)
    {
        codes[i] = 0x0000 + i - 256;
        codesLengths[i] = 7;
    }
    for (var i = 280; i <= 287; i++)
    {
        codes[i] = 0x00C0 + i - 280;
        codesLengths[i] = 8;
    }
    staticCodes = buildTree(codes, codesLengths);

    var distances = new Array(32);
    var distancesLengths = new Array(32);
    for (var i = 0; i <= 31; i++)
    {
        distances[i] = i;
        distancesLengths[i] = 5;
    }
    staticDistances = buildTree(distances, distancesLengths);
}

function buildTree(codes, lengths)
{
    var nonEmptyCodes = new Array(0);
    for(var i=0; i<codes.length; ++i)
    {
        if(lengths[i] > 0)
        {
            var code = new Object();
            code.bits = codes[i];
            code.length = lengths[i];
            code.index = i;
            nonEmptyCodes.push(code);
        }
    }
    return buildTreeBranch(nonEmptyCodes, 0, 0);
}

function buildTreeBranch(codes, prefix, prefixLength)
{
    if(codes.length == 0) return null;
    
    var zeros = new Array(0);
    var ones = new Array(0);
    var branch = new Object();
    branch.isLeaf = false;
    for(var i=0; i<codes.length; ++i)
    {
        if(codes[i].length == prefixLength && codes[i].bits == prefix)
        {
            branch.isLeaf = true;
            branch.index = codes[i].index;
            break;
        }
        else
        {
            var nextBit = ((codes[i].bits >> (codes[i].length - prefixLength - 1)) & 1) > 0;
            if(nextBit)
            {
                ones.push(codes[i]);
            }
            else
            {
                zeros.push(codes[i]);
            }
        }
    }
    if(!branch.isLeaf)
    {
        branch.zero = buildTreeBranch(zeros, (prefix << 1), prefixLength + 1);
        branch.one = buildTreeBranch(ones, (prefix << 1) | 1, prefixLength + 1);
    }
    return branch;
}

function readDynamicTrees(bitReader)
{
    var hlit = bitReader.readLSB(5) + 257;
    var hdist = bitReader.readLSB(5) + 1;
    var hclen = bitReader.readLSB(4) + 4;
    
    var clen = new Array(19);
    for(var i=0; i<clen.length; ++i) clen[i] = 0;
    for(var i=0; i<hclen; ++i) clen[clenMap[i]] = bitReader.readLSB(3);
    
    var clenCodes = buildCodes(clen);
    var clenTree = buildTree(clenCodes, clen);
    
    var lengthsSequence = new Array(0);
    while(lengthsSequence.length < hlit + hdist)
    {
        var p = clenTree;
        while(!p.isLeaf)
        {
            p = bitReader.readBit() ? p.one : p.zero;
        }
        
        var code = p.index;
        if(code <= 15)
            lengthsSequence.push(code);
        else if(code == 16)
        {
            var repeat = bitReader.readLSB(2) + 3;
            for(var q=0; q<repeat; ++q)
                lengthsSequence.push(lengthsSequence[lengthsSequence.length - 1]);
        }
        else if(code == 17)
        {
            var repeat = bitReader.readLSB(3) + 3;
            for(var q=0; q<repeat; ++q)
                lengthsSequence.push(0);
        }
        else if(code == 18)
        {
            var repeat = bitReader.readLSB(7) + 11;
            for(var q=0; q<repeat; ++q)
                lengthsSequence.push(0);
        }
    }
    
    var codesLengths = lengthsSequence.slice(0, hlit);
    var codes = buildCodes(codesLengths);
    var distancesLengths = lengthsSequence.slice(hlit, hlit + hdist);
    var distances = buildCodes(distancesLengths);
    
    var result = new Object();
    result.codesTree = buildTree(codes, codesLengths);
    result.distancesTree = buildTree(distances, distancesLengths);
    return result;
}
        
function Inflator(reader)
{
    this.reader = reader;
    this.bitReader = new BitReader(reader);
    this.buffer = new Array(0);
    this.bufferPosition = 0;
    this.state = 0;
    this.blockFinal = false;
    this.readByte = function() {
        while(this.bufferPosition >= this.buffer.length)
        {
            var item = this.decodeItem();
            if(item == null) return -1;
            switch(item.itemType)
            {
                case 0:
                    this.buffer = this.buffer.concat(item.array);
                    break;
                case 2:
                    this.buffer.push(item.symbol);
                    break;
                case 3:
                    var j = this.buffer.length - item.distance;
                    for(var i=0;i<item.length;i++)
                    {
                        this.buffer.push(this.buffer[j++]);
                    }
                    break;
            }
        }
        var symbol = this.buffer[this.bufferPosition++];
        if(this.bufferPosition > 0xC000)
        {
            var shift = this.buffer.length - 0x8000;
            if(shift > this.bufferPosition) shift = this.bufferPosition;
            this.buffer.splice(0, shift);
            this.bufferPosition -= shift;
        }
        return symbol;
    }
    
    this.decodeItem = function() {
        if(this.state == 2) return null;
        
        var item;
        if(this.state == 0)
        {
            this.blockFinal = this.bitReader.readBit();
            var blockType = this.bitReader.readLSB(2);
            switch(blockType)
            {
                case 0:
                    this.bitReader.align();
                    var len = this.bitReader.readLSB(16);
                    var nlen = this.bitReader.readLSB(16);
                    if((len & ~nlen) != len) throw "Invalid block type 0 length";
                    
                    item = new Object();
                    item.itemType = 0;
                    item.array = new Array(len);
                    for(var i=0;i<len;++i)
                    {
                        var nextByte = this.reader.readByte();
                        if(nextByte < 0) throw "Uncomplete block";
                        item.array[i] = nextByte;
                    }
                    if(this.blockFinal) this.state = 2;                 
                    return item;
                case 1:
                    this.codesTree = staticCodes;
                    this.distancesTree = staticDistances;
                    this.state = 1;
                    break;
                case 2:
                    var dynamicTrees = readDynamicTrees(this.bitReader);
                    this.codesTree = dynamicTrees.codesTree;
                    this.distancesTree = dynamicTrees.distancesTree;
                    this.state = 1;
                    break;
                default:    
                    throw new "Invalid block type (3)";
            }
        }

        item = new Object();
        var p = this.codesTree;
        while(!p.isLeaf)
        {
            p = this.bitReader.readBit() ? p.one : p.zero;
        }
        if(p.index < 256)
        {
            item.itemType = 2;
            item.symbol = p.index;
        }
        else if(p.index > 256)
        {
            var lengthCode = p.index;
            if(lengthCode > 285) throw new "Invalid length code";
            
            var length = encodedLengthStart[lengthCode - 257];
            if(encodedLengthAdditionalBits[lengthCode - 257] > 0) 
            {
                length += this.bitReader.readLSB(encodedLengthAdditionalBits[lengthCode - 257]);
            }
        
            p = this.distancesTree;
            while(!p.isLeaf)
            {
                p = this.bitReader.readBit() ? p.one : p.zero;
            }
            
            var distanceCode = p.index;
            var distance = encodedDistanceStart[distanceCode];
            if(encodedDistanceAdditionalBits[distanceCode] > 0)
            {
                distance += this.bitReader.readLSB(encodedDistanceAdditionalBits[distanceCode]);
            }
        
            item.itemType = 3;
            item.distance = distance;
            item.length = length;
        }
        else
        {
            item.itemType = 1;
            this.state = this.blockFinal ? 2 : 0;
        }
        return item;
    };
}

/* initialization */
initializeStaticTrees();