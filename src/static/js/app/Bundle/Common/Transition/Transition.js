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
                
        //document.addEventListener("wheel", ColorLi);

        //function ColorLi(e) {
            // let i = 0
            let arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
            // let len = arr.length;
            // let index = 0
            var scrollCount = 1
            const length = arr.length
            let titleVis = false
            // var current=arr[i];
           
            // document.querySelectorAll('.h-txt-title').textContent = arr[i]
            // const divs = [...document.querySelectorAll(".h-txt-title")];
            //const divs = document.querySelectorAll('.h-txt-title')
            // let length = divs.length
            // console.log(divs)

            // function nextItem() {
            //     // scrollCount++;
            //     //i += 1
            //     var next=arr[(i+1)%len];

            //     // scrollCounter = arr[i]// i = i % arr.length; // if we've gone too high, start from `0` again
            //     return next; // give us back the item of where we are now
           
            // }

            // function prevItem() {
            //     // scrollCount--;
            //     //i -= 1 
            //     var prev=arr[(i+len-1)%len];

            //     //scrollCounter = arr[i] // decrease by one
            //     return prev; // give us back the item of where we are now

            // }

            // let getNextIndex = () => {
            //     if (nextIndex === arr.length || index === 0) {
            //        return 0;
            //     } else {
            //        var nextIndex = index++;
            //        return nextIndex;
            //     }
            // }
            // let getPreviousIndex = () => {
            //     var previousIndex = index - 1;
            //     if (previousIndex === -1) {
            //        return arr.length - 1;
            //     } else {
            //          return previousIndex;
            //     }
            // }

            const getNextIdx = (idx = 0, length, direction) => {
                switch (direction) {
                  case 'next': return (idx + 1) % length;
                  case 'prev': return (idx == 0) && length - 1 || idx - 1;
                  default:     return idx;
                }
             }

            let updateViewIn = (idx) => {
                titleVis = true
                Transition.textIn = new S.Timeline()
                const isObj5 = S.Is.object(Transition.textIn)
                Transition.textIn.from({el: arr[idx], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                Transition.textIn.play({delay: 500})
            }

            let updateViewOut = (idx) => {
                titleVis = false
                Transition.textIn = new S.Timeline()
                const isObj5 = S.Is.object(Transition.textIn)
                Transition.textIn.from({el: arr[idx], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
                Transition.textIn.play({delay: 500})
            }

            let idx; // idx is undefined, so getNextIdx will take 0 as default
             const getNewIndexAndRender = (direction) => {
                idx = getNextIdx(idx, length, direction);
                //result.innerHTML = messages[idx]
                !titleVis ? updateViewIn(idx) : updateViewOut(idx)
             }

            document.addEventListener('wheel', function (e) {
                    if (e.wheelDelta < 0) {
                        //scrollCount++;
                        // console.log('scrolling down - nextItem')
                        // let val = nextItem()

                        //let idx = getNextIndex();
                        // getNextIdx()
                        // updateViewIn(idx)
                        getNewIndexAndRender('next')
                        
                    }
                    //scrollCount = true

                }
            );
            
            document.addEventListener('wheel', function (e) {
                if (e.wheelDelta > 0) {
                    //scrollCount--;
                    // console.log('scrolling up - prevItem')
                    // let val2 = prevItem()

                    //let idx = getPreviousIndex();
                    // getNextIdx()
                    // updateViewOut(idx)
                    getNewIndexAndRender('prev')

                }
             }
            );




        //     var slides = document.getElementsByClassName("h-txt-title");
        //     Array.prototype.forEach.call(slides, function(slide, index) {
        //         //Distribute(slides.item(index));
        //     if (e.wheelDelta < 0 ) {
        //             Transition.textIn = new S.Timeline()
        //             const isObj5 = S.Is.object(Transition.textIn)
        //             Transition.textIn.from({el: slides.item(index), p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
        //             Transition.textIn.play({delay: 500})
        //     } else if ( e.wheelDelta > 0 ) {
        //             Transition.textOut = new S.Timeline()
        //             const isObj6 = S.Is.object(Transition.textOut)
        //             Transition.textOut.from({el: slides.item(index), p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
        //             // Transition.textIn.from(divAni, "3dy", 100, 0, 500)
        //             Transition.textOut.play({delay: 500})

        //     // }
        //     }
        // })

            // Array.prototype.forEach.call(divs, function(child) {
            //     if (e.wheelDelta < 0 ) {
            //         Transition.textIn = new S.Timeline()
            //         const isObj5 = S.Is.object(Transition.textIn)
            //         Transition.textIn.from({el: child, p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
            //         Transition.textIn.play({delay: 500})
            // } else if ( e.wheelDelta > 0 ) {
            //         Transition.textOut = new S.Timeline()
            //         const isObj6 = S.Is.object(Transition.textOut)
            //         Transition.textOut.from({el: child, p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
            //         // Transition.textIn.from(divAni, "3dy", 100, 0, 500)
            //         Transition.textOut.play({delay: 500})

            // }
            // });

            // var boxArray = []; 
            // let i = 0

            // $('.h-txt-title').toArray().map((x, y, z) => {
            // if (y === 0 || y === 1 || y === 2 || y === 3) boxArray.push($(x));
            // });

            // boxArray.forEach(box => {
            // if (e.wheelDelta < 0 ) {
            //         Transition.textIn = new S.Timeline()
            //         const isObj5 = S.Is.object(Transition.textIn)
            //         Transition.textIn.from({el: box[0], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
            //         Transition.textIn.play({delay: 500})
            // } else if ( e.wheelDelta > 0 ) {
            //         Transition.textOut = new S.Timeline()
            //         const isObj6 = S.Is.object(Transition.textOut)
            //         Transition.textOut.from({el: box[0], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
            //         // Transition.textIn.from(divAni, "3dy", 100, 0, 500)
            //         Transition.textOut.play({delay: 500})

            // }
            // });
            
            
        
    // }
        
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
