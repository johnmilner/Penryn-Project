/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery"


const Transition = {}

// const body = S.Dom.body

//this.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))

Transition.headerVisible = !0;
// Transition.currentStep = 0;
    
// Transition.incrementId = () => {
//     let id = 0
//     id++
//     return id
// }

//Transition.id = Transition.incrementId()
//Transition.id = 0;

Transition.currentStep = 0
Transition.nextStep = 0

// Transition.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
// Transition.arrTitle = [].slice.call(document.querySelectorAll(".h-client"))
// Transition.arrText = [].slice.call(document.querySelectorAll(".h-txt-desc-txt"))
// Transition.arrBotTitle = [].slice.call(document.querySelectorAll(".h-bottom-title"))
// Transition.arrBotRole = [].slice.call(document.querySelectorAll(".h-bottom-value-r"))
// Transition.arrBotAgency = [].slice.call(document.querySelectorAll(".h-bottom-value-a"))
// Transition.arrBotYear = [].slice.call(document.querySelectorAll(".h-bottom-value-y"))


// Transtion.init(t) = () => {
//     // console.log("init")
//     this.first = !1
//     this.listeners("add")
//     }

// listeners(t) {
// // console.log(homesticky.listeners)
// S.Listen("#nav-link-submenu", t, "mouseenter", this.menuOpen)
// S.Listen("#nav-link-submenu", t, "mouseleave", this.menuClose)
// }

Transition.open = function() {

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})

Transition.outro = new S.Timeline()
const isObj2 = S.Is.object(Transition.outro)
Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})

Transition.arr = S.Geb.class("h-txt-title")
Transition.arrTitle = S.Geb.class("h-client")
Transition.arrText = S.Geb.class("h-txt-desc-txt")
Transition.arrBotTitle = S.Geb.class("h-bottom-title")
Transition.arrBotRole = S.Geb.class("h-bottom-value-r")
Transition.arrBotAgency = S.Geb.class("h-bottom-value-a")
Transition.arrBotYear = S.Geb.class('h-bottom-value-y')
//Transition.descLine = S.Geb.id('h-txt-desc-line')


