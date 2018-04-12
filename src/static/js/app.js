'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var skylake = createCommonjsModule(function (module) {
/**
 * Skylake
 *
 * Version   →  6.2.1
 * Github    →  https://github.com/ariiiman/skylake
 * License   →  http://opensource.org/licenses/MIT
 * Author    →  Copyright © 2018 Aristide Benoist
 * Website   →  www.aristidebenoist.com
 * Date      →  Mar 21, 2018
 */
var S = {};(module.exports = S).Merom = function (t) {
  S.BindMaker(this, ["getRaf", "loop", "updSvg", "updLine", "updProp"]), this.v = this.varsInit(t);
}, S.Merom.prototype = { varsInit: function varsInit(t) {
    var l = { el: S.Selector.el(t.el), e: { value: t.e || "linear" }, d: { origin: t.d || 0, curr: 0 }, delay: t.delay || 0, cb: t.cb || !1, cbDelay: t.cbDelay || 0, reverse: t.reverse || !1, round: t.round, progress: 0, time: { elapsed: 0 } };l.elL = l.el.length, S.Has(t, "update") ? l.update = function () {
      t.update(l);
    } : S.Has(t, "svg") ? l.update = this.updSvg : S.Has(t, "line") ? l.update = this.updLine : l.update = this.updProp;var e = t.p || !1,
        i = t.svg || !1,
        r = t.line || !1;if (e) {
      l.prop = {}, l.propPos = [];var s = Object.keys(e);l.propL = s.length;for (var n = 0; n < l.propL; n++) {
        var o = s[n];l.prop[n] = { name: o, origin: { start: e[o][0], end: e[o][1] }, curr: e[o][0], start: e[o][0], end: e[o][1], unit: e[o][2] || "%" }, l.propPos[o.charAt(0)] = n;
      }
    } else if (i) l.svg = { type: i.type, attr: "polygon" === i.type ? "points" : "d", end: i.end, originArr: {}, arr: {}, val: [] }, l.svg.start = i.start || l.el[0].getAttribute(l.svg.attr), l.svg.curr = l.svg.start, l.svg.originArr.start = this.svgSplit(l.svg.start), l.svg.originArr.end = this.svgSplit(l.svg.end), l.svg.arr.start = l.svg.originArr.start, l.svg.arr.end = l.svg.originArr.end, l.svg.arrL = l.svg.arr.start.length;else if (r) {
      var d = function d(t) {
        if ("circle" === t.tagName) return 2 * t.getAttribute("r") * Math.PI;if ("line" === t.tagName) {
          var e = t.getAttribute("x1"),
              i = t.getAttribute("x2"),
              r = t.getAttribute("y1"),
              s = t.getAttribute("y2");return Math.sqrt((i -= e) * i + (s -= r) * s);
        }if ("polyline" === t.tagName) {
          for (var n, o = 0, a = t.points.numberOfItems, h = 0; h < a; h++) {
            var u = t.points.getItem(h);0 < h && (o += Math.sqrt(Math.pow(u.x - n.x, 2) + Math.pow(u.y - n.y, 2))), n = u;
          }return o;
        }return (t = l.line.elWL || t).getTotalLength();
      };

      l.line = { elWL: r.elWithLength, dashed: r.dashed, coeff: { start: void 0 !== r.start ? (100 - r.start) / 100 : 1, end: void 0 !== r.end ? (100 - r.end) / 100 : 0 }, shapeL: [], origin: { start: [], end: [] }, curr: [], start: [], end: [] };for (n = 0; n < l.elL; n++) {
        var a;if (l.line.shapeL[n] = d(l.el[n]), l.line.dashed) {
          for (var h = 0, u = dashed.split(/[\s,]/), c = u.length, v = 0; v < c; v++) {
            h += parseFloat(u[v]) || 0;
          }var p = "",
              f = Math.ceil(l.line.shapeL[n] / h);for (v = 0; v < f; v++) {
            p += dashed + " ";
          }a = p + "0 " + l.line.shapeL[n];
        } else a = l.line.shapeL[n];l.el[n].style.strokeDasharray = a, l.line.origin.start[n] = l.line.coeff.start * l.line.shapeL[n], l.line.origin.end[n] = l.line.coeff.end * l.line.shapeL[n], l.line.curr[n] = l.line.origin.start[n], l.line.start[n] = l.line.origin.start[n], l.line.end[n] = l.line.origin.end[n];
      }
    }return l;
  }, play: function play(t) {
    this.pause(), this.varsUpd(t), setTimeout(this.getRaf, this.v.delay);
  }, pause: function pause() {
    cancelAnimationFrame(this.raf), this.needEnd = !0;
  }, varsUpd: function varsUpd(t) {
    var e = t || {},
        i = S.Has(e, "reverse") && e.reverse ? "start" : "end";if (S.Has(this.v, "prop")) for (var r = 0; r < this.v.propL; r++) {
      this.v.prop[r].end = this.v.prop[r].origin[i], this.v.prop[r].start = this.v.prop[r].curr, S.Has(e, "p") && S.Has(e.p, this.v.prop[r].name) && (S.Has(e.p[this.v.prop[r].name], "newEnd") && (this.v.prop[r].end = e.p[this.v.prop[r].name].newEnd), S.Has(e.p[this.v.prop[r].name], "newStart") && (this.v.prop[r].start = e.p[this.v.prop[r].name].newStart));
    } else if (S.Has(this.v, "svg")) S.Has(e, "svg") && S.Has(e.svg, "start") ? this.v.svg.arr.start = e.svg.start : this.v.svg.arr.start = this.svgSplit(this.v.svg.curr), S.Has(e, "svg") && S.Has(e.svg, "end") ? this.v.svg.arr.end = e.svg.end : this.v.svg.arr.end = this.v.svg.originArr[i];else if (S.Has(this.v, "line")) {
      for (r = 0; r < this.v.elL; r++) {
        this.v.line.start[r] = this.v.line.curr[r];
      }if (S.Has(e, "line") && S.Has(e.line, "end")) {
        this.v.line.coeff.end = (100 - e.line.end) / 100;for (r = 0; r < this.v.elL; r++) {
          this.v.line.end[r] = this.v.line.coeff.end * this.v.line.shapeL[r];
        }
      } else this.v.line.end[r] = this.v.line.origin[i][r];
    }this.v.d.curr = S.Has(e, "d") ? e.d : this.v.d.origin - this.v.d.curr + this.v.time.elapsed, this.v.e.value = e.e || this.v.e.value, this.v.e.calc = S.Is.string(this.v.e.value) ? S.EasePack[this.v.e.value] : S.EaseCSS(this.v.e.value[0], this.v.e.value[1], this.v.e.value[2], this.v.e.value[3]), this.v.delay = S.Has(e, "delay") ? e.delay : this.v.delay, this.v.cbDelay = S.Has(e, "cbDelay") ? e.cbDelay : this.v.cbDelay, this.v.cb = S.Has(e, "cb") ? e.cb : this.v.cb;
  }, getRaf: function getRaf() {
    this.v.time.start = 0, this.raf = requestAnimationFrame(this.loop);
  }, loop: function loop(t) {
    this.v.time.start || (this.v.time.start = t), this.v.time.elapsed = t - this.v.time.start, this.v.progress = 0 < this.v.d.curr ? this.v.e.calc(Math.min(this.v.time.elapsed / this.v.d.curr, 1)) : 1, this.v.update(), this.v.progress < 1 ? this.raf = requestAnimationFrame(this.loop) : this.needEnd && (this.needEnd = !1, this.v.update(), this.v.cb && setTimeout(this.v.cb, this.v.cbDelay));
  }, updProp: function updProp() {
    for (var t = 0; t < this.v.propL; t++) {
      this.v.prop[t].curr = this.lerp(this.v.prop[t].start, this.v.prop[t].end);
    }var e = S.Has(this.v.propPos, "x") ? this.v.prop[this.v.propPos.x].curr + this.v.prop[this.v.propPos.x].unit : 0,
        i = S.Has(this.v.propPos, "y") ? this.v.prop[this.v.propPos.y].curr + this.v.prop[this.v.propPos.y].unit : 0,
        r = e + i === 0 ? 0 : "translate3d(" + e + "," + i + ",0)",
        s = S.Has(this.v.propPos, "r") ? this.v.prop[this.v.propPos.r].name + "(" + this.v.prop[this.v.propPos.r].curr + "deg)" : 0,
        n = S.Has(this.v.propPos, "s") ? this.v.prop[this.v.propPos.s].name + "(" + this.v.prop[this.v.propPos.s].curr + ")" : 0,
        o = r + s + n === 0 ? 0 : [r, s, n].filter(function (t) {
      return 0 !== t;
    }).join(" "),
        a = S.Has(this.v.propPos, "o") ? this.v.prop[this.v.propPos.o].curr : -1,
        h = S.Has(this.v.propPos, "w") ? this.v.prop[this.v.propPos.w].curr + this.v.prop[this.v.propPos.w].unit : 0,
        u = S.Has(this.v.propPos, "h") ? this.v.prop[this.v.propPos.h].curr + this.v.prop[this.v.propPos.h].unit : 0;for (t = 0; t < this.v.elL && void 0 !== this.v.el[t]; t++) {
      0 !== o && (this.v.el[t].style.transform = o), 0 <= a && (this.v.el[t].style.opacity = a), 0 !== h && (this.v.el[t].style.width = h), 0 !== u && (this.v.el[t].style.height = u);
    }
  }, updSvg: function updSvg() {
    this.v.svg.currTemp = "";for (var t = 0; t < this.v.svg.arrL; t++) {
      this.v.svg.val[t] = this.isSvgLetter(this.v.svg.arr.start[t]) ? this.v.svg.arr.start[t] : this.lerp(+this.v.svg.arr.start[t], +this.v.svg.arr.end[t]), this.v.svg.currTemp += this.v.svg.val[t] + " ", this.v.svg.curr = this.v.svg.currTemp.trim();
    }for (t = 0; t < this.v.elL && void 0 !== this.v.el[t]; t++) {
      this.v.el[t].setAttribute(this.v.svg.attr, this.v.svg.curr);
    }
  }, updLine: function updLine() {
    for (var t = 0; t < this.v.elL; t++) {
      var e = this.v.el[t].style;this.v.line.curr[t] = this.lerp(this.v.line.start[t], this.v.line.end[t]), e.strokeDashoffset = this.v.line.curr[t], 0 === this.v.progress && (e.opacity = 1);
    }
  }, lerp: function lerp(t, e) {
    return S.Round(S.Lerp.init(t, e, this.v.progress), this.v.round);
  }, svgSplit: function svgSplit(t) {
    for (var e = t.split(" "), i = e.length, r = [], s = 0; s < i; s++) {
      for (var n = e[s].split(","), o = n.length, a = 0; a < o; a++) {
        r.push(+n[a]);
      }
    }return r;
  }, isSvgLetter: function isSvgLetter(t) {
    return "M" === t || "L" === t || "C" === t || "Z" === t;
  } }, S.Timeline = function () {
  this.arr = [], this.delay = 0;
}, S.Timeline.prototype = { from: function from(t) {
    this.delay += S.Has(t, "delay") ? t.delay : 0, t.delay = this.delay, this.arr.push(new S.Merom(t));
  }, play: function play(t) {
    this.run("play", t);
  }, pause: function pause() {
    this.run("pause");
  }, run: function run(t, e) {
    for (var i = this.arr.length, r = e || void 0, s = 0; s < i; s++) {
      this.arr[s][t](r);
    }
  } }, S.BindMaker = function (t, e) {
  for (var i = e.length, r = 0; r < i; r++) {
    t[e[r]] = t[e[r]].bind(t);
  }
};var e = { s: 1.70158, q: 2.25, r: 1.525, u: .984375, v: 7.5625, w: .9375, x: 2.75, y: 2.625, z: .75 };S.EasePack = { linear: function linear(t) {
    return t;
  }, Power1In: function Power1In(t) {
    return 1 - Math.cos(t * (Math.PI / 2));
  }, Power1Out: function Power1Out(t) {
    return Math.sin(t * (Math.PI / 2));
  }, Power1InOut: function Power1InOut(t) {
    return -.5 * (Math.cos(Math.PI * t) - 1);
  }, Power2In: function Power2In(t) {
    return t * t;
  }, Power2Out: function Power2Out(t) {
    return t * (2 - t);
  }, Power2InOut: function Power2InOut(t) {
    return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1;
  }, Power3In: function Power3In(t) {
    return t * t * t;
  }, Power3Out: function Power3Out(t) {
    return --t * t * t + 1;
  }, Power3InOut: function Power3InOut(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }, Power4In: function Power4In(t) {
    return t * t * t * t;
  }, Power4Out: function Power4Out(t) {
    return 1 - --t * t * t * t;
  }, Power4InOut: function Power4InOut(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }, Power5In: function Power5In(t) {
    return t * t * t * t * t;
  }, Power5Out: function Power5Out(t) {
    return 1 + --t * t * t * t * t;
  }, Power5InOut: function Power5InOut(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }, ExpoIn: function ExpoIn(t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
  }, ExpoOut: function ExpoOut(t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
  }, ExpoInOut: function ExpoInOut(t) {
    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
  }, CircIn: function CircIn(t) {
    return -(Math.sqrt(1 - t * t) - 1);
  }, CircOut: function CircOut(t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  }, CircInOut: function CircInOut(t) {
    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  }, BackIn: function BackIn(t) {
    return t * t * ((e.s + 1) * t - e.s);
  }, BackOut: function BackOut(t) {
    return (t -= 1) * t * ((e.s + 1) * t + e.s) + 1;
  }, BackInOut: function BackInOut(t) {
    return (t /= .5) < 1 ? t * t * ((1 + (e.s *= e.r)) * t - e.s) * .5 : .5 * ((t -= 2) * t * ((1 + (e.s *= e.r)) * t + e.s) + 2);
  }, Elastic: function Elastic(t) {
    return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1;
  }, SwingFromTo: function SwingFromTo(t) {
    return (t /= .5) < 1 ? t * t * ((1 + (e.s *= e.r)) * t - e.s) * .5 : .5 * ((t -= 2) * t * ((1 + (e.s *= e.r)) * t + e.s) + 2);
  }, SwingFrom: function SwingFrom(t) {
    return t * t * ((e.s + 1) * t - e.s);
  }, SwingTo: function SwingTo(t) {
    return (t -= 1) * t * ((e.s + 1) * t + e.s) + 1;
  }, Bounce: function Bounce(t) {
    return t < 1 / e.x ? e.v * t * t : t < 2 / e.x ? e.v * (t -= 1.5 / e.x) * t + e.z : t < 2.5 / e.x ? e.v * (t -= e.q / e.x) * t + e.w : e.v * (t -= e.y / e.x) * t + e.u;
  }, BouncePast: function BouncePast(t) {
    return t < 1 / e.x ? e.v * t * t : t < 2 / e.x ? 2 - (e.v * (t -= 1.5 / e.x) * t + e.z) : t < 2.5 / e.x ? 2 - (e.v * (t -= e.q / e.x) * t + e.w) : 2 - (e.v * (t -= e.y / e.x) * t + e.u);
  } };var ni = 4,
    nms = .001,
    sp = 1e-7,
    smi = 10,
    ksts = 11,
    kSSS = 1 / (ksts - 1);function A(t, e) {
  return 1 - 3 * e + 3 * t;
}function B(t, e) {
  return 3 * e - 6 * t;
}function C(t) {
  return 3 * t;
}function calcBezier(t, e, i) {
  return ((A(e, i) * t + B(e, i)) * t + C(e)) * t;
}function getS(t, e, i) {
  return 3 * A(e, i) * t * t + 2 * B(e, i) * t + C(e);
}function binarySubdivide(t, e, i, r, s) {
  for (var n, o, a = 0; 0 < (n = calcBezier(o = e + (i - e) / 2, r, s) - t) ? i = o : e = o, Math.abs(n) > sp && ++a < smi;) {}return o;
}function nRI(t, e, i, r) {
  for (var s = 0; s < ni; ++s) {
    var n = getS(e, i, r);if (0 === n) return e;e -= (calcBezier(e, i, r) - t) / n;
  }return e;
}S.EaseCSS = function (n, e, o, i) {
  var a = new Float32Array(ksts);if (n !== e || o !== i) for (var t = 0; t < ksts; ++t) {
    a[t] = calcBezier(t * kSSS, n, o);
  }return function (t) {
    return n === e && o === i ? t : 0 === t ? 0 : 1 === t ? 1 : calcBezier(function (t) {
      for (var e = 0, i = ksts - 1, r = 1; r !== i && a[r] <= t; ++r) {
        e += kSSS;
      }var s = e + (t - a[--r]) / (a[r + 1] - a[r]) * kSSS;return e = getS(s, n, o), nms <= e ? nRI(t, s, n, o) : 0 === e ? s : binarySubdivide(t, e, e + kSSS, n, o);
    }(t), e, i);
  };
}, S.Has = function (t, e) {
  return !!t && hasOwnProperty.call(t, e);
}, S.Is = { string: function string(t) {
    return "string" == typeof t;
  }, object: function object(t) {
    return t === Object(t);
  }, array: function array(t) {
    return t.constructor === Array;
  }, def: function def(t) {
    return void 0 !== t;
  }, undef: function undef(t) {
    return void 0 === t;
  } }, S.Lerp = { init: function init(t, e, i) {
    return t + (e - t) * i;
  }, extend: function extend(t, e, i, r, s) {
    return r + (s - r) / (i - e) * (t - 1);
  } }, S.Round = function (t, e) {
  e = void 0 !== e ? Math.pow(10, e) : 1e3;return Math.round(t * e) / e;
}, S.Sniffer = { uA: navigator.userAgent.toLowerCase(), get isMobileIE() {
    return (/iemobile/i.test(this.uA)
    );
  }, get isMobileOpera() {
    return (/opera mini/i.test(this.uA)
    );
  }, get isIOS() {
    return (/iphone|ipad|ipod/i.test(this.uA)
    );
  }, get isBlackberry() {
    return (/blackberry/i.test(this.uA)
    );
  }, get isMobileAndroid() {
    return (/android.*mobile/.test(this.uA)
    );
  }, get isAndroid() {
    return this.isMobileAndroid || !this.isMobileAndroid && /android/i.test(this.uA);
  }, get isFirefox() {
    return -1 < this.uA.indexOf("firefox");
  }, get safari() {
    return this.uA.match(/version\/[\d\.]+.*safari/);
  }, get isSafari() {
    return !!this.safari && !this.isAndroid;
  }, get isSafariOlderThan8() {
    var t = 8;this.isSafari && (t = +this.safari[0].match(/version\/\d{1,2}/)[0].split("/")[1]);return t < 8;
  }, get isIEolderThan11() {
    return -1 < this.uA.indexOf("msie");
  }, get isIE11() {
    return 0 < navigator.appVersion.indexOf("Trident/");
  }, get isIE() {
    return this.isIEolderThan11 || this.isIE11;
  }, get isMac() {
    return -1 < navigator.platform.toLowerCase().indexOf("mac");
  }, get isMobile() {
    return this.isMobileAndroid || this.isBlackberry || this.isIOS || this.isMobileOpera || this.isMobileIE;
  }, get isTouch() {
    return "ontouchstart" in window;
  } }, S.Throttle = function (t) {
  this.delay = t.delay, this.cb = t.callback, this.onlyAtEnd = t.onlyAtEnd, this.last, this.timer;
}, S.Throttle.prototype = { init: function init() {
    var t = this,
        e = !0,
        i = Date.now();this.last && i < this.last + this.delay || e ? (e = !1, clearTimeout(this.timer), this.timer = setTimeout(function () {
      t.last = i, t.cb();
    }, this.delay)) : (this.last = i, this.onlyAtEnd || (e = !1, this.cb()));
  } }, S.Geb = { parent: function parent(t) {
    return t || document;
  }, id: function id(t, e) {
    return this.parent(e).getElementById(t);
  }, class: function _class(t, e) {
    return this.parent(e).getElementsByClassName(t);
  }, tag: function tag(t, e) {
    return this.parent(e).getElementsByTagName(t);
  } }, S.Dom = { html: document.documentElement, body: document.body }, S.Selector = { el: function el(t) {
    var e = [];if (S.Is.string(t)) {
      var i = t.substring(1);"#" === t.charAt(0) ? e[0] = S.Geb.id(i) : e = S.Geb.class(i);
    } else e[0] = t;return e;
  }, type: function type(t) {
    return "#" === t.charAt(0) ? "id" : "class";
  }, name: function name(t) {
    return t.substring(1);
  } }, S.Index = { index: function index(t, e) {
    for (var i = e.length, r = 0; r < i; r++) {
      if (t === e[r]) return r;
    }return -1;
  }, list: function list(t) {
    var e = t.parentNode.children;return this.index(t, e);
  }, class: function _class(t, e) {
    var i = S.Geb.class(e);return this.index(t, i);
  } }, S.MM = function (t) {
  this.el = S.Selector.el(t.element)[0] || document, this.cb = t.callback, this.iM = S.Sniffer.isMobile, this.tick = !1, S.BindMaker(this, ["getRaf", "run"]);
}, S.MM.prototype = { on: function on() {
    this.listener("add");
  }, off: function off() {
    this.listener("remove");
  }, listener: function listener(t) {
    var e = this.iM ? "touch" : "mouse";S.Listen(this.el, t, e + "move", this.getRaf);
  }, getRaf: function getRaf(t) {
    this.e = t, this.tick || (this.raf = requestAnimationFrame(this.run), this.tick = !0);
  }, run: function run() {
    var t = this.iM ? this.e.changedTouches[0] : this.e;this.cb(t.pageX, t.pageY, this.e), this.tick = !1;
  } }, S.RO = function (t) {
  this.cb = t.callback, this.iM = S.Sniffer.isMobile, this.tick = !1, S.BindMaker(this, ["getThrottle", "getRaf", "run"]), this.throttle = new S.Throttle({ callback: this.getRaf, delay: t.throttle.delay, onlyAtEnd: t.throttle.onlyAtEnd });
}, S.RO.prototype = { on: function on() {
    this.listener("add");
  }, off: function off() {
    this.listener("remove");
  }, listener: function listener(t) {
    this.iM ? S.Listen(window, t, "orientationchange", this.getThrottle) : S.Listen(window, t, "resize", this.getThrottle);
  }, getThrottle: function getThrottle(t) {
    this.e = t, this.throttle.init();
  }, getRaf: function getRaf() {
    this.tick || (this.raf = requestAnimationFrame(this.run), this.tick = !0);
  }, run: function run() {
    this.cb(this.e), this.tick = !1;
  } }, S.Scroll = function (t) {
  this.cb = t, this.tick = !1, S.BindMaker(this, ["getRaf", "run"]);
}, S.Scroll.prototype = { on: function on() {
    this.startScrollY = pageYOffset, this.listener("add");
  }, off: function off() {
    this.listener("remove");
  }, listener: function listener(t) {
    S.Listen(window, t, "scroll", this.getRaf);
  }, getRaf: function getRaf(t) {
    this.e = t, this.tick || (this.raf = requestAnimationFrame(this.run), this.tick = !0);
  }, run: function run() {
    var t = pageYOffset,
        e = -(t - this.startScrollY);this.startScrollY = t, this.cb(t, e, this.e), this.tick = !1;
  } }, S.WTDisable = { prevent: function prevent(t) {
    t.preventDefault();
  }, listener: function listener(t) {
    var e;if (S.Sniffer.isMobile) {
      var i = "add" === t ? "none" : "";S.Dom.body.style.touchAction = i, e = "touchmove";
    } else e = "mouseWheel";S.Listen(document, t, e, this.prevent);
  }, on: function on() {
    this.listener("add");
  }, off: function off() {
    this.listener("remove");
  } }, S.WT = function (t) {
  this.cb = t, this.iM = S.Sniffer.isMobile, this.tick = !1, S.BindMaker(this, ["touchStart", "getRaf", "run"]);
}, S.WT.prototype = { on: function on() {
    this.listener("add");
  }, off: function off() {
    this.listener("remove");
  }, listener: function listener(t) {
    var e = document;this.iM ? (S.Listen(e, t, "touchstart", this.touchStart), S.Listen(e, t, "touchmove", this.getRaf)) : S.Listen(e, t, "mouseWheel", this.getRaf);
  }, getRaf: function getRaf(t) {
    this.e = t, this.e.preventDefault(), this.tick || (this.raf = requestAnimationFrame(this.run), this.tick = !0);
  }, run: function run() {
    var t = this.e.type;"wheel" === t ? this.onWheel() : "mousewheel" === t ? this.onMouseWheel() : "touchmove" === t && this.touchMove();
  }, onWheel: function onWheel() {
    this.type = "scroll", this.delta = this.e.wheelDeltaY || -1 * this.e.deltaY, S.Sniffer.isFirefox && 1 === this.e.deltaMode && (this.delta *= 40), this.getCb();
  }, onMouseWheel: function onMouseWheel() {
    this.type = "scroll", this.delta = this.e.wheelDeltaY ? this.e.wheelDeltaY : this.e.wheelDelta, this.getCb();
  }, touchStart: function touchStart(t) {
    this.start = t.targetTouches[0].pageY;
  }, touchMove: function touchMove() {
    this.type = "touch", this.delta = this.e.targetTouches[0].pageY - this.start, this.getCb();
  }, getCb: function getCb() {
    this.cb(this.delta, this.type, this.e), this.tick = !1;
  } }, S.Listen = function (t, e, i, r) {
  var s,
      n = document,
      o = (t = S.Selector.el(t)).length;s = "mouseWheel" === i ? "onwheel" in n ? "wheel" : void 0 !== n.onmousewheel ? "mousewheel" : "DOMMouseScroll" : "focusOut" === i ? S.Sniffer.isFirefox ? "blur" : "focusout" : i;for (var a = 0; a < o; a++) {
    t[a][e + "EventListener"](s, r);
  }
}, S.ScrollToTop = function (t) {
  var e,
      i = pageYOffset,
      r = { dest: 0, d: (e = S.Lerp.init(300, 1500, i / t.totalH), 0 === i ? 0 : e), e: i <= 2500 ? "Power" + Math.ceil(i / 500) + "InOut" : "ExpoInOut", cb: t.cb };S.ScrollTo(r);
}, S.ScrollTo = function (t) {
  var e = document,
      i = e.scrollingElement ? e.scrollingElement : S.Dom.body,
      r = S.Sniffer.isFirefox || S.Sniffer.isIE ? e.documentElement : i,
      s = pageYOffset,
      n = t.dest,
      o = 1e3,
      a = new S.Merom({ d: t.d, e: t.e, update: function update(t) {
      r.scrollTop = Math.round(S.Lerp.init(s, n, t.progress) * o) / o;
    }, cb: h });function h() {
    S.WTDisable.off(), t.cb && t.cb();
  }s === n ? h() : (S.WTDisable.on(), a.play());
}, S.ScrollZero = function () {
  window.scrollTo(0, 0);
}, S.TopWhenRefresh = function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
};S.Win = { get w() {
    return innerWidth;
  }, get h() {
    return innerHeight;
  }, get path() {
    return location.pathname;
  }, get hostname() {
    return location.hostname;
  }, get href() {
    return location.href;
  } };
});

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Support = function () {
    function Support() {
        classCallCheck$1(this, Support);
    }

    createClass$1(Support, null, [{
        key: 'init',
        value: function init() {
            if (skylake.Sniffer.isIEolderThan11 || skylake.Sniffer.isSafariOlderThan8) {
                skylake.Dom.html.className = 'old-browser';
            }

            if (skylake.Sniffer.isMobile) {
                skylake.Dom.body.className = 'is-mobile';
            }
        }
    }]);
    return Support;
}();

