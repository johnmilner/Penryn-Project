import Loader from '../Bundle/Common/Transition/Loader.js'
import Transition from '../Bundle/Common/Transition/Transition.js'
import Listeners from '../Bundle/Common/Listeners/Listeners.js'

// class HomeController {

//     preload () {
//         Loader.run({
//             listeners: Listeners
//         })
//     }

//     intro () {
//         Transition.intro({
//             listeners: Listeners
            
//         })
//     }

//     outro () {
//         Transition.outro({
//             listeners: Listeners
//         })
//     }

// }

class HomeController {
    constructor (Listeners) {
        Listeners.init({
            mouseenter: [
                {
                    el: '.header',
                    module: Over,
                    method: 'run'
                }
            ],
            ro: {
                throttle: {
                    delay: 200,
                    atEnd: true
                },
                module: Resize,
                method: 'calculate'
            }
        })
    }
    preload (opts) {
        opts.listeners.add()
    }
    intro (opts) {
        opts.listeners.add()
    }
    outro (done, listeners) {
        listeners.remove({
            destroy: true
        })
    }
}

// export default new MyModule()
export default HomeController
