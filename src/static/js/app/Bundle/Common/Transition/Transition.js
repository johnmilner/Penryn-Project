/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery"


class Transition {
    constructor() {


    const body = S.Dom.body

    //this.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    this.idx = idx // idx is undefined, so getNextIdx will take 0 as default
    var scrollCount = 0
    this.length = this.arr.length
    let titleVis = false
    var currentStep = 0,
    nextStep;

      S.BindMaker(this, ['sectionInit', 'headerInit', 'scrollCb', 'scrollInit', 'open', 'getNewIndexAndRender', 'getNextIdx', 'updateViewIn', 'updateViewOut'])
    }


    init(t) {
        // console.log("init")
        this.first = !1
        this.listeners("add")
      }
      listeners(t) {
        // console.log(homesticky.listeners)
        S.Listen("#nav-link-submenu", t, "mouseenter", this.menuOpen)
        S.Listen("#nav-link-submenu", t, "mouseleave", this.menuClose)
      }

    open(t) {

    Transition.intro = new S.Timeline()
    const isObj = S.Is.object(Transition.intro)
    Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})

    Transition.outro = new S.Timeline()
    const isObj2 = S.Is.object(Transition.outro)
    Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})

    this.sectionInit()

}

detectMouseWheelDirection( e )
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

getNextIdx(idx = 0, length, direction) {
    switch (direction) {
        case 'init': this.updateViewIn(idx);
                     return idx 
        case 'next': this.updateViewIn(idx);
                     return (idx + 1) % length;
        case 'prev': this.updateViewOut(idx);
                     return (idx == 0) && length - 1 || idx - 1;


        // case 'next': return idx === 0 ? idx === 0 : (idx + 1) % length;
        // case 'prev': return (idx === 0) && length - 1 || idx - 1;
        default:     return idx;
        }
    }

updateViewIn(idx) {
    this.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    Transition.textIn = new S.Timeline()
    const isObj5 = S.Is.object(Transition.textIn)
    Transition.textIn.from({el: this.arr[idx], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
    Transition.textIn.play({delay: 500})
    Transition.textIn.pause()
}

updateViewOut(idx) {
    Transition.textOut = new S.Timeline()
    const isObj6 = S.Is.object(Transition.textOut)
    Transition.textOut.from({el: this.arr[idx], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
    Transition.textOut.play({delay: 500})
}

getNewIndexAndRender(direction) {
    this.idx = this.getNextIdx(this.idx, length, direction);

}

sectionInit() {
    this.getNewIndexAndRender('init')
    console.log('hello from section init')
}



headerInit() {
    Transition.headerUp = new S.Timeline()
    const isObj3 = S.Is.object(Transition.headerUp)
    Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
    Transition.headerUp.play({delay: 500})
    menuVisible = false
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
debounce(func, wait, immediate) {
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


scrollCb(currentScrollY, delta, event) {

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

scrollInit() {
    S.BindMaker(this, ['scrollCb'])

    this.scroll = new S.Scroll(this.scrollCb)

    scrollCb.scroll.run()
    // this.scroll.off()


    S.Listen(body, 'add', 'mouseWheel', headerInit, scrollCb('down'))
}


}

console.log('transition.js')

export default Transition
