- require express
- store in ap
- require fs module
- app.use express.json
- cretae server that listen on port 3000
- app.get('/') that print welcome msg


- app.get('"/customers" ) , that get all customer data
- for that first read file 
- send file data to res


- app.get("/customers/:id") ,that get id from params and get particular customer data
- for that first read file 
- that file data store in temp array
- that find particular id data with help of find method
- res.send that data

- app.post("/customer") that add data to file using postman
- for that first read file 
- that file data store in temp array
- than push new data using push method
- then write file store new data
- res.send (newdata)

- app.put("/customer/:id")that get id from params and get particular customer data
- for that first read file 
- that file data store in temp array
- that find particular id data with help of find method
- than update name using result.name = req.body.name
- write file put the data


- app.delete("/customer/:id") that get id from params and get particular customer data
- for that first read file 
- that file data store in temp array
- that find particular id data with help of find method
- find index of data
- splice this data
- send new data to write file


