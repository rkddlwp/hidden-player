const frame = document.querySelector(".mainFrame"); 
const submit = document.querySelector(".answerForm");

for(i = 0; i < 42; i++) {
  const block = document.createElement("div");
  block.classList.add(`mainFrame__block${i}`);
  frame.appendChild(block);
}

const blocks = document.querySelector("div");

function getThat(event){
  frame.removeChild(event.target)
 }

if(blocks){
blocks.addEventListener("click", getThat)
};






