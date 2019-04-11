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

/* generic readers */

var base64alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

/* RFC 4648 */
function Base64Reader(base64)
{ 
    this.position = 0;
    this.base64 = base64;
    this.bits = 0;
    this.bitsLength = 0;
    this.readByte = function(){
        if(this.bitsLength == 0)
        {               
            var tailBits = 0;
            while(this.position < this.base64.length && this.bitsLength < 24)
            {                    
                var ch = this.base64.charAt(this.position);
                ++this.position;
                if(ch > " ")
                {
                    var index = base64alphabet.indexOf(ch);
                    if(index < 0) throw "Invalid character";
                    if(index < 64)
                    {
                        if(tailBits > 0) throw "Invalid encoding (padding)";
                        this.bits = (this.bits << 6) | index;
                    }
                    else 
                    {
                        if(this.bitsLenght < 8) throw "Invalid encoding (extra)";
                        this.bits <<= 6;
                        tailBits += 6;
                    }
                    this.bitsLength += 6;
                }
            }
            
            if(this.position >= this.base64.length)
            {
                if(this.bitsLength == 0) 
                    return -1;
                else if(this.bitsLength < 24)
                    throw "Invalid encoding (end)";
            }
            
            if(tailBits == 6)
                tailBits = 8; 
            else if(tailBits == 12)
                tailBits = 16;
            this.bits = this.bits >> tailBits;
            this.bitsLength -= tailBits;
        }
        
        this.bitsLength -= 8
        var code = (this.bits >> this.bitsLength) & 0xFF;
        return code;
       };
       // extensions
       this.read = function(buffer, index, count){
			var i = 0;
			while(i < count){
				var rb = this.readByte();
				if(rb == -1) return i;
				buffer[index + i] = rb;
				i++;
			}
			return i;
       };
       this.skip = function(count){
			for(var i=0;i<count;i++) this.readByte();
       };
       this.readChar = function(){
			var rb = this.readByte();
			return rb == -1 ? null : String.fromCharCode(rb);
       };
       this.readChars = function(chars){
			var txt = '';
			for(var i=0;i<chars;i++){
				var c = this.readChar();
				if (!c) return txt;
				txt += c;
			}
			return txt;
       };
       this.readInt = function(){
			var bytes = [];
			if (this.read(bytes, 0, 4) != 4) throw "Out of bounds";
			return (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3];
       };
}