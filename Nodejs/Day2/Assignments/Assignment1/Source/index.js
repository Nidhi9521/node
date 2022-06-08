var arguments = process.argv.slice(2);
console.log(arguments);

var a = Number(arguments[0]);

var b = Number(arguments[1]);

var ch = Number(arguments[2]);

var result, statement;

switch (ch) {
    case 1:
        statement = "Addition resultult";
        result = a + b;
        break;

    case 2:
        statement = "Subtraction resultult";
        result = a - b;
        break;

    case 3:
        statement = "Multiplication resultult";
        result = a * b;
        break;

    case 4:
        statement = "Division resultult";
        result = a / b;
        break;

    default:
        statement = "Wrong choice";
        result = "";
        console.log('u enter invalid choice');

        break;

}



console.log(result);

const fs = require('fs');


fs.appendFile('result.txt', '\n' + statement.toString() + ' ' + result.toString(), function (err) {

    if (err) throw err;

    console.log('Saved result sucesfully!');

});

