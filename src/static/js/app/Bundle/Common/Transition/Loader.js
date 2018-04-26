/* eslint-disable */

import JQuery from 'jquery'
import S from 'skylake'

const intro = function() {
  const tl = new S.Timeline()
  const isObj = S.Is.object(tl)
  tl.from({el: '.header', p: {opacity: [0, 1]}, d: 1000, e: 'ExpoIn'})
  tl.from({el: '.tagline', p: {y: [100, 0]}, d: 1600, e: 'Power4InOut', delay: 500})

  tl.from({el: '#burger-border-wrap', p: {opacity: [0, .6]}, d: 1500, e: 'ExpoOut', delay: 250})
  tl.from({el: '.burger-line-hover', p: {x: [105, 0]}, d: 1000, e: 'ExpoOut', delay: 250})
  tl.from({el: '#burger-mask', p: {y: [100, -100]}, d: 2000, e: 'ExpoOut', delay: 750})
  
  tl.play()
}

const Loader = function() {
    var preloaderFadeOutTime = 2500;
    function hidePreloader() {
      var preloader = $(".spinner");
      preloader.show(); //show preloader - see spinner css
      preloader.delay(2300).fadeOut(preloaderFadeOutTime, intro);
    }
    hidePreloader(); 
  };

Loader();



export default Loader