/* eslint-disable */

import jQuery from "jquery"
//import "jquery.easing";
import Xhr from '../../Engine/Xhr.js'
import HomeController from '../Controller/HomeController.js'
import AboutController from '../Controller/AboutController.js'
import S from 'skylake'

//import devicon from 'devicon'

/*
  Menu Overlay
*/

var burger = {};
burger.menuVisible = false;
burger.keyCodeESC = 27;

$(function() {
  if ($("body").hasClass("body-content-wrapper") || $("body").hasClass("single-page")) burger.loadAndFadeInCaseImages();

  // Top menu
  
  var myFunction = function(e) {
    $('#burger').off('click');
    e.preventDefault();
    console.log('burger clicked!!');
    !burger.menuVisible ? burger.revealMenu() : burger.hideMenu() 
    
    }

    $('#burger').on('click', myFunction)



  // Hide nav if clicked outside of a menu alternative
  $('#burger-menu').click(function(e) {
    burger.hideMenu();
  });

  // Make sure that links don't close the menu
  // $('.nav a').click(function(e) {
  //   e.stopPropagation();
  // });

  // Listen to ESC, close menu if visible
  $(document).keyup(function(e) {
    if (e.keyCode == burger.keyCodeESC) burger.handleESCKey();
  });

  
});


// burger.loadAndFadeInCaseImages = function() {
//   // Load background images
//   $("[data-image]").each(function(i, elem) {
//     var $elem = $(elem),
//     url = "/images/portfolio/" + $elem.attr('data-image');
//     if (url == null || url.length <= 0 ) { return; }

//     $elem.addClass('image-loading');
//     $('<img/>').attr('src', url).load(function() {
//       $(this).remove();
//       $bg = $('<div class="case-item-bg"/>');
//       $bg.css( 'background-image', 'url(' + url + ')');

//       $elem.prepend($bg);
//       $elem
//         .removeClass('image-loading')
//         .addClass('image-ready');
//     });
//   });
// }

burger.handleESCKey = function() {
  $(document).trigger("pressed:ESC");
  if (burger.menuVisible) burger.hideMenu();
}

burger.toggleMenuStates = function() {
  //$('body').toggleClass('no-scroll');
  $('#burger').toggleClass('active');
  //$('#burger').toggleClass('np');
  $('#burger-menu').toggleClass('active');
  $('#burger-menu-line-wrap').toggleClass('oh')
}


burger.revealMenu = function() {
  burger.menuVisible = true;
  //overlay.toggle();
  burger.toggleMenuStates();

  var myFunction = function(e) {
    $('#burger').off('click');
    e.preventDefault();
    console.log('burger clicked!!');
    !burger.menuVisible ? burger.revealMenu() : burger.hideMenu() 
    
  }
 
  const tl = new S.Timeline()
  const isObj = S.Is.object(tl)
  
  tl.from({el: '.burger-line-hover', p: {x: [0, 105]}, d: 1600, e: 'ExpoOut', delay: 800})
  tl.from({el: '.burger-close', p: {y: [-108, 0]}, d: 1600, e: 'Power4InOut'})

  tl.from({el: '#burger-menu-sail-l', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
  tl.from({el: '#burger-menu-sail-r', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut', delay: 50})
  tl.from({el: '#burger-menu-list', p: {y: [0, 223.3]}, d: 2500, e: 'Power4InOut'})
  tl.from({el: '#burger-menu-line', p: {y: [-100, 100]}, d: 2500, e: 'Power4InOut'})

  tl.from({el: '.burger-menu-link', p: {y: [-100, 0]}, d: 1600, e: 'ExpoOut', delay: 1800})
  tl.from({el: '.burger-menu-share', p: {y: [100, 0]}, d: 1600, e: 'ExpoOut', delay: 400, 
  cb: function() {
    $('#burger').on("click", myFunction);
  }})

  tl.play()


}
  

burger.hideMenu = function() {
  burger.menuVisible = false;
  burger.toggleMenuStates();

  var myFunction = function(e) {
    $('#burger').off('click');
    e.preventDefault();
    console.log('burger clicked!!');
    !burger.menuVisible ? burger.revealMenu() : burger.hideMenu() 
    
  }

    const tl = new S.Timeline()
    const isObj = S.Is.object(tl)
    
    tl.from({el: '#burger-menu-sail-l', p: {y: [100, 0]}, d: 1500, e: 'Power4InOut'})
    tl.from({el: '#burger-menu-sail-r', p: {y: [100, 0]}, d: 1500, e: 'Power4InOut', delay: 50})
  
    
    tl.from({el: '#burger-menu-list', p: {y: [223.3, 0]}, d: 1500, e: 'Power4InOut'})
    tl.from({el: '.burger-menu-share', p: {y: [0, 100]}, d: 800, e: 'ExpoOut'})
    tl.from({el: '.burger-menu-link', p: {y: [0, -100]}, d: 1600, e: 'ExpoOut', delay: 800})
  
    tl.from({el: '.burger-close', p: {y: [0, -108]}, d: 1600, e: 'Power4InOut'})
    tl.from({el: '.burger-line-hover', p: {x: [105, 0]}, d: 800, e: 'ExpoOut', delay: 800})
    tl.from({el: '#burger-menu-line', p: {y: [100, -100]}, d: 1500, e: 'Power4InOut', 
    cb: function() {
      $('#burger').on("click", myFunction);
    }})
  
    tl.play()

  
}



// Typically called by views that want to display something in the same 
// position of the menu icon
// burger.hideMenuIcon = function() {
//   $(".menu").hide();
// }

// burger.showMenuIcon = function() {
//   $(".menu").show();  
// }


const elmHamburger = document.querySelector('#burger');
const navItems = document.querySelectorAll('.burger-menu-bg');
//const subNavItems = document.querySelectorAll('.nav-sublink');

  // //remove global menu items
  // function removeGlobalMenu() {
  //   for (var i = 0; i < navItems.length; i++) {
  //     navItems[i].classList.remove('js-nav-animate');
  //   }
  // }

//loop thru nav_sublinks listening for click, onclick close overlay, close hamburger menu
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function(){
    //console.log('clicked!!');
    if (burger.className === 'active') {
      return false;
    }
    burger.hideMenu();   
  });
  
};

// for (var i = 0; i < subNavItems.length; i++) {
//   subNavItems[i].addEventListener('click', function(){
//     //console.log('clicked!!');
//     if (burger.className === 'active') {
//       return false;
//     }
//     burger.hideMenu();   
//   });


/* 
Menu Overlay End 
*/


 

  