/*

CONTROLLER
──────────

Xhr.controller(pageName, myCallback, args);

function myCallback(response, args) {

    // Insert HTML
    app.insertAdjacentHTML('beforeend', response);

}

ONPOPSTATE
──────────

Xhr.onPopstate()

*/

var Xhr = function () {
    function Xhr() {
        classCallCheck$1(this, Xhr);
    }

    createClass$1(Xhr, null, [{
        key: 'controller',
        value: function controller(page, callback, args) {
            var path = 'index.php?url=' + page + '&xhr=true';
            var xhr = new XMLHttpRequest();

            xhr.open('GET', path, true);

            xhr.onreadystatechange = function (_) {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var xhrC = JSON.parse(xhr.responseText).xhrController;

                    skylake.Geb.tag('title')[0].textContent = xhrC.title;

                    getHistoryUpdate();
                    callback(xhrC.view, args);
                }
            };
            xhr.send(null);

            // Browser history update
            function getHistoryUpdate() {
                var pageUrl = page === 'home' ? '/' : page;

                history.pushState({ key: 'value' }, 'titre', pageUrl);
            }
        }
    }, {
        key: 'onPopstate',
        value: function onPopstate() {
            var d = document;
            var w = window;

            var blockPopstateEvent = d.readyState !== 'complete';

            skylake.Listen(w, 'add', 'load', load);
            skylake.Listen(w, 'add', 'popstate', popstate);

            function load() {
                setTimeout(function (_) {
                    blockPopstateEvent = false;
                }, 0);
            }

            function popstate(e) {
                if (blockPopstateEvent && d.readyState === 'complete') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }

            w.onpopstate = function (e) {
                /* state is null when change url without change page → story stream social wall for example */
                if (e.state !== null) {
                    w.location.href = skylake.Win.path;
                }
            };
        }
    }]);
    return Xhr;
}();

