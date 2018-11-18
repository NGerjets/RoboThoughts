var ros;
var IMU_message;
var depth_message;
var object_message;
var switches_message;
var robot_IP = '127.0.0.1';

window.onload = function(){
    ros = new ROSLIB.Ros({
        url : 'ws:' + robot_IP + '9090'
    });

    IMU_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/imu',
        messageType : 'riptide_msgs/Imu'
    });
    
    IMU_message.subscribe(function(message){
        concsole.log('Recieved message on ' +IMU_message.name + ': ' + message.data);
    });

    depth_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/depth',
        messageType : 'riptide_msgs/Depth'
    });
    
    depth_message.subscribe(function(message){
        concsole.log('Recieved message on ' +depth_message.name + ': ' + message.data);
    });

    object_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/object',
        messageType : 'riptide_msgs/Object'
    });
    
    object_message.subscribe(function(message){
        concsole.log('Recieved message on ' +object_message.name + ': ' + message.data);
    });

    switches_message = new ROSLIB.Topic({
        ros:ros,
        name : 'state/switches',
        messageType : 'riptide_msgs/SwitchState'
    });
    
    IMU_message.subscribe(function(message){
        concsole.log('Recieved message on ' +switches_message.name + ': ' + message.data);
    });
}