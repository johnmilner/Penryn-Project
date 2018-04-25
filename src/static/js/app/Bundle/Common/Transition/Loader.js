/* eslint-disable */

import JQuery from 'jquery'
import S from 'skylake'

const Transition = new S.Timeline()
Transition.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, delay: 2000, e: 'Power4InOut'})


const Loader = function() {
    var preloaderFadeOutTime = 2500;
    function hidePreloader() {
      var preloader = $("#loader");
      preloader.show(); //show preloader - see spinner css
      preloader.delay(2300).fadeOut(preloaderFadeOutTime, intro);
    }
    hidePreloader(); 
    Transition.play() 
  };

Loader();



export default Loader