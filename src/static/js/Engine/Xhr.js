/*

CONTROLLER
──────────

Xhr.controller(pageName, myCallback, args);

function myCallback(response, args) {

    // Insert HTML
    app.insertAdjacentHTML('beforeend', response);

}

ONPOPSTATE
──────────

Xhr.onPopstate()

*/

import S from 'skylake'
import EventDelegation from './EventDelegation.js'

class Xhr {

    static controller (page, callback, args) {
        const path = 'index.php?url=' + page + '&xhr=true'
        const xhr = new XMLHttpRequest()
        const pageEl = S.Geb.id('xhr')

        xhr.open('GET', path, true)
        console.log('Xhr class controller loaded')

        xhr.onreadystatechange = _ => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const xhrC = JSON.parse(xhr.responseText).xhrController

                S.Geb.tag('title')[0].textContent = xhrC.title

                getHistoryUpdate()
                console.log(xhrC)
                const transit = {
                    insertNew: _ => {
                        pageEl.insertAdjacentHTML('beforeend', response)
                    },
                    removeOld: _ => {
                        const oldXhrContent = pageEl.children[0]
                        oldXhrContent.parentNode.removeChild(oldXhrContent)
                    }
                }
                transit.removeOld()
                pageEl.insertAdjacentHTML('beforeend', xhrC.view)
                window.Penryn.outroIsOn = true
                //callback(EventDelegation.prototype.xhrCallback(xhrC.view))
            }
        }

       
        xhr.send(null)
        
        // Browser history update
        function getHistoryUpdate () {
            const pageUrl = page === 'home' ? '/' : page

            history.pushState({key: 'value'}, 'titre', pageUrl)
        }
    }

    static onPopstate () {
        const d = document
        const w = window

        let blockPopstateEvent = d.readyState !== 'complete'

        S.Listen(w, 'add', 'load', load)
        S.Listen(w, 'add', 'popstate', popstate)

        function load () {
            setTimeout(_ => {
                blockPopstateEvent = false
            }, 0)
        }

        function popstate (e) {
            if (blockPopstateEvent && d.readyState === 'complete') {
                e.preventDefault()
                e.stopImmediatePropagation()
            }
        }

        w.onpopstate = e => {
            /* state is null when change url without change page → story stream social wall for example */
            if (e.state !== null) {
                w.location.href = S.Win.path
            }
        }
    }

}

export default Xhr

