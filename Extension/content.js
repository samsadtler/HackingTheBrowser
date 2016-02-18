console.log('socket server content script version 2');
console.log('Be sure to read the README file to get this extension working');

// This script loads after socket.io.js, so the "io" global
// variable below will already be present

var port = 3201;
var socket = io.connect('http://localhost:' + port);

socket.on('connect', function() {
  console.log('io connected successfully');
});

socket.on('connect_error', function() {
  console.log('io failed to connect. Is the socket server running? Look at the README for instructions');
});

// Add a listener for an event named "news"
socket.on('news', function (data) {
  console.log('received "news" event with data:',data);
  // send back an event named "my other event" to the socket server
  socket.emit('my other event', { my: 'data' });
});
socket.on('heart', function (data) {
  console.log('received "news" event with data:',data);
  var beat = data.beat;
  var beat_op = map(beat, 30, 120, 0, 1) //CAN BE FINE TUNED.
                    $("body").animate({
                        opacity: beat_op
                    })
                    console.log("beat_op", beat_op);
  // send back an event named "my other event" to the socket server
  socket.emit('my other event', { my: 'beats' });
});

function map( x,  in_min,  in_max,  out_min,  out_max){
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}