let toggleBtn = document.getElementById("toggle-button");
// console.log(toggleBtn);
let toggleText = document.getElementById("toggle-text");
// console.log(toggleText);
let colors =["red","blue","yellow","green","greenyellow","brown"];
let flag = 0;

let handletoggle = function(){
    toggleText.style.color = colors[flag];
    flag++
    if(flag>=5){
        flag = 0;
    }
}

toggleBtn.addEventListener("click",handletoggle)