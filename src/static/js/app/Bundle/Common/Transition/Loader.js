/* eslint-disable */

import jQuery from 'jquery'

$(window).on("load", function() {
    var preloaderFadeOutTime = 2500;
    function hidePreloader() {
      var preloader = $("#loader");
      preloader.show(); //show preloader - see spinner css
      preloader.delay(2300).fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();  
  });

export default Loader