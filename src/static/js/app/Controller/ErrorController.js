import Loader from '../Bundle/Common/Transition/Loader.js'
import Transition from '../Bundle/Common/Transition/Transition.js'
import Listeners from '../Bundle/Common/Listeners/Listeners.js'

class ErrorController {

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

export default ErrorController
