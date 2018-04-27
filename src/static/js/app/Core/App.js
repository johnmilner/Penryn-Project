import S from 'skylake'
import Support from './Support.js'
import Route from './Route.js'
import Vendor from './Vendor.js'

class App {

    constructor () {
        window.Penryn = window.Penryn || {}

        Support.init()

        S.TopWhenRefresh()

        new Route()
    }

}

export default App
