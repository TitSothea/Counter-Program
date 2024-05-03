const LabelCount = document.getElementById("LabelCount");
const btndecrease = document.getElementById("btndecrease");
const btnreset= document.getElementById("btnreset");
const btnincrease = document.getElementById("btnincrease");

let count = 0;

btndecrease.onclick = function(){
    count--;
    LabelCount.textContent = count;
}

btnincrease.onclick = function(){
    count++;
    LabelCount.textContent = count;
}

btnreset.onclick = function(){
    count = 0;
    LabelCount.textContent = count;
}