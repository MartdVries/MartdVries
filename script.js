var left = document.getElementById("paddelleft");
var styleleft = getComputedStyle(left);
var barY = parseInt(styleleft.top);
function upKeyPressed() {
        var element = document.getElementById("paddelleft");
        barY -= 40;
        element.style.top = barY + "px";
        console.log("up");
        if(barY < 0){
        barY = 0;
        }
    }
        function downKeyPressed() {
            var element = document.getElementById("paddelleft");
            barY += 40;
            element.style.top = barY + "px";
            console.log("down");
            if(barY < 0){
            barY = 0;
            }
        }
  //alert("You pressed a key inside the input field");


document.onkeyup = function(event) {         
switch (event.keyCode) { 
case 38: upArrowPressed(); break;
case 40: downArrowPressed(); break;
case 87: upKeyPressed(); break;
case 83: downKeyPressed(); break;
}}

var left = document.getElementById("paddelright");
var styleleft = getComputedStyle(left);
var barY = parseInt(styleleft.top);
function paddelrightup() {
    var element = document.getElementById("paddelright");
    barY -= 40;
    element.style.top = barY + "px";
    console.log("up");
    if(barY < 0){
        barY = 0;
    }
}
    function paddelrightdown() {
        var element = document.getElementById("paddelright");
        barY += 40;
        element.style.top = barY + "px";
        console.log("down");
        if(barY < 0){
        barY = 0;
        }
    }
//alert("You pressed a key inside the input field");


