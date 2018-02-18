import Loader from '../Bundle/Common/Transition/Loader.js'
import Transition from '../Bundle/Common/Transition/Transition.js'
import Listeners from '../Bundle/Common/Listeners/Common.js'

class AboutController {

    preload () {
        Loader.run({
            listeners: Listeners
        })
    }

    intro () {
        Transition.intro({
            listeners: Listeners
        })
    }

    outro () {
        Transition.outro({
            listeners: Listeners
        })
    }

}

export default AboutController
