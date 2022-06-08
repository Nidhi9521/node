var fs = require('fs-extra')

const dir = './Files'
fs.mkdir(dir);

fs.move('/Users/akash.gupta/Desktop/AkashGupta/Nodejs/Day2/Practice/Practice5/Source/file.txt', '/Users/akash.gupta/Desktop/AkashGupta/Nodejs/Day2/Practice/Practice5/Source/Files/file.txt', function (err) {
    if (err) return console.error(err)
    console.log("success!")
})