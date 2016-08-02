var fs = require('fs');
var fieaddr = process.argv[2];

var buf = fs.readFileSync(fieaddr);

var str = buf.toString().split('\n').length - 1;
console.log(str);
