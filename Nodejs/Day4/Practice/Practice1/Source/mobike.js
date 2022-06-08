module.exports =  class Mobike {
    constructor(bikeno, phone, name, noofday) {
        this.bikeno = bikeno;
        this.phone = phone;
        this.name = name;
        this.noofday = noofday;

    }
    compute(noofday) {
        var rent = 0;
        if (isNaN(noofday)) {
            console.log("plese enter valid no of day");
        }
        else if (noofday <= 5) {
            var rent = noofday * 500;
            console.log("bike number is :" + this.bikeno);
            console.log("customer name is :" + this.name);
            console.log("customer number is :" + this.phone);
            console.log("bike rent is " + rent);
        }
        else if (noofday <= 10) {
            var rent = 2500 + ((noofday - 5) * 400);
            console.log("bike number is :" + this.bikeno);
            console.log("customer name is :" + this.name);
            console.log("customer number is :" + this.phone);
            console.log("bike rent is " + rent);

        }
        else {
            var rent = 4500 + ((noofday - 10) * 200);
            console.log("bike number is :" + this.bikeno);
            console.log("customer name is :" + this.name);
            console.log("customer number is :" + this.phone);
            console.log("bike rent is " + rent);
        }
    }

    display() {
        console.log("bike number is :" + this.bikeno);
        console.log("customer name is :" + this.name);
        console.log("customer number is :" + this.phone);
        console.log(" bike rent is :" + rent);

    }

}