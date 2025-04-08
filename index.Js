const mySound = document.getElementById('mysound'); 
const icon = document.getElementById('icon');
console.log(mySound, icon);
icon.onclick = function(){
    if(mySound.paused){
        mySound.play();
        icon.src = './media/play.png'
    }
    else {
        mySound.pause();
        icon.src = './media/play.png'
    }}