let count = 3;
let slide = document.querySelectorAll(".slide");
setInterval(function(){
    nextImage()
}, 4500);
function nextImage(){ 
    slide[count].style.opacity = 0
    count--;
    if(count < 1 ){
        count = 3;
    }
    slide[count].style.opacity = 1
}