/* eslint-disable */

import jQuery from "jquery"
import Xhr from '../../../Engine/Xhr.js'
import EventDelegation from '../../../Engine/EventDelegation.js'

const Over = {}


Over.run = function() {


    Xhr.controller('about', myCallback);
    
    function myCallback(response, args) {
            const app = document.querySelector('#app');
        // Insert HTML
            app.insertAdjacentHTML('beforeend', response);
            console.log('insertAdjacentHTML from Over.js')
    }
    
    Xhr.onPopstate()
    
}

$('#h-link').on('click', Over.run)

export default Over
