// module 7 assignment

- > restful api for employee assignmet data
- require express , fs and use express.json
- cretae server that listen on port 3000
- app.get('/') that print welcome msg


- app.get('/emps/:id/assignments') that get id from params and get particular employee data data
- for that first read file
- that file data store in temp array
- that find particular id data with help of find method
- res.send that data.assignmet

- app.get("/emps/:id/assignment/:AssignmentId") that get id from params and get particular employee data data
- for that first read file
- that file data store in temp array
- that find particular id data with help of find method
- then store result.assignmet in one variable
- then again use find method find particular assignment id
- send that find data


app.put('/emps/:id/ass/:aid')hat get id from params and get particular employee data data
- for that first read file
- that file data store in temp array
- that find particular id data with help of find method
- then store result.assignmet in one variable
- then again use find method find particular assignment id
- update assignmentname using res.body
