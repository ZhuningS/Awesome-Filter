/*
This was retrieved from the proof-of-concept described in this blog: http://www.codeproject.com/Articles/26980/Binary-Formats-in-JavaScript-Base64-Deflate-and-UT
I was able to go to this webpage: http://labs.calyptus.eu/JSBin/Demo/Viewer.html, which is the proof of concept described in the blog above. I then used Chrome's
Inspect Element tool to access the JavaScript code on the page. I was thus able to get the code below.
I am assuming that the author of the blog, Sebastian Markbåge, is also the author of the code below. However, I cannot confirm this.
*/


function PNG(data){
	var reader = new Base64Reader(data);
	reader.skip(8);
	var readChunk = function(){
		var length = reader.readInt(),
			type = reader.readChars(4),
			data = [];
		if (reader.read(data, 0, length) != length) throw 'Out of bounds';
		reader.skip(4);
		return {
			type: type,
			data: data
		};
	};
	var toInt = function(bytes, index){
		return (bytes[index] << 24) | (bytes[index + 1] << 16) | (bytes[index + 2] << 8) | bytes[index + 3];
	};
	var colorType,
		colorTypes = {
		// gray
		0: function(reader){
			var g = reader.readByte();
			return (g << 16) | (g << 8) | g;
		},
		// rgb
		2: function(reader){
			var r = reader.readByte(), g = reader.readByte(), b = reader.readByte();
			return (r << 16) | (g << 8) | b;
		},
		// palette
		3: function(reader){
			var b = reader.readByte();
			if (b == -1) return -1;
			return this.palette[b];
		},
		// gray + alpha
		4: function(reader){
			var g = reader.readByte(), a = reader.readByte();
			return (g << 16) | (g << 8) | g;
		},
		// rgb + alpha
		6: function(reader){
			var r = reader.readByte(), g = reader.readByte(), b = reader.readByte(), a = reader.readByte();
			return (r << 16) | (g << 8) | b;
		}
	};

	var filters = {
		0: function(reader){
			var line = new Array(this.width);
			for (var x=0;x<this.width;x++)
				line[x] = colorType.apply(this, [reader]);
			return line;
		},
		1: function(reader){
			var line = new Array(this.width);
			var bpp = 3;
			var buffer = [];
			var newreader = {
				readByte: function(){
					var rb = reader.readByte();
					if (rb == -1) return -1;
					if (buffer.length == bpp)
						rb = (rb + buffer.shift()) % 256;
					buffer.push(rb);
					return rb;
				}
			};
			for (var x=0;x<this.width;x++)
				line[x] = colorType.apply(this, [newreader]);
			return line;
		},
		2: function(){ throw 'Filter 2 not implemented'; },
		3: function(){ throw 'Filter 3 not implemented'; },
		4: function(){ throw 'Filter 4 not implemented'; }		
	};
	
	var colorType, dataChunks = [];
	do {
		var chunk = readChunk();
		var data = chunk.data;
		switch(chunk.type){
			case 'IHDR':
				this.width = toInt(data, 0);
				this.height = toInt(data, 4);
				this.bitdepth = data[8];
				this.colorType = data[9];
				colorType = colorTypes[data[9]];
				if (data[10] != 0) throw 'Unknown compression method';
				if (data[11] != 0) throw 'Unknown filter';
				this.interlaced = data[12];
				break;
			case 'IDAT':
				dataChunks[dataChunks.length] = data;
				break;
			case 'PLTE':
				this.palette = [];
				for(var i=0;i<data.length / 3;i++){
					var di = i * 3;
					this.palette[i] = (data[di] << 16) | (data[di + 1] << 8) | data[di + 2];
				}
				break;
		};
		
	} while(chunk.type != 'IEND');
	
	var chunkReader = new Inflator({
		chunk: 0,
		index: 2,
		readByte: function(){
			if (this.chunk >= dataChunks.length) return -1;
			while (this.index >= dataChunks[this.chunk].length){
				this.index = 0;
				this.chunk++;
				if (this.chunk >= dataChunks.length) return -1;
			}
			this.index++;
			return dataChunks[this.chunk][this.index - 1];
		}
	});
	
	this.readLine = function(){
		var filter = chunkReader.readByte();
		if (filter == -1) return null;
		return filters[filter].apply(this, [chunkReader]);
	};	
}

