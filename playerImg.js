import data from "./players.js";

const body = document.querySelector("body");
const answer = document.querySelector(".answerForm");

const IMG_NUMBER = 40;
var checkNumber = [];

// for(var i = 0; i <= IMG_NUMBER; i++){
//   checkNumber.push(i)
// }


function genRandom() {
  var number = Math.floor(Math.random() * IMG_NUMBER);
  if(checkNumber.includes(number)){
    genRandom();
  }
  else{
    checkNumber.push(number);
    console.log(checkNumber)
    return number;
  }
  
  // for(var i = 0; i <= data.length; i++){
  //   if(number == i){
  //     data.slice(i, 1)
  //     console.log(data)
  //     return number
  //   }
  // }

  // var number = Math.floor(Math.random() * IMG_NUMBER);
  // var i = 0;
  // while(number == checkNumber[i]){
  //   var number = Math.floor(Math.random() * IMG_NUMBER);
  //   i++;
  // }
  // console.log(checkNumber)
  // return number; 
}

async function paintImage(imgNumber) {
  const image = new Image() ; // = document.createElement("img")
  image.src = await `${data[imgNumber].img}`;
  name = (`${data[imgNumber].name}`);
  console.log(name )
  image.setAttribute("class", "mainFrame");
  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  var randomNumber =genRandom();
  paintImage(randomNumber);
}

function checkIt(event){
  event.preventDefault();
  if(event.target[0].value == name){
    const oscreen = document.createElement("div");
    oscreen.classList.add("right");
    oscreen.innerText += 'O';
    body.appendChild(oscreen);
    while ( frame.hasChildNodes() ) { frame.removeChild( frame.firstChild ); }
  for(i = 0; i < 42; i++) {
    const block = document.createElement("div");
    block.classList.add(`mainFrame__block${i}`);
    frame.appendChild(block);
  }
    init();
  }
  else{
    const xscreen = document.createElement("div");
    xscreen.classList.add("wrong");
    xscreen.innerText += 'X';
    body.appendChild(xscreen);
  }
}

answer.addEventListener("submit", checkIt)

init();





