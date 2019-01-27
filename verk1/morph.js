
var svg = document.getElementById("logos");
var s = Snap(svg);
var simpleCup = Snap.select('#vaxis');
var fancyCup = Snap.select('#keywork');
var simpleCupPoints = simpleCup.node.getAttribute('d');
var fancyCupPoints = fancyCup.node.getAttribute('d');
var toFancy = function(){
  simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout);
}
var toSimple = function(){
  simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout);
}

