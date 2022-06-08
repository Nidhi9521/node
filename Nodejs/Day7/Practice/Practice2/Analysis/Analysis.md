- > practice of express

-  restful api for employee employee data
- require express , fs and use express.json
- cretae server that listen on port 3000
- app.get('/') that print welcome msg


- app.get("employee") that send all employee data
- for that read file 
- send data

- app.get("/employee/:id") that get id from params and get particular employee data data
- for that first read file
- that file data store in temp array
- that find particular id data with help of find method
- res.send that data

app.put('/employee/:id')hat get id from params and get particular employee data data
- for that first read file
- that file data store in temp array
- that find particular id data with help of find method
- update employee data  using res.body