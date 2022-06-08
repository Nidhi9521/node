- require express
- store in ap
- require fs module
- app.use express.json
- cretae server that listen on port 3000
- app.get('/') that print welcome msg

- app.get('/students') that method read json file 
- return all the data

- app.get("/students/:id") that get id from params and get particular student data
- for that first read file 
- that file data store in temp array
- that find particular id data with help of find method
- res.send that data


- app.get("/students/:id/fee") that get id from the params print student fees details
- for that find id data from prams same as above
- thatn res.send(newdata.fees)
- repeat same process for result 