var EventDelegation = function () {
    function EventDelegation(getInstance) {
        classCallCheck$1(this, EventDelegation);

        // Opts
        this.getInstance = getInstance;

        // Parameters
        this.p = window.Penryn;
        this.xhr = skylake.Geb.id('xhr');

        // Bind
        skylake.BindMaker(this, ['eventDelegation', 'done', 'xhrCallback']);
    }

    createClass$1(EventDelegation, [{
        key: 'run',
        value: function run() {
            skylake.Listen(skylake.Dom.body, 'add', 'click', this.eventDelegation);
        }
    }, {
        key: 'eventDelegation',
        value: function eventDelegation(event) {
            var w = window;
            var target = event.target;
            var targetIsATag = false;
            var targetIsASubmit = false;

            while (target) {
                if (target.tagName === 'A') {
                    targetIsATag = true;
                    break;
                } else if ((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit') {
                    targetIsASubmit = true;
                    break;
                }
                target = target.parentNode;
            }

            if (targetIsATag) {
                var targetHref = target.dataset.href === undefined ? target.href : target.dataset.href;

                if (target.classList.contains('_tb')) {
                    prD();
                    w.open(targetHref);
                } else if (target.classList.contains('_tbs')) {
                    prD();

                    if (this.isTouch && this.isSafari) {
                        w.location.href = targetHref;
                    } else {
                        w.open(targetHref);
                    }
                } else {
                    var hrefBeginByHash = targetHref.charAt(targetHref.length - 1) === '#';
                    var hrefIsMailto = targetHref.substring(0, 6) === 'mailto';

                    if (hrefBeginByHash) {
                        prD();
                    } else if (!hrefIsMailto && !target.classList.contains('_ost') && targetHref !== '' && target.getAttribute('target') !== '_blank') {
                        prD();

                        if (this.p.outroIsOn) {
                            this.path = {
                                old: skylake.Win.path,
                                new: targetHref.replace(/^.*\/\/[^/]+/, '')
                            };

                            if (this.path.old !== this.path.new) {
                                this.p.outroIsOn = false;

                                this.target = target;
                                this.xhrReq();
                            }
                        }
                    } else if (hrefIsMailto) {
                        prD();
                        var myWindow = w.open(targetHref);
                        setTimeout(function (_) {
                            myWindow.close();
                        }, 300);
                    }
                }
            } else if (targetIsASubmit) {
                prD();
            }

            function prD() {
                event.preventDefault();
            }
        }
    }, {
        key: 'xhrReq',
        value: function xhrReq() {
            var oldInstance = this.getInstance(this.path.old);

            this.p.done = this.done;
            this.p.target = this.target;
            this.p.path = this.path;

            // Old outro
            oldInstance.controller.outro();
        }
    }, {
        key: 'done',
        value: function done() {
            Xhr.controller(this.path.new, this.xhrCallback);
        }
    }, {
        key: 'xhrCallback',
        value: function xhrCallback(response) {
            var _this = this;

            var newInstance = this.getInstance(this.path.new);

            this.p.xhr = {
                insertNew: function insertNew(_) {
                    _this.xhr.insertAdjacentHTML('beforeend', response);
                },
                removeOld: function removeOld(_) {
                    var oldXhrContent = _this.xhr.children[0];
                    oldXhrContent.parentNode.removeChild(oldXhrContent);
                }
            };
            this.p.outroIsOn = true;

            // New intro
            newInstance.controller.intro();
        }
    }]);
    return EventDelegation;
}();

/*

CLASS
─────

Class "_tb"     →    targetBlank W3C compatible (target blank)
Class "_tbs"    →    targetBlank W3C compatible except for safari (target blank safari)
Class "_ost"    →    open link in same tab without prevent default (open same tab)

PENRYN
──────

path
target
outroEnable
outroArgs
done
xhr

*/

var Router = function () {
    function Router() {
        classCallCheck$1(this, Router);

        // Parameters
        this.routes = [];
        this.p = window.Penryn;

        // Bind
        skylake.BindMaker(this, ['getInstance']);

        // Outro is on : paralyse outro method during animations
        this.p.outroIsOn = false;

        // On popstate
        Xhr.onPopstate();

        // Instantiating event delegation
        this.eventDelegation = new EventDelegation(this.getInstance);
    }

    createClass$1(Router, [{
        key: 'init',
        value: function init(path, controller) {
            this.route = {
                path: this.slashTrim(path),
                controller: controller,
                params: [],
                instance: {},
                args: ''
            };
            this.routes.push(this.route);

            // Instantiating
            var Controller = this.route.controller;
            this.route.instance.controller = new Controller();

            return this;
        }
    }, {
        key: 'with',
        value: function _with(param, regex) {
            this.route.params[param] = regex;

            return this;
        }
    }, {
        key: 'error',
        value: function error(errorController) {
            // Instantiating
            var ErrorController = errorController;
            this.error.controller = new ErrorController();
        }
    }, {
        key: 'run',
        value: function run() {
            // Event delegation
            this.eventDelegation.run();

            // Preload
            var path = skylake.Win.path;
            this.p.path = { new: path };
            var instance = this.getInstance(path);

            instance.controller.preload();
        }
    }, {
        key: 'getInstance',
        value: function getInstance(url) {
            this.url = this.slashTrim(url);
            var routesL = this.routes.length;

            // Page controller
            for (var i = 0; i < routesL; i++) {
                if (this.match(this.routes[i])) {
                    return {
                        controller: this.routes[i].instance.controller
                    };
                }
            }

            // Error
            return {
                controller: this.error.controller
            };
        }
    }, {
        key: 'match',
        value: function match(route) {
            if (route.path === this.url) {
                return true;
            }

            var path = route.path.replace(/:([\w]+)/g, function (total, part1) {
                return '(' + route.params[part1] + ')';
            });
            path = path.replace(/\//g, '\\/');
            var regex = new RegExp(path);
            var matches = this.url.match(regex);

            if (matches !== null) {
                if (matches.length > 1) {
                    matches.shift();
                    route.args = matches;
                    return true;
                }
            }

            return false;
        }
    }, {
        key: 'slashTrim',
        value: function slashTrim(string) {
            return string.replace(/^\/|\/$/g, '');
        }
    }]);
    return Router;
}();

/* eslint-disable */

var Loader = function () {
  function t() {
    classCallCheck(this, t), this.loaderWrap = skylake.Geb.id("loader-wrap"), this.loader = skylake.Geb.id("loader"), this.loaderTxt = skylake.Geb.class("loader-txt");
  }
  return createClass(t, [{
    key: "prepare",
    value: function value() {
      var t = this;
      this.loaderWrap.style.transform = "translate3d(0,0,0)", this.tl = new skylake.Timeline(), this.tl.from(this.loader, "opacity", 1, 0, 1e3, "ExpoOut", {
        callback: function callback(e) {
          t.loaderWrap.style.transform = "translate3d(-100%,0,0)";
        }
      });
    }
  }, {
    key: "run",
    value: function value(t) {
      var e = this;
      this.callback = t;
      var i = 59,
          s = setInterval(function (t) {
        if (i <= 99) {
          var a = ("0" + i).slice(-2);
          e.loaderTxt[0].textContent = a.charAt(0), e.loaderTxt[1].textContent = a.charAt(1), i++;
        } else clearInterval(s), e.cb();
      }, 30);
    }
  }, {
    key: "cb",
    value: function value() {
      this.tl.play(), this.callback();
    }
  }]), t;
}();

/* eslint-disable */

var Transition = new skylake.Timeline();
Transition.from({ el: '#home', p: { x: [0, 600, 'px'], rotate: [0, 360] }, d: 5000, e: 'linear' });
Transition.from({ el: '#about', p: { x: [0, 600, 'px'], rotate: [0, 360] }, d: 5000, e: 'linear', delay: 300 });

Transition.play();

Transition.pause();

Transition.play({ reverse: true });

/* eslint-disable */

var classCallCheck$2 = function classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
},
    createClass$2 = function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
  }
  return function (e, i, s) {
    return i && t(e.prototype, i), s && t(e, s), e;
  };
}();

