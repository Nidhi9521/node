

var Mobike = require('./mobike.js');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the Bike number : ', (bikeno) => {
    rl.question('Please enter the customer PhoneNumber : ', (phone) => {
        rl.question('please enter customer name : ', (name) => {
            rl.question('please enter no of day :', (noofday) => {
                var mobike = new Mobike(bikeno, phone, name, noofday);
                mobike.compute(noofday)
                rl.close();
            });
        });
    });
});


