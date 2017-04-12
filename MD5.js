//This function return simple md5 hash from string
let crypto = require('crypto');

const toMD5 = (data)=>{
    return crypto.createHash('md5').update(data).digest("hex");
};

console.log(`'12345' to md5 - ${toMD5(12345)}`);