var Listeners = function () {
  function t() {
    classCallCheck$2(this, t);
  }
  return createClass$2(t, [{
    key: "init",
    value: function value(t) {
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
      }, o = Object.keys(i), n = o.length, r = 0; r < n; r++) {
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
          });
        }
      }this.normEvsL = this.normEvs.length, this.speEvsL = s.length, this.moduleArrL = this.moduleArr.length, this.speEvInstance = [];
      for (var v = function v(t) {
        var i = e.normEvs[t];
        i.callback = function (t) {
          var s = {
            event: t,
            listeners: e,
            outroM: e.outroM
          };
          i.module[i.method](s);
        };
      }, g = 0; g < this.normEvsL; g++) {
        v(g);
      }for (var b = function b(t) {
        var i = s[t],
            o = a[i.event].skylake,
            n = void 0;
        e.speOpts.listeners = e, "Scroll" === o ? n = {
          callback: function callback(t, s) {
            e.speOpts.currentScrollY = t, e.speOpts.delta = s, i.module[i.method](e.speOpts);
          },
          throttle: i.throttle
        } : "WT" === o ? n = function n(t, s, a) {
          e.speOpts.delta = t, e.speOpts.type = s, e.speOpts.event = a, i.module[i.method](e.speOpts);
        } : "RO" === o ? n = {
          callback: function callback(t) {
            i.module[i.method](n);
          },
          throttle: i.throttle
        } : "MM" === o && (n = {
          callback: function callback(t, s) {
            e.speOpts.posX = t, e.speOpts.posY = s, i.module[i.method](e.speOpts);
          },
          throttle: i.throttle,
          element: i.element
        }), e.speEvInstance[t] = new skylake[o](n);
      }, x = 0; x < this.speEvsL; x++) {
        b(x);
      }
    }
  }, {
    key: "getAlreadyCalled",
    value: function value(t) {
      for (var e = this.moduleArr.length, i = 0; i < e; i++) {
        if (t === this.moduleArr[i].module) return !0;
      }return !1;
    }
  }, {
    key: "add",
    value: function value(t) {
      t && t.moduleInit && (this.outroM = this.speOpts.outroM = t.outroM, this.methodCall("init")), this.listen("add");
    }
  }, {
    key: "remove",
    value: function value(t) {
      !(!t || void 0 === t.destroy) && t.destroy && this.methodCall("destroy"), this.listen("remove");
    }
  }, {
    key: "methodCall",
    value: function value(t) {
      for (var e = 0; e < this.moduleArrL; e++) {
        var i = this.moduleArr[e].module;
        this.moduleArr[e].alreadyCalled || "function" != typeof i[t] || i[t]({
          outroM: this.outroM,
          listeners: this,
          arg: this.moduleArr[e].arg
        });
      }
    }
  }, {
    key: "listen",
    value: function value(t) {
      for (var e = 0; e < this.speEvsL; e++) {
        var i = "add" === t ? "on" : "off";
        this.speEvInstance[e][i]();
      }
      for (var s = 0; s < this.normEvsL; s++) {
        var a = this.normEvs[s];
        skylake.Listen(a.el, t, a.event, a.callback);
      }
    }
  }]), t;
}();

