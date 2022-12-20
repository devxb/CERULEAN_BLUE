let clickBox = document.querySelector('.check-menu');
let menuBar= document.querySelectorAll('.menu-bar');
let animateClass = ['last-bar', 'middle-bar1', 'middle-bar2', 'top-bar'];

clickBox.addEventListener("click", function() {
    for(let i=0; i<menuBar.length; i++) {
        menuBar[i].classList.toggle(animateClass[i]);
      }
  })

let leftBtn = document.querySelector('.left-button');
let rightBtn = document.querySelector('.right-button');
let windowElements = document.querySelectorAll('.window-element');
let windowIdx = document.querySelector('.window-idx');
let currentWindowElement = 0;
var windowIdxElements;

window.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < windowElements.length; i++){
        windowIdx.innerHTML += '<div class="window-idx-element"></div>';
    }
    windowIdxElements = this.document.querySelectorAll('.window-idx-element');
    windowIdxElements[0].style.background='#2d2d2d';
});

leftBtn.addEventListener("click", function() {
    windowIdxElements[-1*currentWindowElement].style.transitionDuration = '500ms';
    windowIdxElements[-1*currentWindowElement].style.background='lightgray';
    currentWindowElement++;
    if(currentWindowElement > 0) currentWindowElement = -1*(windowElements.length-1);
    windowIdxElements[-1*currentWindowElement].style.transitionDuration = '500ms';
    windowIdxElements[-1*currentWindowElement].style.background='#2d2d2d';
    for(let i = 0; i<windowElements.length; i++){
        windowElements[i].style.transitionDuration = '500ms';
        windowElements[i].style.transform = 'translateX(' + (currentWindowElement * 100) + '%)';
    }
})

rightBtn.addEventListener("click", function() {
    windowIdxElements[-1*currentWindowElement].style.transitionDuration = '500ms';
    windowIdxElements[-1*currentWindowElement].style.background='lightgray';
    currentWindowElement--;
    if(-1*currentWindowElement >= windowElements.length) currentWindowElement = 0;
    windowIdxElements[-1*currentWindowElement].style.transitionDuration = '500ms';
    windowIdxElements[-1*currentWindowElement].style.background='#2d2d2d';
    for(let i = 0; i<windowElements.length; i++){
        windowElements[i].style.transitionDuration = '500ms';
        windowElements[i].style.transform = 'translateX(' + (currentWindowElement * 100) + '%)';
    }
})

let menuBtn = document.querySelector('.check-menu');
let popUpMenu = document.querySelector('.pop-up-menu');

menuBtn.addEventListener("click", function(){
    if(document.querySelector('.pop-up-menu-wrap').style.display=="none") {
        document.querySelector('.pop-up-menu-wrap').style.display='flex';
        popUpMenu.style.animation = 'categoryfadein 0.1s ease-in-out';
        document.querySelector('.pop-up-menu-wrap').style.background="rgba(0,0,0,0.6)";
        return;
    }
    else if(document.querySelector('.pop-up-menu-wrap').style.display=="flex"){
        document.querySelector('.pop-up-menu-wrap').style.display='none';
        document.querySelector('.pop-up-menu-wrap').style.background="rgba(0,0,0,0)";
    }
})