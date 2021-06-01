import data from "./players.js";

const body = document.querySelector("body");
const answer = document.querySelector(".answerForm");
const scoreSpan = document.querySelector(".score");
const timeSpan = document.querySelector(".time");

let time = 100;
let score = 0;
const IMG_NUMBER = 40;
let checkNumber = [];


const genRandom = () => {
  let number = Math.floor(Math.random() * IMG_NUMBER); 

  while(checkNumber.includes(number)){                     // 고친 코드 ㅎㅎㅎㅎㅎ
     number = Math.floor(Math.random() * IMG_NUMBER);
  }
  checkNumber.push(number);
  return number;


  // if(checkNumber.includes(number)){                // 원래 코드 왜 안됐을까? Uncaught TypeError: Cannot read property 'img' of undefined
  //   genRandom();
  // }
  // else{
  //   checkNumber.push(number);
  //   return number;
  // }
}


const paintScore = () => {
  scoreSpan.innerHTML = `Score:  ${score}`;
}

const paintTime = () => {
  if(time === 1) {
    location.href = "./gameOver.html"
    localStorage.setItem("numberLS", score);   // 로컬스토리지 통해서 값 저장하기 
  } else {
  time -= 1;
  timeSpan.innerHTML = `Time:  ${time}`;
  }
}

const paintImage = imgNumber => {
  const image = new Image(700, 600) ;
  image.src = `${data[imgNumber].img}`;
  name = (`${data[imgNumber].name}`);
  image.setAttribute("class", "mainFrame");
  image.classList.add("bgImage");
  body.appendChild(image);
}

const checkAnswerHandler = event => {
  event.preventDefault();
  if(event.target[0].value == name){
    const oscreen = document.createElement("div");
    oscreen.classList.add("right");
    oscreen.innerText += 'O';
    body.appendChild(oscreen);
    while (frame.hasChildNodes()) { 
      frame.removeChild( frame.firstChild ); 
    };
  for(let i = 0; i < 42; i++) {
    const block = document.createElement("div");
    block.classList.add(`mainFrame__block${i}`);
    frame.appendChild(block);
  };
  score += 100;
  init();
  } else{
    const xscreen = document.createElement("div");
    xscreen.classList.add("wrong");
    xscreen.innerText += 'X';
    body.appendChild(xscreen);
  }
  event.target[0].value = ""
}


const init = () => { 
  paintScore();
  let randomNumber =genRandom();
  setTimeout(() => {
    paintImage(randomNumber);
  }, 200);
}


answer.addEventListener("submit", checkAnswerHandler);

setInterval(() => {
  paintTime();
}, 1000); 
init();





