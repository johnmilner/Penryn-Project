import S from 'skylake'

const Transition = {}

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})
// Transition.from({el: '#about', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300})

// Transition.intro.play()
console.log('transition.js')
// Transition.pause()
// Transition.play({reverse: true})

export default Transition
