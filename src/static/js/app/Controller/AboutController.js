/* eslint-disable */

import Loader from '../../app/Bundle/Common/Transition/Loader.js'
import Transition from '../../app/Bundle/Common/Transition/Transition.js'
import Xhr from '../../Engine/Xhr.js'
import EventDelegation from '../../Engine/EventDelegation.js'
import Listeners from '../../Engine/Listeners.js'
import Vendor from '../Core/Vendor.js'
import S from 'skylake'

console.dir(Listeners)

class AboutController extends Listeners {

    constructor () {
        super(Listeners)
        moduleInit: true
        console.dir(Listeners)
        console.log('about constructor')
        this.init({
            mouseenter: [
                {
                    el: '#a-link',
                    module: EventDelegation,
                    method: 'destHome',
                    outroM: this.outroM
                }
            ],
            // click: [
            //     {
            //         el: '#burger',
            //         module: Vendor,
            //         method: 'bindButtonClick'
            //     }
            // ],
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
        //EventDelegation.prototype.run()
        EventDelegation.destHome()

    }

    intro (opts) {
        Transition.intro.play()
        console.log('Transition.intro from AboutController')
        this.outro()
    }

    outro (done, listeners) {
        Listeners.prototype.remove({
            destroy: true
        })
        console.log('Transition.outro from AboutController')
        Transition.outro.play()

    }

}

export default AboutController
