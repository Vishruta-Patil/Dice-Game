var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2)
{
    document.getElementById("demo").innerHTML = " Player 1 Winner 👍";
}

else if (randomNumber2 >randomNumber1)
{   
    document.getElementById("demo").innerHTML = " 👍 Player 2 Winner ";
}

else 
{
    document.getElementById("demo").innerHTML = " DRAW ";
}
