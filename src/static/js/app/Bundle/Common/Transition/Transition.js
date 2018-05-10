/* eslint-disable */

import S from 'skylake'

const Transition = {}

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})
// Transition.from({el: '#about', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300})

Transition.outro = new S.Timeline()
const isObj2 = S.Is.object(Transition.outro)
Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})



  
var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = '.header';
var eleHeader = null;


// const classes = {
// pinned: 'header-pin',
// unpinned: 'header-unpin',
// };


// function onScroll() {
// currentScrollY = window.pageYOffset;
// console.log(currentScrollY)
// requestTick();
// }


// function requestTick() {
// if (!ticking) {
//     requestAnimationFrame(update);
// }
// ticking = true;
// }

// function update() {
// if (currentScrollY < lastKnownScrollY) {
//     pin();
// } else if (currentScrollY > lastKnownScrollY) {
//     unpin();
// }
// lastKnownScrollY = currentScrollY;
// ticking = false;
// }



    Transition.headerUp = new S.Timeline()
    const isObj3 = S.Is.object(Transition.headerUp)
    Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1600, e: 'Power4InOut', delay: 500})
    



    Transition.headerDown = new S.Timeline()
    const isObj4 = S.Is.object(Transition.headerDown)
    Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1600, e: 'Power4InOut', delay: 500})
    
    

window.onload = function() {

window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
        console.log('scrolling up');
        Transition.headerDown.play()
        // document.getElementById('status').innerHTML = 'scrolling up';
    }
    if (e.deltaY > 0) {
        console.log('scrolling down');
        Transition.headerUp.play()
        // document.getElementById('status').innerHTML = 'scrolling down';
    }
    });

// const eleHeader = document.querySelector('.header');
// console.log(eleHeader);

// document.addEventListener('wheel', onScroll, false);

}

// Transition.intro.play()
console.log('transition.js')
// Transition.pause()
// Transition.play({reverse: true})

export default Transition
