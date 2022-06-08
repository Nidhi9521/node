
var events = require('events');
var eventEmitter = new events.EventEmitter();


// add value in seconds
var count = 5;

eventEmitter.on('startinterval',function(){
  var x = setInterval(() => {
      eventEmitter.emit('start');
  }, 1000);
  eventEmitter.on('cancel',function(){
    clearInterval(x);
  });
});

eventEmitter.on('start',function(){
    count = count - 1;
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;
    console.log(hours + " hours " + minutes + " minutes and " + seconds + " seconds left to compelete exam!");
    if (hours == 0 && minutes == 0 && seconds == 0) {
        eventEmitter.emit('cancel');
        console.log("your time is finish");
        
    }
});
eventEmitter.emit('startinterval');

