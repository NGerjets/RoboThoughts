/*
subcribers for:
    /status/controls/angular
    /status/controls/depth
    /status/controls/linear
    /status/controls/thruster
*/


var listener_angular = new ROSLIB.Topic({
    ros : ros,
    name : '/status/controls/angular',
    messageType : ''
  });
  listener.subscribe(function(message){
    console.log(message);
  });

var listener_depth = new ROSLIB.Topic({
    ros : ros,
    name : '/status/controls/depth',
    messageType : ''
  });
  listener.subscribe(function(message){
    console.log(message);
  });

var listener_linear = new ROSLIB.Topic({
    ros : ros,
    name : '/status/controls/linear',
    messageType : ''
  });
  listener.subscribe(function(message){
    console.log(message);
  });

var listener_thruster = new ROSLIB.Topic({
    ros : ros,
    name : '/status/controls/thruster',
    messageType : ''
  });
  listener.subscribe(function(message){
    console.log(message);
  });