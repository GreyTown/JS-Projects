const increment_btn = document.getElementById('increment-btn');
const placeHolder = document.getElementById('hech1');

let count = 0;

// 
function addCount() {
        count ++;
     } 
increment_btn.onclick = () => {
     addCount()
}    
function printNumber(num) {
     placeHolder.innerHTML = num
}
let result = addCount()
printNumber(result)