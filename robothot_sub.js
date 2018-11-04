var ros;
var IMU_message;
var robot_IP = '127.0.0.1';

window.onload = function(){
    ros = new ROSLIB.Ros({
        url : 'ws:' + robot_IP + '9090'
    });

    IMU_message = new ROSLIB.Topic({
        ros:ros,
        name : '/Imu',
        messageType : 'std_msgs/Vector3'
    });
    
    IMU_message.subscribe(function(message){
        concsole.log('Recieved message on ' +IMU_message.name + ': ' + message.data);
    });
}