/* eslint-disable */

import Loader from '../../app/Bundle/Common/Transition/Loader.js'
import Transition from '../../app/Bundle/Common/Transition/Transition.js'
import Xhr from '../../Engine/Xhr.js'
import EventDelegation from '../../Engine/EventDelegation.js'
import Listeners from '../../Engine/Listeners.js'
import S from 'skylake'
import AboutController from './AboutController.js';
//import Over from '../Bundle/Common/Over.js'

//import Router from '../../Engine/Router.js'
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
                    module: EventDelegation,
                    method: 'run'
                }
            ],
            click: [
                {
                    el: '#burger',
                    module: EventDelegation,
                    method: 'myFunction'
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
        console.log('Loader.run from HomeController')
        //EventDelegation.prototype.run()
        EventDelegation.destAbout()

    }

    intro (opts) {
        Transition.intro.play()
        console.log('Transition.intro from HomeController')
        this.outro()
    }

    outro (done, listeners) {
        Listeners.prototype.remove({
            destroy: true
        })
        console.log('Transition.outro from HomeController')
        Transition.outro.play()

    }

}

export default HomeController
