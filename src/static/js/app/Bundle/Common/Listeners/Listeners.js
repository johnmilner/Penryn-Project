/* eslint-disable */

import skylake from 'skylake'

const classCallCheck = function(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   },
   createClass = function() {
    function t(t, e) {
     for (var i = 0; i < e.length; i++) {
      var s = e[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
     }
    }
    return function(e, i, s) {
     return i && t(e.prototype, i), s && t(e, s), e
    }
   }()

const Listeners = function() {
    function t() {
     classCallCheck(this, t)
    }
    return createClass(t, [{
     key: "init",
     value: function(t) {
      var e = this,
       i = t,
       s = [];
      this.normEvs = [], this.moduleArr = [], this.speOpts = {};
      for (var a = {
        scroll: {
         throttle: !0,
         skylake: "Scroll"
        },
        ro: {
         throttle: !0,
         skylake: "RO"
        },
        wt: {
         throttle: !1,
         skylake: "WT"
        },
        mm: {
         throttle: !0,
         skylake: "MM"
        }
       }, o = Object.keys(i), n = o.length, r = 0; r < n; r++)
       for (var l = o[r], h = i[o[r]], c = void 0 !== a[l], u = !!c && a[l].throttle, d = c ? 1 : h.length, m = c ? s : this.normEvs, y = 0; y < d; y++) {
        var p = c ? h : h[y],
         f = p.module,
         k = {
          event: l,
          module: f,
          method: p.method
         };
        u ? (k.throttle = p.throttle, k.element = p.element) : k.el = p.el || document, m.push(k), this.moduleArr.indexOf(f) < 0 && this.moduleArr.push({
         module: f,
         arg: p.arg,
         alreadyCalled: this.getAlreadyCalled(f)
        })
       }
      this.normEvsL = this.normEvs.length, this.speEvsL = s.length, this.moduleArrL = this.moduleArr.length, this.speEvInstance = [];
      for (var v = function(t) {
        var i = e.normEvs[t];
        i.callback = function(t) {
         var s = {
          event: t,
          listeners: e,
          outroM: e.outroM
         };
         i.module[i.method](s)
        }
       }, g = 0; g < this.normEvsL; g++) v(g);
      for (var b = function(t) {
        var i = s[t],
         o = a[i.event].skylake,
         n = void 0;
        e.speOpts.listeners = e, "Scroll" === o ? n = {
         callback: function(t, s) {
          e.speOpts.currentScrollY = t, e.speOpts.delta = s, i.module[i.method](e.speOpts)
         },
         throttle: i.throttle
        } : "WT" === o ? n = function(t, s, a) {
         e.speOpts.delta = t, e.speOpts.type = s, e.speOpts.event = a, i.module[i.method](e.speOpts)
        } : "RO" === o ? n = {
         callback: function(t) {
          i.module[i.method](n)
         },
         throttle: i.throttle
        } : "MM" === o && (n = {
         callback: function(t, s) {
          e.speOpts.posX = t, e.speOpts.posY = s, i.module[i.method](e.speOpts)
         },
         throttle: i.throttle,
         element: i.element
        }), e.speEvInstance[t] = new skylake[o](n)
       }, x = 0; x < this.speEvsL; x++) b(x)
     }
    }, {
     key: "getAlreadyCalled",
     value: function(t) {
      for (var e = this.moduleArr.length, i = 0; i < e; i++)
       if (t === this.moduleArr[i].module) return !0;
      return !1
     }
    }, {
     key: "add",
     value: function(t) {
      t && t.moduleInit && (this.outroM = this.speOpts.outroM = t.outroM, this.methodCall("init")), this.listen("add")
     }
    }, {
     key: "remove",
     value: function(t) {
      !(!t || void 0 === t.destroy) && t.destroy && this.methodCall("destroy"), this.listen("remove")
     }
    }, {
     key: "methodCall",
     value: function(t) {
      for (var e = 0; e < this.moduleArrL; e++) {
       var i = this.moduleArr[e].module;
       this.moduleArr[e].alreadyCalled || "function" != typeof i[t] || i[t]({
        outroM: this.outroM,
        listeners: this,
        arg: this.moduleArr[e].arg
       })
      }
     }
    }, {
     key: "listen",
     value: function(t) {
      for (var e = 0; e < this.speEvsL; e++) {
       var i = "add" === t ? "on" : "off";
       this.speEvInstance[e][i]()
      }
      for (var s = 0; s < this.normEvsL; s++) {
       var a = this.normEvs[s];
       skylake.Listen(a.el, t, a.event, a.callback)
      }
     }
    }]), t
   }()

   export default Listeners 
