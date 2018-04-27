/* eslint-disable */
import S from 'skylake'
import Xhr from '../../../../Engine/Xhr.js'





// CONTROLLER
// ──────────

// Xhr.controller(pageName, myCallback, args);

// function myCallback(response, args) {

//     // Insert HTML
//     app.insertAdjacentHTML('beforeend', response);

// }

// ONPOPSTATE
// ──────────

// Xhr.onPopstate()

const intro = function() {
    const tl = new S.Timeline()
    S.L('.header', 'add', 'scroll', intro)
    const isObj = S.Is.object(tl)
    tl.from({el: '.header', p: {opacity: [0, 1]}, d: 1000, e: 'ExpoIn'})
    tl.from({el: '.tagline', p: {y: [100, 0]}, d: 1600, e: 'Power4InOut', delay: 500})
  
    tl.from({el: '#burger-border-wrap', p: {opacity: [0, .6]}, d: 1500, e: 'ExpoOut', delay: 250})
    tl.from({el: '.burger-line-hover', p: {x: [105, 0]}, d: 1000, e: 'ExpoOut', delay: 250})
    tl.from({el: '#burger-mask', p: {y: [100, -100]}, d: 2000, e: 'ExpoOut', delay: 750})
    
    tl.play()
  }

Xhr.controller('home', tran, intro);

function tran(response, args) {
    // Insert HTML
    app.insertAdjacentHTML('beforeend', response);

}

Xhr.onPopstate()

// Transition.pause()

// Transition.play({reverse: true})


export default Transition
