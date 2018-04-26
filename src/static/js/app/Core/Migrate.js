import jQuery from "jquery";
import "jquery.easing";
import S from 'skylake'
//import devicon from 'devicon'

/*
  Menu Overlay
*/

// const Transition = new S.Timeline()
// Transition.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, delay: 2000, e: 'Power4InOut'})


// const Loader = function() {
//     var preloaderFadeOutTime = 2500;
//     function hidePreloader() {
//       var preloader = $("#loader");
//       preloader.show(); //show preloader - see spinner css
//       preloader.delay(2300).fadeOut(preloaderFadeOutTime, intro);
//     }
//     hidePreloader(); 
//     Transition.play() 
//   };

// Loader();

anime.timeline({ loop: false })
      .add({
        targets: ".ml8 .circle-white",
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100,
        delay: 1000
      })
      .add({
        targets: ".ml8 .circle-container",
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: "-=1000"
      })
      .add({
        targets: ".ml8 .circle-dark",
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: "-=600"
      })
      .add({
        targets: ".ml8 .letters-left",
        scale: [0, 1],
        duration: 1200,
        offset: "-=550"
      })
      .add({
        targets: ".ml8 .bang",
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: "-=1000"
      })
      .add({
        targets: ".ml8",
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 300
      })
      
    anime({
      targets: ".ml8 .circle-dark-dashed",
      rotateZ: 360,
      duration: 5000,
      easing: "linear",
      loop: true
    });



var app = {};
app.menuVisible = false;
app.keyCodeESC = 27;


$(function() {
  if ($("body").hasClass("body-content-wrapper") || $("body").hasClass("single-page")) app.loadAndFadeInCaseImages();

  // Top menu
  $('#burger').click(function(e) {
    e.preventDefault();
    !app.menuVisible ? app.revealMenu() : app.hideMenu();
  });

  // Hide nav if clicked outside of a menu alternative
  $('#burger-menu').click(function(e) {
    app.hideMenu();
  });

  // Make sure that links don't close the menu
  // $('.nav a').click(function(e) {
  //   e.stopPropagation();
  // });

  // Listen to ESC, close menu if visible
  $(document).keyup(function(e) {
    if (e.keyCode == app.keyCodeESC) app.handleESCKey();
  });

  
});


// app.loadAndFadeInCaseImages = function() {
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

app.handleESCKey = function() {
  $(document).trigger("pressed:ESC");
  if (app.menuVisible) app.hideMenu();
}

app.toggleMenuStates = function() {
  //$('body').toggleClass('no-scroll');
  $('#burger').toggleClass('active');
  $('#burger-menu').toggleClass('active');
  $('#burger-menu-line-wrap').toggleClass('oh')
}

app.revealMenu = function() {
  app.menuVisible = true;
  //overlay.toggle();
  app.toggleMenuStates();
  
    const tl = new S.Timeline()
    const isObj = S.Is.object(tl)
    tl.from({el: '.burger-line-hover', p: {x: [0, 105]}, d: 1600, e: 'ExpoOut', delay: 800})
    tl.from({el: '.burger-close', p: {y: [-108, 0]}, d: 1600, e: 'Power4InOut'})

    tl.from({el: '#burger-menu-sail-l', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    tl.from({el: '#burger-menu-sail-r', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut', delay: 50})
    tl.from({el: '#burger-menu-list', p: {y: [0, 223.3]}, d: 2500, e: 'Power4InOut'})
    tl.from({el: '#burger-menu-line', p: {y: [-100, 100]}, d: 2500, e: 'Power4InOut'})

    tl.from({el: '.burger-menu-link', p: {y: [-100, 0]}, d: 1600, e: 'ExpoOut', delay: 1800})
    tl.from({el: '.burger-menu-share', p: {y: [100, 0]}, d: 1600, e: 'ExpoOut', delay: 400})

  
    tl.play()
  

}

app.hideMenu = function() {
  app.menuVisible = false;
  app.toggleMenuStates();
  //overlay.toggle();
  $(document).trigger("app:menuWillHide");

  // $(".burger-line-hover").css({
  //   "transition-delay": "800ms"
  // });

  // $("#burger-line").css({
  //   "transform": "translate3d(0,0%,0)"
  // });
  const tl = new S.Timeline()
  const isObj = S.Is.object(tl)
  tl.from({el: '#burger-menu-sail-l', p: {y: [100, 0]}, d: 1500, e: 'Power4InOut'})
  tl.from({el: '#burger-menu-sail-r', p: {y: [100, 0]}, d: 1500, e: 'Power4InOut', delay: 50})

  
  tl.from({el: '#burger-menu-list', p: {y: [223.3, 0]}, d: 1500, e: 'Power4InOut'})
  tl.from({el: '.burger-menu-share', p: {y: [0, 100]}, d: 800, e: 'ExpoOut'})
  tl.from({el: '.burger-menu-link', p: {y: [0, -100]}, d: 1600, e: 'ExpoOut', delay: 800})

  tl.from({el: '.burger-close', p: {y: [0, -108]}, d: 1600, e: 'Power4InOut'})
  tl.from({el: '.burger-line-hover', p: {x: [105, 0]}, d: 800, e: 'ExpoOut', delay: 800})
  tl.from({el: '#burger-menu-line', p: {y: [100, -100]}, d: 1500, e: 'Power4InOut'})

  tl.play()
  
}

// Typically called by views that want to display something in the same 
// position of the menu icon
// app.hideMenuIcon = function() {
//   $(".menu").hide();
// }

// app.showMenuIcon = function() {
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
    app.hideMenu();   
  });
  
};

// for (var i = 0; i < subNavItems.length; i++) {
//   subNavItems[i].addEventListener('click', function(){
//     //console.log('clicked!!');
//     if (burger.className === 'active') {
//       return false;
//     }
//     app.hideMenu();   
//   });


/* 
Menu Overlay End 
*/

 

  