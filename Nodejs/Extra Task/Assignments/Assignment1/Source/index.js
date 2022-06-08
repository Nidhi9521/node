const fs = require("fs");

const path = require("path");



const getMostRecentFile = (dir) => {

    const files = orderReccentFiles(dir);

    for (var i = 2; i < files.length; i++) {

        fs.unlink(`${dir}/${files[i].file}`, () => {



        })

    }

    return files.length ? files[0] : undefined;

};



const orderReccentFiles = (dir) => {

    return fs.readdirSync(dir)

        .filter((file) => fs.lstatSync(path.join(dir, file)).isFile())

        .map((file) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))

        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

};



console.log(getMostRecentFile('./Directory'));