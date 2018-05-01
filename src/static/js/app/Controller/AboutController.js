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

class AboutController extends Listeners {

    constructor () {
        super(Listeners)
        console.dir(Listeners)
        console.log('about constructor')
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
        Loader.run({cb: this.intro()})
        console.log('Loader.run from AboutController')
        
    }

    intro (opts) {
        Transition.intro.play()
        console.log('Transition.intro from AboutController')
        this.outro()
    }

    outro (done, listeners) {
        // listeners.remove({
        //     destroy: true
        // })
        console.log('Transition.outro from AboutController')
        Transition.outro.play(done)
    }

}

export default AboutController
