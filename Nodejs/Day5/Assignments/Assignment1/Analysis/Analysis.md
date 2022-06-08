// University of Mumbai needs to set an online exam for their students. For that they need to set a timer for three hours. After 3 hours exams should be finished. Once Exam is started start event should be invoke and When we end the exam end event should be call.


-> first require event
- create new events.emitter
- declare count
- create eventemitter.on startenterval , and callback function
- that call back function has setinterval that emit start event
- onother eventemitter has cancel and callback function that clear interval 
- eventemitter.on start that has callback function 
- that function decereament count
- conver sconds to hour,minutes, second 
- print it
- another if condition for 0 timers that emit cancel event 
- emit startinterval