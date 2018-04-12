/* eslint-disable */

import skylake from 'skylake'

const Loader = function() {
    function t() {
     classCallCheck(this, t), this.loaderWrap = skylake.Geb.id("loader-wrap"), this.loader = skylake.Geb.id("loader"), this.loaderTxt = skylake.Geb.class("loader-txt")
    }
    return createClass(t, [{
     key: "prepare",
     value: function() {
      var t = this;
      this.loaderWrap.style.transform = "translate3d(0,0,0)", this.tl = new skylake.Timeline, this.tl.from(this.loader, "opacity", 1, 0, 1e3, "ExpoOut", {
       callback: function(e) {
        t.loaderWrap.style.transform = "translate3d(-100%,0,0)"
       }
      })
     }
    }, {
     key: "run",
     value: function(t) {
      var e = this;
      this.callback = t;
      var i = 59,
       s = setInterval(function(t) {
        if (i <= 99) {
         var a = ("0" + i).slice(-2);
         e.loaderTxt[0].textContent = a.charAt(0), e.loaderTxt[1].textContent = a.charAt(1), i++
        } else clearInterval(s), e.cb()
       }, 30)
     }
    }, {
     key: "cb",
     value: function() {
      this.tl.play(), this.callback()
     }
    }]), t
   }()

   export default Loader