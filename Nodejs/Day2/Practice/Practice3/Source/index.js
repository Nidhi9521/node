var fs = require('fs');

function Fileraed(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, data) {
      if (error) return reject(error);

      console.log(fileName)
      console.log(data)

      resolve();
    })
  });
}

async function run() {
  await Fileraed('file1.txt');
  await Fileraed('file2.txt');
}

run();
