var ranNum1 = Math.floor(Math.random()*6+1);
var ranNum2 = Math.floor(Math.random()*6+1);

var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

var diceImg1 = "./images/dice"+ranNum1+".png";
var diceImg2 = "./images/dice"+ranNum2+".png";

dice1.setAttribute("src",diceImg1);
dice2.setAttribute("src",diceImg2);


var result = document.querySelector("h1");
if (ranNum1 === ranNum2){
    result.innerHTML = "Draw";
} else if (ranNum1 > ranNum2){
    result.innerHTML = "🤣 Player 1 win";
} else {
    result.innerHTML = "🤣 Player 2 win";
}