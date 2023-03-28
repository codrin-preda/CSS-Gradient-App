let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");

function setDirection(value, _this) {
    let direcrtions = document.querySelectorAll(".buttons button");
    for (let i of direcrtions) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
    generateCode();
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');

    const copiedMessage = document.createElement('div');
    copiedMessage.innerText = 'Gradient copied to clipboard!';
    copiedMessage.className = 'copied-message';
    document.body.appendChild(copiedMessage);

    setTimeout(() => {
        copiedMessage.remove();
    }, 2000);
}

function generateRandomGradient() {
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorOne.value = randomColor1;
    colorTwo.value = randomColor2;
    generateCode();
  }
  
  generateRandomGradient();
  


function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  }
  
  colorOne.addEventListener("input", () => {
    generateCode();
  });
  
  colorTwo.addEventListener("input", () => {
    generateCode();
  });
  

generateCode();
