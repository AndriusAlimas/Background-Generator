var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");
var randomColor = "";

// every value input changes we can call event on input
// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

//load page
setGradient(false);

// when you press random color generator button
 button.addEventListener("click", generateRandomColors);

//FUNCTIONS
function setGradient(generated){
    if(generated){
        body.style.background = randomColor;
    }else{
        body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    +  ")";
    }
    

    css.textContent = body.style.background + ";";
    randomColor = "linear-gradient(to right,";
}

function generateRandomColors(){
 for(var a= 0; a < 2; a++){
    var result = "rgb(";
    // red, green , blue - 3 times generate numbers from 0 - 255
    for(var i = 0; i < 3;i++){
        var color = (Math.floor(Math.random() * 255)) + 1;
        result += color;
        if(i < 2){
            result += ", ";
        }else if(i == 2){result+=")";}
    }
    randomColor += result;
   if(a == 0){
    randomColor += ",";
   } 
   
 }
  randomColor +=")";
  setGradient(true);
}