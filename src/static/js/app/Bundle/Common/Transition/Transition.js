/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery";


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
var startScrollY = pageYOffset
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

        // var divsL = divs.length 
    console.log( direction ); // see the direction in the console
    if ( direction === 'down' && menuVisible) {
        // do something, like show the next page
        console.log('scrolling down');
        Transition.headerUp = new S.Timeline()
        const isObj3 = S.Is.object(Transition.headerUp)
        Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
        Transition.headerUp.play({delay: 500})
        menuVisible = false
    } else if ( direction === 'up' && !menuVisible ) {

        console.log('scrolling up');
        Transition.headerDown = new S.Timeline()
        const isObj4 = S.Is.object(Transition.headerDown)
        Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut'})
        Transition.headerDown.play({delay: 500})
        menuVisible = true

    } else if ( direction === 'down' && !menuVisible ) {
        
       // var divs = document.querySelectorAll('.h-txt-title')
        
        document.addEventListener("wheel", ColorLi);

        function ColorLi(e) {
            // let i = 0
            //let divs = [].slice.call(document.querySelectorAll(".h-txt-title"))
            const divs = [...document.querySelectorAll(".h-txt-title")];
            let length = divs.length
            console.log(divs)
            //reset colors
            
            //calculate index
            if(e.wheelDelta < 0) {
                
                for(var j = 0; j < length; j++) {
                    Transition.textIn = new S.Timeline()
                    const isObj5 = S.Is.object(Transition.textIn)
                    console.log(divs[j])
                    Transition.textIn.from({el: divs[j], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                    // Transition.textIn.from(divAni, "3dy", 100, 0, 500)
                    Transition.textIn.play({delay: 500})
                    break; 
                }
                i++
                j++
                console.log(i)
                console.log(j)
            }
            else {
                for(var i = 0; i < length; i++) {
                    Transition.textOut = new S.Timeline()
                    const isObj6 = S.Is.object(Transition.textOut)
                    Transition.textOut.from({el: divs[i], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
                    // Transition.textIn.from(divAni, "3dy", 100, 0, 500)
                    Transition.textOut.play({delay: 500})
                    console.log('for loop through h-txt-title')
                    console.log(divs[i])
                    console.log(i)
                    console.log(j)
                   
                }
                i--
                j--
            }
            //fix index out of range
            i = i < 0 ? 0 : i;
            i = i > length-1 ? length-1 : i;
            //set outro transition
            
            
        }

        
    }

     else {
        // this means the direction of the mouse wheel could not be determined
    }
    navigateTo()
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
