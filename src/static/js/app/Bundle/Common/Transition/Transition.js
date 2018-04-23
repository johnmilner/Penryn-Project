// /* eslint-disable */

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

Xhr.controller('about', tran, args);

function tran(response, args) {

    const Transition = new S.Timeline()
    Transition.from({el: '#sail', p: {y: [-100, 0]}, d: 5000, e: 'Power4InOut'})
    // Transition.from({el: '#about', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300})

    Transition.play()

    // Insert HTML
    app.insertAdjacentHTML('beforeend', response);

}

Xhr.onPopstate()

// Transition.pause()

// Transition.play({reverse: true})

export default Transition
