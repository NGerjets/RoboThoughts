var ros;
var IMU_message;
var depth_message;
var object_message;
var switches_message;
var robot_IP = '127.0.0.1';

// Command for opening the socket:
// roslaunch rosbridge_server rosbridge_websocket.launch


window.onload = function(){
  ros = new ROSLIB.Ros({
    url: "ws://" + robot_IP + ":9090"
  });

  
  
  
  //Video socket connection established here, rosrun web_video_server web_video_server
  //Has to be called before webpage open
  video = document.getElementById('video');
  video.src = "http://" + robot_IP + ":8080/stream?topic=/camera/image_raw&type=mjpeg&quality=80&image_trasport=compressed";
  
  //Subscriber Topic
  var posList = document.getElementById("position").children[0];
  var accList = document.getElementById("acceleration").children[0];
  var taskList = document.getElementById("position").children[0];
  var rosList = document.getElementById("position").children[0];
  
  var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/rosout_agg',
    messageType : 'rosgraph_msgs/Log'
  });
  listener.subscribe(function(message){
    console.log(message);
  });

    IMU_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/imu',
        messageType : 'riptide_msgs/Imu'
    });
    
    IMU_message.subscribe(function(message){
        console.log('Recieved message on ' +IMU_message.name + ': ' + message.data);
    });

    depth_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/depth',
        messageType : 'riptide_msgs/Depth'
    });
    
    depth_message.subscribe(function(message){
        console.log('Recieved message on ' +depth_message.name + ': ' + message.data);
    });

    object_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/object',
        messageType : 'riptide_msgs/Object'
    });
    
    object_message.subscribe(function(message){
        console.log('Recieved message on ' +object_message.name + ': ' + message.data);
    });

    switches_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/switches',
        messageType : 'riptide_msgs/SwitchState'
    });
    
    IMU_message.subscribe(function(message){
        console.log('Recieved message on ' +switches_message.name + ': ' + message.data);
    });
    
    var listener_angular = new ROSLIB.Topic({
        ros : ros,
        name : '/status/controls/angular',
        messageType : 'riptide_msgs/ControlStatusAngular'
      });
      listener_angular.subscribe(function(message){
        console.log(message);
      });

    var listener_depth = new ROSLIB.Topic({
        ros : ros,
        name : '/status/controls/depth',
        messageType : 'riptide_msgs/ControlStatus'
      });
      listener_depth.subscribe(function(message){
        console.log(message);
      });

    var listener_linear = new ROSLIB.Topic({
        ros : ros,
        name : '/status/controls/linear',
        messageType : 'riptide_msgs/ControlStatusLinear'
      });
      listener_linear.subscribe(function(message){
        console.log(message);
      });

    var listener_thruster = new ROSLIB.Topic({
        ros : ros,
        name : '/status/controls/thruster',
        messageType : 'riptide_msgs/ThrusterResiduals'
      });
      listener_thruster.subscribe(function(message){
        console.log(message);
      });
}