Transition.scrollInit()
}


    let debounce = function(func, wait, immediate) {
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

    function throttled(delay, fn) {
        let lastCall = 0;
        return function (...args) {
          const now = (new Date).getTime();
          if (now - lastCall < delay) {
            return;
          }
          lastCall = now;
          return fn(...args);
        }
      }


    
    // const huHandler = throttled(2000, headerUp)
    // const hdHandler = throttled(2000, headerDown)

        // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [37, 38, 39, 40];

    Transition.preventDefault = function(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
    }

    Transition.keydown = function(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                Transition.preventDefault(e);
                return;
            }
        }
    }

    Transition.wheel = function(e) {
    Transition.preventDefault(e);
    }

    Transition.disable_scroll = function() {
        const body = S.Dom.body
        S.Listen(body, 'remove', 'mouseWheel', Transition.headerScroll)

      }
      
     Transition.enable_scroll = function() {
        const body = S.Dom.body
        S.Listen(body, 'add', 'mouseWheel', Transition.headerScroll)
        

      }

    Transition.titleInit = function() {
    // All the taxing stuff you do
    // const arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    // const idx = 0;
    
    Transition.currentStep = 0
    
    const textInit = new S.Timeline()
    const isObj5 = S.Is.object(textInit)


    textInit.from({el: Transition.arr[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 3500})
    console.log('title text')
    textInit.from({el: Transition.arrText[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 3500})
    textInit.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 3500})

    textInit.from({el: Transition.arrBotTitle[0], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 3500})
    textInit.from({el: Transition.arrBotTitle[1], p: {y: [100, 0]}, d: 1500, e: 'Power4InOut', delay: 3500})
    textInit.from({el: Transition.arrBotTitle[2], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut', delay: 3500})

    textInit.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut', delay: 3500})
    textInit.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut', delay: 3500})
    textInit.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [100, 0]}, d: 2000, e: 'Power4InOut', delay: 3500})

    textInit.from({el: '#h-txt-desc-line', p: {x: [-110, 0]}, d: 2800, e: 'Power4InOut', delay: 3500})

    textInit.play({delay: 500, cb: Transition.enable_scroll})

    };

   Transition.reset = function() {

    const elReset = new S.Timeline()
    const isObj15 = S.Is.object(elReset)
    const t = -1

    elReset.from({el: Transition.arrBotTitle[0], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    elReset.from({el: Transition.arrBotTitle[1], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    elReset.from({el: Transition.arrBotTitle[2], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

    elReset.from({el: '#h-txt-desc-line', p: {x: [0, -110 * t]}, d: 1200, e: 'Power4InOut', cb: Transition.enable_scroll})

    console.log('hello from Transition.reset')
    elReset.play()
    

   }

   Transition.next = debounce(function() {
        // if (Transition.nextStep === 0) {
        //     return Transition.currentStep
        // }
        Transition.nextStep = Transition.currentStep + 1
        console.log('scrolling down - nextItem')
        Transition.currentStep = Transition.nextStep 
        Transition.disable_scroll() 
        return Transition.currentStep
        
    }, 250);

        
    //window.addEventListener('wheel', Transition.next);


    Transition.prev = debounce(function() {
        Transition.nextStep = Transition.currentStep - 1
        //for cirular array
        //Transition.nextStep = (Transition.currentStep + Transition.arr.length - 1) % Transition.arr.length
        console.log('scrolling up - prevItem')
        Transition.currentStep = Transition.nextStep 
        Transition.disable_scroll()

        console.log('currentStep: ' + Transition.currentStep)
        console.log('nextStep: ' + Transition.nextStep)

        if (Transition.currentStep === -1) {

            console.log('index 0 header down')
            // Transition.nextStep = 0
            // Transition.currentStep = Transition.nextStep
            Transition.headerDown()
            Transition.reset()
            } 

        return Transition.currentStep
        
    }, 250);
    
    //Transition.getChangePage = !0;
    //window.addEventListener('wheel', Transition.prev);

    //window.addEventListener('wheel', Transition.headerScroll);


Transition.headerScroll = (currentScrollY, delta, event) => {

    var delta = null,
    currentScrollY = false,
    event = window.event;
    // let currentStep = 0
    // let nextStep

    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // example use
    var div = document.querySelector('.header');
    var divOffset = offset(div);
    console.log(divOffset.top)


    Transition.headerUp = function() {

        Transition.disable_scroll() 
        Transition.headerUp = new S.Timeline()
        const isObj3 = S.Is.object(Transition.headerUp)
        Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
        Transition.headerUp.play({delay: 500, cb: Transition.titleInit})

        //console.log(divOffset.left, divOffset.top);

    };
    
    Transition.headerDown = function() {

        Transition.disable_scroll()
        Transition.headerDown = new S.Timeline()
        const isObj4 = S.Is.object(Transition.headerDown)
        Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut'})
        Transition.headerDown.play({delay: 500})
        //console.log(divOffset.left, divOffset.top);

    };

    

    Transition.n2 = function() {


        Transition.next()

        Transition.textInOut = new S.Timeline()
        const isObj8 = S.Is.object(Transition.textInOut)

        Transition.textInOut.from({el: '#h-txt-desc-line', p: {x: [0, -110]}, d: 1200, e: 'Power4InOut'})

        Transition.textInOut.from({el: Transition.arr[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrText[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        Transition.textInOut.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        
        Transition.textInOut.play({ cb: function() {

        
            Transition.textIn2 = new S.Timeline()
            const isObj9 = S.Is.object(Transition.textIn2)
            const t = -1

            Transition.textIn2.from({el: '#h-txt-desc-line', p: {x: [-110 * t, 0]}, d: 1200, e: 'Power4InOut'})

            Transition.textIn2.from({el: Transition.arr[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrText[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

            Transition.textIn2.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            
            Transition.textIn2.play({ cb: Transition.enable_scroll})

            }
        })

    }

    Transition.p2 = function() {

        Transition.prev()

        Transition.textOutIn = new S.Timeline()
        const isObj10 = S.Is.object(Transition.textOutIn)
        const t = -1

        Transition.textOutIn.from({el: '#h-txt-desc-line', p: {x: [0, -110 * t]}, d: 1200, e: 'Power4InOut'})

        Transition.textOutIn.from({el: Transition.arr[Transition.currentStep], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrText[Transition.currentStep], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})

        Transition.textOutIn.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
        
        Transition.textOutIn.play({cb: function() {


                Transition.textOut2 = new S.Timeline()
                const isObj11 = S.Is.object(Transition.textOut2)

                Transition.textOut2.from({el: '#h-txt-desc-line', p: {x: [-110, 0]}, d: 1200, e: 'Power4InOut'})

                Transition.textOut2.from({el: Transition.arr[Transition.currentStep], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrText[Transition.currentStep], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})

                Transition.textOut2.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
                
                Transition.textOut2.play({cb: Transition.enable_scroll})
        
        }})

    }


    if ( !event ) { // if the event is not provided, we get it from the window object
        event = window.event;
    }
    if ( event.wheelDelta ) { // will work in most cases
        delta = event.wheelDelta / 60;
    } else if ( event.detail ) { // fallback for Firefox
        delta = -event.detail / 2;
    }
    if ( delta !== null) {
        //const arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
        
        if (delta < 0 && divOffset.top === 30) {
            
            Transition.headerUp()
            //Transition.titleInit()

        } else if (delta > 0 && divOffset.top < -600) {

            Transition.p2()


        } else if (delta < 0 && divOffset.top < -600) {

            Transition.n2()
            
        } 

    }
}


Transition.scrollInit = () => {
    const body = S.Dom.body
    //S.BindMaker(this, ['Transition.headerScroll'])
    //S.scroll = new S.Scroll(Transition.headerScroll)
    S.Listen(body, 'add', 'mouseWheel', Transition.headerScroll)

    
    // this.scroll.on()
    // this.scroll.off()
    console.log('hello from scroll init')
}

console.log('transition.js')

export default Transition
