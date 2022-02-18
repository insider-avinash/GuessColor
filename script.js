const heading = document.getElementById('colorValue');
const buttons = document.getElementsByClassName('colorButton');
// heading.innerHTML = 'Hello World';
const answerMessage = document.getElementById('answer');
const reset = document.getElementById('reset');
var answerButton = Math.round(Math.random()*(buttons.length)-1);

function setButtonColor(button,red,green,blue){
    button.setAttribute('style', 'background-color: rgb('+ red +',' + green +',' + blue +')');
}
function makeColorValue(){
    return Math.round(Math.random()*255);
}



function startGame(){
    answerMessage.innerHTML =" ";

for(let i =0;i<buttons.length;i++){
    var red = makeColorValue();
    var green = makeColorValue();
    var blue = makeColorValue();

   setButtonColor(buttons[i], red, green, blue);

   if(i === answerButton){
       heading.innerHTML = `(${red}, ${green}, ${blue})`;
   }

   buttons[i].addEventListener('click', function(){
       if(this === buttons[answerButton]){
           answerMessage.innerHTML = "Correct!!!";
       }else{
           answerMessage.innerHTML = "Wrong answer ! Guess Again!";
       }
   });
}
}

reset.addEventListener('click', startGame);

startGame();




