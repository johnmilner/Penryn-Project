import Loader from '../Bundle/Common/Loader.js'
import Transition from '../Bundle/Common/Transition.js'

class ErrorController {

    constructor (Listeners) {
        console.log('error constructor')
    }

    preload (opts) {
        Loader.run(opts)
    }

    outro (opts) {
        Transition.outro(_ => {
            opts.done('error')
        })
    }

}

export default ErrorController
