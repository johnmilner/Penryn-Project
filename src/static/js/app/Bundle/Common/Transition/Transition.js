// /* eslint-disable */

import S from 'skylake'

const Transition = new S.Timeline()
Transition.from({el: '', p: {y: [-100, 0]}, d: 5000, e: 'Power4InOut'})
// Transition.from({el: '#about', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300})

Transition.play()

// Transition.pause()

// Transition.play({reverse: true})

export default Transition
