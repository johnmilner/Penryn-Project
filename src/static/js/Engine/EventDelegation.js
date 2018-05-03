/* eslint-disable */

import S from 'skylake'
import Xhr from './Xhr.js'


class EventDelegation {

    constructor (getInstance) {
        // Opts
        this.getInstance = getInstance

        // Parameters
        this.p = window.Penryn
        this.copy = Object.assign({}, EventDelegation.xhrC);
        console.log(this.copy)
        //this.xhrObj = Object.getOwnPropertyDescriptor(Xhr.controller, 'xhr')
        //this.xhrC = Object.getOwnPropertyDescriptor(Xhr.controller, 'xhrC')
        this.xhr = S.Geb.id('xhr')

        // Bind
        S.BindMaker(this, ['eventDelegation', 'done', 'xhrCallback'])
    }

    run () {
        S.BindMaker(this, ['eventDelegation', 'done', 'xhrCallback'])
        S.Listen(S.Dom.body, 'add', 'click', this.eventDelegation)
        
        console.log('coming from EventDelegation run method')
    }

    eventDelegation (event) {
        const w = window
        let target = event.target
        let targetIsATag = false
        let targetIsASubmit = false

        while (target) {
            if (target.tagName === 'A') {
                targetIsATag = true
                break
            } else if ((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit') {
                targetIsASubmit = true
                break
            }
            target = target.parentNode
        }

        if (targetIsATag) {
            const targetHref = target.dataset.href === undefined ? target.href : target.dataset.href

            if (target.classList.contains('_tb')) {
                prD()
                w.open(targetHref)
            } else if (target.classList.contains('_tbs')) {
                prD()

                if (this.isTouch && this.isSafari) {
                    w.location.href = targetHref
                } else {
                    w.open(targetHref)
                }
            } else {
                const hrefBeginByHash = targetHref.charAt(targetHref.length - 1) === '#'
                const hrefIsMailto = targetHref.substring(0, 6) === 'mailto'

                if (hrefBeginByHash) {
                    prD()
                } else if (!hrefIsMailto && !target.classList.contains('_ost') && targetHref !== '' && target.getAttribute('target') !== '_blank') {
                    prD()

                    if (this.p.outroIsOn) {
                        this.path = {
                            old: S.Win.path,
                            new: targetHref.replace(/^.*\/\/[^/]+/, '')
                        }

                        if (this.path.old !== this.path.new) {
                            this.p.outroIsOn = false

                            this.target = target
                            this.xhrReq()
                        }
                    }
                } else if (hrefIsMailto) {
                    prD()
                    const myWindow = w.open(targetHref)
                    setTimeout(_ => {
                        myWindow.close()
                    }, 300)
                }
            }
        } else if (targetIsASubmit) {
            prD()
        }

        function prD () {
            event.preventDefault()
        }
    }

    xhrReq () {
        const oldInstance = this.getInstance(this.path.old)

        this.p.done = this.done
        this.p.target = this.target
        this.p.path = this.path

        // Old outro
        oldInstance.controller.outro()
    }

    done () {
        Xhr.controller(this.path.new, this.xhrCallback)
    }

    xhrCallback (response) {
        const newInstance = this.getInstance(this.path.new)
        console.log('hello from xhrCallback')
        this.p.xhr = {
            insertNew: _ => {
                this.xhr.insertAdjacentHTML('beforeend', response)
            },
            removeOld: _ => {
                const oldXhrContent = this.xhr.children[0]
                oldXhrContent.parentNode.removeChild(oldXhrContent)
            }
        }
        this.p.outroIsOn = true

        // New intro
        newInstance.controller.intro()
    }

}

EventDelegation.destHome = function() {

    S.Listen('#a-link', 'add', 'click', function() {

        Xhr.controller('/', myCallback(this.xhrC));

        function myCallback(response) {
            
            //const newInstance = this.getInstance(response)
            console.log('hello from xhrCallback')
            const xhr = S.Geb.id('xhr')
            

            window.Penryn.xhr = {
                insertNew: _ => {
                    xhr.insertAdjacentHTML('beforeend', response)
                },
                removeOld: _ => {
                    const oldXhrContent = xhr.children[0]
                    oldXhrContent.parentNode.removeChild(oldXhrContent)
                }
            }
            window.Penryn.xhr.insertNew()
            window.Penryn.xhr.removeOld()
            window.Penryn.outroIsOn = true
    
            // New intro
            //newInstance.controller.intro()
        }
    
    })
}

// console.log(this.xhrObj)
// console.log(xhrC)

EventDelegation.destAbout = function() {
    

    S.Listen('#h-link', 'add', 'click', function() {
        
        // console.log(xhr)
        // console.log(xhrObj)

        Xhr.controller('about', myCallback(this.copy));

        function myCallback(response) {
            //this.response = xhrC
            //const newInstance = this.getInstance(response)
            console.log('hello from xhrCallback')
            const xhr = S.Geb.id('xhr')

            const content = Object.assign({}, response);
            console.log(content)

            const transit = {
                insertNew: _ => {
                    xhr.insertAdjacentHTML('beforeend', response)
                },
                removeOld: _ => {
                    const oldXhrContent = xhr.children[0]
                    oldXhrContent.parentNode.removeChild(oldXhrContent)
                }
            }
            transit.removeOld()
            xhr.insertAdjacentHTML('beforeend', content)
            window.Penryn.outroIsOn = true
    
            // New intro
            //newInstance.controller.intro()
        }
    
    })
}

export default EventDelegation