var ErrorController = function () {
    function ErrorController() {
        classCallCheck$1(this, ErrorController);
    }

    createClass$1(ErrorController, [{
        key: 'preload',
        value: function preload() {
            Loader.run({
                listeners: Listeners
            });
        }
    }, {
        key: 'intro',
        value: function intro() {
            Transition.intro({
                listeners: Listeners
            });
        }
    }, {
        key: 'outro',
        value: function outro() {
            Transition.outro({
                listeners: Listeners
            });
        }
    }]);
    return ErrorController;
}();

var HomeController = function () {
    function HomeController() {
        classCallCheck$1(this, HomeController);
    }

    createClass$1(HomeController, [{
        key: 'preload',
        value: function preload() {
            Loader.run({
                listeners: Listeners
            });
        }
    }, {
        key: 'intro',
        value: function intro() {
            Transition.intro({
                listeners: Listeners
            });
        }
    }, {
        key: 'outro',
        value: function outro() {
            Transition.outro({
                listeners: Listeners
            });
        }
    }]);
    return HomeController;
}();

var AboutController = function () {
    function AboutController() {
        classCallCheck$1(this, AboutController);
    }

    createClass$1(AboutController, [{
        key: 'preload',
        value: function preload() {
            Loader.run({
                listeners: Listeners
            });
        }
    }, {
        key: 'intro',
        value: function intro() {
            Transition.intro({
                listeners: Listeners
            });
        }
    }, {
        key: 'outro',
        value: function outro() {
            Transition.outro({
                listeners: Listeners
            });
        }
    }]);
    return AboutController;
}();

/*

router.init('/', HomeController)
router.init('/about', AboutController)
router.init('/work/:id/:name', WorkOneController).with('id', '[0-9]+').with('name', '[a-z0-9-]+')
router.init('/work/:type', WorkAllController).with('type', 'date|title')
router.init('/work', WorkAllController)

*/

var Route = function Route() {
    classCallCheck$1(this, Route);

    var router = new Router();

    router.init('/', HomeController);
    router.init('/about', AboutController);

    router.error(ErrorController);

    router.run();
};

var App = function App() {
    classCallCheck$1(this, App);

    window.Penryn = window.Penryn || {};

    Support.init();

    skylake.TopWhenRefresh();

    new Route();
};

(function (_) {
  return new App();
})();
