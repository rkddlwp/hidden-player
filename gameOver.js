const finalScore = document.querySelector(".FinalScore")
let value = localStorage. getItem("numberLS");  //playPage에 스코어 가져오기 

finalScore.innerHTML = `Your Score:  ${value}`;