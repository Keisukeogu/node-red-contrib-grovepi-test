module.exports = function(RED){
  'use strict'
  var GrovePi = require('node-grovepi').GrovePi;
  var Digital = GrovePi.sensors.base.Digital;
  var board = GrovePi.board;

  function infraredNode(n){
  RED.nodes.createNode(this,n);
  this.pin = n.pin;
  this.sensor = n.sensor;
  var node = this;

  node.status({fill:"green",shape:"dot",text:"ok"});
  var digital = new Digital(node.pin);
  board.pinMode(node.pin,'output');

  node.on('input',function(input_msg){
    var msg = new Object();
    if(input_msg == 0){
      msg.payload = "true";
    }else{
      msg.payload = "false";
    }
    node.send(msg);
  });
}
  


  RED.nodes.regiterType("infrared",infraredNode);
}
