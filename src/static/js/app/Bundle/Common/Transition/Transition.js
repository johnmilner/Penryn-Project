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

// window.onload = function() {

// var ticking = false
// var startScrollY = pageYOffset
// var isMoving = false
// var menuVisible = true
// console.log(pageYOffset)

// Transition.callback = function() {
// window.addEventListener('wheel', function(e) {
//     var lastKnownScrollY = 0;
//     var currentScrollY = e.deltaY;
//     var header = document.querySelector('.header')
    

//     if (isMoving) return;
//     // if (menuVisible) return;
//     if (e.deltaY < 0 && !menuVisible) {
//         console.log('scrolling up');
//         Transition.headerDown = new S.Timeline()
//         const isObj4 = S.Is.object(Transition.headerDown)
//         Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut'})
//         Transition.headerDown.play({delay: 500})
//         menuVisible = true
//     } 
//     if (e.deltaY > 0 && menuVisible) {
//         console.log('scrolling down');
//         Transition.headerUp = new S.Timeline()
//         const isObj3 = S.Is.object(Transition.headerUp)
//         Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
//         Transition.headerUp.play({delay: 500})
//         console.log(currentScrollY)
//         menuVisible = false
//     }
//     navigateTo()
//     });
// }
// let st

// function navigateTo(){
//     isMoving = true;
//     menuVisible ? false : true
//     // currentScrollY = pageYOffset
//     let st = setTimeout(function() {
//     isMoving = false;
//     }, 2000);
// }

// function myStopFunction() {
//     clearTimeout(st);
// }

// myStopFunction()

var ticking = false
var header = document.querySelector('.header')
var result = document.querySelector('.h-txt-title')
var isMoving = false
var menuVisible = true
console.log(pageYOffset)

function detectMouseWheelDirection( e )
{
    var delta = null,
        direction = false
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
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}

function handleMouseWheelDirection( direction ) {

        let arr = [].slice.call(document.querySelectorAll(".h-txt-title"))

        var scrollCount = 0
        const length = arr.length
        let titleVis = false
        var currentStep = 0,
        nextStep;
        


        const getNextIdx = (idx = 0, length, direction) => {
            switch (direction) {
                case 'init': return idx
                case 'next': updateViewIn(idx) 
                             return (idx + 1) % length;

                case 'prev': updateViewOut(idx) 
                             return (idx === 0) && length - 1 || idx - 1;;
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
        }

        let updateViewOut = (idx) => {
            Transition.textIn.play({reverse: true})

        }

        let idx; // idx is undefined, so getNextIdx will take 0 as default
        const getNewIndexAndRender = (direction) => {
        idx = getNextIdx(idx, length, direction);
        //!titleVis ? updateViewIn(idx) : updateViewOut(idx)
        //result.innerHTML = arr[idx]

        }

        let sectionInit = () => {
            getNewIndexAndRender('init')
            console.log('hello from section init')
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

    console.log( direction ); // see the direction in the console

    if ( direction === 'down' && menuVisible) {
        // do something, like show the next page
        console.log('scrolling down');
        Transition.headerUp = new S.Timeline()
        const isObj3 = S.Is.object(Transition.headerUp)
        Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
        Transition.headerUp.play({delay: 500})
        menuVisible = false
        
        sectionInit({delay: 3000})


        var screenRelativeTop =  $(".header").offset().top - (window.scrollY || 
            window.pageYOffset || document.body.scrollTop);
        console.log(screenRelativeTop)

        // document.addEventListener('wheel', function (e) {
        //     if (e.wheelDelta < 0 && scrollCount < 4 && !menuVisible) {
        //         scrollCount++;
        //         console.log('scrolling down - nextItem')
        //         getNewIndexAndRender('next')   
        //     }
        // });
    
        // document.addEventListener('wheel', function (e) {
        //     if (e.wheelDelta > 0 && scrollCount >= 1 && !menuVisible) {
        //         scrollCount--;
        //         console.log('scrolling up - prevItem')
        //         getNewIndexAndRender('prev')
        //         }
        // });
        

        var next = debounce(function() {
            // All the taxing stuff you do
            nextStep = currentStep + 1
            if (direction === 'down' && nextStep <= length) {
                console.log('scrolling down - nextItem')
                getNewIndexAndRender('next')
                currentStep = nextStep   
            }
        }, 100);

        
        window.addEventListener('wheel', next);


    } else if (direction === 'up') {

        var prev = debounce(function() {
            // All the taxing stuff you do
            menuVisible = false
            nextStep = currentStep - 1
            if (direction === 'up' && !menuVisible && nextStep <= length) {
                console.log('scrolling up - prevItem')
                getNewIndexAndRender('prev')
                currentStep = nextStep   
            }
        }, 100);
        
        window.addEventListener('wheel', prev);


        // console.log('scrolling up');
        // Transition.headerDown = new S.Timeline()
        // const isObj4 = S.Is.object(Transition.headerDown)
        // Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut'})
        // Transition.headerDown.play({delay: 500})
        // menuVisible = true

    } 
     else {

        
        // this means the direction of the mouse wheel could not be determined
    }
    // navigateTo()
}

let st

function navigateTo(){
    isMoving = true;
    //menuVisible ? false : true
    // currentScrollY = pageYOffset
    let st = setTimeout(function() {

    isMoving = false;

    }, 2000);
}

function myStopFunction() {
    clearTimeout(st);
}

myStopFunction()

document.onmousewheel = function( e ) {
    handleMouseWheelDirection( detectMouseWheelDirection( e ) );
};
if ( window.addEventListener ) {

    document.addEventListener( 'DOMMouseScroll', function( e ) {
        handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });

}

// }

// Transition.intro.play()
console.log('transition.js')
// Transition.pause()
// Transition.play({reverse: true})

export default Transition
