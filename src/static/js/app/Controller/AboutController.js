/* eslint-disable */

import Loader from '../../app/Bundle/Common/Transition/Loader.js'
import Transition from '../../app/Bundle/Common/Transition/Transition.js'
import Xhr from '../../Engine/Xhr.js'
import EventDelegation from '../../Engine/EventDelegation.js'
import Listeners from '../../Engine/Listeners.js'
import S from 'skylake'
//import Over from '../Bundle/Common/Over.js'

//import Router from '../../Engine/Router.js'
// import Resize from '../Bundle/Home/Resize.js'
console.dir(Listeners)

class AboutController extends Listeners {

    constructor () {
        super(Listeners)
        console.dir(Listeners)
        console.log('about constructor')
        this.init({
            mouseenter: [
                {
                    el: '#a-link',
                    module: Listeners,
                    method: 'destHome'
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
        //Loader.run()
        console.log('Loader.run from AboutController')
        EventDelegation.destHome()
    }

    intro (opts) {
        Transition.intro.play()
        
        console.log('Transition.intro from HomeController')
        this.outro()
    }

    outro (done, listeners) {
        // this.remove({
        //     destroy: true
        // })
        console.log('Transition.outro from HomeController')
        Transition.outro.play(done)
        
    }

}

export default AboutController
