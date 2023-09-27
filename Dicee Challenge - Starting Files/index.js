const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomNumber2 = Math.floor(Math.random() * 6) + 1

const headLine = document.querySelector("h1")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")

img1.src = "./images/dice" + randomNumber1 + ".png" 
img2.src = "./images/dice" + randomNumber2 + ".png" 

if (randomNumber1 > randomNumber2) {
    headLine.innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    headLine.innerHTML = "Player 2 wins!"
}
else {
    headLine.innerHTML = "Draw!"
}