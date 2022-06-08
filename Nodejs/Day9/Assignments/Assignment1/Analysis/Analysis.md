-> mplement Folder structute for the Node Application. Main Module of the Application will be Authentication,Student,Employee Employee->Assignment Module Student->Fees Student->Result

- create some folder like authentication,controller,domain,json,middlewear one file app.js
- first create all require json file like employee, and student
- cretae middlewear of logger that print method , url , and time
- use this logger function to in app.js

- create config file that has secret key and algorithm 

- first create login controller
- inside login require express, router, and jwt
- require config file
- create router.post for login create user data object that hase username , password from req.body
- create token var that has jwt.sign method that method require userdata, secret key , algorithm , and expiresIn;
- if( user data is related to admin) than return res, message and token
- else res print error message
- export that router

- create verifytoken file 
- that file require jwt , and config file
- definf function for verifytoken that has req,res,next
- that contan one variable token that has req.headers
- jwt.verify mehthod that require token , secret key, and algorithm
- create callback function that print err message
- require that verify in app.js and use app.use


- create employeedomain file in domain
- that dile require express , and emplyee.json file , fs module
- cretae class EmployeeDomain that has some method
- getallemployee that return res.json(employee)
- getanemployee that find particular id from employee and return it
- cretae employee that crete employee add in emplyye.json using fs.writefile


- create employeecontroller.js in side controller
- that require employee domain and router
- create class EmployeeController 
- that has method get that call employeedomain.getAllEmployee
- method getAnEmployee that return employeedomain.getAnEmployee
- method createAnEmployee that return employeeDomain.createAnEmployee
- then router.get('/', EmployeeController.get);
- router.get("/:EmpId", EmployeeController.getAnEmployee);
- router.post("/", EmployeeController.createAnEmployee);
- router.put("/", EmployeeController.updateAnEmployee);
- module.exports = router;
- require employees in app.js
- app.use("/emps", employees)


- follow same as above for student





