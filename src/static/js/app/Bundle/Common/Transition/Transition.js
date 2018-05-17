/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery"


const Transition = {}

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})
// Transition.from({el: '#about', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300})

Transition.outro = new S.Timeline()
const isObj2 = S.Is.object(Transition.outro)
Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})





var ticking = false
var header = document.querySelector('.header')
var result = document.querySelector('.h-txt-title')
var isMoving = false
var menuVisible = true
console.log(pageYOffset)

function detectMouseWheelDirection( e )
{
    var delta = null,
        dir = false
    ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        dir = delta > 0 ? 'up' : 'down';
    }

    return dir;
}

let arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
const body = S.Dom.body 

var scrollCount = 0
const length = arr.length
let titleVis = false
var currentStep = 0,
nextStep;
        


const getNextIdx = (idx = 0, length, direction) => {
    switch (direction) {
        case 'init': return idx 
        case 'next': updateViewIn(idx);
                        return (idx + 1) % length;
        case 'prev': updateViewOut(idx);
                        return (idx == 0) && length - 1 || idx - 1;


        // case 'next': return idx === 0 ? idx === 0 : (idx + 1) % length;
        // case 'prev': return (idx === 0) && length - 1 || idx - 1;
        default:     return idx;
        }
    }

let updateViewIn = (idx) => {
    Transition.textIn = new S.Timeline()
    const isObj5 = S.Is.object(Transition.textIn)
    Transition.textIn.from({el: arr[idx], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
    Transition.textIn.play({delay: 500})
    Transition.textIn.pause()
}

let updateViewOut = (idx) => {
    Transition.textOut = new S.Timeline()
    const isObj6 = S.Is.object(Transition.textOut)
    Transition.textOut.from({el: arr[idx], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
    Transition.textOut.play({delay: 500})
}

let idx; // idx is undefined, so getNextIdx will take 0 as default
const getNewIndexAndRender = (direction) => {
idx = getNextIdx(idx, length, direction);

}

 let sectionInit = () => {
    getNewIndexAndRender('init')
    console.log('hello from section init')
}

let headerInit = () => {
    Transition.headerUp = new S.Timeline()
    const isObj3 = S.Is.object(Transition.headerUp)
    Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
    Transition.headerUp.play({delay: 500})
    sectionInit()
    menuVisible = false
}

// sectionInit({delay: 3000})



    // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    };


S.Listen(body, 'add', 'mouseWheel', headerInit)

console.log('transition.js')

export default Transition
