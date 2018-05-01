/* eslint-disable */

import Loader from '../../app/Bundle/Common/Transition/Loader.js'
import Transition from '../../app/Bundle/Common/Transition/Transition.js'
import Xhr from '../../Engine/Xhr.js'
import Listeners from '../../Engine/Listeners.js'
import S from 'skylake'

//import Router from '../../Engine/Router.js'
// import Over from '../Bundle/Common/Over.js'
// import Resize from '../Bundle/Home/Resize.js'
console.dir(Listeners)

class HomeController extends Listeners {

    constructor () {
        super(Listeners)
        console.dir(Listeners)
        console.log('home constructor')
        this.init({
            click: [
                {
                    el: '#h-link',
                    //module: Over,
                    method: 'run'
                }
            ],
            ro: {
                throttle: {
                    delay: 200,
                    atEnd: true
                }
                // module: Resize,
                // method: 'calculate'
            }
        })
    }

    preload (opts) {
        //Loader.run({cb: this.intro()})
        Loader.run({cb: homeXhr()})
        console.log('Loader.run from HomeController')
        
    }

    intro (opts) {
        Transition.intro.play()
        console.log('Transition.intro from HomeController')
        this.outro()
    }

    outro (done, listeners) {
        // listeners.remove({
        //     destroy: true
        // })
        console.log('Transition.outro from HomeController')
        Transition.outro.play(done)
    }

}
const homeXhr = function() {
Xhr.controller('/', myCallback);

function myCallback(response, args) {

    // Insert HTML
        xhr.insertAdjacentHTML('beforeend', response);

}

Xhr.onPopstate()

}

// const aboutXhr = function() {

// S.Listen('#h-link', 'add', 'click', function() {

//     Xhr.controller('about', myCallback, Listeners.preload);

//     function myCallback(response, args) {
//     // Insert HTML
//         xhr.insertAdjacentHTML('beforeend', response);
//         console.log('home xhr listeners click')
//     }
//     })

//     Xhr.onPopstate()

// }

export default HomeController







// import Loader from '../Bundle/Common/Transition/Loader.js'
// import Transition from '../Bundle/Common/Transition/Transition.js'
// import Listeners from '../Bundle/Common/Listeners/Listeners.js'
// import S from 'skylake'

// class HomeController {

//     constructor (Listeners) {
//         console.log('run from homeController listeners init')
//         Listeners.init({
//             click: [
//                 {
//                     moduleInit: true,
//                     outroM: true,
//                     el: '#xhr',
//                     module: Transition,
//                     method: 'run'
//                 }
//             ],
//             ro: {
//                 throttle: {
//                     delay: 200,
//                     atEnd: true
//                 },
//                 module: Resize,
//                 method: 'calculate'
//             }
//         })
//     }
//     preload (opts) {
//         opts.listeners.add()
//         console.log('run from homecontroller preload')
//     }
//     intro (opts) {
//         opts.listeners.add()
//         Transition.isObj()
//         console.log('run from homecontroller intro')
//     }
//     outro (done, listeners) {
//         console.log('run from homecontroller outro')
//         listeners.remove({
//             destroy: true
//         })
//     }

// }

// // class HomeController {

// //     preload () {
// //         Loader.run({
// //             listeners: Listeners,
// //             Loader: Loader
// //         })
// //         console.log('run from homecontroller preload')
// //     }

// //     intro () {
// //         Transition.intro({
// //             listeners: Listeners,
// //             isObj: Transition
// //         })
// //         console.log('run from homecontroller intro')
// //     }

// //     outro () {
// //         Transition.outro({
// //             listeners: Listeners
// //         })
// //         console.log('run from homecontroller outro')
// //     }

// // }

// export default HomeController
