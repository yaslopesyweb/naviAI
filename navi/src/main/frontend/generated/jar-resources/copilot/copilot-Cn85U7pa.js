class io extends EventTarget {
  constructor() {
    super(...arguments), this.eventBuffer = [], this.handledTypes = [];
  }
  on(t, n) {
    const r = n;
    return this.addEventListener(t, r), this.handledTypes.push(t), this.flush(t), () => this.off(t, r);
  }
  once(t, n) {
    this.addEventListener(t, n, { once: !0 });
  }
  off(t, n) {
    this.removeEventListener(t, n);
    const r = this.handledTypes.indexOf(t, 0);
    r > -1 && this.handledTypes.splice(r, 1);
  }
  emit(t, n) {
    const r = new CustomEvent(t, { detail: n, cancelable: !0 });
    return this.handledTypes.includes(t) || this.eventBuffer.push(r), this.dispatchEvent(r), r.defaultPrevented;
  }
  emitUnsafe({ type: t, data: n }) {
    return this.emit(t, n);
  }
  // Communication with server via eventbus
  send(t, n) {
    const r = new CustomEvent("copilot-send", { detail: { command: t, data: n } });
    this.dispatchEvent(r);
  }
  // Listeners for Copilot itself
  onSend(t) {
    this.on("copilot-send", t);
  }
  offSend(t) {
    this.off("copilot-send", t);
  }
  flush(t) {
    const n = [];
    this.eventBuffer.filter((r) => r.type === t).forEach((r) => {
      this.dispatchEvent(r), n.push(r);
    }), this.eventBuffer = this.eventBuffer.filter((r) => !n.includes(r));
  }
}
var oo = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, n) {
    return "Cannot apply '" + t + "' to '" + n.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, n) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + n;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, n) {
    return "the entry '" + t + "' does not exist in the observable map '" + n + "'";
  },
  26: "please specify a property",
  27: function(t, n) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + n + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, n) {
    return "Cycle detected in computation " + t + ": " + n;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, ao = process.env.NODE_ENV !== "production" ? oo : {};
function f(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  if (process.env.NODE_ENV !== "production") {
    var i = typeof e == "string" ? e : ao[e];
    throw typeof i == "function" && (i = i.apply(null, n)), new Error("[MobX] " + i);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var so = {};
function xr() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : so;
}
var Pr = Object.assign, Ct = Object.getOwnPropertyDescriptor, Z = Object.defineProperty, Bt = Object.prototype, kt = [];
Object.freeze(kt);
var Nn = {};
Object.freeze(Nn);
var lo = typeof Proxy < "u", co = /* @__PURE__ */ Object.toString();
function Dr() {
  lo || f(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Je(e) {
  process.env.NODE_ENV !== "production" && h.verifyProxies && f("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function B() {
  return ++h.mobxGuid;
}
function xn(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var Me = function() {
};
function A(e) {
  return typeof e == "function";
}
function Oe(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ht(e) {
  return e !== null && typeof e == "object";
}
function D(e) {
  if (!Ht(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === co;
}
function $r(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Kt(e, t, n) {
  Z(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: n
  });
}
function Cr(e, t, n) {
  Z(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: n
  });
}
function Ce(e, t) {
  var n = "isMobX" + e;
  return t.prototype[n] = !0, function(r) {
    return Ht(r) && r[n] === !0;
  };
}
function Ke(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function uo(e) {
  var t = Object.getPrototypeOf(e), n = Object.getPrototypeOf(t), r = Object.getPrototypeOf(n);
  return r === null;
}
function te(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var kr = typeof Object.getOwnPropertySymbols < "u";
function ho(e) {
  var t = Object.keys(e);
  if (!kr)
    return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length ? [].concat(t, n.filter(function(r) {
    return Bt.propertyIsEnumerable.call(e, r);
  })) : t;
}
var at = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : kr ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function vn(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function Tr(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function K(e, t) {
  return Bt.hasOwnProperty.call(e, t);
}
var fo = Object.getOwnPropertyDescriptors || function(t) {
  var n = {};
  return at(t).forEach(function(r) {
    n[r] = Ct(t, r);
  }), n;
};
function C(e, t) {
  return !!(e & t);
}
function k(e, t, n) {
  return n ? e |= t : e &= ~t, e;
}
function Kn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, go(r.key), r);
  }
}
function Fe(e, t, n) {
  return t && vo(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Le(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = bo(e)) || t) {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[r++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, de.apply(null, arguments);
}
function Vr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pn(e, t);
}
function pn(e, t) {
  return pn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, pn(e, t);
}
function po(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function go(e) {
  var t = po(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bo(e, t) {
  if (e) {
    if (typeof e == "string") return Kn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kn(e, t) : void 0;
  }
}
var ne = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Y(e) {
  function t(n, r) {
    if (gt(r))
      return e.decorate_20223_(n, r);
    pt(n, r, e);
  }
  return Object.assign(t, e);
}
function pt(e, t, n) {
  if (K(e, ne) || Kt(e, ne, de({}, e[ne])), process.env.NODE_ENV !== "production" && Tt(n) && !K(e[ne], t)) {
    var r = e.constructor.name + ".prototype." + t.toString();
    f("'" + r + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  _o(e, n, t), Tt(n) || (e[ne][t] = n);
}
function _o(e, t, n) {
  if (process.env.NODE_ENV !== "production" && !Tt(t) && K(e[ne], n)) {
    var r = e.constructor.name + ".prototype." + n.toString(), i = e[ne][n].annotationType_, o = t.annotationType_;
    f("Cannot apply '@" + o + "' to '" + r + "':" + (`
The field is already decorated with '@` + i + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function gt(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function Ft(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && f("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var p = /* @__PURE__ */ Symbol("mobx administration"), fe = /* @__PURE__ */ function() {
  function e(n) {
    n === void 0 && (n = process.env.NODE_ENV !== "production" ? "Atom@" + B() : "Atom"), this.name_ = void 0, this.flags_ = 0, this.observers_ = /* @__PURE__ */ new Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = m.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = n;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, t.reportObserved = function() {
    return Xr(this);
  }, t.reportChanged = function() {
    L(), Zr(this), I();
  }, t.toString = function() {
    return this.name_;
  }, Fe(e, [{
    key: "isBeingObserved",
    get: function() {
      return C(this.flags_, e.isBeingObservedMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isBeingObservedMask_, r);
    }
  }, {
    key: "isPendingUnobservation",
    get: function() {
      return C(this.flags_, e.isPendingUnobservationMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isPendingUnobservationMask_, r);
    }
  }, {
    key: "diffValue",
    get: function() {
      return C(this.flags_, e.diffValueMask_) ? 1 : 0;
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.diffValueMask_, r === 1);
    }
  }]);
}();
fe.isBeingObservedMask_ = 1;
fe.isPendingUnobservationMask_ = 2;
fe.diffValueMask_ = 4;
var Pn = /* @__PURE__ */ Ce("Atom", fe);
function jr(e, t, n) {
  t === void 0 && (t = Me), n === void 0 && (n = Me);
  var r = new fe(e);
  return t !== Me && Ca(r, t), n !== Me && si(r, n), r;
}
function mo(e, t) {
  return e === t;
}
function yo(e, t) {
  return Vn(e, t);
}
function wo(e, t) {
  return Vn(e, t, 1);
}
function Eo(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ie = {
  identity: mo,
  structural: yo,
  default: Eo,
  shallow: wo
};
function Ae(e, t, n) {
  return ct(e) ? e : Array.isArray(e) ? S.array(e, {
    name: n
  }) : D(e) ? S.object(e, void 0, {
    name: n
  }) : Ke(e) ? S.map(e, {
    name: n
  }) : te(e) ? S.set(e, {
    name: n
  }) : typeof e == "function" && !Ue(e) && !lt(e) ? $r(e) ? ze(e) : st(n, e) : e;
}
function Oo(e, t, n) {
  if (e == null || We(e) || Qt(e) || ve(e) || J(e))
    return e;
  if (Array.isArray(e))
    return S.array(e, {
      name: n,
      deep: !1
    });
  if (D(e))
    return S.object(e, void 0, {
      name: n,
      deep: !1
    });
  if (Ke(e))
    return S.map(e, {
      name: n,
      deep: !1
    });
  if (te(e))
    return S.set(e, {
      name: n,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && f("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function qt(e) {
  return e;
}
function Ao(e, t) {
  return process.env.NODE_ENV !== "production" && ct(e) && f("observable.struct should not be used with observable values"), Vn(e, t) ? t : e;
}
var So = "override";
function Tt(e) {
  return e.annotationType_ === So;
}
function bt(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: No,
    extend_: xo,
    decorate_20223_: Po
  };
}
function No(e, t, n, r) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (Ue(n.value))
    return 1;
  var o = Rr(e, this, t, n, !1);
  return Z(r, t, o), 2;
}
function xo(e, t, n, r) {
  var i = Rr(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function Po(e, t) {
  process.env.NODE_ENV !== "production" && Ft(t, ["method", "field"]);
  var n = t.kind, r = t.name, i = t.addInitializer, o = this, a = function(c) {
    var u, d, v, g;
    return Se((u = (d = o.options_) == null ? void 0 : d.name) != null ? u : r.toString(), c, (v = (g = o.options_) == null ? void 0 : g.autoAction) != null ? v : !1);
  };
  if (n == "field")
    return function(s) {
      var c, u = s;
      return Ue(u) || (u = a(u)), (c = o.options_) != null && c.bound && (u = u.bind(this), u.isMobxAction = !0), u;
    };
  if (n == "method") {
    var l;
    return Ue(e) || (e = a(e)), (l = this.options_) != null && l.bound && i(function() {
      var s = this, c = s[r].bind(s);
      c.isMobxAction = !0, s[r] = c;
    }), e;
  }
  f("Cannot apply '" + o.annotationType_ + "' to '" + String(r) + "' (kind: " + n + "):" + (`
'` + o.annotationType_ + "' can only be used on properties with a function value."));
}
function Do(e, t, n, r) {
  var i = t.annotationType_, o = r.value;
  process.env.NODE_ENV !== "production" && !A(o) && f("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' can only be used on properties with a function value."));
}
function Rr(e, t, n, r, i) {
  var o, a, l, s, c, u, d;
  i === void 0 && (i = h.safeDescriptors), Do(e, t, n, r);
  var v = r.value;
  if ((o = t.options_) != null && o.bound) {
    var g;
    v = v.bind((g = e.proxy_) != null ? g : e.target_);
  }
  return {
    value: Se(
      (a = (l = t.options_) == null ? void 0 : l.name) != null ? a : n.toString(),
      v,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (u = t.options_) != null && u.bound ? (d = e.proxy_) != null ? d : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function Mr(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: $o,
    extend_: Co,
    decorate_20223_: ko
  };
}
function $o(e, t, n, r) {
  var i;
  if (r === e.target_)
    return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!K(e.target_, t) || !lt(e.target_[t])) && this.extend_(e, t, n, !1) === null)
    return 0;
  if (lt(n.value))
    return 1;
  var o = Lr(e, this, t, n, !1, !1);
  return Z(r, t, o), 2;
}
function Co(e, t, n, r) {
  var i, o = Lr(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, r);
}
function ko(e, t) {
  var n;
  process.env.NODE_ENV !== "production" && Ft(t, ["method"]);
  var r = t.name, i = t.addInitializer;
  return lt(e) || (e = ze(e)), (n = this.options_) != null && n.bound && i(function() {
    var o = this, a = o[r].bind(o);
    a.isMobXFlow = !0, o[r] = a;
  }), e;
}
function To(e, t, n, r) {
  var i = t.annotationType_, o = r.value;
  process.env.NODE_ENV !== "production" && !A(o) && f("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' can only be used on properties with a generator function value."));
}
function Lr(e, t, n, r, i, o) {
  o === void 0 && (o = h.safeDescriptors), To(e, t, n, r);
  var a = r.value;
  if (lt(a) || (a = ze(a)), i) {
    var l;
    a = a.bind((l = e.proxy_) != null ? l : e.target_), a.isMobXFlow = !0;
  }
  return {
    value: a,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: o ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !o
  };
}
function Dn(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Vo,
    extend_: jo,
    decorate_20223_: Ro
  };
}
function Vo(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function jo(e, t, n, r) {
  return Mo(e, this, t, n), e.defineComputedProperty_(t, de({}, this.options_, {
    get: n.get,
    set: n.set
  }), r);
}
function Ro(e, t) {
  process.env.NODE_ENV !== "production" && Ft(t, ["getter"]);
  var n = this, r = t.name, i = t.addInitializer;
  return i(function() {
    var o = qe(this)[p], a = de({}, n.options_, {
      get: e,
      context: this
    });
    a.name || (a.name = process.env.NODE_ENV !== "production" ? o.name_ + "." + r.toString() : "ObservableObject." + r.toString()), o.values_.set(r, new z(a));
  }), function() {
    return this[p].getObservablePropValue_(r);
  };
}
function Mo(e, t, n, r) {
  var i = t.annotationType_, o = r.get;
  process.env.NODE_ENV !== "production" && !o && f("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' can only be used on getter(+setter) properties."));
}
function Wt(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Lo,
    extend_: Io,
    decorate_20223_: Uo
  };
}
function Lo(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Io(e, t, n, r) {
  var i, o;
  return zo(e, this, t, n), e.defineObservableProperty_(t, n.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : Ae, r);
}
function Uo(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw f("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    Ft(t, ["accessor"]);
  }
  var n = this, r = t.kind, i = t.name, o = /* @__PURE__ */ new WeakSet();
  function a(l, s) {
    var c, u, d = qe(l)[p], v = new Ee(s, (c = (u = n.options_) == null ? void 0 : u.enhancer) != null ? c : Ae, process.env.NODE_ENV !== "production" ? d.name_ + "." + i.toString() : "ObservableObject." + i.toString(), !1);
    d.values_.set(i, v), o.add(l);
  }
  if (r == "accessor")
    return {
      get: function() {
        return o.has(this) || a(this, e.get.call(this)), this[p].getObservablePropValue_(i);
      },
      set: function(s) {
        return o.has(this) || a(this, s), this[p].setObservablePropValue_(i, s);
      },
      init: function(s) {
        return o.has(this) || a(this, s), s;
      }
    };
}
function zo(e, t, n, r) {
  var i = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in r) && f("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' cannot be used on getter/setter properties"));
}
var Bo = "true", Ho = /* @__PURE__ */ Ir();
function Ir(e) {
  return {
    annotationType_: Bo,
    options_: e,
    make_: Ko,
    extend_: Fo,
    decorate_20223_: qo
  };
}
function Ko(e, t, n, r) {
  var i, o;
  if (n.get)
    return Gt.make_(e, t, n, r);
  if (n.set) {
    var a = Se(t.toString(), n.set);
    return r === e.target_ ? e.defineProperty_(t, {
      configurable: h.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (Z(r, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var l;
    if ($r(n.value)) {
      var s, c = (s = this.options_) != null && s.autoBind ? ze.bound : ze;
      return c.make_(e, t, n, r);
    }
    var u = (l = this.options_) != null && l.autoBind ? st.bound : st;
    return u.make_(e, t, n, r);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? S.ref : S;
  if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
    var v;
    n.value = n.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return d.make_(e, t, n, r);
}
function Fo(e, t, n, r) {
  var i, o;
  if (n.get)
    return Gt.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(t, {
      configurable: h.safeDescriptors ? e.isPlainObject_ : !0,
      set: Se(t.toString(), n.set)
    }, r);
  if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
    var a;
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var l = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? S.ref : S;
  return l.extend_(e, t, n, r);
}
function qo(e, t) {
  f("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Wo = "observable", Go = "observable.ref", Jo = "observable.shallow", Xo = "observable.struct", Ur = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(Ur);
function wt(e) {
  return e || Ur;
}
var gn = /* @__PURE__ */ Wt(Wo), Zo = /* @__PURE__ */ Wt(Go, {
  enhancer: qt
}), Yo = /* @__PURE__ */ Wt(Jo, {
  enhancer: Oo
}), Qo = /* @__PURE__ */ Wt(Xo, {
  enhancer: Ao
}), zr = /* @__PURE__ */ Y(gn);
function Et(e) {
  return e.deep === !0 ? Ae : e.deep === !1 ? qt : ta(e.defaultDecorator);
}
function ea(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : Ir(e) : void 0;
}
function ta(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : Ae;
}
function Br(e, t, n) {
  if (gt(t))
    return gn.decorate_20223_(e, t);
  if (Oe(t)) {
    pt(e, t, gn);
    return;
  }
  return ct(e) ? e : D(e) ? S.object(e, t, n) : Array.isArray(e) ? S.array(e, t) : Ke(e) ? S.map(e, t) : te(e) ? S.set(e, t) : typeof e == "object" && e !== null ? e : S.box(e, t);
}
Pr(Br, zr);
var na = {
  box: function(t, n) {
    var r = wt(n);
    return new Ee(t, Et(r), r.name, !0, r.equals);
  },
  array: function(t, n) {
    var r = wt(n);
    return (h.useProxies === !1 || r.proxy === !1 ? Qa : Ha)(t, Et(r), r.name);
  },
  map: function(t, n) {
    var r = wt(n);
    return new fi(t, Et(r), r.name);
  },
  set: function(t, n) {
    var r = wt(n);
    return new vi(t, Et(r), r.name);
  },
  object: function(t, n, r) {
    return Te(function() {
      return ci(h.useProxies === !1 || r?.proxy === !1 ? qe({}, r) : Ua({}, r), t, n);
    });
  },
  ref: /* @__PURE__ */ Y(Zo),
  shallow: /* @__PURE__ */ Y(Yo),
  deep: zr,
  struct: /* @__PURE__ */ Y(Qo)
}, S = /* @__PURE__ */ Pr(Br, na), Hr = "computed", ra = "computed.struct", bn = /* @__PURE__ */ Dn(Hr), ia = /* @__PURE__ */ Dn(ra, {
  equals: Ie.structural
}), Gt = function(t, n) {
  if (gt(n))
    return bn.decorate_20223_(t, n);
  if (Oe(n))
    return pt(t, n, bn);
  if (D(t))
    return Y(Dn(Hr, t));
  process.env.NODE_ENV !== "production" && (A(t) || f("First argument to `computed` should be an expression."), A(n) && f("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var r = D(n) ? n : {};
  return r.get = t, r.name || (r.name = t.name || ""), new z(r);
};
Object.assign(Gt, bn);
Gt.struct = /* @__PURE__ */ Y(ia);
var Fn, qn, Vt = 0, oa = 1, aa = (Fn = (qn = /* @__PURE__ */ Ct(function() {
}, "name")) == null ? void 0 : qn.configurable) != null ? Fn : !1, Wn = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Se(e, t, n, r) {
  n === void 0 && (n = !1), process.env.NODE_ENV !== "production" && (A(t) || f("`action` can only be invoked on functions"), (typeof e != "string" || !e) && f("actions should have valid names, got: '" + e + "'"));
  function i() {
    return Kr(e, n, t, r || this, arguments);
  }
  return i.isMobxAction = !0, i.toString = function() {
    return t.toString();
  }, aa && (Wn.value = e, Z(i, "name", Wn)), i;
}
function Kr(e, t, n, r, i) {
  var o = sa(e, t, r, i);
  try {
    return n.apply(r, i);
  } catch (a) {
    throw o.error_ = a, a;
  } finally {
    la(o);
  }
}
function sa(e, t, n, r) {
  var i = process.env.NODE_ENV !== "production" && P() && !!e, o = 0;
  if (process.env.NODE_ENV !== "production" && i) {
    o = Date.now();
    var a = r ? Array.from(r) : kt;
    T({
      type: Cn,
      name: e,
      object: n,
      arguments: a
    });
  }
  var l = h.trackingDerivation, s = !t || !l;
  L();
  var c = h.allowStateChanges;
  s && (ke(), c = Jt(!0));
  var u = $n(!0), d = {
    runAsAction_: s,
    prevDerivation_: l,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: u,
    notifySpy_: i,
    startTime_: o,
    actionId_: oa++,
    parentActionId_: Vt
  };
  return Vt = d.actionId_, d;
}
function la(e) {
  Vt !== e.actionId_ && f(30), Vt = e.parentActionId_, e.error_ !== void 0 && (h.suppressReactionErrors = !0), Xt(e.prevAllowStateChanges_), nt(e.prevAllowStateReads_), I(), e.runAsAction_ && oe(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && V({
    time: Date.now() - e.startTime_
  }), h.suppressReactionErrors = !1;
}
function ca(e, t) {
  var n = Jt(e);
  try {
    return t();
  } finally {
    Xt(n);
  }
}
function Jt(e) {
  var t = h.allowStateChanges;
  return h.allowStateChanges = e, t;
}
function Xt(e) {
  h.allowStateChanges = e;
}
var ua = "create", Ee = /* @__PURE__ */ function(e) {
  function t(r, i, o, a, l) {
    var s;
    return o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableValue@" + B() : "ObservableValue"), a === void 0 && (a = !0), l === void 0 && (l = Ie.default), s = e.call(this, o) || this, s.enhancer = void 0, s.name_ = void 0, s.equals = void 0, s.hasUnreportedChange_ = !1, s.interceptors_ = void 0, s.changeListeners_ = void 0, s.value_ = void 0, s.dehancer = void 0, s.enhancer = i, s.name_ = o, s.equals = l, s.value_ = i(r, void 0, o), process.env.NODE_ENV !== "production" && a && P() && Ne({
      type: ua,
      object: s,
      observableKind: "value",
      debugObjectName: s.name_,
      newValue: "" + s.value_
    }), s;
  }
  Vr(t, e);
  var n = t.prototype;
  return n.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, n.set = function(i) {
    var o = this.value_;
    if (i = this.prepareNewValue_(i), i !== h.UNCHANGED) {
      var a = P();
      process.env.NODE_ENV !== "production" && a && T({
        type: H,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: i,
        oldValue: o
      }), this.setNewValue_(i), process.env.NODE_ENV !== "production" && a && V();
    }
  }, n.prepareNewValue_ = function(i) {
    if (X(this), R(this)) {
      var o = M(this, {
        object: this,
        type: H,
        newValue: i
      });
      if (!o)
        return h.UNCHANGED;
      i = o.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? h.UNCHANGED : i;
  }, n.setNewValue_ = function(i) {
    var o = this.value_;
    this.value_ = i, this.reportChanged(), F(this) && q(this, {
      type: H,
      object: this,
      newValue: i,
      oldValue: o
    });
  }, n.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, n.intercept_ = function(i) {
    return _t(this, i);
  }, n.observe_ = function(i, o) {
    return o && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: H,
      newValue: this.value_,
      oldValue: void 0
    }), mt(this, i);
  }, n.raw = function() {
    return this.value_;
  }, n.toJSON = function() {
    return this.get();
  }, n.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, n.valueOf = function() {
    return Tr(this.get());
  }, n[Symbol.toPrimitive] = function() {
    return this.valueOf();
  }, t;
}(fe), z = /* @__PURE__ */ function() {
  function e(n) {
    this.dependenciesState_ = m.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.observers_ = /* @__PURE__ */ new Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = m.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new jt(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.flags_ = 0, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = U.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, n.get || f(31), this.derivation = n.get, this.name_ = n.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + B() : "ComputedValue"), n.set && (this.setter_ = Se(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", n.set)), this.equals_ = n.equals || (n.compareStructural || n.struct ? Ie.structural : Ie.default), this.scope_ = n.context, this.requiresReaction_ = n.requiresReaction, this.keepAlive_ = !!n.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    ga(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, t.get = function() {
    if (this.isComputing && f(32, this.name_, this.derivation), h.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      _n(this) && (this.warnAboutUntrackedRead_(), L(), this.value_ = this.computeValue_(!1), I());
    else if (Xr(this), _n(this)) {
      var r = h.trackingContext;
      this.keepAlive_ && !r && (h.trackingContext = this), this.trackAndCompute() && pa(this), h.trackingContext = r;
    }
    var i = this.value_;
    if (xt(i))
      throw i.cause;
    return i;
  }, t.set = function(r) {
    if (this.setter_) {
      this.isRunningSetter && f(33, this.name_), this.isRunningSetter = !0;
      try {
        this.setter_.call(this.scope_, r);
      } finally {
        this.isRunningSetter = !1;
      }
    } else
      f(34, this.name_);
  }, t.trackAndCompute = function() {
    var r = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === m.NOT_TRACKING_
    ), o = this.computeValue_(!0), a = i || xt(r) || xt(o) || !this.equals_(r, o);
    return a && (this.value_ = o, process.env.NODE_ENV !== "production" && P() && Ne({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: r,
      newValue: o
    })), a;
  }, t.computeValue_ = function(r) {
    this.isComputing = !0;
    var i = Jt(!1), o;
    if (r)
      o = Fr(this, this.derivation, this.scope_);
    else if (h.disableErrorBoundaries === !0)
      o = this.derivation.call(this.scope_);
    else
      try {
        o = this.derivation.call(this.scope_);
      } catch (a) {
        o = new jt(a);
      }
    return Xt(i), this.isComputing = !1, o;
  }, t.suspend_ = function() {
    this.keepAlive_ || (mn(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== U.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(r, i) {
    var o = this, a = !0, l = void 0;
    return ii(function() {
      var s = o.get();
      if (!a || i) {
        var c = ke();
        r({
          observableKind: "computed",
          debugObjectName: o.name_,
          type: H,
          object: o,
          newValue: s,
          oldValue: l
        }), oe(c);
      }
      a = !1, l = s;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== U.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : h.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return Tr(this.get());
  }, t[Symbol.toPrimitive] = function() {
    return this.valueOf();
  }, Fe(e, [{
    key: "isComputing",
    get: function() {
      return C(this.flags_, e.isComputingMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isComputingMask_, r);
    }
  }, {
    key: "isRunningSetter",
    get: function() {
      return C(this.flags_, e.isRunningSetterMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isRunningSetterMask_, r);
    }
  }, {
    key: "isBeingObserved",
    get: function() {
      return C(this.flags_, e.isBeingObservedMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isBeingObservedMask_, r);
    }
  }, {
    key: "isPendingUnobservation",
    get: function() {
      return C(this.flags_, e.isPendingUnobservationMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isPendingUnobservationMask_, r);
    }
  }, {
    key: "diffValue",
    get: function() {
      return C(this.flags_, e.diffValueMask_) ? 1 : 0;
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.diffValueMask_, r === 1);
    }
  }]);
}();
z.isComputingMask_ = 1;
z.isRunningSetterMask_ = 2;
z.isBeingObservedMask_ = 4;
z.isPendingUnobservationMask_ = 8;
z.diffValueMask_ = 16;
var Zt = /* @__PURE__ */ Ce("ComputedValue", z), m;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(m || (m = {}));
var U;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(U || (U = {}));
var jt = function(t) {
  this.cause = void 0, this.cause = t;
};
function xt(e) {
  return e instanceof jt;
}
function _n(e) {
  switch (e.dependenciesState_) {
    case m.UP_TO_DATE_:
      return !1;
    case m.NOT_TRACKING_:
    case m.STALE_:
      return !0;
    case m.POSSIBLY_STALE_: {
      for (var t = $n(!0), n = ke(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
        var a = r[o];
        if (Zt(a)) {
          if (h.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return oe(n), nt(t), !0;
            }
          if (e.dependenciesState_ === m.STALE_)
            return oe(n), nt(t), !0;
        }
      }
      return Wr(e), oe(n), nt(t), !1;
    }
  }
}
function X(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !h.allowStateChanges && (t || h.enforceActions === "always") && console.warn("[MobX] " + (h.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function da(e) {
  process.env.NODE_ENV !== "production" && !h.allowStateReads && h.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function Fr(e, t, n) {
  var r = $n(!0);
  Wr(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++h.runId;
  var i = h.trackingDerivation;
  h.trackingDerivation = e, h.inBatch++;
  var o;
  if (h.disableErrorBoundaries === !0)
    o = t.call(n);
  else
    try {
      o = t.call(n);
    } catch (a) {
      o = new jt(a);
    }
  return h.inBatch--, h.trackingDerivation = i, fa(e), ha(e), nt(r), o;
}
function ha(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : h.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function fa(e) {
  for (var t = e.observing_, n = e.observing_ = e.newObserving_, r = m.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, a = 0; a < o; a++) {
    var l = n[a];
    l.diffValue === 0 && (l.diffValue = 1, i !== a && (n[i] = l), i++), l.dependenciesState_ > r && (r = l.dependenciesState_);
  }
  for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var s = t[o];
    s.diffValue === 0 && Gr(s, e), s.diffValue = 0;
  }
  for (; i--; ) {
    var c = n[i];
    c.diffValue === 1 && (c.diffValue = 0, va(c, e));
  }
  r !== m.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function mn(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; )
    Gr(t[n], e);
  e.dependenciesState_ = m.NOT_TRACKING_;
}
function qr(e) {
  var t = ke();
  try {
    return e();
  } finally {
    oe(t);
  }
}
function ke() {
  var e = h.trackingDerivation;
  return h.trackingDerivation = null, e;
}
function oe(e) {
  h.trackingDerivation = e;
}
function $n(e) {
  var t = h.allowStateReads;
  return h.allowStateReads = e, t;
}
function nt(e) {
  h.allowStateReads = e;
}
function Wr(e) {
  if (e.dependenciesState_ !== m.UP_TO_DATE_) {
    e.dependenciesState_ = m.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; )
      t[n].lowestObserverState_ = m.UP_TO_DATE_;
  }
}
var on = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, an = !0, h = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ xr();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (an = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new on().version && (an = !1), an ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new on()) : (setTimeout(function() {
    f(35);
  }, 1), new on());
}();
function va(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Gr(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Jr(e);
}
function Jr(e) {
  e.isPendingUnobservation === !1 && (e.isPendingUnobservation = !0, h.pendingUnobservations.push(e));
}
function L() {
  h.inBatch++;
}
function I() {
  if (--h.inBatch === 0) {
    ei();
    for (var e = h.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      n.isPendingUnobservation = !1, n.observers_.size === 0 && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBUO()), n instanceof z && n.suspend_());
    }
    h.pendingUnobservations = [];
  }
}
function Xr(e) {
  da(e);
  var t = h.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved && h.trackingContext && (e.isBeingObserved = !0, e.onBO())), e.isBeingObserved) : (e.observers_.size === 0 && h.inBatch > 0 && Jr(e), !1);
}
function Zr(e) {
  e.lowestObserverState_ !== m.STALE_ && (e.lowestObserverState_ = m.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === m.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== U.NONE && Yr(t, e), t.onBecomeStale_()), t.dependenciesState_ = m.STALE_;
  }));
}
function pa(e) {
  e.lowestObserverState_ !== m.STALE_ && (e.lowestObserverState_ = m.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === m.POSSIBLY_STALE_ ? (t.dependenciesState_ = m.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== U.NONE && Yr(t, e)) : t.dependenciesState_ === m.UP_TO_DATE_ && (e.lowestObserverState_ = m.UP_TO_DATE_);
  }));
}
function ga(e) {
  e.lowestObserverState_ === m.UP_TO_DATE_ && (e.lowestObserverState_ = m.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === m.UP_TO_DATE_ && (t.dependenciesState_ = m.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Yr(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === U.BREAK) {
    var n = [];
    Qr(ka(e), n, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof z ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + n.join(`
`) + `
*/
    `)();
  }
}
function Qr(e, t, n) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(n - 1) + e.name), e.dependencies && e.dependencies.forEach(function(r) {
    return Qr(r, t, n + 1);
  });
}
var ee = /* @__PURE__ */ function() {
  function e(n, r, i, o) {
    n === void 0 && (n = process.env.NODE_ENV !== "production" ? "Reaction@" + B() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = m.NOT_TRACKING_, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0, this.isTracing_ = U.NONE, this.name_ = n, this.onInvalidate_ = r, this.errorHandler_ = i, this.requiresObservable_ = o;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled || (this.isScheduled = !0, h.pendingReactions.push(this), ei());
  }, t.runReaction_ = function() {
    if (!this.isDisposed) {
      L(), this.isScheduled = !1;
      var r = h.trackingContext;
      if (h.trackingContext = this, _n(this)) {
        this.isTrackPending = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending && P() && Ne({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      h.trackingContext = r, I();
    }
  }, t.track = function(r) {
    if (!this.isDisposed) {
      L();
      var i = P(), o;
      process.env.NODE_ENV !== "production" && i && (o = Date.now(), T({
        name: this.name_,
        type: "reaction"
      })), this.isRunning = !0;
      var a = h.trackingContext;
      h.trackingContext = this;
      var l = Fr(this, r, void 0);
      h.trackingContext = a, this.isRunning = !1, this.isTrackPending = !1, this.isDisposed && mn(this), xt(l) && this.reportExceptionInDerivation_(l.cause), process.env.NODE_ENV !== "production" && i && V({
        time: Date.now() - o
      }), I();
    }
  }, t.reportExceptionInDerivation_ = function(r) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(r, this);
      return;
    }
    if (h.disableErrorBoundaries)
      throw r;
    var o = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    h.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(o, r), process.env.NODE_ENV !== "production" && P() && Ne({
      type: "error",
      name: this.name_,
      message: o,
      error: "" + r
    }), h.globalReactionErrorHandlers.forEach(function(a) {
      return a(r, i);
    });
  }, t.dispose = function() {
    this.isDisposed || (this.isDisposed = !0, this.isRunning || (L(), mn(this), I()));
  }, t.getDisposer_ = function(r) {
    var i = this, o = function a() {
      i.dispose(), r == null || r.removeEventListener == null || r.removeEventListener("abort", a);
    };
    return r == null || r.addEventListener == null || r.addEventListener("abort", o), o[p] = this, o;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(r) {
    r === void 0 && (r = !1), Ma(this, r);
  }, Fe(e, [{
    key: "isDisposed",
    get: function() {
      return C(this.flags_, e.isDisposedMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isDisposedMask_, r);
    }
  }, {
    key: "isScheduled",
    get: function() {
      return C(this.flags_, e.isScheduledMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isScheduledMask_, r);
    }
  }, {
    key: "isTrackPending",
    get: function() {
      return C(this.flags_, e.isTrackPendingMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isTrackPendingMask_, r);
    }
  }, {
    key: "isRunning",
    get: function() {
      return C(this.flags_, e.isRunningMask_);
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.isRunningMask_, r);
    }
  }, {
    key: "diffValue",
    get: function() {
      return C(this.flags_, e.diffValueMask_) ? 1 : 0;
    },
    set: function(r) {
      this.flags_ = k(this.flags_, e.diffValueMask_, r === 1);
    }
  }]);
}();
ee.isDisposedMask_ = 1;
ee.isScheduledMask_ = 2;
ee.isTrackPendingMask_ = 4;
ee.isRunningMask_ = 8;
ee.diffValueMask_ = 16;
function ba(e) {
  return h.globalReactionErrorHandlers.push(e), function() {
    var t = h.globalReactionErrorHandlers.indexOf(e);
    t >= 0 && h.globalReactionErrorHandlers.splice(t, 1);
  };
}
var Gn = 100, _a = function(t) {
  return t();
};
function ei() {
  h.inBatch > 0 || h.isRunningReactions || _a(ma);
}
function ma() {
  h.isRunningReactions = !0;
  for (var e = h.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Gn && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Gn + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
      n[r].runReaction_();
  }
  h.isRunningReactions = !1;
}
var Rt = /* @__PURE__ */ Ce("Reaction", ee);
function P() {
  return process.env.NODE_ENV !== "production" && !!h.spyListeners.length;
}
function Ne(e) {
  if (process.env.NODE_ENV !== "production" && h.spyListeners.length)
    for (var t = h.spyListeners, n = 0, r = t.length; n < r; n++)
      t[n](e);
}
function T(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = de({}, e, {
      spyReportStart: !0
    });
    Ne(t);
  }
}
var ya = {
  type: "report-end",
  spyReportEnd: !0
};
function V(e) {
  process.env.NODE_ENV !== "production" && Ne(e ? de({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : ya);
}
function wa(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (h.spyListeners.push(e), xn(function() {
    h.spyListeners = h.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var Cn = "action", Ea = "action.bound", ti = "autoAction", Oa = "autoAction.bound", ni = "<unnamed action>", yn = /* @__PURE__ */ bt(Cn), Aa = /* @__PURE__ */ bt(Ea, {
  bound: !0
}), wn = /* @__PURE__ */ bt(ti, {
  autoAction: !0
}), Sa = /* @__PURE__ */ bt(Oa, {
  autoAction: !0,
  bound: !0
});
function ri(e) {
  var t = function(r, i) {
    if (A(r))
      return Se(r.name || ni, r, e);
    if (A(i))
      return Se(r, i, e);
    if (gt(i))
      return (e ? wn : yn).decorate_20223_(r, i);
    if (Oe(i))
      return pt(r, i, e ? wn : yn);
    if (Oe(r))
      return Y(bt(e ? ti : Cn, {
        name: r,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && f("Invalid arguments for `action`");
  };
  return t;
}
var ye = /* @__PURE__ */ ri(!1);
Object.assign(ye, yn);
var st = /* @__PURE__ */ ri(!0);
Object.assign(st, wn);
ye.bound = /* @__PURE__ */ Y(Aa);
st.bound = /* @__PURE__ */ Y(Sa);
function Na(e) {
  return Kr(e.name || ni, !1, e, this, void 0);
}
function Ue(e) {
  return A(e) && e.isMobxAction === !0;
}
function ii(e, t) {
  var n, r, i, o;
  t === void 0 && (t = Nn), process.env.NODE_ENV !== "production" && (A(e) || f("Autorun expects a function as first argument"), Ue(e) && f("Autorun does not accept actions since actions are untrackable"));
  var a = (n = (r = t) == null ? void 0 : r.name) != null ? n : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + B() : "Autorun", l = !t.scheduler && !t.delay, s;
  if (l)
    s = new ee(a, function() {
      this.track(d);
    }, t.onError, t.requiresObservable);
  else {
    var c = oi(t), u = !1;
    s = new ee(a, function() {
      u || (u = !0, c(function() {
        u = !1, s.isDisposed || s.track(d);
      }));
    }, t.onError, t.requiresObservable);
  }
  function d() {
    e(s);
  }
  return (i = t) != null && (i = i.signal) != null && i.aborted || s.schedule_(), s.getDisposer_((o = t) == null ? void 0 : o.signal);
}
var xa = function(t) {
  return t();
};
function oi(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : xa;
}
function ai(e, t, n) {
  var r, i, o;
  n === void 0 && (n = Nn), process.env.NODE_ENV !== "production" && ((!A(e) || !A(t)) && f("First and second argument to reaction should be functions"), D(n) || f("Third argument of reactions should be an object"));
  var a = (r = n.name) != null ? r : process.env.NODE_ENV !== "production" ? "Reaction@" + B() : "Reaction", l = ye(a, n.onError ? Pa(n.onError, t) : t), s = !n.scheduler && !n.delay, c = oi(n), u = !0, d = !1, v, g = n.compareStructural ? Ie.structural : n.equals || Ie.default, _ = new ee(a, function() {
    u || s ? w() : d || (d = !0, c(w));
  }, n.onError, n.requiresObservable);
  function w() {
    if (d = !1, !_.isDisposed) {
      var N = !1, G = v;
      _.track(function() {
        var Ve = ca(!1, function() {
          return e(_);
        });
        N = u || !g(v, Ve), v = Ve;
      }), (u && n.fireImmediately || !u && N) && l(v, G, _), u = !1;
    }
  }
  return (i = n) != null && (i = i.signal) != null && i.aborted || _.schedule_(), _.getDisposer_((o = n) == null ? void 0 : o.signal);
}
function Pa(e, t) {
  return function() {
    try {
      return t.apply(this, arguments);
    } catch (n) {
      e.call(this, n);
    }
  };
}
var Da = "onBO", $a = "onBUO";
function Ca(e, t, n) {
  return li(Da, e, t, n);
}
function si(e, t, n) {
  return li($a, e, t, n);
}
function li(e, t, n, r) {
  var i = Be(t), o = A(r) ? r : n, a = e + "L";
  return i[a] ? i[a].add(o) : i[a] = /* @__PURE__ */ new Set([o]), function() {
    var l = i[a];
    l && (l.delete(o), l.size === 0 && delete i[a]);
  };
}
function ci(e, t, n, r) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && f("'extendObservable' expected 2-4 arguments"), typeof e != "object" && f("'extendObservable' expects an object as first argument"), ve(e) && f("'extendObservable' should not be used on maps, use map.merge instead"), D(t) || f("'extendObservable' only accepts plain objects as second argument"), (ct(t) || ct(n)) && f("Extending an object with another observable (object) is not supported"));
  var i = fo(t);
  return Te(function() {
    var o = qe(e, r)[p];
    at(i).forEach(function(a) {
      o.extend_(
        a,
        i[a],
        // must pass "undefined" for { key: undefined }
        n && a in n ? n[a] : !0
      );
    });
  }), e;
}
function ka(e, t) {
  return ui(Be(e, t));
}
function ui(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Ta(e.observing_).map(ui)), t;
}
function Ta(e) {
  return Array.from(new Set(e));
}
var Va = 0;
function di() {
  this.message = "FLOW_CANCELLED";
}
di.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var sn = /* @__PURE__ */ Mr("flow"), ja = /* @__PURE__ */ Mr("flow.bound", {
  bound: !0
}), ze = /* @__PURE__ */ Object.assign(function(t, n) {
  if (gt(n))
    return sn.decorate_20223_(t, n);
  if (Oe(n))
    return pt(t, n, sn);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && f("Flow expects single argument with generator function");
  var r = t, i = r.name || "<unnamed flow>", o = function() {
    var l = this, s = arguments, c = ++Va, u = ye(i + " - runid: " + c + " - init", r).apply(l, s), d, v = void 0, g = new Promise(function(_, w) {
      var N = 0;
      d = w;
      function G($) {
        v = void 0;
        var ae;
        try {
          ae = ye(i + " - runid: " + c + " - yield " + N++, u.next).call(u, $);
        } catch (pe) {
          return w(pe);
        }
        Ge(ae);
      }
      function Ve($) {
        v = void 0;
        var ae;
        try {
          ae = ye(i + " - runid: " + c + " - yield " + N++, u.throw).call(u, $);
        } catch (pe) {
          return w(pe);
        }
        Ge(ae);
      }
      function Ge($) {
        if (A($?.then)) {
          $.then(Ge, w);
          return;
        }
        return $.done ? _($.value) : (v = Promise.resolve($.value), v.then(G, Ve));
      }
      G(void 0);
    });
    return g.cancel = ye(i + " - runid: " + c + " - cancel", function() {
      try {
        v && Jn(v);
        var _ = u.return(void 0), w = Promise.resolve(_.value);
        w.then(Me, Me), Jn(w), d(new di());
      } catch (N) {
        d(N);
      }
    }), g;
  };
  return o.isMobXFlow = !0, o;
}, sn);
ze.bound = /* @__PURE__ */ Y(ja);
function Jn(e) {
  A(e.cancel) && e.cancel();
}
function lt(e) {
  return e?.isMobXFlow === !0;
}
function Ra(e, t) {
  return e ? We(e) || !!e[p] || Pn(e) || Rt(e) || Zt(e) : !1;
}
function ct(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && f("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), Ra(e);
}
function Ma() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    typeof n[n.length - 1] == "boolean" && (e = n.pop());
    var i = La(n);
    if (!i)
      return f("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    i.isTracing_ === U.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? U.BREAK : U.LOG;
  }
}
function La(e) {
  switch (e.length) {
    case 0:
      return h.trackingDerivation;
    case 1:
      return Be(e[0]);
    case 2:
      return Be(e[0], e[1]);
  }
}
function re(e, t) {
  t === void 0 && (t = void 0), L();
  try {
    return e.apply(t);
  } finally {
    I();
  }
}
function ge(e) {
  return e[p];
}
var Ia = {
  has: function(t, n) {
    return process.env.NODE_ENV !== "production" && h.trackingDerivation && Je("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), ge(t).has_(n);
  },
  get: function(t, n) {
    return ge(t).get_(n);
  },
  set: function(t, n, r) {
    var i;
    return Oe(n) ? (process.env.NODE_ENV !== "production" && !ge(t).values_.has(n) && Je("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (i = ge(t).set_(n, r, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function(t, n) {
    var r;
    return process.env.NODE_ENV !== "production" && Je("delete properties from an observable object. Use 'remove' from 'mobx' instead."), Oe(n) ? (r = ge(t).delete_(n, !0)) != null ? r : !0 : !1;
  },
  defineProperty: function(t, n, r) {
    var i;
    return process.env.NODE_ENV !== "production" && Je("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (i = ge(t).defineProperty_(n, r)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && h.trackingDerivation && Je("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), ge(t).ownKeys_();
  },
  preventExtensions: function(t) {
    f(13);
  }
};
function Ua(e, t) {
  var n, r;
  return Dr(), e = qe(e, t), (r = (n = e[p]).proxy_) != null ? r : n.proxy_ = new Proxy(e, Ia);
}
function R(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function _t(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return n.push(t), xn(function() {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  });
}
function M(e, t) {
  var n = ke();
  try {
    for (var r = [].concat(e.interceptors_ || []), i = 0, o = r.length; i < o && (t = r[i](t), t && !t.type && f(14), !!t); i++)
      ;
    return t;
  } finally {
    oe(n);
  }
}
function F(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function mt(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return n.push(t), xn(function() {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  });
}
function q(e, t) {
  var n = ke(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, o = r.length; i < o; i++)
      r[i](t);
    oe(n);
  }
}
var ln = /* @__PURE__ */ Symbol("mobx-keys");
function Yt(e, t, n) {
  return process.env.NODE_ENV !== "production" && (!D(e) && !D(Object.getPrototypeOf(e)) && f("'makeAutoObservable' can only be used for classes that don't have a superclass"), We(e) && f("makeAutoObservable can only be used on objects not already made observable")), D(e) ? ci(e, e, t, n) : (Te(function() {
    var r = qe(e, n)[p];
    if (!e[ln]) {
      var i = Object.getPrototypeOf(e), o = new Set([].concat(at(e), at(i)));
      o.delete("constructor"), o.delete(p), Kt(i, ln, o);
    }
    e[ln].forEach(function(a) {
      return r.make_(
        a,
        // must pass "undefined" for { key: undefined }
        t && a in t ? t[a] : !0
      );
    });
  }), e);
}
var Xn = "splice", H = "update", za = 1e4, Ba = {
  get: function(t, n) {
    var r = t[p];
    return n === p ? r : n === "length" ? r.getArrayLength_() : typeof n == "string" && !isNaN(n) ? r.get_(parseInt(n)) : K(Mt, n) ? Mt[n] : t[n];
  },
  set: function(t, n, r) {
    var i = t[p];
    return n === "length" && i.setArrayLength_(r), typeof n == "symbol" || isNaN(n) ? t[n] = r : i.set_(parseInt(n), r), !0;
  },
  preventExtensions: function() {
    f(15);
  }
}, kn = /* @__PURE__ */ function() {
  function e(n, r, i, o) {
    n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableArray@" + B() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = o, this.atom_ = new fe(n), this.enhancer_ = function(a, l) {
      return r(a, l, process.env.NODE_ENV !== "production" ? n + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.dehanceValues_ = function(r) {
    return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
  }, t.intercept_ = function(r) {
    return _t(this, r);
  }, t.observe_ = function(r, i) {
    return i === void 0 && (i = !1), i && r({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), mt(this, r);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(r) {
    (typeof r != "number" || isNaN(r) || r < 0) && f("Out of range: " + r);
    var i = this.values_.length;
    if (r !== i)
      if (r > i) {
        for (var o = new Array(r - i), a = 0; a < r - i; a++)
          o[a] = void 0;
        this.spliceWithArray_(i, 0, o);
      } else
        this.spliceWithArray_(r, i - r);
  }, t.updateArrayLength_ = function(r, i) {
    r !== this.lastKnownLength_ && f(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && bi(r + i + 1);
  }, t.spliceWithArray_ = function(r, i, o) {
    var a = this;
    X(this.atom_);
    var l = this.values_.length;
    if (r === void 0 ? r = 0 : r > l ? r = l : r < 0 && (r = Math.max(0, l + r)), arguments.length === 1 ? i = l - r : i == null ? i = 0 : i = Math.max(0, Math.min(i, l - r)), o === void 0 && (o = kt), R(this)) {
      var s = M(this, {
        object: this.proxy_,
        type: Xn,
        index: r,
        removedCount: i,
        added: o
      });
      if (!s)
        return kt;
      i = s.removedCount, o = s.added;
    }
    if (o = o.length === 0 ? o : o.map(function(d) {
      return a.enhancer_(d, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = o.length - i;
      this.updateArrayLength_(l, c);
    }
    var u = this.spliceItemsIntoValues_(r, i, o);
    return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, u), this.dehanceValues_(u);
  }, t.spliceItemsIntoValues_ = function(r, i, o) {
    if (o.length < za) {
      var a;
      return (a = this.values_).splice.apply(a, [r, i].concat(o));
    } else {
      var l = this.values_.slice(r, r + i), s = this.values_.slice(r + i);
      this.values_.length += o.length - i;
      for (var c = 0; c < o.length; c++)
        this.values_[r + c] = o[c];
      for (var u = 0; u < s.length; u++)
        this.values_[r + o.length + u] = s[u];
      return l;
    }
  }, t.notifyArrayChildUpdate_ = function(r, i, o) {
    var a = !this.owned_ && P(), l = F(this), s = l || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: H,
      debugObjectName: this.atom_.name_,
      index: r,
      newValue: i,
      oldValue: o
    } : null;
    process.env.NODE_ENV !== "production" && a && T(s), this.atom_.reportChanged(), l && q(this, s), process.env.NODE_ENV !== "production" && a && V();
  }, t.notifyArraySplice_ = function(r, i, o) {
    var a = !this.owned_ && P(), l = F(this), s = l || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Xn,
      index: r,
      removed: o,
      added: i,
      removedCount: o.length,
      addedCount: i.length
    } : null;
    process.env.NODE_ENV !== "production" && a && T(s), this.atom_.reportChanged(), l && q(this, s), process.env.NODE_ENV !== "production" && a && V();
  }, t.get_ = function(r) {
    if (this.legacyMode_ && r >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + r + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + r);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
  }, t.set_ = function(r, i) {
    var o = this.values_;
    if (this.legacyMode_ && r > o.length && f(17, r, o.length), r < o.length) {
      X(this.atom_);
      var a = o[r];
      if (R(this)) {
        var l = M(this, {
          type: H,
          object: this.proxy_,
          // since "this" is the real array we need to pass its proxy
          index: r,
          newValue: i
        });
        if (!l)
          return;
        i = l.newValue;
      }
      i = this.enhancer_(i, a);
      var s = i !== a;
      s && (o[r] = i, this.notifyArrayChildUpdate_(r, i, a));
    } else {
      for (var c = new Array(r + 1 - o.length), u = 0; u < c.length - 1; u++)
        c[u] = void 0;
      c[c.length - 1] = i, this.spliceWithArray_(o.length, 0, c);
    }
  }, e;
}();
function Ha(e, t, n, r) {
  return n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableArray@" + B() : "ObservableArray"), r === void 0 && (r = !1), Dr(), Te(function() {
    var i = new kn(n, t, r, !1);
    Cr(i.values_, p, i);
    var o = new Proxy(i.values_, Ba);
    return i.proxy_ = o, e && e.length && i.spliceWithArray_(0, 0, e), o;
  });
}
var Mt = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var n = this[p];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, n) {
    for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      i[o - 2] = arguments[o];
    var a = this[p];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, n);
    }
    return a.spliceWithArray_(t, n, i);
  },
  spliceWithArray: function(t, n, r) {
    return this[p].spliceWithArray_(t, n, r);
  },
  push: function() {
    for (var t = this[p], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[p].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[p], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function() {
    return h.trackingDerivation && f(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    h.trackingDerivation && f(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var n = this[p], r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  }
};
y("at", j);
y("concat", j);
y("flat", j);
y("includes", j);
y("indexOf", j);
y("join", j);
y("lastIndexOf", j);
y("slice", j);
y("toString", j);
y("toLocaleString", j);
y("toSorted", j);
y("toSpliced", j);
y("with", j);
y("every", W);
y("filter", W);
y("find", W);
y("findIndex", W);
y("findLast", W);
y("findLastIndex", W);
y("flatMap", W);
y("forEach", W);
y("map", W);
y("some", W);
y("toReversed", W);
y("reduce", hi);
y("reduceRight", hi);
function y(e, t) {
  typeof Array.prototype[e] == "function" && (Mt[e] = t(e));
}
function j(e) {
  return function() {
    var t = this[p];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function W(e) {
  return function(t, n) {
    var r = this, i = this[p];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function(a, l) {
      return t.call(n, a, l, r);
    });
  };
}
function hi(e) {
  return function() {
    var t = this, n = this[p];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_), i = arguments[0];
    return arguments[0] = function(o, a, l) {
      return i(o, a, l, t);
    }, r[e].apply(r, arguments);
  };
}
var Ka = /* @__PURE__ */ Ce("ObservableArrayAdministration", kn);
function Qt(e) {
  return Ht(e) && Ka(e[p]);
}
var Fa = {}, ce = "add", Lt = "delete", fi = /* @__PURE__ */ function() {
  function e(n, r, i) {
    var o = this;
    r === void 0 && (r = Ae), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableMap@" + B() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[p] = Fa, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = i, A(Map) || f(18), Te(function() {
      o.keysAtom_ = jr(process.env.NODE_ENV !== "production" ? o.name_ + ".keys()" : "ObservableMap.keys()"), o.data_ = /* @__PURE__ */ new Map(), o.hasMap_ = /* @__PURE__ */ new Map(), n && o.merge(n);
    });
  }
  var t = e.prototype;
  return t.has_ = function(r) {
    return this.data_.has(r);
  }, t.has = function(r) {
    var i = this;
    if (!h.trackingDerivation)
      return this.has_(r);
    var o = this.hasMap_.get(r);
    if (!o) {
      var a = o = new Ee(this.has_(r), qt, process.env.NODE_ENV !== "production" ? this.name_ + "." + vn(r) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(r, a), si(a, function() {
        return i.hasMap_.delete(r);
      });
    }
    return o.get();
  }, t.set = function(r, i) {
    var o = this.has_(r);
    if (R(this)) {
      var a = M(this, {
        type: o ? H : ce,
        object: this,
        newValue: i,
        name: r
      });
      if (!a)
        return this;
      i = a.newValue;
    }
    return o ? this.updateValue_(r, i) : this.addValue_(r, i), this;
  }, t.delete = function(r) {
    var i = this;
    if (X(this.keysAtom_), R(this)) {
      var o = M(this, {
        type: Lt,
        object: this,
        name: r
      });
      if (!o)
        return !1;
    }
    if (this.has_(r)) {
      var a = P(), l = F(this), s = l || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Lt,
        object: this,
        oldValue: this.data_.get(r).value_,
        name: r
      } : null;
      return process.env.NODE_ENV !== "production" && a && T(s), re(function() {
        var c;
        i.keysAtom_.reportChanged(), (c = i.hasMap_.get(r)) == null || c.setNewValue_(!1);
        var u = i.data_.get(r);
        u.setNewValue_(void 0), i.data_.delete(r);
      }), l && q(this, s), process.env.NODE_ENV !== "production" && a && V(), !0;
    }
    return !1;
  }, t.updateValue_ = function(r, i) {
    var o = this.data_.get(r);
    if (i = o.prepareNewValue_(i), i !== h.UNCHANGED) {
      var a = P(), l = F(this), s = l || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: H,
        object: this,
        oldValue: o.value_,
        name: r,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && a && T(s), o.setNewValue_(i), l && q(this, s), process.env.NODE_ENV !== "production" && a && V();
    }
  }, t.addValue_ = function(r, i) {
    var o = this;
    X(this.keysAtom_), re(function() {
      var c, u = new Ee(i, o.enhancer_, process.env.NODE_ENV !== "production" ? o.name_ + "." + vn(r) : "ObservableMap.key", !1);
      o.data_.set(r, u), i = u.value_, (c = o.hasMap_.get(r)) == null || c.setNewValue_(!0), o.keysAtom_.reportChanged();
    });
    var a = P(), l = F(this), s = l || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ce,
      object: this,
      name: r,
      newValue: i
    } : null;
    process.env.NODE_ENV !== "production" && a && T(s), l && q(this, s), process.env.NODE_ENV !== "production" && a && V();
  }, t.get = function(r) {
    return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var r = this, i = this.keys();
    return ut({
      next: function() {
        var a = i.next(), l = a.done, s = a.value;
        return {
          done: l,
          value: l ? void 0 : r.get(s)
        };
      }
    });
  }, t.entries = function() {
    var r = this, i = this.keys();
    return ut({
      next: function() {
        var a = i.next(), l = a.done, s = a.value;
        return {
          done: l,
          value: l ? void 0 : [s, r.get(s)]
        };
      }
    });
  }, t[Symbol.iterator] = function() {
    return this.entries();
  }, t.forEach = function(r, i) {
    for (var o = Le(this), a; !(a = o()).done; ) {
      var l = a.value, s = l[0], c = l[1];
      r.call(i, c, s, this);
    }
  }, t.merge = function(r) {
    var i = this;
    return ve(r) && (r = new Map(r)), re(function() {
      D(r) ? ho(r).forEach(function(o) {
        return i.set(o, r[o]);
      }) : Array.isArray(r) ? r.forEach(function(o) {
        var a = o[0], l = o[1];
        return i.set(a, l);
      }) : Ke(r) ? (uo(r) || f(19, r), r.forEach(function(o, a) {
        return i.set(a, o);
      })) : r != null && f(20, r);
    }), this;
  }, t.clear = function() {
    var r = this;
    re(function() {
      qr(function() {
        for (var i = Le(r.keys()), o; !(o = i()).done; ) {
          var a = o.value;
          r.delete(a);
        }
      });
    });
  }, t.replace = function(r) {
    var i = this;
    return re(function() {
      for (var o = qa(r), a = /* @__PURE__ */ new Map(), l = !1, s = Le(i.data_.keys()), c; !(c = s()).done; ) {
        var u = c.value;
        if (!o.has(u)) {
          var d = i.delete(u);
          if (d)
            l = !0;
          else {
            var v = i.data_.get(u);
            a.set(u, v);
          }
        }
      }
      for (var g = Le(o.entries()), _; !(_ = g()).done; ) {
        var w = _.value, N = w[0], G = w[1], Ve = i.data_.has(N);
        if (i.set(N, G), i.data_.has(N)) {
          var Ge = i.data_.get(N);
          a.set(N, Ge), Ve || (l = !0);
        }
      }
      if (!l)
        if (i.data_.size !== a.size)
          i.keysAtom_.reportChanged();
        else
          for (var $ = i.data_.keys(), ae = a.keys(), pe = $.next(), Hn = ae.next(); !pe.done; ) {
            if (pe.value !== Hn.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            pe = $.next(), Hn = ae.next();
          }
      i.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(r, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && f("`observe` doesn't support fireImmediately=true in combination with maps."), mt(this, r);
  }, t.intercept_ = function(r) {
    return _t(this, r);
  }, Fe(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function() {
      return "Map";
    }
  }]);
}(), ve = /* @__PURE__ */ Ce("ObservableMap", fi);
function qa(e) {
  if (Ke(e) || ve(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (D(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var n in e)
      t.set(n, e[n]);
    return t;
  } else
    return f(21, e);
}
var Wa = {}, vi = /* @__PURE__ */ function() {
  function e(n, r, i) {
    var o = this;
    r === void 0 && (r = Ae), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableSet@" + B() : "ObservableSet"), this.name_ = void 0, this[p] = Wa, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, A(Set) || f(22), this.enhancer_ = function(a, l) {
      return r(a, l, i);
    }, Te(function() {
      o.atom_ = jr(o.name_), n && o.replace(n);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.clear = function() {
    var r = this;
    re(function() {
      qr(function() {
        for (var i = Le(r.data_.values()), o; !(o = i()).done; ) {
          var a = o.value;
          r.delete(a);
        }
      });
    });
  }, t.forEach = function(r, i) {
    for (var o = Le(this), a; !(a = o()).done; ) {
      var l = a.value;
      r.call(i, l, l, this);
    }
  }, t.add = function(r) {
    var i = this;
    if (X(this.atom_), R(this)) {
      var o = M(this, {
        type: ce,
        object: this,
        newValue: r
      });
      if (!o)
        return this;
    }
    if (!this.has(r)) {
      re(function() {
        i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged();
      });
      var a = process.env.NODE_ENV !== "production" && P(), l = F(this), s = l || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ce,
        object: this,
        newValue: r
      } : null;
      a && process.env.NODE_ENV !== "production" && T(s), l && q(this, s), a && process.env.NODE_ENV !== "production" && V();
    }
    return this;
  }, t.delete = function(r) {
    var i = this;
    if (R(this)) {
      var o = M(this, {
        type: Lt,
        object: this,
        oldValue: r
      });
      if (!o)
        return !1;
    }
    if (this.has(r)) {
      var a = process.env.NODE_ENV !== "production" && P(), l = F(this), s = l || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Lt,
        object: this,
        oldValue: r
      } : null;
      return a && process.env.NODE_ENV !== "production" && T(s), re(function() {
        i.atom_.reportChanged(), i.data_.delete(r);
      }), l && q(this, s), a && process.env.NODE_ENV !== "production" && V(), !0;
    }
    return !1;
  }, t.has = function(r) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
  }, t.entries = function() {
    var r = 0, i = Array.from(this.keys()), o = Array.from(this.values());
    return ut({
      next: function() {
        var l = r;
        return r += 1, l < o.length ? {
          value: [i[l], o[l]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var r = this, i = 0, o = Array.from(this.data_.values());
    return ut({
      next: function() {
        return i < o.length ? {
          value: r.dehanceValue_(o[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.intersection = function(r) {
    if (te(r) && !J(r))
      return r.intersection(this);
    var i = new Set(this);
    return i.intersection(r);
  }, t.union = function(r) {
    if (te(r) && !J(r))
      return r.union(this);
    var i = new Set(this);
    return i.union(r);
  }, t.difference = function(r) {
    return new Set(this).difference(r);
  }, t.symmetricDifference = function(r) {
    if (te(r) && !J(r))
      return r.symmetricDifference(this);
    var i = new Set(this);
    return i.symmetricDifference(r);
  }, t.isSubsetOf = function(r) {
    return new Set(this).isSubsetOf(r);
  }, t.isSupersetOf = function(r) {
    return new Set(this).isSupersetOf(r);
  }, t.isDisjointFrom = function(r) {
    if (te(r) && !J(r))
      return r.isDisjointFrom(this);
    var i = new Set(this);
    return i.isDisjointFrom(r);
  }, t.replace = function(r) {
    var i = this;
    return J(r) && (r = new Set(r)), re(function() {
      Array.isArray(r) ? (i.clear(), r.forEach(function(o) {
        return i.add(o);
      })) : te(r) ? (i.clear(), r.forEach(function(o) {
        return i.add(o);
      })) : r != null && f("Cannot initialize set from " + r);
    }), this;
  }, t.observe_ = function(r, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && f("`observe` doesn't support fireImmediately=true in combination with sets."), mt(this, r);
  }, t.intercept_ = function(r) {
    return _t(this, r);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Symbol.iterator] = function() {
    return this.values();
  }, Fe(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function() {
      return "Set";
    }
  }]);
}(), J = /* @__PURE__ */ Ce("ObservableSet", vi), Zn = /* @__PURE__ */ Object.create(null), Yn = "remove", En = /* @__PURE__ */ function() {
  function e(n, r, i, o) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), o === void 0 && (o = Ho), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = n, this.values_ = r, this.name_ = i, this.defaultAnnotation_ = o, this.keysAtom_ = new fe(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = D(this.target_), process.env.NODE_ENV !== "production" && !mi(this.defaultAnnotation_) && f("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, t.setObservablePropValue_ = function(r, i) {
    var o = this.values_.get(r);
    if (o instanceof z)
      return o.set(i), !0;
    if (R(this)) {
      var a = M(this, {
        type: H,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: i
      });
      if (!a)
        return null;
      i = a.newValue;
    }
    if (i = o.prepareNewValue_(i), i !== h.UNCHANGED) {
      var l = F(this), s = process.env.NODE_ENV !== "production" && P(), c = l || s ? {
        type: H,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: o.value_,
        name: r,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && s && T(c), o.setNewValue_(i), l && q(this, c), process.env.NODE_ENV !== "production" && s && V();
    }
    return !0;
  }, t.get_ = function(r) {
    return h.trackingDerivation && !K(this.target_, r) && this.has_(r), this.target_[r];
  }, t.set_ = function(r, i, o) {
    return o === void 0 && (o = !1), K(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, i) : o ? Reflect.set(this.target_, r, i) : (this.target_[r] = i, !0) : this.extend_(r, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, o);
  }, t.has_ = function(r) {
    if (!h.trackingDerivation)
      return r in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(r);
    return i || (i = new Ee(r in this.target_, qt, process.env.NODE_ENV !== "production" ? this.name_ + "." + vn(r) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(r, i)), i.get();
  }, t.make_ = function(r, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (tr(this, i, r), !(r in this.target_)) {
        var o;
        if ((o = this.target_[ne]) != null && o[r])
          return;
        f(1, i.annotationType_, this.name_ + "." + r.toString());
      }
      for (var a = this.target_; a && a !== Bt; ) {
        var l = Ct(a, r);
        if (l) {
          var s = i.make_(this, r, l, a);
          if (s === 0)
            return;
          if (s === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      er(this, i, r);
    }
  }, t.extend_ = function(r, i, o, a) {
    if (a === void 0 && (a = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)
      return this.defineProperty_(r, i, a);
    tr(this, o, r);
    var l = o.extend_(this, r, i, a);
    return l && er(this, o, r), l;
  }, t.defineProperty_ = function(r, i, o) {
    o === void 0 && (o = !1), X(this.keysAtom_);
    try {
      L();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (R(this)) {
        var l = M(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: ce,
          newValue: i.value
        });
        if (!l)
          return null;
        var s = l.newValue;
        i.value !== s && (i = de({}, i, {
          value: s
        }));
      }
      if (o) {
        if (!Reflect.defineProperty(this.target_, r, i))
          return !1;
      } else
        Z(this.target_, r, i);
      this.notifyPropertyAddition_(r, i.value);
    } finally {
      I();
    }
    return !0;
  }, t.defineObservableProperty_ = function(r, i, o, a) {
    a === void 0 && (a = !1), X(this.keysAtom_);
    try {
      L();
      var l = this.delete_(r);
      if (!l)
        return l;
      if (R(this)) {
        var s = M(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: ce,
          newValue: i
        });
        if (!s)
          return null;
        i = s.newValue;
      }
      var c = Qn(r), u = {
        configurable: h.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, r, u))
          return !1;
      } else
        Z(this.target_, r, u);
      var d = new Ee(i, o, process.env.NODE_ENV !== "production" ? this.name_ + "." + r.toString() : "ObservableObject.key", !1);
      this.values_.set(r, d), this.notifyPropertyAddition_(r, d.value_);
    } finally {
      I();
    }
    return !0;
  }, t.defineComputedProperty_ = function(r, i, o) {
    o === void 0 && (o = !1), X(this.keysAtom_);
    try {
      L();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (R(this)) {
        var l = M(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: ce,
          newValue: void 0
        });
        if (!l)
          return null;
      }
      i.name || (i.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + r.toString() : "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var s = Qn(r), c = {
        configurable: h.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: s.get,
        set: s.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, r, c))
          return !1;
      } else
        Z(this.target_, r, c);
      this.values_.set(r, new z(i)), this.notifyPropertyAddition_(r, void 0);
    } finally {
      I();
    }
    return !0;
  }, t.delete_ = function(r, i) {
    if (i === void 0 && (i = !1), X(this.keysAtom_), !K(this.target_, r))
      return !0;
    if (R(this)) {
      var o = M(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: Yn
      });
      if (!o)
        return null;
    }
    try {
      var a;
      L();
      var l = F(this), s = process.env.NODE_ENV !== "production" && P(), c = this.values_.get(r), u = void 0;
      if (!c && (l || s)) {
        var d;
        u = (d = Ct(this.target_, r)) == null ? void 0 : d.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[r], c && (this.values_.delete(r), c instanceof Ee && (u = c.value_), Zr(c)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (a = a.get(r)) == null || a.set(r in this.target_), l || s) {
        var v = {
          type: Yn,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: u,
          name: r
        };
        process.env.NODE_ENV !== "production" && s && T(v), l && q(this, v), process.env.NODE_ENV !== "production" && s && V();
      }
    } finally {
      I();
    }
    return !0;
  }, t.observe_ = function(r, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && f("`observe` doesn't support the fire immediately property for observable objects."), mt(this, r);
  }, t.intercept_ = function(r) {
    return _t(this, r);
  }, t.notifyPropertyAddition_ = function(r, i) {
    var o, a = F(this), l = process.env.NODE_ENV !== "production" && P();
    if (a || l) {
      var s = a || l ? {
        type: ce,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && l && T(s), a && q(this, s), process.env.NODE_ENV !== "production" && l && V();
    }
    (o = this.pendingKeys_) == null || (o = o.get(r)) == null || o.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), at(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function qe(e, t) {
  var n;
  if (process.env.NODE_ENV !== "production" && t && We(e) && f("Options can't be provided for already observable objects."), K(e, p))
    return process.env.NODE_ENV !== "production" && !(_i(e) instanceof En) && f("Cannot convert '" + It(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && f("Cannot make the designated object observable; it is not extensible");
  var r = (n = t?.name) != null ? n : process.env.NODE_ENV !== "production" ? (D(e) ? "ObservableObject" : e.constructor.name) + "@" + B() : "ObservableObject", i = new En(e, /* @__PURE__ */ new Map(), String(r), ea(t));
  return Kt(e, p, i), e;
}
var Ga = /* @__PURE__ */ Ce("ObservableObjectAdministration", En);
function Qn(e) {
  return Zn[e] || (Zn[e] = {
    get: function() {
      return this[p].getObservablePropValue_(e);
    },
    set: function(n) {
      return this[p].setObservablePropValue_(e, n);
    }
  });
}
function We(e) {
  return Ht(e) ? Ga(e[p]) : !1;
}
function er(e, t, n) {
  var r;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[n] = t), (r = e.target_[ne]) == null || delete r[n];
}
function tr(e, t, n) {
  if (process.env.NODE_ENV !== "production" && !mi(t) && f("Cannot annotate '" + e.name_ + "." + n.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !Tt(t) && K(e.appliedAnnotations_, n)) {
    var r = e.name_ + "." + n.toString(), i = e.appliedAnnotations_[n].annotationType_, o = t.annotationType_;
    f("Cannot apply '" + o + "' to '" + r + "':" + (`
The field is already annotated with '` + i + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var Ja = /* @__PURE__ */ gi(0), Xa = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), cn = 0, pi = function() {
};
function Za(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
Za(pi, Array.prototype);
var Tn = /* @__PURE__ */ function(e) {
  function t(r, i, o, a) {
    var l;
    return o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableArray@" + B() : "ObservableArray"), a === void 0 && (a = !1), l = e.call(this) || this, Te(function() {
      var s = new kn(o, i, a, !0);
      s.proxy_ = l, Cr(l, p, s), r && r.length && l.spliceWithArray(0, 0, r), Xa && Object.defineProperty(l, "0", Ja);
    }), l;
  }
  Vr(t, e);
  var n = t.prototype;
  return n.concat = function() {
    this[p].atom_.reportObserved();
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      o.map(function(l) {
        return Qt(l) ? l.slice() : l;
      })
    );
  }, n[Symbol.iterator] = function() {
    var r = this, i = 0;
    return ut({
      next: function() {
        return i < r.length ? {
          value: r[i++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, Fe(t, [{
    key: "length",
    get: function() {
      return this[p].getArrayLength_();
    },
    set: function(i) {
      this[p].setArrayLength_(i);
    }
  }, {
    key: Symbol.toStringTag,
    get: function() {
      return "Array";
    }
  }]);
}(pi);
Object.entries(Mt).forEach(function(e) {
  var t = e[0], n = e[1];
  t !== "concat" && Kt(Tn.prototype, t, n);
});
function gi(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[p].get_(e);
    },
    set: function(n) {
      this[p].set_(e, n);
    }
  };
}
function Ya(e) {
  Z(Tn.prototype, "" + e, gi(e));
}
function bi(e) {
  if (e > cn) {
    for (var t = cn; t < e + 100; t++)
      Ya(t);
    cn = e;
  }
}
bi(1e3);
function Qa(e, t, n) {
  return new Tn(e, t, n);
}
function Be(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Qt(e))
      return t !== void 0 && f(23), e[p].atom_;
    if (J(e))
      return e.atom_;
    if (ve(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || f(25, t, It(e)), n;
    }
    if (We(e)) {
      if (!t)
        return f(26);
      var r = e[p].values_.get(t);
      return r || f(27, t, It(e)), r;
    }
    if (Pn(e) || Zt(e) || Rt(e))
      return e;
  } else if (A(e) && Rt(e[p]))
    return e[p];
  f(28);
}
function _i(e, t) {
  if (e || f(29), Pn(e) || Zt(e) || Rt(e) || ve(e) || J(e))
    return e;
  if (e[p])
    return e[p];
  f(24, e);
}
function It(e, t) {
  var n;
  if (t !== void 0)
    n = Be(e, t);
  else {
    if (Ue(e))
      return e.name;
    We(e) || ve(e) || J(e) ? n = _i(e) : n = Be(e);
  }
  return n.name_;
}
function Te(e) {
  var t = ke(), n = Jt(!0);
  L();
  try {
    return e();
  } finally {
    I(), Xt(n), oe(t);
  }
}
var nr = Bt.toString;
function Vn(e, t, n) {
  return n === void 0 && (n = -1), On(e, t, n);
}
function On(e, t, n, r, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object")
    return !1;
  var a = nr.call(e);
  if (a !== nr.call(t))
    return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      n >= 0 && n++;
      break;
  }
  e = rr(e), t = rr(t);
  var l = a === "[object Array]";
  if (!l) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var s = e.constructor, c = t.constructor;
    if (s !== c && !(A(s) && s instanceof s && A(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (n === 0)
    return !1;
  n < 0 && (n = -1), r = r || [], i = i || [];
  for (var u = r.length; u--; )
    if (r[u] === e)
      return i[u] === t;
  if (r.push(e), i.push(t), l) {
    if (u = e.length, u !== t.length)
      return !1;
    for (; u--; )
      if (!On(e[u], t[u], n - 1, r, i))
        return !1;
  } else {
    var d = Object.keys(e), v;
    if (u = d.length, Object.keys(t).length !== u)
      return !1;
    for (; u--; )
      if (v = d[u], !(K(t, v) && On(e[v], t[v], n - 1, r, i)))
        return !1;
  }
  return r.pop(), i.pop(), !0;
}
function rr(e) {
  return Qt(e) ? e.slice() : Ke(e) || ve(e) || te(e) || J(e) ? Array.from(e.entries()) : e;
}
function ut(e) {
  return e[Symbol.iterator] = es, e;
}
function es() {
  return this;
}
function mi(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && A(e.make_) && A(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = xr();
  typeof t[e] > "u" && f("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: wa,
  extras: {
    getDebugName: It
  },
  $mobx: p
});
const ir = "copilot-conf";
class ue {
  static get sessionConfiguration() {
    const t = sessionStorage.getItem(ir);
    return t ? JSON.parse(t) : {};
  }
  static saveCopilotActivation(t) {
    const n = this.sessionConfiguration;
    n.active = t, this.persist(n);
  }
  static getCopilotActivation() {
    return this.sessionConfiguration.active;
  }
  static saveSpotlightActivation(t) {
    const n = this.sessionConfiguration;
    n.spotlightActive = t, this.persist(n);
  }
  static getSpotlightActivation() {
    return this.sessionConfiguration.spotlightActive;
  }
  static saveSpotlightPosition(t, n, r, i) {
    const o = this.sessionConfiguration;
    o.spotlightPosition = { left: t, top: n, right: r, bottom: i }, this.persist(o);
  }
  static getSpotlightPosition() {
    return this.sessionConfiguration.spotlightPosition;
  }
  static saveDrawerSize(t, n) {
    const r = this.sessionConfiguration;
    r.drawerSizes = r.drawerSizes ?? {}, r.drawerSizes[t] = n, this.persist(r);
  }
  static getDrawerSize(t) {
    const n = this.sessionConfiguration;
    if (n.drawerSizes)
      return n.drawerSizes[t];
  }
  static savePanelConfigurations(t) {
    const n = this.sessionConfiguration;
    n.sectionPanelState = t, this.persist(n);
  }
  static getPanelConfigurations() {
    return this.sessionConfiguration.sectionPanelState;
  }
  static persist(t) {
    sessionStorage.setItem(ir, JSON.stringify(t));
  }
  static savePrompts(t) {
    const n = this.sessionConfiguration;
    n.prompts = t, this.persist(n);
  }
  static getPrompts() {
    return this.sessionConfiguration.prompts || [];
  }
}
class ts {
  constructor() {
    this.spotlightActive = !1, this.welcomeActive = !1, this.loginCheckActive = !1, this.userInfo = void 0, this.active = !1, this.activatedFrom = null, this.activatedAtLeastOnce = !1, this.operationInProgress = void 0, this.operationWaitsHmrUpdate = void 0, this.operationWaitsHmrUpdateTimeout = void 0, this.idePluginState = void 0, this.notifications = [], this.infoTooltip = null, this.sectionPanelDragging = !1, this.spotlightDragging = !1, this.sectionPanelResizing = !1, this.drawerResizing = !1, this.jdkInfo = void 0, Yt(this, {
      notifications: S.shallow
    }), this.spotlightActive = ue.getSpotlightActivation() ?? !1;
  }
  setActive(t, n) {
    this.active = t, t && (this.activatedAtLeastOnce = !0), this.activatedFrom = n ?? null;
  }
  setSpotlightActive(t) {
    this.spotlightActive = t;
  }
  setWelcomeActive(t) {
    this.welcomeActive = t;
  }
  setLoginCheckActive(t) {
    this.loginCheckActive = t;
  }
  setUserInfo(t) {
    this.userInfo = t;
  }
  startOperation(t) {
    if (this.operationInProgress)
      throw new Error(`An ${t} operation is already in progress`);
    if (this.operationWaitsHmrUpdate)
      throw new Error("Wait for files to be updated to start a new operation");
    this.operationInProgress = t;
  }
  stopOperation(t) {
    if (this.operationInProgress) {
      if (this.operationInProgress !== t)
        return;
    } else return;
    this.operationInProgress = void 0;
  }
  setIdePluginState(t) {
    this.idePluginState = t;
  }
  toggleActive(t) {
    this.setActive(!this.active, this.active ? null : t ?? null);
  }
  reset() {
    this.active = !1, this.activatedAtLeastOnce = !1;
  }
  setNotifications(t) {
    this.notifications = t;
  }
  removeNotification(t) {
    t.animatingOut = !0, setTimeout(() => {
      this.reallyRemoveNotification(t);
    }, 180);
  }
  reallyRemoveNotification(t) {
    const n = this.notifications.indexOf(t);
    n > -1 && this.notifications.splice(n, 1);
  }
  setTooltip(t, n) {
    this.infoTooltip = {
      text: t,
      loader: n
    };
  }
  clearTooltip() {
    this.infoTooltip = null;
  }
  setSectionPanelDragging(t) {
    this.sectionPanelDragging = t;
  }
  setSpotlightDragging(t) {
    this.spotlightDragging = t;
  }
  setSectionPanelResizing(t) {
    this.sectionPanelResizing = t;
  }
  setDrawerResizing(t) {
    this.drawerResizing = t;
  }
}
const xe = "copilot-", ns = "24.5.0", Rl = "attention-required", Ml = "https://plugins.jetbrains.com/plugin/23758-vaadin", Ll = "https://marketplace.visualstudio.com/items?itemName=vaadin.vaadin-vscode", Il = (e, t, n) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom, rs = (e) => {
  const t = [];
  let n = os(e);
  for (; n; )
    t.push(n), n = n.parentElement;
  return t;
}, is = (e, t) => {
  let n = e;
  for (; !(n instanceof HTMLElement && n.localName === `${xe}main`); ) {
    if (!n.isConnected)
      return null;
    if (n.parentNode ? n = n.parentNode : n.host && (n = n.host), n instanceof HTMLElement && n.localName === t)
      return n;
  }
  return null;
};
function os(e) {
  return e.parentElement ?? e.parentNode?.host;
}
function dt(e) {
  return !e || !(e instanceof HTMLElement) ? !1 : [...rs(e), e].map((t) => t.localName).some((t) => t.startsWith(xe));
}
function Ul(e) {
  return e instanceof Element;
}
function zl(e) {
  return e.startsWith("vaadin-") ? e.substring(7).split("-").map((r) => r.charAt(0).toUpperCase() + r.slice(1)).join(" ") : e;
}
function Bl(e) {
  if (!e)
    return;
  if (e.id)
    return `#${e.id}`;
  if (!e.children)
    return;
  const t = Array.from(e.children).find((r) => r.localName === "label");
  if (t)
    return t.outerText.trim();
  const n = Array.from(e.childNodes).find(
    (r) => r.nodeType === Node.TEXT_NODE && r.textContent && r.textContent.trim().length > 0
  );
  if (n && n.textContent)
    return n.textContent.trim();
}
var yi = /* @__PURE__ */ ((e) => (e["vaadin-combo-box"] = "vaadin-combo-box", e["vaadin-date-picker"] = "vaadin-date-picker", e["vaadin-dialog"] = "vaadin-dialog", e["vaadin-multi-select-combo-box"] = "vaadin-multi-select-combo-box", e["vaadin-select"] = "vaadin-select", e["vaadin-time-picker"] = "vaadin-time-picker", e["vaadin-popover"] = "vaadin-popover", e))(yi || {});
const Xe = {
  "vaadin-combo-box": {
    hideOnActivation: !0,
    open: (e) => Ot(e),
    close: (e) => At(e)
  },
  "vaadin-select": {
    hideOnActivation: !0,
    open: (e) => {
      const t = e;
      Ei(t, t._overlayElement), t.opened = !0;
    },
    close: (e) => {
      const t = e;
      Oi(t, t._overlayElement), t.opened = !1;
    }
  },
  "vaadin-multi-select-combo-box": {
    hideOnActivation: !0,
    open: (e) => Ot(e.$.comboBox),
    close: (e) => {
      At(e.$.comboBox), e.removeAttribute("focused");
    }
  },
  "vaadin-date-picker": {
    hideOnActivation: !0,
    open: (e) => Ot(e),
    close: (e) => At(e)
  },
  "vaadin-time-picker": {
    hideOnActivation: !0,
    open: (e) => Ot(e.$.comboBox),
    close: (e) => {
      At(e.$.comboBox), e.removeAttribute("focused");
    }
  },
  "vaadin-dialog": {
    hideOnActivation: !1
  },
  "vaadin-popover": {
    hideOnActivation: !1
  }
}, wi = (e) => {
  e.preventDefault(), e.stopImmediatePropagation();
}, Ot = (e) => {
  e.addEventListener("focusout", wi, { capture: !0 }), Ei(e), e.opened = !0;
}, At = (e) => {
  Oi(e), e.removeAttribute("focused"), e.removeEventListener("focusout", wi, { capture: !0 }), e.opened = !1;
}, Ei = (e, t) => {
  const n = t ?? e.$.overlay;
  n.__oldModeless = n.modeless, n.modeless = !0;
}, Oi = (e, t) => {
  const n = t ?? e.$.overlay;
  n.modeless = n.__oldModeless !== void 0 ? n.__oldModeless : n.modeless, delete n.__oldModeless;
};
class as {
  constructor() {
    this.openedOverlayOwners = /* @__PURE__ */ new Set(), this.overlayCloseEventListener = (t) => {
      dt(t.target?.owner) || (window.Vaadin.copilot._uiState.active || dt(t.detail.sourceEvent.target)) && (t.preventDefault(), t.stopImmediatePropagation());
    };
  }
  /**
   * Modifies pointer-events property to auto if dialog overlay is present on body element. <br/>
   * Overriding closeOnOutsideClick method in order to keep overlay present while copilot is active
   * @private
   */
  onCopilotActivation() {
    const t = Array.from(document.body.children).find(
      (r) => r.localName.startsWith("vaadin") && r.localName.endsWith("-overlay")
    );
    if (!t)
      return;
    const n = this.getOwner(t);
    if (n) {
      const r = Xe[n.localName];
      if (!r)
        return;
      r.hideOnActivation && r.close ? r.close(n) : document.body.style.getPropertyValue("pointer-events") === "none" && document.body.style.removeProperty("pointer-events");
    }
  }
  /**
   * Restores pointer-events state on deactivation. <br/>
   * Closes opened overlays while using copilot.
   * @private
   */
  onCopilotDeactivation() {
    this.openedOverlayOwners.forEach((n) => {
      const r = Xe[n.localName];
      r && r.close && r.close(n);
    }), document.body.querySelector("vaadin-dialog-overlay") && document.body.style.setProperty("pointer-events", "none");
  }
  getOwner(t) {
    const n = t;
    return n.owner ?? n.__dataHost;
  }
  addOverlayOutsideClickEvent() {
    document.documentElement.addEventListener("vaadin-overlay-outside-click", this.overlayCloseEventListener, {
      capture: !0
    }), document.documentElement.addEventListener("vaadin-overlay-escape-press", this.overlayCloseEventListener, {
      capture: !0
    });
  }
  removeOverlayOutsideClickEvent() {
    document.documentElement.removeEventListener("vaadin-overlay-outside-click", this.overlayCloseEventListener), document.documentElement.removeEventListener("vaadin-overlay-escape-press", this.overlayCloseEventListener);
  }
  toggle(t) {
    const n = Xe[t.localName];
    this.isOverlayActive(t) ? (n.close(t), this.openedOverlayOwners.delete(t)) : (n.open(t), this.openedOverlayOwners.add(t));
  }
  isOverlayActive(t) {
    const n = Xe[t.localName];
    return n.active ? n.active(t) : t.hasAttribute("opened");
  }
  overlayStatus(t) {
    if (!t)
      return { visible: !1 };
    const n = t.localName;
    let r = Object.keys(yi).includes(n);
    if (!r)
      return { visible: !1 };
    const i = Xe[t.localName];
    i.hasOverlay && (r = i.hasOverlay(t));
    const o = this.isOverlayActive(t);
    return { visible: r, active: o };
  }
}
function Ai(e, t) {
  const n = e();
  n ? t(n) : setTimeout(() => Ai(e, t), 50);
}
async function Si(e) {
  const t = e();
  if (t)
    return t;
  let n;
  const r = new Promise((o) => {
    n = o;
  }), i = setInterval(() => {
    const o = e();
    o && (clearInterval(i), n(o));
  }, 10);
  return r;
}
function ss(e) {
  return S.box(e, { deep: !1 });
}
function ls(e) {
  return e && typeof e.lastAccessedBy_ == "number";
}
function Hl(e) {
  if (e) {
    if (typeof e == "string")
      return e;
    if (!ls(e))
      throw new Error(`Expected message to be a string or an observable value but was ${JSON.stringify(e)}`);
    return e.get();
  }
}
function Kl(e, t) {
  return e.length > t ? `${e.substring(0, t - 3)}...` : e;
}
const cs = {
  userAgent: navigator.userAgent,
  locale: navigator.language,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
};
async function jn() {
  return Si(() => {
    const e = window.Vaadin.devTools, t = e?.frontendConnection && e?.frontendConnection.status === "active";
    return e !== void 0 && t && e?.frontendConnection;
  });
}
function Pe(e, t) {
  jn().then((n) => n.send(e, { ...t, context: cs }));
}
async function Fl() {
  return await jn(), !!window.Vaadin.devTools.conf.backend;
}
class us {
  constructor() {
    this.promise = new Promise((t) => {
      this.resolveInit = t;
    });
  }
  done(t) {
    this.resolveInit(t);
  }
}
class ds {
  constructor() {
    this.dismissedNotifications = [], this.termsSummaryDismissed = !1, this.activationButtonPosition = null, this.paletteState = null, this.activationShortcut = !0, this.activationAnimation = !0, Yt(this), this.initializer = new us(), this.initializer.promise.then(() => {
      ai(
        () => JSON.stringify(this),
        () => {
          Pe("copilot-set-machine-configuration", { conf: JSON.stringify(or(this)) });
        }
      );
    }), window.Vaadin.copilot.eventbus.on("copilot-machine-configuration", (t) => {
      const n = t.detail.conf;
      Object.assign(this, or(n)), this.initializer.done(!0), t.preventDefault();
    }), this.loadData();
  }
  loadData() {
    Pe("copilot-get-machine-configuration", {});
  }
  addDismissedNotification(t) {
    this.dismissedNotifications.push(t);
  }
  getDismissedNotifications() {
    return this.dismissedNotifications;
  }
  setTermsSummaryDismissed(t) {
    this.termsSummaryDismissed = t;
  }
  isTermsSummaryDismissed() {
    return this.termsSummaryDismissed;
  }
  getActivationButtonPosition() {
    return this.activationButtonPosition;
  }
  setActivationButtonPosition(t) {
    this.activationButtonPosition = t;
  }
  getPaletteState() {
    return this.paletteState;
  }
  setPaletteState(t) {
    this.paletteState = t;
  }
  isActivationShortcut() {
    return this.activationShortcut;
  }
  setActivationShortcut(t) {
    this.activationShortcut = t;
  }
  isActivationAnimation() {
    return this.activationAnimation;
  }
  setActivationAnimation(t) {
    this.activationAnimation = t;
  }
}
function or(e) {
  const t = { ...e };
  return delete t.initializer, t;
}
const Ni = async (e, t, n) => window.Vaadin.copilot.comm(e, t, n);
class hs {
  constructor() {
    this._previewActivated = !1, this._remainingTimeInMillis = -1, this._active = !1, this._configurationLoaded = !1, Yt(this);
  }
  setConfiguration(t) {
    this._previewActivated = t.previewActivated, t.previewActivated ? this._remainingTimeInMillis = t.remainingTimeInMillis : this._remainingTimeInMillis = -1, this._active = t.active, this._configurationLoaded = !0;
  }
  get previewActivated() {
    return this._previewActivated;
  }
  get remainingTimeInMillis() {
    return this._remainingTimeInMillis;
  }
  get active() {
    return this._active;
  }
  get configurationLoaded() {
    return this._configurationLoaded;
  }
  get expired() {
    return this.previewActivated && !this.active;
  }
  reset() {
    this._previewActivated = !1, this._active = !1, this._configurationLoaded = !1, this._remainingTimeInMillis = -1;
  }
  loadPreviewConfiguration() {
    Ni(`${xe}get-preview`, {}, (t) => {
      const n = t.data;
      this.setConfiguration(n);
    }).catch((t) => {
      Promise.resolve().then(() => Ks).then((n) => {
        n.handleCopilotError("Load preview configuration failed", t);
      });
    });
  }
}
class fs {
  constructor() {
    this._panels = [], this._attentionRequiredPanelTag = null, this._floatingPanelsZIndexOrder = [], this.renderedPanels = /* @__PURE__ */ new Set(), Yt(this), this.restorePositions();
  }
  shouldRender(t) {
    return this.renderedPanels.has(t);
  }
  restorePositions() {
    const t = ue.getPanelConfigurations();
    t && (this._panels = this._panels.map((n) => {
      const r = t.find((i) => i.tag === n.tag);
      return r && (n = Object.assign(n, { ...r })), n;
    }));
  }
  /**
   * Brings a given floating panel to the front.
   *
   * @param panelTag the tag name of the panel
   */
  bringToFront(t) {
    this._floatingPanelsZIndexOrder = this._floatingPanelsZIndexOrder.filter((n) => n !== t), this.getPanelByTag(t)?.floating && this._floatingPanelsZIndexOrder.push(t);
  }
  /**
   * Returns the focused z-index of floating panel as following order
   * <ul>
   *     <li>Returns 50 for last(focused) element </li>
   *     <li>Returns the index of element in list(starting from 0) </li>
   *     <li>Returns 0 if panel is not in the list</li>
   * </ul>
   * @param panelTag
   */
  getFloatingPanelZIndex(t) {
    const n = this._floatingPanelsZIndexOrder.findIndex((r) => r === t);
    return n === this._floatingPanelsZIndexOrder.length - 1 ? 50 : n === -1 ? 0 : n;
  }
  get floatingPanelsZIndexOrder() {
    return this._floatingPanelsZIndexOrder;
  }
  get attentionRequiredPanelTag() {
    return this._attentionRequiredPanelTag;
  }
  set attentionRequiredPanelTag(t) {
    this._attentionRequiredPanelTag = t;
  }
  getAttentionRequiredPanelConfiguration() {
    return this._panels.find((t) => t.tag === this._attentionRequiredPanelTag);
  }
  clearAttention() {
    this._attentionRequiredPanelTag = null;
  }
  get panels() {
    return this._panels;
  }
  addPanel(t) {
    if (this.getPanelByTag(t.tag))
      return;
    this._panels.push(t), this.restorePositions();
    const n = this.getPanelByTag(t.tag);
    if (n)
      (n.eager || n.expanded) && this.renderedPanels.add(t.tag);
    else throw new Error(`Panel configuration not found for tag ${t.tag}`);
  }
  getPanelByTag(t) {
    return this._panels.find((n) => n.tag === t);
  }
  updatePanel(t, n) {
    const r = [...this._panels], i = r.find((o) => o.tag === t);
    if (i) {
      for (const o in n)
        i[o] = n[o];
      i.expanded && this.renderedPanels.add(i.tag), n.floating === !1 && (this._floatingPanelsZIndexOrder = this._floatingPanelsZIndexOrder.filter((o) => o !== t)), this._panels = r, ue.savePanelConfigurations(this._panels);
    }
  }
  updateOrders(t) {
    const n = [...this._panels];
    n.forEach((r) => {
      const i = t.find((o) => o.tag === r.tag);
      i && (r.panelOrder = i.order);
    }), this._panels = n, ue.savePanelConfigurations(n);
  }
  removePanel(t) {
    const n = this._panels.findIndex((r) => r.tag === t);
    n < 0 || (this._panels.splice(n, 1), ue.savePanelConfigurations(this._panels));
  }
}
window.Vaadin ??= {};
window.Vaadin.copilot ??= {};
window.Vaadin.copilot.plugins = [];
window.Vaadin.copilot._uiState = new ts();
window.Vaadin.copilot.eventbus = new io();
window.Vaadin.copilot.overlayManager = new as();
window.Vaadin.copilot._machineState = new ds();
window.Vaadin.copilot._previewState = new hs();
window.Vaadin.copilot._sectionPanelUiState = new fs();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vs = (e) => (t, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pt = globalThis, Rn = Pt.ShadowRoot && (Pt.ShadyCSS === void 0 || Pt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Mn = Symbol(), ar = /* @__PURE__ */ new WeakMap();
let xi = class {
  constructor(t, n, r) {
    if (this._$cssResult$ = !0, r !== Mn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = n;
  }
  get styleSheet() {
    let t = this.o;
    const n = this.t;
    if (Rn && t === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (t = ar.get(n)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && ar.set(n, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const le = (e) => new xi(typeof e == "string" ? e : e + "", void 0, Mn), ps = (e, ...t) => {
  const n = e.length === 1 ? e[0] : t.reduce((r, i, o) => r + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[o + 1], e[0]);
  return new xi(n, e, Mn);
}, gs = (e, t) => {
  if (Rn) e.adoptedStyleSheets = t.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
  else for (const n of t) {
    const r = document.createElement("style"), i = Pt.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, e.appendChild(r);
  }
}, sr = Rn ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let n = "";
  for (const r of t.cssRules) n += r.cssText;
  return le(n);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: bs, defineProperty: _s, getOwnPropertyDescriptor: ms, getOwnPropertyNames: ys, getOwnPropertySymbols: ws, getPrototypeOf: Es } = Object, en = globalThis, lr = en.trustedTypes, Os = lr ? lr.emptyScript : "", As = en.reactiveElementPolyfillSupport, rt = (e, t) => e, An = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Os : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let n = e;
  switch (t) {
    case Boolean:
      n = e !== null;
      break;
    case Number:
      n = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(e);
      } catch {
        n = null;
      }
  }
  return n;
} }, Pi = (e, t) => !bs(e, t), cr = { attribute: !0, type: String, converter: An, reflect: !1, hasChanged: Pi };
Symbol.metadata ??= Symbol("metadata"), en.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class Re extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, n = cr) {
    if (n.state && (n.attribute = !1), this._$Ei(), this.elementProperties.set(t, n), !n.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(t, r, n);
      i !== void 0 && _s(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, n, r) {
    const { get: i, set: o } = ms(this.prototype, t) ?? { get() {
      return this[n];
    }, set(a) {
      this[n] = a;
    } };
    return { get() {
      return i?.call(this);
    }, set(a) {
      const l = i?.call(this);
      o.call(this, a), this.requestUpdate(t, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? cr;
  }
  static _$Ei() {
    if (this.hasOwnProperty(rt("elementProperties"))) return;
    const t = Es(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(rt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(rt("properties"))) {
      const n = this.properties, r = [...ys(n), ...ws(n)];
      for (const i of r) this.createProperty(i, n[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const n = litPropertyMetadata.get(t);
      if (n !== void 0) for (const [r, i] of n) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [n, r] of this.elementProperties) {
      const i = this._$Eu(n, r);
      i !== void 0 && this._$Eh.set(i, n);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const n = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) n.unshift(sr(i));
    } else t !== void 0 && n.push(sr(t));
    return n;
  }
  static _$Eu(t, n) {
    const r = n.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
    for (const r of n.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return gs(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, n, r) {
    this._$AK(t, r);
  }
  _$EC(t, n) {
    const r = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const o = (r.converter?.toAttribute !== void 0 ? r.converter : An).toAttribute(n, r.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, n) {
    const r = this.constructor, i = r._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = r.getPropertyOptions(i), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : An;
      this._$Em = i, this[i] = a.fromAttribute(n, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, n, r) {
    if (t !== void 0) {
      if (r ??= this.constructor.getPropertyOptions(t), !(r.hasChanged ?? Pi)(this[t], n)) return;
      this.P(t, n, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, n, r) {
    this._$AL.has(t) || this._$AL.set(t, n), r.reflect === !0 && this._$Em !== t && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (n) {
      Promise.reject(n);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [i, o] of r) o.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], o);
    }
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(n)) : this._$EU();
    } catch (r) {
      throw t = !1, this._$EU(), r;
    }
    t && this._$AE(n);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((n) => n.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach((n) => this._$EC(n, this[n])), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
Re.elementStyles = [], Re.shadowRootOptions = { mode: "open" }, Re[rt("elementProperties")] = /* @__PURE__ */ new Map(), Re[rt("finalized")] = /* @__PURE__ */ new Map(), As?.({ ReactiveElement: Re }), (en.reactiveElementVersions ??= []).push("2.0.4");
const je = Symbol("LitMobxRenderReaction"), ur = Symbol("LitMobxRequestUpdate");
function Ss(e, t) {
  var n, r;
  return r = class extends e {
    constructor() {
      super(...arguments), this[n] = () => {
        this.requestUpdate();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      const o = this.constructor.name || this.nodeName;
      this[je] = new t(`${o}.update()`, this[ur]), this.hasUpdated && this.requestUpdate();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[je] && (this[je].dispose(), this[je] = void 0);
    }
    update(o) {
      this[je] ? this[je].track(super.update.bind(this, o)) : super.update(o);
    }
  }, n = ur, r;
}
function Ns(e) {
  return Ss(e, ee);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ln = globalThis, Ut = Ln.trustedTypes, dr = Ut ? Ut.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, In = "$lit$", ie = `lit$${Math.random().toFixed(9).slice(2)}$`, Un = "?" + ie, xs = `<${Un}>`, De = document, ht = () => De.createComment(""), ft = (e) => e === null || typeof e != "object" && typeof e != "function", zn = Array.isArray, Di = (e) => zn(e) || typeof e?.[Symbol.iterator] == "function", un = `[ 	
\f\r]`, Ze = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, hr = /-->/g, fr = />/g, be = RegExp(`>|${un}(?:([^\\s"'>=/]+)(${un}*=${un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), vr = /'/g, pr = /"/g, $i = /^(?:script|style|textarea|title)$/i, Ci = (e) => (t, ...n) => ({ _$litType$: e, strings: t, values: n }), zt = Ci(1), Gl = Ci(2), he = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), gr = /* @__PURE__ */ new WeakMap(), we = De.createTreeWalker(De, 129);
function ki(e, t) {
  if (!zn(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return dr !== void 0 ? dr.createHTML(t) : t;
}
const Ti = (e, t) => {
  const n = e.length - 1, r = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = Ze;
  for (let l = 0; l < n; l++) {
    const s = e[l];
    let c, u, d = -1, v = 0;
    for (; v < s.length && (a.lastIndex = v, u = a.exec(s), u !== null); ) v = a.lastIndex, a === Ze ? u[1] === "!--" ? a = hr : u[1] !== void 0 ? a = fr : u[2] !== void 0 ? ($i.test(u[2]) && (i = RegExp("</" + u[2], "g")), a = be) : u[3] !== void 0 && (a = be) : a === be ? u[0] === ">" ? (a = i ?? Ze, d = -1) : u[1] === void 0 ? d = -2 : (d = a.lastIndex - u[2].length, c = u[1], a = u[3] === void 0 ? be : u[3] === '"' ? pr : vr) : a === pr || a === vr ? a = be : a === hr || a === fr ? a = Ze : (a = be, i = void 0);
    const g = a === be && e[l + 1].startsWith("/>") ? " " : "";
    o += a === Ze ? s + xs : d >= 0 ? (r.push(c), s.slice(0, d) + In + s.slice(d) + ie + g) : s + ie + (d === -2 ? l : g);
  }
  return [ki(e, o + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class vt {
  constructor({ strings: t, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, s = this.parts, [c, u] = Ti(t, n);
    if (this.el = vt.createElement(c, r), we.currentNode = this.el.content, n === 2 || n === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = we.nextNode()) !== null && s.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(In)) {
          const v = u[a++], g = i.getAttribute(d).split(ie), _ = /([.?@])?(.*)/.exec(v);
          s.push({ type: 1, index: o, name: _[2], strings: g, ctor: _[1] === "." ? Ri : _[1] === "?" ? Mi : _[1] === "@" ? Li : yt }), i.removeAttribute(d);
        } else d.startsWith(ie) && (s.push({ type: 6, index: o }), i.removeAttribute(d));
        if ($i.test(i.tagName)) {
          const d = i.textContent.split(ie), v = d.length - 1;
          if (v > 0) {
            i.textContent = Ut ? Ut.emptyScript : "";
            for (let g = 0; g < v; g++) i.append(d[g], ht()), we.nextNode(), s.push({ type: 2, index: ++o });
            i.append(d[v], ht());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Un) s.push({ type: 2, index: o });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(ie, d + 1)) !== -1; ) s.push({ type: 7, index: o }), d += ie.length - 1;
      }
      o++;
    }
  }
  static createElement(t, n) {
    const r = De.createElement("template");
    return r.innerHTML = t, r;
  }
}
function $e(e, t, n = e, r) {
  if (t === he) return t;
  let i = r !== void 0 ? n.o?.[r] : n.l;
  const o = ft(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(!1), o === void 0 ? i = void 0 : (i = new o(e), i._$AT(e, n, r)), r !== void 0 ? (n.o ??= [])[r] = i : n.l = i), i !== void 0 && (t = $e(e, i._$AS(e, t.values), i, r)), t;
}
class Vi {
  constructor(t, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: n }, parts: r } = this._$AD, i = (t?.creationScope ?? De).importNode(n, !0);
    we.currentNode = i;
    let o = we.nextNode(), a = 0, l = 0, s = r[0];
    for (; s !== void 0; ) {
      if (a === s.index) {
        let c;
        s.type === 2 ? c = new tn(o, o.nextSibling, this, t) : s.type === 1 ? c = new s.ctor(o, s.name, s.strings, this, t) : s.type === 6 && (c = new Ii(o, this, t)), this._$AV.push(c), s = r[++l];
      }
      a !== s?.index && (o = we.nextNode(), a++);
    }
    return we.currentNode = De, i;
  }
  p(t) {
    let n = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, n), n += r.strings.length - 2) : r._$AI(t[n])), n++;
  }
}
let tn = class ji {
  get _$AU() {
    return this._$AM?._$AU ?? this.v;
  }
  constructor(t, n, r, i) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = r, this.options = i, this.v = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && t?.nodeType === 11 && (t = n.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, n = this) {
    t = $e(this, t, n), ft(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== he && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Di(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && ft(this._$AH) ? this._$AA.nextSibling.data = t : this.T(De.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: n, _$litType$: r } = t, i = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = vt.createElement(ki(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === i) this._$AH.p(n);
    else {
      const o = new Vi(i, this), a = o.u(this.options);
      o.p(n), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let n = gr.get(t.strings);
    return n === void 0 && gr.set(t.strings, n = new vt(t)), n;
  }
  k(t) {
    zn(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of t) i === n.length ? n.push(r = new ji(this.O(ht()), this.O(ht()), this, this.options)) : r = n[i], r._$AI(o), i++;
    i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
  }
  _$AR(t = this._$AA.nextSibling, n) {
    for (this._$AP?.(!1, !0, n); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this.v = t, this._$AP?.(t));
  }
};
class yt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, n, r, i, o) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = O;
  }
  _$AI(t, n = this, r, i) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = $e(this, t, n, 0), a = !ft(t) || t !== this._$AH && t !== he, a && (this._$AH = t);
    else {
      const l = t;
      let s, c;
      for (t = o[0], s = 0; s < o.length - 1; s++) c = $e(this, l[r + s], n, s), c === he && (c = this._$AH[s]), a ||= !ft(c) || c !== this._$AH[s], c === O ? t = O : t !== O && (t += (c ?? "") + o[s + 1]), this._$AH[s] = c;
    }
    a && !i && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ri extends yt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class Mi extends yt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class Li extends yt {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o), this.type = 5;
  }
  _$AI(t, n = this) {
    if ((t = $e(this, t, n, 0) ?? O) === he) return;
    const r = this._$AH, i = t === O && r !== O || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== O && (r === O || i);
    i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ii {
  constructor(t, n, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    $e(this, t);
  }
}
const Ps = { M: In, P: ie, A: Un, C: 1, L: Ti, R: Vi, D: Di, V: $e, I: tn, H: yt, N: Mi, U: Li, B: Ri, F: Ii }, Ds = Ln.litHtmlPolyfillSupport;
Ds?.(vt, tn), (Ln.litHtmlVersions ??= []).push("3.2.0");
const $s = (e, t, n) => {
  const r = n?.renderBefore ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const o = n?.renderBefore ?? null;
    r._$litPart$ = i = new tn(t.insertBefore(ht(), o), o, void 0, n ?? {});
  }
  return i._$AI(e), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends Re {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = $s(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.o?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.o?.setConnected(!1);
  }
  render() {
    return he;
  }
}
it._$litElement$ = !0, it.finalized = !0, globalThis.litElementHydrateSupport?.({ LitElement: it });
const Cs = globalThis.litElementPolyfillSupport;
Cs?.({ LitElement: it });
(globalThis.litElementVersions ??= []).push("4.1.0");
class ks extends Ns(it) {
}
class Ts extends ks {
  constructor() {
    super(...arguments), this.disposers = [];
  }
  /**
   * Creates a MobX reaction using the given parameters and disposes it when this element is detached.
   *
   * This should be called from `connectedCallback` to ensure that the reaction is active also if the element is attached again later.
   */
  reaction(t, n, r) {
    this.disposers.push(ai(t, n, r));
  }
  /**
   * Creates a MobX autorun using the given parameters and disposes it when this element is detached.
   *
   * This should be called from `connectedCallback` to ensure that the reaction is active also if the element is attached again later.
   */
  autorun(t, n) {
    this.disposers.push(ii(t, n));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.disposers.forEach((t) => {
      t();
    }), this.disposers = [];
  }
}
const Q = window.Vaadin.copilot._sectionPanelUiState;
if (!Q)
  throw new Error("Tried to access copilot section panel ui state before it was initialized.");
let me = [];
const br = [];
function _r(e) {
  e.init({
    addPanel: (t) => {
      Q.addPanel(t);
    },
    send(t, n) {
      Pe(t, n);
    }
  });
}
function Vs() {
  me.push(import("./copilot-log-plugin-uHa05UXQ.js")), me.push(import("./copilot-info-plugin-CPlsYWqn.js")), me.push(import("./copilot-features-plugin-M6D_LBcY.js")), me.push(import("./copilot-feedback-plugin-Bq-1RYmr.js")), me.push(import("./copilot-shortcuts-plugin-DpxyGb-z.js"));
}
function js() {
  {
    const e = `https://cdn.vaadin.com/copilot/${ns}/copilot-plugins.js`;
    import(
      /* @vite-ignore */
      e
    ).catch((t) => {
      console.warn(`Unable to load plugins from ${e}. Some Copilot features are unavailable.`, t);
    });
  }
}
function Rs() {
  Promise.all(me).then(() => {
    const e = window.Vaadin;
    if (e.copilot.plugins) {
      const t = e.copilot.plugins;
      e.copilot.plugins.push = (n) => _r(n), Array.from(t).forEach((n) => {
        br.includes(n) || (_r(n), br.push(n));
      });
    }
  }), me = [];
}
function Jl(e) {
  return Object.assign({
    expanded: !0,
    expandable: !1,
    panelOrder: 0,
    floating: !1,
    width: 500,
    height: 500,
    floatingPosition: {
      top: 50,
      left: 350
    }
  }, e);
}
class Ms {
  constructor() {
    this.active = !1, this.activate = () => {
      this.active = !0, this.blurActiveApplicationElement();
    }, this.deactivate = () => {
      this.active = !1;
    }, this.focusInEventListener = (t) => {
      this.active && (t.preventDefault(), t.stopPropagation(), dt(t.target) || requestAnimationFrame(() => {
        t.target.blur && t.target.blur(), document.body.querySelector("copilot-main")?.focus();
      }));
    };
  }
  hostConnectedCallback() {
    const t = this.getApplicationRootElement();
    t && t instanceof HTMLElement && t.addEventListener("focusin", this.focusInEventListener);
  }
  hostDisconnectedCallback() {
    const t = this.getApplicationRootElement();
    t && t instanceof HTMLElement && t.removeEventListener("focusin", this.focusInEventListener);
  }
  getApplicationRootElement() {
    return document.body.firstElementChild;
  }
  blurActiveApplicationElement() {
    document.activeElement && document.activeElement.blur && document.activeElement.blur();
  }
}
const St = new Ms(), E = window.Vaadin.copilot.eventbus;
if (!E)
  throw new Error("Tried to access copilot eventbus before it was initialized.");
const Ye = window.Vaadin.copilot.overlayManager, Xl = {
  AddClickListener: "Add Click Listener",
  AI: "AI",
  Delete: "Delete",
  DragAndDrop: "Drag and Drop",
  Duplicate: "Duplicate",
  SetLabel: "Set label",
  SetText: "Set text",
  SetHelper: "Set helper text",
  WrapWithTag: "Wrapping with tag",
  Alignment: "Alignment",
  Padding: "Padding",
  ModifyComponentSource: "Modify component source",
  Gap: "Gap"
}, b = window.Vaadin.copilot._uiState;
if (!b)
  throw new Error("Tried to access copilot ui state before it was initialized.");
const nn = (e, t) => {
  Pe("copilot-track-event", { event: e, properties: t });
}, Zl = (e, t) => {
  nn(e, { ...t, view: "react" });
}, Yl = (e, t) => {
  nn(e, { ...t, view: "flow" });
};
var rn = /* @__PURE__ */ ((e) => (e.INFORMATION = "information", e.WARNING = "warning", e.ERROR = "error", e))(rn || {});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ui = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, zi = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Bi = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, n, r) {
    this.t = t, this._$AM = n, this.i = r;
  }
  _$AS(t, n) {
    return this.update(t, n);
  }
  update(t, n) {
    return this.render(...n);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Sn extends Bi {
  constructor(t) {
    if (super(t), this.it = O, t.type !== Ui.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === O || t == null) return this._t = void 0, this.it = t;
    if (t === he) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const n = [t];
    return n.raw = n, this._t = { _$litType$: this.constructor.resultType, strings: n, values: [] };
  }
}
Sn.directiveName = "unsafeHTML", Sn.resultType = 1;
const Ls = zi(Sn);
function Hi() {
  return import("./copilot-notification-CFPuupIJ.js");
}
const Is = (e) => {
  He("Unspecified error", e), E.emit("vite-after-update", {});
}, Us = (e) => e.error ? (zs({
  error: e.error,
  message: e.errorMessage,
  stackTrace: e.errorStacktrace
}), !0) : !1, Ki = (e, t, n) => {
  Hi().then(({ showNotification: r }) => {
    r({
      type: rn.ERROR,
      message: e,
      details: ss(
        zt`<vaadin-details summary="Details" style="color: var(--dev-tools-text-color)"
          ><div>
            <code class="codeblock" style="white-space: normal;color: var(--dev-tools-background-color-active)"
              ><copilot-copy></copilot-copy>${Ls(t)}</code
            >
            <vaadin-button hidden>Report this issue</vaadin-button>
          </div></vaadin-details
        >`
      ),
      delay: 3e4
    });
  }), E.emit("system-info-with-callback", {
    callback: (r) => E.send("copilot-error", {
      message: e,
      details: String(n).replace("	", `
`),
      versions: r
    }),
    notify: !1
  }), b.operationWaitsHmrUpdate = void 0;
}, zs = (e) => {
  Ki(e.error, e.message, e.stackTrace);
};
function Bs(e, t) {
  Ki(e, t.message, t.stack || "");
}
function He(e, t) {
  Hi().then(({ showNotification: n }) => {
    n({
      type: rn.ERROR,
      message: "Copilot internal error",
      details: e + (t ? `
${t}` : "")
    });
  }), E.emit("system-info-with-callback", {
    callback: (n) => E.send("copilot-error", {
      message: `Copilot internal error: ${e}`,
      details: t?.stack ?? "",
      versions: n
    }),
    notify: !1
  });
}
function mr(e) {
  return e?.stack?.includes("cdn.vaadin.com/copilot") || e?.stack?.includes("/copilot/copilot/") || e?.stack?.includes("/copilot/copilot-private/");
}
function Fi() {
  const e = window.onerror;
  window.onerror = (t, n, r, i, o) => {
    if (mr(o)) {
      He(t.toString(), o);
      return;
    }
    e && e(t, n, r, i, o);
  }, ba((t) => {
    mr(t) && He("", t);
  }), Wi((t) => qi.push(t));
}
const qi = [];
function Wi(e) {
  const t = window.Vaadin.ConsoleErrors;
  window.Vaadin.ConsoleErrors = {
    push: (n) => {
      Na(() => {
        Q.attentionRequiredPanelTag = "copilot-log-panel";
      }), n[0].type !== void 0 && n[0].message !== void 0 ? e({
        type: n[0].type,
        message: n[0].message,
        internal: !!n[0].internal,
        details: n[0].details,
        link: n[0].link
      }) : e({ type: rn.ERROR, message: n.map((r) => Hs(r)).join(" "), internal: !1 }), t.push(n);
    }
  };
}
function Hs(e) {
  return e.message ? e.message.toString() : e.toString();
}
const Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  catchErrors: Wi,
  consoleErrorsQueue: qi,
  handleBrowserOperationError: Bs,
  handleCopilotError: He,
  handleErrorDuringOperation: Is,
  handleServerOperationErrorIfNeeded: Us,
  installErrorHandlers: Fi
}, Symbol.toStringTag, { value: "Module" })), Gi = window.Vaadin.copilot._previewState;
if (!Gi)
  throw new Error("Tried to access copilot preview state before it was initialized.");
const Ji = () => {
  Fs().then((e) => b.setUserInfo(e)).catch((e) => He("Failed to load userInfo", e));
}, Fs = async () => Ni(`${xe}get-user-info`, {}, (e) => (delete e.data.reqId, e.data)), qs = async () => Si(() => b.userInfo), ec = async () => (await qs()).vaadiner;
E.on("copilot-prokey-received", (e) => {
  Ji(), e.preventDefault();
});
function Ws() {
  const e = window.navigator.userAgent;
  return e.indexOf("Windows") !== -1 ? "Windows" : e.indexOf("Mac") !== -1 ? "Mac" : e.indexOf("Linux") !== -1 ? "Linux" : null;
}
function Gs() {
  return Ws() === "Mac";
}
function Js() {
  return Gs() ? "⌘" : "Ctrl";
}
const Xi = window.Vaadin.copilot._machineState;
if (!Xi)
  throw new Error("Trying to use stored machine state before it was initialized");
function Xs(e) {
  return e.composed && e.composedPath().map((t) => t.localName).some((t) => t === "copilot-spotlight");
}
function Zs(e) {
  return e.composed && e.composedPath().map((t) => t.localName).some((t) => t === "copilot-drawer-panel" || t === "copilot-section-panel-wrapper");
}
let dn = !1, Qe = 0;
const yr = (e) => {
  if (Xi.isActivationShortcut())
    if (e.key === "Shift" && !e.ctrlKey && !e.altKey && !e.metaKey)
      dn = !0;
    else if (dn && e.shiftKey && (e.key === "Control" || e.key === "Meta")) {
      if (Qe++, Qe === 2) {
        b.toggleActive("shortcut"), Qe = 0;
        return;
      }
      setTimeout(() => {
        Qe = 0;
      }, 500);
    } else
      dn = !1, Qe = 0;
  b.active && Ys(e);
}, Ys = (e) => {
  const t = Xs(e);
  if (e.shiftKey && e.code === "Space")
    b.setSpotlightActive(!b.spotlightActive), e.stopPropagation(), e.preventDefault();
  else if (e.key === "Escape") {
    if (e.stopPropagation(), b.loginCheckActive) {
      b.setLoginCheckActive(!1);
      return;
    }
    E.emit("close-drawers", {}), b.setSpotlightActive(!1);
  } else !Zs(e) && !t && Qs(e) ? (E.emit("delete-selected", {}), e.preventDefault(), e.stopPropagation()) : (e.ctrlKey || e.metaKey) && e.key === "d" && !t ? (E.emit("duplicate-selected", {}), e.preventDefault(), e.stopPropagation()) : (e.ctrlKey || e.metaKey) && e.key === "b" && !t ? (E.emit("show-selected-in-ide", {}), e.preventDefault(), e.stopPropagation()) : (e.ctrlKey || e.metaKey) && e.key === "z" ? b.idePluginState?.supportedActions?.find((n) => n === "undo") && (E.emit("undoRedo", { undo: !e.shiftKey }), e.preventDefault(), e.stopPropagation()) : (e.ctrlKey || e.metaKey) && e.key === "c" && !t && e.composed && e.composedPath().map((n) => n.localName).some((n) => n === "copilot-component-overlay") && (E.emit("copy-selected", {}), e.preventDefault(), e.stopPropagation());
}, Qs = (e) => (e.key === "Backspace" || e.key === "Delete") && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey, se = Js(), tc = {
  toggleCopilot: `<kbd>⇧</kbd> + <kbd>${se}</kbd> <kbd>${se}</kbd>`,
  toggleCommandWindow: "<kbd>⇧</kbd> + <kbd>Space</kbd>",
  undo: `<kbd>${se}</kbd> + <kbd>Z</kbd>`,
  redo: `<kbd>${se}</kbd> + <kbd>⇧</kbd> + <kbd>Z</kbd>`,
  duplicate: `<kbd>${se}</kbd> + <kbd>D</kbd>`,
  goToSource: `<kbd>${se}</kbd> + <kbd>B</kbd>`,
  selectParent: "<kbd>←</kbd>",
  selectPreviousSibling: "<kbd>↑</kbd>",
  selectNextSibling: "<kbd>↓</kbd>",
  delete: "<kbd>DEL</kbd>",
  copy: `<kbd>${se}</kbd> + <kbd>C</kbd>`,
  paste: `<kbd>${se}</kbd> + <kbd>V</kbd>`
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zi = Symbol.for(""), el = (e) => {
  if (e?.r === Zi) return e?._$litStatic$;
}, Yi = (e) => ({ _$litStatic$: e, r: Zi }), wr = /* @__PURE__ */ new Map(), tl = (e) => (t, ...n) => {
  const r = n.length;
  let i, o;
  const a = [], l = [];
  let s, c = 0, u = !1;
  for (; c < r; ) {
    for (s = t[c]; c < r && (o = n[c], (i = el(o)) !== void 0); ) s += i + t[++c], u = !0;
    c !== r && l.push(o), a.push(s), c++;
  }
  if (c === r && a.push(t[r]), u) {
    const d = a.join("$$lit$$");
    (t = wr.get(d)) === void 0 && (a.raw = a, wr.set(d, t = a)), n = l;
  }
  return e(t, ...n);
}, ot = tl(zt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: nl } = Ps, Er = () => document.createComment(""), et = (e, t, n) => {
  const r = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
  if (n === void 0) {
    const o = r.insertBefore(Er(), i), a = r.insertBefore(Er(), i);
    n = new nl(o, a, e, e.options);
  } else {
    const o = n._$AB.nextSibling, a = n._$AM, l = a !== e;
    if (l) {
      let s;
      n._$AQ?.(e), n._$AM = e, n._$AP !== void 0 && (s = e._$AU) !== a._$AU && n._$AP(s);
    }
    if (o !== i || l) {
      let s = n._$AA;
      for (; s !== o; ) {
        const c = s.nextSibling;
        r.insertBefore(s, i), s = c;
      }
    }
  }
  return n;
}, _e = (e, t, n = e) => (e._$AI(t, n), e), rl = {}, il = (e, t = rl) => e._$AH = t, ol = (e) => e._$AH, hn = (e) => {
  e._$AP?.(!1, !0);
  let t = e._$AA;
  const n = e._$AB.nextSibling;
  for (; t !== n; ) {
    const r = t.nextSibling;
    t.remove(), t = r;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Or = (e, t, n) => {
  const r = /* @__PURE__ */ new Map();
  for (let i = t; i <= n; i++) r.set(e[i], i);
  return r;
}, Qi = zi(class extends Bi {
  constructor(e) {
    if (super(e), e.type !== Ui.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e, t, n) {
    let r;
    n === void 0 ? n = t : t !== void 0 && (r = t);
    const i = [], o = [];
    let a = 0;
    for (const l of e) i[a] = r ? r(l, a) : a, o[a] = n(l, a), a++;
    return { values: o, keys: i };
  }
  render(e, t, n) {
    return this.dt(e, t, n).values;
  }
  update(e, [t, n, r]) {
    const i = ol(e), { values: o, keys: a } = this.dt(t, n, r);
    if (!Array.isArray(i)) return this.ut = a, o;
    const l = this.ut ??= [], s = [];
    let c, u, d = 0, v = i.length - 1, g = 0, _ = o.length - 1;
    for (; d <= v && g <= _; ) if (i[d] === null) d++;
    else if (i[v] === null) v--;
    else if (l[d] === a[g]) s[g] = _e(i[d], o[g]), d++, g++;
    else if (l[v] === a[_]) s[_] = _e(i[v], o[_]), v--, _--;
    else if (l[d] === a[_]) s[_] = _e(i[d], o[_]), et(e, s[_ + 1], i[d]), d++, _--;
    else if (l[v] === a[g]) s[g] = _e(i[v], o[g]), et(e, i[d], i[v]), v--, g++;
    else if (c === void 0 && (c = Or(a, g, _), u = Or(l, d, v)), c.has(l[d])) if (c.has(l[v])) {
      const w = u.get(a[g]), N = w !== void 0 ? i[w] : null;
      if (N === null) {
        const G = et(e, i[d]);
        _e(G, o[g]), s[g] = G;
      } else s[g] = _e(N, o[g]), et(e, i[d], N), i[w] = null;
      g++;
    } else hn(i[v]), v--;
    else hn(i[d]), d++;
    for (; g <= _; ) {
      const w = et(e, s[_ + 1]);
      _e(w, o[g]), s[g++] = w;
    }
    for (; d <= v; ) {
      const w = i[d++];
      w !== null && hn(w);
    }
    return this.ut = a, il(e, s), he;
  }
}), Dt = /* @__PURE__ */ new Map(), al = (e) => {
  const n = Q.panels.filter((r) => !r.floating && r.panel === e).sort((r, i) => r.panelOrder - i.panelOrder);
  return ot`
    ${Qi(
    n,
    (r) => r.tag,
    (r) => {
      const i = Yi(r.tag);
      return ot` <copilot-section-panel-wrapper panelTag="${i}">
          ${Q.shouldRender(r.tag) ? ot`<${i} slot="content"></${i}>` : O}
        </copilot-section-panel-wrapper>`;
    }
  )}
  `;
}, sl = () => {
  const e = Q.panels;
  return ot`
    ${Qi(
    e.filter((t) => t.floating),
    (t) => t.tag,
    (t) => {
      const n = Yi(t.tag);
      return ot`
                        <copilot-section-panel-wrapper panelTag="${n}">
                            <${n} slot="content"></${n}>
                        </copilot-section-panel-wrapper>`;
    }
  )}
  `;
}, nc = (e) => {
  const t = e.panelTag, n = e.querySelector('[slot="content"]');
  n && Dt.set(t, n);
}, rc = (e) => {
  if (Dt.has(e.panelTag)) {
    const t = Dt.get(e.panelTag);
    e.querySelector('[slot="content"]').replaceWith(t);
  }
  Dt.delete(e.panelTag);
};
var x = [];
for (var fn = 0; fn < 256; ++fn)
  x.push((fn + 256).toString(16).slice(1));
function ll(e, t = 0) {
  return (x[e[t + 0]] + x[e[t + 1]] + x[e[t + 2]] + x[e[t + 3]] + "-" + x[e[t + 4]] + x[e[t + 5]] + "-" + x[e[t + 6]] + x[e[t + 7]] + "-" + x[e[t + 8]] + x[e[t + 9]] + "-" + x[e[t + 10]] + x[e[t + 11]] + x[e[t + 12]] + x[e[t + 13]] + x[e[t + 14]] + x[e[t + 15]]).toLowerCase();
}
var Nt, cl = new Uint8Array(16);
function ul() {
  if (!Nt && (Nt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Nt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Nt(cl);
}
var dl = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ar = {
  randomUUID: dl
};
function hl(e, t, n) {
  if (Ar.randomUUID && !t && !e)
    return Ar.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || ul)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, ll(r);
}
const $t = [], tt = [], ic = async (e, t, n) => {
  let r, i;
  t.reqId = hl();
  const o = new Promise((a, l) => {
    r = a, i = l;
  });
  return $t.push({
    handleMessage(a) {
      if (a?.data?.reqId !== t.reqId)
        return !1;
      try {
        r(n(a));
      } catch (l) {
        i(l.toString());
      }
      return !0;
    }
  }), Pe(e, t), o;
};
function fl(e) {
  for (const t of $t)
    if (t.handleMessage(e))
      return $t.splice($t.indexOf(t), 1), !0;
  if (E.emitUnsafe({ type: e.command, data: e.data }))
    return !0;
  for (const t of to())
    if (eo(t, e))
      return !0;
  return tt.push(e), !1;
}
function eo(e, t) {
  return e.handleMessage?.call(e, t);
}
function vl() {
  if (tt.length)
    for (const e of to())
      for (let t = 0; t < tt.length; t++)
        eo(e, tt[t]) && (tt.splice(t, 1), t--);
}
function to() {
  const e = document.querySelector("copilot-main");
  return e ? e.renderRoot.querySelectorAll("copilot-section-panel-wrapper *") : [];
}
const pl = ":host{--gray-h: 220;--gray-s: 30%;--gray-l: 30%;--gray-hsl: var(--gray-h) var(--gray-s) var(--gray-l);--gray: hsl(var(--gray-hsl));--gray-50: hsl(var(--gray-hsl) / .05);--gray-100: hsl(var(--gray-hsl) / .1);--gray-150: hsl(var(--gray-hsl) / .16);--gray-200: hsl(var(--gray-hsl) / .24);--gray-250: hsl(var(--gray-hsl) / .34);--gray-300: hsl(var(--gray-hsl) / .46);--gray-350: hsl(var(--gray-hsl) / .6);--gray-400: hsl(var(--gray-hsl) / .7);--gray-450: hsl(var(--gray-hsl) / .8);--gray-500: hsl(var(--gray-hsl) / .9);--gray-550: hsl(var(--gray-hsl));--gray-600: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 2%));--gray-650: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 4%));--gray-700: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 8%));--gray-750: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 12%));--gray-800: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 20%));--gray-850: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 23%));--gray-900: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 30%));--blue-h: 220;--blue-s: 90%;--blue-l: 53%;--blue-hsl: var(--blue-h) var(--blue-s) var(--blue-l);--blue: hsl(var(--blue-hsl));--blue-50: hsl(var(--blue-hsl) / .05);--blue-100: hsl(var(--blue-hsl) / .1);--blue-150: hsl(var(--blue-hsl) / .2);--blue-200: hsl(var(--blue-hsl) / .3);--blue-250: hsl(var(--blue-hsl) / .4);--blue-300: hsl(var(--blue-hsl) / .5);--blue-350: hsl(var(--blue-hsl) / .6);--blue-400: hsl(var(--blue-hsl) / .7);--blue-450: hsl(var(--blue-hsl) / .8);--blue-500: hsl(var(--blue-hsl) / .9);--blue-550: hsl(var(--blue-hsl));--blue-600: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 4%));--blue-650: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 8%));--blue-700: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 12%));--blue-750: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 15%));--blue-800: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 18%));--blue-850: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 24%));--blue-900: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 27%));--purple-h: 246;--purple-s: 90%;--purple-l: 60%;--purple-hsl: var(--purple-h) var(--purple-s) var(--purple-l);--purple: hsl(var(--purple-hsl));--purple-50: hsl(var(--purple-hsl) / .05);--purple-100: hsl(var(--purple-hsl) / .1);--purple-150: hsl(var(--purple-hsl) / .2);--purple-200: hsl(var(--purple-hsl) / .3);--purple-250: hsl(var(--purple-hsl) / .4);--purple-300: hsl(var(--purple-hsl) / .5);--purple-350: hsl(var(--purple-hsl) / .6);--purple-400: hsl(var(--purple-hsl) / .7);--purple-450: hsl(var(--purple-hsl) / .8);--purple-500: hsl(var(--purple-hsl) / .9);--purple-550: hsl(var(--purple-hsl));--purple-600: hsl(var(--purple-h) calc(var(--purple-s) - 4%) calc(var(--purple-l) - 2%));--purple-650: hsl(var(--purple-h) calc(var(--purple-s) - 8%) calc(var(--purple-l) - 4%));--purple-700: hsl(var(--purple-h) calc(var(--purple-s) - 15%) calc(var(--purple-l) - 7%));--purple-750: hsl(var(--purple-h) calc(var(--purple-s) - 23%) calc(var(--purple-l) - 11%));--purple-800: hsl(var(--purple-h) calc(var(--purple-s) - 24%) calc(var(--purple-l) - 15%));--purple-850: hsl(var(--purple-h) calc(var(--purple-s) - 24%) calc(var(--purple-l) - 19%));--purple-900: hsl(var(--purple-h) calc(var(--purple-s) - 27%) calc(var(--purple-l) - 23%));--green-h: 150;--green-s: 80%;--green-l: 42%;--green-hsl: var(--green-h) var(--green-s) var(--green-l);--green: hsl(var(--green-hsl));--green-50: hsl(var(--green-hsl) / .05);--green-100: hsl(var(--green-hsl) / .1);--green-150: hsl(var(--green-hsl) / .2);--green-200: hsl(var(--green-hsl) / .3);--green-250: hsl(var(--green-hsl) / .4);--green-300: hsl(var(--green-hsl) / .5);--green-350: hsl(var(--green-hsl) / .6);--green-400: hsl(var(--green-hsl) / .7);--green-450: hsl(var(--green-hsl) / .8);--green-500: hsl(var(--green-hsl) / .9);--green-550: hsl(var(--green-hsl));--green-600: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 2%));--green-650: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 4%));--green-700: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 8%));--green-750: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 12%));--green-800: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 15%));--green-850: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 19%));--green-900: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 23%));--yellow-h: 38;--yellow-s: 98%;--yellow-l: 64%;--yellow-hsl: var(--yellow-h) var(--yellow-s) var(--yellow-l);--yellow: hsl(var(--yellow-hsl));--yellow-50: hsl(var(--yellow-hsl) / .07);--yellow-100: hsl(var(--yellow-hsl) / .12);--yellow-150: hsl(var(--yellow-hsl) / .2);--yellow-200: hsl(var(--yellow-hsl) / .3);--yellow-250: hsl(var(--yellow-hsl) / .4);--yellow-300: hsl(var(--yellow-hsl) / .5);--yellow-350: hsl(var(--yellow-hsl) / .6);--yellow-400: hsl(var(--yellow-hsl) / .7);--yellow-450: hsl(var(--yellow-hsl) / .8);--yellow-500: hsl(var(--yellow-hsl) / .9);--yellow-550: hsl(var(--yellow-hsl));--yellow-600: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 5%));--yellow-650: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 10%));--yellow-700: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 15%));--yellow-750: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 20%));--yellow-800: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 25%));--yellow-850: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 30%));--yellow-900: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 35%));--red-h: 355;--red-s: 75%;--red-l: 55%;--red-hsl: var(--red-h) var(--red-s) var(--red-l);--red: hsl(var(--red-hsl));--red-50: hsl(var(--red-hsl) / .05);--red-100: hsl(var(--red-hsl) / .1);--red-150: hsl(var(--red-hsl) / .2);--red-200: hsl(var(--red-hsl) / .3);--red-250: hsl(var(--red-hsl) / .4);--red-300: hsl(var(--red-hsl) / .5);--red-350: hsl(var(--red-hsl) / .6);--red-400: hsl(var(--red-hsl) / .7);--red-450: hsl(var(--red-hsl) / .8);--red-500: hsl(var(--red-hsl) / .9);--red-550: hsl(var(--red-hsl));--red-600: hsl(var(--red-h) calc(var(--red-s) - 5%) calc(var(--red-l) - 2%));--red-650: hsl(var(--red-h) calc(var(--red-s) - 10%) calc(var(--red-l) - 4%));--red-700: hsl(var(--red-h) calc(var(--red-s) - 15%) calc(var(--red-l) - 8%));--red-750: hsl(var(--red-h) calc(var(--red-s) - 20%) calc(var(--red-l) - 12%));--red-800: hsl(var(--red-h) calc(var(--red-s) - 25%) calc(var(--red-l) - 15%));--red-850: hsl(var(--red-h) calc(var(--red-s) - 30%) calc(var(--red-l) - 19%));--red-900: hsl(var(--red-h) calc(var(--red-s) - 35%) calc(var(--red-l) - 23%));--codeblock-bg: #f4f4f4;--vaadin-logo-blue: #00b4f0}:host(.dark){--gray-s: 15%;--gray-l: 70%;--gray-600: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 6%));--gray-650: hsl(var(--gray-h) calc(var(--gray-s) - 5%) calc(var(--gray-l) + 14%));--gray-700: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 26%));--gray-750: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 36%));--gray-800: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 48%));--gray-850: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 62%));--gray-900: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 70%));--blue-s: 90%;--blue-l: 58%;--blue-600: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 6%));--blue-650: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 12%));--blue-700: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 17%));--blue-750: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 22%));--blue-800: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 28%));--blue-850: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 35%));--blue-900: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 43%));--purple-600: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 4%));--purple-650: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 9%));--purple-700: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 12%));--purple-750: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 18%));--purple-800: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 24%));--purple-850: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 29%));--purple-900: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 33%));--green-600: hsl(calc(var(--green-h) - 1) calc(var(--green-s) - 5%) calc(var(--green-l) + 5%));--green-650: hsl(calc(var(--green-h) - 2) calc(var(--green-s) - 10%) calc(var(--green-l) + 12%));--green-700: hsl(calc(var(--green-h) - 4) calc(var(--green-s) - 15%) calc(var(--green-l) + 20%));--green-750: hsl(calc(var(--green-h) - 6) calc(var(--green-s) - 20%) calc(var(--green-l) + 29%));--green-800: hsl(calc(var(--green-h) - 8) calc(var(--green-s) - 25%) calc(var(--green-l) + 37%));--green-850: hsl(calc(var(--green-h) - 10) calc(var(--green-s) - 30%) calc(var(--green-l) + 42%));--green-900: hsl(calc(var(--green-h) - 12) calc(var(--green-s) - 35%) calc(var(--green-l) + 48%));--yellow-600: hsl(calc(var(--yellow-h) + 1) var(--yellow-s) calc(var(--yellow-l) + 4%));--yellow-650: hsl(calc(var(--yellow-h) + 2) var(--yellow-s) calc(var(--yellow-l) + 7%));--yellow-700: hsl(calc(var(--yellow-h) + 4) var(--yellow-s) calc(var(--yellow-l) + 11%));--yellow-750: hsl(calc(var(--yellow-h) + 6) var(--yellow-s) calc(var(--yellow-l) + 16%));--yellow-800: hsl(calc(var(--yellow-h) + 8) var(--yellow-s) calc(var(--yellow-l) + 20%));--yellow-850: hsl(calc(var(--yellow-h) + 10) var(--yellow-s) calc(var(--yellow-l) + 24%));--yellow-900: hsl(calc(var(--yellow-h) + 12) var(--yellow-s) calc(var(--yellow-l) + 29%));--red-600: hsl(calc(var(--red-h) - 1) calc(var(--red-s) - 5%) calc(var(--red-l) + 3%));--red-650: hsl(calc(var(--red-h) - 2) calc(var(--red-s) - 10%) calc(var(--red-l) + 7%));--red-700: hsl(calc(var(--red-h) - 4) calc(var(--red-s) - 15%) calc(var(--red-l) + 14%));--red-750: hsl(calc(var(--red-h) - 6) calc(var(--red-s) - 20%) calc(var(--red-l) + 19%));--red-800: hsl(calc(var(--red-h) - 8) calc(var(--red-s) - 25%) calc(var(--red-l) + 24%));--red-850: hsl(calc(var(--red-h) - 10) calc(var(--red-s) - 30%) calc(var(--red-l) + 30%));--red-900: hsl(calc(var(--red-h) - 12) calc(var(--red-s) - 35%) calc(var(--red-l) + 36%));--codeblock-bg: var(--gray-100)}", gl = ":host{--font-family: Inter, system-ui, ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif;--monospace-font-family: Inconsolata, Monaco, Consolas, Courier New, Courier, monospace;--font-size-0: .6875rem;--font-size-1: .75rem;--font-size-2: .875rem;--font-size-3: 1rem;--font-size-4: 1.125rem;--font-size-5: 1.25rem;--font-size-6: 1.375rem;--font-size-7: 1.5rem;--line-height-1: 1.125rem;--line-height-2: 1.25rem;--line-height-3: 1.5rem;--line-height-4: 1.75rem;--line-height-5: 2rem;--line-height-6: 2.25rem;--line-height-7: 2.5rem;--font-weight-bold: 500;--font-weight-strong: 600;--font: normal 400 var(--font-size-3) / var(--line-height-3) var(--font-family);--font-bold: normal var(--font-weight-bold) var(--font-size-3) / var(--line-height-3) var(--font-family);--font-strong: normal var(--font-weight-strong) var(--font-size-3) / var(--line-height-3) var(--font-family);--font-small: normal 400 var(--font-size-2) / var(--line-height-2) var(--font-family);--font-small-bold: normal var(--font-weight-bold) var(--font-size-2) / var(--line-height-2) var(--font-family);--font-small-strong: normal var(--font-weight-strong) var(--font-size-2) / var(--line-height-2) var(--font-family);--font-xsmall: normal 400 var(--font-size-1) / var(--line-height-1) var(--font-family);--font-xsmall-bold: normal var(--font-weight-bold) var(--font-size-1) / var(--line-height-1) var(--font-family);--font-xsmall-strong: normal var(--font-weight-strong) var(--font-size-1) / var(--line-height-1) var(--font-family);--font-button: normal var(--font-weight-bold) var(--font-size-1) / var(--line-height-1) var(--font-family);--font-tooltip: normal var(--font-weight-bold) var(--font-size-1) / var(--line-height-2) var(--font-family);--radius-1: .1875rem;--radius-2: .375rem;--radius-3: .75rem;--space-25: 2px;--space-50: 4px;--space-75: 6px;--space-100: 8px;--space-150: 12px;--space-200: 16px;--space-300: 24px;--space-400: 32px;--space-500: 40px;--space-600: 48px;--space-700: 56px;--space-800: 64px;--space-900: 72px;--z-index-component-selector: 100;--z-index-floating-panel: 101;--z-index-drawer: 150;--z-index-opened-drawer: 151;--z-index-spotlight: 200;--z-index-popover: 300;--z-index-activation-button: 1000;--duration-1: .1s;--duration-2: .2s;--duration-3: .3s;--duration-4: .4s;--button-background: var(--gray-100);--button-background-hover: var(--gray-150)}:host{--lumo-font-family: var(--font-family);--lumo-font-size-xs: var(--font-size-1);--lumo-font-size-s: var(--font-size-2);--lumo-font-size-m: var(--font-size-3);--lumo-font-size-l: var(--font-size-4);--lumo-font-size-xl: var(--font-size-5);--lumo-font-size-xxl: var(--font-size-6);--lumo-font-size-xxxl: var(--font-size-7);--lumo-line-height-s: var(--line-height-2);--lumo-line-height-m: var(--line-height-3);--lumo-line-height-l: var(--line-height-4);--lumo-border-radius-s: var(--radius-1);--lumo-border-radius-m: var(--radius-2);--lumo-border-radius-l: var(--radius-3);--lumo-base-color: var(--surface-0);--lumo-body-text-color: var(--color-high-contrast);--lumo-header-text-color: var(--color-high-contrast);--lumo-secondary-text-color: var(--color);--lumo-tertiary-text-color: var(--color);--lumo-error-text-color: var(--color-danger);--lumo-primary-text-color: var(--color-high-contrast);--lumo-primary-color: var(--color-high-contrast);--lumo-primary-color-50pct: var(--color-accent);--lumo-primary-contrast-color: var(--lumo-secondary-text-color);--lumo-space-xs: var(--space-50);--lumo-space-s: var(--space-100);--lumo-space-m: var(--space-200);--lumo-space-l: var(--space-300);--lumo-space-xl: var(--space-500);--lumo-icon-size-xs: var(--font-size-1);--lumo-icon-size-s: var(--font-size-2);--lumo-icon-size-m: var(--font-size-3);--lumo-icon-size-l: var(--font-size-4);--lumo-icon-size-xl: var(--font-size-5)}:host{color-scheme:light;--surface-0: hsl(var(--gray-h) var(--gray-s) 90% / .8);--surface-1: hsl(var(--gray-h) var(--gray-s) 95% / .8);--surface-2: hsl(var(--gray-h) var(--gray-s) 100% / .8);--surface-background: linear-gradient( hsl(var(--gray-h) var(--gray-s) 95% / .7), hsl(var(--gray-h) var(--gray-s) 95% / .65) );--surface-glow: radial-gradient(circle at 30% 0%, hsl(var(--gray-h) var(--gray-s) 98% / .7), transparent 50%);--surface-border-glow: radial-gradient(at 50% 50%, hsl(var(--purple-h) 90% 90% / .8) 0, transparent 50%);--surface: var(--surface-glow) no-repeat border-box, var(--surface-background) no-repeat padding-box, hsl(var(--gray-h) var(--gray-s) 98% / .2);--surface-with-border-glow: var(--surface-glow) no-repeat border-box, var(--surface-background) no-repeat padding-box, var(--surface-border-glow) no-repeat border-box 0 0 / var(--glow-size, 600px) var(--glow-size, 600px);--surface-border-color: hsl(var(--gray-h) var(--gray-s) 100% / .7);--surface-backdrop-filter: blur(10px);--surface-box-shadow-1: 0 0 0 .5px hsl(var(--gray-h) var(--gray-s) 5% / .15), 0 6px 12px -1px hsl(var(--shadow-hsl) / .3);--surface-box-shadow-2: 0 0 0 .5px hsl(var(--gray-h) var(--gray-s) 5% / .15), 0 24px 40px -4px hsl(var(--shadow-hsl) / .4);--background-button: linear-gradient( hsl(var(--gray-h) var(--gray-s) 98% / .4), hsl(var(--gray-h) var(--gray-s) 90% / .2) );--background-button-active: hsl(var(--gray-h) var(--gray-s) 80% / .2);--color: var(--gray-500);--color-high-contrast: var(--gray-900);--color-accent: var(--purple-700);--color-danger: var(--red-700);--border-color: var(--gray-150);--border-color-high-contrast: var(--gray-300);--border-color-button: var(--gray-350);--border-color-popover: hsl(var(--gray-hsl) / .08);--border-color-dialog: hsl(var(--gray-hsl) / .08);--accent-color: var(--purple-600);--selection-color: hsl(var(--blue-hsl));--shadow-hsl: var(--gray-h) var(--gray-s) 20%;--lumo-contrast-5pct: var(--gray-100);--lumo-contrast-10pct: var(--gray-200);--lumo-contrast-60pct: var(--gray-400);--lumo-contrast-80pct: var(--gray-600);--lumo-contrast-90pct: var(--gray-800);--card-bg: rgba(255, 255, 255, .5);--card-hover-bg: rgba(255, 255, 255, .65);--card-open-bg: rgba(255, 255, 255, .8);--card-border: 1px solid rgba(0, 50, 100, .15);--card-open-shadow: 0px 1px 4px -1px rgba(28, 52, 84, .26);--card-section-border: var(--card-border);--card-field-bg: var(--lumo-contrast-5pct);--indicator-border: white}:host(.dark){color-scheme:dark;--surface-0: hsl(var(--gray-h) var(--gray-s) 10% / .85);--surface-1: hsl(var(--gray-h) var(--gray-s) 14% / .85);--surface-2: hsl(var(--gray-h) var(--gray-s) 18% / .85);--surface-background: linear-gradient( hsl(var(--gray-h) var(--gray-s) 8% / .65), hsl(var(--gray-h) var(--gray-s) 8% / .7) );--surface-glow: radial-gradient( circle at 30% 0%, hsl(var(--gray-h) calc(var(--gray-s) * 2) 90% / .12), transparent 50% );--surface: var(--surface-glow) no-repeat border-box, var(--surface-background) no-repeat padding-box, hsl(var(--gray-h) var(--gray-s) 20% / .4);--surface-border-glow: hsl(var(--gray-h) var(--gray-s) 20% / .4) radial-gradient(at 50% 50%, hsl(250 40% 80% / .4) 0, transparent 50%);--surface-border-color: hsl(var(--gray-h) var(--gray-s) 50% / .2);--surface-box-shadow-1: 0 0 0 .5px hsl(var(--purple-h) 40% 5% / .4), 0 6px 12px -1px hsl(var(--shadow-hsl) / .4);--surface-box-shadow-2: 0 0 0 .5px hsl(var(--purple-h) 40% 5% / .4), 0 24px 40px -4px hsl(var(--shadow-hsl) / .5);--color: var(--gray-650);--background-button: linear-gradient( hsl(var(--gray-h) calc(var(--gray-s) * 2) 80% / .1), hsl(var(--gray-h) calc(var(--gray-s) * 2) 80% / 0) );--background-button-active: hsl(var(--gray-h) var(--gray-s) 10% / .1);--border-color-popover: hsl(var(--gray-h) var(--gray-s) 90% / .1);--border-color-dialog: hsl(var(--gray-h) var(--gray-s) 90% / .1);--shadow-hsl: 0 0% 0%;--lumo-disabled-text-color: var(--lumo-contrast-60pct);--card-bg: rgba(255, 255, 255, .05);--card-hover-bg: rgba(255, 255, 255, .065);--card-open-bg: rgba(255, 255, 255, .1);--card-border: 1px solid rgba(255, 255, 255, .11);--card-open-shadow: 0px 1px 4px -1px rgba(0, 0, 0, .26);--card-section-border: var(--card-border);--card-field-bg: var(--lumo-contrast-10pct);--indicator-border: var(--lumo-base-color)}", bl = "button{-webkit-appearance:none;appearance:none;background:var(--background-button);background-origin:border-box;font:var(--font-button);color:var(--color-high-contrast);border:1px solid var(--border-color);border-radius:var(--radius-2);padding:var(--space-25) var(--space-100)}button:focus-visible{outline:2px solid var(--blue-500);outline-offset:2px}button:active:not(:disabled){background:var(--background-button-active)}button:disabled{color:var(--gray-400);background:transparent}", _l = ":is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay){z-index:var(--z-index-popover)}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay):first-of-type{padding-top:0}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay)::part(overlay){color:inherit;font:inherit;background:var(--surface);-webkit-backdrop-filter:var(--surface-backdrop-filter);backdrop-filter:var(--surface-backdrop-filter);border-radius:var(--radius-2);border:1px solid var(--surface-border-color);box-shadow:var(--surface-box-shadow-1)}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay)::part(content){padding:var(--space-50)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item){color:var(--color-high-contrast);font:var(--font-small);display:flex;align-items:center;cursor:default;padding:var(--space-75) var(--space-100);min-height:0;border-radius:var(--radius-1);--_lumo-item-selected-icon-display: none}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[disabled],:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[disabled] .hint,:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[disabled] vaadin-icon{color:var(--lumo-disabled-text-color)}:is(vaadin-context-menu-item,vaadin-menu-bar-item)[expanded]{background:var(--gray-200)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item):not([disabled]):hover{background:var(--color-high-contrast);color:var(--surface-2);--lumo-tertiary-text-color: var(--surface-2);--color: currentColor;--border-color: var(--surface-0)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[focus-ring]{outline:2px solid var(--selection-color);outline-offset:-2px}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item):is([aria-haspopup=true]):after{margin-inline-end:calc(var(--space-200) * -1);margin-right:unset}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item).danger{color:var(--color-danger);--color: currentColor}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item).danger:not([disabled]):hover{background-color:var(--color-danger)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)::part(content){display:flex;align-items:center;gap:var(--space-100)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item) vaadin-icon{width:1em;height:1em;padding:0;color:var(--color)}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay) hr{margin:var(--space-50)}:is(vaadin-context-menu-item,vaadin-select-item,vaadin-menu-bar-item) .label{padding-inline-end:var(--space-300)}:is(vaadin-context-menu-item,vaadin-select-item,vaadin-menu-bar-item) .hint{margin-inline-start:auto;color:var(--color)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item) kbd{display:inline-block;border-radius:var(--radius-1);border:1px solid var(--border-color);min-width:1em;min-height:1em;text-align:center;margin:0 .1em;padding:.1em .25em;box-sizing:border-box;font-size:var(--font-size-1);font-family:var(--font-family);line-height:1}:is(vaadin-menu-bar-item):is(.dev-workflow-menu-item){justify-content:space-between}:is(vaadin-menu-bar-item):is(.dev-workflow-menu-item).warning{--small-text-color: var(--yellow-700)}:is(vaadin-menu-bar-item):is(.dev-workflow-menu-item).error{--small-text-color: var(--red)}:is(vaadin-menu-bar-item):is(.dev-workflow-menu-item) div.icon{width:8px;height:8px;margin:0 .1em;background-color:var(--small-text-color)}:is(vaadin-menu-bar-item):is(.dev-workflow-menu-item) div.icon.warning{border-radius:4px}:is(vaadin-menu-bar-item):is(.dev-workflow-menu-item) div.status{font-size:var(--font-size-0);color:var(--small-text-color)}:is(copilot-alignment-overlay)::part(content){padding:0}:is(.padding-values-overlay){--lumo-base-color: var(--selection-color);--color-high-contrast: white}:is(.padding-values-overlay) vaadin-combo-box-item:hover{color:#272c35d9}", ml = "code.codeblock{background:var(--codeblock-bg);border-radius:var(--radius-2);display:block;font-family:var(--monospace-font-family);font-size:var(--font-size-1);line-height:var(--line-height-1);overflow:hidden;padding:.3125rem 1.75rem .3125rem var(--space-100);position:relative;text-overflow:ellipsis;white-space:pre}copilot-copy{position:absolute;right:0;top:0}copilot-copy button{align-items:center;background:none;border:1px solid transparent;border-radius:var(--radius-2);color:var(--color);display:flex;font:var(--font-button);height:1.75rem;justify-content:center;padding:0;width:1.75rem}copilot-copy button:hover{color:var(--color-high-contrast)}", yl = "vaadin-dialog-overlay::part(overlay){background:#fff}vaadin-dialog-overlay::part(content){background:var(--surface);font:var(--font-xsmall);padding:var(--space-300)}vaadin-dialog-overlay::part(header){background:var(--surface);font:var(--font-xsmall-strong);border-bottom:1px solid var(--border-color);padding:var(--space-100) var(--space-150)}vaadin-dialog-overlay::part(footer){background:var(--surface);padding:var(--space-150)}vaadin-dialog-overlay::part(header-content){display:flex;line-height:normal;justify-content:space-between;width:100%;align-items:center}vaadin-dialog-overlay [slot=header-content] h2{margin:0;padding:0;font:var(--font-small-bold)}vaadin-dialog-overlay [slot=header-content] .close{line-height:0}vaadin-dialog-overlay{--vaadin-button-font-size: var(--font-size-1);--vaadin-button-height: var(--line-height-4)}vaadin-dialog-overlay vaadin-button[theme~=primary]{background-color:hsl(var(--blue-hsl))}vaadin-dialog-overlay a svg{height:12px;width:12px}.dialog-footer vaadin-button{--vaadin-button-primary-background: var(--button-background);--vaadin-button-border-radius: var(--radius-1);--vaadin-button-primary-text-color: var(--color-high-contrast);--vaadin-button-height: var(--line-height-5);font:var(--font-small-bold)}.dialog-footer vaadin-button span[slot=suffix]{display:flex}.dialog-footer vaadin-button span[slot=suffix] svg{height:14px;width:14px}", wl = ":host{--vaadin-input-field-label-font-size: var(--font-size-1);--vaadin-select-label-font-size: var(--font-size-1);--vaadin-input-field-helper-font-size: var(--font-size-0);--vaadin-button-font-size: var(--font-size-2);--vaadin-checkbox-label-font-size: var(--font-size-1);--vaadin-input-field-background: var(--lumo-contrast-10pct);--vaadin-input-field-height: 26px;--vaadin-input-field-value-font-size: var(--font-xsmall)}";
var oc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function El(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ac(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Bn = { exports: {} };
function no(e, t = 100, n = {}) {
  if (typeof e != "function")
    throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
  if (t < 0)
    throw new RangeError("`wait` must not be negative.");
  const { immediate: r } = typeof n == "boolean" ? { immediate: n } : n;
  let i, o, a, l, s;
  function c() {
    const v = i, g = o;
    return i = void 0, o = void 0, s = e.apply(v, g), s;
  }
  function u() {
    const v = Date.now() - l;
    v < t && v >= 0 ? a = setTimeout(u, t - v) : (a = void 0, r || (s = c()));
  }
  const d = function(...v) {
    if (i && this !== i && Object.getPrototypeOf(this) === Object.getPrototypeOf(i))
      throw new Error("Debounced method called with different contexts of the same prototype.");
    i = this, o = v, l = Date.now();
    const g = r && !a;
    return a || (a = setTimeout(u, t)), g && (s = c()), s;
  };
  return d.clear = () => {
    a && (clearTimeout(a), a = void 0);
  }, d.flush = () => {
    a && d.trigger();
  }, d.trigger = () => {
    s = c(), d.clear();
  }, d;
}
Bn.exports.debounce = no;
Bn.exports = no;
var Ol = Bn.exports;
const Al = /* @__PURE__ */ El(Ol);
class Sl {
  constructor() {
    this.documentActive = !0, this.addListeners = () => {
      window.addEventListener("pageshow", this.handleWindowVisibilityChange), window.addEventListener("pagehide", this.handleWindowVisibilityChange), window.addEventListener("focus", this.handleWindowFocusChange), window.addEventListener("blur", this.handleWindowFocusChange), document.addEventListener("visibilitychange", this.handleDocumentVisibilityChange);
    }, this.removeListeners = () => {
      window.removeEventListener("pageshow", this.handleWindowVisibilityChange), window.removeEventListener("pagehide", this.handleWindowVisibilityChange), window.removeEventListener("focus", this.handleWindowFocusChange), window.removeEventListener("blur", this.handleWindowFocusChange), document.removeEventListener("visibilitychange", this.handleDocumentVisibilityChange);
    }, this.handleWindowVisibilityChange = (t) => {
      t.type === "pageshow" ? this.dispatch(!0) : this.dispatch(!1);
    }, this.handleWindowFocusChange = (t) => {
      t.type === "focus" ? this.dispatch(!0) : this.dispatch(!1);
    }, this.handleDocumentVisibilityChange = () => {
      this.dispatch(!document.hidden);
    }, this.dispatch = (t) => {
      if (t !== this.documentActive) {
        const n = window.Vaadin.copilot.eventbus;
        this.documentActive = t, n.emit("document-activation-change", { active: this.documentActive });
      }
    };
  }
  copilotActivated() {
    this.addListeners();
  }
  copilotDeactivated() {
    this.removeListeners();
  }
}
const Sr = new Sl(), Nl = "copilot-development-setup-user-guide";
function xl() {
  nn("use-dev-workflow-guide"), Q.updatePanel(Nl, { floating: !0 });
}
function ro() {
  const e = b.jdkInfo;
  return e ? e.jrebel ? "success" : e.hotswapAgentFound ? !e.hotswapVersionOk || !e.runningWithExtendClassDef || !e.runningWitHotswap || !e.runningInJavaDebugMode ? "error" : "success" : "warning" : null;
}
function sc() {
  const e = b.jdkInfo;
  return e == null || ro() !== "success" ? "none" : e.jrebel ? "jrebel" : e.runningWitHotswap ? "hotswap" : "none";
}
function Pl() {
  let e = "success";
  return b.idePluginState !== void 0 && !b.idePluginState.active && (e = "warning"), e;
}
function Dl() {
  if (!b.jdkInfo)
    return { status: "success" };
  const e = ro(), t = Pl();
  return e === "warning" ? t === "warning" ? { status: "warning", message: "IDE Plugin, Hotswap" } : { status: "warning", message: "Hotswap is not enabled" } : t === "warning" ? { status: "warning", message: "IDE Plugin is not active" } : e === "error" ? { status: "error", message: "Hotswap is partially enabled" } : { status: "success" };
}
function lc() {
  const e = document.createElement("vaadin-menu-bar-item"), t = document.createElement("div");
  e.classList.add("dev-workflow-menu-item"), t.style.display = "flex", t.style.flexDirection = "column";
  const n = document.createElement("div");
  n.classList.add("dev-workflow-label-container");
  const r = document.createElement("div");
  r.className = "label", r.innerHTML = "Development workflow";
  const i = document.createElement("div");
  i.className = "status";
  const o = document.createElement("div");
  o.className = "icon", n.appendChild(r), i.className = "status";
  const a = Dl();
  return (a.status === "warning" || a.status === "error") && (e.classList.add(a.status), o.classList.add(a.status)), a.message && (i.innerHTML = a.message), n.appendChild(i), t.appendChild(n), e.append(t), e.appendChild(o), {
    component: e,
    onClick: () => {
      xl();
    }
  };
}
function $l() {
  Pe(`${xe}get-dev-setup-info`, {}), window.Vaadin.copilot.eventbus.on("copilot-get-dev-setup-info-response", (e) => {
    if (e.detail.content) {
      const t = JSON.parse(e.detail.content);
      b.setIdePluginState(t.ideInfo), b.jdkInfo = t.jdkInfo;
    }
  });
}
var Cl = Object.defineProperty, kl = Object.getOwnPropertyDescriptor, Tl = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? kl(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, n, i) : a(i)) || i);
  return r && i && Cl(t, n, i), i;
};
let Nr = class extends Ts {
  constructor() {
    super(...arguments), this.removers = [], this.initialized = !1, this.toggleOperationInProgressAttr = () => {
      this.toggleAttribute("operation-in-progress", b.operationWaitsHmrUpdate !== void 0);
    }, this.operationInProgressCursorUpdateDebounceFunc = Al(this.toggleOperationInProgressAttr, 500), this.overlayOutsideClickListener = (e) => {
      dt(e.target?.owner) || (b.active || dt(e.detail.sourceEvent.target)) && e.preventDefault();
    };
  }
  static get styles() {
    return [
      le(pl),
      le(gl),
      le(bl),
      le(_l),
      le(ml),
      le(yl),
      le(wl),
      ps`
        :host {
          position: fixed;
          inset: 0;
          z-index: 9999;
          contain: strict;
          font: var(--font-small);
          color: var(--color);
          pointer-events: all;
          cursor: var(--cursor, default);
        }

        :host([operation-in-progress]) {
          --cursor: wait;
          --lumo-clickable-cursor: wait;
        }

        :host(:not([active])) {
          visibility: hidden !important;
          pointer-events: none;
        }

        /* Hide floating panels when not active */

        :host(:not([active])) > copilot-section-panel-wrapper {
          display: none !important;
        }
        :host(:not([active])) > copilot-section-panel-wrapper[individual] {
          display: block !important;
          visibility: visible;
          pointer-events: all;
        }

        /* Keep activation button and menu visible */

        copilot-activation-button,
        .activation-button-menu {
          visibility: visible;
        }

        copilot-activation-button {
          pointer-events: auto;
        }

        a {
          color: var(--blue-600);
          text-decoration-color: var(--blue-200);
        }

        :host([user-select-none]) {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Needed to prevent a JS error because of monkey patched '_attachOverlay'. It is some scope issue, */
        /* where 'this._placeholder.parentNode' is undefined - the scope if 'this' gets messed up at some point. */
        /* We also don't want animations on the overlays to make the feel faster, so this is fine. */

        :is(
            vaadin-context-menu-overlay,
            vaadin-menu-bar-overlay,
            vaadin-select-overlay,
            vaadin-combo-box-overlay,
            vaadin-tooltip-overlay
          ):is([opening], [closing]),
        :is(
            vaadin-context-menu-overlay,
            vaadin-menu-bar-overlay,
            vaadin-select-overlay,
            vaadin-combo-box-overlay,
            vaadin-tooltip-overlay
          )::part(overlay) {
          animation: none !important;
        }

        :host(:not([active])) copilot-drawer-panel::before {
          animation: none;
        }

        /* Workaround for https://github.com/vaadin/web-components/issues/5400 */

        :host([active]) .activation-button-menu .activate,
        :host(:not([active])) .activation-button-menu .deactivate,
        :host(:not([active])) .activation-button-menu .toggle-spotlight {
          display: none;
        }
      `
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.init().catch((e) => He("Unable to initialize copilot", e));
  }
  async init() {
    if (this.initialized)
      return;
    await window.Vaadin.copilot._machineState.initializer.promise, document.body.style.setProperty("--dev-tools-button-display", "none"), await import("./copilot-global-vars-later-C8QUTtcr.js"), await import("./copilot-init-step2-ChgbDE26.js"), Vs(), this.tabIndex = 0, St.hostConnectedCallback(), window.addEventListener("keydown", yr), E.onSend(this.handleSendEvent), this.removers.push(E.on("close-drawers", this.closeDrawers.bind(this))), this.removers.push(
      E.on("open-attention-required-drawer", this.openDrawerIfPanelRequiresAttention.bind(this))
    ), this.removers.push(
      E.on("set-pointer-events", (t) => {
        this.style.pointerEvents = t.detail.enable ? "" : "none";
      })
    ), this.addEventListener("mousemove", this.mouseMoveListener), this.addEventListener("dragover", this.mouseMoveListener), Ye.addOverlayOutsideClickEvent();
    const e = window.matchMedia("(prefers-color-scheme: dark)");
    this.classList.toggle("dark", e.matches), e.addEventListener("change", (t) => {
      this.classList.toggle("dark", e.matches);
    }), this.reaction(
      () => b.spotlightActive,
      () => {
        ue.saveSpotlightActivation(b.spotlightActive), Array.from(this.shadowRoot.querySelectorAll("copilot-section-panel-wrapper")).filter((t) => t.panelInfo?.floating === !0).forEach((t) => {
          b.spotlightActive ? t.style.setProperty("display", "none") : t.style.removeProperty("display");
        });
      }
    ), this.reaction(
      () => b.active,
      () => {
        this.toggleAttribute("active", b.active), b.active ? this.activate() : this.deactivate(), ue.saveCopilotActivation(b.active);
      }
    ), this.reaction(
      () => b.activatedAtLeastOnce,
      () => {
        Ji(), js();
      }
    ), this.reaction(
      () => b.sectionPanelDragging,
      () => {
        b.sectionPanelDragging && Array.from(this.shadowRoot.children).filter((n) => n.localName.endsWith("-overlay")).forEach((n) => {
          n.close && n.close();
        });
      }
    ), this.reaction(
      () => b.operationWaitsHmrUpdate,
      () => {
        b.operationWaitsHmrUpdate ? this.operationInProgressCursorUpdateDebounceFunc() : (this.operationInProgressCursorUpdateDebounceFunc.clear(), this.toggleOperationInProgressAttr());
      }
    ), this.reaction(
      () => Q.panels,
      () => {
        Q.panels.find((t) => t.individual) && this.requestUpdate();
      }
    ), ue.getCopilotActivation() && jn().then(() => {
      b.setActive(!0, "restore");
    }), this.removers.push(
      E.on("user-select", (t) => {
        const { allowSelection: n } = t.detail;
        this.toggleAttribute("user-select-none", !n);
      })
    ), Fi(), this.initialized = !0, $l();
  }
  /**
   * Called when Copilot is activated. Good place to start attach listeners etc.
   */
  activate() {
    nn("activate"), St.activate(), Sr.copilotActivated(), Rs(), this.openDrawerIfPanelRequiresAttention(), document.documentElement.addEventListener("mouseleave", this.mouseLeaveListener), Ye.onCopilotActivation(), E.emit("component-tree-updated", {}), Gi.loadPreviewConfiguration();
  }
  /**
   * Called when Copilot is deactivated. Good place to remove listeners etc.
   */
  deactivate() {
    this.closeDrawers(), St.deactivate(), Sr.copilotDeactivated(), document.documentElement.removeEventListener("mouseleave", this.mouseLeaveListener), Ye.onCopilotDeactivation();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), St.hostDisconnectedCallback(), window.removeEventListener("keydown", yr), E.offSend(this.handleSendEvent), this.removers.forEach((e) => e()), this.removeEventListener("mousemove", this.mouseMoveListener), this.removeEventListener("dragover", this.mouseMoveListener), Ye.removeOverlayOutsideClickEvent(), document.documentElement.removeEventListener("vaadin-overlay-outside-click", this.overlayOutsideClickListener);
  }
  handleSendEvent(e) {
    const t = e.detail.command, n = e.detail.data;
    Pe(t, n);
  }
  /**
   * Opens the attention required drawer if there is any.
   */
  openDrawerIfPanelRequiresAttention() {
    const e = Q.getAttentionRequiredPanelConfiguration();
    if (!e)
      return;
    const t = e.panel;
    if (!t || e.floating)
      return;
    const n = this.shadowRoot.querySelector(`copilot-drawer-panel[position="${t}"]`);
    n.opened = !0;
  }
  render() {
    return zt`
      <copilot-activation-button
        @activation-btn-clicked="${() => {
      b.toggleActive("button"), b.setLoginCheckActive(!1);
    }}"
        @spotlight-activation-changed="${(e) => {
      b.setSpotlightActive(e.detail);
    }}"
        .spotlightOn="${b.spotlightActive}">
      </copilot-activation-button>
      <copilot-component-selector></copilot-component-selector>
      <copilot-label-editor-container></copilot-label-editor-container>
      <copilot-info-tooltip></copilot-info-tooltip>
      ${this.renderDrawer("left")} ${this.renderDrawer("right")} ${this.renderDrawer("bottom")} ${sl()}
      <copilot-spotlight ?active=${b.spotlightActive && b.active}></copilot-spotlight>
      <copilot-login-check ?active=${b.loginCheckActive && b.active}></copilot-login-check>
      <copilot-notifications-container></copilot-notifications-container>
    `;
  }
  renderDrawer(e) {
    return zt` <copilot-drawer-panel no-transition position=${e}>
      ${al(e)}
    </copilot-drawer-panel>`;
  }
  /**
   * Closes the open drawers if any opened unless an overlay is opened from drawer.
   */
  closeDrawers() {
    const e = this.shadowRoot.querySelectorAll(`${xe}drawer-panel`);
    if (!Array.from(e).some((o) => o.opened))
      return;
    const n = Array.from(this.shadowRoot.children).find(
      (o) => o.localName.endsWith("overlay")
    ), r = n && Ye.getOwner(n);
    if (!r) {
      e.forEach((o) => {
        o.opened = !1;
      });
      return;
    }
    const i = is(r, "copilot-drawer-panel");
    if (!i) {
      e.forEach((o) => {
        o.opened = !1;
      });
      return;
    }
    Array.from(e).filter((o) => o.position !== i.position).forEach((o) => {
      o.opened = !1;
    });
  }
  updated(e) {
    super.updated(e), this.attachActivationButtonToBody(), vl();
  }
  attachActivationButtonToBody() {
    const e = document.body.querySelectorAll("copilot-activation-button");
    e.length > 1 && e[0].remove();
  }
  mouseMoveListener(e) {
    e.composedPath().find((t) => t.localName === `${xe}drawer-panel`) || this.closeDrawers();
  }
  mouseLeaveListener() {
    E.emit("close-drawers", {});
  }
};
Nr = Tl([
  vs("copilot-main")
], Nr);
const Vl = window.Vaadin, jl = {
  init(e) {
    Ai(
      () => window.Vaadin.devTools,
      (t) => {
        const n = t.handleFrontendMessage;
        t.handleFrontendMessage = (r) => {
          fl(r) || n.call(t, r);
        };
      }
    );
  }
};
Vl.devToolsPlugins.push(jl);
export {
  ec as $,
  Rl as A,
  Na as B,
  ue as C,
  O as D,
  Nl as E,
  Dl as F,
  tc as G,
  lc as H,
  Ml as I,
  Al as J,
  nc as K,
  rc as L,
  Ts as M,
  Ls as N,
  Xl as O,
  xe as P,
  nn as Q,
  ml as R,
  bl as S,
  Hl as T,
  rn as U,
  Ll as V,
  Wi as W,
  qi as X,
  Kl as Y,
  ls as Z,
  Yt as _,
  El as a,
  sc as a0,
  Pl as a1,
  xl as a2,
  An as a3,
  Pi as a4,
  Gl as a5,
  E as b,
  oc as c,
  Zl as d,
  b as e,
  Ni as f,
  ac as g,
  He as h,
  Bl as i,
  Fl as j,
  Ul as k,
  ic as l,
  vs as m,
  Q as n,
  Il as o,
  zl as p,
  ps as q,
  le as r,
  Pe as s,
  Yl as t,
  Xi as u,
  hl as v,
  zt as w,
  it as x,
  Jl as y,
  ro as z
};
