const frame = document.querySelector(".mainFrame"); 
const submit = document.querySelector(".answerForm");

for(let i = 0; i < 42; i++) {
  const block = document.createElement("div");
  block.classList.add(`mainFrame__block${i}`);
  frame.appendChild(block);
}

const blocks = document.querySelector("div");

const blocksRemoveHandler = event => {
  frame.removeChild(event.target);
 }

if(blocks){
blocks.addEventListener("click", blocksRemoveHandler);
};






