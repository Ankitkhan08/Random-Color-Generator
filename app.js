function getcolor(){
    let randomNumber = Math.floor(Math.random() * 16777215).toString(16)
    let randomColor = "#" + randomNumber
    document.body.style.backgroundColor = randomColor
    document.getElementById("color-code").textContent = randomColor
}

document.getElementById("btn").addEventListener("click" , getcolor)

getcolor()