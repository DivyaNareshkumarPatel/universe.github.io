let body = document.querySelector('.body');
let layer = document.querySelectorAll('.layer');
body.onmousemove = function(e){
    let X = e.pageX;
    let Y = e.pageY;
    for(i=0; i<7; i++){
        layer[i].style.transform = 'translate('+X/100*(i*(-1))+'px, '+Y/100*(i*(-1))+'px)';
    }
}