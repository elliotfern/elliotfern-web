function Th(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r]
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const o in n)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function n(o) {
    if (o.ep) return
    o.ep = !0
    const i = r(o)
    fetch(o.href, i)
  }
})()
var zn =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var hd = { exports: {} },
  Ki = {},
  gd = { exports: {} },
  Z = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bo = Symbol.for('react.element'),
  Fh = Symbol.for('react.portal'),
  Lh = Symbol.for('react.fragment'),
  Ph = Symbol.for('react.strict_mode'),
  Nh = Symbol.for('react.profiler'),
  jh = Symbol.for('react.provider'),
  Rh = Symbol.for('react.context'),
  Oh = Symbol.for('react.forward_ref'),
  _h = Symbol.for('react.suspense'),
  Ih = Symbol.for('react.memo'),
  qh = Symbol.for('react.lazy'),
  fl = Symbol.iterator
function $h(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (fl && e[fl]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var md = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yd = Object.assign,
  vd = {}
function vn(e, t, r) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = vd),
    (this.updater = r || md)
}
vn.prototype.isReactComponent = {}
vn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Dd() {}
Dd.prototype = vn.prototype
function su(e, t, r) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = vd),
    (this.updater = r || md)
}
var uu = (su.prototype = new Dd())
uu.constructor = su
yd(uu, vn.prototype)
uu.isPureReactComponent = !0
var pl = Array.isArray,
  xd = Object.prototype.hasOwnProperty,
  lu = { current: null },
  Cd = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ad(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      xd.call(t, n) && !Cd.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2]
    o.children = u
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: bo, type: e, key: i, ref: a, props: o, _owner: lu.current }
}
function Mh(e, t) {
  return {
    $$typeof: bo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function cu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === bo
}
function Uh(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var hl = /\/+/g
function va(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Uh('' + e.key)
    : t.toString(36)
}
function Zo(e, t, r, n, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case bo:
          case Fh:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + va(a, 0) : n),
      pl(o)
        ? ((r = ''),
          e != null && (r = e.replace(hl, '$&/') + '/'),
          Zo(o, t, r, '', function (l) {
            return l
          }))
        : o != null &&
          (cu(o) &&
            (o = Mh(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(hl, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), pl(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var u = n + va(i, s)
      a += Zo(i, t, r, u, o)
    }
  else if (((u = $h(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = n + va(i, s++)), (a += Zo(i, t, r, u, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function No(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    Zo(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function zh(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (r) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r))
        },
        function (r) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Me = { current: null },
  Xo = { transition: null },
  Hh = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Xo,
    ReactCurrentOwner: lu,
  }
function wd() {
  throw Error('act(...) is not supported in production builds of React.')
}
Z.Children = {
  map: No,
  forEach: function (e, t, r) {
    No(
      e,
      function () {
        t.apply(this, arguments)
      },
      r
    )
  },
  count: function (e) {
    var t = 0
    return (
      No(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      No(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!cu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
Z.Component = vn
Z.Fragment = Lh
Z.Profiler = Nh
Z.PureComponent = su
Z.StrictMode = Ph
Z.Suspense = _h
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hh
Z.act = wd
Z.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var n = yd({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = lu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (u in t)
      xd.call(t, u) &&
        !Cd.hasOwnProperty(u) &&
        (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
  }
  var u = arguments.length - 2
  if (u === 1) n.children = r
  else if (1 < u) {
    s = Array(u)
    for (var l = 0; l < u; l++) s[l] = arguments[l + 2]
    n.children = s
  }
  return { $$typeof: bo, type: e.type, key: o, ref: i, props: n, _owner: a }
}
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jh, _context: e }),
    (e.Consumer = e)
  )
}
Z.createElement = Ad
Z.createFactory = function (e) {
  var t = Ad.bind(null, e)
  return (t.type = e), t
}
Z.createRef = function () {
  return { current: null }
}
Z.forwardRef = function (e) {
  return { $$typeof: Oh, render: e }
}
Z.isValidElement = cu
Z.lazy = function (e) {
  return { $$typeof: qh, _payload: { _status: -1, _result: e }, _init: zh }
}
Z.memo = function (e, t) {
  return { $$typeof: Ih, type: e, compare: t === void 0 ? null : t }
}
Z.startTransition = function (e) {
  var t = Xo.transition
  Xo.transition = {}
  try {
    e()
  } finally {
    Xo.transition = t
  }
}
Z.unstable_act = wd
Z.useCallback = function (e, t) {
  return Me.current.useCallback(e, t)
}
Z.useContext = function (e) {
  return Me.current.useContext(e)
}
Z.useDebugValue = function () {}
Z.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e)
}
Z.useEffect = function (e, t) {
  return Me.current.useEffect(e, t)
}
Z.useId = function () {
  return Me.current.useId()
}
Z.useImperativeHandle = function (e, t, r) {
  return Me.current.useImperativeHandle(e, t, r)
}
Z.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t)
}
Z.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t)
}
Z.useMemo = function (e, t) {
  return Me.current.useMemo(e, t)
}
Z.useReducer = function (e, t, r) {
  return Me.current.useReducer(e, t, r)
}
Z.useRef = function (e) {
  return Me.current.useRef(e)
}
Z.useState = function (e) {
  return Me.current.useState(e)
}
Z.useSyncExternalStore = function (e, t, r) {
  return Me.current.useSyncExternalStore(e, t, r)
}
Z.useTransition = function () {
  return Me.current.useTransition()
}
Z.version = '18.3.1'
gd.exports = Z
var T = gd.exports
const tn = zt(T),
  Vh = Th({ __proto__: null, default: tn }, [T])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wh = T,
  Gh = Symbol.for('react.element'),
  Kh = Symbol.for('react.fragment'),
  Yh = Object.prototype.hasOwnProperty,
  Qh = Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jh = { key: !0, ref: !0, __self: !0, __source: !0 }
function bd(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) Yh.call(t, n) && !Jh.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: Gh, type: e, key: i, ref: a, props: o, _owner: Qh.current }
}
Ki.Fragment = Kh
Ki.jsx = bd
Ki.jsxs = bd
hd.exports = Ki
var d = hd.exports,
  Ed = { exports: {} },
  at = {},
  Sd = { exports: {} },
  kd = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(A, g) {
    var C = A.length
    A.push(g)
    e: for (; 0 < C; ) {
      var L = (C - 1) >>> 1,
        R = A[L]
      if (0 < o(R, g)) (A[L] = g), (A[C] = R), (C = L)
      else break e
    }
  }
  function r(A) {
    return A.length === 0 ? null : A[0]
  }
  function n(A) {
    if (A.length === 0) return null
    var g = A[0],
      C = A.pop()
    if (C !== g) {
      A[0] = C
      e: for (var L = 0, R = A.length, q = R >>> 1; L < q; ) {
        var H = 2 * (L + 1) - 1,
          W = A[H],
          Q = H + 1,
          G = A[Q]
        if (0 > o(W, C))
          Q < R && 0 > o(G, W)
            ? ((A[L] = G), (A[Q] = C), (L = Q))
            : ((A[L] = W), (A[H] = C), (L = H))
        else if (Q < R && 0 > o(G, C)) (A[L] = G), (A[Q] = C), (L = Q)
        else break e
      }
    }
    return g
  }
  function o(A, g) {
    var C = A.sortIndex - g.sortIndex
    return C !== 0 ? C : A.id - g.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var a = Date,
      s = a.now()
    e.unstable_now = function () {
      return a.now() - s
    }
  }
  var u = [],
    l = [],
    c = 1,
    f = null,
    p = 3,
    m = !1,
    D = !1,
    w = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function x(A) {
    for (var g = r(l); g !== null; ) {
      if (g.callback === null) n(l)
      else if (g.startTime <= A) n(l), (g.sortIndex = g.expirationTime), t(u, g)
      else break
      g = r(l)
    }
  }
  function B(A) {
    if (((w = !1), x(A), !D))
      if (r(u) !== null) (D = !0), b(j)
      else {
        var g = r(l)
        g !== null && k(B, g.startTime - A)
      }
  }
  function j(A, g) {
    ;(D = !1), w && ((w = !1), y(_), (_ = -1)), (m = !0)
    var C = p
    try {
      for (
        x(g), f = r(u);
        f !== null && (!(f.expirationTime > g) || (A && !O()));

      ) {
        var L = f.callback
        if (typeof L == 'function') {
          ;(f.callback = null), (p = f.priorityLevel)
          var R = L(f.expirationTime <= g)
          ;(g = e.unstable_now()),
            typeof R == 'function' ? (f.callback = R) : f === r(u) && n(u),
            x(g)
        } else n(u)
        f = r(u)
      }
      if (f !== null) var q = !0
      else {
        var H = r(l)
        H !== null && k(B, H.startTime - g), (q = !1)
      }
      return q
    } finally {
      ;(f = null), (p = C), (m = !1)
    }
  }
  var I = !1,
    F = null,
    _ = -1,
    P = 5,
    $ = -1
  function O() {
    return !(e.unstable_now() - $ < P)
  }
  function z() {
    if (F !== null) {
      var A = e.unstable_now()
      $ = A
      var g = !0
      try {
        g = F(!0, A)
      } finally {
        g ? U() : ((I = !1), (F = null))
      }
    } else I = !1
  }
  var U
  if (typeof h == 'function')
    U = function () {
      h(z)
    }
  else if (typeof MessageChannel < 'u') {
    var E = new MessageChannel(),
      v = E.port2
    ;(E.port1.onmessage = z),
      (U = function () {
        v.postMessage(null)
      })
  } else
    U = function () {
      S(z, 0)
    }
  function b(A) {
    ;(F = A), I || ((I = !0), U())
  }
  function k(A, g) {
    _ = S(function () {
      A(e.unstable_now())
    }, g)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null
    }),
    (e.unstable_continueExecution = function () {
      D || m || ((D = !0), b(j))
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (P = 0 < A ? Math.floor(1e3 / A) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(u)
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var g = 3
          break
        default:
          g = p
      }
      var C = p
      p = g
      try {
        return A()
      } finally {
        p = C
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, g) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          A = 3
      }
      var C = p
      p = A
      try {
        return g()
      } finally {
        p = C
      }
    }),
    (e.unstable_scheduleCallback = function (A, g, C) {
      var L = e.unstable_now()
      switch (
        (typeof C == 'object' && C !== null
          ? ((C = C.delay), (C = typeof C == 'number' && 0 < C ? L + C : L))
          : (C = L),
        A)
      ) {
        case 1:
          var R = -1
          break
        case 2:
          R = 250
          break
        case 5:
          R = 1073741823
          break
        case 4:
          R = 1e4
          break
        default:
          R = 5e3
      }
      return (
        (R = C + R),
        (A = {
          id: c++,
          callback: g,
          priorityLevel: A,
          startTime: C,
          expirationTime: R,
          sortIndex: -1,
        }),
        C > L
          ? ((A.sortIndex = C),
            t(l, A),
            r(u) === null &&
              A === r(l) &&
              (w ? (y(_), (_ = -1)) : (w = !0), k(B, C - L)))
          : ((A.sortIndex = R), t(u, A), D || m || ((D = !0), b(j))),
        A
      )
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (A) {
      var g = p
      return function () {
        var C = p
        p = g
        try {
          return A.apply(this, arguments)
        } finally {
          p = C
        }
      }
    })
})(kd)
Sd.exports = kd
var Zh = Sd.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xh = T,
  it = Zh
function M(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Bd = new Set(),
  eo = {}
function _r(e, t) {
  cn(e, t), cn(e + 'Capture', t)
}
function cn(e, t) {
  for (eo[e] = t, e = 0; e < t.length; e++) Bd.add(t[e])
}
var qt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Xa = Object.prototype.hasOwnProperty,
  e2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gl = {},
  ml = {}
function t2(e) {
  return Xa.call(ml, e)
    ? !0
    : Xa.call(gl, e)
      ? !1
      : e2.test(e)
        ? (ml[e] = !0)
        : ((gl[e] = !0), !1)
}
function r2(e, t, r, n) {
  if (r !== null && r.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function n2(e, t, r, n) {
  if (t === null || typeof t > 'u' || r2(e, t, r, n)) return !0
  if (n) return !1
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Ue(e, t, r, n, o, i, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a)
}
var Le = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Le[e] = new Ue(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Le[t] = new Ue(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Le[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Le[e] = new Ue(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Le[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Le[e] = new Ue(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Le[e] = new Ue(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Le[e] = new Ue(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Le[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var du = /[\-:]([a-z])/g
function fu(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(du, fu)
    Le[t] = new Ue(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(du, fu)
    Le[t] = new Ue(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(du, fu)
  Le[t] = new Ue(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Le.xlinkHref = new Ue(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function pu(e, t, r, n) {
  var o = Le.hasOwnProperty(t) ? Le[t] : null
  ;(o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (n2(t, r, o, n) && (r = null),
    n || o === null
      ? t2(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : o.mustUseProperty
        ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
        : ((t = o.attributeName),
          (n = o.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Ht = Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jo = Symbol.for('react.element'),
  zr = Symbol.for('react.portal'),
  Hr = Symbol.for('react.fragment'),
  hu = Symbol.for('react.strict_mode'),
  es = Symbol.for('react.profiler'),
  Td = Symbol.for('react.provider'),
  Fd = Symbol.for('react.context'),
  gu = Symbol.for('react.forward_ref'),
  ts = Symbol.for('react.suspense'),
  rs = Symbol.for('react.suspense_list'),
  mu = Symbol.for('react.memo'),
  Qt = Symbol.for('react.lazy'),
  Ld = Symbol.for('react.offscreen'),
  yl = Symbol.iterator
function En(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yl && e[yl]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var ge = Object.assign,
  Da
function qn(e) {
  if (Da === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      Da = (t && t[1]) || ''
    }
  return (
    `
` +
    Da +
    e
  )
}
var xa = !1
function Ca(e, t) {
  if (!e || xa) return ''
  xa = !0
  var r = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (l) {
          var n = l
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (l) {
          n = l
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (l) {
        n = l
      }
      e()
    }
  } catch (l) {
    if (l && n && typeof l.stack == 'string') {
      for (
        var o = l.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var u =
                  `
` + o[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                )
              }
            while (1 <= a && 0 <= s)
          break
        }
    }
  } finally {
    ;(xa = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? qn(e) : ''
}
function o2(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type)
    case 16:
      return qn('Lazy')
    case 13:
      return qn('Suspense')
    case 19:
      return qn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Ca(e.type, !1)), e
    case 11:
      return (e = Ca(e.type.render, !1)), e
    case 1:
      return (e = Ca(e.type, !0)), e
    default:
      return ''
  }
}
function ns(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Hr:
      return 'Fragment'
    case zr:
      return 'Portal'
    case es:
      return 'Profiler'
    case hu:
      return 'StrictMode'
    case ts:
      return 'Suspense'
    case rs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Fd:
        return (e.displayName || 'Context') + '.Consumer'
      case Td:
        return (e._context.displayName || 'Context') + '.Provider'
      case gu:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case mu:
        return (
          (t = e.displayName || null), t !== null ? t : ns(e.type) || 'Memo'
        )
      case Qt:
        ;(t = e._payload), (e = e._init)
        try {
          return ns(e(t))
        } catch {}
    }
  return null
}
function i2(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ns(t)
    case 8:
      return t === hu ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function fr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Pd(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function a2(e) {
  var t = Pd(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof r < 'u' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var o = r.get,
      i = r.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (a) {
          ;(n = '' + a), i.call(this, a)
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n
        },
        setValue: function (a) {
          n = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ro(e) {
  e._valueTracker || (e._valueTracker = a2(e))
}
function Nd(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = Pd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function pi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function os(e, t) {
  var r = t.checked
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function vl(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = fr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function jd(e, t) {
  ;(t = t.checked), t != null && pu(e, 'checked', t, !1)
}
function is(e, t) {
  jd(e, t)
  var r = fr(t.value),
    n = t.type
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r)
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? as(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && as(e, t.type, fr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Dl(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type
    if (
      !(
        (n !== 'submit' && n !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r)
}
function as(e, t, r) {
  ;(t !== 'number' || pi(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var $n = Array.isArray
function rn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + fr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ;(e[o].selected = !0), n && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function ss(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91))
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function xl(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(M(92))
      if ($n(r)) {
        if (1 < r.length) throw Error(M(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: fr(r) }
}
function Rd(e, t) {
  var r = fr(t.value),
    n = fr(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function Cl(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Od(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function us(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Od(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Oo,
  _d = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Oo = Oo || document.createElement('div'),
          Oo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function to(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Hn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  s2 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Hn).forEach(function (e) {
  s2.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e])
  })
})
function Id(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
      ? ('' + t).trim()
      : t + 'px'
}
function qd(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = Id(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var u2 = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function ls(e, t) {
  if (t) {
    if (u2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(M(62))
  }
}
function cs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var ds = null
function yu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var fs = null,
  nn = null,
  on = null
function Al(e) {
  if ((e = ko(e))) {
    if (typeof fs != 'function') throw Error(M(280))
    var t = e.stateNode
    t && ((t = Xi(t)), fs(e.stateNode, e.type, t))
  }
}
function $d(e) {
  nn ? (on ? on.push(e) : (on = [e])) : (nn = e)
}
function Md() {
  if (nn) {
    var e = nn,
      t = on
    if (((on = nn = null), Al(e), t)) for (e = 0; e < t.length; e++) Al(t[e])
  }
}
function Ud(e, t) {
  return e(t)
}
function zd() {}
var Aa = !1
function Hd(e, t, r) {
  if (Aa) return e(t, r)
  Aa = !0
  try {
    return Ud(e, t, r)
  } finally {
    ;(Aa = !1), (nn !== null || on !== null) && (zd(), Md())
  }
}
function ro(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = Xi(r)
  if (n === null) return null
  r = n[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !n)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (r && typeof r != 'function') throw Error(M(231, t, typeof r))
  return r
}
var ps = !1
if (qt)
  try {
    var Sn = {}
    Object.defineProperty(Sn, 'passive', {
      get: function () {
        ps = !0
      },
    }),
      window.addEventListener('test', Sn, Sn),
      window.removeEventListener('test', Sn, Sn)
  } catch {
    ps = !1
  }
function l2(e, t, r, n, o, i, a, s, u) {
  var l = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, l)
  } catch (c) {
    this.onError(c)
  }
}
var Vn = !1,
  hi = null,
  gi = !1,
  hs = null,
  c2 = {
    onError: function (e) {
      ;(Vn = !0), (hi = e)
    },
  }
function d2(e, t, r, n, o, i, a, s, u) {
  ;(Vn = !1), (hi = null), l2.apply(c2, arguments)
}
function f2(e, t, r, n, o, i, a, s, u) {
  if ((d2.apply(this, arguments), Vn)) {
    if (Vn) {
      var l = hi
      ;(Vn = !1), (hi = null)
    } else throw Error(M(198))
    gi || ((gi = !0), (hs = l))
  }
}
function Ir(e) {
  var t = e,
    r = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? r : null
}
function Vd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function wl(e) {
  if (Ir(e) !== e) throw Error(M(188))
}
function p2(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Ir(e)), t === null)) throw Error(M(188))
    return t !== e ? null : e
  }
  for (var r = e, n = t; ; ) {
    var o = r.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return wl(o), e
        if (i === n) return wl(o), t
        i = i.sibling
      }
      throw Error(M(188))
    }
    if (r.return !== n.return) (r = o), (n = i)
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          ;(a = !0), (r = o), (n = i)
          break
        }
        if (s === n) {
          ;(a = !0), (n = o), (r = i)
          break
        }
        s = s.sibling
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            ;(a = !0), (r = i), (n = o)
            break
          }
          if (s === n) {
            ;(a = !0), (n = i), (r = o)
            break
          }
          s = s.sibling
        }
        if (!a) throw Error(M(189))
      }
    }
    if (r.alternate !== n) throw Error(M(190))
  }
  if (r.tag !== 3) throw Error(M(188))
  return r.stateNode.current === r ? e : t
}
function Wd(e) {
  return (e = p2(e)), e !== null ? Gd(e) : null
}
function Gd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Gd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Kd = it.unstable_scheduleCallback,
  bl = it.unstable_cancelCallback,
  h2 = it.unstable_shouldYield,
  g2 = it.unstable_requestPaint,
  ye = it.unstable_now,
  m2 = it.unstable_getCurrentPriorityLevel,
  vu = it.unstable_ImmediatePriority,
  Yd = it.unstable_UserBlockingPriority,
  mi = it.unstable_NormalPriority,
  y2 = it.unstable_LowPriority,
  Qd = it.unstable_IdlePriority,
  Yi = null,
  Tt = null
function v2(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == 'function')
    try {
      Tt.onCommitFiberRoot(Yi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : C2,
  D2 = Math.log,
  x2 = Math.LN2
function C2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((D2(e) / x2) | 0)) | 0
}
var _o = 64,
  Io = 4194304
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function yi(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var s = a & ~o
    s !== 0 ? (n = Mn(s)) : ((i &= a), i !== 0 && (n = Mn(i)))
  } else (a = r & ~o), a !== 0 ? (n = Mn(a)) : i !== 0 && (n = Mn(i))
  if (n === 0) return 0
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Ct(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function A2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function w2(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ct(i),
      s = 1 << a,
      u = o[a]
    u === -1
      ? (!(s & r) || s & n) && (o[a] = A2(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s)
  }
}
function gs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Jd() {
  var e = _o
  return (_o <<= 1), !(_o & 4194240) && (_o = 64), e
}
function wa(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function Eo(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ct(t)),
    (e[t] = r)
}
function b2(e, t) {
  var r = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var n = e.eventTimes
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Ct(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function Du(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - Ct(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var ne = 0
function Zd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Xd,
  xu,
  ef,
  tf,
  rf,
  ms = !1,
  qo = [],
  nr = null,
  or = null,
  ir = null,
  no = new Map(),
  oo = new Map(),
  Zt = [],
  E2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function El(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      nr = null
      break
    case 'dragenter':
    case 'dragleave':
      or = null
      break
    case 'mouseover':
    case 'mouseout':
      ir = null
      break
    case 'pointerover':
    case 'pointerout':
      no.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      oo.delete(t.pointerId)
  }
}
function kn(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ko(t)), t !== null && xu(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function S2(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (nr = kn(nr, e, t, r, n, o)), !0
    case 'dragenter':
      return (or = kn(or, e, t, r, n, o)), !0
    case 'mouseover':
      return (ir = kn(ir, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return no.set(i, kn(no.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), oo.set(i, kn(oo.get(i) || null, e, t, r, n, o)), !0
      )
  }
  return !1
}
function nf(e) {
  var t = Cr(e.target)
  if (t !== null) {
    var r = Ir(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Vd(r)), t !== null)) {
          ;(e.blockedOn = t),
            rf(e.priority, function () {
              ef(r)
            })
          return
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function ei(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(ds = n), r.target.dispatchEvent(n), (ds = null)
    } else return (t = ko(r)), t !== null && xu(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function Sl(e, t, r) {
  ei(e) && r.delete(t)
}
function k2() {
  ;(ms = !1),
    nr !== null && ei(nr) && (nr = null),
    or !== null && ei(or) && (or = null),
    ir !== null && ei(ir) && (ir = null),
    no.forEach(Sl),
    oo.forEach(Sl)
}
function Bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ms ||
      ((ms = !0), it.unstable_scheduleCallback(it.unstable_NormalPriority, k2)))
}
function io(e) {
  function t(o) {
    return Bn(o, e)
  }
  if (0 < qo.length) {
    Bn(qo[0], e)
    for (var r = 1; r < qo.length; r++) {
      var n = qo[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    nr !== null && Bn(nr, e),
      or !== null && Bn(or, e),
      ir !== null && Bn(ir, e),
      no.forEach(t),
      oo.forEach(t),
      r = 0;
    r < Zt.length;
    r++
  )
    (n = Zt[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < Zt.length && ((r = Zt[0]), r.blockedOn === null); )
    nf(r), r.blockedOn === null && Zt.shift()
}
var an = Ht.ReactCurrentBatchConfig,
  vi = !0
function B2(e, t, r, n) {
  var o = ne,
    i = an.transition
  an.transition = null
  try {
    ;(ne = 1), Cu(e, t, r, n)
  } finally {
    ;(ne = o), (an.transition = i)
  }
}
function T2(e, t, r, n) {
  var o = ne,
    i = an.transition
  an.transition = null
  try {
    ;(ne = 4), Cu(e, t, r, n)
  } finally {
    ;(ne = o), (an.transition = i)
  }
}
function Cu(e, t, r, n) {
  if (vi) {
    var o = ys(e, t, r, n)
    if (o === null) Na(e, t, n, Di, r), El(e, n)
    else if (S2(o, e, t, r, n)) n.stopPropagation()
    else if ((El(e, n), t & 4 && -1 < E2.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o)
        if (
          (i !== null && Xd(i),
          (i = ys(e, t, r, n)),
          i === null && Na(e, t, n, Di, r),
          i === o)
        )
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else Na(e, t, n, null, r)
  }
}
var Di = null
function ys(e, t, r, n) {
  if (((Di = null), (e = yu(n)), (e = Cr(e)), e !== null))
    if (((t = Ir(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = Vd(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Di = e), null
}
function of(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (m2()) {
        case vu:
          return 1
        case Yd:
          return 4
        case mi:
        case y2:
          return 16
        case Qd:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var er = null,
  Au = null,
  ti = null
function af() {
  if (ti) return ti
  var e,
    t = Au,
    r = t.length,
    n,
    o = 'value' in er ? er.value : er.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (ti = o.slice(e, 1 < n ? 1 - n : void 0))
}
function ri(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function $o() {
  return !0
}
function kl() {
  return !1
}
function st(e) {
  function t(r, n, o, i, a) {
    ;(this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? $o
        : kl),
      (this.isPropagationStopped = kl),
      this
    )
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var r = this.nativeEvent
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = $o))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = $o))
      },
      persist: function () {},
      isPersistent: $o,
    }),
    t
  )
}
var Dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wu = st(Dn),
  So = ge({}, Dn, { view: 0, detail: 0 }),
  F2 = st(So),
  ba,
  Ea,
  Tn,
  Qi = ge({}, So, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Tn &&
            (Tn && e.type === 'mousemove'
              ? ((ba = e.screenX - Tn.screenX), (Ea = e.screenY - Tn.screenY))
              : (Ea = ba = 0),
            (Tn = e)),
          ba)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ea
    },
  }),
  Bl = st(Qi),
  L2 = ge({}, Qi, { dataTransfer: 0 }),
  P2 = st(L2),
  N2 = ge({}, So, { relatedTarget: 0 }),
  Sa = st(N2),
  j2 = ge({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R2 = st(j2),
  O2 = ge({}, Dn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  _2 = st(O2),
  I2 = ge({}, Dn, { data: 0 }),
  Tl = st(I2),
  q2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  $2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  M2 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function U2(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = M2[e]) ? !!t[e] : !1
}
function bu() {
  return U2
}
var z2 = ge({}, So, {
    key: function (e) {
      if (e.key) {
        var t = q2[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ri(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? $2[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bu,
    charCode: function (e) {
      return e.type === 'keypress' ? ri(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ri(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  H2 = st(z2),
  V2 = ge({}, Qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fl = st(V2),
  W2 = ge({}, So, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bu,
  }),
  G2 = st(W2),
  K2 = ge({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y2 = st(K2),
  Q2 = ge({}, Qi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  J2 = st(Q2),
  Z2 = [9, 13, 27, 32],
  Eu = qt && 'CompositionEvent' in window,
  Wn = null
qt && 'documentMode' in document && (Wn = document.documentMode)
var X2 = qt && 'TextEvent' in window && !Wn,
  sf = qt && (!Eu || (Wn && 8 < Wn && 11 >= Wn)),
  Ll = ' ',
  Pl = !1
function uf(e, t) {
  switch (e) {
    case 'keyup':
      return Z2.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function lf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Vr = !1
function eg(e, t) {
  switch (e) {
    case 'compositionend':
      return lf(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Pl = !0), Ll)
    case 'textInput':
      return (e = t.data), e === Ll && Pl ? null : e
    default:
      return null
  }
}
function tg(e, t) {
  if (Vr)
    return e === 'compositionend' || (!Eu && uf(e, t))
      ? ((e = af()), (ti = Au = er = null), (Vr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return sf && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var rg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!rg[e.type] : t === 'textarea'
}
function cf(e, t, r, n) {
  $d(n),
    (t = xi(t, 'onChange')),
    0 < t.length &&
      ((r = new wu('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }))
}
var Gn = null,
  ao = null
function ng(e) {
  Cf(e, 0)
}
function Ji(e) {
  var t = Kr(e)
  if (Nd(t)) return e
}
function og(e, t) {
  if (e === 'change') return t
}
var df = !1
if (qt) {
  var ka
  if (qt) {
    var Ba = 'oninput' in document
    if (!Ba) {
      var jl = document.createElement('div')
      jl.setAttribute('oninput', 'return;'),
        (Ba = typeof jl.oninput == 'function')
    }
    ka = Ba
  } else ka = !1
  df = ka && (!document.documentMode || 9 < document.documentMode)
}
function Rl() {
  Gn && (Gn.detachEvent('onpropertychange', ff), (ao = Gn = null))
}
function ff(e) {
  if (e.propertyName === 'value' && Ji(ao)) {
    var t = []
    cf(t, ao, e, yu(e)), Hd(ng, t)
  }
}
function ig(e, t, r) {
  e === 'focusin'
    ? (Rl(), (Gn = t), (ao = r), Gn.attachEvent('onpropertychange', ff))
    : e === 'focusout' && Rl()
}
function ag(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ji(ao)
}
function sg(e, t) {
  if (e === 'click') return Ji(t)
}
function ug(e, t) {
  if (e === 'input' || e === 'change') return Ji(t)
}
function lg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var wt = typeof Object.is == 'function' ? Object.is : lg
function so(e, t) {
  if (wt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!Xa.call(t, o) || !wt(e[o], t[o])) return !1
  }
  return !0
}
function Ol(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function _l(e, t) {
  var r = Ol(e)
  e = 0
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e }
      e = n
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling
          break e
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = Ol(r)
  }
}
function pf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? pf(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function hf() {
  for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = pi(e.document)
  }
  return t
}
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function cg(e) {
  var t = hf(),
    r = e.focusedElem,
    n = e.selectionRange
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    pf(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Su(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        'selectionStart' in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = r.textContent.length,
          i = Math.min(n.start, o)
        ;(n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = _l(r, i))
        var a = _l(r, n)
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var dg = qt && 'documentMode' in document && 11 >= document.documentMode,
  Wr = null,
  vs = null,
  Kn = null,
  Ds = !1
function Il(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  Ds ||
    Wr == null ||
    Wr !== pi(n) ||
    ((n = Wr),
    'selectionStart' in n && Su(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Kn && so(Kn, n)) ||
      ((Kn = n),
      (n = xi(vs, 'onSelect')),
      0 < n.length &&
        ((t = new wu('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Wr))))
}
function Mo(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var Gr = {
    animationend: Mo('Animation', 'AnimationEnd'),
    animationiteration: Mo('Animation', 'AnimationIteration'),
    animationstart: Mo('Animation', 'AnimationStart'),
    transitionend: Mo('Transition', 'TransitionEnd'),
  },
  Ta = {},
  gf = {}
qt &&
  ((gf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Gr.animationend.animation,
    delete Gr.animationiteration.animation,
    delete Gr.animationstart.animation),
  'TransitionEvent' in window || delete Gr.transitionend.transition)
function Zi(e) {
  if (Ta[e]) return Ta[e]
  if (!Gr[e]) return e
  var t = Gr[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in gf) return (Ta[e] = t[r])
  return e
}
var mf = Zi('animationend'),
  yf = Zi('animationiteration'),
  vf = Zi('animationstart'),
  Df = Zi('transitionend'),
  xf = new Map(),
  ql =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function hr(e, t) {
  xf.set(e, t), _r(t, [e])
}
for (var Fa = 0; Fa < ql.length; Fa++) {
  var La = ql[Fa],
    fg = La.toLowerCase(),
    pg = La[0].toUpperCase() + La.slice(1)
  hr(fg, 'on' + pg)
}
hr(mf, 'onAnimationEnd')
hr(yf, 'onAnimationIteration')
hr(vf, 'onAnimationStart')
hr('dblclick', 'onDoubleClick')
hr('focusin', 'onFocus')
hr('focusout', 'onBlur')
hr(Df, 'onTransitionEnd')
cn('onMouseEnter', ['mouseout', 'mouseover'])
cn('onMouseLeave', ['mouseout', 'mouseover'])
cn('onPointerEnter', ['pointerout', 'pointerover'])
cn('onPointerLeave', ['pointerout', 'pointerover'])
_r(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
_r(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
_r('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
_r(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
_r(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
_r(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Un =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  hg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Un))
function $l(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), f2(n, t, void 0, e), (e.currentTarget = null)
}
function Cf(e, t) {
  t = (t & 4) !== 0
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event
    n = n.listeners
    e: {
      var i = void 0
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            u = s.instance,
            l = s.currentTarget
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e
          $l(o, s, l), (i = u)
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (u = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e
          $l(o, s, l), (i = u)
        }
    }
  }
  if (gi) throw ((e = hs), (gi = !1), (hs = null), e)
}
function ue(e, t) {
  var r = t[bs]
  r === void 0 && (r = t[bs] = new Set())
  var n = e + '__bubble'
  r.has(n) || (Af(t, e, 2, !1), r.add(n))
}
function Pa(e, t, r) {
  var n = 0
  t && (n |= 4), Af(r, e, n, t)
}
var Uo = '_reactListening' + Math.random().toString(36).slice(2)
function uo(e) {
  if (!e[Uo]) {
    ;(e[Uo] = !0),
      Bd.forEach(function (r) {
        r !== 'selectionchange' && (hg.has(r) || Pa(r, !1, e), Pa(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Uo] || ((t[Uo] = !0), Pa('selectionchange', !1, t))
  }
}
function Af(e, t, r, n) {
  switch (of(t)) {
    case 1:
      var o = B2
      break
    case 4:
      o = T2
      break
    default:
      o = Cu
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !ps ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
        ? e.addEventListener(t, r, { passive: o })
        : e.addEventListener(t, r, !1)
}
function Na(e, t, r, n, o) {
  var i = n
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return
      var a = n.tag
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var u = a.tag
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return
            a = a.return
          }
        for (; s !== null; ) {
          if (((a = Cr(s)), a === null)) return
          if (((u = a.tag), u === 5 || u === 6)) {
            n = i = a
            continue e
          }
          s = s.parentNode
        }
      }
      n = n.return
    }
  Hd(function () {
    var l = i,
      c = yu(r),
      f = []
    e: {
      var p = xf.get(e)
      if (p !== void 0) {
        var m = wu,
          D = e
        switch (e) {
          case 'keypress':
            if (ri(r) === 0) break e
          case 'keydown':
          case 'keyup':
            m = H2
            break
          case 'focusin':
            ;(D = 'focus'), (m = Sa)
            break
          case 'focusout':
            ;(D = 'blur'), (m = Sa)
            break
          case 'beforeblur':
          case 'afterblur':
            m = Sa
            break
          case 'click':
            if (r.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Bl
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = P2
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = G2
            break
          case mf:
          case yf:
          case vf:
            m = R2
            break
          case Df:
            m = Y2
            break
          case 'scroll':
            m = F2
            break
          case 'wheel':
            m = J2
            break
          case 'copy':
          case 'cut':
          case 'paste':
            m = _2
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Fl
        }
        var w = (t & 4) !== 0,
          S = !w && e === 'scroll',
          y = w ? (p !== null ? p + 'Capture' : null) : p
        w = []
        for (var h = l, x; h !== null; ) {
          x = h
          var B = x.stateNode
          if (
            (x.tag === 5 &&
              B !== null &&
              ((x = B),
              y !== null && ((B = ro(h, y)), B != null && w.push(lo(h, B, x)))),
            S)
          )
            break
          h = h.return
        }
        0 < w.length &&
          ((p = new m(p, D, null, r, c)), f.push({ event: p, listeners: w }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          p &&
            r !== ds &&
            (D = r.relatedTarget || r.fromElement) &&
            (Cr(D) || D[$t]))
        )
          break e
        if (
          (m || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          m
            ? ((D = r.relatedTarget || r.toElement),
              (m = l),
              (D = D ? Cr(D) : null),
              D !== null &&
                ((S = Ir(D)), D !== S || (D.tag !== 5 && D.tag !== 6)) &&
                (D = null))
            : ((m = null), (D = l)),
          m !== D)
        ) {
          if (
            ((w = Bl),
            (B = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Fl),
              (B = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (h = 'pointer')),
            (S = m == null ? p : Kr(m)),
            (x = D == null ? p : Kr(D)),
            (p = new w(B, h + 'leave', m, r, c)),
            (p.target = S),
            (p.relatedTarget = x),
            (B = null),
            Cr(c) === l &&
              ((w = new w(y, h + 'enter', D, r, c)),
              (w.target = x),
              (w.relatedTarget = S),
              (B = w)),
            (S = B),
            m && D)
          )
            t: {
              for (w = m, y = D, h = 0, x = w; x; x = qr(x)) h++
              for (x = 0, B = y; B; B = qr(B)) x++
              for (; 0 < h - x; ) (w = qr(w)), h--
              for (; 0 < x - h; ) (y = qr(y)), x--
              for (; h--; ) {
                if (w === y || (y !== null && w === y.alternate)) break t
                ;(w = qr(w)), (y = qr(y))
              }
              w = null
            }
          else w = null
          m !== null && Ml(f, p, m, w, !1),
            D !== null && S !== null && Ml(f, S, D, w, !0)
        }
      }
      e: {
        if (
          ((p = l ? Kr(l) : window),
          (m = p.nodeName && p.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && p.type === 'file'))
        )
          var j = og
        else if (Nl(p))
          if (df) j = ug
          else {
            j = ag
            var I = ig
          }
        else
          (m = p.nodeName) &&
            m.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (j = sg)
        if (j && (j = j(e, l))) {
          cf(f, j, r, c)
          break e
        }
        I && I(e, p, l),
          e === 'focusout' &&
            (I = p._wrapperState) &&
            I.controlled &&
            p.type === 'number' &&
            as(p, 'number', p.value)
      }
      switch (((I = l ? Kr(l) : window), e)) {
        case 'focusin':
          ;(Nl(I) || I.contentEditable === 'true') &&
            ((Wr = I), (vs = l), (Kn = null))
          break
        case 'focusout':
          Kn = vs = Wr = null
          break
        case 'mousedown':
          Ds = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Ds = !1), Il(f, r, c)
          break
        case 'selectionchange':
          if (dg) break
        case 'keydown':
        case 'keyup':
          Il(f, r, c)
      }
      var F
      if (Eu)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart'
              break e
            case 'compositionend':
              _ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              _ = 'onCompositionUpdate'
              break e
          }
          _ = void 0
        }
      else
        Vr
          ? uf(e, r) && (_ = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (sf &&
          r.locale !== 'ko' &&
          (Vr || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Vr && (F = af())
            : ((er = c),
              (Au = 'value' in er ? er.value : er.textContent),
              (Vr = !0))),
        (I = xi(l, _)),
        0 < I.length &&
          ((_ = new Tl(_, e, null, r, c)),
          f.push({ event: _, listeners: I }),
          F ? (_.data = F) : ((F = lf(r)), F !== null && (_.data = F)))),
        (F = X2 ? eg(e, r) : tg(e, r)) &&
          ((l = xi(l, 'onBeforeInput')),
          0 < l.length &&
            ((c = new Tl('onBeforeInput', 'beforeinput', null, r, c)),
            f.push({ event: c, listeners: l }),
            (c.data = F)))
    }
    Cf(f, t)
  })
}
function lo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function xi(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ro(e, r)),
      i != null && n.unshift(lo(e, i, o)),
      (i = ro(e, t)),
      i != null && n.push(lo(e, i, o))),
      (e = e.return)
  }
  return n
}
function qr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Ml(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      u = s.alternate,
      l = s.stateNode
    if (u !== null && u === n) break
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      o
        ? ((u = ro(r, i)), u != null && a.unshift(lo(r, u, s)))
        : o || ((u = ro(r, i)), u != null && a.push(lo(r, u, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var gg = /\r\n?/g,
  mg = /\u0000|\uFFFD/g
function Ul(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      gg,
      `
`
    )
    .replace(mg, '')
}
function zo(e, t, r) {
  if (((t = Ul(t)), Ul(e) !== t && r)) throw Error(M(425))
}
function Ci() {}
var xs = null,
  Cs = null
function As(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var ws = typeof setTimeout == 'function' ? setTimeout : void 0,
  yg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  zl = typeof Promise == 'function' ? Promise : void 0,
  vg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof zl < 'u'
        ? function (e) {
            return zl.resolve(null).then(e).catch(Dg)
          }
        : ws
function Dg(e) {
  setTimeout(function () {
    throw e
  })
}
function ja(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), io(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  io(t)
}
function ar(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Hl(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e
        t--
      } else r === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var xn = Math.random().toString(36).slice(2),
  kt = '__reactFiber$' + xn,
  co = '__reactProps$' + xn,
  $t = '__reactContainer$' + xn,
  bs = '__reactEvents$' + xn,
  xg = '__reactListeners$' + xn,
  Cg = '__reactHandles$' + xn
function Cr(e) {
  var t = e[kt]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[$t] || r[kt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Hl(e); e !== null; ) {
          if ((r = e[kt])) return r
          e = Hl(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function ko(e) {
  return (
    (e = e[kt] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Kr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(M(33))
}
function Xi(e) {
  return e[co] || null
}
var Es = [],
  Yr = -1
function gr(e) {
  return { current: e }
}
function le(e) {
  0 > Yr || ((e.current = Es[Yr]), (Es[Yr] = null), Yr--)
}
function ae(e, t) {
  Yr++, (Es[Yr] = e.current), (e.current = t)
}
var pr = {},
  _e = gr(pr),
  Ge = gr(!1),
  Lr = pr
function dn(e, t) {
  var r = e.type.contextTypes
  if (!r) return pr
  var n = e.stateNode
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in r) o[i] = t[i]
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Ke(e) {
  return (e = e.childContextTypes), e != null
}
function Ai() {
  le(Ge), le(_e)
}
function Vl(e, t, r) {
  if (_e.current !== pr) throw Error(M(168))
  ae(_e, t), ae(Ge, r)
}
function wf(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
    return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error(M(108, i2(e) || 'Unknown', o))
  return ge({}, r, n)
}
function wi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pr),
    (Lr = _e.current),
    ae(_e, e),
    ae(Ge, Ge.current),
    !0
  )
}
function Wl(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error(M(169))
  r
    ? ((e = wf(e, t, Lr)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      le(Ge),
      le(_e),
      ae(_e, e))
    : le(Ge),
    ae(Ge, r)
}
var Rt = null,
  ea = !1,
  Ra = !1
function bf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e)
}
function Ag(e) {
  ;(ea = !0), bf(e)
}
function mr() {
  if (!Ra && Rt !== null) {
    Ra = !0
    var e = 0,
      t = ne
    try {
      var r = Rt
      for (ne = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(Rt = null), (ea = !1)
    } catch (o) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Kd(vu, mr), o)
    } finally {
      ;(ne = t), (Ra = !1)
    }
  }
  return null
}
var Qr = [],
  Jr = 0,
  bi = null,
  Ei = 0,
  ut = [],
  lt = 0,
  Pr = null,
  Ot = 1,
  _t = ''
function Dr(e, t) {
  ;(Qr[Jr++] = Ei), (Qr[Jr++] = bi), (bi = e), (Ei = t)
}
function Ef(e, t, r) {
  ;(ut[lt++] = Ot), (ut[lt++] = _t), (ut[lt++] = Pr), (Pr = e)
  var n = Ot
  e = _t
  var o = 32 - Ct(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - Ct(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (Ot = (1 << (32 - Ct(t) + o)) | (r << o) | n),
      (_t = i + e)
  } else (Ot = (1 << i) | (r << o) | n), (_t = e)
}
function ku(e) {
  e.return !== null && (Dr(e, 1), Ef(e, 1, 0))
}
function Bu(e) {
  for (; e === bi; )
    (bi = Qr[--Jr]), (Qr[Jr] = null), (Ei = Qr[--Jr]), (Qr[Jr] = null)
  for (; e === Pr; )
    (Pr = ut[--lt]),
      (ut[lt] = null),
      (_t = ut[--lt]),
      (ut[lt] = null),
      (Ot = ut[--lt]),
      (ut[lt] = null)
}
var nt = null,
  rt = null,
  fe = !1,
  Dt = null
function Sf(e, t) {
  var r = ct(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function Gl(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (rt = ar(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Pr !== null ? { id: Ot, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = ct(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (nt = e),
            (rt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ss(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ks(e) {
  if (fe) {
    var t = rt
    if (t) {
      var r = t
      if (!Gl(e, t)) {
        if (Ss(e)) throw Error(M(418))
        t = ar(r.nextSibling)
        var n = nt
        t && Gl(e, t)
          ? Sf(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (nt = e))
      }
    } else {
      if (Ss(e)) throw Error(M(418))
      ;(e.flags = (e.flags & -4097) | 2), (fe = !1), (nt = e)
    }
  }
}
function Kl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  nt = e
}
function Ho(e) {
  if (e !== nt) return !1
  if (!fe) return Kl(e), (fe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !As(e.type, e.memoizedProps))),
    t && (t = rt))
  ) {
    if (Ss(e)) throw (kf(), Error(M(418)))
    for (; t; ) Sf(e, t), (t = ar(t.nextSibling))
  }
  if ((Kl(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              rt = ar(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      rt = null
    }
  } else rt = nt ? ar(e.stateNode.nextSibling) : null
  return !0
}
function kf() {
  for (var e = rt; e; ) e = ar(e.nextSibling)
}
function fn() {
  ;(rt = nt = null), (fe = !1)
}
function Tu(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e)
}
var wg = Ht.ReactCurrentBatchConfig
function Fn(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(M(309))
        var n = r.stateNode
      }
      if (!n) throw Error(M(147, e))
      var o = n,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(M(284))
    if (!r._owner) throw Error(M(290, e))
  }
  return e
}
function Vo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Yl(e) {
  var t = e._init
  return t(e._payload)
}
function Bf(e) {
  function t(y, h) {
    if (e) {
      var x = y.deletions
      x === null ? ((y.deletions = [h]), (y.flags |= 16)) : x.push(h)
    }
  }
  function r(y, h) {
    if (!e) return null
    for (; h !== null; ) t(y, h), (h = h.sibling)
    return null
  }
  function n(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling)
    return y
  }
  function o(y, h) {
    return (y = cr(y, h)), (y.index = 0), (y.sibling = null), y
  }
  function i(y, h, x) {
    return (
      (y.index = x),
      e
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < h ? ((y.flags |= 2), h) : x)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    )
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y
  }
  function s(y, h, x, B) {
    return h === null || h.tag !== 6
      ? ((h = Ua(x, y.mode, B)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h)
  }
  function u(y, h, x, B) {
    var j = x.type
    return j === Hr
      ? c(y, h, x.props.children, B, x.key)
      : h !== null &&
          (h.elementType === j ||
            (typeof j == 'object' &&
              j !== null &&
              j.$$typeof === Qt &&
              Yl(j) === h.type))
        ? ((B = o(h, x.props)), (B.ref = Fn(y, h, x)), (B.return = y), B)
        : ((B = li(x.type, x.key, x.props, null, y.mode, B)),
          (B.ref = Fn(y, h, x)),
          (B.return = y),
          B)
  }
  function l(y, h, x, B) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== x.containerInfo ||
      h.stateNode.implementation !== x.implementation
      ? ((h = za(x, y.mode, B)), (h.return = y), h)
      : ((h = o(h, x.children || [])), (h.return = y), h)
  }
  function c(y, h, x, B, j) {
    return h === null || h.tag !== 7
      ? ((h = Sr(x, y.mode, B, j)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h)
  }
  function f(y, h, x) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ua('' + h, y.mode, x)), (h.return = y), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case jo:
          return (
            (x = li(h.type, h.key, h.props, null, y.mode, x)),
            (x.ref = Fn(y, null, h)),
            (x.return = y),
            x
          )
        case zr:
          return (h = za(h, y.mode, x)), (h.return = y), h
        case Qt:
          var B = h._init
          return f(y, B(h._payload), x)
      }
      if ($n(h) || En(h)) return (h = Sr(h, y.mode, x, null)), (h.return = y), h
      Vo(y, h)
    }
    return null
  }
  function p(y, h, x, B) {
    var j = h !== null ? h.key : null
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return j !== null ? null : s(y, h, '' + x, B)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case jo:
          return x.key === j ? u(y, h, x, B) : null
        case zr:
          return x.key === j ? l(y, h, x, B) : null
        case Qt:
          return (j = x._init), p(y, h, j(x._payload), B)
      }
      if ($n(x) || En(x)) return j !== null ? null : c(y, h, x, B, null)
      Vo(y, x)
    }
    return null
  }
  function m(y, h, x, B, j) {
    if ((typeof B == 'string' && B !== '') || typeof B == 'number')
      return (y = y.get(x) || null), s(h, y, '' + B, j)
    if (typeof B == 'object' && B !== null) {
      switch (B.$$typeof) {
        case jo:
          return (y = y.get(B.key === null ? x : B.key) || null), u(h, y, B, j)
        case zr:
          return (y = y.get(B.key === null ? x : B.key) || null), l(h, y, B, j)
        case Qt:
          var I = B._init
          return m(y, h, x, I(B._payload), j)
      }
      if ($n(B) || En(B)) return (y = y.get(x) || null), c(h, y, B, j, null)
      Vo(h, B)
    }
    return null
  }
  function D(y, h, x, B) {
    for (
      var j = null, I = null, F = h, _ = (h = 0), P = null;
      F !== null && _ < x.length;
      _++
    ) {
      F.index > _ ? ((P = F), (F = null)) : (P = F.sibling)
      var $ = p(y, F, x[_], B)
      if ($ === null) {
        F === null && (F = P)
        break
      }
      e && F && $.alternate === null && t(y, F),
        (h = i($, h, _)),
        I === null ? (j = $) : (I.sibling = $),
        (I = $),
        (F = P)
    }
    if (_ === x.length) return r(y, F), fe && Dr(y, _), j
    if (F === null) {
      for (; _ < x.length; _++)
        (F = f(y, x[_], B)),
          F !== null &&
            ((h = i(F, h, _)), I === null ? (j = F) : (I.sibling = F), (I = F))
      return fe && Dr(y, _), j
    }
    for (F = n(y, F); _ < x.length; _++)
      (P = m(F, y, _, x[_], B)),
        P !== null &&
          (e && P.alternate !== null && F.delete(P.key === null ? _ : P.key),
          (h = i(P, h, _)),
          I === null ? (j = P) : (I.sibling = P),
          (I = P))
    return (
      e &&
        F.forEach(function (O) {
          return t(y, O)
        }),
      fe && Dr(y, _),
      j
    )
  }
  function w(y, h, x, B) {
    var j = En(x)
    if (typeof j != 'function') throw Error(M(150))
    if (((x = j.call(x)), x == null)) throw Error(M(151))
    for (
      var I = (j = null), F = h, _ = (h = 0), P = null, $ = x.next();
      F !== null && !$.done;
      _++, $ = x.next()
    ) {
      F.index > _ ? ((P = F), (F = null)) : (P = F.sibling)
      var O = p(y, F, $.value, B)
      if (O === null) {
        F === null && (F = P)
        break
      }
      e && F && O.alternate === null && t(y, F),
        (h = i(O, h, _)),
        I === null ? (j = O) : (I.sibling = O),
        (I = O),
        (F = P)
    }
    if ($.done) return r(y, F), fe && Dr(y, _), j
    if (F === null) {
      for (; !$.done; _++, $ = x.next())
        ($ = f(y, $.value, B)),
          $ !== null &&
            ((h = i($, h, _)), I === null ? (j = $) : (I.sibling = $), (I = $))
      return fe && Dr(y, _), j
    }
    for (F = n(y, F); !$.done; _++, $ = x.next())
      ($ = m(F, y, _, $.value, B)),
        $ !== null &&
          (e && $.alternate !== null && F.delete($.key === null ? _ : $.key),
          (h = i($, h, _)),
          I === null ? (j = $) : (I.sibling = $),
          (I = $))
    return (
      e &&
        F.forEach(function (z) {
          return t(y, z)
        }),
      fe && Dr(y, _),
      j
    )
  }
  function S(y, h, x, B) {
    if (
      (typeof x == 'object' &&
        x !== null &&
        x.type === Hr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == 'object' && x !== null)
    ) {
      switch (x.$$typeof) {
        case jo:
          e: {
            for (var j = x.key, I = h; I !== null; ) {
              if (I.key === j) {
                if (((j = x.type), j === Hr)) {
                  if (I.tag === 7) {
                    r(y, I.sibling),
                      (h = o(I, x.props.children)),
                      (h.return = y),
                      (y = h)
                    break e
                  }
                } else if (
                  I.elementType === j ||
                  (typeof j == 'object' &&
                    j !== null &&
                    j.$$typeof === Qt &&
                    Yl(j) === I.type)
                ) {
                  r(y, I.sibling),
                    (h = o(I, x.props)),
                    (h.ref = Fn(y, I, x)),
                    (h.return = y),
                    (y = h)
                  break e
                }
                r(y, I)
                break
              } else t(y, I)
              I = I.sibling
            }
            x.type === Hr
              ? ((h = Sr(x.props.children, y.mode, B, x.key)),
                (h.return = y),
                (y = h))
              : ((B = li(x.type, x.key, x.props, null, y.mode, B)),
                (B.ref = Fn(y, h, x)),
                (B.return = y),
                (y = B))
          }
          return a(y)
        case zr:
          e: {
            for (I = x.key; h !== null; ) {
              if (h.key === I)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === x.containerInfo &&
                  h.stateNode.implementation === x.implementation
                ) {
                  r(y, h.sibling),
                    (h = o(h, x.children || [])),
                    (h.return = y),
                    (y = h)
                  break e
                } else {
                  r(y, h)
                  break
                }
              else t(y, h)
              h = h.sibling
            }
            ;(h = za(x, y.mode, B)), (h.return = y), (y = h)
          }
          return a(y)
        case Qt:
          return (I = x._init), S(y, h, I(x._payload), B)
      }
      if ($n(x)) return D(y, h, x, B)
      if (En(x)) return w(y, h, x, B)
      Vo(y, x)
    }
    return (typeof x == 'string' && x !== '') || typeof x == 'number'
      ? ((x = '' + x),
        h !== null && h.tag === 6
          ? (r(y, h.sibling), (h = o(h, x)), (h.return = y), (y = h))
          : (r(y, h), (h = Ua(x, y.mode, B)), (h.return = y), (y = h)),
        a(y))
      : r(y, h)
  }
  return S
}
var pn = Bf(!0),
  Tf = Bf(!1),
  Si = gr(null),
  ki = null,
  Zr = null,
  Fu = null
function Lu() {
  Fu = Zr = ki = null
}
function Pu(e) {
  var t = Si.current
  le(Si), (e._currentValue = t)
}
function Bs(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break
    e = e.return
  }
}
function sn(e, t) {
  ;(ki = e),
    (Fu = Zr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null))
}
function ft(e) {
  var t = e._currentValue
  if (Fu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zr === null)) {
      if (ki === null) throw Error(M(308))
      ;(Zr = e), (ki.dependencies = { lanes: 0, firstContext: e })
    } else Zr = Zr.next = e
  return t
}
var Ar = null
function Nu(e) {
  Ar === null ? (Ar = [e]) : Ar.push(e)
}
function Ff(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), Nu(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Mt(e, n)
  )
}
function Mt(e, t) {
  e.lanes |= t
  var r = e.alternate
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return)
  return r.tag === 3 ? r.stateNode : null
}
var Jt = !1
function ju(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Lf(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function sr(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), X & 2)) {
    var o = n.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      Mt(e, r)
    )
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Nu(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Mt(e, r)
  )
}
function ni(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Du(e, r)
  }
}
function Ql(e, t) {
  var r = e.updateQueue,
    n = e.alternate
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next)
      } while (r !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r)
    return
  }
  ;(e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t)
}
function Bi(e, t, r, n) {
  var o = e.updateQueue
  Jt = !1
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var u = s,
      l = u.next
    ;(u.next = null), a === null ? (i = l) : (a.next = l), (a = u)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = l) : (s.next = l),
        (c.lastBaseUpdate = u)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(a = 0), (c = l = u = null), (s = i)
    do {
      var p = s.lane,
        m = s.eventTime
      if ((n & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var D = e,
            w = s
          switch (((p = t), (m = r), w.tag)) {
            case 1:
              if (((D = w.payload), typeof D == 'function')) {
                f = D.call(m, f, p)
                break e
              }
              f = D
              break e
            case 3:
              D.flags = (D.flags & -65537) | 128
            case 0:
              if (
                ((D = w.payload),
                (p = typeof D == 'function' ? D.call(m, f, p) : D),
                p == null)
              )
                break e
              f = ge({}, f, p)
              break e
            case 2:
              Jt = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s))
      } else
        (m = {
          eventTime: m,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((l = c = m), (u = f)) : (c = c.next = m),
          (a |= p)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = l),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (a |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(jr |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function Jl(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function'))
          throw Error(M(191, o))
        o.call(n)
      }
    }
}
var Bo = {},
  Ft = gr(Bo),
  fo = gr(Bo),
  po = gr(Bo)
function wr(e) {
  if (e === Bo) throw Error(M(174))
  return e
}
function Ru(e, t) {
  switch ((ae(po, t), ae(fo, e), ae(Ft, Bo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : us(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = us(t, e))
  }
  le(Ft), ae(Ft, t)
}
function hn() {
  le(Ft), le(fo), le(po)
}
function Pf(e) {
  wr(po.current)
  var t = wr(Ft.current),
    r = us(t, e.type)
  t !== r && (ae(fo, e), ae(Ft, r))
}
function Ou(e) {
  fo.current === e && (le(Ft), le(fo))
}
var pe = gr(0)
function Ti(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Oa = []
function _u() {
  for (var e = 0; e < Oa.length; e++) Oa[e]._workInProgressVersionPrimary = null
  Oa.length = 0
}
var oi = Ht.ReactCurrentDispatcher,
  _a = Ht.ReactCurrentBatchConfig,
  Nr = 0,
  he = null,
  we = null,
  Ee = null,
  Fi = !1,
  Yn = !1,
  ho = 0,
  bg = 0
function je() {
  throw Error(M(321))
}
function Iu(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!wt(e[r], t[r])) return !1
  return !0
}
function qu(e, t, r, n, o, i) {
  if (
    ((Nr = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oi.current = e === null || e.memoizedState === null ? Bg : Tg),
    (e = r(n, o)),
    Yn)
  ) {
    i = 0
    do {
      if (((Yn = !1), (ho = 0), 25 <= i)) throw Error(M(301))
      ;(i += 1),
        (Ee = we = null),
        (t.updateQueue = null),
        (oi.current = Fg),
        (e = r(n, o))
    } while (Yn)
  }
  if (
    ((oi.current = Li),
    (t = we !== null && we.next !== null),
    (Nr = 0),
    (Ee = we = he = null),
    (Fi = !1),
    t)
  )
    throw Error(M(300))
  return e
}
function $u() {
  var e = ho !== 0
  return (ho = 0), e
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Ee === null ? (he.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee
}
function pt() {
  if (we === null) {
    var e = he.alternate
    e = e !== null ? e.memoizedState : null
  } else e = we.next
  var t = Ee === null ? he.memoizedState : Ee.next
  if (t !== null) (Ee = t), (we = e)
  else {
    if (e === null) throw Error(M(310))
    ;(we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Ee === null ? (he.memoizedState = Ee = e) : (Ee = Ee.next = e)
  }
  return Ee
}
function go(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ia(e) {
  var t = pt(),
    r = t.queue
  if (r === null) throw Error(M(311))
  r.lastRenderedReducer = e
  var n = we,
    o = n.baseQueue,
    i = r.pending
  if (i !== null) {
    if (o !== null) {
      var a = o.next
      ;(o.next = i.next), (i.next = a)
    }
    ;(n.baseQueue = o = i), (r.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (n = n.baseState)
    var s = (a = null),
      u = null,
      l = i
    do {
      var c = l.lane
      if ((Nr & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (n = l.hasEagerState ? l.eagerState : e(n, l.action))
      else {
        var f = {
          lane: c,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        }
        u === null ? ((s = u = f), (a = n)) : (u = u.next = f),
          (he.lanes |= c),
          (jr |= c)
      }
      l = l.next
    } while (l !== null && l !== i)
    u === null ? (a = n) : (u.next = s),
      wt(n, t.memoizedState) || (We = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = u),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (he.lanes |= i), (jr |= i), (o = o.next)
    while (o !== e)
  } else o === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function qa(e) {
  var t = pt(),
    r = t.queue
  if (r === null) throw Error(M(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    wt(i, t.memoizedState) || (We = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function Nf() {}
function jf(e, t) {
  var r = he,
    n = pt(),
    o = t(),
    i = !wt(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (We = !0)),
    (n = n.queue),
    Mu(_f.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      mo(9, Of.bind(null, r, n, o, t), void 0, null),
      Se === null)
    )
      throw Error(M(349))
    Nr & 30 || Rf(r, t, o)
  }
  return o
}
function Rf(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function Of(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), If(t) && qf(e)
}
function _f(e, t, r) {
  return r(function () {
    If(t) && qf(e)
  })
}
function If(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !wt(e, r)
  } catch {
    return !0
  }
}
function qf(e) {
  var t = Mt(e, 1)
  t !== null && At(t, e, 1, -1)
}
function Zl(e) {
  var t = St()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kg.bind(null, he, e)),
    [t.memoizedState, e]
  )
}
function mo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  )
}
function $f() {
  return pt().memoizedState
}
function ii(e, t, r, n) {
  var o = St()
  ;(he.flags |= e),
    (o.memoizedState = mo(1 | t, r, void 0, n === void 0 ? null : n))
}
function ta(e, t, r, n) {
  var o = pt()
  n = n === void 0 ? null : n
  var i = void 0
  if (we !== null) {
    var a = we.memoizedState
    if (((i = a.destroy), n !== null && Iu(n, a.deps))) {
      o.memoizedState = mo(t, r, i, n)
      return
    }
  }
  ;(he.flags |= e), (o.memoizedState = mo(1 | t, r, i, n))
}
function Xl(e, t) {
  return ii(8390656, 8, e, t)
}
function Mu(e, t) {
  return ta(2048, 8, e, t)
}
function Mf(e, t) {
  return ta(4, 2, e, t)
}
function Uf(e, t) {
  return ta(4, 4, e, t)
}
function zf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Hf(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), ta(4, 4, zf.bind(null, t, e), r)
  )
}
function Uu() {}
function Vf(e, t) {
  var r = pt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Iu(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e)
}
function Wf(e, t) {
  var r = pt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Iu(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e)
}
function Gf(e, t, r) {
  return Nr & 21
    ? (wt(r, t) || ((r = Jd()), (he.lanes |= r), (jr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = r))
}
function Eg(e, t) {
  var r = ne
  ;(ne = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = _a.transition
  _a.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ne = r), (_a.transition = n)
  }
}
function Kf() {
  return pt().memoizedState
}
function Sg(e, t, r) {
  var n = lr(e)
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yf(e))
  )
    Qf(t, r)
  else if (((r = Ff(e, t, r, n)), r !== null)) {
    var o = $e()
    At(r, e, n, o), Jf(r, t, n)
  }
}
function kg(e, t, r) {
  var n = lr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (Yf(e)) Qf(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), wt(s, a))) {
          var u = t.interleaved
          u === null
            ? ((o.next = o), Nu(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = Ff(e, t, o, n)),
      r !== null && ((o = $e()), At(r, e, n, o), Jf(r, t, n))
  }
}
function Yf(e) {
  var t = e.alternate
  return e === he || (t !== null && t === he)
}
function Qf(e, t) {
  Yn = Fi = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function Jf(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Du(e, r)
  }
}
var Li = {
    readContext: ft,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  Bg = {
    readContext: ft,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ft,
    useEffect: Xl,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ii(4194308, 4, zf.bind(null, t, e), r)
      )
    },
    useLayoutEffect: function (e, t) {
      return ii(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return ii(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = St()
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, r) {
      var n = St()
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Sg.bind(null, he, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = St()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Zl,
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      return (St().memoizedState = e)
    },
    useTransition: function () {
      var e = Zl(!1),
        t = e[0]
      return (e = Eg.bind(null, e[1])), (St().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = he,
        o = St()
      if (fe) {
        if (r === void 0) throw Error(M(407))
        r = r()
      } else {
        if (((r = t()), Se === null)) throw Error(M(349))
        Nr & 30 || Rf(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        Xl(_f.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        mo(9, Of.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = St(),
        t = Se.identifierPrefix
      if (fe) {
        var r = _t,
          n = Ot
        ;(r = (n & ~(1 << (32 - Ct(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = ho++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = bg++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Tg = {
    readContext: ft,
    useCallback: Vf,
    useContext: ft,
    useEffect: Mu,
    useImperativeHandle: Hf,
    useInsertionEffect: Mf,
    useLayoutEffect: Uf,
    useMemo: Wf,
    useReducer: Ia,
    useRef: $f,
    useState: function () {
      return Ia(go)
    },
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      var t = pt()
      return Gf(t, we.memoizedState, e)
    },
    useTransition: function () {
      var e = Ia(go)[0],
        t = pt().memoizedState
      return [e, t]
    },
    useMutableSource: Nf,
    useSyncExternalStore: jf,
    useId: Kf,
    unstable_isNewReconciler: !1,
  },
  Fg = {
    readContext: ft,
    useCallback: Vf,
    useContext: ft,
    useEffect: Mu,
    useImperativeHandle: Hf,
    useInsertionEffect: Mf,
    useLayoutEffect: Uf,
    useMemo: Wf,
    useReducer: qa,
    useRef: $f,
    useState: function () {
      return qa(go)
    },
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      var t = pt()
      return we === null ? (t.memoizedState = e) : Gf(t, we.memoizedState, e)
    },
    useTransition: function () {
      var e = qa(go)[0],
        t = pt().memoizedState
      return [e, t]
    },
    useMutableSource: Nf,
    useSyncExternalStore: jf,
    useId: Kf,
    unstable_isNewReconciler: !1,
  }
function yt(e, t) {
  if (e && e.defaultProps) {
    ;(t = ge({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
function Ts(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ge({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var ra = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ir(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = $e(),
      o = lr(e),
      i = It(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = sr(e, i, o)),
      t !== null && (At(t, e, o, n), ni(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = $e(),
      o = lr(e),
      i = It(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = sr(e, i, o)),
      t !== null && (At(t, e, o, n), ni(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = $e(),
      n = lr(e),
      o = It(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = sr(e, o, n)),
      t !== null && (At(t, e, n, r), ni(t, e, n))
  },
}
function ec(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !so(r, n) || !so(o, i)
        : !0
  )
}
function Zf(e, t, r) {
  var n = !1,
    o = pr,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = ft(i))
      : ((o = Ke(t) ? Lr : _e.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? dn(e, o) : pr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ra),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function tc(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ra.enqueueReplaceState(t, t.state, null)
}
function Fs(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = {}), ju(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = ft(i))
    : ((i = Ke(t) ? Lr : _e.current), (o.context = dn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ts(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ra.enqueueReplaceState(o, o.state, null),
      Bi(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function gn(e, t) {
  try {
    var r = '',
      n = t
    do (r += o2(n)), (n = n.return)
    while (n)
    var o = r
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function $a(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function Ls(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var Lg = typeof WeakMap == 'function' ? WeakMap : Map
function Xf(e, t, r) {
  ;(r = It(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      Ni || ((Ni = !0), (Ms = n)), Ls(e, t)
    }),
    r
  )
}
function ep(e, t, r) {
  ;(r = It(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        Ls(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        Ls(e, t),
          typeof n != 'function' &&
            (ur === null ? (ur = new Set([this])) : ur.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function rc(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new Lg()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = Vg.bind(null, e, t, r)), t.then(e, e))
}
function nc(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function oc(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), sr(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var Pg = Ht.ReactCurrentOwner,
  We = !1
function qe(e, t, r, n) {
  t.child = e === null ? Tf(t, null, r, n) : pn(t, e.child, r, n)
}
function ic(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    sn(t, o),
    (n = qu(e, t, r, n, i, o)),
    (r = $u()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (fe && r && ku(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  )
}
function ac(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !Qu(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), tp(e, t, i, n, o))
      : ((e = li(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (
      ((r = r.compare), (r = r !== null ? r : so), r(a, n) && e.ref === t.ref)
    )
      return Ut(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = cr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function tp(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (so(i, n) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (We = !0)
      else return (t.lanes = e.lanes), Ut(e, t, o)
  }
  return Ps(e, t, r, n, o)
}
function rp(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(en, tt),
        (tt |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(en, tt),
          (tt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ae(en, tt),
        (tt |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ae(en, tt),
      (tt |= n)
  return qe(e, t, o, r), t.child
}
function np(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Ps(e, t, r, n, o) {
  var i = Ke(r) ? Lr : _e.current
  return (
    (i = dn(t, i)),
    sn(t, o),
    (r = qu(e, t, r, n, i, o)),
    (n = $u()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (fe && n && ku(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  )
}
function sc(e, t, r, n, o) {
  if (Ke(r)) {
    var i = !0
    wi(t)
  } else i = !1
  if ((sn(t, o), t.stateNode === null))
    ai(e, t), Zf(t, r, n), Fs(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var u = a.context,
      l = r.contextType
    typeof l == 'object' && l !== null
      ? (l = ft(l))
      : ((l = Ke(r) ? Lr : _e.current), (l = dn(t, l)))
    var c = r.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || u !== l) && tc(t, a, n, l)),
      (Jt = !1)
    var p = t.memoizedState
    ;(a.state = p),
      Bi(t, n, a, o),
      (u = t.memoizedState),
      s !== n || p !== u || Ge.current || Jt
        ? (typeof c == 'function' && (Ts(t, r, c, n), (u = t.memoizedState)),
          (s = Jt || ec(t, r, s, n, p, u, l))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = u)),
          (a.props = n),
          (a.state = u),
          (a.context = l),
          (n = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (n = !1))
  } else {
    ;(a = t.stateNode),
      Lf(e, t),
      (s = t.memoizedProps),
      (l = t.type === t.elementType ? s : yt(t.type, s)),
      (a.props = l),
      (f = t.pendingProps),
      (p = a.context),
      (u = r.contextType),
      typeof u == 'object' && u !== null
        ? (u = ft(u))
        : ((u = Ke(r) ? Lr : _e.current), (u = dn(t, u)))
    var m = r.getDerivedStateFromProps
    ;(c =
      typeof m == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || p !== u) && tc(t, a, n, u)),
      (Jt = !1),
      (p = t.memoizedState),
      (a.state = p),
      Bi(t, n, a, o)
    var D = t.memoizedState
    s !== f || p !== D || Ge.current || Jt
      ? (typeof m == 'function' && (Ts(t, r, m, n), (D = t.memoizedState)),
        (l = Jt || ec(t, r, l, n, p, D, u) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(n, D, u),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(n, D, u)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = D)),
        (a.props = n),
        (a.state = D),
        (a.context = u),
        (n = l))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1))
  }
  return Ns(e, t, r, n, i, o)
}
function Ns(e, t, r, n, o, i) {
  np(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && Wl(t, r, !1), Ut(e, t, i)
  ;(n = t.stateNode), (Pg.current = t)
  var s =
    a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = pn(t, e.child, null, i)), (t.child = pn(t, null, s, i)))
      : qe(e, t, s, i),
    (t.memoizedState = n.state),
    o && Wl(t, r, !0),
    t.child
  )
}
function op(e) {
  var t = e.stateNode
  t.pendingContext
    ? Vl(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vl(e, t.context, !1),
    Ru(e, t.containerInfo)
}
function uc(e, t, r, n, o) {
  return fn(), Tu(o), (t.flags |= 256), qe(e, t, r, n), t.child
}
var js = { dehydrated: null, treeContext: null, retryLane: 0 }
function Rs(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function ip(e, t, r) {
  var n = t.pendingProps,
    o = pe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(pe, o & 1),
    e === null)
  )
    return (
      ks(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = ia(a, n, 0, null)),
              (e = Sr(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Rs(r)),
              (t.memoizedState = js),
              e)
            : zu(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Ng(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var u = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = u),
          (t.deletions = null))
        : ((n = cr(o, u)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = cr(s, i)) : ((i = Sr(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Rs(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = js),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = cr(i, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  )
}
function zu(e, t) {
  return (
    (t = ia({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Wo(e, t, r, n) {
  return (
    n !== null && Tu(n),
    pn(t, e.child, null, r),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Ng(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = $a(Error(M(422)))), Wo(e, t, a, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (o = t.mode),
          (n = ia({ mode: 'visible', children: n.children }, o, 0, null)),
          (i = Sr(i, o, a, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && pn(t, e.child, null, a),
          (t.child.memoizedState = Rs(a)),
          (t.memoizedState = js),
          i)
  if (!(t.mode & 1)) return Wo(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error(M(419))), (n = $a(i, n, void 0)), Wo(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), We || s)) {
    if (((n = Se), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Mt(e, o), At(n, e, o, -1))
    }
    return Yu(), (n = $a(Error(M(421)))), Wo(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Wg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (rt = ar(o.nextSibling)),
      (nt = t),
      (fe = !0),
      (Dt = null),
      e !== null &&
        ((ut[lt++] = Ot),
        (ut[lt++] = _t),
        (ut[lt++] = Pr),
        (Ot = e.id),
        (_t = e.overflow),
        (Pr = t)),
      (t = zu(t, n.children)),
      (t.flags |= 4096),
      t)
}
function lc(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), Bs(e.return, t, r)
}
function Ma(e, t, r, n, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o))
}
function ap(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((qe(e, t, n.children, r), (n = pe.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lc(e, r, t)
        else if (e.tag === 19) lc(e, r, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    n &= 1
  }
  if ((ae(pe, n), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Ti(e) === null && (o = r),
            (r = r.sibling)
        ;(r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          Ma(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ti(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        Ma(t, !0, r, null, i)
        break
      case 'together':
        Ma(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ai(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ut(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jr |= t.lanes),
    !(r & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(M(153))
  if (t.child !== null) {
    for (
      e = t.child, r = cr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = cr(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function jg(e, t, r) {
  switch (t.tag) {
    case 3:
      op(t), fn()
      break
    case 5:
      Pf(t)
      break
    case 1:
      Ke(t.type) && wi(t)
      break
    case 4:
      Ru(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      ae(Si, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ae(pe, pe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? ip(e, t, r)
            : (ae(pe, pe.current & 1),
              (e = Ut(e, t, r)),
              e !== null ? e.sibling : null)
      ae(pe, pe.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return ap(e, t, r)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ae(pe, pe.current),
        n)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), rp(e, t, r)
  }
  return Ut(e, t, r)
}
var sp, Os, up, lp
sp = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
    else if (r.tag !== 4 && r.child !== null) {
      ;(r.child.return = r), (r = r.child)
      continue
    }
    if (r === t) break
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return
      r = r.return
    }
    ;(r.sibling.return = r.return), (r = r.sibling)
  }
}
Os = function () {}
up = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), wr(Ft.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = os(e, o)), (n = os(e, n)), (i = [])
        break
      case 'select':
        ;(o = ge({}, o, { value: void 0 })),
          (n = ge({}, n, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = ss(e, o)), (n = ss(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof n.onClick == 'function' &&
          (e.onclick = Ci)
    }
    ls(r, n)
    var a
    r = null
    for (l in o)
      if (!n.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
        if (l === 'style') {
          var s = o[l]
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
        } else
          l !== 'dangerouslySetInnerHTML' &&
            l !== 'children' &&
            l !== 'suppressContentEditableWarning' &&
            l !== 'suppressHydrationWarning' &&
            l !== 'autoFocus' &&
            (eo.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null))
    for (l in n) {
      var u = n[l]
      if (
        ((s = o != null ? o[l] : void 0),
        n.hasOwnProperty(l) && u !== s && (u != null || s != null))
      )
        if (l === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ''))
            for (a in u)
              u.hasOwnProperty(a) &&
                s[a] !== u[a] &&
                (r || (r = {}), (r[a] = u[a]))
          } else r || (i || (i = []), i.push(l, r)), (r = u)
        else
          l === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(l, u))
            : l === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (i = i || []).push(l, '' + u)
              : l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                (eo.hasOwnProperty(l)
                  ? (u != null && l === 'onScroll' && ue('scroll', e),
                    i || s === u || (i = []))
                  : (i = i || []).push(l, u))
    }
    r && (i = i || []).push('style', r)
    var l = i
    ;(t.updateQueue = l) && (t.flags |= 4)
  }
}
lp = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function Ln(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling)
        r === null ? (e.tail = null) : (r.sibling = null)
        break
      case 'collapsed':
        r = e.tail
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling)
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null)
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= n), (e.childLanes = r), t
}
function Rg(e, t, r) {
  var n = t.pendingProps
  switch ((Bu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null
    case 1:
      return Ke(t.type) && Ai(), Re(t), null
    case 3:
      return (
        (n = t.stateNode),
        hn(),
        le(Ge),
        le(_e),
        _u(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dt !== null && (Hs(Dt), (Dt = null)))),
        Os(e, t),
        Re(t),
        null
      )
    case 5:
      Ou(t)
      var o = wr(po.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        up(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(M(166))
          return Re(t), null
        }
        if (((e = wr(Ft.current)), Ho(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[kt] = t), (n[co] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              ue('cancel', n), ue('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ue('load', n)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Un.length; o++) ue(Un[o], n)
              break
            case 'source':
              ue('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              ue('error', n), ue('load', n)
              break
            case 'details':
              ue('toggle', n)
              break
            case 'input':
              vl(n, i), ue('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }),
                ue('invalid', n)
              break
            case 'textarea':
              xl(n, i), ue('invalid', n)
          }
          ls(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : eo.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ue('scroll', n)
            }
          switch (r) {
            case 'input':
              Ro(n), Dl(n, i, !0)
              break
            case 'textarea':
              Ro(n), Cl(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = Ci)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Od(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                  ? (e = a.createElement(r, { is: n.is }))
                  : ((e = a.createElement(r)),
                    r === 'select' &&
                      ((a = e),
                      n.multiple
                        ? (a.multiple = !0)
                        : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[kt] = t),
            (e[co] = n),
            sp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = cs(r, n)), r)) {
              case 'dialog':
                ue('cancel', e), ue('close', e), (o = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ue('load', e), (o = n)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Un.length; o++) ue(Un[o], e)
                o = n
                break
              case 'source':
                ue('error', e), (o = n)
                break
              case 'img':
              case 'image':
              case 'link':
                ue('error', e), ue('load', e), (o = n)
                break
              case 'details':
                ue('toggle', e), (o = n)
                break
              case 'input':
                vl(e, n), (o = os(e, n)), ue('invalid', e)
                break
              case 'option':
                o = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = ge({}, n, { value: void 0 })),
                  ue('invalid', e)
                break
              case 'textarea':
                xl(e, n), (o = ss(e, n)), ue('invalid', e)
                break
              default:
                o = n
            }
            ls(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i]
                i === 'style'
                  ? qd(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && _d(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (r !== 'textarea' || u !== '') && to(e, u)
                        : typeof u == 'number' && to(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (eo.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && ue('scroll', e)
                          : u != null && pu(e, i, u, a))
              }
            switch (r) {
              case 'input':
                Ro(e), Dl(e, n, !1)
                break
              case 'textarea':
                Ro(e), Cl(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + fr(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? rn(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      rn(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Ci)
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
          }
          n && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Re(t), null
    case 6:
      if (e && t.stateNode != null) lp(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(M(166))
        if (((r = wr(po.current)), wr(Ft.current), Ho(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[kt] = t),
            (i = n.nodeValue !== r) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                zo(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zo(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[kt] = t),
            (t.stateNode = n)
      }
      return Re(t), null
    case 13:
      if (
        (le(pe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && rt !== null && t.mode & 1 && !(t.flags & 128))
          kf(), fn(), (t.flags |= 98560), (i = !1)
        else if (((i = Ho(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317))
            i[kt] = t
          } else
            fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Re(t), (i = !1)
        } else Dt !== null && (Hs(Dt), (Dt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? be === 0 && (be = 3) : Yu())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null)
    case 4:
      return (
        hn(), Os(e, t), e === null && uo(t.stateNode.containerInfo), Re(t), null
      )
    case 10:
      return Pu(t.type._context), Re(t), null
    case 17:
      return Ke(t.type) && Ai(), Re(t), null
    case 19:
      if ((le(pe), (i = t.memoizedState), i === null)) return Re(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Ln(i, !1)
        else {
          if (be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ti(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ln(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling)
                return ae(pe, (pe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            ye() > mn &&
            ((t.flags |= 128), (n = !0), Ln(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = Ti(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Ln(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !fe)
            )
              return Re(t), null
          } else
            2 * ye() - i.renderingStartTime > mn &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Ln(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ye()),
          (t.sibling = null),
          (r = pe.current),
          ae(pe, n ? (r & 1) | 2 : r & 1),
          t)
        : (Re(t), null)
    case 22:
    case 23:
      return (
        Ku(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? tt & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(M(156, t.tag))
}
function Og(e, t) {
  switch ((Bu(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        hn(),
        le(Ge),
        le(_e),
        _u(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ou(t), null
    case 13:
      if (
        (le(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340))
        fn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return le(pe), null
    case 4:
      return hn(), null
    case 10:
      return Pu(t.type._context), null
    case 22:
    case 23:
      return Ku(), null
    case 24:
      return null
    default:
      return null
  }
}
var Go = !1,
  Oe = !1,
  _g = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null
function Xr(e, t) {
  var r = e.ref
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null)
      } catch (n) {
        me(e, t, n)
      }
    else r.current = null
}
function _s(e, t, r) {
  try {
    r()
  } catch (n) {
    me(e, t, n)
  }
}
var cc = !1
function Ig(e, t) {
  if (((xs = vi), (e = hf()), Su(e))) {
    if ('selectionStart' in e)
      var r = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window
        var n = r.getSelection && r.getSelection()
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode
          var o = n.anchorOffset,
            i = n.focusNode
          n = n.focusOffset
          try {
            r.nodeType, i.nodeType
          } catch {
            r = null
            break e
          }
          var a = 0,
            s = -1,
            u = -1,
            l = 0,
            c = 0,
            f = e,
            p = null
          t: for (;;) {
            for (
              var m;
              f !== r || (o !== 0 && f.nodeType !== 3) || (s = a + o),
                f !== i || (n !== 0 && f.nodeType !== 3) || (u = a + n),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (p = f), (f = m)
            for (;;) {
              if (f === e) break t
              if (
                (p === r && ++l === o && (s = a),
                p === i && ++c === n && (u = a),
                (m = f.nextSibling) !== null)
              )
                break
              ;(f = p), (p = f.parentNode)
            }
            f = m
          }
          r = s === -1 || u === -1 ? null : { start: s, end: u }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (Cs = { focusedElem: e, selectionRange: r }, vi = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e)
    else
      for (; V !== null; ) {
        t = V
        try {
          var D = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (D !== null) {
                  var w = D.memoizedProps,
                    S = D.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : yt(t.type, w),
                      S
                    )
                  y.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var x = t.stateNode.containerInfo
                x.nodeType === 1
                  ? (x.textContent = '')
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(M(163))
            }
        } catch (B) {
          me(t, t.return, B)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (V = e)
          break
        }
        V = t.return
      }
  return (D = cc), (cc = !1), D
}
function Qn(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && _s(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function na(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next)
    do {
      if ((r.tag & e) === e) {
        var n = r.create
        r.destroy = n()
      }
      r = r.next
    } while (r !== t)
  }
}
function Is(e) {
  var t = e.ref
  if (t !== null) {
    var r = e.stateNode
    switch (e.tag) {
      case 5:
        e = r
        break
      default:
        e = r
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function cp(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), cp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kt], delete t[co], delete t[bs], delete t[xg], delete t[Cg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function dp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dp(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function qs(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Ci))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (qs(e, t, r), e = e.sibling; e !== null; ) qs(e, t, r), (e = e.sibling)
}
function $s(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for ($s(e, t, r), e = e.sibling; e !== null; ) $s(e, t, r), (e = e.sibling)
}
var Te = null,
  vt = !1
function Kt(e, t, r) {
  for (r = r.child; r !== null; ) fp(e, t, r), (r = r.sibling)
}
function fp(e, t, r) {
  if (Tt && typeof Tt.onCommitFiberUnmount == 'function')
    try {
      Tt.onCommitFiberUnmount(Yi, r)
    } catch {}
  switch (r.tag) {
    case 5:
      Oe || Xr(r, t)
    case 6:
      var n = Te,
        o = vt
      ;(Te = null),
        Kt(e, t, r),
        (Te = n),
        (vt = o),
        Te !== null &&
          (vt
            ? ((e = Te),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Te.removeChild(r.stateNode))
      break
    case 18:
      Te !== null &&
        (vt
          ? ((e = Te),
            (r = r.stateNode),
            e.nodeType === 8
              ? ja(e.parentNode, r)
              : e.nodeType === 1 && ja(e, r),
            io(e))
          : ja(Te, r.stateNode))
      break
    case 4:
      ;(n = Te),
        (o = vt),
        (Te = r.stateNode.containerInfo),
        (vt = !0),
        Kt(e, t, r),
        (Te = n),
        (vt = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next
        do {
          var i = o,
            a = i.destroy
          ;(i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && _s(r, t, a),
            (o = o.next)
        } while (o !== n)
      }
      Kt(e, t, r)
      break
    case 1:
      if (
        !Oe &&
        (Xr(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == 'function')
      )
        try {
          ;(n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount()
        } catch (s) {
          me(r, t, s)
        }
      Kt(e, t, r)
      break
    case 21:
      Kt(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((Oe = (n = Oe) || r.memoizedState !== null), Kt(e, t, r), (Oe = n))
        : Kt(e, t, r)
      break
    default:
      Kt(e, t, r)
  }
}
function fc(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new _g()),
      t.forEach(function (n) {
        var o = Gg.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function gt(e, t) {
  var r = t.deletions
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n]
      try {
        var i = e,
          a = t,
          s = a
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Te = s.stateNode), (vt = !1)
              break e
            case 3:
              ;(Te = s.stateNode.containerInfo), (vt = !0)
              break e
            case 4:
              ;(Te = s.stateNode.containerInfo), (vt = !0)
              break e
          }
          s = s.return
        }
        if (Te === null) throw Error(M(160))
        fp(i, a, o), (Te = null), (vt = !1)
        var u = o.alternate
        u !== null && (u.return = null), (o.return = null)
      } catch (l) {
        me(o, t, l)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pp(t, e), (t = t.sibling)
}
function pp(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gt(t, e), Et(e), n & 4)) {
        try {
          Qn(3, e, e.return), na(3, e)
        } catch (w) {
          me(e, e.return, w)
        }
        try {
          Qn(5, e, e.return)
        } catch (w) {
          me(e, e.return, w)
        }
      }
      break
    case 1:
      gt(t, e), Et(e), n & 512 && r !== null && Xr(r, r.return)
      break
    case 5:
      if (
        (gt(t, e),
        Et(e),
        n & 512 && r !== null && Xr(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          to(o, '')
        } catch (w) {
          me(e, e.return, w)
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          u = e.updateQueue
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && jd(o, i),
              cs(s, a)
            var l = cs(s, i)
            for (a = 0; a < u.length; a += 2) {
              var c = u[a],
                f = u[a + 1]
              c === 'style'
                ? qd(o, f)
                : c === 'dangerouslySetInnerHTML'
                  ? _d(o, f)
                  : c === 'children'
                    ? to(o, f)
                    : pu(o, c, f, l)
            }
            switch (s) {
              case 'input':
                is(o, i)
                break
              case 'textarea':
                Rd(o, i)
                break
              case 'select':
                var p = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var m = i.value
                m != null
                  ? rn(o, !!i.multiple, m, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rn(o, !!i.multiple, i.defaultValue, !0)
                      : rn(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[co] = i
          } catch (w) {
            me(e, e.return, w)
          }
      }
      break
    case 6:
      if ((gt(t, e), Et(e), n & 4)) {
        if (e.stateNode === null) throw Error(M(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (w) {
          me(e, e.return, w)
        }
      }
      break
    case 3:
      if (
        (gt(t, e), Et(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          io(t.containerInfo)
        } catch (w) {
          me(e, e.return, w)
        }
      break
    case 4:
      gt(t, e), Et(e)
      break
    case 13:
      gt(t, e),
        Et(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Wu = ye())),
        n & 4 && fc(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Oe = (l = Oe) || c), gt(t, e), (Oe = l)) : gt(t, e),
        Et(e),
        n & 8192)
      ) {
        if (
          ((l = e.memoizedState !== null),
          (e.stateNode.isHidden = l) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((p = V), (m = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qn(4, p, p.return)
                  break
                case 1:
                  Xr(p, p.return)
                  var D = p.stateNode
                  if (typeof D.componentWillUnmount == 'function') {
                    ;(n = p), (r = p.return)
                    try {
                      ;(t = n),
                        (D.props = t.memoizedProps),
                        (D.state = t.memoizedState),
                        D.componentWillUnmount()
                    } catch (w) {
                      me(n, r, w)
                    }
                  }
                  break
                case 5:
                  Xr(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    hc(f)
                    continue
                  }
              }
              m !== null ? ((m.return = p), (V = m)) : hc(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(o = f.stateNode),
                  l
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = Id('display', a)))
              } catch (w) {
                me(e, e.return, w)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = l ? '' : f.memoizedProps
              } catch (w) {
                me(e, e.return, w)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      gt(t, e), Et(e), n & 4 && fc(e)
      break
    case 21:
      break
    default:
      gt(t, e), Et(e)
  }
}
function Et(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (dp(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error(M(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (to(o, ''), (n.flags &= -33))
          var i = dc(e)
          $s(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = dc(e)
          qs(e, s, a)
          break
        default:
          throw Error(M(161))
      }
    } catch (u) {
      me(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function qg(e, t, r) {
  ;(V = e), hp(e)
}
function hp(e, t, r) {
  for (var n = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Go
      if (!a) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Oe
        s = Go
        var l = Oe
        if (((Go = a), (Oe = u) && !l))
          for (V = o; V !== null; )
            (a = V),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? gc(o)
                : u !== null
                  ? ((u.return = a), (V = u))
                  : gc(o)
        for (; i !== null; ) (V = i), hp(i), (i = i.sibling)
        ;(V = o), (Go = s), (Oe = l)
      }
      pc(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (V = i)) : pc(e)
  }
}
function pc(e) {
  for (; V !== null; ) {
    var t = V
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || na(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !Oe)
                if (r === null) n.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : yt(t.type, r.memoizedProps)
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && Jl(t, i, n)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode
                      break
                    case 1:
                      r = t.child.stateNode
                  }
                Jl(t, a, r)
              }
              break
            case 5:
              var s = t.stateNode
              if (r === null && t.flags & 4) {
                r = s
                var u = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && r.focus()
                    break
                  case 'img':
                    u.src && (r.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate
                if (l !== null) {
                  var c = l.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && io(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(M(163))
          }
        Oe || (t.flags & 512 && Is(t))
      } catch (p) {
        me(t, t.return, p)
      }
    }
    if (t === e) {
      V = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (V = r)
      break
    }
    V = t.return
  }
}
function hc(e) {
  for (; V !== null; ) {
    var t = V
    if (t === e) {
      V = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (V = r)
      break
    }
    V = t.return
  }
}
function gc(e) {
  for (; V !== null; ) {
    var t = V
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            na(4, t)
          } catch (u) {
            me(t, r, u)
          }
          break
        case 1:
          var n = t.stateNode
          if (typeof n.componentDidMount == 'function') {
            var o = t.return
            try {
              n.componentDidMount()
            } catch (u) {
              me(t, o, u)
            }
          }
          var i = t.return
          try {
            Is(t)
          } catch (u) {
            me(t, i, u)
          }
          break
        case 5:
          var a = t.return
          try {
            Is(t)
          } catch (u) {
            me(t, a, u)
          }
      }
    } catch (u) {
      me(t, t.return, u)
    }
    if (t === e) {
      V = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (V = s)
      break
    }
    V = t.return
  }
}
var $g = Math.ceil,
  Pi = Ht.ReactCurrentDispatcher,
  Hu = Ht.ReactCurrentOwner,
  dt = Ht.ReactCurrentBatchConfig,
  X = 0,
  Se = null,
  xe = null,
  Fe = 0,
  tt = 0,
  en = gr(0),
  be = 0,
  yo = null,
  jr = 0,
  oa = 0,
  Vu = 0,
  Jn = null,
  Ve = null,
  Wu = 0,
  mn = 1 / 0,
  jt = null,
  Ni = !1,
  Ms = null,
  ur = null,
  Ko = !1,
  tr = null,
  ji = 0,
  Zn = 0,
  Us = null,
  si = -1,
  ui = 0
function $e() {
  return X & 6 ? ye() : si !== -1 ? si : (si = ye())
}
function lr(e) {
  return e.mode & 1
    ? X & 2 && Fe !== 0
      ? Fe & -Fe
      : wg.transition !== null
        ? (ui === 0 && (ui = Jd()), ui)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : of(e.type))),
          e)
    : 1
}
function At(e, t, r, n) {
  if (50 < Zn) throw ((Zn = 0), (Us = null), Error(M(185)))
  Eo(e, r, n),
    (!(X & 2) || e !== Se) &&
      (e === Se && (!(X & 2) && (oa |= r), be === 4 && Xt(e, Fe)),
      Ye(e, n),
      r === 1 && X === 0 && !(t.mode & 1) && ((mn = ye() + 500), ea && mr()))
}
function Ye(e, t) {
  var r = e.callbackNode
  w2(e, t)
  var n = yi(e, e === Se ? Fe : 0)
  if (n === 0)
    r !== null && bl(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && bl(r), t === 1))
      e.tag === 0 ? Ag(mc.bind(null, e)) : bf(mc.bind(null, e)),
        vg(function () {
          !(X & 6) && mr()
        }),
        (r = null)
    else {
      switch (Zd(n)) {
        case 1:
          r = vu
          break
        case 4:
          r = Yd
          break
        case 16:
          r = mi
          break
        case 536870912:
          r = Qd
          break
        default:
          r = mi
      }
      r = Ap(r, gp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function gp(e, t) {
  if (((si = -1), (ui = 0), X & 6)) throw Error(M(327))
  var r = e.callbackNode
  if (un() && e.callbackNode !== r) return null
  var n = yi(e, e === Se ? Fe : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = Ri(e, n)
  else {
    t = n
    var o = X
    X |= 2
    var i = yp()
    ;(Se !== e || Fe !== t) && ((jt = null), (mn = ye() + 500), Er(e, t))
    do
      try {
        zg()
        break
      } catch (s) {
        mp(e, s)
      }
    while (!0)
    Lu(),
      (Pi.current = i),
      (X = o),
      xe !== null ? (t = 0) : ((Se = null), (Fe = 0), (t = be))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = gs(e)), o !== 0 && ((n = o), (t = zs(e, o)))), t === 1)
    )
      throw ((r = yo), Er(e, 0), Xt(e, n), Ye(e, ye()), r)
    if (t === 6) Xt(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !Mg(o) &&
          ((t = Ri(e, n)),
          t === 2 && ((i = gs(e)), i !== 0 && ((n = i), (t = zs(e, i)))),
          t === 1))
      )
        throw ((r = yo), Er(e, 0), Xt(e, n), Ye(e, ye()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(M(345))
        case 2:
          xr(e, Ve, jt)
          break
        case 3:
          if (
            (Xt(e, n), (n & 130023424) === n && ((t = Wu + 500 - ye()), 10 < t))
          ) {
            if (yi(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = ws(xr.bind(null, e, Ve, jt), t)
            break
          }
          xr(e, Ve, jt)
          break
        case 4:
          if ((Xt(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Ct(n)
            ;(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i)
          }
          if (
            ((n = o),
            (n = ye() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * $g(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = ws(xr.bind(null, e, Ve, jt), n)
            break
          }
          xr(e, Ve, jt)
          break
        case 5:
          xr(e, Ve, jt)
          break
        default:
          throw Error(M(329))
      }
    }
  }
  return Ye(e, ye()), e.callbackNode === r ? gp.bind(null, e) : null
}
function zs(e, t) {
  var r = Jn
  return (
    e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256),
    (e = Ri(e, t)),
    e !== 2 && ((t = Ve), (Ve = r), t !== null && Hs(t)),
    e
  )
}
function Hs(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e)
}
function Mg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!wt(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Xt(e, t) {
  for (
    t &= ~Vu,
      t &= ~oa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ct(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function mc(e) {
  if (X & 6) throw Error(M(327))
  un()
  var t = yi(e, 0)
  if (!(t & 1)) return Ye(e, ye()), null
  var r = Ri(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = gs(e)
    n !== 0 && ((t = n), (r = zs(e, n)))
  }
  if (r === 1) throw ((r = yo), Er(e, 0), Xt(e, t), Ye(e, ye()), r)
  if (r === 6) throw Error(M(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xr(e, Ve, jt),
    Ye(e, ye()),
    null
  )
}
function Gu(e, t) {
  var r = X
  X |= 1
  try {
    return e(t)
  } finally {
    ;(X = r), X === 0 && ((mn = ye() + 500), ea && mr())
  }
}
function Rr(e) {
  tr !== null && tr.tag === 0 && !(X & 6) && un()
  var t = X
  X |= 1
  var r = dt.transition,
    n = ne
  try {
    if (((dt.transition = null), (ne = 1), e)) return e()
  } finally {
    ;(ne = n), (dt.transition = r), (X = t), !(X & 6) && mr()
  }
}
function Ku() {
  ;(tt = en.current), le(en)
}
function Er(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), yg(r)), xe !== null))
    for (r = xe.return; r !== null; ) {
      var n = r
      switch ((Bu(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && Ai()
          break
        case 3:
          hn(), le(Ge), le(_e), _u()
          break
        case 5:
          Ou(n)
          break
        case 4:
          hn()
          break
        case 13:
          le(pe)
          break
        case 19:
          le(pe)
          break
        case 10:
          Pu(n.type._context)
          break
        case 22:
        case 23:
          Ku()
      }
      r = r.return
    }
  if (
    ((Se = e),
    (xe = e = cr(e.current, null)),
    (Fe = tt = t),
    (be = 0),
    (yo = null),
    (Vu = oa = jr = 0),
    (Ve = Jn = null),
    Ar !== null)
  ) {
    for (t = 0; t < Ar.length; t++)
      if (((r = Ar[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var o = n.next,
          i = r.pending
        if (i !== null) {
          var a = i.next
          ;(i.next = o), (n.next = a)
        }
        r.pending = n
      }
    Ar = null
  }
  return e
}
function mp(e, t) {
  do {
    var r = xe
    try {
      if ((Lu(), (oi.current = Li), Fi)) {
        for (var n = he.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        Fi = !1
      }
      if (
        ((Nr = 0),
        (Ee = we = he = null),
        (Yn = !1),
        (ho = 0),
        (Hu.current = null),
        r === null || r.return === null)
      ) {
        ;(be = 1), (yo = t), (xe = null)
        break
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          u = t
        if (
          ((t = Fe),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var l = u,
            c = s,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var m = nc(a)
          if (m !== null) {
            ;(m.flags &= -257),
              oc(m, a, s, i, t),
              m.mode & 1 && rc(i, l, t),
              (t = m),
              (u = l)
            var D = t.updateQueue
            if (D === null) {
              var w = new Set()
              w.add(u), (t.updateQueue = w)
            } else D.add(u)
            break e
          } else {
            if (!(t & 1)) {
              rc(i, l, t), Yu()
              break e
            }
            u = Error(M(426))
          }
        } else if (fe && s.mode & 1) {
          var S = nc(a)
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              oc(S, a, s, i, t),
              Tu(gn(u, s))
            break e
          }
        }
        ;(i = u = gn(u, s)),
          be !== 4 && (be = 2),
          Jn === null ? (Jn = [i]) : Jn.push(i),
          (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var y = Xf(i, u, t)
              Ql(i, y)
              break e
            case 1:
              s = u
              var h = i.type,
                x = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (x !== null &&
                    typeof x.componentDidCatch == 'function' &&
                    (ur === null || !ur.has(x))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var B = ep(i, s, t)
                Ql(i, B)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Dp(r)
    } catch (j) {
      ;(t = j), xe === r && r !== null && (xe = r = r.return)
      continue
    }
    break
  } while (!0)
}
function yp() {
  var e = Pi.current
  return (Pi.current = Li), e === null ? Li : e
}
function Yu() {
  ;(be === 0 || be === 3 || be === 2) && (be = 4),
    Se === null || (!(jr & 268435455) && !(oa & 268435455)) || Xt(Se, Fe)
}
function Ri(e, t) {
  var r = X
  X |= 2
  var n = yp()
  ;(Se !== e || Fe !== t) && ((jt = null), Er(e, t))
  do
    try {
      Ug()
      break
    } catch (o) {
      mp(e, o)
    }
  while (!0)
  if ((Lu(), (X = r), (Pi.current = n), xe !== null)) throw Error(M(261))
  return (Se = null), (Fe = 0), be
}
function Ug() {
  for (; xe !== null; ) vp(xe)
}
function zg() {
  for (; xe !== null && !h2(); ) vp(xe)
}
function vp(e) {
  var t = Cp(e.alternate, e, tt)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Dp(e) : (xe = t),
    (Hu.current = null)
}
function Dp(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Og(r, t)), r !== null)) {
        ;(r.flags &= 32767), (xe = r)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(be = 6), (xe = null)
        return
      }
    } else if (((r = Rg(r, t, tt)), r !== null)) {
      xe = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      xe = t
      return
    }
    xe = t = e
  } while (t !== null)
  be === 0 && (be = 5)
}
function xr(e, t, r) {
  var n = ne,
    o = dt.transition
  try {
    ;(dt.transition = null), (ne = 1), Hg(e, t, r, n)
  } finally {
    ;(dt.transition = o), (ne = n)
  }
  return null
}
function Hg(e, t, r, n) {
  do un()
  while (tr !== null)
  if (X & 6) throw Error(M(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(M(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (b2(e, i),
    e === Se && ((xe = Se = null), (Fe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ko ||
      ((Ko = !0),
      Ap(mi, function () {
        return un(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = dt.transition), (dt.transition = null)
    var a = ne
    ne = 1
    var s = X
    ;(X |= 4),
      (Hu.current = null),
      Ig(e, r),
      pp(r, e),
      cg(Cs),
      (vi = !!xs),
      (Cs = xs = null),
      (e.current = r),
      qg(r),
      g2(),
      (X = s),
      (ne = a),
      (dt.transition = i)
  } else e.current = r
  if (
    (Ko && ((Ko = !1), (tr = e), (ji = o)),
    (i = e.pendingLanes),
    i === 0 && (ur = null),
    v2(r.stateNode),
    Ye(e, ye()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (Ni) throw ((Ni = !1), (e = Ms), (Ms = null), e)
  return (
    ji & 1 && e.tag !== 0 && un(),
    (i = e.pendingLanes),
    i & 1 ? (e === Us ? Zn++ : ((Zn = 0), (Us = e))) : (Zn = 0),
    mr(),
    null
  )
}
function un() {
  if (tr !== null) {
    var e = Zd(ji),
      t = dt.transition,
      r = ne
    try {
      if (((dt.transition = null), (ne = 16 > e ? 16 : e), tr === null))
        var n = !1
      else {
        if (((e = tr), (tr = null), (ji = 0), X & 6)) throw Error(M(331))
        var o = X
        for (X |= 4, V = e.current; V !== null; ) {
          var i = V,
            a = i.child
          if (V.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var l = s[u]
                for (V = l; V !== null; ) {
                  var c = V
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qn(8, c, i)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (V = f)
                  else
                    for (; V !== null; ) {
                      c = V
                      var p = c.sibling,
                        m = c.return
                      if ((cp(c), c === l)) {
                        V = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = m), (V = p)
                        break
                      }
                      V = m
                    }
                }
              }
              var D = i.alternate
              if (D !== null) {
                var w = D.child
                if (w !== null) {
                  D.child = null
                  do {
                    var S = w.sibling
                    ;(w.sibling = null), (w = S)
                  } while (w !== null)
                }
              }
              V = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (V = a)
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qn(9, i, i.return)
                }
              var y = i.sibling
              if (y !== null) {
                ;(y.return = i.return), (V = y)
                break e
              }
              V = i.return
            }
        }
        var h = e.current
        for (V = h; V !== null; ) {
          a = V
          var x = a.child
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (V = x)
          else
            e: for (a = h; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      na(9, s)
                  }
                } catch (j) {
                  me(s, s.return, j)
                }
              if (s === a) {
                V = null
                break e
              }
              var B = s.sibling
              if (B !== null) {
                ;(B.return = s.return), (V = B)
                break e
              }
              V = s.return
            }
        }
        if (
          ((X = o), mr(), Tt && typeof Tt.onPostCommitFiberRoot == 'function')
        )
          try {
            Tt.onPostCommitFiberRoot(Yi, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(ne = r), (dt.transition = t)
    }
  }
  return !1
}
function yc(e, t, r) {
  ;(t = gn(r, t)),
    (t = Xf(e, t, 1)),
    (e = sr(e, t, 1)),
    (t = $e()),
    e !== null && (Eo(e, 1, t), Ye(e, t))
}
function me(e, t, r) {
  if (e.tag === 3) yc(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yc(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' &&
            (ur === null || !ur.has(n)))
        ) {
          ;(e = gn(r, e)),
            (e = ep(t, e, 1)),
            (t = sr(t, e, 1)),
            (e = $e()),
            t !== null && (Eo(t, 1, e), Ye(t, e))
          break
        }
      }
      t = t.return
    }
}
function Vg(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Se === e &&
      (Fe & r) === r &&
      (be === 4 || (be === 3 && (Fe & 130023424) === Fe && 500 > ye() - Wu)
        ? Er(e, 0)
        : (Vu |= r)),
    Ye(e, t)
}
function xp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Io), (Io <<= 1), !(Io & 130023424) && (Io = 4194304))
      : (t = 1))
  var r = $e()
  ;(e = Mt(e, t)), e !== null && (Eo(e, t, r), Ye(e, r))
}
function Wg(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), xp(e, r)
}
function Gg(e, t) {
  var r = 0
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState
      o !== null && (r = o.retryLane)
      break
    case 19:
      n = e.stateNode
      break
    default:
      throw Error(M(314))
  }
  n !== null && n.delete(t), xp(e, r)
}
var Cp
Cp = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) We = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (We = !1), jg(e, t, r)
      We = !!(e.flags & 131072)
    }
  else (We = !1), fe && t.flags & 1048576 && Ef(t, Ei, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      ai(e, t), (e = t.pendingProps)
      var o = dn(t, _e.current)
      sn(t, r), (o = qu(null, t, n, e, o, r))
      var i = $u()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(n) ? ((i = !0), wi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ju(t),
            (o.updater = ra),
            (t.stateNode = o),
            (o._reactInternals = t),
            Fs(t, n, e, r),
            (t = Ns(null, t, n, !0, i, r)))
          : ((t.tag = 0), fe && i && ku(t), qe(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (ai(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = Yg(n)),
          (e = yt(n, e)),
          o)
        ) {
          case 0:
            t = Ps(null, t, n, e, r)
            break e
          case 1:
            t = sc(null, t, n, e, r)
            break e
          case 11:
            t = ic(null, t, n, e, r)
            break e
          case 14:
            t = ac(null, t, n, yt(n.type, e), r)
            break e
        }
        throw Error(M(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : yt(n, o)),
        Ps(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : yt(n, o)),
        sc(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((op(t), e === null)) throw Error(M(387))
        ;(n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Lf(e, t),
          Bi(t, n, null, r)
        var a = t.memoizedState
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = gn(Error(M(423)), t)), (t = uc(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = gn(Error(M(424)), t)), (t = uc(e, t, n, r, o))
            break e
          } else
            for (
              rt = ar(t.stateNode.containerInfo.firstChild),
                nt = t,
                fe = !0,
                Dt = null,
                r = Tf(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((fn(), n === o)) {
            t = Ut(e, t, r)
            break e
          }
          qe(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Pf(t),
        e === null && ks(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        As(n, o) ? (a = null) : i !== null && As(n, i) && (t.flags |= 32),
        np(e, t),
        qe(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && ks(t), null
    case 13:
      return ip(e, t, r)
    case 4:
      return (
        Ru(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = pn(t, null, n, r)) : qe(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : yt(n, o)),
        ic(e, t, n, o, r)
      )
    case 7:
      return qe(e, t, t.pendingProps, r), t.child
    case 8:
      return qe(e, t, t.pendingProps.children, r), t.child
    case 12:
      return qe(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ae(Si, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (wt(i.value, a)) {
            if (i.children === o.children && !Ge.current) {
              t = Ut(e, t, r)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                a = i.child
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === n) {
                    if (i.tag === 1) {
                      ;(u = It(-1, r & -r)), (u.tag = 2)
                      var l = i.updateQueue
                      if (l !== null) {
                        l = l.shared
                        var c = l.pending
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (l.pending = u)
                      }
                    }
                    ;(i.lanes |= r),
                      (u = i.alternate),
                      u !== null && (u.lanes |= r),
                      Bs(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  u = u.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(M(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  Bs(a, r, t),
                  (a = i.sibling)
              } else a = i.child
              if (a !== null) a.return = i
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((i = a.sibling), i !== null)) {
                    ;(i.return = a.return), (a = i)
                    break
                  }
                  a = a.return
                }
              i = a
            }
        qe(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        sn(t, r),
        (o = ft(o)),
        (n = n(o)),
        (t.flags |= 1),
        qe(e, t, n, r),
        t.child
      )
    case 14:
      return (
        (n = t.type),
        (o = yt(n, t.pendingProps)),
        (o = yt(n.type, o)),
        ac(e, t, n, o, r)
      )
    case 15:
      return tp(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : yt(n, o)),
        ai(e, t),
        (t.tag = 1),
        Ke(n) ? ((e = !0), wi(t)) : (e = !1),
        sn(t, r),
        Zf(t, n, o),
        Fs(t, n, o, r),
        Ns(null, t, n, !0, e, r)
      )
    case 19:
      return ap(e, t, r)
    case 22:
      return rp(e, t, r)
  }
  throw Error(M(156, t.tag))
}
function Ap(e, t) {
  return Kd(e, t)
}
function Kg(e, t, r, n) {
  ;(this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function ct(e, t, r, n) {
  return new Kg(e, t, r, n)
}
function Qu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Yg(e) {
  if (typeof e == 'function') return Qu(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === gu)) return 11
    if (e === mu) return 14
  }
  return 2
}
function cr(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = ct(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  )
}
function li(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) Qu(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Hr:
        return Sr(r.children, o, i, t)
      case hu:
        ;(a = 8), (o |= 8)
        break
      case es:
        return (e = ct(12, r, t, o | 2)), (e.elementType = es), (e.lanes = i), e
      case ts:
        return (e = ct(13, r, t, o)), (e.elementType = ts), (e.lanes = i), e
      case rs:
        return (e = ct(19, r, t, o)), (e.elementType = rs), (e.lanes = i), e
      case Ld:
        return ia(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Td:
              a = 10
              break e
            case Fd:
              a = 9
              break e
            case gu:
              a = 11
              break e
            case mu:
              a = 14
              break e
            case Qt:
              ;(a = 16), (n = null)
              break e
          }
        throw Error(M(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = ct(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  )
}
function Sr(e, t, r, n) {
  return (e = ct(7, e, n, t)), (e.lanes = r), e
}
function ia(e, t, r, n) {
  return (
    (e = ct(22, e, n, t)),
    (e.elementType = Ld),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ua(e, t, r) {
  return (e = ct(6, e, null, t)), (e.lanes = r), e
}
function za(e, t, r) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Qg(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wa(0)),
    (this.expirationTimes = wa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wa(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Ju(e, t, r, n, o, i, a, s, u) {
  return (
    (e = new Qg(e, t, r, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ct(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ju(i),
    e
  )
}
function Jg(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: zr,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function wp(e) {
  if (!e) return pr
  e = e._reactInternals
  e: {
    if (Ir(e) !== e || e.tag !== 1) throw Error(M(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(M(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (Ke(r)) return wf(e, r, t)
  }
  return t
}
function bp(e, t, r, n, o, i, a, s, u) {
  return (
    (e = Ju(r, n, !0, e, o, i, a, s, u)),
    (e.context = wp(null)),
    (r = e.current),
    (n = $e()),
    (o = lr(r)),
    (i = It(n, o)),
    (i.callback = t ?? null),
    sr(r, i, o),
    (e.current.lanes = o),
    Eo(e, o, n),
    Ye(e, n),
    e
  )
}
function aa(e, t, r, n) {
  var o = t.current,
    i = $e(),
    a = lr(o)
  return (
    (r = wp(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = It(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = sr(o, t, a)),
    e !== null && (At(e, o, a, i), ni(e, o, a)),
    a
  )
}
function Oi(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function Zu(e, t) {
  vc(e, t), (e = e.alternate) && vc(e, t)
}
function Zg() {
  return null
}
var Ep =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Xu(e) {
  this._internalRoot = e
}
sa.prototype.render = Xu.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(M(409))
  aa(e, t, null, null)
}
sa.prototype.unmount = Xu.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Rr(function () {
      aa(null, e, null, null)
    }),
      (t[$t] = null)
  }
}
function sa(e) {
  this._internalRoot = e
}
sa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tf()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < Zt.length && t !== 0 && t < Zt[r].priority; r++);
    Zt.splice(r, 0, e), r === 0 && nf(e)
  }
}
function el(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ua(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Dc() {}
function Xg(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var l = Oi(a)
        i.call(l)
      }
    }
    var a = bp(t, n, e, 0, null, !1, !1, '', Dc)
    return (
      (e._reactRootContainer = a),
      (e[$t] = a.current),
      uo(e.nodeType === 8 ? e.parentNode : e),
      Rr(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var l = Oi(u)
      s.call(l)
    }
  }
  var u = Ju(e, 0, !1, null, null, !1, !1, '', Dc)
  return (
    (e._reactRootContainer = u),
    (e[$t] = u.current),
    uo(e.nodeType === 8 ? e.parentNode : e),
    Rr(function () {
      aa(t, u, r, n)
    }),
    u
  )
}
function la(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var u = Oi(a)
        s.call(u)
      }
    }
    aa(t, a, e, o)
  } else a = Xg(r, t, e, o, n)
  return Oi(a)
}
Xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = Mn(t.pendingLanes)
        r !== 0 &&
          (Du(t, r | 1), Ye(t, ye()), !(X & 6) && ((mn = ye() + 500), mr()))
      }
      break
    case 13:
      Rr(function () {
        var n = Mt(e, 1)
        if (n !== null) {
          var o = $e()
          At(n, e, 1, o)
        }
      }),
        Zu(e, 1)
  }
}
xu = function (e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728)
    if (t !== null) {
      var r = $e()
      At(t, e, 134217728, r)
    }
    Zu(e, 134217728)
  }
}
ef = function (e) {
  if (e.tag === 13) {
    var t = lr(e),
      r = Mt(e, t)
    if (r !== null) {
      var n = $e()
      At(r, e, t, n)
    }
    Zu(e, t)
  }
}
tf = function () {
  return ne
}
rf = function (e, t) {
  var r = ne
  try {
    return (ne = e), t()
  } finally {
    ne = r
  }
}
fs = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((is(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = Xi(n)
            if (!o) throw Error(M(90))
            Nd(n), is(n, o)
          }
        }
      }
      break
    case 'textarea':
      Rd(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && rn(e, !!r.multiple, t, !1)
  }
}
Ud = Gu
zd = Rr
var em = { usingClientEntryPoint: !1, Events: [ko, Kr, Xi, $d, Md, Gu] },
  Pn = {
    findFiberByHostInstance: Cr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  tm = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wd(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || Zg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Yo.isDisabled && Yo.supportsFiber)
    try {
      ;(Yi = Yo.inject(tm)), (Tt = Yo)
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em
at.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!el(t)) throw Error(M(200))
  return Jg(e, t, null, r)
}
at.createRoot = function (e, t) {
  if (!el(e)) throw Error(M(299))
  var r = !1,
    n = '',
    o = Ep
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ju(e, 1, !1, null, null, r, !1, n, o)),
    (e[$t] = t.current),
    uo(e.nodeType === 8 ? e.parentNode : e),
    new Xu(t)
  )
}
at.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(M(188))
      : ((e = Object.keys(e).join(',')), Error(M(268, e)))
  return (e = Wd(t)), (e = e === null ? null : e.stateNode), e
}
at.flushSync = function (e) {
  return Rr(e)
}
at.hydrate = function (e, t, r) {
  if (!ua(t)) throw Error(M(200))
  return la(null, e, t, !0, r)
}
at.hydrateRoot = function (e, t, r) {
  if (!el(e)) throw Error(M(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = Ep
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = bp(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[$t] = t.current),
    uo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new sa(t)
}
at.render = function (e, t, r) {
  if (!ua(t)) throw Error(M(200))
  return la(null, e, t, !1, r)
}
at.unmountComponentAtNode = function (e) {
  if (!ua(e)) throw Error(M(40))
  return e._reactRootContainer
    ? (Rr(function () {
        la(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[$t] = null)
        })
      }),
      !0)
    : !1
}
at.unstable_batchedUpdates = Gu
at.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!ua(r)) throw Error(M(200))
  if (e == null || e._reactInternals === void 0) throw Error(M(38))
  return la(e, t, r, !1, n)
}
at.version = '18.3.1-next-f1338f8080-20240426'
function Sp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp)
    } catch (e) {
      console.error(e)
    }
}
Sp(), (Ed.exports = at)
var rm = Ed.exports,
  kp,
  xc = rm
;(kp = xc.createRoot), xc.hydrateRoot
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    vo.apply(this, arguments)
  )
}
var rr
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(rr || (rr = {}))
const Cc = 'popstate'
function nm(e) {
  e === void 0 && (e = {})
  function t(n, o) {
    let { pathname: i, search: a, hash: s } = n.location
    return Vs(
      '',
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function r(n, o) {
    return typeof o == 'string' ? o : _i(o)
  }
  return im(t, r, null, e)
}
function ve(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Bp(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function om() {
  return Math.random().toString(36).substr(2, 8)
}
function Ac(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Vs(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    vo(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Cn(t) : t,
      { state: r, key: (t && t.key) || n || om() }
    )
  )
}
function _i(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  )
}
function Cn(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e)
  }
  return t
}
function im(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    s = rr.Pop,
    u = null,
    l = c()
  l == null && ((l = 0), a.replaceState(vo({}, a.state, { idx: l }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function f() {
    s = rr.Pop
    let S = c(),
      y = S == null ? null : S - l
    ;(l = S), u && u({ action: s, location: w.location, delta: y })
  }
  function p(S, y) {
    s = rr.Push
    let h = Vs(w.location, S, y)
    l = c() + 1
    let x = Ac(h, l),
      B = w.createHref(h)
    try {
      a.pushState(x, '', B)
    } catch (j) {
      if (j instanceof DOMException && j.name === 'DataCloneError') throw j
      o.location.assign(B)
    }
    i && u && u({ action: s, location: w.location, delta: 1 })
  }
  function m(S, y) {
    s = rr.Replace
    let h = Vs(w.location, S, y)
    l = c()
    let x = Ac(h, l),
      B = w.createHref(h)
    a.replaceState(x, '', B),
      i && u && u({ action: s, location: w.location, delta: 0 })
  }
  function D(S) {
    let y = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof S == 'string' ? S : _i(S)
    return (
      (h = h.replace(/ $/, '%20')),
      ve(
        y,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, y)
    )
  }
  let w = {
    get action() {
      return s
    },
    get location() {
      return e(o, a)
    },
    listen(S) {
      if (u) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(Cc, f),
        (u = S),
        () => {
          o.removeEventListener(Cc, f), (u = null)
        }
      )
    },
    createHref(S) {
      return t(o, S)
    },
    createURL: D,
    encodeLocation(S) {
      let y = D(S)
      return { pathname: y.pathname, search: y.search, hash: y.hash }
    },
    push: p,
    replace: m,
    go(S) {
      return a.go(S)
    },
  }
  return w
}
var wc
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(wc || (wc = {}))
function am(e, t, r) {
  return r === void 0 && (r = '/'), sm(e, t, r, !1)
}
function sm(e, t, r, n) {
  let o = typeof t == 'string' ? Cn(t) : t,
    i = tl(o.pathname || '/', r)
  if (i == null) return null
  let a = Tp(e)
  um(a)
  let s = null
  for (let u = 0; s == null && u < a.length; ++u) {
    let l = Dm(i)
    s = ym(a[u], l, n)
  }
  return s
}
function Tp(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let o = (i, a, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    }
    u.relativePath.startsWith('/') &&
      (ve(
        u.relativePath.startsWith(n),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(n.length)))
    let l = dr([n, u.relativePath]),
      c = r.concat(u)
    i.children &&
      i.children.length > 0 &&
      (ve(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + l + '".')
      ),
      Tp(i.children, t, c, l)),
      !(i.path == null && !i.index) &&
        t.push({ path: l, score: gm(l, i.index), routesMeta: c })
  }
  return (
    e.forEach((i, a) => {
      var s
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a)
      else for (let u of Fp(i.path)) o(i, a, u)
    }),
    t
  )
}
function Fp(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    o = r.endsWith('?'),
    i = r.replace(/\?$/, '')
  if (n.length === 0) return o ? [i, ''] : [i]
  let a = Fp(n.join('/')),
    s = []
  return (
    s.push(...a.map((u) => (u === '' ? i : [i, u].join('/')))),
    o && s.push(...a),
    s.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  )
}
function um(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : mm(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  )
}
const lm = /^:[\w-]+$/,
  cm = 3,
  dm = 2,
  fm = 1,
  pm = 10,
  hm = -2,
  bc = (e) => e === '*'
function gm(e, t) {
  let r = e.split('/'),
    n = r.length
  return (
    r.some(bc) && (n += hm),
    t && (n += dm),
    r
      .filter((o) => !bc(o))
      .reduce((o, i) => o + (lm.test(i) ? cm : i === '' ? fm : pm), n)
  )
}
function mm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function ym(e, t, r) {
  let { routesMeta: n } = e,
    o = {},
    i = '/',
    a = []
  for (let s = 0; s < n.length; ++s) {
    let u = n[s],
      l = s === n.length - 1,
      c = i === '/' ? t : t.slice(i.length) || '/',
      f = Ec(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: l },
        c
      ),
      p = u.route
    if (
      (!f &&
        l &&
        r &&
        !n[n.length - 1].route.index &&
        (f = Ec(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null
    Object.assign(o, f.params),
      a.push({
        params: o,
        pathname: dr([i, f.pathname]),
        pathnameBase: wm(dr([i, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== '/' && (i = dr([i, f.pathnameBase]))
  }
  return a
}
function Ec(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = vm(e.path, e.caseSensitive, e.end),
    o = t.match(r)
  if (!o) return null
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1)
  return {
    params: n.reduce((l, c, f) => {
      let { paramName: p, isOptional: m } = c
      if (p === '*') {
        let w = s[f] || ''
        a = i.slice(0, i.length - w.length).replace(/(.)\/+$/, '$1')
      }
      const D = s[f]
      return (
        m && !D ? (l[p] = void 0) : (l[p] = (D || '').replace(/%2F/g, '/')), l
      )
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  }
}
function vm(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Bp(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let n = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, u) => (
            n.push({ paramName: s, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), n]
  )
}
function Dm(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      Bp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function tl(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function xm(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: r,
    search: n = '',
    hash: o = '',
  } = typeof e == 'string' ? Cn(e) : e
  return {
    pathname: r ? (r.startsWith('/') ? r : Cm(r, t)) : t,
    search: bm(n),
    hash: Em(o),
  }
}
function Cm(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function Ha(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Am(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function rl(e, t) {
  let r = Am(e)
  return t
    ? r.map((n, o) => (o === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase)
}
function nl(e, t, r, n) {
  n === void 0 && (n = !1)
  let o
  typeof e == 'string'
    ? (o = Cn(e))
    : ((o = vo({}, e)),
      ve(
        !o.pathname || !o.pathname.includes('?'),
        Ha('?', 'pathname', 'search', o)
      ),
      ve(
        !o.pathname || !o.pathname.includes('#'),
        Ha('#', 'pathname', 'hash', o)
      ),
      ve(!o.search || !o.search.includes('#'), Ha('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s
  if (a == null) s = r
  else {
    let f = t.length - 1
    if (!n && a.startsWith('..')) {
      let p = a.split('/')
      for (; p[0] === '..'; ) p.shift(), (f -= 1)
      o.pathname = p.join('/')
    }
    s = f >= 0 ? t[f] : '/'
  }
  let u = xm(o, s),
    l = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && r.endsWith('/')
  return !u.pathname.endsWith('/') && (l || c) && (u.pathname += '/'), u
}
const dr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  wm = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  bm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Em = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function Sm(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Lp = ['post', 'put', 'patch', 'delete']
new Set(Lp)
const km = ['get', ...Lp]
new Set(km)
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Do() {
  return (
    (Do = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Do.apply(this, arguments)
  )
}
const ol = T.createContext(null),
  Bm = T.createContext(null),
  yr = T.createContext(null),
  ca = T.createContext(null),
  Vt = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Pp = T.createContext(null)
function Tm(e, t) {
  let { relative: r } = t === void 0 ? {} : t
  An() || ve(!1)
  let { basename: n, navigator: o } = T.useContext(yr),
    { hash: i, pathname: a, search: s } = jp(e, { relative: r }),
    u = a
  return (
    n !== '/' && (u = a === '/' ? n : dr([n, a])),
    o.createHref({ pathname: u, search: s, hash: i })
  )
}
function An() {
  return T.useContext(ca) != null
}
function Lt() {
  return An() || ve(!1), T.useContext(ca).location
}
function Np(e) {
  T.useContext(yr).static || T.useLayoutEffect(e)
}
function vr() {
  let { isDataRoute: e } = T.useContext(Vt)
  return e ? Um() : Fm()
}
function Fm() {
  An() || ve(!1)
  let e = T.useContext(ol),
    { basename: t, future: r, navigator: n } = T.useContext(yr),
    { matches: o } = T.useContext(Vt),
    { pathname: i } = Lt(),
    a = JSON.stringify(rl(o, r.v7_relativeSplatPath)),
    s = T.useRef(!1)
  return (
    Np(() => {
      s.current = !0
    }),
    T.useCallback(
      function (l, c) {
        if ((c === void 0 && (c = {}), !s.current)) return
        if (typeof l == 'number') {
          n.go(l)
          return
        }
        let f = nl(l, JSON.parse(a), i, c.relative === 'path')
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : dr([t, f.pathname])),
          (c.replace ? n.replace : n.push)(f, c.state, c)
      },
      [t, n, a, i, e]
    )
  )
}
function Ze() {
  let { matches: e } = T.useContext(Vt),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function jp(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = T.useContext(yr),
    { matches: o } = T.useContext(Vt),
    { pathname: i } = Lt(),
    a = JSON.stringify(rl(o, n.v7_relativeSplatPath))
  return T.useMemo(() => nl(e, JSON.parse(a), i, r === 'path'), [e, a, i, r])
}
function Lm(e, t) {
  return Pm(e, t)
}
function Pm(e, t, r, n) {
  An() || ve(!1)
  let { navigator: o } = T.useContext(yr),
    { matches: i } = T.useContext(Vt),
    a = i[i.length - 1],
    s = a ? a.params : {}
  a && a.pathname
  let u = a ? a.pathnameBase : '/'
  a && a.route
  let l = Lt(),
    c
  if (t) {
    var f
    let S = typeof t == 'string' ? Cn(t) : t
    u === '/' || ((f = S.pathname) != null && f.startsWith(u)) || ve(!1),
      (c = S)
  } else c = l
  let p = c.pathname || '/',
    m = p
  if (u !== '/') {
    let S = u.replace(/^\//, '').split('/')
    m = '/' + p.replace(/^\//, '').split('/').slice(S.length).join('/')
  }
  let D = am(e, { pathname: m }),
    w = _m(
      D &&
        D.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, s, S.params),
            pathname: dr([
              u,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? u
                : dr([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n
    )
  return t && w
    ? T.createElement(
        ca.Provider,
        {
          value: {
            location: Do(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c
            ),
            navigationType: rr.Pop,
          },
        },
        w
      )
    : w
}
function Nm() {
  let e = Mm(),
    t = Sm(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return T.createElement(
    T.Fragment,
    null,
    T.createElement('h2', null, 'Unexpected Application Error!'),
    T.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? T.createElement('pre', { style: o }, r) : null,
    null
  )
}
const jm = T.createElement(Nm, null)
class Rm extends T.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        }
  }
  componentDidCatch(t, r) {
    console.error('React Router caught the following error during render', t, r)
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          Vt.Provider,
          { value: this.props.routeContext },
          T.createElement(Pp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function Om(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = T.useContext(ol)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    T.createElement(Vt.Provider, { value: t }, n)
  )
}
function _m(e, t, r, n) {
  var o
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i
    if (!r) return null
    if (r.errors) e = r.matches
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches
    else return null
  }
  let a = e,
    s = (o = r) == null ? void 0 : o.errors
  if (s != null) {
    let c = a.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0
    )
    c >= 0 || ve(!1), (a = a.slice(0, Math.min(a.length, c + 1)))
  }
  let u = !1,
    l = -1
  if (r && n && n.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let f = a[c]
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (l = c),
        f.route.id)
      ) {
        let { loaderData: p, errors: m } = r,
          D =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0)
        if (f.route.lazy || D) {
          ;(u = !0), l >= 0 ? (a = a.slice(0, l + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((c, f, p) => {
    let m,
      D = !1,
      w = null,
      S = null
    r &&
      ((m = s && f.route.id ? s[f.route.id] : void 0),
      (w = f.route.errorElement || jm),
      u &&
        (l < 0 && p === 0
          ? ((D = !0), (S = null))
          : l === p &&
            ((D = !0), (S = f.route.hydrateFallbackElement || null))))
    let y = t.concat(a.slice(0, p + 1)),
      h = () => {
        let x
        return (
          m
            ? (x = w)
            : D
              ? (x = S)
              : f.route.Component
                ? (x = T.createElement(f.route.Component, null))
                : f.route.element
                  ? (x = f.route.element)
                  : (x = c),
          T.createElement(Om, {
            match: f,
            routeContext: { outlet: c, matches: y, isDataRoute: r != null },
            children: x,
          })
        )
      }
    return r && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? T.createElement(Rm, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: m,
          children: h(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : h()
  }, null)
}
var Rp = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(Rp || {}),
  Ii = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(Ii || {})
function Im(e) {
  let t = T.useContext(ol)
  return t || ve(!1), t
}
function qm(e) {
  let t = T.useContext(Bm)
  return t || ve(!1), t
}
function $m(e) {
  let t = T.useContext(Vt)
  return t || ve(!1), t
}
function Op(e) {
  let t = $m(),
    r = t.matches[t.matches.length - 1]
  return r.route.id || ve(!1), r.route.id
}
function Mm() {
  var e
  let t = T.useContext(Pp),
    r = qm(Ii.UseRouteError),
    n = Op(Ii.UseRouteError)
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function Um() {
  let { router: e } = Im(Rp.UseNavigateStable),
    t = Op(Ii.UseNavigateStable),
    r = T.useRef(!1)
  return (
    Np(() => {
      r.current = !0
    }),
    T.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Do({ fromRouteId: t }, i)))
      },
      [e, t]
    )
  )
}
function mt(e) {
  let { to: t, replace: r, state: n, relative: o } = e
  An() || ve(!1)
  let { future: i, static: a } = T.useContext(yr),
    { matches: s } = T.useContext(Vt),
    { pathname: u } = Lt(),
    l = vr(),
    c = nl(t, rl(s, i.v7_relativeSplatPath), u, o === 'path'),
    f = JSON.stringify(c)
  return (
    T.useEffect(
      () => l(JSON.parse(f), { replace: r, state: n, relative: o }),
      [l, f, o, r, n]
    ),
    null
  )
}
function ee(e) {
  ve(!1)
}
function zm(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: o = rr.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e
  An() && ve(!1)
  let u = t.replace(/^\/*/, '/'),
    l = T.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: a,
        future: Do({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, i, a]
    )
  typeof n == 'string' && (n = Cn(n))
  let {
      pathname: c = '/',
      search: f = '',
      hash: p = '',
      state: m = null,
      key: D = 'default',
    } = n,
    w = T.useMemo(() => {
      let S = tl(c, u)
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: p, state: m, key: D },
            navigationType: o,
          }
    }, [u, c, f, p, m, D, o])
  return w == null
    ? null
    : T.createElement(
        yr.Provider,
        { value: l },
        T.createElement(ca.Provider, { children: r, value: w })
      )
}
function Hm(e) {
  let { children: t, location: r } = e
  return Lm(Ws(t), r)
}
new Promise(() => {})
function Ws(e, t) {
  t === void 0 && (t = [])
  let r = []
  return (
    T.Children.forEach(e, (n, o) => {
      if (!T.isValidElement(n)) return
      let i = [...t, o]
      if (n.type === T.Fragment) {
        r.push.apply(r, Ws(n.props.children, i))
        return
      }
      n.type !== ee && ve(!1), !n.props.index || !n.props.children || ve(!1)
      let a = {
        id: n.props.id || i.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      }
      n.props.children && (a.children = Ws(n.props.children, i)), r.push(a)
    }),
    r
  )
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gs() {
  return (
    (Gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Gs.apply(this, arguments)
  )
}
function Vm(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
function Wm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Gm(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Wm(e)
}
const Km = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Ym = '6'
try {
  window.__reactRouterVersion = Ym
} catch {}
const Qm = 'startTransition',
  Sc = Vh[Qm]
function Jm(e) {
  let { basename: t, children: r, future: n, window: o } = e,
    i = T.useRef()
  i.current == null && (i.current = nm({ window: o, v5Compat: !0 }))
  let a = i.current,
    [s, u] = T.useState({ action: a.action, location: a.location }),
    { v7_startTransition: l } = n || {},
    c = T.useCallback(
      (f) => {
        l && Sc ? Sc(() => u(f)) : u(f)
      },
      [u, l]
    )
  return (
    T.useLayoutEffect(() => a.listen(c), [a, c]),
    T.createElement(zm, {
      basename: t,
      children: r,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: n,
    })
  )
}
const Zm =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Xm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  re = T.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: u,
        to: l,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      p = Vm(t, Km),
      { basename: m } = T.useContext(yr),
      D,
      w = !1
    if (typeof l == 'string' && Xm.test(l) && ((D = l), Zm))
      try {
        let x = new URL(window.location.href),
          B = l.startsWith('//') ? new URL(x.protocol + l) : new URL(l),
          j = tl(B.pathname, m)
        B.origin === x.origin && j != null
          ? (l = j + B.search + B.hash)
          : (w = !0)
      } catch {}
    let S = Tm(l, { relative: o }),
      y = e0(l, {
        replace: a,
        state: s,
        target: u,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: f,
      })
    function h(x) {
      n && n(x), x.defaultPrevented || y(x)
    }
    return T.createElement(
      'a',
      Gs({}, p, { href: D || S, onClick: w || i ? n : h, ref: r, target: u })
    )
  })
var kc
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(kc || (kc = {}))
var Bc
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Bc || (Bc = {}))
function e0(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = vr(),
    l = Lt(),
    c = jp(e, { relative: a })
  return T.useCallback(
    (f) => {
      if (Gm(f, r)) {
        f.preventDefault()
        let p = n !== void 0 ? n : _i(l) === _i(c)
        u(e, {
          replace: p,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        })
      }
    },
    [l, u, c, n, o, r, e, i, a, s]
  )
}
const t0 = {
  type: 'logger',
  log(e) {
    this.output('log', e)
  },
  warn(e) {
    this.output('warn', e)
  },
  error(e) {
    this.output('error', e)
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t)
  },
}
class qi {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, r)
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = r.prefix || 'i18next:'),
      (this.logger = t || t0),
      (this.options = r),
      (this.debug = r.debug)
  }
  log() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n]
    return this.forward(r, 'log', '', !0)
  }
  warn() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n]
    return this.forward(r, 'warn', '', !0)
  }
  error() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n]
    return this.forward(r, 'error', '')
  }
  deprecate() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n]
    return this.forward(r, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(t, r, n, o) {
    return o && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${n}${this.prefix} ${t[0]}`),
        this.logger[r](t))
  }
  create(t) {
    return new qi(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new qi(this.logger, t)
    )
  }
}
var Bt = new qi()
class da {
  constructor() {
    this.observers = {}
  }
  on(t, r) {
    return (
      t.split(' ').forEach((n) => {
        this.observers[n] || (this.observers[n] = new Map())
        const o = this.observers[n].get(r) || 0
        this.observers[n].set(r, o + 1)
      }),
      this
    )
  }
  off(t, r) {
    if (this.observers[t]) {
      if (!r) {
        delete this.observers[t]
        return
      }
      this.observers[t].delete(r)
    }
  }
  emit(t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
      o < r;
      o++
    )
      n[o - 1] = arguments[o]
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((a) => {
        let [s, u] = a
        for (let l = 0; l < u; l++) s(...n)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((a) => {
          let [s, u] = a
          for (let l = 0; l < u; l++) s.apply(s, [t, ...n])
        })
  }
}
const Nn = () => {
    let e, t
    const r = new Promise((n, o) => {
      ;(e = n), (t = o)
    })
    return (r.resolve = e), (r.reject = t), r
  },
  Tc = (e) => (e == null ? '' : '' + e),
  r0 = (e, t, r) => {
    e.forEach((n) => {
      t[n] && (r[n] = t[n])
    })
  },
  n0 = /###/g,
  Fc = (e) => (e && e.indexOf('###') > -1 ? e.replace(n0, '.') : e),
  Lc = (e) => !e || typeof e == 'string',
  Xn = (e, t, r) => {
    const n = typeof t != 'string' ? t : t.split('.')
    let o = 0
    for (; o < n.length - 1; ) {
      if (Lc(e)) return {}
      const i = Fc(n[o])
      !e[i] && r && (e[i] = new r()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o
    }
    return Lc(e) ? {} : { obj: e, k: Fc(n[o]) }
  },
  Pc = (e, t, r) => {
    const { obj: n, k: o } = Xn(e, t, Object)
    if (n !== void 0 || t.length === 1) {
      n[o] = r
      return
    }
    let i = t[t.length - 1],
      a = t.slice(0, t.length - 1),
      s = Xn(e, a, Object)
    for (; s.obj === void 0 && a.length; )
      (i = `${a[a.length - 1]}.${i}`),
        (a = a.slice(0, a.length - 1)),
        (s = Xn(e, a, Object)),
        s && s.obj && typeof s.obj[`${s.k}.${i}`] < 'u' && (s.obj = void 0)
    s.obj[`${s.k}.${i}`] = r
  },
  o0 = (e, t, r, n) => {
    const { obj: o, k: i } = Xn(e, t, Object)
    ;(o[i] = o[i] || []), o[i].push(r)
  },
  $i = (e, t) => {
    const { obj: r, k: n } = Xn(e, t)
    if (r) return r[n]
  },
  i0 = (e, t, r) => {
    const n = $i(e, r)
    return n !== void 0 ? n : $i(t, r)
  },
  _p = (e, t, r) => {
    for (const n in t)
      n !== '__proto__' &&
        n !== 'constructor' &&
        (n in e
          ? typeof e[n] == 'string' ||
            e[n] instanceof String ||
            typeof t[n] == 'string' ||
            t[n] instanceof String
            ? r && (e[n] = t[n])
            : _p(e[n], t[n], r)
          : (e[n] = t[n]))
    return e
  },
  $r = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var a0 = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const s0 = (e) =>
  typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => a0[t]) : e
class u0 {
  constructor(t) {
    ;(this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(t) {
    const r = this.regExpMap.get(t)
    if (r !== void 0) return r
    const n = new RegExp(t)
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, n),
      this.regExpQueue.push(t),
      n
    )
  }
}
const l0 = [' ', ',', '?', '!', ';'],
  c0 = new u0(20),
  d0 = (e, t, r) => {
    ;(t = t || ''), (r = r || '')
    const n = l0.filter((a) => t.indexOf(a) < 0 && r.indexOf(a) < 0)
    if (n.length === 0) return !0
    const o = c0.getRegExp(
      `(${n.map((a) => (a === '?' ? '\\?' : a)).join('|')})`
    )
    let i = !o.test(e)
    if (!i) {
      const a = e.indexOf(r)
      a > 0 && !o.test(e.substring(0, a)) && (i = !0)
    }
    return i
  },
  Ks = function (e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const n = t.split(r)
    let o = e
    for (let i = 0; i < n.length; ) {
      if (!o || typeof o != 'object') return
      let a,
        s = ''
      for (let u = i; u < n.length; ++u)
        if ((u !== i && (s += r), (s += n[u]), (a = o[s]), a !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof a) > -1 &&
            u < n.length - 1
          )
            continue
          i += u - i + 1
          break
        }
      o = a
    }
    return o
  },
  Mi = (e) => (e && e.indexOf('_') > 0 ? e.replace('_', '-') : e)
class Nc extends da {
  constructor(t) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' }
    super(),
      (this.data = t || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
  }
  removeNamespaces(t) {
    const r = this.options.ns.indexOf(t)
    r > -1 && this.options.ns.splice(r, 1)
  }
  getResource(t, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      a =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let s
    t.indexOf('.') > -1
      ? (s = t.split('.'))
      : ((s = [t, r]),
        n &&
          (Array.isArray(n)
            ? s.push(...n)
            : typeof n == 'string' && i
              ? s.push(...n.split(i))
              : s.push(n)))
    const u = $i(this.data, s)
    return (
      !u &&
        !r &&
        !n &&
        t.indexOf('.') > -1 &&
        ((t = s[0]), (r = s[1]), (n = s.slice(2).join('.'))),
      u || !a || typeof n != 'string'
        ? u
        : Ks(this.data && this.data[t] && this.data[t][r], n, i)
    )
  }
  addResource(t, r, n, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const a =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
    let s = [t, r]
    n && (s = s.concat(a ? n.split(a) : n)),
      t.indexOf('.') > -1 && ((s = t.split('.')), (o = r), (r = s[1])),
      this.addNamespaces(r),
      Pc(this.data, s, o),
      i.silent || this.emit('added', t, r, n, o)
  }
  addResources(t, r, n) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const i in n)
      (typeof n[i] == 'string' || Array.isArray(n[i])) &&
        this.addResource(t, r, i, n[i], { silent: !0 })
    o.silent || this.emit('added', t, r, n)
  }
  addResourceBundle(t, r, n, o, i) {
    let a =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [t, r]
    t.indexOf('.') > -1 && ((s = t.split('.')), (o = n), (n = r), (r = s[1])),
      this.addNamespaces(r)
    let u = $i(this.data, s) || {}
    a.skipCopy || (n = JSON.parse(JSON.stringify(n))),
      o ? _p(u, n, i) : (u = { ...u, ...n }),
      Pc(this.data, s, u),
      a.silent || this.emit('added', t, r, n)
  }
  removeResourceBundle(t, r) {
    this.hasResourceBundle(t, r) && delete this.data[t][r],
      this.removeNamespaces(r),
      this.emit('removed', t, r)
  }
  hasResourceBundle(t, r) {
    return this.getResource(t, r) !== void 0
  }
  getResourceBundle(t, r) {
    return (
      r || (r = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, r) }
        : this.getResource(t, r)
    )
  }
  getDataByLanguage(t) {
    return this.data[t]
  }
  hasLanguageSomeTranslations(t) {
    const r = this.getDataByLanguage(t)
    return !!((r && Object.keys(r)) || []).find(
      (o) => r[o] && Object.keys(r[o]).length > 0
    )
  }
  toJSON() {
    return this.data
  }
}
var Ip = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e
  },
  handle(e, t, r, n, o) {
    return (
      e.forEach((i) => {
        this.processors[i] && (t = this.processors[i].process(t, r, n, o))
      }),
      t
    )
  },
}
const jc = {}
class Ui extends da {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      r0(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Bt.create('translator'))
  }
  changeLanguage(t) {
    t && (this.language = t)
  }
  exists(t) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    if (t == null) return !1
    const n = this.resolve(t, r)
    return n && n.res !== void 0
  }
  extractFromKey(t, r) {
    let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator
    n === void 0 && (n = ':')
    const o =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator
    let i = r.ns || this.options.defaultNS || []
    const a = n && t.indexOf(n) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !d0(t, n, o)
    if (a && !s) {
      const u = t.match(this.interpolator.nestingRegexp)
      if (u && u.length > 0) return { key: t, namespaces: i }
      const l = t.split(n)
      ;(n !== o || (n === o && this.options.ns.indexOf(l[0]) > -1)) &&
        (i = l.shift()),
        (t = l.join(o))
    }
    return typeof i == 'string' && (i = [i]), { key: t, namespaces: i }
  }
  translate(t, r, n) {
    if (
      (typeof r != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (r = this.options.overloadTranslationOptionHandler(arguments)),
      typeof r == 'object' && (r = { ...r }),
      r || (r = {}),
      t == null)
    )
      return ''
    Array.isArray(t) || (t = [String(t)])
    const o =
        r.returnDetails !== void 0
          ? r.returnDetails
          : this.options.returnDetails,
      i =
        r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      { key: a, namespaces: s } = this.extractFromKey(t[t.length - 1], r),
      u = s[s.length - 1],
      l = r.lng || this.language,
      c = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (l && l.toLowerCase() === 'cimode') {
      if (c) {
        const B = r.nsSeparator || this.options.nsSeparator
        return o
          ? {
              res: `${u}${B}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: l,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(r),
            }
          : `${u}${B}${a}`
      }
      return o
        ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: l,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(r),
          }
        : a
    }
    const f = this.resolve(t, r)
    let p = f && f.res
    const m = (f && f.usedKey) || a,
      D = (f && f.exactUsedKey) || a,
      w = Object.prototype.toString.apply(p),
      S = ['[object Number]', '[object Function]', '[object RegExp]'],
      y = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject
    if (
      h &&
      p &&
      typeof p != 'string' &&
      typeof p != 'boolean' &&
      typeof p != 'number' &&
      S.indexOf(w) < 0 &&
      !(typeof y == 'string' && Array.isArray(p))
    ) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          )
        const B = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(m, p, { ...r, ns: s })
          : `key '${a} (${this.language})' returned an object instead of string.`
        return o
          ? ((f.res = B), (f.usedParams = this.getUsedParamsDetails(r)), f)
          : B
      }
      if (i) {
        const B = Array.isArray(p),
          j = B ? [] : {},
          I = B ? D : m
        for (const F in p)
          if (Object.prototype.hasOwnProperty.call(p, F)) {
            const _ = `${I}${i}${F}`
            ;(j[F] = this.translate(_, { ...r, joinArrays: !1, ns: s })),
              j[F] === _ && (j[F] = p[F])
          }
        p = j
      }
    } else if (h && typeof y == 'string' && Array.isArray(p))
      (p = p.join(y)), p && (p = this.extendTranslation(p, t, r, n))
    else {
      let B = !1,
        j = !1
      const I = r.count !== void 0 && typeof r.count != 'string',
        F = Ui.hasDefaultValue(r),
        _ = I ? this.pluralResolver.getSuffix(l, r.count, r) : '',
        P =
          r.ordinal && I
            ? this.pluralResolver.getSuffix(l, r.count, { ordinal: !1 })
            : '',
        $ =
          I &&
          !r.ordinal &&
          r.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        O =
          ($ && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
          r[`defaultValue${_}`] ||
          r[`defaultValue${P}`] ||
          r.defaultValue
      !this.isValidLookup(p) && F && ((B = !0), (p = O)),
        this.isValidLookup(p) || ((j = !0), (p = a))
      const U =
          (r.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          j
            ? void 0
            : p,
        E = F && O !== p && this.options.updateMissing
      if (j || B || E) {
        if (
          (this.logger.log(E ? 'updateKey' : 'missingKey', l, u, a, E ? O : p),
          i)
        ) {
          const A = this.resolve(a, { ...r, keySeparator: !1 })
          A &&
            A.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let v = []
        const b = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          r.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && b && b[0])
          for (let A = 0; A < b.length; A++) v.push(b[A])
        else
          this.options.saveMissingTo === 'all'
            ? (v = this.languageUtils.toResolveHierarchy(
                r.lng || this.language
              ))
            : v.push(r.lng || this.language)
        const k = (A, g, C) => {
          const L = F && C !== p ? C : U
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(A, u, g, L, E, r)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(A, u, g, L, E, r),
            this.emit('missingKey', A, u, g, p)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && I
            ? v.forEach((A) => {
                const g = this.pluralResolver.getSuffixes(A, r)
                $ &&
                  r[`defaultValue${this.options.pluralSeparator}zero`] &&
                  g.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  g.push(`${this.options.pluralSeparator}zero`),
                  g.forEach((C) => {
                    k([A], a + C, r[`defaultValue${C}`] || O)
                  })
              })
            : k(v, a, O))
      }
      ;(p = this.extendTranslation(p, t, r, f, n)),
        j &&
          p === a &&
          this.options.appendNamespaceToMissingKey &&
          (p = `${u}:${a}`),
        (j || B) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (p = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${u}:${a}` : a,
                B ? p : void 0
              ))
            : (p = this.options.parseMissingKeyHandler(p)))
    }
    return o
      ? ((f.res = p), (f.usedParams = this.getUsedParamsDetails(r)), f)
      : p
  }
  extendTranslation(t, r, n, o, i) {
    var a = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...n },
        n.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o }
      )
    else if (!n.skipInterpolation) {
      n.interpolation &&
        this.interpolator.init({
          ...n,
          interpolation: { ...this.options.interpolation, ...n.interpolation },
        })
      const l =
        typeof t == 'string' &&
        (n && n.interpolation && n.interpolation.skipOnVariables !== void 0
          ? n.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let c
      if (l) {
        const p = t.match(this.interpolator.nestingRegexp)
        c = p && p.length
      }
      let f = n.replace && typeof n.replace != 'string' ? n.replace : n
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(
          t,
          f,
          n.lng || this.language || o.usedLng,
          n
        )),
        l)
      ) {
        const p = t.match(this.interpolator.nestingRegexp),
          m = p && p.length
        c < m && (n.nest = !1)
      }
      !n.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        o &&
        o.res &&
        (n.lng = this.language || o.usedLng),
        n.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var p = arguments.length, m = new Array(p), D = 0;
                D < p;
                D++
              )
                m[D] = arguments[D]
              return i && i[0] === m[0] && !n.context
                ? (a.logger.warn(
                    `It seems you are nesting recursively key: ${m[0]} in key: ${r[0]}`
                  ),
                  null)
                : a.translate(...m, r)
            },
            n
          )),
        n.interpolation && this.interpolator.reset()
    }
    const s = n.postProcess || this.options.postProcess,
      u = typeof s == 'string' ? [s] : s
    return (
      t != null &&
        u &&
        u.length &&
        n.applyPostProcessor !== !1 &&
        (t = Ip.handle(
          u,
          t,
          r,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(n),
                },
                ...n,
              }
            : n,
          this
        )),
      t
    )
  }
  resolve(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n,
      o,
      i,
      a,
      s
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((u) => {
        if (this.isValidLookup(n)) return
        const l = this.extractFromKey(u, r),
          c = l.key
        o = c
        let f = l.namespaces
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS))
        const p = r.count !== void 0 && typeof r.count != 'string',
          m =
            p &&
            !r.ordinal &&
            r.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          D =
            r.context !== void 0 &&
            (typeof r.context == 'string' || typeof r.context == 'number') &&
            r.context !== '',
          w = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
                r.fallbackLng
              )
        f.forEach((S) => {
          this.isValidLookup(n) ||
            ((s = S),
            !jc[`${w[0]}-${S}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((jc[`${w[0]}-${S}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${w.join(', ')}" won't get resolved as namespace "${s}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            w.forEach((y) => {
              if (this.isValidLookup(n)) return
              a = y
              const h = [c]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, y, S, r)
              else {
                let B
                p && (B = this.pluralResolver.getSuffix(y, r.count, r))
                const j = `${this.options.pluralSeparator}zero`,
                  I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (p &&
                    (h.push(c + B),
                    r.ordinal &&
                      B.indexOf(I) === 0 &&
                      h.push(c + B.replace(I, this.options.pluralSeparator)),
                    m && h.push(c + j)),
                  D)
                ) {
                  const F = `${c}${this.options.contextSeparator}${r.context}`
                  h.push(F),
                    p &&
                      (h.push(F + B),
                      r.ordinal &&
                        B.indexOf(I) === 0 &&
                        h.push(F + B.replace(I, this.options.pluralSeparator)),
                      m && h.push(F + j))
                }
              }
              let x
              for (; (x = h.pop()); )
                this.isValidLookup(n) ||
                  ((i = x), (n = this.getResource(y, S, x, r)))
            }))
        })
      }),
      { res: n, usedKey: o, exactUsedKey: i, usedLng: a, usedNS: s }
    )
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    )
  }
  getResource(t, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, r, n, o)
      : this.resourceStore.getResource(t, r, n, o)
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const r = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      n = t.replace && typeof t.replace != 'string'
    let o = n ? t.replace : t
    if (
      (n && typeof t.count < 'u' && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !n)
    ) {
      o = { ...o }
      for (const i of r) delete o[i]
    }
    return o
  }
  static hasDefaultValue(t) {
    const r = 'defaultValue'
    for (const n in t)
      if (
        Object.prototype.hasOwnProperty.call(t, n) &&
        r === n.substring(0, r.length) &&
        t[n] !== void 0
      )
        return !0
    return !1
  }
}
const Va = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class Rc {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Bt.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = Mi(t)), !t || t.indexOf('-') < 0)) return null
    const r = t.split('-')
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = Mi(t)), !t || t.indexOf('-') < 0)) return t
    const r = t.split('-')
    return this.formatLanguageCode(r[0])
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const r = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let n = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (n = n.map((o) => o.toLowerCase()))
          : n.length === 2
            ? ((n[0] = n[0].toLowerCase()),
              (n[1] = n[1].toUpperCase()),
              r.indexOf(n[1].toLowerCase()) > -1 &&
                (n[1] = Va(n[1].toLowerCase())))
            : n.length === 3 &&
              ((n[0] = n[0].toLowerCase()),
              n[1].length === 2 && (n[1] = n[1].toUpperCase()),
              n[0] !== 'sgn' &&
                n[2].length === 2 &&
                (n[2] = n[2].toUpperCase()),
              r.indexOf(n[1].toLowerCase()) > -1 &&
                (n[1] = Va(n[1].toLowerCase())),
              r.indexOf(n[2].toLowerCase()) > -1 &&
                (n[2] = Va(n[2].toLowerCase()))),
        n.join('-')
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    )
  }
  getBestMatchFromCodes(t) {
    if (!t) return null
    let r
    return (
      t.forEach((n) => {
        if (r) return
        const o = this.formatLanguageCode(n)
        ;(!this.options.supportedLngs || this.isSupportedCode(o)) && (r = o)
      }),
      !r &&
        this.options.supportedLngs &&
        t.forEach((n) => {
          if (r) return
          const o = this.getLanguagePartFromCode(n)
          if (this.isSupportedCode(o)) return (r = o)
          r = this.options.supportedLngs.find((i) => {
            if (i === o) return i
            if (
              !(i.indexOf('-') < 0 && o.indexOf('-') < 0) &&
              ((i.indexOf('-') > 0 &&
                o.indexOf('-') < 0 &&
                i.substring(0, i.indexOf('-')) === o) ||
                (i.indexOf(o) === 0 && o.length > 1))
            )
              return i
          })
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    )
  }
  getFallbackCodes(t, r) {
    if (!t) return []
    if (
      (typeof t == 'function' && (t = t(r)),
      typeof t == 'string' && (t = [t]),
      Array.isArray(t))
    )
      return t
    if (!r) return t.default || []
    let n = t[r]
    return (
      n || (n = t[this.getScriptPartFromCode(r)]),
      n || (n = t[this.formatLanguageCode(r)]),
      n || (n = t[this.getLanguagePartFromCode(r)]),
      n || (n = t.default),
      n || []
    )
  }
  toResolveHierarchy(t, r) {
    const n = this.getFallbackCodes(r || this.options.fallbackLng || [], t),
      o = [],
      i = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? o.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`
              ))
      }
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            i(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            i(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && i(this.formatLanguageCode(t)),
      n.forEach((a) => {
        o.indexOf(a) < 0 && i(this.formatLanguageCode(a))
      }),
      o
    )
  }
}
let f0 = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  p0 = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  }
const h0 = ['v1', 'v2', 'v3'],
  g0 = ['v4'],
  Oc = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  m0 = () => {
    const e = {}
    return (
      f0.forEach((t) => {
        t.lngs.forEach((r) => {
          e[r] = { numbers: t.nr, plurals: p0[t.fc] }
        })
      }),
      e
    )
  }
class y0 {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = r),
      (this.logger = Bt.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        g0.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = m0()),
      (this.pluralRulesCache = {})
  }
  addRule(t, r) {
    this.rules[t] = r
  }
  clearCache() {
    this.pluralRulesCache = {}
  }
  getRule(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (this.shouldUseIntlApi())
      try {
        const n = Mi(t === 'dev' ? 'en' : t),
          o = r.ordinal ? 'ordinal' : 'cardinal',
          i = JSON.stringify({ cleanedCode: n, type: o })
        if (i in this.pluralRulesCache) return this.pluralRulesCache[i]
        const a = new Intl.PluralRules(n, { type: o })
        return (this.pluralRulesCache[i] = a), a
      } catch {
        return
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    )
  }
  needsPlural(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const n = this.getRule(t, r)
    return this.shouldUseIntlApi()
      ? n && n.resolvedOptions().pluralCategories.length > 1
      : n && n.numbers.length > 1
  }
  getPluralFormsOfKey(t, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(t, n).map((o) => `${r}${o}`)
  }
  getSuffixes(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const n = this.getRule(t, r)
    return n
      ? this.shouldUseIntlApi()
        ? n
            .resolvedOptions()
            .pluralCategories.sort((o, i) => Oc[o] - Oc[i])
            .map(
              (o) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${o}`
            )
        : n.numbers.map((o) => this.getSuffix(t, o, r))
      : []
  }
  getSuffix(t, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const o = this.getRule(t, n)
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${o.select(r)}`
        : this.getSuffixRetroCompatible(o, r)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, r) {
    const n = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r))
    let o = t.numbers[n]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = 'plural') : o === 1 && (o = ''))
    const i = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString()
    return this.options.compatibilityJSON === 'v1'
      ? o === 1
        ? ''
        : typeof o == 'number'
          ? `_plural_${o.toString()}`
          : i()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1)
        ? i()
        : this.options.prepend && n.toString()
          ? this.options.prepend + n.toString()
          : n.toString()
  }
  shouldUseIntlApi() {
    return !h0.includes(this.options.compatibilityJSON)
  }
}
const _c = function (e, t, r) {
    let n =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = i0(e, t, r)
    return (
      !i &&
        o &&
        typeof r == 'string' &&
        ((i = Ks(e, r, n)), i === void 0 && (i = Ks(t, r, n))),
      i
    )
  },
  Wa = (e) => e.replace(/\$/g, '$$$$')
class v0 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Bt.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((r) => r)),
      this.init(t)
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    t.interpolation || (t.interpolation = { escapeValue: !0 })
    const {
      escape: r,
      escapeValue: n,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: a,
      suffix: s,
      suffixEscaped: u,
      formatSeparator: l,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: p,
      nestingPrefixEscaped: m,
      nestingSuffix: D,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: S,
      maxReplaces: y,
      alwaysFormat: h,
    } = t.interpolation
    ;(this.escape = r !== void 0 ? r : s0),
      (this.escapeValue = n !== void 0 ? n : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? $r(i) : a || '{{'),
      (this.suffix = s ? $r(s) : u || '}}'),
      (this.formatSeparator = l || ','),
      (this.unescapePrefix = c ? '' : f || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = p ? $r(p) : m || $r('$t(')),
      (this.nestingSuffix = D ? $r(D) : w || $r(')')),
      (this.nestingOptionsSeparator = S || ','),
      (this.maxReplaces = y || 1e3),
      (this.alwaysFormat = h !== void 0 ? h : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const t = (r, n) =>
      r && r.source === n ? ((r.lastIndex = 0), r) : new RegExp(n, 'g')
    ;(this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ))
  }
  interpolate(t, r, n, o) {
    let i, a, s
    const u =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      l = (m) => {
        if (m.indexOf(this.formatSeparator) < 0) {
          const y = _c(
            r,
            u,
            m,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          )
          return this.alwaysFormat
            ? this.format(y, void 0, n, { ...o, ...r, interpolationkey: m })
            : y
        }
        const D = m.split(this.formatSeparator),
          w = D.shift().trim(),
          S = D.join(this.formatSeparator).trim()
        return this.format(
          _c(
            r,
            u,
            w,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          S,
          n,
          { ...o, ...r, interpolationkey: w }
        )
      }
    this.resetRegExp()
    const c =
        (o && o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (m) => Wa(m) },
        {
          regex: this.regexp,
          safeValue: (m) => (this.escapeValue ? Wa(this.escape(m)) : Wa(m)),
        },
      ].forEach((m) => {
        for (s = 0; (i = m.regex.exec(t)); ) {
          const D = i[1].trim()
          if (((a = l(D)), a === void 0))
            if (typeof c == 'function') {
              const S = c(t, i, o)
              a = typeof S == 'string' ? S : ''
            } else if (o && Object.prototype.hasOwnProperty.call(o, D)) a = ''
            else if (f) {
              a = i[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${D} for interpolating ${t}`
              ),
                (a = '')
          else typeof a != 'string' && !this.useRawValueToEscape && (a = Tc(a))
          const w = m.safeValue(a)
          if (
            ((t = t.replace(i[0], w)),
            f
              ? ((m.regex.lastIndex += a.length),
                (m.regex.lastIndex -= i[0].length))
              : (m.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break
        }
      }),
      t
    )
  }
  nest(t, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      a
    const s = (u, l) => {
      const c = this.nestingOptionsSeparator
      if (u.indexOf(c) < 0) return u
      const f = u.split(new RegExp(`${c}[ ]*{`))
      let p = `{${f[1]}`
      ;(u = f[0]), (p = this.interpolate(p, a))
      const m = p.match(/'/g),
        D = p.match(/"/g)
      ;((m && m.length % 2 === 0 && !D) || D.length % 2 !== 0) &&
        (p = p.replace(/'/g, '"'))
      try {
        ;(a = JSON.parse(p)), l && (a = { ...l, ...a })
      } catch (w) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${u}`,
            w
          ),
          `${u}${c}${p}`
        )
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        u
      )
    }
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let u = []
      ;(a = { ...n }),
        (a = a.replace && typeof a.replace != 'string' ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue
      let l = !1
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const c = o[1].split(this.formatSeparator).map((f) => f.trim())
        ;(o[1] = c.shift()), (u = c), (l = !0)
      }
      if (
        ((i = r(s.call(this, o[1].trim(), a), a)),
        i && o[0] === t && typeof i != 'string')
      )
        return i
      typeof i != 'string' && (i = Tc(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = '')),
        l &&
          (i = u.reduce(
            (c, f) =>
              this.format(c, f, n.lng, { ...n, interpolationkey: o[1].trim() }),
            i.trim()
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const D0 = (e) => {
    let t = e.toLowerCase().trim()
    const r = {}
    if (e.indexOf('(') > -1) {
      const n = e.split('(')
      t = n[0].toLowerCase().trim()
      const o = n[1].substring(0, n[1].length - 1)
      t === 'currency' && o.indexOf(':') < 0
        ? r.currency || (r.currency = o.trim())
        : t === 'relativetime' && o.indexOf(':') < 0
          ? r.range || (r.range = o.trim())
          : o.split(';').forEach((a) => {
              if (a) {
                const [s, ...u] = a.split(':'),
                  l = u
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  c = s.trim()
                r[c] || (r[c] = l),
                  l === 'false' && (r[c] = !1),
                  l === 'true' && (r[c] = !0),
                  isNaN(l) || (r[c] = parseInt(l, 10))
              }
            })
    }
    return { formatName: t, formatOptions: r }
  },
  Mr = (e) => {
    const t = {}
    return (r, n, o) => {
      let i = o
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = { ...i, [o.interpolationkey]: void 0 })
      const a = n + JSON.stringify(i)
      let s = t[a]
      return s || ((s = e(Mi(n), o)), (t[a] = s)), s(r)
    }
  }
class x0 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Bt.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Mr((r, n) => {
          const o = new Intl.NumberFormat(r, { ...n })
          return (i) => o.format(i)
        }),
        currency: Mr((r, n) => {
          const o = new Intl.NumberFormat(r, { ...n, style: 'currency' })
          return (i) => o.format(i)
        }),
        datetime: Mr((r, n) => {
          const o = new Intl.DateTimeFormat(r, { ...n })
          return (i) => o.format(i)
        }),
        relativetime: Mr((r, n) => {
          const o = new Intl.RelativeTimeFormat(r, { ...n })
          return (i) => o.format(i, n.range || 'day')
        }),
        list: Mr((r, n) => {
          const o = new Intl.ListFormat(r, { ...n })
          return (i) => o.format(i)
        }),
      }),
      this.init(t)
  }
  init(t) {
    const n = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation
    this.formatSeparator = n.formatSeparator
      ? n.formatSeparator
      : n.formatSeparator || ','
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = Mr(r)
  }
  format(t, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const i = r.split(this.formatSeparator)
    if (
      i.length > 1 &&
      i[0].indexOf('(') > 1 &&
      i[0].indexOf(')') < 0 &&
      i.find((s) => s.indexOf(')') > -1)
    ) {
      const s = i.findIndex((u) => u.indexOf(')') > -1)
      i[0] = [i[0], ...i.splice(1, s)].join(this.formatSeparator)
    }
    return i.reduce((s, u) => {
      const { formatName: l, formatOptions: c } = D0(u)
      if (this.formats[l]) {
        let f = s
        try {
          const p =
              (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            m = p.locale || p.lng || o.locale || o.lng || n
          f = this.formats[l](s, m, { ...c, ...o, ...p })
        } catch (p) {
          this.logger.warn(p)
        }
        return f
      } else this.logger.warn(`there was no format function for ${l}`)
      return s
    }, t)
  }
}
const C0 = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class A0 extends da {
  constructor(t, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = r),
      (this.services = n),
      (this.languageUtils = n.languageUtils),
      (this.options = o),
      (this.logger = Bt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(n, o.backend, o)
  }
  queueLoad(t, r, n, o) {
    const i = {},
      a = {},
      s = {},
      u = {}
    return (
      t.forEach((l) => {
        let c = !0
        r.forEach((f) => {
          const p = `${l}|${f}`
          !n.reload && this.store.hasResourceBundle(l, f)
            ? (this.state[p] = 2)
            : this.state[p] < 0 ||
              (this.state[p] === 1
                ? a[p] === void 0 && (a[p] = !0)
                : ((this.state[p] = 1),
                  (c = !1),
                  a[p] === void 0 && (a[p] = !0),
                  i[p] === void 0 && (i[p] = !0),
                  u[f] === void 0 && (u[f] = !0)))
        }),
          c || (s[l] = !0)
      }),
      (Object.keys(i).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(u),
      }
    )
  }
  loaded(t, r, n) {
    const o = t.split('|'),
      i = o[0],
      a = o[1]
    r && this.emit('failedLoading', i, a, r),
      !r &&
        n &&
        this.store.addResourceBundle(i, a, n, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = r ? -1 : 2),
      r && n && (this.state[t] = 0)
    const s = {}
    this.queue.forEach((u) => {
      o0(u.loaded, [i], a),
        C0(u, t),
        r && u.errors.push(r),
        u.pendingCount === 0 &&
          !u.done &&
          (Object.keys(u.loaded).forEach((l) => {
            s[l] || (s[l] = {})
            const c = u.loaded[l]
            c.length &&
              c.forEach((f) => {
                s[l][f] === void 0 && (s[l][f] = !0)
              })
          }),
          (u.done = !0),
          u.errors.length ? u.callback(u.errors) : u.callback())
    }),
      this.emit('loaded', s),
      (this.queue = this.queue.filter((u) => !u.done))
  }
  read(t, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      a = arguments.length > 5 ? arguments[5] : void 0
    if (!t.length) return a(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: r,
        fcName: n,
        tried: o,
        wait: i,
        callback: a,
      })
      return
    }
    this.readingCalls++
    const s = (l, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift()
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
        }
        if (l && c && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, r, n, o + 1, i * 2, a)
          }, i)
          return
        }
        a(l, c)
      },
      u = this.backend[n].bind(this.backend)
    if (u.length === 2) {
      try {
        const l = u(t, r)
        l && typeof l.then == 'function'
          ? l.then((c) => s(null, c)).catch(s)
          : s(null, l)
      } catch (l) {
        s(l)
      }
      return
    }
    return u(t, r, s)
  }
  prepareLoading(t, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        o && o()
      )
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof r == 'string' && (r = [r])
    const i = this.queueLoad(t, r, n, o)
    if (!i.toLoad.length) return i.pending.length || o(), null
    i.toLoad.forEach((a) => {
      this.loadOne(a)
    })
  }
  load(t, r, n) {
    this.prepareLoading(t, r, {}, n)
  }
  reload(t, r, n) {
    this.prepareLoading(t, r, { reload: !0 }, n)
  }
  loadOne(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const n = t.split('|'),
      o = n[0],
      i = n[1]
    this.read(o, i, 'read', void 0, void 0, (a, s) => {
      a &&
        this.logger.warn(
          `${r}loading namespace ${i} for language ${o} failed`,
          a
        ),
        !a &&
          s &&
          this.logger.log(`${r}loaded namespace ${i} for language ${o}`, s),
        this.loaded(t, a, s)
    })
  }
  saveMissing(t, r, n, o, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {}
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(r)
    ) {
      this.logger.warn(
        `did not save key "${n}" as the namespace "${r}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      )
      return
    }
    if (!(n == null || n === '')) {
      if (this.backend && this.backend.create) {
        const u = { ...a, isUpdate: i },
          l = this.backend.create.bind(this.backend)
        if (l.length < 6)
          try {
            let c
            l.length === 5 ? (c = l(t, r, n, o, u)) : (c = l(t, r, n, o)),
              c && typeof c.then == 'function'
                ? c.then((f) => s(null, f)).catch(s)
                : s(null, c)
          } catch (c) {
            s(c)
          }
        else l(t, r, n, o, s, u)
      }
      !t || !t[0] || this.store.addResource(t[0], r, n, o)
    }
  }
}
const Ic = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {}
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        typeof e[1] == 'string' && (t.defaultValue = e[1]),
        typeof e[2] == 'string' && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const r = e[3] || e[2]
        Object.keys(r).forEach((n) => {
          t[n] = r[n]
        })
      }
      return t
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  qc = (e) => (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Qo = () => {},
  w0 = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((r) => {
      typeof e[r] == 'function' && (e[r] = e[r].bind(e))
    })
  }
class xo extends da {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = qc(t)),
      (this.services = {}),
      (this.logger = Bt),
      (this.modules = { external: [] }),
      w0(this),
      r && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, r), this
      setTimeout(() => {
        this.init(t, r)
      }, 0)
    }
  }
  init() {
    var t = this
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof r == 'function' && ((n = r), (r = {})),
      !r.defaultNS &&
        r.defaultNS !== !1 &&
        r.ns &&
        (typeof r.ns == 'string'
          ? (r.defaultNS = r.ns)
          : r.ns.indexOf('translation') < 0 && (r.defaultNS = r.ns[0]))
    const o = Ic()
    ;(this.options = { ...o, ...this.options, ...qc(r) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...o.interpolation,
          ...this.options.interpolation,
        }),
      r.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = r.keySeparator),
      r.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = r.nsSeparator)
    const i = (c) => (c ? (typeof c == 'function' ? new c() : c) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? Bt.init(i(this.modules.logger), this.options)
        : Bt.init(null, this.options)
      let c
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < 'u' && (c = x0)
      const f = new Rc(this.options)
      this.store = new Nc(this.options.resources, this.options)
      const p = this.services
      ;(p.logger = Bt),
        (p.resourceStore = this.store),
        (p.languageUtils = f),
        (p.pluralResolver = new y0(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((p.formatter = i(c)),
          p.formatter.init(p, this.options),
          (this.options.interpolation.format = p.formatter.format.bind(
            p.formatter
          ))),
        (p.interpolator = new v0(this.options)),
        (p.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (p.backendConnector = new A0(
          i(this.modules.backend),
          p.resourceStore,
          p,
          this.options
        )),
        p.backendConnector.on('*', function (m) {
          for (
            var D = arguments.length, w = new Array(D > 1 ? D - 1 : 0), S = 1;
            S < D;
            S++
          )
            w[S - 1] = arguments[S]
          t.emit(m, ...w)
        }),
        this.modules.languageDetector &&
          ((p.languageDetector = i(this.modules.languageDetector)),
          p.languageDetector.init &&
            p.languageDetector.init(p, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((p.i18nFormat = i(this.modules.i18nFormat)),
          p.i18nFormat.init && p.i18nFormat.init(this)),
        (this.translator = new Ui(this.services, this.options)),
        this.translator.on('*', function (m) {
          for (
            var D = arguments.length, w = new Array(D > 1 ? D - 1 : 0), S = 1;
            S < D;
            S++
          )
            w[S - 1] = arguments[S]
          t.emit(m, ...w)
        }),
        this.modules.external.forEach((m) => {
          m.init && m.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = Qo),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      )
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0])
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t
        }
      })
    const u = Nn(),
      l = () => {
        const c = (f, p) => {
          ;(this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            u.resolve(p),
            n(f, p)
        }
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, c)
      }
    return (
      this.options.resources || !this.options.initImmediate
        ? l()
        : setTimeout(l, 0),
      u
    )
  }
  loadResources(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qo
    const o = typeof t == 'string' ? t : this.language
    if (
      (typeof t == 'function' && (n = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o &&
        o.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return n()
      const i = [],
        a = (s) => {
          if (!s || s === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(s).forEach((l) => {
            l !== 'cimode' && i.indexOf(l) < 0 && i.push(l)
          })
        }
      o
        ? a(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((u) => a(u)),
        this.options.preload && this.options.preload.forEach((s) => a(s)),
        this.services.backendConnector.load(i, this.options.ns, (s) => {
          !s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            n(s)
        })
    } else n(null)
  }
  reloadResources(t, r, n) {
    const o = Nn()
    return (
      typeof t == 'function' && ((n = t), (t = void 0)),
      typeof r == 'function' && ((n = r), (r = void 0)),
      t || (t = this.languages),
      r || (r = this.options.ns),
      n || (n = Qo),
      this.services.backendConnector.reload(t, r, (i) => {
        o.resolve(), n(i)
      }),
      o
    )
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      )
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      )
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && Ip.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    )
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let r = 0; r < this.languages.length; r++) {
        const n = this.languages[r]
        if (
          !(['cimode', 'dev'].indexOf(n) > -1) &&
          this.store.hasLanguageSomeTranslations(n)
        ) {
          this.resolvedLanguage = n
          break
        }
      }
  }
  changeLanguage(t, r) {
    var n = this
    this.isLanguageChangingTo = t
    const o = Nn()
    this.emit('languageChanging', t)
    const i = (u) => {
        ;(this.language = u),
          (this.languages = this.services.languageUtils.toResolveHierarchy(u)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(u)
      },
      a = (u, l) => {
        l
          ? (i(l),
            this.translator.changeLanguage(l),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', l),
            this.logger.log('languageChanged', l))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return n.t(...arguments)
          }),
          r &&
            r(u, function () {
              return n.t(...arguments)
            })
      },
      s = (u) => {
        !t && !u && this.services.languageDetector && (u = [])
        const l =
          typeof u == 'string'
            ? u
            : this.services.languageUtils.getBestMatchFromCodes(u)
        l &&
          (this.language || i(l),
          this.translator.language || this.translator.changeLanguage(l),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(l)),
          this.loadResources(l, (c) => {
            a(c, l)
          })
      }
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(s)
            : this.services.languageDetector.detect(s)
          : s(t),
      o
    )
  }
  getFixedT(t, r, n) {
    var o = this
    const i = function (a, s) {
      let u
      if (typeof s != 'object') {
        for (
          var l = arguments.length, c = new Array(l > 2 ? l - 2 : 0), f = 2;
          f < l;
          f++
        )
          c[f - 2] = arguments[f]
        u = o.options.overloadTranslationOptionHandler([a, s].concat(c))
      } else u = { ...s }
      ;(u.lng = u.lng || i.lng),
        (u.lngs = u.lngs || i.lngs),
        (u.ns = u.ns || i.ns),
        u.keyPrefix !== '' && (u.keyPrefix = u.keyPrefix || n || i.keyPrefix)
      const p = o.options.keySeparator || '.'
      let m
      return (
        u.keyPrefix && Array.isArray(a)
          ? (m = a.map((D) => `${u.keyPrefix}${p}${D}`))
          : (m = u.keyPrefix ? `${u.keyPrefix}${p}${a}` : a),
        o.t(m, u)
      )
    }
    return (
      typeof t == 'string' ? (i.lng = t) : (i.lngs = t),
      (i.ns = r),
      (i.keyPrefix = n),
      i
    )
  }
  t() {
    return this.translator && this.translator.translate(...arguments)
  }
  exists() {
    return this.translator && this.translator.exists(...arguments)
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t
  }
  hasLoadedNamespace(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      )
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      )
    const n = r.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1]
    if (n.toLowerCase() === 'cimode') return !0
    const a = (s, u) => {
      const l = this.services.backendConnector.state[`${s}|${u}`]
      return l === -1 || l === 0 || l === 2
    }
    if (r.precheck) {
      const s = r.precheck(this, a)
      if (s !== void 0) return s
    }
    return !!(
      this.hasResourceBundle(n, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(n, t) && (!o || a(i, t)))
    )
  }
  loadNamespaces(t, r) {
    const n = Nn()
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
        }),
        this.loadResources((o) => {
          n.resolve(), r && r(o)
        }),
        n)
      : (r && r(), Promise.resolve())
  }
  loadLanguages(t, r) {
    const n = Nn()
    typeof t == 'string' && (t = [t])
    const o = this.options.preload || [],
      i = t.filter(
        (a) =>
          o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a)
      )
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((a) => {
          n.resolve(), r && r(a)
        }),
        n)
      : (r && r(), Promise.resolve())
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl'
    const r = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      n = (this.services && this.services.languageUtils) || new Rc(Ic())
    return r.indexOf(n.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    return new xo(t, r)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qo
    const n = t.forkResourceStore
    n && delete t.forkResourceStore
    const o = { ...this.options, ...t, isClone: !0 },
      i = new xo(o)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ['store', 'services', 'language'].forEach((s) => {
        i[s] = this[s]
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      n &&
        ((i.store = new Nc(this.store.data, o)),
        (i.services.resourceStore = i.store)),
      (i.translator = new Ui(i.services, o)),
      i.translator.on('*', function (s) {
        for (
          var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), c = 1;
          c < u;
          c++
        )
          l[c - 1] = arguments[c]
        i.emit(s, ...l)
      }),
      i.init(o, r),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    )
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    }
  }
}
const Pe = xo.createInstance()
Pe.createInstance = xo.createInstance
Pe.createInstance
Pe.dir
Pe.init
Pe.loadResources
Pe.reloadResources
Pe.use
Pe.changeLanguage
Pe.getFixedT
Pe.t
Pe.exists
Pe.setDefaultNamespace
Pe.hasLoadedNamespace
Pe.loadNamespaces
Pe.loadLanguages
const b0 = (...e) => {
    console != null &&
      console.warn &&
      (kr(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
  },
  $c = {},
  Ys = (...e) => {
    ;(kr(e[0]) && $c[e[0]]) || (kr(e[0]) && ($c[e[0]] = new Date()), b0(...e))
  },
  qp = (e, t) => () => {
    if (e.isInitialized) t()
    else {
      const r = () => {
        setTimeout(() => {
          e.off('initialized', r)
        }, 0),
          t()
      }
      e.on('initialized', r)
    }
  },
  Mc = (e, t, r) => {
    e.loadNamespaces(t, qp(e, r))
  },
  Uc = (e, t, r, n) => {
    kr(r) && (r = [r]),
      r.forEach((o) => {
        e.options.ns.indexOf(o) < 0 && e.options.ns.push(o)
      }),
      e.loadLanguages(t, qp(e, n))
  },
  E0 = (e, t, r = {}) =>
    !t.languages || !t.languages.length
      ? (Ys('i18n.languages were undefined or empty', t.languages), !0)
      : t.hasLoadedNamespace(e, {
          lng: r.lng,
          precheck: (n, o) => {
            var i
            if (
              ((i = r.bindI18n) == null
                ? void 0
                : i.indexOf('languageChanging')) > -1 &&
              n.services.backendConnector.backend &&
              n.isLanguageChangingTo &&
              !o(n.isLanguageChangingTo, e)
            )
              return !1
          },
        }),
  kr = (e) => typeof e == 'string',
  S0 = (e) => typeof e == 'object' && e !== null,
  k0 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  B0 = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  T0 = (e) => B0[e],
  F0 = (e) => e.replace(k0, T0)
let Qs = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: F0,
}
const L0 = (e = {}) => {
    Qs = { ...Qs, ...e }
  },
  P0 = () => Qs
let $p
const N0 = (e) => {
    $p = e
  },
  j0 = () => $p,
  R0 = {
    type: '3rdParty',
    init(e) {
      L0(e.options.react), N0(e)
    },
  },
  O0 = T.createContext()
class _0 {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(t) {
    t.forEach((r) => {
      var n
      ;(n = this.usedNamespaces)[r] ?? (n[r] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}
const I0 = (e, t) => {
    const r = T.useRef()
    return (
      T.useEffect(() => {
        r.current = e
      }, [e, t]),
      r.current
    )
  },
  Mp = (e, t, r, n) => e.getFixedT(t, r, n),
  q0 = (e, t, r, n) => T.useCallback(Mp(e, t, r, n), [e, t, r, n]),
  Xe = (e, t = {}) => {
    var B, j, I, F
    const { i18n: r } = t,
      { i18n: n, defaultNS: o } = T.useContext(O0) || {},
      i = r || n || j0()
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new _0()), !i)) {
      Ys(
        'You will need to pass in an i18next instance by using initReactI18next'
      )
      const _ = ($, O) =>
          kr(O)
            ? O
            : S0(O) && kr(O.defaultValue)
              ? O.defaultValue
              : Array.isArray($)
                ? $[$.length - 1]
                : $,
        P = [_, {}, !1]
      return (P.t = _), (P.i18n = {}), (P.ready = !1), P
    }
    ;(B = i.options.react) != null &&
      B.wait &&
      Ys(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      )
    const a = { ...P0(), ...i.options.react, ...t },
      { useSuspense: s, keyPrefix: u } = a
    let l = o || ((j = i.options) == null ? void 0 : j.defaultNS)
    ;(l = kr(l) ? [l] : l || ['translation']),
      (F = (I = i.reportNamespaces).addUsedNamespaces) == null || F.call(I, l)
    const c =
        (i.isInitialized || i.initializedStoreOnce) &&
        l.every((_) => E0(_, i, a)),
      f = q0(i, t.lng || null, a.nsMode === 'fallback' ? l : l[0], u),
      p = () => f,
      m = () => Mp(i, t.lng || null, a.nsMode === 'fallback' ? l : l[0], u),
      [D, w] = T.useState(p)
    let S = l.join()
    t.lng && (S = `${t.lng}${S}`)
    const y = I0(S),
      h = T.useRef(!0)
    T.useEffect(() => {
      const { bindI18n: _, bindI18nStore: P } = a
      ;(h.current = !0),
        !c &&
          !s &&
          (t.lng
            ? Uc(i, t.lng, l, () => {
                h.current && w(m)
              })
            : Mc(i, l, () => {
                h.current && w(m)
              })),
        c && y && y !== S && h.current && w(m)
      const $ = () => {
        h.current && w(m)
      }
      return (
        _ && (i == null || i.on(_, $)),
        P && (i == null || i.store.on(P, $)),
        () => {
          ;(h.current = !1),
            i && (_ == null || _.split(' ').forEach((O) => i.off(O, $))),
            P && i && P.split(' ').forEach((O) => i.store.off(O, $))
        }
      )
    }, [i, S]),
      T.useEffect(() => {
        h.current && c && w(p)
      }, [i, u, c])
    const x = [D, i, c]
    if (((x.t = D), (x.i18n = i), (x.ready = c), c || (!c && !s))) return x
    throw new Promise((_) => {
      t.lng ? Uc(i, t.lng, l, () => _()) : Mc(i, l, () => _())
    })
  },
  { slice: $0, forEach: M0 } = []
function U0(e) {
  return (
    M0.call($0.call(arguments, 1), (t) => {
      if (t) for (const r in t) e[r] === void 0 && (e[r] = t[r])
    }),
    e
  )
}
const zc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  z0 = (e, t, r) => {
    const n = r || {}
    n.path = n.path || '/'
    const o = encodeURIComponent(t)
    let i = `${e}=${o}`
    if (n.maxAge > 0) {
      const a = n.maxAge - 0
      if (Number.isNaN(a)) throw new Error('maxAge should be a Number')
      i += `; Max-Age=${Math.floor(a)}`
    }
    if (n.domain) {
      if (!zc.test(n.domain)) throw new TypeError('option domain is invalid')
      i += `; Domain=${n.domain}`
    }
    if (n.path) {
      if (!zc.test(n.path)) throw new TypeError('option path is invalid')
      i += `; Path=${n.path}`
    }
    if (n.expires) {
      if (typeof n.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid')
      i += `; Expires=${n.expires.toUTCString()}`
    }
    if (
      (n.httpOnly && (i += '; HttpOnly'),
      n.secure && (i += '; Secure'),
      n.sameSite)
    )
      switch (
        typeof n.sameSite == 'string' ? n.sameSite.toLowerCase() : n.sameSite
      ) {
        case !0:
          i += '; SameSite=Strict'
          break
        case 'lax':
          i += '; SameSite=Lax'
          break
        case 'strict':
          i += '; SameSite=Strict'
          break
        case 'none':
          i += '; SameSite=None'
          break
        default:
          throw new TypeError('option sameSite is invalid')
      }
    return i
  },
  Hc = {
    create(e, t, r, n) {
      let o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' }
      r &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)),
        n && (o.domain = n),
        (document.cookie = z0(e, encodeURIComponent(t), o))
    },
    read(e) {
      const t = `${e}=`,
        r = document.cookie.split(';')
      for (let n = 0; n < r.length; n++) {
        let o = r[n]
        for (; o.charAt(0) === ' '; ) o = o.substring(1, o.length)
        if (o.indexOf(t) === 0) return o.substring(t.length, o.length)
      }
      return null
    },
    remove(e) {
      this.create(e, '', -1)
    },
  }
var H0 = {
    name: 'cookie',
    lookup(e) {
      let { lookupCookie: t } = e
      if (t && typeof document < 'u') return Hc.read(t) || void 0
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: r,
        cookieMinutes: n,
        cookieDomain: o,
        cookieOptions: i,
      } = t
      r && typeof document < 'u' && Hc.create(r, e, n, o, i)
    },
  },
  V0 = {
    name: 'querystring',
    lookup(e) {
      var n
      let { lookupQuerystring: t } = e,
        r
      if (typeof window < 'u') {
        let { search: o } = window.location
        !window.location.search &&
          ((n = window.location.hash) == null ? void 0 : n.indexOf('?')) > -1 &&
          (o = window.location.hash.substring(
            window.location.hash.indexOf('?')
          ))
        const a = o.substring(1).split('&')
        for (let s = 0; s < a.length; s++) {
          const u = a[s].indexOf('=')
          u > 0 && a[s].substring(0, u) === t && (r = a[s].substring(u + 1))
        }
      }
      return r
    },
  }
let jn = null
const Vc = () => {
  if (jn !== null) return jn
  try {
    jn = window !== 'undefined' && window.localStorage !== null
    const e = 'i18next.translate.boo'
    window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e)
  } catch {
    jn = !1
  }
  return jn
}
var W0 = {
  name: 'localStorage',
  lookup(e) {
    let { lookupLocalStorage: t } = e
    if (t && Vc()) return window.localStorage.getItem(t) || void 0
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: r } = t
    r && Vc() && window.localStorage.setItem(r, e)
  },
}
let Rn = null
const Wc = () => {
  if (Rn !== null) return Rn
  try {
    Rn = window !== 'undefined' && window.sessionStorage !== null
    const e = 'i18next.translate.boo'
    window.sessionStorage.setItem(e, 'foo'), window.sessionStorage.removeItem(e)
  } catch {
    Rn = !1
  }
  return Rn
}
var G0 = {
    name: 'sessionStorage',
    lookup(e) {
      let { lookupSessionStorage: t } = e
      if (t && Wc()) return window.sessionStorage.getItem(t) || void 0
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: r } = t
      r && Wc() && window.sessionStorage.setItem(r, e)
    },
  },
  K0 = {
    name: 'navigator',
    lookup(e) {
      const t = []
      if (typeof navigator < 'u') {
        const { languages: r, userLanguage: n, language: o } = navigator
        if (r) for (let i = 0; i < r.length; i++) t.push(r[i])
        n && t.push(n), o && t.push(o)
      }
      return t.length > 0 ? t : void 0
    },
  },
  Y0 = {
    name: 'htmlTag',
    lookup(e) {
      let { htmlTag: t } = e,
        r
      const n = t || (typeof document < 'u' ? document.documentElement : null)
      return (
        n &&
          typeof n.getAttribute == 'function' &&
          (r = n.getAttribute('lang')),
        r
      )
    },
  },
  Q0 = {
    name: 'path',
    lookup(e) {
      var o
      let { lookupFromPathIndex: t } = e
      if (typeof window > 'u') return
      const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
      return Array.isArray(r)
        ? (o = r[typeof t == 'number' ? t : 0]) == null
          ? void 0
          : o.replace('/', '')
        : void 0
    },
  },
  J0 = {
    name: 'subdomain',
    lookup(e) {
      var o, i
      let { lookupFromSubdomainIndex: t } = e
      const r = typeof t == 'number' ? t + 1 : 1,
        n =
          typeof window < 'u' &&
          ((i = (o = window.location) == null ? void 0 : o.hostname) == null
            ? void 0
            : i.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i))
      if (n) return n[r]
    },
  }
function Z0() {
  return {
    order: [
      'querystring',
      'cookie',
      'localStorage',
      'sessionStorage',
      'navigator',
      'htmlTag',
    ],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    convertDetectedLanguage: (e) => e,
  }
}
class Up {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.type = 'languageDetector'), (this.detectors = {}), this.init(t, r)
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    ;(this.services = t || { languageUtils: {} }),
      (this.options = U0(r, this.options || {}, Z0())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (o) => o.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = n),
      this.addDetector(H0),
      this.addDetector(V0),
      this.addDetector(W0),
      this.addDetector(G0),
      this.addDetector(K0),
      this.addDetector(Y0),
      this.addDetector(Q0),
      this.addDetector(J0)
  }
  addDetector(t) {
    return (this.detectors[t.name] = t), this
  }
  detect(t) {
    t || (t = this.options.order)
    let r = []
    return (
      t.forEach((n) => {
        if (this.detectors[n]) {
          let o = this.detectors[n].lookup(this.options)
          o && typeof o == 'string' && (o = [o]), o && (r = r.concat(o))
        }
      }),
      (r = r.map((n) => this.options.convertDetectedLanguage(n))),
      this.services.languageUtils.getBestMatchFromCodes
        ? r
        : r.length > 0
          ? r[0]
          : null
    )
  }
  cacheUserLanguage(t, r) {
    r || (r = this.options.caches),
      r &&
        ((this.options.excludeCacheFor &&
          this.options.excludeCacheFor.indexOf(t) > -1) ||
          r.forEach((n) => {
            this.detectors[n] &&
              this.detectors[n].cacheUserLanguage(t, this.options)
          }))
  }
}
Up.type = 'languageDetector'
const X0 = {
    home: 'Home',
    about: 'About author',
    books: 'Books',
    historyArchives: 'Archive',
    blog: 'Blog',
    links: 'Links',
    languages: 'Languages',
    english: 'English',
    spanish: 'Spanish',
    catalan: 'Catalan',
    italian: 'Italian',
    french: 'French',
    privacyPolicy: 'Privacy Policy',
    contact: 'Contact',
    buscadorPlaceHolder: 'Search on the website...',
    buscadorCerca: 'Search',
    compromisQualitat: 'Commitment of Responsability',
  },
  e1 = {
    PaginaTitol: 'Bookmarks',
    Categories: 'Categories:',
    Topics: 'Topics:',
    showAllLinks: 'View All',
    web: 'Website',
    url: 'URL',
    categoria: 'Category',
    idioma: 'Language',
    tema: 'Topic',
    tipus: 'Type',
    data: 'Modification Date',
    refreshTable: 'Refresh Data',
  },
  t1 = {
    titolPagina: 'Recommended Books',
    year: 'Publication Year',
    originalLanguage: 'Original Language',
    autor: 'Author',
    tematica: 'Main Theme',
    allGenres: 'All Genres',
    genres: 'Filter by Genre',
    languages: 'Filter by Language',
    allLanguages: 'All Languages',
    esborrar: 'Cancel Results',
    titolCercador: 'Book Search',
    cercadorPlaceHolder: 'Search by Book Title',
    paginaAutors: "You can check the authors' page",
    bookDetailsBtn: 'View more Book Details',
    title: 'Title in English',
    author: 'Author',
    language: 'Original Language',
    genre: 'Category',
    topic: 'Topic',
    editorial: 'Publisher',
    tipusLlibre: 'Type',
  },
  r1 = {
    titolPagina: 'All Authors',
    countries: 'Filter by Country of Origin',
    allCountries: 'All Countries',
    professions: 'Filter by Profession',
    allProfessions: 'All Professions',
    country: 'Country',
    profession: 'Profession',
    yearBorn: 'Year of Birth',
    yearDie: 'Year of Death',
    description: 'Description',
    wikipedia: 'Wikipedia Page',
    booksByAuthor: 'Books by the Author',
    authorDetailsBtn: 'View More Author Details',
  },
  n1 = {
    titolPB: 'We release the contents to the Public Domain',
    PBurl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    textPB:
      'All the contents of this web page are published and sent to the public domain by renouncing all rights to the work in relation to intellectual property, including related rights, as far as it is possible with the applicable law applicable. You can copy, modify, distribute the work and make public communication, even for commercial purposes, without asking for any kind of permission.',
    textAbout:
      'Open History is an independent publishing project that offers readers free access history courses.',
  },
  o1 = {
    titol: 'Welcome at ElliotFern.com!',
    missatge:
      'We and our partners store and/or access information on your device through cookies, and process personal data, such as unique identifiers and standard information to gather audience insights. With your consent, we and our partners may use location and identification data through device scanning. You can click to give your consent to our processing. Alternatively, you can click to refuse consent.',
    acceptar: 'Accept and close',
    rebutjar: 'Reject and close',
    policy: 'Learn more',
  },
  i1 = {
    title: 'Search results for ',
    subTitol: 'You are searching articles in English',
    errorEmptyQuery: 'Search error, please try making a new search.',
    noResults: 'No results found, please try making a new search.',
    loading: 'Loading search results.',
  },
  a1 = {
    titleSeo: 'Elliot Fernandez - Web Developer and Historian',
    descripcioSeo:
      'The website of Web Developer and Historian Elliot Fernandez, where you can view his works and history articles.',
    webTitle:
      "👋 Hi, I'm Elliot Fernandez, front-end web developer and historian.",
    webTitleHistoriaOberta: 'Open History',
    historiaOberta:
      'Open History is an independent publishing project that offers its readers free access to history articles on many different courses. You can now read the history articles on this website.',
    webLinkCourse: 'See all articles',
  },
  s1 = {
    index: 'Table of Contents',
    articleNoDisponible:
      'Sorry, but this content is not available at the moment.',
    curs: 'Course: ',
  },
  u1 = {
    descripcioAutor:
      "I was born in 1987 in Terrassa (Barcelona). In 2009, I graduated in Modern and Contemporary History from the Autonomous University of Barcelona, and in 2011, I completed a Master's in World History at Pompeu Fabra University. Professionally, I am a web developer specializing in Front-end technologies. Since 2017, I have been working on web projects as a freelancer at HispanTIC.",
  },
  l1 = 'Posted on',
  c1 = 'Modified on',
  d1 = 'Comments',
  f1 = 'Course not available',
  p1 = 'This course is in preparation',
  h1 = 'Course contents:',
  g1 = 'There is no content available for this course',
  m1 = 'Data Creation Date',
  y1 = 'Data Modification Date',
  v1 = {
    nav: X0,
    link: e1,
    book: t1,
    bookAuthors: r1,
    footer: n1,
    cookieBanner: o1,
    search: i1,
    homepage: a1,
    article: s1,
    AuthorBox: u1,
    webPostDate: l1,
    webPostModified: c1,
    webCommentsText: d1,
    webCursNameError: f1,
    webCursDescripcioError: p1,
    webwebCursContingut: h1,
    webwebCursContingutError: g1,
    dataCreacio: m1,
    dataModificacio: y1,
  },
  D1 = {
    home: 'Inicio',
    about: 'Sobre el autor',
    books: 'Libros',
    historyArchives: 'Archivos',
    blog: 'Blog',
    links: 'Links',
    languages: 'Idiomas',
    english: 'Inglés',
    spanish: 'Español',
    catalan: 'Catalán',
    italian: 'Italiano',
    french: 'Francés',
    privacyPolicy: 'Política de Privacidad',
    contact: 'Contacto',
    buscadorPlaceHolder: 'Buscar en la web...',
    buscadorCerca: 'Buscar',
    compromisQualitat: 'Compromiso de Responsabilidad',
  },
  x1 = {
    PaginaTitol: 'Enlaces de Interés',
    Categories: 'Categorías:',
    Topics: 'Temas:',
    showAllLinks: 'Ver Todos',
    web: 'Página web',
    url: 'URL',
    categoria: 'Categoría',
    idioma: 'Idioma',
    tema: 'Tema',
    tipus: 'Tipo',
    data: 'Fecha de Modificación',
    refreshTable: 'Actualizar Datos',
  },
  C1 = {
    titolPagina: 'Libros recomendados',
    year: 'Año de publicación',
    originalLanguage: 'Idioma original',
    autor: 'Autor/a',
    tematica: 'Temática principal',
    allGenres: 'Todos los géneros',
    genres: 'Filtrar por género',
    languages: 'Filtrar por idioma',
    allLanguages: 'Todos los idiomas',
    esborrar: 'Cancelar resultados',
    titolCercador: 'Buscador de libros',
    cercadorPlaceHolder: 'Buscar por título del libro',
    paginaAutors: 'Puedes consultar la página de autores/as',
    bookDetailsBtn: 'Ver más detalles del libro',
    title: 'Título en inglés',
    author: 'Autor/a',
    language: 'Idioma original',
    genre: 'Categoría',
    topic: 'Tema',
    editorial: 'Editorial',
    tipusLlibre: 'Tipo',
  },
  A1 = {
    titolPagina: 'Todos los Autores/as',
    countries: 'Filtrar por país de origen',
    allCountries: 'Todos los países',
    professions: 'Filtrar por profesión',
    allProfessions: 'Todas las profesiones',
    country: 'País',
    profession: 'Profesión',
    yearBorn: 'Año de nacimiento',
    yearDie: 'Año de defunción',
    description: 'Descripción',
    wikipedia: 'Página de Wikipedia',
    booksByAuthor: 'Libros del autor/a',
    authorDetailsBtn: 'Ver más detalles del autor/a',
  },
  w1 = {
    titolPB: 'Esta página web libera sus contenidos al Dominio Público',
    PBurl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.es',
    textPB:
      'Todos los contenidos de esta página web se publican y se hacen llegar al dominio público renunciando a todos los derechos sobre la obra en relación con la propiedad intelectual, incluidos los derechos relacionados, en la medida en que sea posible según la ley aplicable. Puedes copiar, modificar, distribuir la obra y hacer comunicación pública, incluso con fines comerciales, sin pedir ningún tipo de permiso.',
    textAbout:
      'Historia Abierta es un proyecto editorial independiente que ofrece a los lectores acceso gratuito a cursos de historia.',
  },
  b1 = {
    titol: 'Bienvenidos a ElliotFern.com!',
    missatge:
      'Nosotros y nuestros socios almacenamos y/o accedemos a información en su dispositivo a través de cookies, y procesamos datos personales, como identificadores únicos e información estándar para obtener información sobre la audiencia. Con su permiso, nosotros y nuestros socios podemos utilizar datos de localización e identificación mediante el escaneo del dispositivo. Puede hacer clic para dar su consentimiento a nuestro procesamiento. Alternativamente, puede hacer clic para negarse a dar su consentimiento.',
    acceptar: 'Aceptar y cerrar',
    rebutjar: 'Rechazar y cerrar',
    policy: 'Saber más',
  },
  E1 = {
    title: 'Resultados de la búsqueda para ',
    subTitol: 'Estás buscando artículos en español',
    errorEmptyQuery:
      'Error en la búsqueda, por favor, prueba a hacer una nueva búsqueda.',
    noResults:
      'No hemos encontrado resultados, por favor, prueba a hacer una nueva búsqueda.',
    loading: 'Cargando los resultados de la búsqueda.',
  },
  S1 = {
    titleSeo: 'Elliot Fernandez - Desarrollador web e Historiador',
    descripcioSeo:
      'Página web del Desarrollador e historiador Elliot Fernandez, donde podrás ver sus trabajos y artículos de historia.',
    webTitle:
      '👋 Hola, soy Elliot Fernandez, desarrollador Web especializado en front-end e historiador.',
    webTitleHistoriaOberta: 'Historia Abierta',
    historiaOberta:
      'Historia Abierta es un proyecto de publicación independiente que ofrece a sus lectores acceso gratuito a artículos de Historia en muchos cursos diferentes. Ahora puedes leer los artículos de historia en este sitio web.',
    webLinkCourse: 'Ver todos los artículos',
  },
  k1 = {
    index: 'Índice de contenidos',
    articleNoDisponible:
      'Lo sentimos, pero este contenido no está disponible en este momento.',
    curs: 'Curso: ',
  },
  B1 = {
    descripcioAutor:
      'Nací en el año 1987 en Terrassa (Barcelona). En el año 2009 me licencié en Historia Moderna y Contemporánea en la Universidad Autónoma de Barcelona y en 2011 completé el Máster en Historia del Mundo en la Universidad Pompeu Fabra. Profesionalmente soy desarrollador web especializado en tecnologías de Front-end. Desde 2017 trabajo realizando proyectos web como freelance en HispanTIC.',
  },
  T1 = 'Publicado el',
  F1 = 'Modificado el',
  L1 = 'Comentarios',
  P1 = 'Curso no disponible',
  N1 = 'Este curso está en preparación',
  j1 = 'Contenidos del curso:',
  R1 = 'No hay contenido disponible en este curso',
  O1 = 'Fecha de creación del registro',
  _1 = 'Fecha de modificación de los datos',
  I1 = {
    nav: D1,
    link: x1,
    book: C1,
    bookAuthors: A1,
    footer: w1,
    cookieBanner: b1,
    search: E1,
    homepage: S1,
    article: k1,
    AuthorBox: B1,
    webPostDate: T1,
    webPostModified: F1,
    webCommentsText: L1,
    webCursNameError: P1,
    webCursDescripcioError: N1,
    webwebCursContingut: j1,
    webwebCursContingutError: R1,
    dataCreacio: O1,
    dataModificacio: _1,
  },
  q1 = {
    home: 'Inici',
    about: "Sobre l'autor",
    books: 'Llibres',
    historyArchives: 'Arxius',
    blog: 'Blog',
    links: 'Enllaços',
    languages: 'Idiomes',
    english: 'Anglès',
    spanish: 'Castellà',
    catalan: 'Català',
    italian: 'Italià',
    french: 'Francès',
    privacyPolicy: 'Política de Privacitat',
    contact: 'Contacte',
    buscadorPlaceHolder: 'Cercar al web...',
    buscadorCerca: 'Cerca',
    compromisQualitat: 'Compromís de Responsabilitat',
  },
  $1 = {
    PaginaTitol: "Enllaços d'interès",
    Categories: 'Categories:',
    Topics: 'Temes:',
    showAllLinks: "Veure'ls tots",
    web: 'Pàgina web',
    url: 'URL',
    categoria: 'Categoria',
    idioma: 'Idioma',
    tema: 'Tema',
    tipus: 'Tipus',
    data: 'Data de modificació',
    refreshTable: 'Actualitzar dades',
    buscar: 'Cercador',
  },
  M1 = {
    titolPagina: 'Llibres recomanats',
    year: 'Any de publicació',
    originalLanguage: 'Idioma original',
    autor: 'Autor/a',
    tematica: 'Temàtica principal',
    allGenres: 'Tots els gèneres',
    genres: 'Filtrar per gènere',
    languages: 'Filtrar per idioma',
    allLanguages: 'Tots els idiomes',
    esborrar: 'Cancel·lar resultats',
    titolCercador: 'Cercador de llibres',
    cercadorPlaceHolder: 'Cercar per títol del llibre',
    paginaAutors: "Pots consultar la pàgina d'autors/es",
    bookDetailsBtn: 'Veure més detalls del llibre',
    title: 'Títol en anglès',
    author: 'Autor/a',
    language: 'Idioma original',
    genre: 'Categoria',
    topic: 'Tema',
    editorial: 'Editorial',
    tipusLlibre: 'Tipus',
  },
  U1 = {
    titolPB: 'Aquesta pàgina web allibera els seus continguts al Domini Públic',
    PBurl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.ca',
    textPB:
      "Tots els continguts d'aquesta pàgina web es publiquen i es fan arribar al domini públic renunciant a tots els drets sobre l'obra en relació amb la propietat intel·lectual, incloent els drets relacionats, tant com sigui possible amb la llei aplicable. Podeu copiar, modificar, distribuir l'obra i fer comunicació pública, fins i tot amb fins comercials, sense demanar cap tipus de permís.",
    textAbout:
      "Història Oberta és un projecte editorial independent que ofereix als lectors accés gratuït a cursos d'història.",
  },
  z1 = {
    titolPagina: 'Tots els Autors/es',
    countries: "Filtrar per país d'orígen",
    allCountries: 'Tots els països',
    professions: 'Filtrar per professió',
    allProfessions: 'Totes les professions',
    country: 'País',
    profession: 'Professió',
    yearBorn: 'Any de naixement',
    yearDie: 'Any de defunció',
    description: 'Descripció',
    wikipedia: 'Pàgina Viquipèdia',
    booksByAuthor: "Llibres de l'autor/a",
    authorDetailsBtn: "Veure més detalls de l'autor/a",
    moviment: 'Corrent/moviment',
  },
  H1 = {
    titol: 'Benvinguts a ElliotFern.com!',
    missatge:
      "Nosaltres i els nostres socis emmagatzemem i/o accedim a informació al seu dispositiu a través de cookies, i processem dades personals, com identificadors únics i informació estàndard per tenir informació sobre l'audiència. Amb el vostre permís, nosaltres i els nostres socis podem utilitzar dades de localització i identificació mitjançant l'escaneig del dispositiu. Podeu fer clic per donar el vostre consentiment al nostre processament. Alternativament, podeu fer clic per negar-se a donar el vostre consentiment.",
    acceptar: 'Acceptar i tancar',
    rebutjar: 'Rebutjar i tancar',
    policy: 'Saber-ne més',
  },
  V1 = {
    title: 'Resultats de la cerca per a ',
    subTitol: "Estàs fent una cerca d'articles en català",
    errorEmptyQuery:
      'Error en la cerca, si us plau, prova a fer una nova recerca.',
    noResults:
      'No hem trobat cap resultat, si us plau, prova a fer una nova recerca.',
    loading: 'Carregant els resultats de la cerca.',
  },
  W1 = {
    titleSeo: 'Elliot Fernandez - Desenvolupador web i Historiador',
    descripcioSeo:
      "Pàgina web del Desenvolupador i historiador Elliot Fernandez, on podràs veure els seus treballs i articles d'història.",
    webTitle:
      "👋 Hola, sóc l'Elliot Fernandez, desenvolupador Web especialitzat en front-end i historiador.",
    webTitleHistoriaOberta: 'Història Oberta',
    historiaOberta:
      "Història Oberta és un projecte de publicació independent que ofereix als seus lectors accés gratuït a articles d'Història en molts cursos diferents. Ara podeu llegir els articles d'història en aquest lloc web.",
    webLinkCourse: 'Veure tots els articles',
  },
  G1 = {
    index: 'Índex de continguts',
    articleNoDisponible:
      'Ho sentim, però aquest contingut no està disponible en aquest moment.',
    curs: 'Curs: ',
  },
  K1 = {
    descripcioAutor:
      "Vaig nèixer l'any 1987 a Terrassa (Barcelona). L'any 2009 em vaig llicenciar en Història Moderna i Contemporània a la Universitat Autònoma de Barcelona i el 2011 vaig completar el Màster en Història del Món de la Universitat Pompeu Fabra. Professionalment sóc desenvolupador web especialitzat en tecnologies del Front-end. Des de 2017 treballo fent projectes web com a freelance a HispanTIC.",
  },
  Y1 = 'Publicat el',
  Q1 = 'Modificat el',
  J1 = 'Comentaris',
  Z1 = 'Curs no disponible',
  X1 = 'Aquest curs està en preparació',
  ey = 'Continguts del curs:',
  ty = 'No hi ha cap contingut disponible en aquest curs',
  ry = 'Data creació de la fitxa',
  ny = 'Data modificació de les dades',
  oy = {
    nav: q1,
    link: $1,
    book: M1,
    footer: U1,
    bookAuthors: z1,
    cookieBanner: H1,
    search: V1,
    homepage: W1,
    article: G1,
    AuthorBox: K1,
    webPostDate: Y1,
    webPostModified: Q1,
    webCommentsText: J1,
    webCursNameError: Z1,
    webCursDescripcioError: X1,
    webwebCursContingut: ey,
    webwebCursContingutError: ty,
    dataCreacio: ry,
    dataModificacio: ny,
  },
  iy = {
    home: 'Accueil',
    about: "À propos de l'auteur",
    books: 'Livres',
    historyArchives: 'Archives',
    blog: 'Blog',
    links: 'Links',
    languages: 'Langues',
    english: 'Anglais',
    spanish: 'Espagnol',
    catalan: 'Catalan',
    italian: 'Italien',
    french: 'Français',
    privacyPolicy: 'Politique de confidentialité',
    contact: 'Contact',
    buscadorPlaceHolder: 'Chercher sur le site...',
    buscadorCerca: 'Chercher',
    compromisQualitat: 'Engagement de responsabilité',
  },
  ay = {
    PaginaTitol: "Liens d'Intérêt",
    Categories: 'Catégories :',
    Topics: 'Sujets :',
    showAllLinks: 'Voir Tous',
    web: 'Page Web',
    url: 'URL',
    categoria: 'Catégorie',
    idioma: 'Langue',
    tema: 'Sujet',
    tipus: 'Type',
    data: 'Date de Modification',
    refreshTable: 'Mettre à Jour les Données',
  },
  sy = {
    titolPagina: 'Livres recommandés',
    year: 'Année de publication',
    originalLanguage: 'Langue originale',
    autor: 'Auteur/e',
    tematica: 'Thématique principale',
    allGenres: 'Tous les genres',
    genres: 'Filtrer par genre',
    languages: 'Filtrer par langue',
    allLanguages: 'Toutes les langues',
    esborrar: 'Annuler les résultats',
    titolCercador: 'Moteur de recherche de livres',
    cercadorPlaceHolder: 'Rechercher par titre du livre',
    paginaAutors: 'Vous pouvez consulter la page des auteurs/trices',
    bookDetailsBtn: 'Voir plus de détails sur le livre',
    title: 'Titre en anglais',
    author: 'Auteur(e)',
    language: 'Langue originale',
    genre: 'Catégorie',
    topic: 'Sujet',
    editorial: 'Éditeur',
    tipusLlibre: 'Type',
  },
  uy = {
    titolPagina: 'Tous les Auteurs/trices',
    countries: "Filtrer par pays d'origine",
    allCountries: 'Tous les pays',
    professions: 'Filtrer par profession',
    allProfessions: 'Toutes les professions',
    country: 'Pays',
    profession: 'Profession',
    yearBorn: 'Année de naissance',
    yearDie: 'Année de décès',
    description: 'Description',
    wikipedia: 'Page Wikipédia',
    booksByAuthor: "Livres de l'auteur(e)",
    authorDetailsBtn: "Voir plus de détails sur l'auteur(e)",
  },
  ly = {
    titolPB: 'Cette page web libère ses contenus dans le Domaine Public',
    PBurl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.fr',
    textPB:
      "Tous les contenus de cette page web sont publiés et envoyés dans le domaine public en renonçant à tous les droits sur l'œuvre en relation avec la propriété intellectuelle, y compris les droits connexes, autant que possible selon la loi applicable. Vous pouvez copier, modifier, distribuer l'œuvre et faire une communication publique, même à des fins commerciales, sans demander de permission.",
    textAbout:
      "Histoire Ouverte est un projet d'édition indépendant qui offre aux lecteurs un accès gratuit à des cours d'histoire.",
  },
  cy = {
    titol: 'Bienvenue sur ElliotFern.com !',
    missatge:
      "Nous et nos partenaires stockons et/ou accédons à des informations sur votre appareil via des cookies, et traitons des données personnelles, telles que des identifiants uniques et des informations standard pour obtenir des informations sur l'audience. Avec votre consentement, nous et nos partenaires pouvons utiliser des données de localisation et d'identification via la numérisation de l'appareil. Vous pouvez cliquer pour donner votre consentement à notre traitement. Sinon, vous pouvez cliquer pour refuser le consentement.",
    acceptar: 'Accepter et fermer',
    rebutjar: 'Refuser et fermer',
    policy: 'En savoir plus',
  },
  dy = {
    title: 'Résultats de recherche pour ',
    subTitol: 'Vous recherchez des articles en français',
    errorEmptyQuery:
      'Erreur de recherche, veuillez essayer de faire une nouvelle recherche.',
    noResults:
      'Aucun résultat trouvé, veuillez essayer de faire une nouvelle recherche.',
    loading: 'Chargement des résultats de la recherche.',
  },
  fy = {
    titleSeo: 'Elliot Fernandez - Développeur web et Historien',
    descripcioSeo:
      "Le site web du Développeur web et Historien Elliot Fernandez, où vous pouvez voir ses travaux et articles d'histoire.",
    webTitle:
      "👋 Bonjour, je m'appelle Elliot Fernandez, développeur web front-end et historien.",
    webTitleHistoriaOberta: 'Histoire Ouverte',
    historiaOberta:
      "Histoire Ouverte est un projet de publication indépendant qui offre à ses lecteurs un accès gratuit aux articles d'histoire sur de nombreux cours différents. Vous pouvez maintenant lire les articles d'histoire sur ce site web.",
    webLinkCourse: 'Voir tous les articles',
  },
  py = {
    index: 'Table des matières',
    articleNoDisponible:
      "Désolé, mais ce contenu n'est pas disponible pour le moment.",
    curs: 'Course: ',
  },
  hy = {
    descripcioAutor:
      "Je suis né en 1987 à Terrassa (Barcelone). En 2009, j'ai obtenu une licence en Histoire Moderne et Contemporaine à l'Université Autonome de Barcelone, et en 2011, j'ai terminé le Master en Histoire du Monde à l'Université Pompeu Fabra. Professionnellement, je suis développeur web spécialisé dans les technologies Front-end. Depuis 2017, je travaille en tant que freelance sur des projets web chez HispanTIC.",
  },
  gy = 'Publié le',
  my = 'Modifié le',
  yy = 'Commentaires',
  vy = 'Cours non disponible',
  Dy = 'Ce cours est en préparation',
  xy = 'Contenus du cours :',
  Cy = 'Aucun contenu disponible dans ce cours',
  Ay = "Date de création de l'enregistrement",
  wy = 'Date de modification des données',
  by = {
    nav: iy,
    link: ay,
    book: sy,
    bookAuthors: uy,
    footer: ly,
    cookieBanner: cy,
    search: dy,
    homepage: fy,
    article: py,
    AuthorBox: hy,
    webPostDate: gy,
    webPostModified: my,
    webCommentsText: yy,
    webCursNameError: vy,
    webCursDescripcioError: Dy,
    webwebCursContingut: xy,
    webwebCursContingutError: Cy,
    dataCreacio: Ay,
    dataModificacio: wy,
  },
  Ey = {
    home: 'Home',
    about: "Informazioni sull'autore",
    books: 'Libri',
    historyArchives: 'Archivi',
    blog: 'Blog',
    links: 'Links',
    languages: 'Lingue',
    english: 'Inglese',
    spanish: 'Spagnolo',
    catalan: 'Catalano',
    italian: 'Italiano',
    french: 'Francese',
    privacyPolicy: 'Informativa sulla privacy',
    contact: 'Contatto',
    buscadorPlaceHolder: 'Cerca nel sito web...',
    buscadorCerca: 'Cerca',
    compromisQualitat: 'Impegno di responsabilità',
  },
  Sy = {
    PaginaTitol: 'Collegamenti di Interesse',
    Categories: 'Categorie :',
    Topics: 'Argomenti :',
    showAllLinks: 'Mostra Tutti',
    web: 'Sito Web',
    url: 'URL',
    categoria: 'Categoria',
    idioma: 'Lingua',
    tema: 'Argomento',
    tipus: 'Tipo',
    data: 'Data di Modifica',
    refreshTable: 'Aggiorna Dati',
  },
  ky = {
    titolPagina: 'Libri consigliati',
    year: 'Anno di pubblicazione',
    originalLanguage: 'Lingua originale',
    autor: 'Autore/a',
    tematica: 'Tema principale',
    allGenres: 'Tutti i generi',
    genres: 'Filtra per genere',
    languages: 'Filtra per lingua',
    allLanguages: 'Tutte le lingue',
    esborrar: 'Annulla risultati',
    titolCercador: 'Cerca libri',
    cercadorPlaceHolder: 'Cerca per titolo del libro',
    paginaAutors: 'Puoi consultare la pagina degli autori/autrici',
    bookDetailsBtn: 'Vedi più dettagli sul libro',
    title: 'Titolo in inglese',
    author: 'Autore/Autrice',
    language: 'Lingua originale',
    genre: 'Categoria',
    topic: 'Argomento',
    editorial: 'Editore',
    tipusLlibre: 'Tipo',
  },
  By = {
    titolPagina: 'Tutti gli Autori',
    countries: 'Filtra per paese di origine',
    allCountries: 'Tutti i paesi',
    professions: 'Filtra per professione',
    allProfessions: 'Tutte le professioni',
    country: 'Paese',
    profession: 'Professione',
    yearBorn: 'Anno di nascita',
    yearDie: 'Anno di morte',
    description: 'Descrizione',
    wikipedia: 'Pagina Wikipedia',
    booksByAuthor: "Libri dell'autore/autrice",
    authorDetailsBtn: "Vedi più dettagli sull'autore/autrice",
  },
  Ty = {
    titolPB: 'Questa pagina web rilascia i suoi contenuti nel Pubblico Dominio',
    PBurl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.it',
    textPB:
      "Tutti i contenuti di questa pagina web sono pubblicati e inviati nel pubblico dominio rinunciando a tutti i diritti sull'opera in relazione alla proprietà intellettuale, compresi i diritti connessi, per quanto possibile secondo la legge applicabile. Puoi copiare, modificare, distribuire l'opera e fare comunicazione pubblica, anche per fini commerciali, senza chiedere alcun tipo di permesso.",
    textAbout:
      'Storia Aperta è un progetto editoriale indipendente che offre ai lettori accesso gratuito a corsi di storia.',
  },
  Fy = {
    titol: 'Benvenuto su ElliotFern.com!',
    missatge:
      'Noi e i nostri partner memorizziamo e/o accediamo a informazioni sul tuo dispositivo tramite cookie e trattiamo dati personali, come identificatori univoci e informazioni standard per ottenere informazioni sul pubblico. Con il tuo permesso, noi e i nostri partner possiamo utilizzare dati di localizzazione e identificazione tramite la scansione del dispositivo. Puoi fare clic per dare il tuo consenso al nostro trattamento. In alternativa, puoi fare clic per rifiutare il consenso.',
    acceptar: 'Accetta e chiudi',
    rebutjar: 'Rifiuta e chiudi',
    policy: 'Scopri di più',
  },
  Ly = {
    title: 'Cerca risultati per ',
    subTitol: 'Stai cercando articoli in italiano',
    errorEmptyQuery:
      'Errore nella ricerca, per favore prova a fare una nuova ricerca.',
    noResults:
      'Nessun risultato trovato, per favore prova a fare una nuova ricerca.',
    loading: 'Caricando i risultati della ricerca.',
  },
  Py = {
    titleSeo: 'Elliot Fernandez - Sviluppatore Web e Storico',
    descripcioSeo:
      'Sito web dello sviluppatore web e storico Elliot Fernandez, dove puoi vedere i suoi lavori e articoli di storia.',
    webTitle:
      '👋 Ciao, sono Elliot Fernandez, sviluppatore web front-end e storico.',
    webTitleHistoriaOberta: 'Storia Aperta',
    historiaOberta:
      "Storia Aperta è un progetto editoriale indipendente che offre ai suoi lettori l'accesso gratuito a articoli di storia su molti corsi diversi. Ora puoi leggere gli articoli di storia su questo sito web.",
    webLinkCourse: 'Vedi tutti gli articoli',
  },
  Ny = {
    index: 'Indice dei contenuti',
    articleNoDisponible:
      'Ci dispiace, ma questo contenuto non è disponibile al momento.',
    curs: 'Corso: ',
  },
  jy = {
    descripcioAutor:
      "Sono nato nel 1987 a Terrassa (Barcellona). Nel 2009 mi sono laureato in Storia Moderna e Contemporanea presso l'Università Autonoma di Barcellona e nel 2011 ho completato il Master in Storia del Mondo all'Università Pompeu Fabra. Professionalmente sono uno sviluppatore web specializzato in tecnologie Front-end. Dal 2017 lavoro come freelance in progetti web presso HispanTIC",
  },
  Ry = 'Pubblicato il',
  Oy = 'Modificato il',
  _y = 'Commenti',
  Iy = 'Corso non disponibile',
  qy = 'Questo corso è in preparazione',
  $y = 'Contenuti del corso:',
  My = 'Nessun contenuto disponibile in questo corso',
  Uy = 'Data di creazione del record',
  zy = 'Data di modifica dei dati',
  Hy = {
    nav: Ey,
    link: Sy,
    book: ky,
    bookAuthors: By,
    footer: Ty,
    cookieBanner: Fy,
    search: Ly,
    homepage: Py,
    article: Ny,
    AuthorBox: jy,
    webPostDate: Ry,
    webPostModified: Oy,
    webCommentsText: _y,
    webCursNameError: Iy,
    webCursDescripcioError: qy,
    webwebCursContingut: $y,
    webwebCursContingutError: My,
    dataCreacio: Uy,
    dataModificacio: zy,
  },
  Vy = {
    en: { translation: v1 },
    es: { translation: I1 },
    ca: { translation: oy },
    fr: { translation: by },
    it: { translation: Hy },
  }
Pe.use(R0)
  .use(Up)
  .init({
    resources: Vy,
    supportedLngs: ['en', 'es', 'ca', 'fr', 'it'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
    react: { useSuspense: !1 },
  })
var zp = {},
  Hp = {},
  Vp = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
  var t = function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a]
      if (typeof window < 'u') {
        var s
        typeof window.gtag > 'u' &&
          ((window.dataLayer = window.dataLayer || []),
          (window.gtag = function () {
            window.dataLayer.push(arguments)
          })),
          (s = window).gtag.apply(s, i)
      }
    },
    r = t
  e.default = r
})(Vp)
var Wp = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = a)
  var t =
    /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
  function r(s) {
    return s
      .toString()
      .trim()
      .replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (u, l, c) {
        return l > 0 &&
          l + u.length !== c.length &&
          u.search(t) > -1 &&
          c.charAt(l - 2) !== ':' &&
          (c.charAt(l + u.length) !== '-' || c.charAt(l - 1) === '-') &&
          c.charAt(l - 1).search(/[^\s-]/) < 0
          ? u.toLowerCase()
          : u.substr(1).search(/[A-Z]|\../) > -1
            ? u
            : u.charAt(0).toUpperCase() + u.substr(1)
      })
  }
  function n(s) {
    return typeof s == 'string' && s.indexOf('@') !== -1
  }
  var o = 'REDACTED (Potential Email Address)'
  function i(s) {
    return n(s)
      ? (console.warn('This arg looks like an email address, redacting.'), o)
      : s
  }
  function a() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
      u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
      l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      c = s || ''
    return u && (c = r(s)), l && (c = i(c)), c
  }
})(Wp)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.default = e.GA4 = void 0)
  var t = a(Vp),
    r = a(Wp),
    n = ['eventCategory', 'eventAction', 'eventLabel', 'eventValue', 'hitType'],
    o = ['title', 'location'],
    i = ['page', 'hitType']
  function a(E) {
    return E && E.__esModule ? E : { default: E }
  }
  function s(E, v) {
    if (E == null) return {}
    var b = u(E, v),
      k,
      A
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(E)
      for (A = 0; A < g.length; A++)
        (k = g[A]),
          !(v.indexOf(k) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(E, k) &&
            (b[k] = E[k])
    }
    return b
  }
  function u(E, v) {
    if (E == null) return {}
    var b = {},
      k = Object.keys(E),
      A,
      g
    for (g = 0; g < k.length; g++)
      (A = k[g]), !(v.indexOf(A) >= 0) && (b[A] = E[A])
    return b
  }
  function l(E) {
    '@babel/helpers - typeof'
    return (
      (l =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (v) {
              return typeof v
            }
          : function (v) {
              return v &&
                typeof Symbol == 'function' &&
                v.constructor === Symbol &&
                v !== Symbol.prototype
                ? 'symbol'
                : typeof v
            }),
      l(E)
    )
  }
  function c(E) {
    return m(E) || p(E) || h(E) || f()
  }
  function f() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  function p(E) {
    if (
      (typeof Symbol < 'u' && E[Symbol.iterator] != null) ||
      E['@@iterator'] != null
    )
      return Array.from(E)
  }
  function m(E) {
    if (Array.isArray(E)) return x(E)
  }
  function D(E, v) {
    var b = Object.keys(E)
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(E)
      v &&
        (k = k.filter(function (A) {
          return Object.getOwnPropertyDescriptor(E, A).enumerable
        })),
        b.push.apply(b, k)
    }
    return b
  }
  function w(E) {
    for (var v = 1; v < arguments.length; v++) {
      var b = arguments[v] != null ? arguments[v] : {}
      v % 2
        ? D(Object(b), !0).forEach(function (k) {
            P(E, k, b[k])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(b))
          : D(Object(b)).forEach(function (k) {
              Object.defineProperty(E, k, Object.getOwnPropertyDescriptor(b, k))
            })
    }
    return E
  }
  function S(E, v) {
    return j(E) || B(E, v) || h(E, v) || y()
  }
  function y() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  function h(E, v) {
    if (E) {
      if (typeof E == 'string') return x(E, v)
      var b = Object.prototype.toString.call(E).slice(8, -1)
      if (
        (b === 'Object' && E.constructor && (b = E.constructor.name),
        b === 'Map' || b === 'Set')
      )
        return Array.from(E)
      if (
        b === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)
      )
        return x(E, v)
    }
  }
  function x(E, v) {
    ;(v == null || v > E.length) && (v = E.length)
    for (var b = 0, k = new Array(v); b < v; b++) k[b] = E[b]
    return k
  }
  function B(E, v) {
    var b =
      E == null
        ? null
        : (typeof Symbol < 'u' && E[Symbol.iterator]) || E['@@iterator']
    if (b != null) {
      var k,
        A,
        g,
        C,
        L = [],
        R = !0,
        q = !1
      try {
        if (((g = (b = b.call(E)).next), v !== 0))
          for (
            ;
            !(R = (k = g.call(b)).done) && (L.push(k.value), L.length !== v);
            R = !0
          );
      } catch (H) {
        ;(q = !0), (A = H)
      } finally {
        try {
          if (!R && b.return != null && ((C = b.return()), Object(C) !== C))
            return
        } finally {
          if (q) throw A
        }
      }
      return L
    }
  }
  function j(E) {
    if (Array.isArray(E)) return E
  }
  function I(E, v) {
    if (!(E instanceof v))
      throw new TypeError('Cannot call a class as a function')
  }
  function F(E, v) {
    for (var b = 0; b < v.length; b++) {
      var k = v[b]
      ;(k.enumerable = k.enumerable || !1),
        (k.configurable = !0),
        'value' in k && (k.writable = !0),
        Object.defineProperty(E, $(k.key), k)
    }
  }
  function _(E, v, b) {
    return (
      v && F(E.prototype, v),
      Object.defineProperty(E, 'prototype', { writable: !1 }),
      E
    )
  }
  function P(E, v, b) {
    return (
      (v = $(v)),
      v in E
        ? Object.defineProperty(E, v, {
            value: b,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (E[v] = b),
      E
    )
  }
  function $(E) {
    var v = O(E, 'string')
    return l(v) === 'symbol' ? v : String(v)
  }
  function O(E, v) {
    if (l(E) !== 'object' || E === null) return E
    var b = E[Symbol.toPrimitive]
    if (b !== void 0) {
      var k = b.call(E, v || 'default')
      if (l(k) !== 'object') return k
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (v === 'string' ? String : Number)(E)
  }
  var z = (function () {
    function E() {
      var v = this
      I(this, E),
        P(this, 'reset', function () {
          ;(v.isInitialized = !1),
            (v._testMode = !1),
            v._currentMeasurementId,
            (v._hasLoadedGA = !1),
            (v._isQueuing = !1),
            (v._queueGtag = [])
        }),
        P(this, '_gtag', function () {
          for (var b = arguments.length, k = new Array(b), A = 0; A < b; A++)
            k[A] = arguments[A]
          v._testMode || v._isQueuing
            ? v._queueGtag.push(k)
            : t.default.apply(void 0, k)
        }),
        P(this, '_loadGA', function (b, k) {
          var A =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 'https://www.googletagmanager.com/gtag/js'
          if (
            !(typeof window > 'u' || typeof document > 'u') &&
            !v._hasLoadedGA
          ) {
            var g = document.createElement('script')
            ;(g.async = !0),
              (g.src = ''.concat(A, '?id=').concat(b)),
              k && g.setAttribute('nonce', k),
              document.body.appendChild(g),
              (window.dataLayer = window.dataLayer || []),
              (window.gtag = function () {
                window.dataLayer.push(arguments)
              }),
              (v._hasLoadedGA = !0)
          }
        }),
        P(this, '_toGtagOptions', function (b) {
          if (b) {
            var k = {
                cookieUpdate: 'cookie_update',
                cookieExpires: 'cookie_expires',
                cookieDomain: 'cookie_domain',
                cookieFlags: 'cookie_flags',
                userId: 'user_id',
                clientId: 'client_id',
                anonymizeIp: 'anonymize_ip',
                contentGroup1: 'content_group1',
                contentGroup2: 'content_group2',
                contentGroup3: 'content_group3',
                contentGroup4: 'content_group4',
                contentGroup5: 'content_group5',
                allowAdFeatures: 'allow_google_signals',
                allowAdPersonalizationSignals:
                  'allow_ad_personalization_signals',
                nonInteraction: 'non_interaction',
                page: 'page_path',
                hitCallback: 'event_callback',
              },
              A = Object.entries(b).reduce(function (g, C) {
                var L = S(C, 2),
                  R = L[0],
                  q = L[1]
                return k[R] ? (g[k[R]] = q) : (g[R] = q), g
              }, {})
            return A
          }
        }),
        P(this, 'initialize', function (b) {
          var k =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          if (!b) throw new Error('Require GA_MEASUREMENT_ID')
          var A = typeof b == 'string' ? [{ trackingId: b }] : b
          v._currentMeasurementId = A[0].trackingId
          var g = k.gaOptions,
            C = k.gtagOptions,
            L = k.nonce,
            R = k.testMode,
            q = R === void 0 ? !1 : R,
            H = k.gtagUrl
          if (
            ((v._testMode = q),
            q || v._loadGA(v._currentMeasurementId, L, H),
            v.isInitialized ||
              (v._gtag('js', new Date()),
              A.forEach(function (G) {
                var De = w(
                  w(w({}, v._toGtagOptions(w(w({}, g), G.gaOptions))), C),
                  G.gtagOptions
                )
                Object.keys(De).length
                  ? v._gtag('config', G.trackingId, De)
                  : v._gtag('config', G.trackingId)
              })),
            (v.isInitialized = !0),
            !q)
          ) {
            var W = c(v._queueGtag)
            for (v._queueGtag = [], v._isQueuing = !1; W.length; ) {
              var Q = W.shift()
              v._gtag.apply(v, c(Q)), Q[0] === 'get' && (v._isQueuing = !0)
            }
          }
        }),
        P(this, 'set', function (b) {
          if (!b) {
            console.warn('`fieldsObject` is required in .set()')
            return
          }
          if (l(b) !== 'object') {
            console.warn('Expected `fieldsObject` arg to be an Object')
            return
          }
          Object.keys(b).length === 0 &&
            console.warn('empty `fieldsObject` given to .set()'),
            v._gaCommand('set', b)
        }),
        P(this, '_gaCommandSendEvent', function (b, k, A, g, C) {
          v._gtag(
            'event',
            k,
            w(
              w(
                { event_category: b, event_label: A, value: g },
                C && { non_interaction: C.nonInteraction }
              ),
              v._toGtagOptions(C)
            )
          )
        }),
        P(this, '_gaCommandSendEventParameters', function () {
          for (var b = arguments.length, k = new Array(b), A = 0; A < b; A++)
            k[A] = arguments[A]
          if (typeof k[0] == 'string')
            v._gaCommandSendEvent.apply(v, c(k.slice(1)))
          else {
            var g = k[0],
              C = g.eventCategory,
              L = g.eventAction,
              R = g.eventLabel,
              q = g.eventValue
            g.hitType
            var H = s(g, n)
            v._gaCommandSendEvent(C, L, R, q, H)
          }
        }),
        P(this, '_gaCommandSendTiming', function (b, k, A, g) {
          v._gtag('event', 'timing_complete', {
            name: k,
            value: A,
            event_category: b,
            event_label: g,
          })
        }),
        P(this, '_gaCommandSendPageview', function (b, k) {
          if (k && Object.keys(k).length) {
            var A = v._toGtagOptions(k),
              g = A.title,
              C = A.location,
              L = s(A, o)
            v._gtag(
              'event',
              'page_view',
              w(
                w(
                  w(w({}, b && { page_path: b }), g && { page_title: g }),
                  C && { page_location: C }
                ),
                L
              )
            )
          } else
            b
              ? v._gtag('event', 'page_view', { page_path: b })
              : v._gtag('event', 'page_view')
        }),
        P(this, '_gaCommandSendPageviewParameters', function () {
          for (var b = arguments.length, k = new Array(b), A = 0; A < b; A++)
            k[A] = arguments[A]
          if (typeof k[0] == 'string')
            v._gaCommandSendPageview.apply(v, c(k.slice(1)))
          else {
            var g = k[0],
              C = g.page
            g.hitType
            var L = s(g, i)
            v._gaCommandSendPageview(C, L)
          }
        }),
        P(this, '_gaCommandSend', function () {
          for (var b = arguments.length, k = new Array(b), A = 0; A < b; A++)
            k[A] = arguments[A]
          var g = typeof k[0] == 'string' ? k[0] : k[0].hitType
          switch (g) {
            case 'event':
              v._gaCommandSendEventParameters.apply(v, k)
              break
            case 'pageview':
              v._gaCommandSendPageviewParameters.apply(v, k)
              break
            case 'timing':
              v._gaCommandSendTiming.apply(v, c(k.slice(1)))
              break
            case 'screenview':
            case 'transaction':
            case 'item':
            case 'social':
            case 'exception':
              console.warn('Unsupported send command: '.concat(g))
              break
            default:
              console.warn("Send command doesn't exist: ".concat(g))
          }
        }),
        P(this, '_gaCommandSet', function () {
          for (var b = arguments.length, k = new Array(b), A = 0; A < b; A++)
            k[A] = arguments[A]
          typeof k[0] == 'string' && (k[0] = P({}, k[0], k[1])),
            v._gtag('set', v._toGtagOptions(k[0]))
        }),
        P(this, '_gaCommand', function (b) {
          for (
            var k = arguments.length, A = new Array(k > 1 ? k - 1 : 0), g = 1;
            g < k;
            g++
          )
            A[g - 1] = arguments[g]
          switch (b) {
            case 'send':
              v._gaCommandSend.apply(v, A)
              break
            case 'set':
              v._gaCommandSet.apply(v, A)
              break
            default:
              console.warn("Command doesn't exist: ".concat(b))
          }
        }),
        P(this, 'ga', function () {
          for (var b = arguments.length, k = new Array(b), A = 0; A < b; A++)
            k[A] = arguments[A]
          if (typeof k[0] == 'string') v._gaCommand.apply(v, k)
          else {
            var g = k[0]
            v._gtag('get', v._currentMeasurementId, 'client_id', function (C) {
              v._isQueuing = !1
              var L = v._queueGtag
              for (
                g({
                  get: function (H) {
                    return H === 'clientId'
                      ? C
                      : H === 'trackingId'
                        ? v._currentMeasurementId
                        : H === 'apiVersion'
                          ? '1'
                          : void 0
                  },
                });
                L.length;

              ) {
                var R = L.shift()
                v._gtag.apply(v, c(R))
              }
            }),
              (v._isQueuing = !0)
          }
          return v.ga
        }),
        P(this, 'event', function (b, k) {
          if (typeof b == 'string') v._gtag('event', b, v._toGtagOptions(k))
          else {
            var A = b.action,
              g = b.category,
              C = b.label,
              L = b.value,
              R = b.nonInteraction,
              q = b.transport
            if (!g || !A) {
              console.warn(
                'args.category AND args.action are required in event()'
              )
              return
            }
            var H = {
              hitType: 'event',
              eventCategory: (0, r.default)(g),
              eventAction: (0, r.default)(A),
            }
            C && (H.eventLabel = (0, r.default)(C)),
              typeof L < 'u' &&
                (typeof L != 'number'
                  ? console.warn('Expected `args.value` arg to be a Number.')
                  : (H.eventValue = L)),
              typeof R < 'u' &&
                (typeof R != 'boolean'
                  ? console.warn('`args.nonInteraction` must be a boolean.')
                  : (H.nonInteraction = R)),
              typeof q < 'u' &&
                (typeof q != 'string'
                  ? console.warn('`args.transport` must be a string.')
                  : (['beacon', 'xhr', 'image'].indexOf(q) === -1 &&
                      console.warn(
                        '`args.transport` must be either one of these values: `beacon`, `xhr` or `image`'
                      ),
                    (H.transport = q))),
              v._gaCommand('send', H)
          }
        }),
        P(this, 'send', function (b) {
          v._gaCommand('send', b)
        }),
        this.reset()
    }
    return (
      _(E, [
        {
          key: 'gtag',
          value: function () {
            this._gtag.apply(this, arguments)
          },
        },
      ]),
      E
    )
  })()
  e.GA4 = z
  var U = new z()
  e.default = U
})(Hp)
;(function (e) {
  function t(s) {
    '@babel/helpers - typeof'
    return (
      (t =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (u) {
              return typeof u
            }
          : function (u) {
              return u &&
                typeof Symbol == 'function' &&
                u.constructor === Symbol &&
                u !== Symbol.prototype
                ? 'symbol'
                : typeof u
            }),
      t(s)
    )
  }
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.default = e.ReactGAImplementation = void 0)
  var r = o(Hp)
  function n(s) {
    if (typeof WeakMap != 'function') return null
    var u = new WeakMap(),
      l = new WeakMap()
    return (n = function (f) {
      return f ? l : u
    })(s)
  }
  function o(s, u) {
    if (s && s.__esModule) return s
    if (s === null || (t(s) !== 'object' && typeof s != 'function'))
      return { default: s }
    var l = n(u)
    if (l && l.has(s)) return l.get(s)
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor
    for (var p in s)
      if (p !== 'default' && Object.prototype.hasOwnProperty.call(s, p)) {
        var m = f ? Object.getOwnPropertyDescriptor(s, p) : null
        m && (m.get || m.set) ? Object.defineProperty(c, p, m) : (c[p] = s[p])
      }
    return (c.default = s), l && l.set(s, c), c
  }
  var i = r.GA4
  e.ReactGAImplementation = i
  var a = r.default
  e.default = a
})(zp)
const zi = zt(zp)
function Gp(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Wy } = Object.prototype,
  { getPrototypeOf: il } = Object,
  fa = ((e) => (t) => {
    const r = Wy.call(t)
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  bt = (e) => ((e = e.toLowerCase()), (t) => fa(t) === e),
  pa = (e) => (t) => typeof t === e,
  { isArray: wn } = Array,
  Co = pa('undefined')
function Gy(e) {
  return (
    e !== null &&
    !Co(e) &&
    e.constructor !== null &&
    !Co(e.constructor) &&
    ot(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Kp = bt('ArrayBuffer')
function Ky(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Kp(e.buffer)),
    t
  )
}
const Yy = pa('string'),
  ot = pa('function'),
  Yp = pa('number'),
  ha = (e) => e !== null && typeof e == 'object',
  Qy = (e) => e === !0 || e === !1,
  ci = (e) => {
    if (fa(e) !== 'object') return !1
    const t = il(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Jy = bt('Date'),
  Zy = bt('File'),
  Xy = bt('Blob'),
  ev = bt('FileList'),
  tv = (e) => ha(e) && ot(e.pipe),
  rv = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (ot(e.append) &&
          ((t = fa(e)) === 'formdata' ||
            (t === 'object' &&
              ot(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  nv = bt('URLSearchParams'),
  [ov, iv, av, sv] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    bt
  ),
  uv = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function To(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let n, o
  if ((typeof e != 'object' && (e = [e]), wn(e)))
    for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e)
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length
    let s
    for (n = 0; n < a; n++) (s = i[n]), t.call(null, e[s], s, e)
  }
}
function Qp(e, t) {
  t = t.toLowerCase()
  const r = Object.keys(e)
  let n = r.length,
    o
  for (; n-- > 0; ) if (((o = r[n]), t === o.toLowerCase())) return o
  return null
}
const br =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Jp = (e) => !Co(e) && e !== br
function Js() {
  const { caseless: e } = (Jp(this) && this) || {},
    t = {},
    r = (n, o) => {
      const i = (e && Qp(t, o)) || o
      ci(t[i]) && ci(n)
        ? (t[i] = Js(t[i], n))
        : ci(n)
          ? (t[i] = Js({}, n))
          : wn(n)
            ? (t[i] = n.slice())
            : (t[i] = n)
    }
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && To(arguments[n], r)
  return t
}
const lv = (e, t, r, { allOwnKeys: n } = {}) => (
    To(
      t,
      (o, i) => {
        r && ot(o) ? (e[i] = Gp(o, r)) : (e[i] = o)
      },
      { allOwnKeys: n }
    ),
    e
  ),
  cv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  dv = (e, t, r, n) => {
    ;(e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      r && Object.assign(e.prototype, r)
  },
  fv = (e, t, r, n) => {
    let o, i, a
    const s = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!n || n(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0))
      e = r !== !1 && il(e)
    } while (e && (!r || r(e, t)) && e !== Object.prototype)
    return t
  },
  pv = (e, t, r) => {
    ;(e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length)
    const n = e.indexOf(t, r)
    return n !== -1 && n === r
  },
  hv = (e) => {
    if (!e) return null
    if (wn(e)) return e
    let t = e.length
    if (!Yp(t)) return null
    const r = new Array(t)
    for (; t-- > 0; ) r[t] = e[t]
    return r
  },
  gv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && il(Uint8Array)),
  mv = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = n.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  yv = (e, t) => {
    let r
    const n = []
    for (; (r = e.exec(t)) !== null; ) n.push(r)
    return n
  },
  vv = bt('HTMLFormElement'),
  Dv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
      return n.toUpperCase() + o
    }),
  Gc = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  xv = bt('RegExp'),
  Zp = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {}
    To(r, (o, i) => {
      let a
      ;(a = t(o, i, e)) !== !1 && (n[i] = a || o)
    }),
      Object.defineProperties(e, n)
  },
  Cv = (e) => {
    Zp(e, (t, r) => {
      if (ot(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1
      const n = e[r]
      if (ot(n)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'")
          })
      }
    })
  },
  Av = (e, t) => {
    const r = {},
      n = (o) => {
        o.forEach((i) => {
          r[i] = !0
        })
      }
    return wn(e) ? n(e) : n(String(e).split(t)), r
  },
  wv = () => {},
  bv = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ga = 'abcdefghijklmnopqrstuvwxyz',
  Kc = '0123456789',
  Xp = { DIGIT: Kc, ALPHA: Ga, ALPHA_DIGIT: Ga + Ga.toUpperCase() + Kc },
  Ev = (e = 16, t = Xp.ALPHA_DIGIT) => {
    let r = ''
    const { length: n } = t
    for (; e--; ) r += t[(Math.random() * n) | 0]
    return r
  }
function Sv(e) {
  return !!(
    e &&
    ot(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const kv = (e) => {
    const t = new Array(10),
      r = (n, o) => {
        if (ha(n)) {
          if (t.indexOf(n) >= 0) return
          if (!('toJSON' in n)) {
            t[o] = n
            const i = wn(n) ? [] : {}
            return (
              To(n, (a, s) => {
                const u = r(a, o + 1)
                !Co(u) && (i[s] = u)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return n
      }
    return r(e, 0)
  },
  Bv = bt('AsyncFunction'),
  Tv = (e) => e && (ha(e) || ot(e)) && ot(e.then) && ot(e.catch),
  eh = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            br.addEventListener(
              'message',
              ({ source: o, data: i }) => {
                o === br && i === r && n.length && n.shift()()
              },
              !1
            ),
            (o) => {
              n.push(o), br.postMessage(r, '*')
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    ot(br.postMessage)
  ),
  Fv =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(br)
      : (typeof process < 'u' && process.nextTick) || eh,
  N = {
    isArray: wn,
    isArrayBuffer: Kp,
    isBuffer: Gy,
    isFormData: rv,
    isArrayBufferView: Ky,
    isString: Yy,
    isNumber: Yp,
    isBoolean: Qy,
    isObject: ha,
    isPlainObject: ci,
    isReadableStream: ov,
    isRequest: iv,
    isResponse: av,
    isHeaders: sv,
    isUndefined: Co,
    isDate: Jy,
    isFile: Zy,
    isBlob: Xy,
    isRegExp: xv,
    isFunction: ot,
    isStream: tv,
    isURLSearchParams: nv,
    isTypedArray: gv,
    isFileList: ev,
    forEach: To,
    merge: Js,
    extend: lv,
    trim: uv,
    stripBOM: cv,
    inherits: dv,
    toFlatObject: fv,
    kindOf: fa,
    kindOfTest: bt,
    endsWith: pv,
    toArray: hv,
    forEachEntry: mv,
    matchAll: yv,
    isHTMLForm: vv,
    hasOwnProperty: Gc,
    hasOwnProp: Gc,
    reduceDescriptors: Zp,
    freezeMethods: Cv,
    toObjectSet: Av,
    toCamelCase: Dv,
    noop: wv,
    toFiniteNumber: bv,
    findKey: Qp,
    global: br,
    isContextDefined: Jp,
    ALPHABET: Xp,
    generateString: Ev,
    isSpecCompliantForm: Sv,
    toJSONObject: kv,
    isAsyncFn: Bv,
    isThenable: Tv,
    setImmediate: eh,
    asap: Fv,
  }
function Y(e, t, r, n, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    o && ((this.response = o), (this.status = o.status ? o.status : null))
}
N.inherits(Y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    }
  },
})
const th = Y.prototype,
  rh = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  rh[e] = { value: e }
})
Object.defineProperties(Y, rh)
Object.defineProperty(th, 'isAxiosError', { value: !0 })
Y.from = (e, t, r, n, o, i) => {
  const a = Object.create(th)
  return (
    N.toFlatObject(
      e,
      a,
      function (u) {
        return u !== Error.prototype
      },
      (s) => s !== 'isAxiosError'
    ),
    Y.call(a, e.message, t, r, n, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  )
}
const Lv = null
function Zs(e) {
  return N.isPlainObject(e) || N.isArray(e)
}
function nh(e) {
  return N.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Yc(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = nh(o)), !r && i ? '[' + o + ']' : o
        })
        .join(r ? '.' : '')
    : t
}
function Pv(e) {
  return N.isArray(e) && !e.some(Zs)
}
const Nv = N.toFlatObject(N, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function ga(e, t, r) {
  if (!N.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (r = N.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, S) {
        return !N.isUndefined(S[w])
      }
    ))
  const n = r.metaTokens,
    o = r.visitor || c,
    i = r.dots,
    a = r.indexes,
    u = (r.Blob || (typeof Blob < 'u' && Blob)) && N.isSpecCompliantForm(t)
  if (!N.isFunction(o)) throw new TypeError('visitor must be a function')
  function l(D) {
    if (D === null) return ''
    if (N.isDate(D)) return D.toISOString()
    if (!u && N.isBlob(D))
      throw new Y('Blob is not supported. Use a Buffer instead.')
    return N.isArrayBuffer(D) || N.isTypedArray(D)
      ? u && typeof Blob == 'function'
        ? new Blob([D])
        : Buffer.from(D)
      : D
  }
  function c(D, w, S) {
    let y = D
    if (D && !S && typeof D == 'object') {
      if (N.endsWith(w, '{}'))
        (w = n ? w : w.slice(0, -2)), (D = JSON.stringify(D))
      else if (
        (N.isArray(D) && Pv(D)) ||
        ((N.isFileList(D) || N.endsWith(w, '[]')) && (y = N.toArray(D)))
      )
        return (
          (w = nh(w)),
          y.forEach(function (x, B) {
            !(N.isUndefined(x) || x === null) &&
              t.append(
                a === !0 ? Yc([w], B, i) : a === null ? w : w + '[]',
                l(x)
              )
          }),
          !1
        )
    }
    return Zs(D) ? !0 : (t.append(Yc(S, w, i), l(D)), !1)
  }
  const f = [],
    p = Object.assign(Nv, {
      defaultVisitor: c,
      convertValue: l,
      isVisitable: Zs,
    })
  function m(D, w) {
    if (!N.isUndefined(D)) {
      if (f.indexOf(D) !== -1)
        throw Error('Circular reference detected in ' + w.join('.'))
      f.push(D),
        N.forEach(D, function (y, h) {
          ;(!(N.isUndefined(y) || y === null) &&
            o.call(t, y, N.isString(h) ? h.trim() : h, w, p)) === !0 &&
            m(y, w ? w.concat(h) : [h])
        }),
        f.pop()
    }
  }
  if (!N.isObject(e)) throw new TypeError('data must be an object')
  return m(e), t
}
function Qc(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n]
  })
}
function al(e, t) {
  ;(this._pairs = []), e && ga(e, this, t)
}
const oh = al.prototype
oh.append = function (t, r) {
  this._pairs.push([t, r])
}
oh.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, Qc)
      }
    : Qc
  return this._pairs
    .map(function (o) {
      return r(o[0]) + '=' + r(o[1])
    }, '')
    .join('&')
}
function jv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function ih(e, t, r) {
  if (!t) return e
  const n = (r && r.encode) || jv,
    o = r && r.serialize
  let i
  if (
    (o
      ? (i = o(t, r))
      : (i = N.isURLSearchParams(t) ? t.toString() : new al(t, r).toString(n)),
    i)
  ) {
    const a = e.indexOf('#')
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class Jc {
  constructor() {
    this.handlers = []
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    N.forEach(this.handlers, function (n) {
      n !== null && t(n)
    })
  }
}
const ah = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Rv = typeof URLSearchParams < 'u' ? URLSearchParams : al,
  Ov = typeof FormData < 'u' ? FormData : null,
  _v = typeof Blob < 'u' ? Blob : null,
  Iv = {
    isBrowser: !0,
    classes: { URLSearchParams: Rv, FormData: Ov, Blob: _v },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  sl = typeof window < 'u' && typeof document < 'u',
  Xs = (typeof navigator == 'object' && navigator) || void 0,
  qv =
    sl &&
    (!Xs || ['ReactNative', 'NativeScript', 'NS'].indexOf(Xs.product) < 0),
  $v =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Mv = (sl && window.location.href) || 'http://localhost',
  Uv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: sl,
        hasStandardBrowserEnv: qv,
        hasStandardBrowserWebWorkerEnv: $v,
        navigator: Xs,
        origin: Mv,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Qe = { ...Uv, ...Iv }
function zv(e, t) {
  return ga(
    e,
    new Qe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, o, i) {
          return Qe.isNode && N.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function Hv(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  )
}
function Vv(e) {
  const t = {},
    r = Object.keys(e)
  let n
  const o = r.length
  let i
  for (n = 0; n < o; n++) (i = r[n]), (t[i] = e[i])
  return t
}
function sh(e) {
  function t(r, n, o, i) {
    let a = r[i++]
    if (a === '__proto__') return !0
    const s = Number.isFinite(+a),
      u = i >= r.length
    return (
      (a = !a && N.isArray(o) ? o.length : a),
      u
        ? (N.hasOwnProp(o, a) ? (o[a] = [o[a], n]) : (o[a] = n), !s)
        : ((!o[a] || !N.isObject(o[a])) && (o[a] = []),
          t(r, n, o[a], i) && N.isArray(o[a]) && (o[a] = Vv(o[a])),
          !s)
    )
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const r = {}
    return (
      N.forEachEntry(e, (n, o) => {
        t(Hv(n), o, r, 0)
      }),
      r
    )
  }
  return null
}
function Wv(e, t, r) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e)
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n
    }
  return (0, JSON.stringify)(e)
}
const Fo = {
  transitional: ah,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        o = n.indexOf('application/json') > -1,
        i = N.isObject(t)
      if ((i && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)))
        return o ? JSON.stringify(sh(t)) : t
      if (
        N.isArrayBuffer(t) ||
        N.isBuffer(t) ||
        N.isStream(t) ||
        N.isFile(t) ||
        N.isBlob(t) ||
        N.isReadableStream(t)
      )
        return t
      if (N.isArrayBufferView(t)) return t.buffer
      if (N.isURLSearchParams(t))
        return (
          r.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let s
      if (i) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return zv(t, this.formSerializer).toString()
        if ((s = N.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData
          return ga(s ? { 'files[]': t } : t, u && new u(), this.formSerializer)
        }
      }
      return i || o ? (r.setContentType('application/json', !1), Wv(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || Fo.transitional,
        n = r && r.forcedJSONParsing,
        o = this.responseType === 'json'
      if (N.isResponse(t) || N.isReadableStream(t)) return t
      if (t && N.isString(t) && ((n && !this.responseType) || o)) {
        const a = !(r && r.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (s) {
          if (a)
            throw s.name === 'SyntaxError'
              ? Y.from(s, Y.ERR_BAD_RESPONSE, this, null, this.response)
              : s
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Qe.classes.FormData, Blob: Qe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
}
N.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Fo.headers[e] = {}
})
const Gv = N.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Kv = (e) => {
    const t = {}
    let r, n, o
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            ;(o = a.indexOf(':')),
              (r = a.substring(0, o).trim().toLowerCase()),
              (n = a.substring(o + 1).trim()),
              !(!r || (t[r] && Gv[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n))
          }),
      t
    )
  },
  Zc = Symbol('internals')
function On(e) {
  return e && String(e).trim().toLowerCase()
}
function di(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(di) : String(e)
}
function Yv(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let n
  for (; (n = r.exec(e)); ) t[n[1]] = n[2]
  return t
}
const Qv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Ka(e, t, r, n, o) {
  if (N.isFunction(n)) return n.call(this, t, r)
  if ((o && (t = r), !!N.isString(t))) {
    if (N.isString(n)) return t.indexOf(n) !== -1
    if (N.isRegExp(n)) return n.test(t)
  }
}
function Jv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n)
}
function Zv(e, t) {
  const r = N.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (o, i, a) {
        return this[n].call(this, t, o, i, a)
      },
      configurable: !0,
    })
  })
}
class Je {
  constructor(t) {
    t && this.set(t)
  }
  set(t, r, n) {
    const o = this
    function i(s, u, l) {
      const c = On(u)
      if (!c) throw new Error('header name must be a non-empty string')
      const f = N.findKey(o, c)
      ;(!f || o[f] === void 0 || l === !0 || (l === void 0 && o[f] !== !1)) &&
        (o[f || u] = di(s))
    }
    const a = (s, u) => N.forEach(s, (l, c) => i(l, c, u))
    if (N.isPlainObject(t) || t instanceof this.constructor) a(t, r)
    else if (N.isString(t) && (t = t.trim()) && !Qv(t)) a(Kv(t), r)
    else if (N.isHeaders(t)) for (const [s, u] of t.entries()) i(u, s, n)
    else t != null && i(r, t, n)
    return this
  }
  get(t, r) {
    if (((t = On(t)), t)) {
      const n = N.findKey(this, t)
      if (n) {
        const o = this[n]
        if (!r) return o
        if (r === !0) return Yv(o)
        if (N.isFunction(r)) return r.call(this, o, n)
        if (N.isRegExp(r)) return r.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, r) {
    if (((t = On(t)), t)) {
      const n = N.findKey(this, t)
      return !!(n && this[n] !== void 0 && (!r || Ka(this, this[n], n, r)))
    }
    return !1
  }
  delete(t, r) {
    const n = this
    let o = !1
    function i(a) {
      if (((a = On(a)), a)) {
        const s = N.findKey(n, a)
        s && (!r || Ka(n, n[s], s, r)) && (delete n[s], (o = !0))
      }
    }
    return N.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear(t) {
    const r = Object.keys(this)
    let n = r.length,
      o = !1
    for (; n--; ) {
      const i = r[n]
      ;(!t || Ka(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
    }
    return o
  }
  normalize(t) {
    const r = this,
      n = {}
    return (
      N.forEach(this, (o, i) => {
        const a = N.findKey(n, i)
        if (a) {
          ;(r[a] = di(o)), delete r[i]
          return
        }
        const s = t ? Jv(i) : String(i).trim()
        s !== i && delete r[i], (r[s] = di(o)), (n[s] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const r = Object.create(null)
    return (
      N.forEach(this, (n, o) => {
        n != null && n !== !1 && (r[o] = t && N.isArray(n) ? n.join(', ') : n)
      }),
      r
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...r) {
    const n = new this(t)
    return r.forEach((o) => n.set(o)), n
  }
  static accessor(t) {
    const n = (this[Zc] = this[Zc] = { accessors: {} }).accessors,
      o = this.prototype
    function i(a) {
      const s = On(a)
      n[s] || (Zv(o, a), (n[s] = !0))
    }
    return N.isArray(t) ? t.forEach(i) : i(t), this
  }
}
Je.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
N.reduceDescriptors(Je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(n) {
      this[r] = n
    },
  }
})
N.freezeMethods(Je)
function Ya(e, t) {
  const r = this || Fo,
    n = t || r,
    o = Je.from(n.headers)
  let i = n.data
  return (
    N.forEach(e, function (s) {
      i = s.call(r, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function uh(e) {
  return !!(e && e.__CANCEL__)
}
function bn(e, t, r) {
  Y.call(this, e ?? 'canceled', Y.ERR_CANCELED, t, r),
    (this.name = 'CanceledError')
}
N.inherits(bn, Y, { __CANCEL__: !0 })
function lh(e, t, r) {
  const n = r.config.validateStatus
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new Y(
          'Request failed with status code ' + r.status,
          [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      )
}
function Xv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function eD(e, t) {
  e = e || 10
  const r = new Array(e),
    n = new Array(e)
  let o = 0,
    i = 0,
    a
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const l = Date.now(),
        c = n[i]
      a || (a = l), (r[o] = u), (n[o] = l)
      let f = i,
        p = 0
      for (; f !== o; ) (p += r[f++]), (f = f % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), l - a < t)) return
      const m = c && l - c
      return m ? Math.round((p * 1e3) / m) : void 0
    }
  )
}
function tD(e, t) {
  let r = 0,
    n = 1e3 / t,
    o,
    i
  const a = (l, c = Date.now()) => {
    ;(r = c), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, l)
  }
  return [
    (...l) => {
      const c = Date.now(),
        f = c - r
      f >= n
        ? a(l, c)
        : ((o = l),
          i ||
            (i = setTimeout(() => {
              ;(i = null), a(o)
            }, n - f)))
    },
    () => o && a(o),
  ]
}
const Hi = (e, t, r = 3) => {
    let n = 0
    const o = eD(50, 250)
    return tD((i) => {
      const a = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        u = a - n,
        l = o(u),
        c = a <= s
      n = a
      const f = {
        loaded: a,
        total: s,
        progress: s ? a / s : void 0,
        bytes: u,
        rate: l || void 0,
        estimated: l && s && c ? (s - a) / l : void 0,
        event: i,
        lengthComputable: s != null,
        [t ? 'download' : 'upload']: !0,
      }
      e(f)
    }, r)
  },
  Xc = (e, t) => {
    const r = e != null
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]]
  },
  ed =
    (e) =>
    (...t) =>
      N.asap(() => e(...t)),
  rD = Qe.hasStandardBrowserEnv
    ? (function () {
        const t =
            Qe.navigator && /(msie|trident)/i.test(Qe.navigator.userAgent),
          r = document.createElement('a')
        let n
        function o(i) {
          let a = i
          return (
            t && (r.setAttribute('href', a), (a = r.href)),
            r.setAttribute('href', a),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
            }
          )
        }
        return (
          (n = o(window.location.href)),
          function (a) {
            const s = N.isString(a) ? o(a) : a
            return s.protocol === n.protocol && s.host === n.host
          }
        )
      })()
    : (function () {
        return function () {
          return !0
        }
      })(),
  nD = Qe.hasStandardBrowserEnv
    ? {
        write(e, t, r, n, o, i) {
          const a = [e + '=' + encodeURIComponent(t)]
          N.isNumber(r) && a.push('expires=' + new Date(r).toGMTString()),
            N.isString(n) && a.push('path=' + n),
            N.isString(o) && a.push('domain=' + o),
            i === !0 && a.push('secure'),
            (document.cookie = a.join('; '))
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          )
          return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5)
        },
      }
    : {
        write() {},
        read() {
          return null
        },
        remove() {},
      }
function oD(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function iD(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function ch(e, t) {
  return e && !oD(t) ? iD(e, t) : t
}
const td = (e) => (e instanceof Je ? { ...e } : e)
function Or(e, t) {
  t = t || {}
  const r = {}
  function n(l, c, f) {
    return N.isPlainObject(l) && N.isPlainObject(c)
      ? N.merge.call({ caseless: f }, l, c)
      : N.isPlainObject(c)
        ? N.merge({}, c)
        : N.isArray(c)
          ? c.slice()
          : c
  }
  function o(l, c, f) {
    if (N.isUndefined(c)) {
      if (!N.isUndefined(l)) return n(void 0, l, f)
    } else return n(l, c, f)
  }
  function i(l, c) {
    if (!N.isUndefined(c)) return n(void 0, c)
  }
  function a(l, c) {
    if (N.isUndefined(c)) {
      if (!N.isUndefined(l)) return n(void 0, l)
    } else return n(void 0, c)
  }
  function s(l, c, f) {
    if (f in t) return n(l, c)
    if (f in e) return n(void 0, l)
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (l, c) => o(td(l), td(c), !0),
  }
  return (
    N.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || o,
        p = f(e[c], t[c], c)
      ;(N.isUndefined(p) && f !== s) || (r[c] = p)
    }),
    r
  )
}
const dh = (e) => {
    const t = Or({}, e)
    let {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: a,
      auth: s,
    } = t
    ;(t.headers = a = Je.from(a)),
      (t.url = ih(ch(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        a.set(
          'Authorization',
          'Basic ' +
            btoa(
              (s.username || '') +
                ':' +
                (s.password ? unescape(encodeURIComponent(s.password)) : '')
            )
        )
    let u
    if (N.isFormData(r)) {
      if (Qe.hasStandardBrowserEnv || Qe.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0)
      else if ((u = a.getContentType()) !== !1) {
        const [l, ...c] = u
          ? u
              .split(';')
              .map((f) => f.trim())
              .filter(Boolean)
          : []
        a.setContentType([l || 'multipart/form-data', ...c].join('; '))
      }
    }
    if (
      Qe.hasStandardBrowserEnv &&
      (n && N.isFunction(n) && (n = n(t)), n || (n !== !1 && rD(t.url)))
    ) {
      const l = o && i && nD.read(i)
      l && a.set(o, l)
    }
    return t
  },
  aD = typeof XMLHttpRequest < 'u',
  sD =
    aD &&
    function (e) {
      return new Promise(function (r, n) {
        const o = dh(e)
        let i = o.data
        const a = Je.from(o.headers).normalize()
        let { responseType: s, onUploadProgress: u, onDownloadProgress: l } = o,
          c,
          f,
          p,
          m,
          D
        function w() {
          m && m(),
            D && D(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener('abort', c)
        }
        let S = new XMLHttpRequest()
        S.open(o.method.toUpperCase(), o.url, !0), (S.timeout = o.timeout)
        function y() {
          if (!S) return
          const x = Je.from(
              'getAllResponseHeaders' in S && S.getAllResponseHeaders()
            ),
            j = {
              data:
                !s || s === 'text' || s === 'json'
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: x,
              config: e,
              request: S,
            }
          lh(
            function (F) {
              r(F), w()
            },
            function (F) {
              n(F), w()
            },
            j
          ),
            (S = null)
        }
        'onloadend' in S
          ? (S.onloadend = y)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf('file:') === 0)) ||
                setTimeout(y)
            }),
          (S.onabort = function () {
            S && (n(new Y('Request aborted', Y.ECONNABORTED, e, S)), (S = null))
          }),
          (S.onerror = function () {
            n(new Y('Network Error', Y.ERR_NETWORK, e, S)), (S = null)
          }),
          (S.ontimeout = function () {
            let B = o.timeout
              ? 'timeout of ' + o.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const j = o.transitional || ah
            o.timeoutErrorMessage && (B = o.timeoutErrorMessage),
              n(
                new Y(
                  B,
                  j.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
                  e,
                  S
                )
              ),
              (S = null)
          }),
          i === void 0 && a.setContentType(null),
          'setRequestHeader' in S &&
            N.forEach(a.toJSON(), function (B, j) {
              S.setRequestHeader(j, B)
            }),
          N.isUndefined(o.withCredentials) ||
            (S.withCredentials = !!o.withCredentials),
          s && s !== 'json' && (S.responseType = o.responseType),
          l && (([p, D] = Hi(l, !0)), S.addEventListener('progress', p)),
          u &&
            S.upload &&
            (([f, m] = Hi(u)),
            S.upload.addEventListener('progress', f),
            S.upload.addEventListener('loadend', m)),
          (o.cancelToken || o.signal) &&
            ((c = (x) => {
              S &&
                (n(!x || x.type ? new bn(null, e, S) : x),
                S.abort(),
                (S = null))
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener('abort', c)))
        const h = Xv(o.url)
        if (h && Qe.protocols.indexOf(h) === -1) {
          n(new Y('Unsupported protocol ' + h + ':', Y.ERR_BAD_REQUEST, e))
          return
        }
        S.send(i || null)
      })
    },
  uD = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : [])
    if (t || r) {
      let n = new AbortController(),
        o
      const i = function (l) {
        if (!o) {
          ;(o = !0), s()
          const c = l instanceof Error ? l : this.reason
          n.abort(
            c instanceof Y ? c : new bn(c instanceof Error ? c.message : c)
          )
        }
      }
      let a =
        t &&
        setTimeout(() => {
          ;(a = null), i(new Y(`timeout ${t} of ms exceeded`, Y.ETIMEDOUT))
        }, t)
      const s = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
          e.forEach((l) => {
            l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener('abort', i)
          }),
          (e = null))
      }
      e.forEach((l) => l.addEventListener('abort', i))
      const { signal: u } = n
      return (u.unsubscribe = () => N.asap(s)), u
    }
  },
  lD = function* (e, t) {
    let r = e.byteLength
    if (r < t) {
      yield e
      return
    }
    let n = 0,
      o
    for (; n < r; ) (o = n + t), yield e.slice(n, o), (n = o)
  },
  cD = async function* (e, t) {
    for await (const r of dD(e)) yield* lD(r, t)
  },
  dD = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e
      return
    }
    const t = e.getReader()
    try {
      for (;;) {
        const { done: r, value: n } = await t.read()
        if (r) break
        yield n
      }
    } finally {
      await t.cancel()
    }
  },
  rd = (e, t, r, n) => {
    const o = cD(e, t)
    let i = 0,
      a,
      s = (u) => {
        a || ((a = !0), n && n(u))
      }
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: l, value: c } = await o.next()
            if (l) {
              s(), u.close()
              return
            }
            let f = c.byteLength
            if (r) {
              let p = (i += f)
              r(p)
            }
            u.enqueue(new Uint8Array(c))
          } catch (l) {
            throw (s(l), l)
          }
        },
        cancel(u) {
          return s(u), o.return()
        },
      },
      { highWaterMark: 2 }
    )
  },
  ma =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  fh = ma && typeof ReadableStream == 'function',
  fD =
    ma &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ph = (e, ...t) => {
    try {
      return !!e(...t)
    } catch {
      return !1
    }
  },
  pD =
    fh &&
    ph(() => {
      let e = !1
      const t = new Request(Qe.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half'
        },
      }).headers.has('Content-Type')
      return e && !t
    }),
  nd = 64 * 1024,
  eu = fh && ph(() => N.isReadableStream(new Response('').body)),
  Vi = { stream: eu && ((e) => e.body) }
ma &&
  ((e) => {
    ;['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Vi[t] &&
        (Vi[t] = N.isFunction(e[t])
          ? (r) => r[t]()
          : (r, n) => {
              throw new Y(
                `Response type '${t}' is not supported`,
                Y.ERR_NOT_SUPPORT,
                n
              )
            })
    })
  })(new Response())
const hD = async (e) => {
    if (e == null) return 0
    if (N.isBlob(e)) return e.size
    if (N.isSpecCompliantForm(e))
      return (
        await new Request(Qe.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength
    if (N.isArrayBufferView(e) || N.isArrayBuffer(e)) return e.byteLength
    if ((N.isURLSearchParams(e) && (e = e + ''), N.isString(e)))
      return (await fD(e)).byteLength
  },
  gD = async (e, t) => {
    const r = N.toFiniteNumber(e.getContentLength())
    return r ?? hD(t)
  },
  mD =
    ma &&
    (async (e) => {
      let {
        url: t,
        method: r,
        data: n,
        signal: o,
        cancelToken: i,
        timeout: a,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: l,
        headers: c,
        withCredentials: f = 'same-origin',
        fetchOptions: p,
      } = dh(e)
      l = l ? (l + '').toLowerCase() : 'text'
      let m = uD([o, i && i.toAbortSignal()], a),
        D
      const w =
        m &&
        m.unsubscribe &&
        (() => {
          m.unsubscribe()
        })
      let S
      try {
        if (
          u &&
          pD &&
          r !== 'get' &&
          r !== 'head' &&
          (S = await gD(c, n)) !== 0
        ) {
          let j = new Request(t, { method: 'POST', body: n, duplex: 'half' }),
            I
          if (
            (N.isFormData(n) &&
              (I = j.headers.get('content-type')) &&
              c.setContentType(I),
            j.body)
          ) {
            const [F, _] = Xc(S, Hi(ed(u)))
            n = rd(j.body, nd, F, _)
          }
        }
        N.isString(f) || (f = f ? 'include' : 'omit')
        const y = 'credentials' in Request.prototype
        D = new Request(t, {
          ...p,
          signal: m,
          method: r.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: y ? f : void 0,
        })
        let h = await fetch(D)
        const x = eu && (l === 'stream' || l === 'response')
        if (eu && (s || (x && w))) {
          const j = {}
          ;['status', 'statusText', 'headers'].forEach((P) => {
            j[P] = h[P]
          })
          const I = N.toFiniteNumber(h.headers.get('content-length')),
            [F, _] = (s && Xc(I, Hi(ed(s), !0))) || []
          h = new Response(
            rd(h.body, nd, F, () => {
              _ && _(), w && w()
            }),
            j
          )
        }
        l = l || 'text'
        let B = await Vi[N.findKey(Vi, l) || 'text'](h, e)
        return (
          !x && w && w(),
          await new Promise((j, I) => {
            lh(j, I, {
              data: B,
              headers: Je.from(h.headers),
              status: h.status,
              statusText: h.statusText,
              config: e,
              request: D,
            })
          })
        )
      } catch (y) {
        throw (
          (w && w(),
          y && y.name === 'TypeError' && /fetch/i.test(y.message)
            ? Object.assign(new Y('Network Error', Y.ERR_NETWORK, e, D), {
                cause: y.cause || y,
              })
            : Y.from(y, y && y.code, e, D))
        )
      }
    }),
  tu = { http: Lv, xhr: sD, fetch: mD }
N.forEach(tu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const od = (e) => `- ${e}`,
  yD = (e) => N.isFunction(e) || e === null || e === !1,
  hh = {
    getAdapter: (e) => {
      e = N.isArray(e) ? e : [e]
      const { length: t } = e
      let r, n
      const o = {}
      for (let i = 0; i < t; i++) {
        r = e[i]
        let a
        if (
          ((n = r),
          !yD(r) && ((n = tu[(a = String(r)).toLowerCase()]), n === void 0))
        )
          throw new Y(`Unknown adapter '${a}'`)
        if (n) break
        o[a || '#' + i] = n
      }
      if (!n) {
        const i = Object.entries(o).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(od).join(`
`)
            : ' ' + od(i[0])
          : 'as no adapter specified'
        throw new Y(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT'
        )
      }
      return n
    },
    adapters: tu,
  }
function Qa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new bn(null, e)
}
function id(e) {
  return (
    Qa(e),
    (e.headers = Je.from(e.headers)),
    (e.data = Ya.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    hh
      .getAdapter(e.adapter || Fo.adapter)(e)
      .then(
        function (n) {
          return (
            Qa(e),
            (n.data = Ya.call(e, e.transformResponse, n)),
            (n.headers = Je.from(n.headers)),
            n
          )
        },
        function (n) {
          return (
            uh(n) ||
              (Qa(e),
              n &&
                n.response &&
                ((n.response.data = Ya.call(
                  e,
                  e.transformResponse,
                  n.response
                )),
                (n.response.headers = Je.from(n.response.headers)))),
            Promise.reject(n)
          )
        }
      )
  )
}
const gh = '1.7.7',
  ul = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    ul[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const ad = {}
ul.transitional = function (t, r, n) {
  function o(i, a) {
    return (
      '[Axios v' +
      gh +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (n ? '. ' + n : '')
    )
  }
  return (i, a, s) => {
    if (t === !1)
      throw new Y(
        o(a, ' has been removed' + (r ? ' in ' + r : '')),
        Y.ERR_DEPRECATED
      )
    return (
      r &&
        !ad[a] &&
        ((ad[a] = !0),
        console.warn(
          o(
            a,
            ' has been deprecated since v' +
              r +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, a, s) : !0
    )
  }
}
function vD(e, t, r) {
  if (typeof e != 'object')
    throw new Y('options must be an object', Y.ERR_BAD_OPTION_VALUE)
  const n = Object.keys(e)
  let o = n.length
  for (; o-- > 0; ) {
    const i = n[o],
      a = t[i]
    if (a) {
      const s = e[i],
        u = s === void 0 || a(s, i, e)
      if (u !== !0)
        throw new Y('option ' + i + ' must be ' + u, Y.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (r !== !0) throw new Y('Unknown option ' + i, Y.ERR_BAD_OPTION)
  }
}
const ru = { assertOptions: vD, validators: ul },
  Yt = ru.validators
class Br {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new Jc(), response: new Jc() })
  }
  async request(t, r) {
    try {
      return await this._request(t, r)
    } catch (n) {
      if (n instanceof Error) {
        let o
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error())
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : ''
        try {
          n.stack
            ? i &&
              !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
              (n.stack +=
                `
` + i)
            : (n.stack = i)
        } catch {}
      }
      throw n
    }
  }
  _request(t, r) {
    typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Or(this.defaults, r))
    const { transitional: n, paramsSerializer: o, headers: i } = r
    n !== void 0 &&
      ru.assertOptions(
        n,
        {
          silentJSONParsing: Yt.transitional(Yt.boolean),
          forcedJSONParsing: Yt.transitional(Yt.boolean),
          clarifyTimeoutError: Yt.transitional(Yt.boolean),
        },
        !1
      ),
      o != null &&
        (N.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : ru.assertOptions(
              o,
              { encode: Yt.function, serialize: Yt.function },
              !0
            )),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase())
    let a = i && N.merge(i.common, i[r.method])
    i &&
      N.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (D) => {
          delete i[D]
        }
      ),
      (r.headers = Je.concat(a, i))
    const s = []
    let u = !0
    this.interceptors.request.forEach(function (w) {
      ;(typeof w.runWhen == 'function' && w.runWhen(r) === !1) ||
        ((u = u && w.synchronous), s.unshift(w.fulfilled, w.rejected))
    })
    const l = []
    this.interceptors.response.forEach(function (w) {
      l.push(w.fulfilled, w.rejected)
    })
    let c,
      f = 0,
      p
    if (!u) {
      const D = [id.bind(this), void 0]
      for (
        D.unshift.apply(D, s),
          D.push.apply(D, l),
          p = D.length,
          c = Promise.resolve(r);
        f < p;

      )
        c = c.then(D[f++], D[f++])
      return c
    }
    p = s.length
    let m = r
    for (f = 0; f < p; ) {
      const D = s[f++],
        w = s[f++]
      try {
        m = D(m)
      } catch (S) {
        w.call(this, S)
        break
      }
    }
    try {
      c = id.call(this, m)
    } catch (D) {
      return Promise.reject(D)
    }
    for (f = 0, p = l.length; f < p; ) c = c.then(l[f++], l[f++])
    return c
  }
  getUri(t) {
    t = Or(this.defaults, t)
    const r = ch(t.baseURL, t.url)
    return ih(r, t.params, t.paramsSerializer)
  }
}
N.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Br.prototype[t] = function (r, n) {
    return this.request(
      Or(n || {}, { method: t, url: r, data: (n || {}).data })
    )
  }
})
N.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (i, a, s) {
      return this.request(
        Or(s || {}, {
          method: t,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: a,
        })
      )
    }
  }
  ;(Br.prototype[t] = r()), (Br.prototype[t + 'Form'] = r(!0))
})
class ll {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let r
    this.promise = new Promise(function (i) {
      r = i
    })
    const n = this
    this.promise.then((o) => {
      if (!n._listeners) return
      let i = n._listeners.length
      for (; i-- > 0; ) n._listeners[i](o)
      n._listeners = null
    }),
      (this.promise.then = (o) => {
        let i
        const a = new Promise((s) => {
          n.subscribe(s), (i = s)
        }).then(o)
        return (
          (a.cancel = function () {
            n.unsubscribe(i)
          }),
          a
        )
      }),
      t(function (i, a, s) {
        n.reason || ((n.reason = new bn(i, a, s)), r(n.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const r = this._listeners.indexOf(t)
    r !== -1 && this._listeners.splice(r, 1)
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (n) => {
        t.abort(n)
      }
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    )
  }
  static source() {
    let t
    return {
      token: new ll(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
function DD(e) {
  return function (r) {
    return e.apply(null, r)
  }
}
function xD(e) {
  return N.isObject(e) && e.isAxiosError === !0
}
const nu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(nu).forEach(([e, t]) => {
  nu[t] = e
})
function mh(e) {
  const t = new Br(e),
    r = Gp(Br.prototype.request, t)
  return (
    N.extend(r, Br.prototype, t, { allOwnKeys: !0 }),
    N.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return mh(Or(e, o))
    }),
    r
  )
}
const J = mh(Fo)
J.Axios = Br
J.CanceledError = bn
J.CancelToken = ll
J.isCancel = uh
J.VERSION = gh
J.toFormData = ga
J.AxiosError = Y
J.Cancel = J.CanceledError
J.all = function (t) {
  return Promise.all(t)
}
J.spread = DD
J.isAxiosError = xD
J.mergeConfig = Or
J.AxiosHeaders = Je
J.formToJSON = (e) => sh(N.isHTMLForm(e) ? new FormData(e) : e)
J.getAdapter = hh.getAdapter
J.HttpStatusCode = nu
J.default = J
const CD = '_boxAuthor_1415z_1',
  AD = '_authorInfo_1415z_21',
  wD = '_socialIcons_1415z_40',
  Ja = { boxAuthor: CD, authorInfo: AD, socialIcons: wD }
function cl() {
  const { t: e, i18n: t } = Xe()
  return d.jsxs('div', {
    className: Ja.boxAuthor,
    children: [
      d.jsx(re, {
        to: `/${t.language}/about-author`,
        children: d.jsx('img', {
          src: 'https://media.elliotfern.com/img/author.jpg',
          width: 100,
        }),
      }),
      d.jsxs('div', {
        className: Ja.authorInfo,
        children: [
          d.jsxs('h6', {
            children: [
              ' ',
              d.jsx(re, {
                to: `/${t.language}/about-author`,
                children: 'Elliot Fernandez',
              }),
            ],
          }),
          d.jsx('p', { children: e('AuthorBox.descripcioAutor') }),
          d.jsxs('div', {
            className: Ja.socialIcons,
            children: [
              d.jsx('a', {
                href: 'https://www.linkedin.com/in/elliot-fernandez/',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: d.jsx('img', {
                  src: 'https://media.elliotfern.com/img/elliotfern-icon/linkedin.svg',
                  alt: 'LinkedIn',
                  width: 24,
                }),
              }),
              d.jsx('a', {
                href: 'https://github.com/ElliotFern',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: d.jsx('img', {
                  src: 'https://media.elliotfern.com/img/elliotfern-icon/github.svg',
                  alt: 'GitHub',
                  width: 24,
                }),
              }),
              d.jsx('a', {
                href: 'https://c.im/@elliot',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: d.jsx('img', {
                  src: 'https://media.elliotfern.com/img/elliotfern-icon/mastodon.svg',
                  alt: 'Mastodon',
                  width: 24,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
var Wi = { exports: {} }
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */ Wi.exports
;(function (e, t) {
  ;(function (r) {
    var n = t,
      o = e && e.exports == n && e,
      i = typeof zn == 'object' && zn
    ;(i.global === i || i.window === i) && (r = i)
    var a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      s = /[\x01-\x7F]/g,
      u = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
      l =
        /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
      c = {
        '­': 'shy',
        '‌': 'zwnj',
        '‍': 'zwj',
        '‎': 'lrm',
        '⁣': 'ic',
        '⁢': 'it',
        '⁡': 'af',
        '‏': 'rlm',
        '​': 'ZeroWidthSpace',
        '⁠': 'NoBreak',
        '̑': 'DownBreve',
        '⃛': 'tdot',
        '⃜': 'DotDot',
        '	': 'Tab',
        '\n': 'NewLine',
        ' ': 'puncsp',
        ' ': 'MediumSpace',
        ' ': 'thinsp',
        ' ': 'hairsp',
        ' ': 'emsp13',
        ' ': 'ensp',
        ' ': 'emsp14',
        ' ': 'emsp',
        ' ': 'numsp',
        ' ': 'nbsp',
        '  ': 'ThickSpace',
        '‾': 'oline',
        _: 'lowbar',
        '‐': 'dash',
        '–': 'ndash',
        '—': 'mdash',
        '―': 'horbar',
        ',': 'comma',
        ';': 'semi',
        '⁏': 'bsemi',
        ':': 'colon',
        '⩴': 'Colone',
        '!': 'excl',
        '¡': 'iexcl',
        '?': 'quest',
        '¿': 'iquest',
        '.': 'period',
        '‥': 'nldr',
        '…': 'mldr',
        '·': 'middot',
        "'": 'apos',
        '‘': 'lsquo',
        '’': 'rsquo',
        '‚': 'sbquo',
        '‹': 'lsaquo',
        '›': 'rsaquo',
        '"': 'quot',
        '“': 'ldquo',
        '”': 'rdquo',
        '„': 'bdquo',
        '«': 'laquo',
        '»': 'raquo',
        '(': 'lpar',
        ')': 'rpar',
        '[': 'lsqb',
        ']': 'rsqb',
        '{': 'lcub',
        '}': 'rcub',
        '⌈': 'lceil',
        '⌉': 'rceil',
        '⌊': 'lfloor',
        '⌋': 'rfloor',
        '⦅': 'lopar',
        '⦆': 'ropar',
        '⦋': 'lbrke',
        '⦌': 'rbrke',
        '⦍': 'lbrkslu',
        '⦎': 'rbrksld',
        '⦏': 'lbrksld',
        '⦐': 'rbrkslu',
        '⦑': 'langd',
        '⦒': 'rangd',
        '⦓': 'lparlt',
        '⦔': 'rpargt',
        '⦕': 'gtlPar',
        '⦖': 'ltrPar',
        '⟦': 'lobrk',
        '⟧': 'robrk',
        '⟨': 'lang',
        '⟩': 'rang',
        '⟪': 'Lang',
        '⟫': 'Rang',
        '⟬': 'loang',
        '⟭': 'roang',
        '❲': 'lbbrk',
        '❳': 'rbbrk',
        '‖': 'Vert',
        '§': 'sect',
        '¶': 'para',
        '@': 'commat',
        '*': 'ast',
        '/': 'sol',
        undefined: null,
        '&': 'amp',
        '#': 'num',
        '%': 'percnt',
        '‰': 'permil',
        '‱': 'pertenk',
        '†': 'dagger',
        '‡': 'Dagger',
        '•': 'bull',
        '⁃': 'hybull',
        '′': 'prime',
        '″': 'Prime',
        '‴': 'tprime',
        '⁗': 'qprime',
        '‵': 'bprime',
        '⁁': 'caret',
        '`': 'grave',
        '´': 'acute',
        '˜': 'tilde',
        '^': 'Hat',
        '¯': 'macr',
        '˘': 'breve',
        '˙': 'dot',
        '¨': 'die',
        '˚': 'ring',
        '˝': 'dblac',
        '¸': 'cedil',
        '˛': 'ogon',
        ˆ: 'circ',
        ˇ: 'caron',
        '°': 'deg',
        '©': 'copy',
        '®': 'reg',
        '℗': 'copysr',
        '℘': 'wp',
        '℞': 'rx',
        '℧': 'mho',
        '℩': 'iiota',
        '←': 'larr',
        '↚': 'nlarr',
        '→': 'rarr',
        '↛': 'nrarr',
        '↑': 'uarr',
        '↓': 'darr',
        '↔': 'harr',
        '↮': 'nharr',
        '↕': 'varr',
        '↖': 'nwarr',
        '↗': 'nearr',
        '↘': 'searr',
        '↙': 'swarr',
        '↝': 'rarrw',
        '↝̸': 'nrarrw',
        '↞': 'Larr',
        '↟': 'Uarr',
        '↠': 'Rarr',
        '↡': 'Darr',
        '↢': 'larrtl',
        '↣': 'rarrtl',
        '↤': 'mapstoleft',
        '↥': 'mapstoup',
        '↦': 'map',
        '↧': 'mapstodown',
        '↩': 'larrhk',
        '↪': 'rarrhk',
        '↫': 'larrlp',
        '↬': 'rarrlp',
        '↭': 'harrw',
        '↰': 'lsh',
        '↱': 'rsh',
        '↲': 'ldsh',
        '↳': 'rdsh',
        '↵': 'crarr',
        '↶': 'cularr',
        '↷': 'curarr',
        '↺': 'olarr',
        '↻': 'orarr',
        '↼': 'lharu',
        '↽': 'lhard',
        '↾': 'uharr',
        '↿': 'uharl',
        '⇀': 'rharu',
        '⇁': 'rhard',
        '⇂': 'dharr',
        '⇃': 'dharl',
        '⇄': 'rlarr',
        '⇅': 'udarr',
        '⇆': 'lrarr',
        '⇇': 'llarr',
        '⇈': 'uuarr',
        '⇉': 'rrarr',
        '⇊': 'ddarr',
        '⇋': 'lrhar',
        '⇌': 'rlhar',
        '⇐': 'lArr',
        '⇍': 'nlArr',
        '⇑': 'uArr',
        '⇒': 'rArr',
        '⇏': 'nrArr',
        '⇓': 'dArr',
        '⇔': 'iff',
        '⇎': 'nhArr',
        '⇕': 'vArr',
        '⇖': 'nwArr',
        '⇗': 'neArr',
        '⇘': 'seArr',
        '⇙': 'swArr',
        '⇚': 'lAarr',
        '⇛': 'rAarr',
        '⇝': 'zigrarr',
        '⇤': 'larrb',
        '⇥': 'rarrb',
        '⇵': 'duarr',
        '⇽': 'loarr',
        '⇾': 'roarr',
        '⇿': 'hoarr',
        '∀': 'forall',
        '∁': 'comp',
        '∂': 'part',
        '∂̸': 'npart',
        '∃': 'exist',
        '∄': 'nexist',
        '∅': 'empty',
        '∇': 'Del',
        '∈': 'in',
        '∉': 'notin',
        '∋': 'ni',
        '∌': 'notni',
        '϶': 'bepsi',
        '∏': 'prod',
        '∐': 'coprod',
        '∑': 'sum',
        '+': 'plus',
        '±': 'pm',
        '÷': 'div',
        '×': 'times',
        '<': 'lt',
        '≮': 'nlt',
        '<⃒': 'nvlt',
        '=': 'equals',
        '≠': 'ne',
        '=⃥': 'bne',
        '⩵': 'Equal',
        '>': 'gt',
        '≯': 'ngt',
        '>⃒': 'nvgt',
        '¬': 'not',
        '|': 'vert',
        '¦': 'brvbar',
        '−': 'minus',
        '∓': 'mp',
        '∔': 'plusdo',
        '⁄': 'frasl',
        '∖': 'setmn',
        '∗': 'lowast',
        '∘': 'compfn',
        '√': 'Sqrt',
        '∝': 'prop',
        '∞': 'infin',
        '∟': 'angrt',
        '∠': 'ang',
        '∠⃒': 'nang',
        '∡': 'angmsd',
        '∢': 'angsph',
        '∣': 'mid',
        '∤': 'nmid',
        '∥': 'par',
        '∦': 'npar',
        '∧': 'and',
        '∨': 'or',
        '∩': 'cap',
        '∩︀': 'caps',
        '∪': 'cup',
        '∪︀': 'cups',
        '∫': 'int',
        '∬': 'Int',
        '∭': 'tint',
        '⨌': 'qint',
        '∮': 'oint',
        '∯': 'Conint',
        '∰': 'Cconint',
        '∱': 'cwint',
        '∲': 'cwconint',
        '∳': 'awconint',
        '∴': 'there4',
        '∵': 'becaus',
        '∶': 'ratio',
        '∷': 'Colon',
        '∸': 'minusd',
        '∺': 'mDDot',
        '∻': 'homtht',
        '∼': 'sim',
        '≁': 'nsim',
        '∼⃒': 'nvsim',
        '∽': 'bsim',
        '∽̱': 'race',
        '∾': 'ac',
        '∾̳': 'acE',
        '∿': 'acd',
        '≀': 'wr',
        '≂': 'esim',
        '≂̸': 'nesim',
        '≃': 'sime',
        '≄': 'nsime',
        '≅': 'cong',
        '≇': 'ncong',
        '≆': 'simne',
        '≈': 'ap',
        '≉': 'nap',
        '≊': 'ape',
        '≋': 'apid',
        '≋̸': 'napid',
        '≌': 'bcong',
        '≍': 'CupCap',
        '≭': 'NotCupCap',
        '≍⃒': 'nvap',
        '≎': 'bump',
        '≎̸': 'nbump',
        '≏': 'bumpe',
        '≏̸': 'nbumpe',
        '≐': 'doteq',
        '≐̸': 'nedot',
        '≑': 'eDot',
        '≒': 'efDot',
        '≓': 'erDot',
        '≔': 'colone',
        '≕': 'ecolon',
        '≖': 'ecir',
        '≗': 'cire',
        '≙': 'wedgeq',
        '≚': 'veeeq',
        '≜': 'trie',
        '≟': 'equest',
        '≡': 'equiv',
        '≢': 'nequiv',
        '≡⃥': 'bnequiv',
        '≤': 'le',
        '≰': 'nle',
        '≤⃒': 'nvle',
        '≥': 'ge',
        '≱': 'nge',
        '≥⃒': 'nvge',
        '≦': 'lE',
        '≦̸': 'nlE',
        '≧': 'gE',
        '≧̸': 'ngE',
        '≨︀': 'lvnE',
        '≨': 'lnE',
        '≩': 'gnE',
        '≩︀': 'gvnE',
        '≪': 'll',
        '≪̸': 'nLtv',
        '≪⃒': 'nLt',
        '≫': 'gg',
        '≫̸': 'nGtv',
        '≫⃒': 'nGt',
        '≬': 'twixt',
        '≲': 'lsim',
        '≴': 'nlsim',
        '≳': 'gsim',
        '≵': 'ngsim',
        '≶': 'lg',
        '≸': 'ntlg',
        '≷': 'gl',
        '≹': 'ntgl',
        '≺': 'pr',
        '⊀': 'npr',
        '≻': 'sc',
        '⊁': 'nsc',
        '≼': 'prcue',
        '⋠': 'nprcue',
        '≽': 'sccue',
        '⋡': 'nsccue',
        '≾': 'prsim',
        '≿': 'scsim',
        '≿̸': 'NotSucceedsTilde',
        '⊂': 'sub',
        '⊄': 'nsub',
        '⊂⃒': 'vnsub',
        '⊃': 'sup',
        '⊅': 'nsup',
        '⊃⃒': 'vnsup',
        '⊆': 'sube',
        '⊈': 'nsube',
        '⊇': 'supe',
        '⊉': 'nsupe',
        '⊊︀': 'vsubne',
        '⊊': 'subne',
        '⊋︀': 'vsupne',
        '⊋': 'supne',
        '⊍': 'cupdot',
        '⊎': 'uplus',
        '⊏': 'sqsub',
        '⊏̸': 'NotSquareSubset',
        '⊐': 'sqsup',
        '⊐̸': 'NotSquareSuperset',
        '⊑': 'sqsube',
        '⋢': 'nsqsube',
        '⊒': 'sqsupe',
        '⋣': 'nsqsupe',
        '⊓': 'sqcap',
        '⊓︀': 'sqcaps',
        '⊔': 'sqcup',
        '⊔︀': 'sqcups',
        '⊕': 'oplus',
        '⊖': 'ominus',
        '⊗': 'otimes',
        '⊘': 'osol',
        '⊙': 'odot',
        '⊚': 'ocir',
        '⊛': 'oast',
        '⊝': 'odash',
        '⊞': 'plusb',
        '⊟': 'minusb',
        '⊠': 'timesb',
        '⊡': 'sdotb',
        '⊢': 'vdash',
        '⊬': 'nvdash',
        '⊣': 'dashv',
        '⊤': 'top',
        '⊥': 'bot',
        '⊧': 'models',
        '⊨': 'vDash',
        '⊭': 'nvDash',
        '⊩': 'Vdash',
        '⊮': 'nVdash',
        '⊪': 'Vvdash',
        '⊫': 'VDash',
        '⊯': 'nVDash',
        '⊰': 'prurel',
        '⊲': 'vltri',
        '⋪': 'nltri',
        '⊳': 'vrtri',
        '⋫': 'nrtri',
        '⊴': 'ltrie',
        '⋬': 'nltrie',
        '⊴⃒': 'nvltrie',
        '⊵': 'rtrie',
        '⋭': 'nrtrie',
        '⊵⃒': 'nvrtrie',
        '⊶': 'origof',
        '⊷': 'imof',
        '⊸': 'mumap',
        '⊹': 'hercon',
        '⊺': 'intcal',
        '⊻': 'veebar',
        '⊽': 'barvee',
        '⊾': 'angrtvb',
        '⊿': 'lrtri',
        '⋀': 'Wedge',
        '⋁': 'Vee',
        '⋂': 'xcap',
        '⋃': 'xcup',
        '⋄': 'diam',
        '⋅': 'sdot',
        '⋆': 'Star',
        '⋇': 'divonx',
        '⋈': 'bowtie',
        '⋉': 'ltimes',
        '⋊': 'rtimes',
        '⋋': 'lthree',
        '⋌': 'rthree',
        '⋍': 'bsime',
        '⋎': 'cuvee',
        '⋏': 'cuwed',
        '⋐': 'Sub',
        '⋑': 'Sup',
        '⋒': 'Cap',
        '⋓': 'Cup',
        '⋔': 'fork',
        '⋕': 'epar',
        '⋖': 'ltdot',
        '⋗': 'gtdot',
        '⋘': 'Ll',
        '⋘̸': 'nLl',
        '⋙': 'Gg',
        '⋙̸': 'nGg',
        '⋚︀': 'lesg',
        '⋚': 'leg',
        '⋛': 'gel',
        '⋛︀': 'gesl',
        '⋞': 'cuepr',
        '⋟': 'cuesc',
        '⋦': 'lnsim',
        '⋧': 'gnsim',
        '⋨': 'prnsim',
        '⋩': 'scnsim',
        '⋮': 'vellip',
        '⋯': 'ctdot',
        '⋰': 'utdot',
        '⋱': 'dtdot',
        '⋲': 'disin',
        '⋳': 'isinsv',
        '⋴': 'isins',
        '⋵': 'isindot',
        '⋵̸': 'notindot',
        '⋶': 'notinvc',
        '⋷': 'notinvb',
        '⋹': 'isinE',
        '⋹̸': 'notinE',
        '⋺': 'nisd',
        '⋻': 'xnis',
        '⋼': 'nis',
        '⋽': 'notnivc',
        '⋾': 'notnivb',
        '⌅': 'barwed',
        '⌆': 'Barwed',
        '⌌': 'drcrop',
        '⌍': 'dlcrop',
        '⌎': 'urcrop',
        '⌏': 'ulcrop',
        '⌐': 'bnot',
        '⌒': 'profline',
        '⌓': 'profsurf',
        '⌕': 'telrec',
        '⌖': 'target',
        '⌜': 'ulcorn',
        '⌝': 'urcorn',
        '⌞': 'dlcorn',
        '⌟': 'drcorn',
        '⌢': 'frown',
        '⌣': 'smile',
        '⌭': 'cylcty',
        '⌮': 'profalar',
        '⌶': 'topbot',
        '⌽': 'ovbar',
        '⌿': 'solbar',
        '⍼': 'angzarr',
        '⎰': 'lmoust',
        '⎱': 'rmoust',
        '⎴': 'tbrk',
        '⎵': 'bbrk',
        '⎶': 'bbrktbrk',
        '⏜': 'OverParenthesis',
        '⏝': 'UnderParenthesis',
        '⏞': 'OverBrace',
        '⏟': 'UnderBrace',
        '⏢': 'trpezium',
        '⏧': 'elinters',
        '␣': 'blank',
        '─': 'boxh',
        '│': 'boxv',
        '┌': 'boxdr',
        '┐': 'boxdl',
        '└': 'boxur',
        '┘': 'boxul',
        '├': 'boxvr',
        '┤': 'boxvl',
        '┬': 'boxhd',
        '┴': 'boxhu',
        '┼': 'boxvh',
        '═': 'boxH',
        '║': 'boxV',
        '╒': 'boxdR',
        '╓': 'boxDr',
        '╔': 'boxDR',
        '╕': 'boxdL',
        '╖': 'boxDl',
        '╗': 'boxDL',
        '╘': 'boxuR',
        '╙': 'boxUr',
        '╚': 'boxUR',
        '╛': 'boxuL',
        '╜': 'boxUl',
        '╝': 'boxUL',
        '╞': 'boxvR',
        '╟': 'boxVr',
        '╠': 'boxVR',
        '╡': 'boxvL',
        '╢': 'boxVl',
        '╣': 'boxVL',
        '╤': 'boxHd',
        '╥': 'boxhD',
        '╦': 'boxHD',
        '╧': 'boxHu',
        '╨': 'boxhU',
        '╩': 'boxHU',
        '╪': 'boxvH',
        '╫': 'boxVh',
        '╬': 'boxVH',
        '▀': 'uhblk',
        '▄': 'lhblk',
        '█': 'block',
        '░': 'blk14',
        '▒': 'blk12',
        '▓': 'blk34',
        '□': 'squ',
        '▪': 'squf',
        '▫': 'EmptyVerySmallSquare',
        '▭': 'rect',
        '▮': 'marker',
        '▱': 'fltns',
        '△': 'xutri',
        '▴': 'utrif',
        '▵': 'utri',
        '▸': 'rtrif',
        '▹': 'rtri',
        '▽': 'xdtri',
        '▾': 'dtrif',
        '▿': 'dtri',
        '◂': 'ltrif',
        '◃': 'ltri',
        '◊': 'loz',
        '○': 'cir',
        '◬': 'tridot',
        '◯': 'xcirc',
        '◸': 'ultri',
        '◹': 'urtri',
        '◺': 'lltri',
        '◻': 'EmptySmallSquare',
        '◼': 'FilledSmallSquare',
        '★': 'starf',
        '☆': 'star',
        '☎': 'phone',
        '♀': 'female',
        '♂': 'male',
        '♠': 'spades',
        '♣': 'clubs',
        '♥': 'hearts',
        '♦': 'diams',
        '♪': 'sung',
        '✓': 'check',
        '✗': 'cross',
        '✠': 'malt',
        '✶': 'sext',
        '❘': 'VerticalSeparator',
        '⟈': 'bsolhsub',
        '⟉': 'suphsol',
        '⟵': 'xlarr',
        '⟶': 'xrarr',
        '⟷': 'xharr',
        '⟸': 'xlArr',
        '⟹': 'xrArr',
        '⟺': 'xhArr',
        '⟼': 'xmap',
        '⟿': 'dzigrarr',
        '⤂': 'nvlArr',
        '⤃': 'nvrArr',
        '⤄': 'nvHarr',
        '⤅': 'Map',
        '⤌': 'lbarr',
        '⤍': 'rbarr',
        '⤎': 'lBarr',
        '⤏': 'rBarr',
        '⤐': 'RBarr',
        '⤑': 'DDotrahd',
        '⤒': 'UpArrowBar',
        '⤓': 'DownArrowBar',
        '⤖': 'Rarrtl',
        '⤙': 'latail',
        '⤚': 'ratail',
        '⤛': 'lAtail',
        '⤜': 'rAtail',
        '⤝': 'larrfs',
        '⤞': 'rarrfs',
        '⤟': 'larrbfs',
        '⤠': 'rarrbfs',
        '⤣': 'nwarhk',
        '⤤': 'nearhk',
        '⤥': 'searhk',
        '⤦': 'swarhk',
        '⤧': 'nwnear',
        '⤨': 'toea',
        '⤩': 'tosa',
        '⤪': 'swnwar',
        '⤳': 'rarrc',
        '⤳̸': 'nrarrc',
        '⤵': 'cudarrr',
        '⤶': 'ldca',
        '⤷': 'rdca',
        '⤸': 'cudarrl',
        '⤹': 'larrpl',
        '⤼': 'curarrm',
        '⤽': 'cularrp',
        '⥅': 'rarrpl',
        '⥈': 'harrcir',
        '⥉': 'Uarrocir',
        '⥊': 'lurdshar',
        '⥋': 'ldrushar',
        '⥎': 'LeftRightVector',
        '⥏': 'RightUpDownVector',
        '⥐': 'DownLeftRightVector',
        '⥑': 'LeftUpDownVector',
        '⥒': 'LeftVectorBar',
        '⥓': 'RightVectorBar',
        '⥔': 'RightUpVectorBar',
        '⥕': 'RightDownVectorBar',
        '⥖': 'DownLeftVectorBar',
        '⥗': 'DownRightVectorBar',
        '⥘': 'LeftUpVectorBar',
        '⥙': 'LeftDownVectorBar',
        '⥚': 'LeftTeeVector',
        '⥛': 'RightTeeVector',
        '⥜': 'RightUpTeeVector',
        '⥝': 'RightDownTeeVector',
        '⥞': 'DownLeftTeeVector',
        '⥟': 'DownRightTeeVector',
        '⥠': 'LeftUpTeeVector',
        '⥡': 'LeftDownTeeVector',
        '⥢': 'lHar',
        '⥣': 'uHar',
        '⥤': 'rHar',
        '⥥': 'dHar',
        '⥦': 'luruhar',
        '⥧': 'ldrdhar',
        '⥨': 'ruluhar',
        '⥩': 'rdldhar',
        '⥪': 'lharul',
        '⥫': 'llhard',
        '⥬': 'rharul',
        '⥭': 'lrhard',
        '⥮': 'udhar',
        '⥯': 'duhar',
        '⥰': 'RoundImplies',
        '⥱': 'erarr',
        '⥲': 'simrarr',
        '⥳': 'larrsim',
        '⥴': 'rarrsim',
        '⥵': 'rarrap',
        '⥶': 'ltlarr',
        '⥸': 'gtrarr',
        '⥹': 'subrarr',
        '⥻': 'suplarr',
        '⥼': 'lfisht',
        '⥽': 'rfisht',
        '⥾': 'ufisht',
        '⥿': 'dfisht',
        '⦚': 'vzigzag',
        '⦜': 'vangrt',
        '⦝': 'angrtvbd',
        '⦤': 'ange',
        '⦥': 'range',
        '⦦': 'dwangle',
        '⦧': 'uwangle',
        '⦨': 'angmsdaa',
        '⦩': 'angmsdab',
        '⦪': 'angmsdac',
        '⦫': 'angmsdad',
        '⦬': 'angmsdae',
        '⦭': 'angmsdaf',
        '⦮': 'angmsdag',
        '⦯': 'angmsdah',
        '⦰': 'bemptyv',
        '⦱': 'demptyv',
        '⦲': 'cemptyv',
        '⦳': 'raemptyv',
        '⦴': 'laemptyv',
        '⦵': 'ohbar',
        '⦶': 'omid',
        '⦷': 'opar',
        '⦹': 'operp',
        '⦻': 'olcross',
        '⦼': 'odsold',
        '⦾': 'olcir',
        '⦿': 'ofcir',
        '⧀': 'olt',
        '⧁': 'ogt',
        '⧂': 'cirscir',
        '⧃': 'cirE',
        '⧄': 'solb',
        '⧅': 'bsolb',
        '⧉': 'boxbox',
        '⧍': 'trisb',
        '⧎': 'rtriltri',
        '⧏': 'LeftTriangleBar',
        '⧏̸': 'NotLeftTriangleBar',
        '⧐': 'RightTriangleBar',
        '⧐̸': 'NotRightTriangleBar',
        '⧜': 'iinfin',
        '⧝': 'infintie',
        '⧞': 'nvinfin',
        '⧣': 'eparsl',
        '⧤': 'smeparsl',
        '⧥': 'eqvparsl',
        '⧫': 'lozf',
        '⧴': 'RuleDelayed',
        '⧶': 'dsol',
        '⨀': 'xodot',
        '⨁': 'xoplus',
        '⨂': 'xotime',
        '⨄': 'xuplus',
        '⨆': 'xsqcup',
        '⨍': 'fpartint',
        '⨐': 'cirfnint',
        '⨑': 'awint',
        '⨒': 'rppolint',
        '⨓': 'scpolint',
        '⨔': 'npolint',
        '⨕': 'pointint',
        '⨖': 'quatint',
        '⨗': 'intlarhk',
        '⨢': 'pluscir',
        '⨣': 'plusacir',
        '⨤': 'simplus',
        '⨥': 'plusdu',
        '⨦': 'plussim',
        '⨧': 'plustwo',
        '⨩': 'mcomma',
        '⨪': 'minusdu',
        '⨭': 'loplus',
        '⨮': 'roplus',
        '⨯': 'Cross',
        '⨰': 'timesd',
        '⨱': 'timesbar',
        '⨳': 'smashp',
        '⨴': 'lotimes',
        '⨵': 'rotimes',
        '⨶': 'otimesas',
        '⨷': 'Otimes',
        '⨸': 'odiv',
        '⨹': 'triplus',
        '⨺': 'triminus',
        '⨻': 'tritime',
        '⨼': 'iprod',
        '⨿': 'amalg',
        '⩀': 'capdot',
        '⩂': 'ncup',
        '⩃': 'ncap',
        '⩄': 'capand',
        '⩅': 'cupor',
        '⩆': 'cupcap',
        '⩇': 'capcup',
        '⩈': 'cupbrcap',
        '⩉': 'capbrcup',
        '⩊': 'cupcup',
        '⩋': 'capcap',
        '⩌': 'ccups',
        '⩍': 'ccaps',
        '⩐': 'ccupssm',
        '⩓': 'And',
        '⩔': 'Or',
        '⩕': 'andand',
        '⩖': 'oror',
        '⩗': 'orslope',
        '⩘': 'andslope',
        '⩚': 'andv',
        '⩛': 'orv',
        '⩜': 'andd',
        '⩝': 'ord',
        '⩟': 'wedbar',
        '⩦': 'sdote',
        '⩪': 'simdot',
        '⩭': 'congdot',
        '⩭̸': 'ncongdot',
        '⩮': 'easter',
        '⩯': 'apacir',
        '⩰': 'apE',
        '⩰̸': 'napE',
        '⩱': 'eplus',
        '⩲': 'pluse',
        '⩳': 'Esim',
        '⩷': 'eDDot',
        '⩸': 'equivDD',
        '⩹': 'ltcir',
        '⩺': 'gtcir',
        '⩻': 'ltquest',
        '⩼': 'gtquest',
        '⩽': 'les',
        '⩽̸': 'nles',
        '⩾': 'ges',
        '⩾̸': 'nges',
        '⩿': 'lesdot',
        '⪀': 'gesdot',
        '⪁': 'lesdoto',
        '⪂': 'gesdoto',
        '⪃': 'lesdotor',
        '⪄': 'gesdotol',
        '⪅': 'lap',
        '⪆': 'gap',
        '⪇': 'lne',
        '⪈': 'gne',
        '⪉': 'lnap',
        '⪊': 'gnap',
        '⪋': 'lEg',
        '⪌': 'gEl',
        '⪍': 'lsime',
        '⪎': 'gsime',
        '⪏': 'lsimg',
        '⪐': 'gsiml',
        '⪑': 'lgE',
        '⪒': 'glE',
        '⪓': 'lesges',
        '⪔': 'gesles',
        '⪕': 'els',
        '⪖': 'egs',
        '⪗': 'elsdot',
        '⪘': 'egsdot',
        '⪙': 'el',
        '⪚': 'eg',
        '⪝': 'siml',
        '⪞': 'simg',
        '⪟': 'simlE',
        '⪠': 'simgE',
        '⪡': 'LessLess',
        '⪡̸': 'NotNestedLessLess',
        '⪢': 'GreaterGreater',
        '⪢̸': 'NotNestedGreaterGreater',
        '⪤': 'glj',
        '⪥': 'gla',
        '⪦': 'ltcc',
        '⪧': 'gtcc',
        '⪨': 'lescc',
        '⪩': 'gescc',
        '⪪': 'smt',
        '⪫': 'lat',
        '⪬': 'smte',
        '⪬︀': 'smtes',
        '⪭': 'late',
        '⪭︀': 'lates',
        '⪮': 'bumpE',
        '⪯': 'pre',
        '⪯̸': 'npre',
        '⪰': 'sce',
        '⪰̸': 'nsce',
        '⪳': 'prE',
        '⪴': 'scE',
        '⪵': 'prnE',
        '⪶': 'scnE',
        '⪷': 'prap',
        '⪸': 'scap',
        '⪹': 'prnap',
        '⪺': 'scnap',
        '⪻': 'Pr',
        '⪼': 'Sc',
        '⪽': 'subdot',
        '⪾': 'supdot',
        '⪿': 'subplus',
        '⫀': 'supplus',
        '⫁': 'submult',
        '⫂': 'supmult',
        '⫃': 'subedot',
        '⫄': 'supedot',
        '⫅': 'subE',
        '⫅̸': 'nsubE',
        '⫆': 'supE',
        '⫆̸': 'nsupE',
        '⫇': 'subsim',
        '⫈': 'supsim',
        '⫋︀': 'vsubnE',
        '⫋': 'subnE',
        '⫌︀': 'vsupnE',
        '⫌': 'supnE',
        '⫏': 'csub',
        '⫐': 'csup',
        '⫑': 'csube',
        '⫒': 'csupe',
        '⫓': 'subsup',
        '⫔': 'supsub',
        '⫕': 'subsub',
        '⫖': 'supsup',
        '⫗': 'suphsub',
        '⫘': 'supdsub',
        '⫙': 'forkv',
        '⫚': 'topfork',
        '⫛': 'mlcp',
        '⫤': 'Dashv',
        '⫦': 'Vdashl',
        '⫧': 'Barv',
        '⫨': 'vBar',
        '⫩': 'vBarv',
        '⫫': 'Vbar',
        '⫬': 'Not',
        '⫭': 'bNot',
        '⫮': 'rnmid',
        '⫯': 'cirmid',
        '⫰': 'midcir',
        '⫱': 'topcir',
        '⫲': 'nhpar',
        '⫳': 'parsim',
        '⫽': 'parsl',
        '⫽⃥': 'nparsl',
        '♭': 'flat',
        '♮': 'natur',
        '♯': 'sharp',
        '¤': 'curren',
        '¢': 'cent',
        $: 'dollar',
        '£': 'pound',
        '¥': 'yen',
        '€': 'euro',
        '¹': 'sup1',
        '½': 'half',
        '⅓': 'frac13',
        '¼': 'frac14',
        '⅕': 'frac15',
        '⅙': 'frac16',
        '⅛': 'frac18',
        '²': 'sup2',
        '⅔': 'frac23',
        '⅖': 'frac25',
        '³': 'sup3',
        '¾': 'frac34',
        '⅗': 'frac35',
        '⅜': 'frac38',
        '⅘': 'frac45',
        '⅚': 'frac56',
        '⅝': 'frac58',
        '⅞': 'frac78',
        '𝒶': 'ascr',
        '𝕒': 'aopf',
        '𝔞': 'afr',
        '𝔸': 'Aopf',
        '𝔄': 'Afr',
        '𝒜': 'Ascr',
        ª: 'ordf',
        á: 'aacute',
        Á: 'Aacute',
        à: 'agrave',
        À: 'Agrave',
        ă: 'abreve',
        Ă: 'Abreve',
        â: 'acirc',
        Â: 'Acirc',
        å: 'aring',
        Å: 'angst',
        ä: 'auml',
        Ä: 'Auml',
        ã: 'atilde',
        Ã: 'Atilde',
        ą: 'aogon',
        Ą: 'Aogon',
        ā: 'amacr',
        Ā: 'Amacr',
        æ: 'aelig',
        Æ: 'AElig',
        '𝒷': 'bscr',
        '𝕓': 'bopf',
        '𝔟': 'bfr',
        '𝔹': 'Bopf',
        ℬ: 'Bscr',
        '𝔅': 'Bfr',
        '𝔠': 'cfr',
        '𝒸': 'cscr',
        '𝕔': 'copf',
        ℭ: 'Cfr',
        '𝒞': 'Cscr',
        ℂ: 'Copf',
        ć: 'cacute',
        Ć: 'Cacute',
        ĉ: 'ccirc',
        Ĉ: 'Ccirc',
        č: 'ccaron',
        Č: 'Ccaron',
        ċ: 'cdot',
        Ċ: 'Cdot',
        ç: 'ccedil',
        Ç: 'Ccedil',
        '℅': 'incare',
        '𝔡': 'dfr',
        ⅆ: 'dd',
        '𝕕': 'dopf',
        '𝒹': 'dscr',
        '𝒟': 'Dscr',
        '𝔇': 'Dfr',
        ⅅ: 'DD',
        '𝔻': 'Dopf',
        ď: 'dcaron',
        Ď: 'Dcaron',
        đ: 'dstrok',
        Đ: 'Dstrok',
        ð: 'eth',
        Ð: 'ETH',
        ⅇ: 'ee',
        ℯ: 'escr',
        '𝔢': 'efr',
        '𝕖': 'eopf',
        ℰ: 'Escr',
        '𝔈': 'Efr',
        '𝔼': 'Eopf',
        é: 'eacute',
        É: 'Eacute',
        è: 'egrave',
        È: 'Egrave',
        ê: 'ecirc',
        Ê: 'Ecirc',
        ě: 'ecaron',
        Ě: 'Ecaron',
        ë: 'euml',
        Ë: 'Euml',
        ė: 'edot',
        Ė: 'Edot',
        ę: 'eogon',
        Ę: 'Eogon',
        ē: 'emacr',
        Ē: 'Emacr',
        '𝔣': 'ffr',
        '𝕗': 'fopf',
        '𝒻': 'fscr',
        '𝔉': 'Ffr',
        '𝔽': 'Fopf',
        ℱ: 'Fscr',
        ﬀ: 'fflig',
        ﬃ: 'ffilig',
        ﬄ: 'ffllig',
        ﬁ: 'filig',
        fj: 'fjlig',
        ﬂ: 'fllig',
        ƒ: 'fnof',
        ℊ: 'gscr',
        '𝕘': 'gopf',
        '𝔤': 'gfr',
        '𝒢': 'Gscr',
        '𝔾': 'Gopf',
        '𝔊': 'Gfr',
        ǵ: 'gacute',
        ğ: 'gbreve',
        Ğ: 'Gbreve',
        ĝ: 'gcirc',
        Ĝ: 'Gcirc',
        ġ: 'gdot',
        Ġ: 'Gdot',
        Ģ: 'Gcedil',
        '𝔥': 'hfr',
        ℎ: 'planckh',
        '𝒽': 'hscr',
        '𝕙': 'hopf',
        ℋ: 'Hscr',
        ℌ: 'Hfr',
        ℍ: 'Hopf',
        ĥ: 'hcirc',
        Ĥ: 'Hcirc',
        ℏ: 'hbar',
        ħ: 'hstrok',
        Ħ: 'Hstrok',
        '𝕚': 'iopf',
        '𝔦': 'ifr',
        '𝒾': 'iscr',
        ⅈ: 'ii',
        '𝕀': 'Iopf',
        ℐ: 'Iscr',
        ℑ: 'Im',
        í: 'iacute',
        Í: 'Iacute',
        ì: 'igrave',
        Ì: 'Igrave',
        î: 'icirc',
        Î: 'Icirc',
        ï: 'iuml',
        Ï: 'Iuml',
        ĩ: 'itilde',
        Ĩ: 'Itilde',
        İ: 'Idot',
        į: 'iogon',
        Į: 'Iogon',
        ī: 'imacr',
        Ī: 'Imacr',
        ĳ: 'ijlig',
        Ĳ: 'IJlig',
        ı: 'imath',
        '𝒿': 'jscr',
        '𝕛': 'jopf',
        '𝔧': 'jfr',
        '𝒥': 'Jscr',
        '𝔍': 'Jfr',
        '𝕁': 'Jopf',
        ĵ: 'jcirc',
        Ĵ: 'Jcirc',
        ȷ: 'jmath',
        '𝕜': 'kopf',
        '𝓀': 'kscr',
        '𝔨': 'kfr',
        '𝒦': 'Kscr',
        '𝕂': 'Kopf',
        '𝔎': 'Kfr',
        ķ: 'kcedil',
        Ķ: 'Kcedil',
        '𝔩': 'lfr',
        '𝓁': 'lscr',
        ℓ: 'ell',
        '𝕝': 'lopf',
        ℒ: 'Lscr',
        '𝔏': 'Lfr',
        '𝕃': 'Lopf',
        ĺ: 'lacute',
        Ĺ: 'Lacute',
        ľ: 'lcaron',
        Ľ: 'Lcaron',
        ļ: 'lcedil',
        Ļ: 'Lcedil',
        ł: 'lstrok',
        Ł: 'Lstrok',
        ŀ: 'lmidot',
        Ŀ: 'Lmidot',
        '𝔪': 'mfr',
        '𝕞': 'mopf',
        '𝓂': 'mscr',
        '𝔐': 'Mfr',
        '𝕄': 'Mopf',
        ℳ: 'Mscr',
        '𝔫': 'nfr',
        '𝕟': 'nopf',
        '𝓃': 'nscr',
        ℕ: 'Nopf',
        '𝒩': 'Nscr',
        '𝔑': 'Nfr',
        ń: 'nacute',
        Ń: 'Nacute',
        ň: 'ncaron',
        Ň: 'Ncaron',
        ñ: 'ntilde',
        Ñ: 'Ntilde',
        ņ: 'ncedil',
        Ņ: 'Ncedil',
        '№': 'numero',
        ŋ: 'eng',
        Ŋ: 'ENG',
        '𝕠': 'oopf',
        '𝔬': 'ofr',
        ℴ: 'oscr',
        '𝒪': 'Oscr',
        '𝔒': 'Ofr',
        '𝕆': 'Oopf',
        º: 'ordm',
        ó: 'oacute',
        Ó: 'Oacute',
        ò: 'ograve',
        Ò: 'Ograve',
        ô: 'ocirc',
        Ô: 'Ocirc',
        ö: 'ouml',
        Ö: 'Ouml',
        ő: 'odblac',
        Ő: 'Odblac',
        õ: 'otilde',
        Õ: 'Otilde',
        ø: 'oslash',
        Ø: 'Oslash',
        ō: 'omacr',
        Ō: 'Omacr',
        œ: 'oelig',
        Œ: 'OElig',
        '𝔭': 'pfr',
        '𝓅': 'pscr',
        '𝕡': 'popf',
        ℙ: 'Popf',
        '𝔓': 'Pfr',
        '𝒫': 'Pscr',
        '𝕢': 'qopf',
        '𝔮': 'qfr',
        '𝓆': 'qscr',
        '𝒬': 'Qscr',
        '𝔔': 'Qfr',
        ℚ: 'Qopf',
        ĸ: 'kgreen',
        '𝔯': 'rfr',
        '𝕣': 'ropf',
        '𝓇': 'rscr',
        ℛ: 'Rscr',
        ℜ: 'Re',
        ℝ: 'Ropf',
        ŕ: 'racute',
        Ŕ: 'Racute',
        ř: 'rcaron',
        Ř: 'Rcaron',
        ŗ: 'rcedil',
        Ŗ: 'Rcedil',
        '𝕤': 'sopf',
        '𝓈': 'sscr',
        '𝔰': 'sfr',
        '𝕊': 'Sopf',
        '𝔖': 'Sfr',
        '𝒮': 'Sscr',
        'Ⓢ': 'oS',
        ś: 'sacute',
        Ś: 'Sacute',
        ŝ: 'scirc',
        Ŝ: 'Scirc',
        š: 'scaron',
        Š: 'Scaron',
        ş: 'scedil',
        Ş: 'Scedil',
        ß: 'szlig',
        '𝔱': 'tfr',
        '𝓉': 'tscr',
        '𝕥': 'topf',
        '𝒯': 'Tscr',
        '𝔗': 'Tfr',
        '𝕋': 'Topf',
        ť: 'tcaron',
        Ť: 'Tcaron',
        ţ: 'tcedil',
        Ţ: 'Tcedil',
        '™': 'trade',
        ŧ: 'tstrok',
        Ŧ: 'Tstrok',
        '𝓊': 'uscr',
        '𝕦': 'uopf',
        '𝔲': 'ufr',
        '𝕌': 'Uopf',
        '𝔘': 'Ufr',
        '𝒰': 'Uscr',
        ú: 'uacute',
        Ú: 'Uacute',
        ù: 'ugrave',
        Ù: 'Ugrave',
        ŭ: 'ubreve',
        Ŭ: 'Ubreve',
        û: 'ucirc',
        Û: 'Ucirc',
        ů: 'uring',
        Ů: 'Uring',
        ü: 'uuml',
        Ü: 'Uuml',
        ű: 'udblac',
        Ű: 'Udblac',
        ũ: 'utilde',
        Ũ: 'Utilde',
        ų: 'uogon',
        Ų: 'Uogon',
        ū: 'umacr',
        Ū: 'Umacr',
        '𝔳': 'vfr',
        '𝕧': 'vopf',
        '𝓋': 'vscr',
        '𝔙': 'Vfr',
        '𝕍': 'Vopf',
        '𝒱': 'Vscr',
        '𝕨': 'wopf',
        '𝓌': 'wscr',
        '𝔴': 'wfr',
        '𝒲': 'Wscr',
        '𝕎': 'Wopf',
        '𝔚': 'Wfr',
        ŵ: 'wcirc',
        Ŵ: 'Wcirc',
        '𝔵': 'xfr',
        '𝓍': 'xscr',
        '𝕩': 'xopf',
        '𝕏': 'Xopf',
        '𝔛': 'Xfr',
        '𝒳': 'Xscr',
        '𝔶': 'yfr',
        '𝓎': 'yscr',
        '𝕪': 'yopf',
        '𝒴': 'Yscr',
        '𝔜': 'Yfr',
        '𝕐': 'Yopf',
        ý: 'yacute',
        Ý: 'Yacute',
        ŷ: 'ycirc',
        Ŷ: 'Ycirc',
        ÿ: 'yuml',
        Ÿ: 'Yuml',
        '𝓏': 'zscr',
        '𝔷': 'zfr',
        '𝕫': 'zopf',
        ℨ: 'Zfr',
        ℤ: 'Zopf',
        '𝒵': 'Zscr',
        ź: 'zacute',
        Ź: 'Zacute',
        ž: 'zcaron',
        Ž: 'Zcaron',
        ż: 'zdot',
        Ż: 'Zdot',
        Ƶ: 'imped',
        þ: 'thorn',
        Þ: 'THORN',
        ŉ: 'napos',
        α: 'alpha',
        Α: 'Alpha',
        β: 'beta',
        Β: 'Beta',
        γ: 'gamma',
        Γ: 'Gamma',
        δ: 'delta',
        Δ: 'Delta',
        ε: 'epsi',
        ϵ: 'epsiv',
        Ε: 'Epsilon',
        ϝ: 'gammad',
        Ϝ: 'Gammad',
        ζ: 'zeta',
        Ζ: 'Zeta',
        η: 'eta',
        Η: 'Eta',
        θ: 'theta',
        ϑ: 'thetav',
        Θ: 'Theta',
        ι: 'iota',
        Ι: 'Iota',
        κ: 'kappa',
        ϰ: 'kappav',
        Κ: 'Kappa',
        λ: 'lambda',
        Λ: 'Lambda',
        μ: 'mu',
        µ: 'micro',
        Μ: 'Mu',
        ν: 'nu',
        Ν: 'Nu',
        ξ: 'xi',
        Ξ: 'Xi',
        ο: 'omicron',
        Ο: 'Omicron',
        π: 'pi',
        ϖ: 'piv',
        Π: 'Pi',
        ρ: 'rho',
        ϱ: 'rhov',
        Ρ: 'Rho',
        σ: 'sigma',
        Σ: 'Sigma',
        ς: 'sigmaf',
        τ: 'tau',
        Τ: 'Tau',
        υ: 'upsi',
        Υ: 'Upsilon',
        ϒ: 'Upsi',
        φ: 'phi',
        ϕ: 'phiv',
        Φ: 'Phi',
        χ: 'chi',
        Χ: 'Chi',
        ψ: 'psi',
        Ψ: 'Psi',
        ω: 'omega',
        Ω: 'ohm',
        а: 'acy',
        А: 'Acy',
        б: 'bcy',
        Б: 'Bcy',
        в: 'vcy',
        В: 'Vcy',
        г: 'gcy',
        Г: 'Gcy',
        ѓ: 'gjcy',
        Ѓ: 'GJcy',
        д: 'dcy',
        Д: 'Dcy',
        ђ: 'djcy',
        Ђ: 'DJcy',
        е: 'iecy',
        Е: 'IEcy',
        ё: 'iocy',
        Ё: 'IOcy',
        є: 'jukcy',
        Є: 'Jukcy',
        ж: 'zhcy',
        Ж: 'ZHcy',
        з: 'zcy',
        З: 'Zcy',
        ѕ: 'dscy',
        Ѕ: 'DScy',
        и: 'icy',
        И: 'Icy',
        і: 'iukcy',
        І: 'Iukcy',
        ї: 'yicy',
        Ї: 'YIcy',
        й: 'jcy',
        Й: 'Jcy',
        ј: 'jsercy',
        Ј: 'Jsercy',
        к: 'kcy',
        К: 'Kcy',
        ќ: 'kjcy',
        Ќ: 'KJcy',
        л: 'lcy',
        Л: 'Lcy',
        љ: 'ljcy',
        Љ: 'LJcy',
        м: 'mcy',
        М: 'Mcy',
        н: 'ncy',
        Н: 'Ncy',
        њ: 'njcy',
        Њ: 'NJcy',
        о: 'ocy',
        О: 'Ocy',
        п: 'pcy',
        П: 'Pcy',
        р: 'rcy',
        Р: 'Rcy',
        с: 'scy',
        С: 'Scy',
        т: 'tcy',
        Т: 'Tcy',
        ћ: 'tshcy',
        Ћ: 'TSHcy',
        у: 'ucy',
        У: 'Ucy',
        ў: 'ubrcy',
        Ў: 'Ubrcy',
        ф: 'fcy',
        Ф: 'Fcy',
        х: 'khcy',
        Х: 'KHcy',
        ц: 'tscy',
        Ц: 'TScy',
        ч: 'chcy',
        Ч: 'CHcy',
        џ: 'dzcy',
        Џ: 'DZcy',
        ш: 'shcy',
        Ш: 'SHcy',
        щ: 'shchcy',
        Щ: 'SHCHcy',
        ъ: 'hardcy',
        Ъ: 'HARDcy',
        ы: 'ycy',
        Ы: 'Ycy',
        ь: 'softcy',
        Ь: 'SOFTcy',
        э: 'ecy',
        Э: 'Ecy',
        ю: 'yucy',
        Ю: 'YUcy',
        я: 'yacy',
        Я: 'YAcy',
        ℵ: 'aleph',
        ℶ: 'beth',
        ℷ: 'gimel',
        ℸ: 'daleth',
      },
      f = /["&'<>`]/g,
      p = {
        '"': '&quot;',
        '&': '&amp;',
        "'": '&#x27;',
        '<': '&lt;',
        '>': '&gt;',
        '`': '&#x60;',
      },
      m = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
      D =
        /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
      w =
        /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
      S = {
        aacute: 'á',
        Aacute: 'Á',
        abreve: 'ă',
        Abreve: 'Ă',
        ac: '∾',
        acd: '∿',
        acE: '∾̳',
        acirc: 'â',
        Acirc: 'Â',
        acute: '´',
        acy: 'а',
        Acy: 'А',
        aelig: 'æ',
        AElig: 'Æ',
        af: '⁡',
        afr: '𝔞',
        Afr: '𝔄',
        agrave: 'à',
        Agrave: 'À',
        alefsym: 'ℵ',
        aleph: 'ℵ',
        alpha: 'α',
        Alpha: 'Α',
        amacr: 'ā',
        Amacr: 'Ā',
        amalg: '⨿',
        amp: '&',
        AMP: '&',
        and: '∧',
        And: '⩓',
        andand: '⩕',
        andd: '⩜',
        andslope: '⩘',
        andv: '⩚',
        ang: '∠',
        ange: '⦤',
        angle: '∠',
        angmsd: '∡',
        angmsdaa: '⦨',
        angmsdab: '⦩',
        angmsdac: '⦪',
        angmsdad: '⦫',
        angmsdae: '⦬',
        angmsdaf: '⦭',
        angmsdag: '⦮',
        angmsdah: '⦯',
        angrt: '∟',
        angrtvb: '⊾',
        angrtvbd: '⦝',
        angsph: '∢',
        angst: 'Å',
        angzarr: '⍼',
        aogon: 'ą',
        Aogon: 'Ą',
        aopf: '𝕒',
        Aopf: '𝔸',
        ap: '≈',
        apacir: '⩯',
        ape: '≊',
        apE: '⩰',
        apid: '≋',
        apos: "'",
        ApplyFunction: '⁡',
        approx: '≈',
        approxeq: '≊',
        aring: 'å',
        Aring: 'Å',
        ascr: '𝒶',
        Ascr: '𝒜',
        Assign: '≔',
        ast: '*',
        asymp: '≈',
        asympeq: '≍',
        atilde: 'ã',
        Atilde: 'Ã',
        auml: 'ä',
        Auml: 'Ä',
        awconint: '∳',
        awint: '⨑',
        backcong: '≌',
        backepsilon: '϶',
        backprime: '‵',
        backsim: '∽',
        backsimeq: '⋍',
        Backslash: '∖',
        Barv: '⫧',
        barvee: '⊽',
        barwed: '⌅',
        Barwed: '⌆',
        barwedge: '⌅',
        bbrk: '⎵',
        bbrktbrk: '⎶',
        bcong: '≌',
        bcy: 'б',
        Bcy: 'Б',
        bdquo: '„',
        becaus: '∵',
        because: '∵',
        Because: '∵',
        bemptyv: '⦰',
        bepsi: '϶',
        bernou: 'ℬ',
        Bernoullis: 'ℬ',
        beta: 'β',
        Beta: 'Β',
        beth: 'ℶ',
        between: '≬',
        bfr: '𝔟',
        Bfr: '𝔅',
        bigcap: '⋂',
        bigcirc: '◯',
        bigcup: '⋃',
        bigodot: '⨀',
        bigoplus: '⨁',
        bigotimes: '⨂',
        bigsqcup: '⨆',
        bigstar: '★',
        bigtriangledown: '▽',
        bigtriangleup: '△',
        biguplus: '⨄',
        bigvee: '⋁',
        bigwedge: '⋀',
        bkarow: '⤍',
        blacklozenge: '⧫',
        blacksquare: '▪',
        blacktriangle: '▴',
        blacktriangledown: '▾',
        blacktriangleleft: '◂',
        blacktriangleright: '▸',
        blank: '␣',
        blk12: '▒',
        blk14: '░',
        blk34: '▓',
        block: '█',
        bne: '=⃥',
        bnequiv: '≡⃥',
        bnot: '⌐',
        bNot: '⫭',
        bopf: '𝕓',
        Bopf: '𝔹',
        bot: '⊥',
        bottom: '⊥',
        bowtie: '⋈',
        boxbox: '⧉',
        boxdl: '┐',
        boxdL: '╕',
        boxDl: '╖',
        boxDL: '╗',
        boxdr: '┌',
        boxdR: '╒',
        boxDr: '╓',
        boxDR: '╔',
        boxh: '─',
        boxH: '═',
        boxhd: '┬',
        boxhD: '╥',
        boxHd: '╤',
        boxHD: '╦',
        boxhu: '┴',
        boxhU: '╨',
        boxHu: '╧',
        boxHU: '╩',
        boxminus: '⊟',
        boxplus: '⊞',
        boxtimes: '⊠',
        boxul: '┘',
        boxuL: '╛',
        boxUl: '╜',
        boxUL: '╝',
        boxur: '└',
        boxuR: '╘',
        boxUr: '╙',
        boxUR: '╚',
        boxv: '│',
        boxV: '║',
        boxvh: '┼',
        boxvH: '╪',
        boxVh: '╫',
        boxVH: '╬',
        boxvl: '┤',
        boxvL: '╡',
        boxVl: '╢',
        boxVL: '╣',
        boxvr: '├',
        boxvR: '╞',
        boxVr: '╟',
        boxVR: '╠',
        bprime: '‵',
        breve: '˘',
        Breve: '˘',
        brvbar: '¦',
        bscr: '𝒷',
        Bscr: 'ℬ',
        bsemi: '⁏',
        bsim: '∽',
        bsime: '⋍',
        bsol: '\\',
        bsolb: '⧅',
        bsolhsub: '⟈',
        bull: '•',
        bullet: '•',
        bump: '≎',
        bumpe: '≏',
        bumpE: '⪮',
        bumpeq: '≏',
        Bumpeq: '≎',
        cacute: 'ć',
        Cacute: 'Ć',
        cap: '∩',
        Cap: '⋒',
        capand: '⩄',
        capbrcup: '⩉',
        capcap: '⩋',
        capcup: '⩇',
        capdot: '⩀',
        CapitalDifferentialD: 'ⅅ',
        caps: '∩︀',
        caret: '⁁',
        caron: 'ˇ',
        Cayleys: 'ℭ',
        ccaps: '⩍',
        ccaron: 'č',
        Ccaron: 'Č',
        ccedil: 'ç',
        Ccedil: 'Ç',
        ccirc: 'ĉ',
        Ccirc: 'Ĉ',
        Cconint: '∰',
        ccups: '⩌',
        ccupssm: '⩐',
        cdot: 'ċ',
        Cdot: 'Ċ',
        cedil: '¸',
        Cedilla: '¸',
        cemptyv: '⦲',
        cent: '¢',
        centerdot: '·',
        CenterDot: '·',
        cfr: '𝔠',
        Cfr: 'ℭ',
        chcy: 'ч',
        CHcy: 'Ч',
        check: '✓',
        checkmark: '✓',
        chi: 'χ',
        Chi: 'Χ',
        cir: '○',
        circ: 'ˆ',
        circeq: '≗',
        circlearrowleft: '↺',
        circlearrowright: '↻',
        circledast: '⊛',
        circledcirc: '⊚',
        circleddash: '⊝',
        CircleDot: '⊙',
        circledR: '®',
        circledS: 'Ⓢ',
        CircleMinus: '⊖',
        CirclePlus: '⊕',
        CircleTimes: '⊗',
        cire: '≗',
        cirE: '⧃',
        cirfnint: '⨐',
        cirmid: '⫯',
        cirscir: '⧂',
        ClockwiseContourIntegral: '∲',
        CloseCurlyDoubleQuote: '”',
        CloseCurlyQuote: '’',
        clubs: '♣',
        clubsuit: '♣',
        colon: ':',
        Colon: '∷',
        colone: '≔',
        Colone: '⩴',
        coloneq: '≔',
        comma: ',',
        commat: '@',
        comp: '∁',
        compfn: '∘',
        complement: '∁',
        complexes: 'ℂ',
        cong: '≅',
        congdot: '⩭',
        Congruent: '≡',
        conint: '∮',
        Conint: '∯',
        ContourIntegral: '∮',
        copf: '𝕔',
        Copf: 'ℂ',
        coprod: '∐',
        Coproduct: '∐',
        copy: '©',
        COPY: '©',
        copysr: '℗',
        CounterClockwiseContourIntegral: '∳',
        crarr: '↵',
        cross: '✗',
        Cross: '⨯',
        cscr: '𝒸',
        Cscr: '𝒞',
        csub: '⫏',
        csube: '⫑',
        csup: '⫐',
        csupe: '⫒',
        ctdot: '⋯',
        cudarrl: '⤸',
        cudarrr: '⤵',
        cuepr: '⋞',
        cuesc: '⋟',
        cularr: '↶',
        cularrp: '⤽',
        cup: '∪',
        Cup: '⋓',
        cupbrcap: '⩈',
        cupcap: '⩆',
        CupCap: '≍',
        cupcup: '⩊',
        cupdot: '⊍',
        cupor: '⩅',
        cups: '∪︀',
        curarr: '↷',
        curarrm: '⤼',
        curlyeqprec: '⋞',
        curlyeqsucc: '⋟',
        curlyvee: '⋎',
        curlywedge: '⋏',
        curren: '¤',
        curvearrowleft: '↶',
        curvearrowright: '↷',
        cuvee: '⋎',
        cuwed: '⋏',
        cwconint: '∲',
        cwint: '∱',
        cylcty: '⌭',
        dagger: '†',
        Dagger: '‡',
        daleth: 'ℸ',
        darr: '↓',
        dArr: '⇓',
        Darr: '↡',
        dash: '‐',
        dashv: '⊣',
        Dashv: '⫤',
        dbkarow: '⤏',
        dblac: '˝',
        dcaron: 'ď',
        Dcaron: 'Ď',
        dcy: 'д',
        Dcy: 'Д',
        dd: 'ⅆ',
        DD: 'ⅅ',
        ddagger: '‡',
        ddarr: '⇊',
        DDotrahd: '⤑',
        ddotseq: '⩷',
        deg: '°',
        Del: '∇',
        delta: 'δ',
        Delta: 'Δ',
        demptyv: '⦱',
        dfisht: '⥿',
        dfr: '𝔡',
        Dfr: '𝔇',
        dHar: '⥥',
        dharl: '⇃',
        dharr: '⇂',
        DiacriticalAcute: '´',
        DiacriticalDot: '˙',
        DiacriticalDoubleAcute: '˝',
        DiacriticalGrave: '`',
        DiacriticalTilde: '˜',
        diam: '⋄',
        diamond: '⋄',
        Diamond: '⋄',
        diamondsuit: '♦',
        diams: '♦',
        die: '¨',
        DifferentialD: 'ⅆ',
        digamma: 'ϝ',
        disin: '⋲',
        div: '÷',
        divide: '÷',
        divideontimes: '⋇',
        divonx: '⋇',
        djcy: 'ђ',
        DJcy: 'Ђ',
        dlcorn: '⌞',
        dlcrop: '⌍',
        dollar: '$',
        dopf: '𝕕',
        Dopf: '𝔻',
        dot: '˙',
        Dot: '¨',
        DotDot: '⃜',
        doteq: '≐',
        doteqdot: '≑',
        DotEqual: '≐',
        dotminus: '∸',
        dotplus: '∔',
        dotsquare: '⊡',
        doublebarwedge: '⌆',
        DoubleContourIntegral: '∯',
        DoubleDot: '¨',
        DoubleDownArrow: '⇓',
        DoubleLeftArrow: '⇐',
        DoubleLeftRightArrow: '⇔',
        DoubleLeftTee: '⫤',
        DoubleLongLeftArrow: '⟸',
        DoubleLongLeftRightArrow: '⟺',
        DoubleLongRightArrow: '⟹',
        DoubleRightArrow: '⇒',
        DoubleRightTee: '⊨',
        DoubleUpArrow: '⇑',
        DoubleUpDownArrow: '⇕',
        DoubleVerticalBar: '∥',
        downarrow: '↓',
        Downarrow: '⇓',
        DownArrow: '↓',
        DownArrowBar: '⤓',
        DownArrowUpArrow: '⇵',
        DownBreve: '̑',
        downdownarrows: '⇊',
        downharpoonleft: '⇃',
        downharpoonright: '⇂',
        DownLeftRightVector: '⥐',
        DownLeftTeeVector: '⥞',
        DownLeftVector: '↽',
        DownLeftVectorBar: '⥖',
        DownRightTeeVector: '⥟',
        DownRightVector: '⇁',
        DownRightVectorBar: '⥗',
        DownTee: '⊤',
        DownTeeArrow: '↧',
        drbkarow: '⤐',
        drcorn: '⌟',
        drcrop: '⌌',
        dscr: '𝒹',
        Dscr: '𝒟',
        dscy: 'ѕ',
        DScy: 'Ѕ',
        dsol: '⧶',
        dstrok: 'đ',
        Dstrok: 'Đ',
        dtdot: '⋱',
        dtri: '▿',
        dtrif: '▾',
        duarr: '⇵',
        duhar: '⥯',
        dwangle: '⦦',
        dzcy: 'џ',
        DZcy: 'Џ',
        dzigrarr: '⟿',
        eacute: 'é',
        Eacute: 'É',
        easter: '⩮',
        ecaron: 'ě',
        Ecaron: 'Ě',
        ecir: '≖',
        ecirc: 'ê',
        Ecirc: 'Ê',
        ecolon: '≕',
        ecy: 'э',
        Ecy: 'Э',
        eDDot: '⩷',
        edot: 'ė',
        eDot: '≑',
        Edot: 'Ė',
        ee: 'ⅇ',
        efDot: '≒',
        efr: '𝔢',
        Efr: '𝔈',
        eg: '⪚',
        egrave: 'è',
        Egrave: 'È',
        egs: '⪖',
        egsdot: '⪘',
        el: '⪙',
        Element: '∈',
        elinters: '⏧',
        ell: 'ℓ',
        els: '⪕',
        elsdot: '⪗',
        emacr: 'ē',
        Emacr: 'Ē',
        empty: '∅',
        emptyset: '∅',
        EmptySmallSquare: '◻',
        emptyv: '∅',
        EmptyVerySmallSquare: '▫',
        emsp: ' ',
        emsp13: ' ',
        emsp14: ' ',
        eng: 'ŋ',
        ENG: 'Ŋ',
        ensp: ' ',
        eogon: 'ę',
        Eogon: 'Ę',
        eopf: '𝕖',
        Eopf: '𝔼',
        epar: '⋕',
        eparsl: '⧣',
        eplus: '⩱',
        epsi: 'ε',
        epsilon: 'ε',
        Epsilon: 'Ε',
        epsiv: 'ϵ',
        eqcirc: '≖',
        eqcolon: '≕',
        eqsim: '≂',
        eqslantgtr: '⪖',
        eqslantless: '⪕',
        Equal: '⩵',
        equals: '=',
        EqualTilde: '≂',
        equest: '≟',
        Equilibrium: '⇌',
        equiv: '≡',
        equivDD: '⩸',
        eqvparsl: '⧥',
        erarr: '⥱',
        erDot: '≓',
        escr: 'ℯ',
        Escr: 'ℰ',
        esdot: '≐',
        esim: '≂',
        Esim: '⩳',
        eta: 'η',
        Eta: 'Η',
        eth: 'ð',
        ETH: 'Ð',
        euml: 'ë',
        Euml: 'Ë',
        euro: '€',
        excl: '!',
        exist: '∃',
        Exists: '∃',
        expectation: 'ℰ',
        exponentiale: 'ⅇ',
        ExponentialE: 'ⅇ',
        fallingdotseq: '≒',
        fcy: 'ф',
        Fcy: 'Ф',
        female: '♀',
        ffilig: 'ﬃ',
        fflig: 'ﬀ',
        ffllig: 'ﬄ',
        ffr: '𝔣',
        Ffr: '𝔉',
        filig: 'ﬁ',
        FilledSmallSquare: '◼',
        FilledVerySmallSquare: '▪',
        fjlig: 'fj',
        flat: '♭',
        fllig: 'ﬂ',
        fltns: '▱',
        fnof: 'ƒ',
        fopf: '𝕗',
        Fopf: '𝔽',
        forall: '∀',
        ForAll: '∀',
        fork: '⋔',
        forkv: '⫙',
        Fouriertrf: 'ℱ',
        fpartint: '⨍',
        frac12: '½',
        frac13: '⅓',
        frac14: '¼',
        frac15: '⅕',
        frac16: '⅙',
        frac18: '⅛',
        frac23: '⅔',
        frac25: '⅖',
        frac34: '¾',
        frac35: '⅗',
        frac38: '⅜',
        frac45: '⅘',
        frac56: '⅚',
        frac58: '⅝',
        frac78: '⅞',
        frasl: '⁄',
        frown: '⌢',
        fscr: '𝒻',
        Fscr: 'ℱ',
        gacute: 'ǵ',
        gamma: 'γ',
        Gamma: 'Γ',
        gammad: 'ϝ',
        Gammad: 'Ϝ',
        gap: '⪆',
        gbreve: 'ğ',
        Gbreve: 'Ğ',
        Gcedil: 'Ģ',
        gcirc: 'ĝ',
        Gcirc: 'Ĝ',
        gcy: 'г',
        Gcy: 'Г',
        gdot: 'ġ',
        Gdot: 'Ġ',
        ge: '≥',
        gE: '≧',
        gel: '⋛',
        gEl: '⪌',
        geq: '≥',
        geqq: '≧',
        geqslant: '⩾',
        ges: '⩾',
        gescc: '⪩',
        gesdot: '⪀',
        gesdoto: '⪂',
        gesdotol: '⪄',
        gesl: '⋛︀',
        gesles: '⪔',
        gfr: '𝔤',
        Gfr: '𝔊',
        gg: '≫',
        Gg: '⋙',
        ggg: '⋙',
        gimel: 'ℷ',
        gjcy: 'ѓ',
        GJcy: 'Ѓ',
        gl: '≷',
        gla: '⪥',
        glE: '⪒',
        glj: '⪤',
        gnap: '⪊',
        gnapprox: '⪊',
        gne: '⪈',
        gnE: '≩',
        gneq: '⪈',
        gneqq: '≩',
        gnsim: '⋧',
        gopf: '𝕘',
        Gopf: '𝔾',
        grave: '`',
        GreaterEqual: '≥',
        GreaterEqualLess: '⋛',
        GreaterFullEqual: '≧',
        GreaterGreater: '⪢',
        GreaterLess: '≷',
        GreaterSlantEqual: '⩾',
        GreaterTilde: '≳',
        gscr: 'ℊ',
        Gscr: '𝒢',
        gsim: '≳',
        gsime: '⪎',
        gsiml: '⪐',
        gt: '>',
        Gt: '≫',
        GT: '>',
        gtcc: '⪧',
        gtcir: '⩺',
        gtdot: '⋗',
        gtlPar: '⦕',
        gtquest: '⩼',
        gtrapprox: '⪆',
        gtrarr: '⥸',
        gtrdot: '⋗',
        gtreqless: '⋛',
        gtreqqless: '⪌',
        gtrless: '≷',
        gtrsim: '≳',
        gvertneqq: '≩︀',
        gvnE: '≩︀',
        Hacek: 'ˇ',
        hairsp: ' ',
        half: '½',
        hamilt: 'ℋ',
        hardcy: 'ъ',
        HARDcy: 'Ъ',
        harr: '↔',
        hArr: '⇔',
        harrcir: '⥈',
        harrw: '↭',
        Hat: '^',
        hbar: 'ℏ',
        hcirc: 'ĥ',
        Hcirc: 'Ĥ',
        hearts: '♥',
        heartsuit: '♥',
        hellip: '…',
        hercon: '⊹',
        hfr: '𝔥',
        Hfr: 'ℌ',
        HilbertSpace: 'ℋ',
        hksearow: '⤥',
        hkswarow: '⤦',
        hoarr: '⇿',
        homtht: '∻',
        hookleftarrow: '↩',
        hookrightarrow: '↪',
        hopf: '𝕙',
        Hopf: 'ℍ',
        horbar: '―',
        HorizontalLine: '─',
        hscr: '𝒽',
        Hscr: 'ℋ',
        hslash: 'ℏ',
        hstrok: 'ħ',
        Hstrok: 'Ħ',
        HumpDownHump: '≎',
        HumpEqual: '≏',
        hybull: '⁃',
        hyphen: '‐',
        iacute: 'í',
        Iacute: 'Í',
        ic: '⁣',
        icirc: 'î',
        Icirc: 'Î',
        icy: 'и',
        Icy: 'И',
        Idot: 'İ',
        iecy: 'е',
        IEcy: 'Е',
        iexcl: '¡',
        iff: '⇔',
        ifr: '𝔦',
        Ifr: 'ℑ',
        igrave: 'ì',
        Igrave: 'Ì',
        ii: 'ⅈ',
        iiiint: '⨌',
        iiint: '∭',
        iinfin: '⧜',
        iiota: '℩',
        ijlig: 'ĳ',
        IJlig: 'Ĳ',
        Im: 'ℑ',
        imacr: 'ī',
        Imacr: 'Ī',
        image: 'ℑ',
        ImaginaryI: 'ⅈ',
        imagline: 'ℐ',
        imagpart: 'ℑ',
        imath: 'ı',
        imof: '⊷',
        imped: 'Ƶ',
        Implies: '⇒',
        in: '∈',
        incare: '℅',
        infin: '∞',
        infintie: '⧝',
        inodot: 'ı',
        int: '∫',
        Int: '∬',
        intcal: '⊺',
        integers: 'ℤ',
        Integral: '∫',
        intercal: '⊺',
        Intersection: '⋂',
        intlarhk: '⨗',
        intprod: '⨼',
        InvisibleComma: '⁣',
        InvisibleTimes: '⁢',
        iocy: 'ё',
        IOcy: 'Ё',
        iogon: 'į',
        Iogon: 'Į',
        iopf: '𝕚',
        Iopf: '𝕀',
        iota: 'ι',
        Iota: 'Ι',
        iprod: '⨼',
        iquest: '¿',
        iscr: '𝒾',
        Iscr: 'ℐ',
        isin: '∈',
        isindot: '⋵',
        isinE: '⋹',
        isins: '⋴',
        isinsv: '⋳',
        isinv: '∈',
        it: '⁢',
        itilde: 'ĩ',
        Itilde: 'Ĩ',
        iukcy: 'і',
        Iukcy: 'І',
        iuml: 'ï',
        Iuml: 'Ï',
        jcirc: 'ĵ',
        Jcirc: 'Ĵ',
        jcy: 'й',
        Jcy: 'Й',
        jfr: '𝔧',
        Jfr: '𝔍',
        jmath: 'ȷ',
        jopf: '𝕛',
        Jopf: '𝕁',
        jscr: '𝒿',
        Jscr: '𝒥',
        jsercy: 'ј',
        Jsercy: 'Ј',
        jukcy: 'є',
        Jukcy: 'Є',
        kappa: 'κ',
        Kappa: 'Κ',
        kappav: 'ϰ',
        kcedil: 'ķ',
        Kcedil: 'Ķ',
        kcy: 'к',
        Kcy: 'К',
        kfr: '𝔨',
        Kfr: '𝔎',
        kgreen: 'ĸ',
        khcy: 'х',
        KHcy: 'Х',
        kjcy: 'ќ',
        KJcy: 'Ќ',
        kopf: '𝕜',
        Kopf: '𝕂',
        kscr: '𝓀',
        Kscr: '𝒦',
        lAarr: '⇚',
        lacute: 'ĺ',
        Lacute: 'Ĺ',
        laemptyv: '⦴',
        lagran: 'ℒ',
        lambda: 'λ',
        Lambda: 'Λ',
        lang: '⟨',
        Lang: '⟪',
        langd: '⦑',
        langle: '⟨',
        lap: '⪅',
        Laplacetrf: 'ℒ',
        laquo: '«',
        larr: '←',
        lArr: '⇐',
        Larr: '↞',
        larrb: '⇤',
        larrbfs: '⤟',
        larrfs: '⤝',
        larrhk: '↩',
        larrlp: '↫',
        larrpl: '⤹',
        larrsim: '⥳',
        larrtl: '↢',
        lat: '⪫',
        latail: '⤙',
        lAtail: '⤛',
        late: '⪭',
        lates: '⪭︀',
        lbarr: '⤌',
        lBarr: '⤎',
        lbbrk: '❲',
        lbrace: '{',
        lbrack: '[',
        lbrke: '⦋',
        lbrksld: '⦏',
        lbrkslu: '⦍',
        lcaron: 'ľ',
        Lcaron: 'Ľ',
        lcedil: 'ļ',
        Lcedil: 'Ļ',
        lceil: '⌈',
        lcub: '{',
        lcy: 'л',
        Lcy: 'Л',
        ldca: '⤶',
        ldquo: '“',
        ldquor: '„',
        ldrdhar: '⥧',
        ldrushar: '⥋',
        ldsh: '↲',
        le: '≤',
        lE: '≦',
        LeftAngleBracket: '⟨',
        leftarrow: '←',
        Leftarrow: '⇐',
        LeftArrow: '←',
        LeftArrowBar: '⇤',
        LeftArrowRightArrow: '⇆',
        leftarrowtail: '↢',
        LeftCeiling: '⌈',
        LeftDoubleBracket: '⟦',
        LeftDownTeeVector: '⥡',
        LeftDownVector: '⇃',
        LeftDownVectorBar: '⥙',
        LeftFloor: '⌊',
        leftharpoondown: '↽',
        leftharpoonup: '↼',
        leftleftarrows: '⇇',
        leftrightarrow: '↔',
        Leftrightarrow: '⇔',
        LeftRightArrow: '↔',
        leftrightarrows: '⇆',
        leftrightharpoons: '⇋',
        leftrightsquigarrow: '↭',
        LeftRightVector: '⥎',
        LeftTee: '⊣',
        LeftTeeArrow: '↤',
        LeftTeeVector: '⥚',
        leftthreetimes: '⋋',
        LeftTriangle: '⊲',
        LeftTriangleBar: '⧏',
        LeftTriangleEqual: '⊴',
        LeftUpDownVector: '⥑',
        LeftUpTeeVector: '⥠',
        LeftUpVector: '↿',
        LeftUpVectorBar: '⥘',
        LeftVector: '↼',
        LeftVectorBar: '⥒',
        leg: '⋚',
        lEg: '⪋',
        leq: '≤',
        leqq: '≦',
        leqslant: '⩽',
        les: '⩽',
        lescc: '⪨',
        lesdot: '⩿',
        lesdoto: '⪁',
        lesdotor: '⪃',
        lesg: '⋚︀',
        lesges: '⪓',
        lessapprox: '⪅',
        lessdot: '⋖',
        lesseqgtr: '⋚',
        lesseqqgtr: '⪋',
        LessEqualGreater: '⋚',
        LessFullEqual: '≦',
        LessGreater: '≶',
        lessgtr: '≶',
        LessLess: '⪡',
        lesssim: '≲',
        LessSlantEqual: '⩽',
        LessTilde: '≲',
        lfisht: '⥼',
        lfloor: '⌊',
        lfr: '𝔩',
        Lfr: '𝔏',
        lg: '≶',
        lgE: '⪑',
        lHar: '⥢',
        lhard: '↽',
        lharu: '↼',
        lharul: '⥪',
        lhblk: '▄',
        ljcy: 'љ',
        LJcy: 'Љ',
        ll: '≪',
        Ll: '⋘',
        llarr: '⇇',
        llcorner: '⌞',
        Lleftarrow: '⇚',
        llhard: '⥫',
        lltri: '◺',
        lmidot: 'ŀ',
        Lmidot: 'Ŀ',
        lmoust: '⎰',
        lmoustache: '⎰',
        lnap: '⪉',
        lnapprox: '⪉',
        lne: '⪇',
        lnE: '≨',
        lneq: '⪇',
        lneqq: '≨',
        lnsim: '⋦',
        loang: '⟬',
        loarr: '⇽',
        lobrk: '⟦',
        longleftarrow: '⟵',
        Longleftarrow: '⟸',
        LongLeftArrow: '⟵',
        longleftrightarrow: '⟷',
        Longleftrightarrow: '⟺',
        LongLeftRightArrow: '⟷',
        longmapsto: '⟼',
        longrightarrow: '⟶',
        Longrightarrow: '⟹',
        LongRightArrow: '⟶',
        looparrowleft: '↫',
        looparrowright: '↬',
        lopar: '⦅',
        lopf: '𝕝',
        Lopf: '𝕃',
        loplus: '⨭',
        lotimes: '⨴',
        lowast: '∗',
        lowbar: '_',
        LowerLeftArrow: '↙',
        LowerRightArrow: '↘',
        loz: '◊',
        lozenge: '◊',
        lozf: '⧫',
        lpar: '(',
        lparlt: '⦓',
        lrarr: '⇆',
        lrcorner: '⌟',
        lrhar: '⇋',
        lrhard: '⥭',
        lrm: '‎',
        lrtri: '⊿',
        lsaquo: '‹',
        lscr: '𝓁',
        Lscr: 'ℒ',
        lsh: '↰',
        Lsh: '↰',
        lsim: '≲',
        lsime: '⪍',
        lsimg: '⪏',
        lsqb: '[',
        lsquo: '‘',
        lsquor: '‚',
        lstrok: 'ł',
        Lstrok: 'Ł',
        lt: '<',
        Lt: '≪',
        LT: '<',
        ltcc: '⪦',
        ltcir: '⩹',
        ltdot: '⋖',
        lthree: '⋋',
        ltimes: '⋉',
        ltlarr: '⥶',
        ltquest: '⩻',
        ltri: '◃',
        ltrie: '⊴',
        ltrif: '◂',
        ltrPar: '⦖',
        lurdshar: '⥊',
        luruhar: '⥦',
        lvertneqq: '≨︀',
        lvnE: '≨︀',
        macr: '¯',
        male: '♂',
        malt: '✠',
        maltese: '✠',
        map: '↦',
        Map: '⤅',
        mapsto: '↦',
        mapstodown: '↧',
        mapstoleft: '↤',
        mapstoup: '↥',
        marker: '▮',
        mcomma: '⨩',
        mcy: 'м',
        Mcy: 'М',
        mdash: '—',
        mDDot: '∺',
        measuredangle: '∡',
        MediumSpace: ' ',
        Mellintrf: 'ℳ',
        mfr: '𝔪',
        Mfr: '𝔐',
        mho: '℧',
        micro: 'µ',
        mid: '∣',
        midast: '*',
        midcir: '⫰',
        middot: '·',
        minus: '−',
        minusb: '⊟',
        minusd: '∸',
        minusdu: '⨪',
        MinusPlus: '∓',
        mlcp: '⫛',
        mldr: '…',
        mnplus: '∓',
        models: '⊧',
        mopf: '𝕞',
        Mopf: '𝕄',
        mp: '∓',
        mscr: '𝓂',
        Mscr: 'ℳ',
        mstpos: '∾',
        mu: 'μ',
        Mu: 'Μ',
        multimap: '⊸',
        mumap: '⊸',
        nabla: '∇',
        nacute: 'ń',
        Nacute: 'Ń',
        nang: '∠⃒',
        nap: '≉',
        napE: '⩰̸',
        napid: '≋̸',
        napos: 'ŉ',
        napprox: '≉',
        natur: '♮',
        natural: '♮',
        naturals: 'ℕ',
        nbsp: ' ',
        nbump: '≎̸',
        nbumpe: '≏̸',
        ncap: '⩃',
        ncaron: 'ň',
        Ncaron: 'Ň',
        ncedil: 'ņ',
        Ncedil: 'Ņ',
        ncong: '≇',
        ncongdot: '⩭̸',
        ncup: '⩂',
        ncy: 'н',
        Ncy: 'Н',
        ndash: '–',
        ne: '≠',
        nearhk: '⤤',
        nearr: '↗',
        neArr: '⇗',
        nearrow: '↗',
        nedot: '≐̸',
        NegativeMediumSpace: '​',
        NegativeThickSpace: '​',
        NegativeThinSpace: '​',
        NegativeVeryThinSpace: '​',
        nequiv: '≢',
        nesear: '⤨',
        nesim: '≂̸',
        NestedGreaterGreater: '≫',
        NestedLessLess: '≪',
        NewLine: `
`,
        nexist: '∄',
        nexists: '∄',
        nfr: '𝔫',
        Nfr: '𝔑',
        nge: '≱',
        ngE: '≧̸',
        ngeq: '≱',
        ngeqq: '≧̸',
        ngeqslant: '⩾̸',
        nges: '⩾̸',
        nGg: '⋙̸',
        ngsim: '≵',
        ngt: '≯',
        nGt: '≫⃒',
        ngtr: '≯',
        nGtv: '≫̸',
        nharr: '↮',
        nhArr: '⇎',
        nhpar: '⫲',
        ni: '∋',
        nis: '⋼',
        nisd: '⋺',
        niv: '∋',
        njcy: 'њ',
        NJcy: 'Њ',
        nlarr: '↚',
        nlArr: '⇍',
        nldr: '‥',
        nle: '≰',
        nlE: '≦̸',
        nleftarrow: '↚',
        nLeftarrow: '⇍',
        nleftrightarrow: '↮',
        nLeftrightarrow: '⇎',
        nleq: '≰',
        nleqq: '≦̸',
        nleqslant: '⩽̸',
        nles: '⩽̸',
        nless: '≮',
        nLl: '⋘̸',
        nlsim: '≴',
        nlt: '≮',
        nLt: '≪⃒',
        nltri: '⋪',
        nltrie: '⋬',
        nLtv: '≪̸',
        nmid: '∤',
        NoBreak: '⁠',
        NonBreakingSpace: ' ',
        nopf: '𝕟',
        Nopf: 'ℕ',
        not: '¬',
        Not: '⫬',
        NotCongruent: '≢',
        NotCupCap: '≭',
        NotDoubleVerticalBar: '∦',
        NotElement: '∉',
        NotEqual: '≠',
        NotEqualTilde: '≂̸',
        NotExists: '∄',
        NotGreater: '≯',
        NotGreaterEqual: '≱',
        NotGreaterFullEqual: '≧̸',
        NotGreaterGreater: '≫̸',
        NotGreaterLess: '≹',
        NotGreaterSlantEqual: '⩾̸',
        NotGreaterTilde: '≵',
        NotHumpDownHump: '≎̸',
        NotHumpEqual: '≏̸',
        notin: '∉',
        notindot: '⋵̸',
        notinE: '⋹̸',
        notinva: '∉',
        notinvb: '⋷',
        notinvc: '⋶',
        NotLeftTriangle: '⋪',
        NotLeftTriangleBar: '⧏̸',
        NotLeftTriangleEqual: '⋬',
        NotLess: '≮',
        NotLessEqual: '≰',
        NotLessGreater: '≸',
        NotLessLess: '≪̸',
        NotLessSlantEqual: '⩽̸',
        NotLessTilde: '≴',
        NotNestedGreaterGreater: '⪢̸',
        NotNestedLessLess: '⪡̸',
        notni: '∌',
        notniva: '∌',
        notnivb: '⋾',
        notnivc: '⋽',
        NotPrecedes: '⊀',
        NotPrecedesEqual: '⪯̸',
        NotPrecedesSlantEqual: '⋠',
        NotReverseElement: '∌',
        NotRightTriangle: '⋫',
        NotRightTriangleBar: '⧐̸',
        NotRightTriangleEqual: '⋭',
        NotSquareSubset: '⊏̸',
        NotSquareSubsetEqual: '⋢',
        NotSquareSuperset: '⊐̸',
        NotSquareSupersetEqual: '⋣',
        NotSubset: '⊂⃒',
        NotSubsetEqual: '⊈',
        NotSucceeds: '⊁',
        NotSucceedsEqual: '⪰̸',
        NotSucceedsSlantEqual: '⋡',
        NotSucceedsTilde: '≿̸',
        NotSuperset: '⊃⃒',
        NotSupersetEqual: '⊉',
        NotTilde: '≁',
        NotTildeEqual: '≄',
        NotTildeFullEqual: '≇',
        NotTildeTilde: '≉',
        NotVerticalBar: '∤',
        npar: '∦',
        nparallel: '∦',
        nparsl: '⫽⃥',
        npart: '∂̸',
        npolint: '⨔',
        npr: '⊀',
        nprcue: '⋠',
        npre: '⪯̸',
        nprec: '⊀',
        npreceq: '⪯̸',
        nrarr: '↛',
        nrArr: '⇏',
        nrarrc: '⤳̸',
        nrarrw: '↝̸',
        nrightarrow: '↛',
        nRightarrow: '⇏',
        nrtri: '⋫',
        nrtrie: '⋭',
        nsc: '⊁',
        nsccue: '⋡',
        nsce: '⪰̸',
        nscr: '𝓃',
        Nscr: '𝒩',
        nshortmid: '∤',
        nshortparallel: '∦',
        nsim: '≁',
        nsime: '≄',
        nsimeq: '≄',
        nsmid: '∤',
        nspar: '∦',
        nsqsube: '⋢',
        nsqsupe: '⋣',
        nsub: '⊄',
        nsube: '⊈',
        nsubE: '⫅̸',
        nsubset: '⊂⃒',
        nsubseteq: '⊈',
        nsubseteqq: '⫅̸',
        nsucc: '⊁',
        nsucceq: '⪰̸',
        nsup: '⊅',
        nsupe: '⊉',
        nsupE: '⫆̸',
        nsupset: '⊃⃒',
        nsupseteq: '⊉',
        nsupseteqq: '⫆̸',
        ntgl: '≹',
        ntilde: 'ñ',
        Ntilde: 'Ñ',
        ntlg: '≸',
        ntriangleleft: '⋪',
        ntrianglelefteq: '⋬',
        ntriangleright: '⋫',
        ntrianglerighteq: '⋭',
        nu: 'ν',
        Nu: 'Ν',
        num: '#',
        numero: '№',
        numsp: ' ',
        nvap: '≍⃒',
        nvdash: '⊬',
        nvDash: '⊭',
        nVdash: '⊮',
        nVDash: '⊯',
        nvge: '≥⃒',
        nvgt: '>⃒',
        nvHarr: '⤄',
        nvinfin: '⧞',
        nvlArr: '⤂',
        nvle: '≤⃒',
        nvlt: '<⃒',
        nvltrie: '⊴⃒',
        nvrArr: '⤃',
        nvrtrie: '⊵⃒',
        nvsim: '∼⃒',
        nwarhk: '⤣',
        nwarr: '↖',
        nwArr: '⇖',
        nwarrow: '↖',
        nwnear: '⤧',
        oacute: 'ó',
        Oacute: 'Ó',
        oast: '⊛',
        ocir: '⊚',
        ocirc: 'ô',
        Ocirc: 'Ô',
        ocy: 'о',
        Ocy: 'О',
        odash: '⊝',
        odblac: 'ő',
        Odblac: 'Ő',
        odiv: '⨸',
        odot: '⊙',
        odsold: '⦼',
        oelig: 'œ',
        OElig: 'Œ',
        ofcir: '⦿',
        ofr: '𝔬',
        Ofr: '𝔒',
        ogon: '˛',
        ograve: 'ò',
        Ograve: 'Ò',
        ogt: '⧁',
        ohbar: '⦵',
        ohm: 'Ω',
        oint: '∮',
        olarr: '↺',
        olcir: '⦾',
        olcross: '⦻',
        oline: '‾',
        olt: '⧀',
        omacr: 'ō',
        Omacr: 'Ō',
        omega: 'ω',
        Omega: 'Ω',
        omicron: 'ο',
        Omicron: 'Ο',
        omid: '⦶',
        ominus: '⊖',
        oopf: '𝕠',
        Oopf: '𝕆',
        opar: '⦷',
        OpenCurlyDoubleQuote: '“',
        OpenCurlyQuote: '‘',
        operp: '⦹',
        oplus: '⊕',
        or: '∨',
        Or: '⩔',
        orarr: '↻',
        ord: '⩝',
        order: 'ℴ',
        orderof: 'ℴ',
        ordf: 'ª',
        ordm: 'º',
        origof: '⊶',
        oror: '⩖',
        orslope: '⩗',
        orv: '⩛',
        oS: 'Ⓢ',
        oscr: 'ℴ',
        Oscr: '𝒪',
        oslash: 'ø',
        Oslash: 'Ø',
        osol: '⊘',
        otilde: 'õ',
        Otilde: 'Õ',
        otimes: '⊗',
        Otimes: '⨷',
        otimesas: '⨶',
        ouml: 'ö',
        Ouml: 'Ö',
        ovbar: '⌽',
        OverBar: '‾',
        OverBrace: '⏞',
        OverBracket: '⎴',
        OverParenthesis: '⏜',
        par: '∥',
        para: '¶',
        parallel: '∥',
        parsim: '⫳',
        parsl: '⫽',
        part: '∂',
        PartialD: '∂',
        pcy: 'п',
        Pcy: 'П',
        percnt: '%',
        period: '.',
        permil: '‰',
        perp: '⊥',
        pertenk: '‱',
        pfr: '𝔭',
        Pfr: '𝔓',
        phi: 'φ',
        Phi: 'Φ',
        phiv: 'ϕ',
        phmmat: 'ℳ',
        phone: '☎',
        pi: 'π',
        Pi: 'Π',
        pitchfork: '⋔',
        piv: 'ϖ',
        planck: 'ℏ',
        planckh: 'ℎ',
        plankv: 'ℏ',
        plus: '+',
        plusacir: '⨣',
        plusb: '⊞',
        pluscir: '⨢',
        plusdo: '∔',
        plusdu: '⨥',
        pluse: '⩲',
        PlusMinus: '±',
        plusmn: '±',
        plussim: '⨦',
        plustwo: '⨧',
        pm: '±',
        Poincareplane: 'ℌ',
        pointint: '⨕',
        popf: '𝕡',
        Popf: 'ℙ',
        pound: '£',
        pr: '≺',
        Pr: '⪻',
        prap: '⪷',
        prcue: '≼',
        pre: '⪯',
        prE: '⪳',
        prec: '≺',
        precapprox: '⪷',
        preccurlyeq: '≼',
        Precedes: '≺',
        PrecedesEqual: '⪯',
        PrecedesSlantEqual: '≼',
        PrecedesTilde: '≾',
        preceq: '⪯',
        precnapprox: '⪹',
        precneqq: '⪵',
        precnsim: '⋨',
        precsim: '≾',
        prime: '′',
        Prime: '″',
        primes: 'ℙ',
        prnap: '⪹',
        prnE: '⪵',
        prnsim: '⋨',
        prod: '∏',
        Product: '∏',
        profalar: '⌮',
        profline: '⌒',
        profsurf: '⌓',
        prop: '∝',
        Proportion: '∷',
        Proportional: '∝',
        propto: '∝',
        prsim: '≾',
        prurel: '⊰',
        pscr: '𝓅',
        Pscr: '𝒫',
        psi: 'ψ',
        Psi: 'Ψ',
        puncsp: ' ',
        qfr: '𝔮',
        Qfr: '𝔔',
        qint: '⨌',
        qopf: '𝕢',
        Qopf: 'ℚ',
        qprime: '⁗',
        qscr: '𝓆',
        Qscr: '𝒬',
        quaternions: 'ℍ',
        quatint: '⨖',
        quest: '?',
        questeq: '≟',
        quot: '"',
        QUOT: '"',
        rAarr: '⇛',
        race: '∽̱',
        racute: 'ŕ',
        Racute: 'Ŕ',
        radic: '√',
        raemptyv: '⦳',
        rang: '⟩',
        Rang: '⟫',
        rangd: '⦒',
        range: '⦥',
        rangle: '⟩',
        raquo: '»',
        rarr: '→',
        rArr: '⇒',
        Rarr: '↠',
        rarrap: '⥵',
        rarrb: '⇥',
        rarrbfs: '⤠',
        rarrc: '⤳',
        rarrfs: '⤞',
        rarrhk: '↪',
        rarrlp: '↬',
        rarrpl: '⥅',
        rarrsim: '⥴',
        rarrtl: '↣',
        Rarrtl: '⤖',
        rarrw: '↝',
        ratail: '⤚',
        rAtail: '⤜',
        ratio: '∶',
        rationals: 'ℚ',
        rbarr: '⤍',
        rBarr: '⤏',
        RBarr: '⤐',
        rbbrk: '❳',
        rbrace: '}',
        rbrack: ']',
        rbrke: '⦌',
        rbrksld: '⦎',
        rbrkslu: '⦐',
        rcaron: 'ř',
        Rcaron: 'Ř',
        rcedil: 'ŗ',
        Rcedil: 'Ŗ',
        rceil: '⌉',
        rcub: '}',
        rcy: 'р',
        Rcy: 'Р',
        rdca: '⤷',
        rdldhar: '⥩',
        rdquo: '”',
        rdquor: '”',
        rdsh: '↳',
        Re: 'ℜ',
        real: 'ℜ',
        realine: 'ℛ',
        realpart: 'ℜ',
        reals: 'ℝ',
        rect: '▭',
        reg: '®',
        REG: '®',
        ReverseElement: '∋',
        ReverseEquilibrium: '⇋',
        ReverseUpEquilibrium: '⥯',
        rfisht: '⥽',
        rfloor: '⌋',
        rfr: '𝔯',
        Rfr: 'ℜ',
        rHar: '⥤',
        rhard: '⇁',
        rharu: '⇀',
        rharul: '⥬',
        rho: 'ρ',
        Rho: 'Ρ',
        rhov: 'ϱ',
        RightAngleBracket: '⟩',
        rightarrow: '→',
        Rightarrow: '⇒',
        RightArrow: '→',
        RightArrowBar: '⇥',
        RightArrowLeftArrow: '⇄',
        rightarrowtail: '↣',
        RightCeiling: '⌉',
        RightDoubleBracket: '⟧',
        RightDownTeeVector: '⥝',
        RightDownVector: '⇂',
        RightDownVectorBar: '⥕',
        RightFloor: '⌋',
        rightharpoondown: '⇁',
        rightharpoonup: '⇀',
        rightleftarrows: '⇄',
        rightleftharpoons: '⇌',
        rightrightarrows: '⇉',
        rightsquigarrow: '↝',
        RightTee: '⊢',
        RightTeeArrow: '↦',
        RightTeeVector: '⥛',
        rightthreetimes: '⋌',
        RightTriangle: '⊳',
        RightTriangleBar: '⧐',
        RightTriangleEqual: '⊵',
        RightUpDownVector: '⥏',
        RightUpTeeVector: '⥜',
        RightUpVector: '↾',
        RightUpVectorBar: '⥔',
        RightVector: '⇀',
        RightVectorBar: '⥓',
        ring: '˚',
        risingdotseq: '≓',
        rlarr: '⇄',
        rlhar: '⇌',
        rlm: '‏',
        rmoust: '⎱',
        rmoustache: '⎱',
        rnmid: '⫮',
        roang: '⟭',
        roarr: '⇾',
        robrk: '⟧',
        ropar: '⦆',
        ropf: '𝕣',
        Ropf: 'ℝ',
        roplus: '⨮',
        rotimes: '⨵',
        RoundImplies: '⥰',
        rpar: ')',
        rpargt: '⦔',
        rppolint: '⨒',
        rrarr: '⇉',
        Rrightarrow: '⇛',
        rsaquo: '›',
        rscr: '𝓇',
        Rscr: 'ℛ',
        rsh: '↱',
        Rsh: '↱',
        rsqb: ']',
        rsquo: '’',
        rsquor: '’',
        rthree: '⋌',
        rtimes: '⋊',
        rtri: '▹',
        rtrie: '⊵',
        rtrif: '▸',
        rtriltri: '⧎',
        RuleDelayed: '⧴',
        ruluhar: '⥨',
        rx: '℞',
        sacute: 'ś',
        Sacute: 'Ś',
        sbquo: '‚',
        sc: '≻',
        Sc: '⪼',
        scap: '⪸',
        scaron: 'š',
        Scaron: 'Š',
        sccue: '≽',
        sce: '⪰',
        scE: '⪴',
        scedil: 'ş',
        Scedil: 'Ş',
        scirc: 'ŝ',
        Scirc: 'Ŝ',
        scnap: '⪺',
        scnE: '⪶',
        scnsim: '⋩',
        scpolint: '⨓',
        scsim: '≿',
        scy: 'с',
        Scy: 'С',
        sdot: '⋅',
        sdotb: '⊡',
        sdote: '⩦',
        searhk: '⤥',
        searr: '↘',
        seArr: '⇘',
        searrow: '↘',
        sect: '§',
        semi: ';',
        seswar: '⤩',
        setminus: '∖',
        setmn: '∖',
        sext: '✶',
        sfr: '𝔰',
        Sfr: '𝔖',
        sfrown: '⌢',
        sharp: '♯',
        shchcy: 'щ',
        SHCHcy: 'Щ',
        shcy: 'ш',
        SHcy: 'Ш',
        ShortDownArrow: '↓',
        ShortLeftArrow: '←',
        shortmid: '∣',
        shortparallel: '∥',
        ShortRightArrow: '→',
        ShortUpArrow: '↑',
        shy: '­',
        sigma: 'σ',
        Sigma: 'Σ',
        sigmaf: 'ς',
        sigmav: 'ς',
        sim: '∼',
        simdot: '⩪',
        sime: '≃',
        simeq: '≃',
        simg: '⪞',
        simgE: '⪠',
        siml: '⪝',
        simlE: '⪟',
        simne: '≆',
        simplus: '⨤',
        simrarr: '⥲',
        slarr: '←',
        SmallCircle: '∘',
        smallsetminus: '∖',
        smashp: '⨳',
        smeparsl: '⧤',
        smid: '∣',
        smile: '⌣',
        smt: '⪪',
        smte: '⪬',
        smtes: '⪬︀',
        softcy: 'ь',
        SOFTcy: 'Ь',
        sol: '/',
        solb: '⧄',
        solbar: '⌿',
        sopf: '𝕤',
        Sopf: '𝕊',
        spades: '♠',
        spadesuit: '♠',
        spar: '∥',
        sqcap: '⊓',
        sqcaps: '⊓︀',
        sqcup: '⊔',
        sqcups: '⊔︀',
        Sqrt: '√',
        sqsub: '⊏',
        sqsube: '⊑',
        sqsubset: '⊏',
        sqsubseteq: '⊑',
        sqsup: '⊐',
        sqsupe: '⊒',
        sqsupset: '⊐',
        sqsupseteq: '⊒',
        squ: '□',
        square: '□',
        Square: '□',
        SquareIntersection: '⊓',
        SquareSubset: '⊏',
        SquareSubsetEqual: '⊑',
        SquareSuperset: '⊐',
        SquareSupersetEqual: '⊒',
        SquareUnion: '⊔',
        squarf: '▪',
        squf: '▪',
        srarr: '→',
        sscr: '𝓈',
        Sscr: '𝒮',
        ssetmn: '∖',
        ssmile: '⌣',
        sstarf: '⋆',
        star: '☆',
        Star: '⋆',
        starf: '★',
        straightepsilon: 'ϵ',
        straightphi: 'ϕ',
        strns: '¯',
        sub: '⊂',
        Sub: '⋐',
        subdot: '⪽',
        sube: '⊆',
        subE: '⫅',
        subedot: '⫃',
        submult: '⫁',
        subne: '⊊',
        subnE: '⫋',
        subplus: '⪿',
        subrarr: '⥹',
        subset: '⊂',
        Subset: '⋐',
        subseteq: '⊆',
        subseteqq: '⫅',
        SubsetEqual: '⊆',
        subsetneq: '⊊',
        subsetneqq: '⫋',
        subsim: '⫇',
        subsub: '⫕',
        subsup: '⫓',
        succ: '≻',
        succapprox: '⪸',
        succcurlyeq: '≽',
        Succeeds: '≻',
        SucceedsEqual: '⪰',
        SucceedsSlantEqual: '≽',
        SucceedsTilde: '≿',
        succeq: '⪰',
        succnapprox: '⪺',
        succneqq: '⪶',
        succnsim: '⋩',
        succsim: '≿',
        SuchThat: '∋',
        sum: '∑',
        Sum: '∑',
        sung: '♪',
        sup: '⊃',
        Sup: '⋑',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        supdot: '⪾',
        supdsub: '⫘',
        supe: '⊇',
        supE: '⫆',
        supedot: '⫄',
        Superset: '⊃',
        SupersetEqual: '⊇',
        suphsol: '⟉',
        suphsub: '⫗',
        suplarr: '⥻',
        supmult: '⫂',
        supne: '⊋',
        supnE: '⫌',
        supplus: '⫀',
        supset: '⊃',
        Supset: '⋑',
        supseteq: '⊇',
        supseteqq: '⫆',
        supsetneq: '⊋',
        supsetneqq: '⫌',
        supsim: '⫈',
        supsub: '⫔',
        supsup: '⫖',
        swarhk: '⤦',
        swarr: '↙',
        swArr: '⇙',
        swarrow: '↙',
        swnwar: '⤪',
        szlig: 'ß',
        Tab: '	',
        target: '⌖',
        tau: 'τ',
        Tau: 'Τ',
        tbrk: '⎴',
        tcaron: 'ť',
        Tcaron: 'Ť',
        tcedil: 'ţ',
        Tcedil: 'Ţ',
        tcy: 'т',
        Tcy: 'Т',
        tdot: '⃛',
        telrec: '⌕',
        tfr: '𝔱',
        Tfr: '𝔗',
        there4: '∴',
        therefore: '∴',
        Therefore: '∴',
        theta: 'θ',
        Theta: 'Θ',
        thetasym: 'ϑ',
        thetav: 'ϑ',
        thickapprox: '≈',
        thicksim: '∼',
        ThickSpace: '  ',
        thinsp: ' ',
        ThinSpace: ' ',
        thkap: '≈',
        thksim: '∼',
        thorn: 'þ',
        THORN: 'Þ',
        tilde: '˜',
        Tilde: '∼',
        TildeEqual: '≃',
        TildeFullEqual: '≅',
        TildeTilde: '≈',
        times: '×',
        timesb: '⊠',
        timesbar: '⨱',
        timesd: '⨰',
        tint: '∭',
        toea: '⤨',
        top: '⊤',
        topbot: '⌶',
        topcir: '⫱',
        topf: '𝕥',
        Topf: '𝕋',
        topfork: '⫚',
        tosa: '⤩',
        tprime: '‴',
        trade: '™',
        TRADE: '™',
        triangle: '▵',
        triangledown: '▿',
        triangleleft: '◃',
        trianglelefteq: '⊴',
        triangleq: '≜',
        triangleright: '▹',
        trianglerighteq: '⊵',
        tridot: '◬',
        trie: '≜',
        triminus: '⨺',
        TripleDot: '⃛',
        triplus: '⨹',
        trisb: '⧍',
        tritime: '⨻',
        trpezium: '⏢',
        tscr: '𝓉',
        Tscr: '𝒯',
        tscy: 'ц',
        TScy: 'Ц',
        tshcy: 'ћ',
        TSHcy: 'Ћ',
        tstrok: 'ŧ',
        Tstrok: 'Ŧ',
        twixt: '≬',
        twoheadleftarrow: '↞',
        twoheadrightarrow: '↠',
        uacute: 'ú',
        Uacute: 'Ú',
        uarr: '↑',
        uArr: '⇑',
        Uarr: '↟',
        Uarrocir: '⥉',
        ubrcy: 'ў',
        Ubrcy: 'Ў',
        ubreve: 'ŭ',
        Ubreve: 'Ŭ',
        ucirc: 'û',
        Ucirc: 'Û',
        ucy: 'у',
        Ucy: 'У',
        udarr: '⇅',
        udblac: 'ű',
        Udblac: 'Ű',
        udhar: '⥮',
        ufisht: '⥾',
        ufr: '𝔲',
        Ufr: '𝔘',
        ugrave: 'ù',
        Ugrave: 'Ù',
        uHar: '⥣',
        uharl: '↿',
        uharr: '↾',
        uhblk: '▀',
        ulcorn: '⌜',
        ulcorner: '⌜',
        ulcrop: '⌏',
        ultri: '◸',
        umacr: 'ū',
        Umacr: 'Ū',
        uml: '¨',
        UnderBar: '_',
        UnderBrace: '⏟',
        UnderBracket: '⎵',
        UnderParenthesis: '⏝',
        Union: '⋃',
        UnionPlus: '⊎',
        uogon: 'ų',
        Uogon: 'Ų',
        uopf: '𝕦',
        Uopf: '𝕌',
        uparrow: '↑',
        Uparrow: '⇑',
        UpArrow: '↑',
        UpArrowBar: '⤒',
        UpArrowDownArrow: '⇅',
        updownarrow: '↕',
        Updownarrow: '⇕',
        UpDownArrow: '↕',
        UpEquilibrium: '⥮',
        upharpoonleft: '↿',
        upharpoonright: '↾',
        uplus: '⊎',
        UpperLeftArrow: '↖',
        UpperRightArrow: '↗',
        upsi: 'υ',
        Upsi: 'ϒ',
        upsih: 'ϒ',
        upsilon: 'υ',
        Upsilon: 'Υ',
        UpTee: '⊥',
        UpTeeArrow: '↥',
        upuparrows: '⇈',
        urcorn: '⌝',
        urcorner: '⌝',
        urcrop: '⌎',
        uring: 'ů',
        Uring: 'Ů',
        urtri: '◹',
        uscr: '𝓊',
        Uscr: '𝒰',
        utdot: '⋰',
        utilde: 'ũ',
        Utilde: 'Ũ',
        utri: '▵',
        utrif: '▴',
        uuarr: '⇈',
        uuml: 'ü',
        Uuml: 'Ü',
        uwangle: '⦧',
        vangrt: '⦜',
        varepsilon: 'ϵ',
        varkappa: 'ϰ',
        varnothing: '∅',
        varphi: 'ϕ',
        varpi: 'ϖ',
        varpropto: '∝',
        varr: '↕',
        vArr: '⇕',
        varrho: 'ϱ',
        varsigma: 'ς',
        varsubsetneq: '⊊︀',
        varsubsetneqq: '⫋︀',
        varsupsetneq: '⊋︀',
        varsupsetneqq: '⫌︀',
        vartheta: 'ϑ',
        vartriangleleft: '⊲',
        vartriangleright: '⊳',
        vBar: '⫨',
        Vbar: '⫫',
        vBarv: '⫩',
        vcy: 'в',
        Vcy: 'В',
        vdash: '⊢',
        vDash: '⊨',
        Vdash: '⊩',
        VDash: '⊫',
        Vdashl: '⫦',
        vee: '∨',
        Vee: '⋁',
        veebar: '⊻',
        veeeq: '≚',
        vellip: '⋮',
        verbar: '|',
        Verbar: '‖',
        vert: '|',
        Vert: '‖',
        VerticalBar: '∣',
        VerticalLine: '|',
        VerticalSeparator: '❘',
        VerticalTilde: '≀',
        VeryThinSpace: ' ',
        vfr: '𝔳',
        Vfr: '𝔙',
        vltri: '⊲',
        vnsub: '⊂⃒',
        vnsup: '⊃⃒',
        vopf: '𝕧',
        Vopf: '𝕍',
        vprop: '∝',
        vrtri: '⊳',
        vscr: '𝓋',
        Vscr: '𝒱',
        vsubne: '⊊︀',
        vsubnE: '⫋︀',
        vsupne: '⊋︀',
        vsupnE: '⫌︀',
        Vvdash: '⊪',
        vzigzag: '⦚',
        wcirc: 'ŵ',
        Wcirc: 'Ŵ',
        wedbar: '⩟',
        wedge: '∧',
        Wedge: '⋀',
        wedgeq: '≙',
        weierp: '℘',
        wfr: '𝔴',
        Wfr: '𝔚',
        wopf: '𝕨',
        Wopf: '𝕎',
        wp: '℘',
        wr: '≀',
        wreath: '≀',
        wscr: '𝓌',
        Wscr: '𝒲',
        xcap: '⋂',
        xcirc: '◯',
        xcup: '⋃',
        xdtri: '▽',
        xfr: '𝔵',
        Xfr: '𝔛',
        xharr: '⟷',
        xhArr: '⟺',
        xi: 'ξ',
        Xi: 'Ξ',
        xlarr: '⟵',
        xlArr: '⟸',
        xmap: '⟼',
        xnis: '⋻',
        xodot: '⨀',
        xopf: '𝕩',
        Xopf: '𝕏',
        xoplus: '⨁',
        xotime: '⨂',
        xrarr: '⟶',
        xrArr: '⟹',
        xscr: '𝓍',
        Xscr: '𝒳',
        xsqcup: '⨆',
        xuplus: '⨄',
        xutri: '△',
        xvee: '⋁',
        xwedge: '⋀',
        yacute: 'ý',
        Yacute: 'Ý',
        yacy: 'я',
        YAcy: 'Я',
        ycirc: 'ŷ',
        Ycirc: 'Ŷ',
        ycy: 'ы',
        Ycy: 'Ы',
        yen: '¥',
        yfr: '𝔶',
        Yfr: '𝔜',
        yicy: 'ї',
        YIcy: 'Ї',
        yopf: '𝕪',
        Yopf: '𝕐',
        yscr: '𝓎',
        Yscr: '𝒴',
        yucy: 'ю',
        YUcy: 'Ю',
        yuml: 'ÿ',
        Yuml: 'Ÿ',
        zacute: 'ź',
        Zacute: 'Ź',
        zcaron: 'ž',
        Zcaron: 'Ž',
        zcy: 'з',
        Zcy: 'З',
        zdot: 'ż',
        Zdot: 'Ż',
        zeetrf: 'ℨ',
        ZeroWidthSpace: '​',
        zeta: 'ζ',
        Zeta: 'Ζ',
        zfr: '𝔷',
        Zfr: 'ℨ',
        zhcy: 'ж',
        ZHcy: 'Ж',
        zigrarr: '⇝',
        zopf: '𝕫',
        Zopf: 'ℤ',
        zscr: '𝓏',
        Zscr: '𝒵',
        zwj: '‍',
        zwnj: '‌',
      },
      y = {
        aacute: 'á',
        Aacute: 'Á',
        acirc: 'â',
        Acirc: 'Â',
        acute: '´',
        aelig: 'æ',
        AElig: 'Æ',
        agrave: 'à',
        Agrave: 'À',
        amp: '&',
        AMP: '&',
        aring: 'å',
        Aring: 'Å',
        atilde: 'ã',
        Atilde: 'Ã',
        auml: 'ä',
        Auml: 'Ä',
        brvbar: '¦',
        ccedil: 'ç',
        Ccedil: 'Ç',
        cedil: '¸',
        cent: '¢',
        copy: '©',
        COPY: '©',
        curren: '¤',
        deg: '°',
        divide: '÷',
        eacute: 'é',
        Eacute: 'É',
        ecirc: 'ê',
        Ecirc: 'Ê',
        egrave: 'è',
        Egrave: 'È',
        eth: 'ð',
        ETH: 'Ð',
        euml: 'ë',
        Euml: 'Ë',
        frac12: '½',
        frac14: '¼',
        frac34: '¾',
        gt: '>',
        GT: '>',
        iacute: 'í',
        Iacute: 'Í',
        icirc: 'î',
        Icirc: 'Î',
        iexcl: '¡',
        igrave: 'ì',
        Igrave: 'Ì',
        iquest: '¿',
        iuml: 'ï',
        Iuml: 'Ï',
        laquo: '«',
        lt: '<',
        LT: '<',
        macr: '¯',
        micro: 'µ',
        middot: '·',
        nbsp: ' ',
        not: '¬',
        ntilde: 'ñ',
        Ntilde: 'Ñ',
        oacute: 'ó',
        Oacute: 'Ó',
        ocirc: 'ô',
        Ocirc: 'Ô',
        ograve: 'ò',
        Ograve: 'Ò',
        ordf: 'ª',
        ordm: 'º',
        oslash: 'ø',
        Oslash: 'Ø',
        otilde: 'õ',
        Otilde: 'Õ',
        ouml: 'ö',
        Ouml: 'Ö',
        para: '¶',
        plusmn: '±',
        pound: '£',
        quot: '"',
        QUOT: '"',
        raquo: '»',
        reg: '®',
        REG: '®',
        sect: '§',
        shy: '­',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        szlig: 'ß',
        thorn: 'þ',
        THORN: 'Þ',
        times: '×',
        uacute: 'ú',
        Uacute: 'Ú',
        ucirc: 'û',
        Ucirc: 'Û',
        ugrave: 'ù',
        Ugrave: 'Ù',
        uml: '¨',
        uuml: 'ü',
        Uuml: 'Ü',
        yacute: 'ý',
        Yacute: 'Ý',
        yen: '¥',
        yuml: 'ÿ',
      },
      h = {
        0: '�',
        128: '€',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        142: 'Ž',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        158: 'ž',
        159: 'Ÿ',
      },
      x = [
        1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134,
        135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977,
        64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987,
        64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997,
        64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007,
        65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
        327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
        655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
        917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
      ],
      B = String.fromCharCode,
      j = {},
      I = j.hasOwnProperty,
      F = function (g, C) {
        return I.call(g, C)
      },
      _ = function (g, C) {
        for (var L = -1, R = g.length; ++L < R; ) if (g[L] == C) return !0
        return !1
      },
      P = function (g, C) {
        if (!g) return C
        var L = {},
          R
        for (R in C) L[R] = F(g, R) ? g[R] : C[R]
        return L
      },
      $ = function (g, C) {
        var L = ''
        return (g >= 55296 && g <= 57343) || g > 1114111
          ? (C &&
              U('character reference outside the permissible Unicode range'),
            '�')
          : F(h, g)
            ? (C && U('disallowed character reference'), h[g])
            : (C && _(x, g) && U('disallowed character reference'),
              g > 65535 &&
                ((g -= 65536),
                (L += B(((g >>> 10) & 1023) | 55296)),
                (g = 56320 | (g & 1023))),
              (L += B(g)),
              L)
      },
      O = function (g) {
        return '&#x' + g.toString(16).toUpperCase() + ';'
      },
      z = function (g) {
        return '&#' + g + ';'
      },
      U = function (g) {
        throw Error('Parse error: ' + g)
      },
      E = function (g, C) {
        C = P(C, E.options)
        var L = C.strict
        L && D.test(g) && U('forbidden code point')
        var R = C.encodeEverything,
          q = C.useNamedReferences,
          H = C.allowUnsafeSymbols,
          W = C.decimal ? z : O,
          Q = function (G) {
            return W(G.charCodeAt(0))
          }
        return (
          R
            ? ((g = g.replace(s, function (G) {
                return q && F(c, G) ? '&' + c[G] + ';' : Q(G)
              })),
              q &&
                (g = g
                  .replace(/&gt;\u20D2/g, '&nvgt;')
                  .replace(/&lt;\u20D2/g, '&nvlt;')
                  .replace(/&#x66;&#x6A;/g, '&fjlig;')),
              q &&
                (g = g.replace(l, function (G) {
                  return '&' + c[G] + ';'
                })))
            : q
              ? (H ||
                  (g = g.replace(f, function (G) {
                    return '&' + c[G] + ';'
                  })),
                (g = g
                  .replace(/&gt;\u20D2/g, '&nvgt;')
                  .replace(/&lt;\u20D2/g, '&nvlt;')),
                (g = g.replace(l, function (G) {
                  return '&' + c[G] + ';'
                })))
              : H || (g = g.replace(f, Q)),
          g
            .replace(a, function (G) {
              var De = G.charCodeAt(0),
                ke = G.charCodeAt(1),
                se = (De - 55296) * 1024 + ke - 56320 + 65536
              return W(se)
            })
            .replace(u, Q)
        )
      }
    E.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1,
    }
    var v = function (g, C) {
      C = P(C, v.options)
      var L = C.strict
      return (
        L && m.test(g) && U('malformed character reference'),
        g.replace(w, function (R, q, H, W, Q, G, De, ke, se) {
          var oe, Ce, Ne, ht, ie, Be
          return q
            ? ((ie = q), S[ie])
            : H
              ? ((ie = H),
                (Be = W),
                Be && C.isAttributeValue
                  ? (L &&
                      Be == '=' &&
                      U('`&` did not start a character reference'),
                    R)
                  : (L &&
                      U(
                        'named character reference was not terminated by a semicolon'
                      ),
                    y[ie] + (Be || '')))
              : Q
                ? ((Ne = Q),
                  (Ce = G),
                  L &&
                    !Ce &&
                    U('character reference was not terminated by a semicolon'),
                  (oe = parseInt(Ne, 10)),
                  $(oe, L))
                : De
                  ? ((ht = De),
                    (Ce = ke),
                    L &&
                      !Ce &&
                      U(
                        'character reference was not terminated by a semicolon'
                      ),
                    (oe = parseInt(ht, 16)),
                    $(oe, L))
                  : (L &&
                      U(
                        'named character reference was not terminated by a semicolon'
                      ),
                    R)
        })
      )
    }
    v.options = { isAttributeValue: !1, strict: !1 }
    var b = function (g) {
        return g.replace(f, function (C) {
          return p[C]
        })
      },
      k = { version: '1.2.0', encode: E, decode: v, escape: b, unescape: v }
    if (n && !n.nodeType)
      if (o) o.exports = k
      else for (var A in k) F(k, A) && (n[A] = k[A])
    else r.he = k
  })(zn)
})(Wi, Wi.exports)
var bD = Wi.exports
const te = zt(bD)
var yh = { exports: {} }
;(function (e, t) {
  ;(function (r, n) {
    e.exports = n()
  })(zn, function () {
    var r = 1e3,
      n = 6e4,
      o = 36e5,
      i = 'millisecond',
      a = 'second',
      s = 'minute',
      u = 'hour',
      l = 'day',
      c = 'week',
      f = 'month',
      p = 'quarter',
      m = 'year',
      D = 'date',
      w = 'Invalid Date',
      S =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      h = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (E) {
          var v = ['th', 'st', 'nd', 'rd'],
            b = E % 100
          return '[' + E + (v[(b - 20) % 10] || v[b] || v[0]) + ']'
        },
      },
      x = function (E, v, b) {
        var k = String(E)
        return !k || k.length >= v
          ? E
          : '' + Array(v + 1 - k.length).join(b) + E
      },
      B = {
        s: x,
        z: function (E) {
          var v = -E.utcOffset(),
            b = Math.abs(v),
            k = Math.floor(b / 60),
            A = b % 60
          return (v <= 0 ? '+' : '-') + x(k, 2, '0') + ':' + x(A, 2, '0')
        },
        m: function E(v, b) {
          if (v.date() < b.date()) return -E(b, v)
          var k = 12 * (b.year() - v.year()) + (b.month() - v.month()),
            A = v.clone().add(k, f),
            g = b - A < 0,
            C = v.clone().add(k + (g ? -1 : 1), f)
          return +(-(k + (b - A) / (g ? A - C : C - A)) || 0)
        },
        a: function (E) {
          return E < 0 ? Math.ceil(E) || 0 : Math.floor(E)
        },
        p: function (E) {
          return (
            { M: f, y: m, w: c, d: l, D, h: u, m: s, s: a, ms: i, Q: p }[E] ||
            String(E || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (E) {
          return E === void 0
        },
      },
      j = 'en',
      I = {}
    I[j] = h
    var F = '$isDayjsObject',
      _ = function (E) {
        return E instanceof z || !(!E || !E[F])
      },
      P = function E(v, b, k) {
        var A
        if (!v) return j
        if (typeof v == 'string') {
          var g = v.toLowerCase()
          I[g] && (A = g), b && ((I[g] = b), (A = g))
          var C = v.split('-')
          if (!A && C.length > 1) return E(C[0])
        } else {
          var L = v.name
          ;(I[L] = v), (A = L)
        }
        return !k && A && (j = A), A || (!k && j)
      },
      $ = function (E, v) {
        if (_(E)) return E.clone()
        var b = typeof v == 'object' ? v : {}
        return (b.date = E), (b.args = arguments), new z(b)
      },
      O = B
    ;(O.l = P),
      (O.i = _),
      (O.w = function (E, v) {
        return $(E, { locale: v.$L, utc: v.$u, x: v.$x, $offset: v.$offset })
      })
    var z = (function () {
        function E(b) {
          ;(this.$L = P(b.locale, null, !0)),
            this.parse(b),
            (this.$x = this.$x || b.x || {}),
            (this[F] = !0)
        }
        var v = E.prototype
        return (
          (v.parse = function (b) {
            ;(this.$d = (function (k) {
              var A = k.date,
                g = k.utc
              if (A === null) return new Date(NaN)
              if (O.u(A)) return new Date()
              if (A instanceof Date) return new Date(A)
              if (typeof A == 'string' && !/Z$/i.test(A)) {
                var C = A.match(S)
                if (C) {
                  var L = C[2] - 1 || 0,
                    R = (C[7] || '0').substring(0, 3)
                  return g
                    ? new Date(
                        Date.UTC(
                          C[1],
                          L,
                          C[3] || 1,
                          C[4] || 0,
                          C[5] || 0,
                          C[6] || 0,
                          R
                        )
                      )
                    : new Date(
                        C[1],
                        L,
                        C[3] || 1,
                        C[4] || 0,
                        C[5] || 0,
                        C[6] || 0,
                        R
                      )
                }
              }
              return new Date(A)
            })(b)),
              this.init()
          }),
          (v.init = function () {
            var b = this.$d
            ;(this.$y = b.getFullYear()),
              (this.$M = b.getMonth()),
              (this.$D = b.getDate()),
              (this.$W = b.getDay()),
              (this.$H = b.getHours()),
              (this.$m = b.getMinutes()),
              (this.$s = b.getSeconds()),
              (this.$ms = b.getMilliseconds())
          }),
          (v.$utils = function () {
            return O
          }),
          (v.isValid = function () {
            return this.$d.toString() !== w
          }),
          (v.isSame = function (b, k) {
            var A = $(b)
            return this.startOf(k) <= A && A <= this.endOf(k)
          }),
          (v.isAfter = function (b, k) {
            return $(b) < this.startOf(k)
          }),
          (v.isBefore = function (b, k) {
            return this.endOf(k) < $(b)
          }),
          (v.$g = function (b, k, A) {
            return O.u(b) ? this[k] : this.set(A, b)
          }),
          (v.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (v.valueOf = function () {
            return this.$d.getTime()
          }),
          (v.startOf = function (b, k) {
            var A = this,
              g = !!O.u(k) || k,
              C = O.p(b),
              L = function (ke, se) {
                var oe = O.w(
                  A.$u ? Date.UTC(A.$y, se, ke) : new Date(A.$y, se, ke),
                  A
                )
                return g ? oe : oe.endOf(l)
              },
              R = function (ke, se) {
                return O.w(
                  A.toDate()[ke].apply(
                    A.toDate('s'),
                    (g ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)
                  ),
                  A
                )
              },
              q = this.$W,
              H = this.$M,
              W = this.$D,
              Q = 'set' + (this.$u ? 'UTC' : '')
            switch (C) {
              case m:
                return g ? L(1, 0) : L(31, 11)
              case f:
                return g ? L(1, H) : L(0, H + 1)
              case c:
                var G = this.$locale().weekStart || 0,
                  De = (q < G ? q + 7 : q) - G
                return L(g ? W - De : W + (6 - De), H)
              case l:
              case D:
                return R(Q + 'Hours', 0)
              case u:
                return R(Q + 'Minutes', 1)
              case s:
                return R(Q + 'Seconds', 2)
              case a:
                return R(Q + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (v.endOf = function (b) {
            return this.startOf(b, !1)
          }),
          (v.$set = function (b, k) {
            var A,
              g = O.p(b),
              C = 'set' + (this.$u ? 'UTC' : ''),
              L = ((A = {}),
              (A[l] = C + 'Date'),
              (A[D] = C + 'Date'),
              (A[f] = C + 'Month'),
              (A[m] = C + 'FullYear'),
              (A[u] = C + 'Hours'),
              (A[s] = C + 'Minutes'),
              (A[a] = C + 'Seconds'),
              (A[i] = C + 'Milliseconds'),
              A)[g],
              R = g === l ? this.$D + (k - this.$W) : k
            if (g === f || g === m) {
              var q = this.clone().set(D, 1)
              q.$d[L](R),
                q.init(),
                (this.$d = q.set(D, Math.min(this.$D, q.daysInMonth())).$d)
            } else L && this.$d[L](R)
            return this.init(), this
          }),
          (v.set = function (b, k) {
            return this.clone().$set(b, k)
          }),
          (v.get = function (b) {
            return this[O.p(b)]()
          }),
          (v.add = function (b, k) {
            var A,
              g = this
            b = Number(b)
            var C = O.p(k),
              L = function (H) {
                var W = $(g)
                return O.w(W.date(W.date() + Math.round(H * b)), g)
              }
            if (C === f) return this.set(f, this.$M + b)
            if (C === m) return this.set(m, this.$y + b)
            if (C === l) return L(1)
            if (C === c) return L(7)
            var R = ((A = {}), (A[s] = n), (A[u] = o), (A[a] = r), A)[C] || 1,
              q = this.$d.getTime() + b * R
            return O.w(q, this)
          }),
          (v.subtract = function (b, k) {
            return this.add(-1 * b, k)
          }),
          (v.format = function (b) {
            var k = this,
              A = this.$locale()
            if (!this.isValid()) return A.invalidDate || w
            var g = b || 'YYYY-MM-DDTHH:mm:ssZ',
              C = O.z(this),
              L = this.$H,
              R = this.$m,
              q = this.$M,
              H = A.weekdays,
              W = A.months,
              Q = A.meridiem,
              G = function (se, oe, Ce, Ne) {
                return (se && (se[oe] || se(k, g))) || Ce[oe].slice(0, Ne)
              },
              De = function (se) {
                return O.s(L % 12 || 12, se, '0')
              },
              ke =
                Q ||
                function (se, oe, Ce) {
                  var Ne = se < 12 ? 'AM' : 'PM'
                  return Ce ? Ne.toLowerCase() : Ne
                }
            return g.replace(y, function (se, oe) {
              return (
                oe ||
                (function (Ce) {
                  switch (Ce) {
                    case 'YY':
                      return String(k.$y).slice(-2)
                    case 'YYYY':
                      return O.s(k.$y, 4, '0')
                    case 'M':
                      return q + 1
                    case 'MM':
                      return O.s(q + 1, 2, '0')
                    case 'MMM':
                      return G(A.monthsShort, q, W, 3)
                    case 'MMMM':
                      return G(W, q)
                    case 'D':
                      return k.$D
                    case 'DD':
                      return O.s(k.$D, 2, '0')
                    case 'd':
                      return String(k.$W)
                    case 'dd':
                      return G(A.weekdaysMin, k.$W, H, 2)
                    case 'ddd':
                      return G(A.weekdaysShort, k.$W, H, 3)
                    case 'dddd':
                      return H[k.$W]
                    case 'H':
                      return String(L)
                    case 'HH':
                      return O.s(L, 2, '0')
                    case 'h':
                      return De(1)
                    case 'hh':
                      return De(2)
                    case 'a':
                      return ke(L, R, !0)
                    case 'A':
                      return ke(L, R, !1)
                    case 'm':
                      return String(R)
                    case 'mm':
                      return O.s(R, 2, '0')
                    case 's':
                      return String(k.$s)
                    case 'ss':
                      return O.s(k.$s, 2, '0')
                    case 'SSS':
                      return O.s(k.$ms, 3, '0')
                    case 'Z':
                      return C
                  }
                  return null
                })(se) ||
                C.replace(':', '')
              )
            })
          }),
          (v.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (v.diff = function (b, k, A) {
            var g,
              C = this,
              L = O.p(k),
              R = $(b),
              q = (R.utcOffset() - this.utcOffset()) * n,
              H = this - R,
              W = function () {
                return O.m(C, R)
              }
            switch (L) {
              case m:
                g = W() / 12
                break
              case f:
                g = W()
                break
              case p:
                g = W() / 3
                break
              case c:
                g = (H - q) / 6048e5
                break
              case l:
                g = (H - q) / 864e5
                break
              case u:
                g = H / o
                break
              case s:
                g = H / n
                break
              case a:
                g = H / r
                break
              default:
                g = H
            }
            return A ? g : O.a(g)
          }),
          (v.daysInMonth = function () {
            return this.endOf(f).$D
          }),
          (v.$locale = function () {
            return I[this.$L]
          }),
          (v.locale = function (b, k) {
            if (!b) return this.$L
            var A = this.clone(),
              g = P(b, k, !0)
            return g && (A.$L = g), A
          }),
          (v.clone = function () {
            return O.w(this.$d, this)
          }),
          (v.toDate = function () {
            return new Date(this.valueOf())
          }),
          (v.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (v.toISOString = function () {
            return this.$d.toISOString()
          }),
          (v.toString = function () {
            return this.$d.toUTCString()
          }),
          E
        )
      })(),
      U = z.prototype
    return (
      ($.prototype = U),
      [
        ['$ms', i],
        ['$s', a],
        ['$m', s],
        ['$H', u],
        ['$W', l],
        ['$M', f],
        ['$y', m],
        ['$D', D],
      ].forEach(function (E) {
        U[E[1]] = function (v) {
          return this.$g(v, E[0], E[1])
        }
      }),
      ($.extend = function (E, v) {
        return E.$i || (E(v, z, $), (E.$i = !0)), $
      }),
      ($.locale = P),
      ($.isDayjs = _),
      ($.unix = function (E) {
        return $(1e3 * E)
      }),
      ($.en = I[j]),
      ($.Ls = I),
      ($.p = {}),
      $
    )
  })
})(yh)
var ED = yh.exports
const yn = zt(ED),
  SD = '_indexContinguts_1aeh5_1',
  kD = '_textArticle_1aeh5_15',
  sd = { indexContinguts: SD, textArticle: kD },
  BD = '_languageFlags_15om6_1',
  TD = '_languageLink_15om6_9',
  ud = { languageFlags: BD, languageLink: TD },
  vh = ({ translations: e, t, type: r }) => {
    const n = [
      {
        code: 'ca',
        flag: 'https://media.elliotfern.com/img/history-img/icon/flag_catalan.png',
        title: e.post_nameCa,
        name: t('nav.catalan'),
      },
      {
        code: 'es',
        flag: 'https://media.elliotfern.com/img/history-img/icon/flag_spain.png',
        title: e.post_nameEs,
        name: t('nav.spanish'),
      },
      {
        code: 'en',
        flag: 'https://media.elliotfern.com/img/history-img/icon/flag_united-kingdom.png',
        title: e.post_nameEn,
        name: t('nav.english'),
      },
      {
        code: 'fr',
        flag: 'https://media.elliotfern.com/img/history-img/icon/flag_france.png',
        title: e.post_nameFr,
        name: t('nav.french'),
      },
      {
        code: 'it',
        flag: 'https://media.elliotfern.com/img/history-img/icon/flag_italy.png',
        title: e.post_nameIt,
        name: t('nav.italian'),
      },
    ]
    return d.jsx('div', {
      className: ud.languageFlags,
      children: n.map(
        (o) =>
          o.title &&
          d.jsxs(
            re,
            {
              to: `/${o.code}/${r}/${o.title}`,
              className: ud.languageLink,
              children: [
                d.jsx('img', {
                  src: o.flag,
                  alt: o.name,
                  style: { width: '24px', marginRight: '5px' },
                }),
                o.name,
              ],
            },
            o.code
          )
      ),
    })
  }
var Dh = { exports: {} },
  FD = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  LD = FD,
  PD = LD
function xh() {}
function Ch() {}
Ch.resetWarningCache = xh
var ND = function () {
  function e(n, o, i, a, s, u) {
    if (u !== PD) {
      var l = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((l.name = 'Invariant Violation'), l)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ch,
    resetWarningCache: xh,
  }
  return (r.PropTypes = r), r
}
Dh.exports = ND()
var jD = Dh.exports
const ce = zt(jD)
function RD(e) {
  return e && typeof e == 'object' && 'default' in e ? e.default : e
}
var Ah = T,
  OD = RD(Ah)
function ld(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  )
}
function _D(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t)
}
var ID = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
)
function qD(e, t, r) {
  if (typeof e != 'function')
    throw new Error('Expected reducePropsToState to be a function.')
  if (typeof t != 'function')
    throw new Error('Expected handleStateChangeOnClient to be a function.')
  if (typeof r < 'u' && typeof r != 'function')
    throw new Error(
      'Expected mapStateOnServer to either be undefined or a function.'
    )
  function n(o) {
    return o.displayName || o.name || 'Component'
  }
  return function (i) {
    if (typeof i != 'function')
      throw new Error('Expected WrappedComponent to be a React component.')
    var a = [],
      s
    function u() {
      ;(s = e(
        a.map(function (c) {
          return c.props
        })
      )),
        l.canUseDOM ? t(s) : r && (s = r(s))
    }
    var l = (function (c) {
      _D(f, c)
      function f() {
        return c.apply(this, arguments) || this
      }
      ;(f.peek = function () {
        return s
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              'You may only call rewind() on the server. Call peek() to read the current state.'
            )
          var D = s
          return (s = void 0), (a = []), D
        })
      var p = f.prototype
      return (
        (p.UNSAFE_componentWillMount = function () {
          a.push(this), u()
        }),
        (p.componentDidUpdate = function () {
          u()
        }),
        (p.componentWillUnmount = function () {
          var D = a.indexOf(this)
          a.splice(D, 1), u()
        }),
        (p.render = function () {
          return OD.createElement(i, this.props)
        }),
        f
      )
    })(Ah.PureComponent)
    return (
      ld(l, 'displayName', 'SideEffect(' + n(i) + ')'),
      ld(l, 'canUseDOM', ID),
      l
    )
  }
}
var $D = qD
const MD = zt($D)
var UD = typeof Element < 'u',
  zD = typeof Map == 'function',
  HD = typeof Set == 'function',
  VD = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function fi(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!fi(e[n], t[n])) return !1
      return !0
    }
    var i
    if (zD && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!fi(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (HD && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1
      return !0
    }
    if (VD && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf()
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (UD && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') &&
          e.$$typeof
        ) &&
        !fi(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var WD = function (t, r) {
  try {
    return fi(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
const GD = zt(WD)
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var cd = Object.getOwnPropertySymbols,
  KD = Object.prototype.hasOwnProperty,
  YD = Object.prototype.propertyIsEnumerable
function QD(e) {
  if (e == null)
    throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function JD() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
    for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
    var n = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i]
    })
    if (n.join('') !== '0123456789') return !1
    var o = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (i) {
        o[i] = i
      }),
      Object.keys(Object.assign({}, o)).join('') === 'abcdefghijklmnopqrst'
    )
  } catch {
    return !1
  }
}
var ZD = JD()
  ? Object.assign
  : function (e, t) {
      for (var r, n = QD(e), o, i = 1; i < arguments.length; i++) {
        r = Object(arguments[i])
        for (var a in r) KD.call(r, a) && (n[a] = r[a])
        if (cd) {
          o = cd(r)
          for (var s = 0; s < o.length; s++)
            YD.call(r, o[s]) && (n[o[s]] = r[o[s]])
        }
      }
      return n
    }
const XD = zt(ZD)
var Tr = {
    BODY: 'bodyAttributes',
    HTML: 'htmlAttributes',
    TITLE: 'titleAttributes',
  },
  K = {
    BASE: 'base',
    BODY: 'body',
    HEAD: 'head',
    HTML: 'html',
    LINK: 'link',
    META: 'meta',
    NOSCRIPT: 'noscript',
    SCRIPT: 'script',
    STYLE: 'style',
    TITLE: 'title',
  }
Object.keys(K).map(function (e) {
  return K[e]
})
var de = {
    CHARSET: 'charset',
    CSS_TEXT: 'cssText',
    HREF: 'href',
    HTTPEQUIV: 'http-equiv',
    INNER_HTML: 'innerHTML',
    ITEM_PROP: 'itemprop',
    NAME: 'name',
    PROPERTY: 'property',
    REL: 'rel',
    SRC: 'src',
    TARGET: 'target',
  },
  Gi = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  Ao = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
  },
  ex = Object.keys(Gi).reduce(function (e, t) {
    return (e[Gi[t]] = t), e
  }, {}),
  tx = [K.NOSCRIPT, K.SCRIPT, K.STYLE],
  xt = 'data-react-helmet',
  rx =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        },
  nx = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  },
  ox = (function () {
    function e(t, r) {
      for (var n = 0; n < r.length; n++) {
        var o = r[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o)
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  })(),
  ze =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    },
  ix = function (e, t) {
    if (typeof t != 'function' && t !== null)
      throw new TypeError(
        'Super expression must either be null or a function, not ' + typeof t
      )
    ;(e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t))
  },
  dd = function (e, t) {
    var r = {}
    for (var n in e)
      t.indexOf(n) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]))
    return r
  },
  ax = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return t && (typeof t == 'object' || typeof t == 'function') ? t : e
  },
  ou = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
    return r === !1
      ? String(t)
      : String(t)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
  },
  sx = function (t) {
    var r = ln(t, K.TITLE),
      n = ln(t, Ao.TITLE_TEMPLATE)
    if (n && r)
      return n.replace(/%s/g, function () {
        return Array.isArray(r) ? r.join('') : r
      })
    var o = ln(t, Ao.DEFAULT_TITLE)
    return r || o || void 0
  },
  ux = function (t) {
    return ln(t, Ao.ON_CHANGE_CLIENT_STATE) || function () {}
  },
  Za = function (t, r) {
    return r
      .filter(function (n) {
        return typeof n[t] < 'u'
      })
      .map(function (n) {
        return n[t]
      })
      .reduce(function (n, o) {
        return ze({}, n, o)
      }, {})
  },
  lx = function (t, r) {
    return r
      .filter(function (n) {
        return typeof n[K.BASE] < 'u'
      })
      .map(function (n) {
        return n[K.BASE]
      })
      .reverse()
      .reduce(function (n, o) {
        if (!n.length)
          for (var i = Object.keys(o), a = 0; a < i.length; a++) {
            var s = i[a],
              u = s.toLowerCase()
            if (t.indexOf(u) !== -1 && o[u]) return n.concat(o)
          }
        return n
      }, [])
  },
  _n = function (t, r, n) {
    var o = {}
    return n
      .filter(function (i) {
        return Array.isArray(i[t])
          ? !0
          : (typeof i[t] < 'u' &&
              px(
                'Helmet: ' +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  rx(i[t]) +
                  '"'
              ),
            !1)
      })
      .map(function (i) {
        return i[t]
      })
      .reverse()
      .reduce(function (i, a) {
        var s = {}
        a.filter(function (p) {
          for (var m = void 0, D = Object.keys(p), w = 0; w < D.length; w++) {
            var S = D[w],
              y = S.toLowerCase()
            r.indexOf(y) !== -1 &&
              !(m === de.REL && p[m].toLowerCase() === 'canonical') &&
              !(y === de.REL && p[y].toLowerCase() === 'stylesheet') &&
              (m = y),
              r.indexOf(S) !== -1 &&
                (S === de.INNER_HTML ||
                  S === de.CSS_TEXT ||
                  S === de.ITEM_PROP) &&
                (m = S)
          }
          if (!m || !p[m]) return !1
          var h = p[m].toLowerCase()
          return (
            o[m] || (o[m] = {}),
            s[m] || (s[m] = {}),
            o[m][h] ? !1 : ((s[m][h] = !0), !0)
          )
        })
          .reverse()
          .forEach(function (p) {
            return i.push(p)
          })
        for (var u = Object.keys(s), l = 0; l < u.length; l++) {
          var c = u[l],
            f = XD({}, o[c], s[c])
          o[c] = f
        }
        return i
      }, [])
      .reverse()
  },
  ln = function (t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
      var o = t[n]
      if (o.hasOwnProperty(r)) return o[r]
    }
    return null
  },
  cx = function (t) {
    return {
      baseTag: lx([de.HREF, de.TARGET], t),
      bodyAttributes: Za(Tr.BODY, t),
      defer: ln(t, Ao.DEFER),
      encode: ln(t, Ao.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Za(Tr.HTML, t),
      linkTags: _n(K.LINK, [de.REL, de.HREF], t),
      metaTags: _n(
        K.META,
        [de.NAME, de.CHARSET, de.HTTPEQUIV, de.PROPERTY, de.ITEM_PROP],
        t
      ),
      noscriptTags: _n(K.NOSCRIPT, [de.INNER_HTML], t),
      onChangeClientState: ux(t),
      scriptTags: _n(K.SCRIPT, [de.SRC, de.INNER_HTML], t),
      styleTags: _n(K.STYLE, [de.CSS_TEXT], t),
      title: sx(t),
      titleAttributes: Za(Tr.TITLE, t),
    }
  },
  iu = (function () {
    var e = Date.now()
    return function (t) {
      var r = Date.now()
      r - e > 16
        ? ((e = r), t(r))
        : setTimeout(function () {
            iu(t)
          }, 0)
    }
  })(),
  fd = function (t) {
    return clearTimeout(t)
  },
  dx =
    typeof window < 'u'
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        iu
      : global.requestAnimationFrame || iu,
  fx =
    typeof window < 'u'
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        fd
      : global.cancelAnimationFrame || fd,
  px = function (t) {
    return console && typeof console.warn == 'function' && console.warn(t)
  },
  In = null,
  hx = function (t) {
    In && fx(In),
      t.defer
        ? (In = dx(function () {
            pd(t, function () {
              In = null
            })
          }))
        : (pd(t), (In = null))
  },
  pd = function (t, r) {
    var n = t.baseTag,
      o = t.bodyAttributes,
      i = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      u = t.noscriptTags,
      l = t.onChangeClientState,
      c = t.scriptTags,
      f = t.styleTags,
      p = t.title,
      m = t.titleAttributes
    au(K.BODY, o), au(K.HTML, i), gx(p, m)
    var D = {
        baseTag: Ur(K.BASE, n),
        linkTags: Ur(K.LINK, a),
        metaTags: Ur(K.META, s),
        noscriptTags: Ur(K.NOSCRIPT, u),
        scriptTags: Ur(K.SCRIPT, c),
        styleTags: Ur(K.STYLE, f),
      },
      w = {},
      S = {}
    Object.keys(D).forEach(function (y) {
      var h = D[y],
        x = h.newTags,
        B = h.oldTags
      x.length && (w[y] = x), B.length && (S[y] = D[y].oldTags)
    }),
      r && r(),
      l(t, w, S)
  },
  wh = function (t) {
    return Array.isArray(t) ? t.join('') : t
  },
  gx = function (t, r) {
    typeof t < 'u' && document.title !== t && (document.title = wh(t)),
      au(K.TITLE, r)
  },
  au = function (t, r) {
    var n = document.getElementsByTagName(t)[0]
    if (n) {
      for (
        var o = n.getAttribute(xt),
          i = o ? o.split(',') : [],
          a = [].concat(i),
          s = Object.keys(r),
          u = 0;
        u < s.length;
        u++
      ) {
        var l = s[u],
          c = r[l] || ''
        n.getAttribute(l) !== c && n.setAttribute(l, c),
          i.indexOf(l) === -1 && i.push(l)
        var f = a.indexOf(l)
        f !== -1 && a.splice(f, 1)
      }
      for (var p = a.length - 1; p >= 0; p--) n.removeAttribute(a[p])
      i.length === a.length
        ? n.removeAttribute(xt)
        : n.getAttribute(xt) !== s.join(',') && n.setAttribute(xt, s.join(','))
    }
  },
  Ur = function (t, r) {
    var n = document.head || document.querySelector(K.HEAD),
      o = n.querySelectorAll(t + '[' + xt + ']'),
      i = Array.prototype.slice.call(o),
      a = [],
      s = void 0
    return (
      r &&
        r.length &&
        r.forEach(function (u) {
          var l = document.createElement(t)
          for (var c in u)
            if (u.hasOwnProperty(c))
              if (c === de.INNER_HTML) l.innerHTML = u.innerHTML
              else if (c === de.CSS_TEXT)
                l.styleSheet
                  ? (l.styleSheet.cssText = u.cssText)
                  : l.appendChild(document.createTextNode(u.cssText))
              else {
                var f = typeof u[c] > 'u' ? '' : u[c]
                l.setAttribute(c, f)
              }
          l.setAttribute(xt, 'true'),
            i.some(function (p, m) {
              return (s = m), l.isEqualNode(p)
            })
              ? i.splice(s, 1)
              : a.push(l)
        }),
      i.forEach(function (u) {
        return u.parentNode.removeChild(u)
      }),
      a.forEach(function (u) {
        return n.appendChild(u)
      }),
      { oldTags: i, newTags: a }
    )
  },
  bh = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      var o = typeof t[n] < 'u' ? n + '="' + t[n] + '"' : '' + n
      return r ? r + ' ' + o : o
    }, '')
  },
  mx = function (t, r, n, o) {
    var i = bh(n),
      a = wh(r)
    return i
      ? '<' + t + ' ' + xt + '="true" ' + i + '>' + ou(a, o) + '</' + t + '>'
      : '<' + t + ' ' + xt + '="true">' + ou(a, o) + '</' + t + '>'
  },
  yx = function (t, r, n) {
    return r.reduce(function (o, i) {
      var a = Object.keys(i)
          .filter(function (l) {
            return !(l === de.INNER_HTML || l === de.CSS_TEXT)
          })
          .reduce(function (l, c) {
            var f = typeof i[c] > 'u' ? c : c + '="' + ou(i[c], n) + '"'
            return l ? l + ' ' + f : f
          }, ''),
        s = i.innerHTML || i.cssText || '',
        u = tx.indexOf(t) === -1
      return (
        o +
        '<' +
        t +
        ' ' +
        xt +
        '="true" ' +
        a +
        (u ? '/>' : '>' + s + '</' + t + '>')
      )
    }, '')
  },
  Eh = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return Object.keys(t).reduce(function (n, o) {
      return (n[Gi[o] || o] = t[o]), n
    }, r)
  },
  vx = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return Object.keys(t).reduce(function (n, o) {
      return (n[ex[o] || o] = t[o]), n
    }, r)
  },
  Dx = function (t, r, n) {
    var o,
      i = ((o = { key: r }), (o[xt] = !0), o),
      a = Eh(n, i)
    return [tn.createElement(K.TITLE, a, r)]
  },
  xx = function (t, r) {
    return r.map(function (n, o) {
      var i,
        a = ((i = { key: o }), (i[xt] = !0), i)
      return (
        Object.keys(n).forEach(function (s) {
          var u = Gi[s] || s
          if (u === de.INNER_HTML || u === de.CSS_TEXT) {
            var l = n.innerHTML || n.cssText
            a.dangerouslySetInnerHTML = { __html: l }
          } else a[u] = n[s]
        }),
        tn.createElement(t, a)
      )
    })
  },
  Pt = function (t, r, n) {
    switch (t) {
      case K.TITLE:
        return {
          toComponent: function () {
            return Dx(t, r.title, r.titleAttributes)
          },
          toString: function () {
            return mx(t, r.title, r.titleAttributes, n)
          },
        }
      case Tr.BODY:
      case Tr.HTML:
        return {
          toComponent: function () {
            return Eh(r)
          },
          toString: function () {
            return bh(r)
          },
        }
      default:
        return {
          toComponent: function () {
            return xx(t, r)
          },
          toString: function () {
            return yx(t, r, n)
          },
        }
    }
  },
  Sh = function (t) {
    var r = t.baseTag,
      n = t.bodyAttributes,
      o = t.encode,
      i = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      u = t.noscriptTags,
      l = t.scriptTags,
      c = t.styleTags,
      f = t.title,
      p = f === void 0 ? '' : f,
      m = t.titleAttributes
    return {
      base: Pt(K.BASE, r, o),
      bodyAttributes: Pt(Tr.BODY, n, o),
      htmlAttributes: Pt(Tr.HTML, i, o),
      link: Pt(K.LINK, a, o),
      meta: Pt(K.META, s, o),
      noscript: Pt(K.NOSCRIPT, u, o),
      script: Pt(K.SCRIPT, l, o),
      style: Pt(K.STYLE, c, o),
      title: Pt(K.TITLE, { title: p, titleAttributes: m }, o),
    }
  },
  Cx = function (t) {
    var r, n
    return (
      (n = r =
        (function (o) {
          ix(i, o)
          function i() {
            return nx(this, i), ax(this, o.apply(this, arguments))
          }
          return (
            (i.prototype.shouldComponentUpdate = function (s) {
              return !GD(this.props, s)
            }),
            (i.prototype.mapNestedChildrenToProps = function (s, u) {
              if (!u) return null
              switch (s.type) {
                case K.SCRIPT:
                case K.NOSCRIPT:
                  return { innerHTML: u }
                case K.STYLE:
                  return { cssText: u }
              }
              throw new Error(
                '<' +
                  s.type +
                  ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
              )
            }),
            (i.prototype.flattenArrayTypeChildren = function (s) {
              var u,
                l = s.child,
                c = s.arrayTypeChildren,
                f = s.newChildProps,
                p = s.nestedChildren
              return ze(
                {},
                c,
                ((u = {}),
                (u[l.type] = [].concat(c[l.type] || [], [
                  ze({}, f, this.mapNestedChildrenToProps(l, p)),
                ])),
                u)
              )
            }),
            (i.prototype.mapObjectTypeChildren = function (s) {
              var u,
                l,
                c = s.child,
                f = s.newProps,
                p = s.newChildProps,
                m = s.nestedChildren
              switch (c.type) {
                case K.TITLE:
                  return ze(
                    {},
                    f,
                    ((u = {}),
                    (u[c.type] = m),
                    (u.titleAttributes = ze({}, p)),
                    u)
                  )
                case K.BODY:
                  return ze({}, f, { bodyAttributes: ze({}, p) })
                case K.HTML:
                  return ze({}, f, { htmlAttributes: ze({}, p) })
              }
              return ze({}, f, ((l = {}), (l[c.type] = ze({}, p)), l))
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (s, u) {
              var l = ze({}, u)
              return (
                Object.keys(s).forEach(function (c) {
                  var f
                  l = ze({}, l, ((f = {}), (f[c] = s[c]), f))
                }),
                l
              )
            }),
            (i.prototype.warnOnInvalidChildren = function (s, u) {
              return !0
            }),
            (i.prototype.mapChildrenToProps = function (s, u) {
              var l = this,
                c = {}
              return (
                tn.Children.forEach(s, function (f) {
                  if (!(!f || !f.props)) {
                    var p = f.props,
                      m = p.children,
                      D = dd(p, ['children']),
                      w = vx(D)
                    switch ((l.warnOnInvalidChildren(f, m), f.type)) {
                      case K.LINK:
                      case K.META:
                      case K.NOSCRIPT:
                      case K.SCRIPT:
                      case K.STYLE:
                        c = l.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: c,
                          newChildProps: w,
                          nestedChildren: m,
                        })
                        break
                      default:
                        u = l.mapObjectTypeChildren({
                          child: f,
                          newProps: u,
                          newChildProps: w,
                          nestedChildren: m,
                        })
                        break
                    }
                  }
                }),
                (u = this.mapArrayTypeChildrenToProps(c, u)),
                u
              )
            }),
            (i.prototype.render = function () {
              var s = this.props,
                u = s.children,
                l = dd(s, ['children']),
                c = ze({}, l)
              return (
                u && (c = this.mapChildrenToProps(u, c)), tn.createElement(t, c)
              )
            }),
            ox(i, null, [
              {
                key: 'canUseDOM',
                set: function (s) {
                  t.canUseDOM = s
                },
              },
            ]),
            i
          )
        })(tn.Component)),
      (r.propTypes = {
        base: ce.object,
        bodyAttributes: ce.object,
        children: ce.oneOfType([ce.arrayOf(ce.node), ce.node]),
        defaultTitle: ce.string,
        defer: ce.bool,
        encodeSpecialCharacters: ce.bool,
        htmlAttributes: ce.object,
        link: ce.arrayOf(ce.object),
        meta: ce.arrayOf(ce.object),
        noscript: ce.arrayOf(ce.object),
        onChangeClientState: ce.func,
        script: ce.arrayOf(ce.object),
        style: ce.arrayOf(ce.object),
        title: ce.string,
        titleAttributes: ce.object,
        titleTemplate: ce.string,
      }),
      (r.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (r.peek = t.peek),
      (r.rewind = function () {
        var o = t.rewind()
        return (
          o ||
            (o = Sh({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: '',
              titleAttributes: {},
            })),
          o
        )
      }),
      n
    )
  },
  Ax = function () {
    return null
  },
  wx = MD(cx, hx, Sh)(Ax),
  wo = Cx(wx)
wo.renderStatic = wo.rewind
function bx() {
  const { t: e, i18n: t } = Xe(),
    [r, n] = T.useState(null),
    [o, i] = T.useState(!0),
    [a, s] = T.useState(!1),
    [u, l] = T.useState([]),
    { nameArticle: c } = Ze(),
    [f, p] = T.useState({}),
    m = Lt(),
    w = window.location.pathname.split('/'),
    S = w[w.length - 1],
    y = t.language,
    h = T.useCallback(async () => {
      try {
        const E = await J.get(
          `https://api.elliotfern.com/blog.php?type=articleName&paramName=${c}`
        )
        if (E.data && E.data.post_content) {
          n(E.data), s(!1)
          const v = E.data.ID,
            b = t.language
          x(v, b), B(v, b)
        } else s(!0)
      } catch (E) {
        console.error('Error fetching data:', E), s(!0)
      } finally {
        i(!1)
      }
    }, [c, t.language])
  T.useEffect(() => {
    h()
    const E = m.pathname.split('/')[1]
    E && E !== t.language && t.changeLanguage(E)
  }, [h, m, t])
  const x = async (E, v) => {
      try {
        const b = await J.get(
          `https://api.elliotfern.com/blog.php?type=llistatArticlesCurs&id=${E}&lang=${v}`
        )
        b.data && l(b.data)
      } catch (b) {
        console.error('Error fetching related articles:', b)
      }
    },
    B = async (E, v) => {
      try {
        const b = await J.get(
          `https://api.elliotfern.com/blog.php?type=articleIdiomes&id=${E}&lang=${v}`
        )
        b.data && p(b.data)
      } catch (b) {
        console.error('Error fetching translations:', b)
      }
    }
  if (o)
    return d.jsx('div', {
      style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
      children: d.jsx('h3', { children: 'cargando ... ' }),
    })
  if (a)
    return d.jsx('div', {
      style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
      children: d.jsx('h3', { children: e('article.articleNoDisponible') }),
    })
  const j = (E) => E.replace(/<!--[\s\S]*?-->/g, ''),
    I = (E) => yn(E).format('D/MM/YYYY'),
    F = (E) => {
      const v = ['elliotfern.com', 'media.elliotfern.com'],
        k = new DOMParser().parseFromString(E, 'text/html')
      return (
        k.querySelectorAll('a').forEach((g) => {
          const C = g.href
          if (C)
            try {
              const L = new URL(C).hostname
              v.includes(L) ||
                ((g.target = '_blank'),
                (g.rel = 'noopener noreferrer'),
                (g.innerHTML += ' 🔗'))
            } catch (L) {
              console.error('Invalid URL:', L)
            }
        }),
        k.body.innerHTML
      )
    },
    _ = (E) => {
      const b = new DOMParser().parseFromString(E, 'text/html'),
        k = [...b.querySelectorAll('h2, h3, h4')],
        A = []
      let g = null,
        C = null
      return (
        k.forEach((L, R) => {
          const q = `section-${R + 1}`
          if (((L.id = q), L.tagName === 'H2'))
            (g = { text: L.textContent, id: q, children: [] }), A.push(g)
          else if (L.tagName === 'H3')
            (C = { text: L.textContent, id: q, children: [] }),
              g == null || g.children.push(C)
          else if (L.tagName === 'H4') {
            const H = { text: L.textContent, id: q }
            C == null || C.children.push(H)
          }
        }),
        { toc: A, modifiedContent: b.body.innerHTML }
      )
    },
    P = te.decode(j(te.decode(r.post_content))),
    { toc: $, modifiedContent: O } = _(P),
    z = F(O),
    U = (E) => {
      var k
      E.preventDefault()
      const v = E.target.getAttribute('href').substring(1),
        b = document.getElementById(v)
      if (b) {
        const A =
          ((k = document.querySelector('header')) == null
            ? void 0
            : k.offsetHeight) || 0
        window.scrollTo({ top: b.offsetTop - A, behavior: 'smooth' })
      }
    }
  return d.jsxs(d.Fragment, {
    children: [
      d.jsxs(wo, {
        children: [
          d.jsxs('title', {
            children: [te.decode(r.post_title), ' - Elliot Fernandez'],
          }),
          d.jsx('meta', {
            name: 'description',
            content: te.decode(r.post_excerpt),
          }),
          d.jsx('meta', {
            property: 'og:title',
            content: `${te.decode(r.post_title)} - Elliot Fernandez`,
          }),
          d.jsx('meta', {
            property: 'og:description',
            content: te.decode(r.post_excerpt),
          }),
          d.jsx('link', {
            rel: 'canonical',
            href: `https://elliotfern.com/${y}/article/${S}`,
          }),
          f.post_nameCa &&
            d.jsx('link', {
              rel: 'canonical',
              hrefLang: 'ca',
              href: `https://elliotfern.com/es/article/${f.post_nameCa}`,
            }),
          f.post_nameEs &&
            d.jsx('link', {
              rel: 'canonical',
              hrefLang: 'es',
              href: `https://elliotfern.com/es/article/${f.post_nameEs}`,
            }),
          f.post_nameEn &&
            d.jsx('link', {
              rel: 'canonical',
              hrefLang: 'en',
              href: `https://elliotfern.com/en/article/${f.post_nameEn}`,
            }),
          f.post_nameFr &&
            d.jsx('link', {
              rel: 'canonical',
              hrefLang: 'fr',
              href: `https://elliotfern.com/fr/article/${f.post_nameFr}`,
            }),
          f.post_nameIt &&
            d.jsx('link', {
              rel: 'canonical',
              hrefLang: 'it',
              href: `https://elliotfern.com/it/article/${f.post_nameIt}`,
            }),
        ],
      }),
      d.jsx('h2', {
        className: 'text-center bold',
        children: te.decode(r.post_title),
      }),
      d.jsxs('h5', {
        className: 'text-center italic',
        children: [te.decode(r.post_excerpt), ' '],
      }),
      d.jsx(cl, {}),
      d.jsxs('p', {
        children: [
          e('webPostDate'),
          ' ',
          I(r.post_date),
          ' |',
          ' ',
          e('webPostModified'),
          ' ',
          I(r.post_modified),
        ],
      }),
      d.jsx(vh, { translations: f, t: e, type: 'article' }),
      d.jsxs('div', {
        className: sd.indexContinguts,
        children: [
          d.jsx('h3', { children: e('article.index') }),
          d.jsx('ul', {
            children: $.map((E) =>
              d.jsxs(
                'li',
                {
                  children: [
                    d.jsx('a', {
                      href: `#${E.id}`,
                      onClick: U,
                      children: E.text,
                    }),
                    E.children.length > 0 &&
                      d.jsx('ul', {
                        children: E.children.map((v) =>
                          d.jsxs(
                            'li',
                            {
                              children: [
                                d.jsx('a', {
                                  href: `#${v.id}`,
                                  onClick: U,
                                  children: v.text,
                                }),
                                v.children.length > 0 &&
                                  d.jsx('ul', {
                                    children: v.children.map((b) =>
                                      d.jsx(
                                        'li',
                                        {
                                          children: d.jsx('a', {
                                            href: `#${b.id}`,
                                            onClick: U,
                                            children: b.text,
                                          }),
                                        },
                                        b.id
                                      )
                                    ),
                                  }),
                              ],
                            },
                            v.id
                          )
                        ),
                      }),
                  ],
                },
                E.id
              )
            ),
          }),
        ],
      }),
      d.jsx('div', {
        className: sd.textArticle,
        dangerouslySetInnerHTML: { __html: z },
      }),
      d.jsx('hr', {}),
      u.length > 0 &&
        d.jsxs('div', {
          children: [
            d.jsxs('h3', {
              children: [
                e('article.curs'),
                ' ',
                d.jsxs(re, {
                  to: `/${t.language}/course/${u[0].curso_url}`,
                  children: [u[0].curso_titulo, ' '],
                }),
              ],
            }),
            d.jsx('ul', {
              children: u.map((E) =>
                d.jsx(
                  'li',
                  {
                    children: d.jsx(re, {
                      to: `/${t.language}/article/${E.articulo_url}`,
                      children: te.decode(E.articulo_titulo),
                    }),
                  },
                  E.articulo_url
                )
              ),
            }),
          ],
        }),
    ],
  })
}
function Ex() {
  const { lang: e } = Ze(),
    [t, r] = T.useState([])
  T.useEffect(() => {
    n()
  }, [])
  const n = async () => {
      try {
        const a = await J.get(
          `https://api.elliotfern.com/blog.php?type=arxiuArticles&lang=${e}`
        )
        r(a.data)
      } catch (a) {
        console.error('Error fetching data:', a)
      }
    },
    i = ((a) => {
      const s = {}
      return (
        a.forEach((u) => {
          const l = u.cursName
          s[l] || (s[l] = []), s[l].push(u)
        }),
        s
      )
    })(t)
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h1', { children: 'Article archives' }),
      Object.keys(i).map((a) =>
        d.jsxs(
          'div',
          {
            children: [
              d.jsx('h4', {
                children: d.jsx(re, {
                  to: `/${e}/course/${i[a][0].cursParam}`,
                  children: te.decode(a),
                }),
              }),
              d.jsx('ol', {
                children: i[a].map((s, u) =>
                  d.jsx(
                    'li',
                    {
                      children: d.jsx(re, {
                        to: `/${e}/article/${s.post_name}`,
                        children: te.decode(s.post_title),
                      }),
                    },
                    u
                  )
                ),
              }),
              d.jsx('hr', {}),
            ],
          },
          a
        )
      ),
    ],
  })
}
function Sx() {
  const { t: e, i18n: t } = Xe(),
    [r, n] = T.useState({}),
    [o, i] = T.useState(null),
    [a, s] = T.useState(!0),
    [u, l] = T.useState(null),
    { lang: c, nameCourse: f } = Ze(),
    p = Lt(),
    D = window.location.pathname.split('/'),
    w = D[D.length - 1],
    S = T.useCallback(async () => {
      try {
        const h = await J.get(
          `https://api.elliotfern.com/blog.php?type=curso&paramName=${f}&langCurso=${c}`
        )
        if (Array.isArray(h.data) && h.data.length > 0) {
          i(h.data), s(!1)
          const x = h.data[0].cursId
          x && (await y(x, c))
        } else
          console.warn(
            'No se encontraron artículos relacionados con el curso.'
          ),
            i([]),
            s(!1),
            l(e('article.articleNoDisponible'))
      } catch (h) {
        console.error('Error fetching data:', h),
          s(!1),
          l(e('webCursErrorFetch'))
      }
    }, [f, c, e]),
    y = async (h, x) => {
      try {
        const B = await J.get(
          `https://api.elliotfern.com/blog.php?type=cursIdiomes&id=${h}&lang=${x}`
        )
        B.data && n(B.data)
      } catch (B) {
        console.error('Error fetching translations:', B),
          l(e('webCursErrorTranslations'))
      }
    }
  return (
    T.useEffect(() => {
      S()
    }, [S]),
    T.useEffect(() => {
      const h = p.pathname.split('/')[1]
      h && h !== t.language && t.changeLanguage(h)
    }, [p, t]),
    a
      ? d.jsx('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '25px',
          },
          children: d.jsx('h3', { children: e('loading') }),
        })
      : u
        ? d.jsx('div', {
            style: {
              display: 'flex',
              justifyContent: 'center',
              marginTop: '25px',
            },
            children: d.jsx('h3', { children: u }),
          })
        : d.jsxs(d.Fragment, {
            children: [
              d.jsxs(wo, {
                children: [
                  d.jsxs('title', {
                    children: [
                      te.decode(o[0].courseName),
                      ' - Elliot Fernandez',
                    ],
                  }),
                  d.jsx('meta', {
                    name: 'description',
                    content: te.decode(o[0].courseDescription),
                  }),
                  d.jsx('meta', {
                    property: 'og:title',
                    content: `${te.decode(o[0].courseName)} - Elliot Fernandez`,
                  }),
                  d.jsx('meta', {
                    property: 'og:description',
                    content: te.decode(o[0].courseDescription),
                  }),
                  d.jsx('link', {
                    rel: 'canonical',
                    href: `https://elliotfern.com/${c}/course/${w}`,
                  }),
                  r.post_nameCa &&
                    d.jsx('link', {
                      rel: 'canonical',
                      hrefLang: 'ca',
                      href: `https://elliotfern.com/es/course/${r.post_nameCa}`,
                    }),
                  r.post_nameEs &&
                    d.jsx('link', {
                      rel: 'canonical',
                      hrefLang: 'es',
                      href: `https://elliotfern.com/es/course/${r.post_nameEs}`,
                    }),
                  r.post_nameEn &&
                    d.jsx('link', {
                      rel: 'canonical',
                      hrefLang: 'en',
                      href: `https://elliotfern.com/en/course/${r.post_nameEn}`,
                    }),
                  r.post_nameFr &&
                    d.jsx('link', {
                      rel: 'canonical',
                      hrefLang: 'fr',
                      href: `https://elliotfern.com/fr/course/${r.post_nameFr}`,
                    }),
                  r.post_nameIt &&
                    d.jsx('link', {
                      rel: 'canonical',
                      hrefLang: 'it',
                      href: `https://elliotfern.com/it/course/${r.post_nameIt}`,
                    }),
                ],
              }),
              d.jsx('h2', {
                className: 'text-center',
                children:
                  o && o.length > 0 ? o[0].courseName : e('webCursNameError'),
              }),
              d.jsx('h6', {
                className: 'text-center italic',
                children:
                  o && o.length > 0
                    ? te.decode(o[0].courseDescription)
                    : e('webCursDescripcioError'),
              }),
              d.jsx(vh, { translations: r, t: e, type: 'course' }),
              o[0].post_title
                ? d.jsx('h5', {
                    className: 'separador',
                    children: e('webwebCursContingut'),
                  })
                : d.jsx('h5', {
                    className: 'separador',
                    children: e('webwebCursContingutError'),
                  }),
              o && o.length > 0
                ? o.map((h) =>
                    h.post_title
                      ? d.jsx(
                          'div',
                          {
                            className: 'llistat-articles',
                            children: d.jsx(re, {
                              to: `/${c}/article/${h.post_name}`,
                              children: te.decode(h.post_title),
                            }),
                          },
                          h.ID
                        )
                      : null
                  )
                : d.jsx('div', { children: e('webwebCursContingutError') }),
            ],
          })
  )
}
const He = {
    en: {
      homepage: '/en/homepage',
      about: '/en/about-author',
      books: '/en/books',
      authors: '/en/authors',
      historyArchives: '/en/history-archives',
      blog: '/en/blog',
      links: 'en/links',
      privacyPolicy: '/en/privacy-policy',
      contact: '/en/contact',
      compromisQualitat: '/en/commitment-responsibility',
    },
    es: {
      homepage: '/es/homepage',
      about: '/es/about-author',
      books: '/es/books',
      authors: '/es/authors',
      historyArchives: '/es/history-archives',
      blog: '/es/blog',
      links: 'es/links',
      privacyPolicy: '/es/privacy-policy',
      contact: '/es/contact',
      compromisQualitat: '/es/commitment-responsibility',
    },
    ca: {
      homepage: '/ca/homepage',
      about: '/ca/about-author',
      books: '/ca/books',
      authors: '/ca/authors',
      historyArchives: '/ca/history-archives',
      blog: '/ca/blog',
      links: 'ca/links',
      privacyPolicy: '/ca/privacy-policy',
      contact: '/ca/contact',
      compromisQualitat: '/ca/commitment-responsibility',
    },
    fr: {
      homepage: '/fr/homepage',
      about: '/fr/about-author',
      books: '/fr/books',
      authors: '/fr/authors',
      historyArchives: '/fr/history-archives',
      blog: '/fr/blog',
      links: 'fr/links',
      privacyPolicy: '/fr/privacy-policy',
      contact: '/fr/contact',
      compromisQualitat: '/fr/commitment-responsibility',
    },
    it: {
      homepage: '/it/homepage',
      about: '/it/about-author',
      books: '/it/books',
      authors: '/it/authors',
      historyArchives: '/it/history-archives',
      blog: '/it/blog',
      links: 'it/links',
      privacyPolicy: '/it/privacy-policy',
      contact: '/it/contact',
      compromisQualitat: '/it/commitment-responsibility',
    },
  },
  kx = '_header_idp1w_2',
  Bx = '_headerContent_idp1w_14',
  Tx = '_logo_idp1w_24',
  Fx = '_containerMenu_idp1w_48',
  Lx = '_headerSecond_idp1w_75',
  Px = '_searchForm_idp1w_89',
  Nx = '_superMenu1_idp1w_130',
  jx = '_toggleMenuButton_idp1w_162',
  Rx = '_menuVisible_idp1w_166',
  Ox = '_menuHidden_idp1w_170',
  _x = '_closeButton_idp1w_174',
  Ix = '_menuOpen_idp1w_186',
  qx = '_menuClosed_idp1w_190',
  $x = '_searchInput_idp1w_278',
  Mx = '_searchButton_idp1w_291',
  Ie = {
    header: kx,
    headerContent: Bx,
    logo: Tx,
    containerMenu: Fx,
    headerSecond: Lx,
    searchForm: Px,
    superMenu1: Nx,
    toggleMenuButton: jx,
    menuVisible: Rx,
    menuHidden: Ox,
    closeButton: _x,
    menuOpen: Ix,
    menuClosed: qx,
    searchInput: $x,
    searchButton: Mx,
  }
function Ux() {
  const { t: e, i18n: t } = Xe(),
    [r, n] = T.useState(''),
    o = vr(),
    [i, a] = T.useState(!1),
    [s, u] = T.useState(!1),
    l = () => {
      a(!i)
    },
    c = () => {
      u(!s)
    },
    f = () => {
      a(!1), u(!1)
    },
    p = (D) => {
      t.changeLanguage(D), o(`/${D}/homepage`), f()
    },
    m = (D) => {
      D.preventDefault()
      const w = t.language
      o(`/${w}/search-results?query=${r}`), n(''), a(!1), u(!1)
    }
  return d.jsx(d.Fragment, {
    children: d.jsx('header', {
      className: Ie.header,
      children: d.jsxs('div', {
        className: Ie.headerContent,
        children: [
          d.jsx('h1', {
            children: d.jsx(re, {
              className: Ie.logo,
              to: He[t.language].homepage,
              children: 'Elliot Fernandez',
            }),
          }),
          d.jsx('button', {
            className: `${Ie.toggleMenuButton} ${i ? Ie.menuVisible : Ie.menuHidden}`,
            onClick: l,
            children: i ? '✖' : '☰',
          }),
          d.jsxs('div', {
            className: `${Ie.containerMenu} ${i ? Ie.menuVisible : Ie.menuHidden}`,
            children: [
              d.jsxs('ul', {
                children: [
                  d.jsx('li', {
                    children: d.jsx(re, {
                      to: He[t.language].homepage,
                      onClick: f,
                      children: e('nav.home'),
                    }),
                  }),
                  d.jsx('li', {
                    children: d.jsx(re, {
                      to: He[t.language].about,
                      onClick: f,
                      children: e('nav.about'),
                    }),
                  }),
                  d.jsx('li', {
                    children: d.jsx(re, {
                      to: He[t.language].books,
                      onClick: f,
                      children: e('nav.books'),
                    }),
                  }),
                  d.jsx('li', {
                    children: d.jsx(re, {
                      to: He[t.language].historyArchives,
                      onClick: f,
                      children: e('nav.historyArchives'),
                    }),
                  }),
                  d.jsx('li', {
                    children: d.jsx(re, {
                      to: He[t.language].blog,
                      onClick: f,
                      children: e('nav.blog'),
                    }),
                  }),
                  d.jsx('li', {
                    children: d.jsx(re, {
                      to: He[t.language].links,
                      onClick: f,
                      children: e('nav.links'),
                    }),
                  }),
                  d.jsxs('li', {
                    children: [
                      d.jsx('a', {
                        href: '#',
                        onClick: c,
                        children: e('nav.languages'),
                      }),
                      s &&
                        d.jsx('div', {
                          className: Ie.headerSecond,
                          children: d.jsx('div', {
                            className: Ie.superMenu1,
                            children: d.jsxs('ul', {
                              children: [
                                d.jsx('li', {
                                  children: d.jsx('a', {
                                    href: '#',
                                    onClick: () => p('en'),
                                    children: e('nav.english'),
                                  }),
                                }),
                                d.jsx('li', {
                                  children: d.jsx('a', {
                                    href: '#',
                                    onClick: () => p('es'),
                                    children: e('nav.spanish'),
                                  }),
                                }),
                                d.jsx('li', {
                                  children: d.jsx('a', {
                                    href: '#',
                                    onClick: () => p('it'),
                                    children: e('nav.italian'),
                                  }),
                                }),
                                d.jsx('li', {
                                  children: d.jsx('a', {
                                    href: '#',
                                    onClick: () => p('fr'),
                                    children: e('nav.french'),
                                  }),
                                }),
                                d.jsx('li', {
                                  children: d.jsx('a', {
                                    href: '#',
                                    onClick: () => p('ca'),
                                    children: e('nav.catalan'),
                                  }),
                                }),
                                d.jsx('li', {
                                  children: d.jsx('button', {
                                    className: Ie.closeButton,
                                    onClick: f,
                                    children: '✖',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              d.jsxs('form', {
                onSubmit: m,
                className: Ie.searchForm,
                children: [
                  d.jsx('input', {
                    type: 'search',
                    placeholder: e('nav.buscadorPlaceHolder'),
                    value: r,
                    onChange: (D) => n(D.target.value),
                    'aria-label': 'Search',
                    className: Ie.searchInput,
                  }),
                  d.jsx('button', {
                    type: 'submit',
                    className: Ie.searchButton,
                    children: e('nav.buscadorCerca'),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  })
}
function zx() {
  const { t: e, i18n: t } = Xe(),
    r = new Date().getFullYear()
  return d.jsx(d.Fragment, {
    children: d.jsxs('div', {
      className: 'container-fluid footer',
      children: [
        d.jsxs('div', {
          className: 'footer-elliotfern',
          children: [
            d.jsx('div', {
              className: 'menu-separacio',
              children: d.jsx(re, {
                to: He[t.language].about,
                children: e('nav.about'),
              }),
            }),
            d.jsx('div', {
              className: 'menu-separacio',
              children: d.jsx(re, {
                to: He[t.language].privacyPolicy,
                children: e('nav.privacyPolicy'),
              }),
            }),
            d.jsx('div', {
              className: 'menu-separacio',
              children: d.jsx(re, {
                to: He[t.language].compromisQualitat,
                children: e('nav.compromisQualitat'),
              }),
            }),
            d.jsx('div', {
              className: 'menu-separacio',
              children: d.jsx(re, {
                to: He[t.language].contact,
                children: e('nav.contact'),
              }),
            }),
          ],
        }),
        d.jsx('hr', {}),
        d.jsxs('div', {
          id: 'footer-elliotfern-petit',
          children: [
            d.jsx('a', {
              href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
              'aria-label': 'Creative Commons',
              target: '_blank',
              rel: 'noopener',
              title: 'Creative commons',
              children: d.jsx('img', {
                className: 'mx-auto d-block',
                src: 'https://media.elliotfern.com/img/elliotfern-icon/domini-public.gif',
                alt: 'Public Domain',
                title: 'Public Domain',
                width: '88',
                height: '31',
              }),
            }),
            d.jsx('div', {
              className: 'text-footer',
              children: e('footer.textPB'),
            }),
            d.jsxs('div', {
              className: 'text-footer',
              children: ['Elliot Fernandez (2002 - ', r, ')'],
            }),
          ],
        }),
      ],
    }),
  })
}
function Hx() {
  const [e, t] = T.useState(null),
    [r, n] = T.useState(!0),
    [o, i] = T.useState(null),
    { lang: a } = Ze()
  T.useEffect(() => {
    u()
  }, [])
  let s = 0
  a === 'en'
    ? (s = 398)
    : a === 'ca'
      ? (s = 1744)
      : a === 'es'
        ? (s = 3612)
        : a === 'fr'
          ? (s = 3614)
          : a === 'it' && (s = 3615)
  const u = async () => {
    n(!0), i(null)
    try {
      const f = await J.get(
        `https://api.elliotfern.com/blog.php?type=articleId&id=${s}`
      )
      f.data && f.data.length > 0
        ? t(f.data)
        : i('No se encontraron datos para el autor.')
    } catch (f) {
      console.error('Error fetching data:', f), i('Error al cargar los datos.')
    } finally {
      n(!1)
    }
  }
  T.useEffect(() => {
    e && e[0] && e[0].post_title && l()
  }, [e])
  const l = () => {
    document.title = `${e[0].post_title} - Elliot Fernandez`
  }
  if (r)
    return d.jsx('div', {
      style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
      children: d.jsx('h3', { children: 'Cargando ... ' }),
    })
  if (o)
    return d.jsxs('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25px',
      },
      children: [
        d.jsx('h3', { style: { color: 'red' }, children: o }),
        d.jsx('button', { onClick: u, children: 'Intentar de nuevo' }),
      ],
    })
  const c = { __html: e[0].post_content }
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', { children: e[0].post_title }),
      d.jsx('div', { dangerouslySetInnerHTML: c }),
    ],
  })
}
function Vx() {
  const [e, t] = T.useState(null),
    [r, n] = T.useState(!0),
    [o, i] = T.useState(null),
    { lang: a } = Ze(),
    s = async () => {
      n(!0), i(null)
      try {
        const c = await J.get(
          `https://api.elliotfern.com/blog.php?type=articleId&id=${u}`
        )
        c.data && c.data.length > 0
          ? t(c.data)
          : i('No se encontraron datos para el autor.')
      } catch (c) {
        console.error('Error fetching data:', c),
          i('Error al cargar los datos.')
      } finally {
        n(!1)
      }
    }
  T.useEffect(() => {
    s()
  }, [])
  let u = 0
  if (
    ((a === 'es' || a === 'en' || a === 'fr' || a === 'it' || a === 'ca') &&
      (u = 1742),
    T.useEffect(() => {
      e &&
        e[0] &&
        e[0].post_title &&
        (document.title = `${e[0].post_title} - Elliot Fernandez`)
    }, [e]),
    r)
  )
    return d.jsx('div', {
      style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
      children: d.jsx('h3', { children: 'Cargando ... ' }),
    })
  if (o)
    return d.jsxs('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25px',
      },
      children: [
        d.jsx('h3', { style: { color: 'red' }, children: o }),
        d.jsx('button', { onClick: s, children: 'Intentar de nuevo' }),
      ],
    })
  const l = { __html: e[0].post_content }
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', { children: e[0].post_title }),
      d.jsx('div', { dangerouslySetInnerHTML: l }),
    ],
  })
}
const Wx = '_gridContainer_1jv1t_2',
  Gx = '_gridItem_1jv1t_7',
  Kx = '_languagesBadge_1jv1t_30',
  Fr = { gridContainer: Wx, gridItem: Gx, languagesBadge: Kx }
function Yx() {
  const [e, t] = T.useState(null),
    [r, n] = T.useState(!0),
    { lang: o } = Ze(),
    { t: i } = Xe()
  T.useEffect(() => {
    a()
  }, [o])
  const a = async () => {
    try {
      const s = await J.get(
        `https://api.elliotfern.com/blog.php?type=llistatCursos&langCurso=${o}`
      )
      t(s.data), n(!1)
    } catch (s) {
      console.error('Error fetching data:', s)
    }
  }
  return r
    ? d.jsx('div', {
        style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
        children: d.jsx('h3', { children: 'Cargando ...' }),
      })
    : d.jsxs(d.Fragment, {
        children: [
          d.jsxs(wo, {
            children: [
              d.jsx('title', { children: i('homepage.titleSeo') }),
              d.jsx('meta', {
                name: 'description',
                content: i('homepage.descripcioSeo'),
              }),
              d.jsx('meta', {
                property: 'og:title',
                content: i('homepage.titleSeo'),
              }),
              d.jsx('meta', {
                property: 'og:description',
                content: i('homepage.descripcioSeo'),
              }),
              d.jsx('link', {
                rel: 'canonical',
                href: 'https://elliotfern.com/ca/homepage',
              }),
              d.jsx('link', {
                rel: 'canonical',
                hrefLang: 'es',
                href: 'https://elliotfern.com/es/homepage',
              }),
              d.jsx('link', {
                rel: 'canonical',
                hrefLang: 'en',
                href: 'https://elliotfern.com/en/homepage',
              }),
              d.jsx('link', {
                rel: 'canonical',
                hrefLang: 'fr',
                href: 'https://elliotfern.com/fr/homepage',
              }),
              d.jsx('link', {
                rel: 'canonical',
                hrefLang: 'it',
                href: 'https://elliotfern.com/it/homepage',
              }),
            ],
          }),
          d.jsx('h4', {
            className: 'text-center',
            children: i('homepage.webTitle'),
          }),
          d.jsx(cl, {}),
          d.jsxs('div', {
            className: Fr.languagesBadge,
            children: [
              d.jsx('img', {
                src: 'https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=white',
                alt: 'JavaScript',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/TypeScript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white',
                alt: 'TypeScript',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/Java-%23007396?style=for-the-badge&logo=java&logoColor=white',
                alt: 'Java',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white',
                alt: 'HTML5',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white',
                alt: 'CSS3',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/PHP-%23777BB4?style=for-the-badge&logo=php&logoColor=white',
                alt: 'PHP',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/React-%2361DAFB?style=for-the-badge&logo=react&logoColor=white',
                alt: 'React',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&logoColor=white',
                alt: 'Node.js',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/MongoDB-%2300A92D?style=for-the-badge&logo=mongodb&logoColor=white',
                alt: 'MongoDB',
              }),
              d.jsx('img', {
                src: 'https://img.shields.io/badge/MySQL-%234479A1?style=for-the-badge&logo=mysql&logoColor=white',
                alt: 'MySQL',
              }),
            ],
          }),
          d.jsx('h4', {
            className: 'text-center',
            children: i('homepage.webTitleHistoriaOberta'),
          }),
          d.jsx('h5', {
            className: 'text-center',
            children: i('homepage.historiaOberta'),
          }),
          d.jsx('div', {
            className: Fr.gridContainer,
            children:
              e == null
                ? void 0
                : e.map((s) =>
                    d.jsxs(
                      'div',
                      {
                        className: Fr.gridItem,
                        children: [
                          d.jsx(re, {
                            to: `/${o}/course/${s.paramName}`,
                            children: d.jsx('img', {
                              src: s.img,
                              alt: s.nombreCurso,
                            }),
                          }),
                          d.jsx(re, {
                            to: `/${o}/course/${s.paramName}`,
                            style: { textDecoration: 'none', color: 'inherit' },
                            children: d.jsx('h3', {
                              style: { fontSize: '17px', color: 'inherit' },
                              children: s.nombreCurso,
                            }),
                          }),
                          s.resumen,
                          d.jsx('p', {
                            children: d.jsx(re, {
                              to: `/${o}/course/${s.paramName}`,
                              children: i('homepage.webLinkCourse'),
                            }),
                          }),
                        ],
                      },
                      s.id
                    )
                  ),
          }),
        ],
      })
}
function Qx(e) {
  const [t, r] = T.useState(''),
    { t: n } = Xe(),
    o = (a) => {
      r(a.target.value)
      const s = a.target.value.toLowerCase(),
        u = e.allBooks.filter((l) => l.titol.toLowerCase().includes(s))
      e.setBooks(u)
    },
    i = () => {
      r(''), e.setBooks(e.allBooks)
    }
  return d.jsxs('div', {
    className: 'search-container',
    children: [
      d.jsx('h2', { children: n('book.titolCercador') }),
      d.jsxs('div', {
        children: [
          d.jsx('input', {
            type: 'search',
            placeholder: n('book.cercadorPlaceHolder'),
            value: t,
            onChange: o,
            className: 'search-input',
            'aria-label': 'Search',
            name: 'name',
          }),
          d.jsx('button', {
            onClick: i,
            className: 'tab-button tab-button-topic',
            children: n('book.esborrar'),
          }),
        ],
      }),
    ],
  })
}
var kh = { exports: {} }
;(function (e, t) {
  ;(function (r, n) {
    e.exports = n(T)
  })(zn, (r) =>
    (() => {
      var n = {
          703: (s, u, l) => {
            var c = l(414)
            function f() {}
            function p() {}
            ;(p.resetWarningCache = f),
              (s.exports = function () {
                function m(S, y, h, x, B, j) {
                  if (j !== c) {
                    var I = new Error(
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                    )
                    throw ((I.name = 'Invariant Violation'), I)
                  }
                }
                function D() {
                  return m
                }
                m.isRequired = m
                var w = {
                  array: m,
                  bigint: m,
                  bool: m,
                  func: m,
                  number: m,
                  object: m,
                  string: m,
                  symbol: m,
                  any: m,
                  arrayOf: D,
                  element: m,
                  elementType: m,
                  instanceOf: D,
                  node: m,
                  objectOf: D,
                  oneOf: D,
                  oneOfType: D,
                  shape: D,
                  exact: D,
                  checkPropTypes: p,
                  resetWarningCache: f,
                }
                return (w.PropTypes = w), w
              })
          },
          697: (s, u, l) => {
            s.exports = l(703)()
          },
          414: (s) => {
            s.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
          },
          98: (s) => {
            s.exports = r
          },
        },
        o = {}
      function i(s) {
        var u = o[s]
        if (u !== void 0) return u.exports
        var l = (o[s] = { exports: {} })
        return n[s](l, l.exports, i), l.exports
      }
      ;(i.n = (s) => {
        var u = s && s.__esModule ? () => s.default : () => s
        return i.d(u, { a: u }), u
      }),
        (i.d = (s, u) => {
          for (var l in u)
            i.o(u, l) &&
              !i.o(s, l) &&
              Object.defineProperty(s, l, { enumerable: !0, get: u[l] })
        }),
        (i.o = (s, u) => Object.prototype.hasOwnProperty.call(s, u)),
        (i.r = (s) => {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(s, '__esModule', { value: !0 })
        })
      var a = {}
      return (
        (() => {
          i.r(a), i.d(a, { default: () => O })
          var s = i(98),
            u = i.n(s),
            l = i(697),
            c = i.n(l)
          function f() {
            return (
              (f = Object.assign
                ? Object.assign.bind()
                : function (z) {
                    for (var U = 1; U < arguments.length; U++) {
                      var E = arguments[U]
                      for (var v in E)
                        Object.prototype.hasOwnProperty.call(E, v) &&
                          (z[v] = E[v])
                    }
                    return z
                  }),
              f.apply(this, arguments)
            )
          }
          var p = function (z) {
            var U = z.pageClassName,
              E = z.pageLinkClassName,
              v = z.page,
              b = z.selected,
              k = z.activeClassName,
              A = z.activeLinkClassName,
              g = z.getEventListener,
              C = z.pageSelectedHandler,
              L = z.href,
              R = z.extraAriaContext,
              q = z.pageLabelBuilder,
              H = z.rel,
              W = z.ariaLabel || 'Page ' + v + (R ? ' ' + R : ''),
              Q = null
            return (
              b &&
                ((Q = 'page'),
                (W = z.ariaLabel || 'Page ' + v + ' is your current page'),
                (U = U !== void 0 ? U + ' ' + k : k),
                E !== void 0 ? A !== void 0 && (E = E + ' ' + A) : (E = A)),
              u().createElement(
                'li',
                { className: U },
                u().createElement(
                  'a',
                  f(
                    {
                      rel: H,
                      role: L ? void 0 : 'button',
                      className: E,
                      href: L,
                      tabIndex: b ? '-1' : '0',
                      'aria-label': W,
                      'aria-current': Q,
                      onKeyPress: C,
                    },
                    g(C)
                  ),
                  q(v)
                )
              )
            )
          }
          p.propTypes = {
            pageSelectedHandler: c().func.isRequired,
            selected: c().bool.isRequired,
            pageClassName: c().string,
            pageLinkClassName: c().string,
            activeClassName: c().string,
            activeLinkClassName: c().string,
            extraAriaContext: c().string,
            href: c().string,
            ariaLabel: c().string,
            page: c().number.isRequired,
            getEventListener: c().func.isRequired,
            pageLabelBuilder: c().func.isRequired,
            rel: c().string,
          }
          const m = p
          function D() {
            return (
              (D = Object.assign
                ? Object.assign.bind()
                : function (z) {
                    for (var U = 1; U < arguments.length; U++) {
                      var E = arguments[U]
                      for (var v in E)
                        Object.prototype.hasOwnProperty.call(E, v) &&
                          (z[v] = E[v])
                    }
                    return z
                  }),
              D.apply(this, arguments)
            )
          }
          var w = function (z) {
            var U = z.breakLabel,
              E = z.breakAriaLabel,
              v = z.breakClassName,
              b = z.breakLinkClassName,
              k = z.breakHandler,
              A = z.getEventListener,
              g = v || 'break'
            return u().createElement(
              'li',
              { className: g },
              u().createElement(
                'a',
                D(
                  {
                    className: b,
                    role: 'button',
                    tabIndex: '0',
                    'aria-label': E,
                    onKeyPress: k,
                  },
                  A(k)
                ),
                U
              )
            )
          }
          w.propTypes = {
            breakLabel: c().oneOfType([c().string, c().node]),
            breakAriaLabel: c().string,
            breakClassName: c().string,
            breakLinkClassName: c().string,
            breakHandler: c().func.isRequired,
            getEventListener: c().func.isRequired,
          }
          const S = w
          function y(z) {
            var U =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ''
            return z ?? U
          }
          function h(z) {
            return (
              (h =
                typeof Symbol == 'function' &&
                typeof Symbol.iterator == 'symbol'
                  ? function (U) {
                      return typeof U
                    }
                  : function (U) {
                      return U &&
                        typeof Symbol == 'function' &&
                        U.constructor === Symbol &&
                        U !== Symbol.prototype
                        ? 'symbol'
                        : typeof U
                    }),
              h(z)
            )
          }
          function x() {
            return (
              (x = Object.assign
                ? Object.assign.bind()
                : function (z) {
                    for (var U = 1; U < arguments.length; U++) {
                      var E = arguments[U]
                      for (var v in E)
                        Object.prototype.hasOwnProperty.call(E, v) &&
                          (z[v] = E[v])
                    }
                    return z
                  }),
              x.apply(this, arguments)
            )
          }
          function B(z, U) {
            for (var E = 0; E < U.length; E++) {
              var v = U[E]
              ;(v.enumerable = v.enumerable || !1),
                (v.configurable = !0),
                'value' in v && (v.writable = !0),
                Object.defineProperty(z, v.key, v)
            }
          }
          function j(z, U) {
            return (
              (j = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (E, v) {
                    return (E.__proto__ = v), E
                  }),
              j(z, U)
            )
          }
          function I(z, U) {
            if (U && (h(U) === 'object' || typeof U == 'function')) return U
            if (U !== void 0)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return F(z)
          }
          function F(z) {
            if (z === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return z
          }
          function _(z) {
            return (
              (_ = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (U) {
                    return U.__proto__ || Object.getPrototypeOf(U)
                  }),
              _(z)
            )
          }
          function P(z, U, E) {
            return (
              U in z
                ? Object.defineProperty(z, U, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (z[U] = E),
              z
            )
          }
          var $ = (function (z) {
            ;(function (g, C) {
              if (typeof C != 'function' && C !== null)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(g.prototype = Object.create(C && C.prototype, {
                constructor: { value: g, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(g, 'prototype', { writable: !1 }),
                C && j(g, C)
            })(A, z)
            var U,
              E,
              v,
              b,
              k =
                ((v = A),
                (b = (function () {
                  if (
                    typeof Reflect > 'u' ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1
                  if (typeof Proxy == 'function') return !0
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    )
                  } catch {
                    return !1
                  }
                })()),
                function () {
                  var g,
                    C = _(v)
                  if (b) {
                    var L = _(this).constructor
                    g = Reflect.construct(C, arguments, L)
                  } else g = C.apply(this, arguments)
                  return I(this, g)
                })
            function A(g) {
              var C, L
              return (
                (function (R, q) {
                  if (!(R instanceof q))
                    throw new TypeError('Cannot call a class as a function')
                })(this, A),
                P(F((C = k.call(this, g))), 'handlePreviousPage', function (R) {
                  var q = C.state.selected
                  C.handleClick(R, null, q > 0 ? q - 1 : void 0, {
                    isPrevious: !0,
                  })
                }),
                P(F(C), 'handleNextPage', function (R) {
                  var q = C.state.selected,
                    H = C.props.pageCount
                  C.handleClick(R, null, q < H - 1 ? q + 1 : void 0, {
                    isNext: !0,
                  })
                }),
                P(F(C), 'handlePageSelected', function (R, q) {
                  if (C.state.selected === R)
                    return (
                      C.callActiveCallback(R),
                      void C.handleClick(q, null, void 0, { isActive: !0 })
                    )
                  C.handleClick(q, null, R)
                }),
                P(F(C), 'handlePageChange', function (R) {
                  C.state.selected !== R &&
                    (C.setState({ selected: R }), C.callCallback(R))
                }),
                P(F(C), 'getEventListener', function (R) {
                  return P({}, C.props.eventListener, R)
                }),
                P(F(C), 'handleClick', function (R, q, H) {
                  var W =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {},
                    Q = W.isPrevious,
                    G = Q !== void 0 && Q,
                    De = W.isNext,
                    ke = De !== void 0 && De,
                    se = W.isBreak,
                    oe = se !== void 0 && se,
                    Ce = W.isActive,
                    Ne = Ce !== void 0 && Ce
                  R.preventDefault ? R.preventDefault() : (R.returnValue = !1)
                  var ht = C.state.selected,
                    ie = C.props.onClick,
                    Be = H
                  if (ie) {
                    var et = ie({
                      index: q,
                      selected: ht,
                      nextSelectedPage: H,
                      event: R,
                      isPrevious: G,
                      isNext: ke,
                      isBreak: oe,
                      isActive: Ne,
                    })
                    if (et === !1) return
                    Number.isInteger(et) && (Be = et)
                  }
                  Be !== void 0 && C.handlePageChange(Be)
                }),
                P(F(C), 'handleBreakClick', function (R, q) {
                  var H = C.state.selected
                  C.handleClick(
                    q,
                    R,
                    H < R ? C.getForwardJump() : C.getBackwardJump(),
                    { isBreak: !0 }
                  )
                }),
                P(F(C), 'callCallback', function (R) {
                  C.props.onPageChange !== void 0 &&
                    typeof C.props.onPageChange == 'function' &&
                    C.props.onPageChange({ selected: R })
                }),
                P(F(C), 'callActiveCallback', function (R) {
                  C.props.onPageActive !== void 0 &&
                    typeof C.props.onPageActive == 'function' &&
                    C.props.onPageActive({ selected: R })
                }),
                P(F(C), 'getElementPageRel', function (R) {
                  var q = C.state.selected,
                    H = C.props,
                    W = H.nextPageRel,
                    Q = H.prevPageRel,
                    G = H.selectedPageRel
                  return q - 1 === R
                    ? Q
                    : q === R
                      ? G
                      : q + 1 === R
                        ? W
                        : void 0
                }),
                P(F(C), 'pagination', function () {
                  var R = [],
                    q = C.props,
                    H = q.pageRangeDisplayed,
                    W = q.pageCount,
                    Q = q.marginPagesDisplayed,
                    G = q.breakLabel,
                    De = q.breakClassName,
                    ke = q.breakLinkClassName,
                    se = q.breakAriaLabels,
                    oe = C.state.selected
                  if (W <= H)
                    for (var Ce = 0; Ce < W; Ce++) R.push(C.getPageElement(Ce))
                  else {
                    var Ne = H / 2,
                      ht = H - Ne
                    oe > W - H / 2
                      ? (Ne = H - (ht = W - oe))
                      : oe < H / 2 && (ht = H - (Ne = oe))
                    var ie,
                      Be,
                      et = function (Wt) {
                        return C.getPageElement(Wt)
                      },
                      Ae = []
                    for (ie = 0; ie < W; ie++) {
                      var Lo = ie + 1
                      if (Lo <= Q)
                        Ae.push({ type: 'page', index: ie, display: et(ie) })
                      else if (Lo > W - Q)
                        Ae.push({ type: 'page', index: ie, display: et(ie) })
                      else if (
                        ie >= oe - Ne &&
                        ie <= oe + (oe === 0 && H > 1 ? ht - 1 : ht)
                      )
                        Ae.push({ type: 'page', index: ie, display: et(ie) })
                      else if (
                        G &&
                        Ae.length > 0 &&
                        Ae[Ae.length - 1].display !== Be &&
                        (H > 0 || Q > 0)
                      ) {
                        var ya = ie < oe ? se.backward : se.forward
                        ;(Be = u().createElement(S, {
                          key: ie,
                          breakAriaLabel: ya,
                          breakLabel: G,
                          breakClassName: De,
                          breakLinkClassName: ke,
                          breakHandler: C.handleBreakClick.bind(null, ie),
                          getEventListener: C.getEventListener,
                        })),
                          Ae.push({ type: 'break', index: ie, display: Be })
                      }
                    }
                    Ae.forEach(function (Wt, Gt) {
                      var Po = Wt
                      Wt.type === 'break' &&
                        Ae[Gt - 1] &&
                        Ae[Gt - 1].type === 'page' &&
                        Ae[Gt + 1] &&
                        Ae[Gt + 1].type === 'page' &&
                        Ae[Gt + 1].index - Ae[Gt - 1].index <= 2 &&
                        (Po = {
                          type: 'page',
                          index: Wt.index,
                          display: et(Wt.index),
                        }),
                        R.push(Po.display)
                    })
                  }
                  return R
                }),
                g.initialPage !== void 0 &&
                  g.forcePage !== void 0 &&
                  console.warn(
                    '(react-paginate): Both initialPage ('
                      .concat(g.initialPage, ') and forcePage (')
                      .concat(
                        g.forcePage,
                        ') props are provided, which is discouraged.'
                      ) +
                      ` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`
                  ),
                (L = g.initialPage
                  ? g.initialPage
                  : g.forcePage
                    ? g.forcePage
                    : 0),
                (C.state = { selected: L }),
                C
              )
            }
            return (
              (U = A),
              (E = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var g = this.props,
                      C = g.initialPage,
                      L = g.disableInitialCallback,
                      R = g.extraAriaContext,
                      q = g.pageCount,
                      H = g.forcePage
                    C === void 0 || L || this.callCallback(C),
                      R &&
                        console.warn(
                          'DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.'
                        ),
                      Number.isInteger(q) ||
                        console.warn(
                          '(react-paginate): The pageCount prop value provided is not an integer ('.concat(
                            q,
                            '). Did you forget a Math.ceil()?'
                          )
                        ),
                      C !== void 0 &&
                        C > q - 1 &&
                        console.warn(
                          '(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ('
                            .concat(C, ' > ')
                            .concat(q - 1, ').')
                        ),
                      H !== void 0 &&
                        H > q - 1 &&
                        console.warn(
                          '(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ('
                            .concat(H, ' > ')
                            .concat(q - 1, ').')
                        )
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (g) {
                    this.props.forcePage !== void 0 &&
                      this.props.forcePage !== g.forcePage &&
                      (this.props.forcePage > this.props.pageCount - 1 &&
                        console.warn(
                          '(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ('
                            .concat(this.props.forcePage, ' > ')
                            .concat(this.props.pageCount - 1, ').')
                        ),
                      this.setState({ selected: this.props.forcePage })),
                      Number.isInteger(g.pageCount) &&
                        !Number.isInteger(this.props.pageCount) &&
                        console.warn(
                          '(react-paginate): The pageCount prop value provided is not an integer ('.concat(
                            this.props.pageCount,
                            '). Did you forget a Math.ceil()?'
                          )
                        )
                  },
                },
                {
                  key: 'getForwardJump',
                  value: function () {
                    var g = this.state.selected,
                      C = this.props,
                      L = C.pageCount,
                      R = g + C.pageRangeDisplayed
                    return R >= L ? L - 1 : R
                  },
                },
                {
                  key: 'getBackwardJump',
                  value: function () {
                    var g = this.state.selected - this.props.pageRangeDisplayed
                    return g < 0 ? 0 : g
                  },
                },
                {
                  key: 'getElementHref',
                  value: function (g) {
                    var C = this.props,
                      L = C.hrefBuilder,
                      R = C.pageCount,
                      q = C.hrefAllControls
                    if (L)
                      return q || (g >= 0 && g < R)
                        ? L(g + 1, R, this.state.selected)
                        : void 0
                  },
                },
                {
                  key: 'ariaLabelBuilder',
                  value: function (g) {
                    var C = g === this.state.selected
                    if (
                      this.props.ariaLabelBuilder &&
                      g >= 0 &&
                      g < this.props.pageCount
                    ) {
                      var L = this.props.ariaLabelBuilder(g + 1, C)
                      return (
                        this.props.extraAriaContext &&
                          !C &&
                          (L = L + ' ' + this.props.extraAriaContext),
                        L
                      )
                    }
                  },
                },
                {
                  key: 'getPageElement',
                  value: function (g) {
                    var C = this.state.selected,
                      L = this.props,
                      R = L.pageClassName,
                      q = L.pageLinkClassName,
                      H = L.activeClassName,
                      W = L.activeLinkClassName,
                      Q = L.extraAriaContext,
                      G = L.pageLabelBuilder
                    return u().createElement(m, {
                      key: g,
                      pageSelectedHandler: this.handlePageSelected.bind(
                        null,
                        g
                      ),
                      selected: C === g,
                      rel: this.getElementPageRel(g),
                      pageClassName: R,
                      pageLinkClassName: q,
                      activeClassName: H,
                      activeLinkClassName: W,
                      extraAriaContext: Q,
                      href: this.getElementHref(g),
                      ariaLabel: this.ariaLabelBuilder(g),
                      page: g + 1,
                      pageLabelBuilder: G,
                      getEventListener: this.getEventListener,
                    })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var g = this.props.renderOnZeroPageCount
                    if (this.props.pageCount === 0 && g !== void 0)
                      return g && g(this.props)
                    var C = this.props,
                      L = C.disabledClassName,
                      R = C.disabledLinkClassName,
                      q = C.pageCount,
                      H = C.className,
                      W = C.containerClassName,
                      Q = C.previousLabel,
                      G = C.previousClassName,
                      De = C.previousLinkClassName,
                      ke = C.previousAriaLabel,
                      se = C.prevRel,
                      oe = C.nextLabel,
                      Ce = C.nextClassName,
                      Ne = C.nextLinkClassName,
                      ht = C.nextAriaLabel,
                      ie = C.nextRel,
                      Be = this.state.selected,
                      et = Be === 0,
                      Ae = Be === q - 1,
                      Lo = ''.concat(y(G)).concat(et ? ' '.concat(y(L)) : ''),
                      ya = ''.concat(y(Ce)).concat(Ae ? ' '.concat(y(L)) : ''),
                      Wt = ''.concat(y(De)).concat(et ? ' '.concat(y(R)) : ''),
                      Gt = ''.concat(y(Ne)).concat(Ae ? ' '.concat(y(R)) : ''),
                      Po = et ? 'true' : 'false',
                      Bh = Ae ? 'true' : 'false'
                    return u().createElement(
                      'ul',
                      {
                        className: H || W,
                        role: 'navigation',
                        'aria-label': 'Pagination',
                      },
                      u().createElement(
                        'li',
                        { className: Lo },
                        u().createElement(
                          'a',
                          x(
                            {
                              className: Wt,
                              href: this.getElementHref(Be - 1),
                              tabIndex: et ? '-1' : '0',
                              role: 'button',
                              onKeyPress: this.handlePreviousPage,
                              'aria-disabled': Po,
                              'aria-label': ke,
                              rel: se,
                            },
                            this.getEventListener(this.handlePreviousPage)
                          ),
                          Q
                        )
                      ),
                      this.pagination(),
                      u().createElement(
                        'li',
                        { className: ya },
                        u().createElement(
                          'a',
                          x(
                            {
                              className: Gt,
                              href: this.getElementHref(Be + 1),
                              tabIndex: Ae ? '-1' : '0',
                              role: 'button',
                              onKeyPress: this.handleNextPage,
                              'aria-disabled': Bh,
                              'aria-label': ht,
                              rel: ie,
                            },
                            this.getEventListener(this.handleNextPage)
                          ),
                          oe
                        )
                      )
                    )
                  },
                },
              ]) && B(U.prototype, E),
              Object.defineProperty(U, 'prototype', { writable: !1 }),
              A
            )
          })(s.Component)
          P($, 'propTypes', {
            pageCount: c().number.isRequired,
            pageRangeDisplayed: c().number,
            marginPagesDisplayed: c().number,
            previousLabel: c().node,
            previousAriaLabel: c().string,
            prevPageRel: c().string,
            prevRel: c().string,
            nextLabel: c().node,
            nextAriaLabel: c().string,
            nextPageRel: c().string,
            nextRel: c().string,
            breakLabel: c().oneOfType([c().string, c().node]),
            breakAriaLabels: c().shape({
              forward: c().string,
              backward: c().string,
            }),
            hrefBuilder: c().func,
            hrefAllControls: c().bool,
            onPageChange: c().func,
            onPageActive: c().func,
            onClick: c().func,
            initialPage: c().number,
            forcePage: c().number,
            disableInitialCallback: c().bool,
            containerClassName: c().string,
            className: c().string,
            pageClassName: c().string,
            pageLinkClassName: c().string,
            pageLabelBuilder: c().func,
            activeClassName: c().string,
            activeLinkClassName: c().string,
            previousClassName: c().string,
            nextClassName: c().string,
            previousLinkClassName: c().string,
            nextLinkClassName: c().string,
            disabledClassName: c().string,
            disabledLinkClassName: c().string,
            breakClassName: c().string,
            breakLinkClassName: c().string,
            extraAriaContext: c().string,
            ariaLabelBuilder: c().func,
            eventListener: c().string,
            renderOnZeroPageCount: c().func,
            selectedPageRel: c().string,
          }),
            P($, 'defaultProps', {
              pageRangeDisplayed: 2,
              marginPagesDisplayed: 3,
              activeClassName: 'selected',
              previousLabel: 'Previous',
              previousClassName: 'previous',
              previousAriaLabel: 'Previous page',
              prevPageRel: 'prev',
              prevRel: 'prev',
              nextLabel: 'Next',
              nextClassName: 'next',
              nextAriaLabel: 'Next page',
              nextPageRel: 'next',
              nextRel: 'next',
              breakLabel: '...',
              breakAriaLabels: {
                forward: 'Jump forward',
                backward: 'Jump backward',
              },
              disabledClassName: 'disabled',
              disableInitialCallback: !1,
              pageLabelBuilder: function (z) {
                return z
              },
              eventListener: 'onClick',
              renderOnZeroPageCount: void 0,
              selectedPageRel: 'canonical',
              hrefAllControls: !1,
            })
          const O = $
        })(),
        a
      )
    })()
  )
})(kh)
var Jx = kh.exports
const dl = zt(Jx)
function Zx() {
  const [e, t] = T.useState([]),
    [r, n] = T.useState([]),
    [o, i] = T.useState(null),
    [a, s] = T.useState(null),
    [u, l] = T.useState(0),
    { lang: c } = Ze(),
    f = vr(),
    { t: p, i18n: m } = Xe(),
    D = (O) => {
      f(`/${m.language}/books/${O}`)
    },
    w = 16,
    S = {
      en: { autors: '/en/authors' },
      es: { autors: '/es/authors' },
      ca: { autors: '/ca/authors' },
      fr: { autors: '/fr/authors' },
      it: { autors: '/it/authors' },
    },
    y = async () => {
      try {
        const O = await J.get(
          `https://api.elliotfern.com/book.php?type=totsLlibres&lang=${c}`
        )
        t(O.data),
          (document.title = `${p('book.titolPagina')} - Elliot Fernandez`),
          n(O.data)
      } catch (O) {
        console.error('Error al obtener libros:', O)
      }
    }
  T.useEffect(() => {
    y()
  }, [])
  const h = (O) => {
      if (O === '') t(r)
      else {
        const z = r.filter(
          (U) =>
            U.titol.toLowerCase().includes(O.toLowerCase()) ||
            (U.AutCognom1 &&
              U.AutCognom1.toLowerCase().includes(O.toLowerCase()))
        )
        t(z)
      }
      l(0)
    },
    x = () => {
      let O = r
      return (
        e.length > 0 && (O = e),
        o && (O = O.filter((z) => z.genere === o)),
        a && (O = O.filter((z) => z.lang === a)),
        O
      )
    },
    B = ({ selected: O }) => {
      l(O)
    },
    j = x(),
    I = (u + 1) * w,
    F = I - w,
    _ = j.slice(F, I),
    P = Array.from(new Set(r.map((O) => O.genere))),
    $ = Array.from(new Set(r.map((O) => O.lang)))
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', { className: 'bold', children: p('book.titolPagina') }),
      d.jsx(re, {
        to: S[m.language].autors,
        children: d.jsx('button', {
          className: 'tab-button tab-button-all-button',
          children: p('book.paginaAutors'),
        }),
      }),
      d.jsx(Qx, { books: e, setBooks: t, allBooks: r, onSearch: h }),
      d.jsxs('div', {
        className: 'filter-buttons',
        children: [
          d.jsx('h3', { children: p('book.genres') }),
          P.map((O) =>
            d.jsx(
              'button',
              {
                className: `tab-button tab-button-topic ${o === O ? 'active' : ''}`,
                onClick: () => {
                  i(O), l(0)
                },
                children: O,
              },
              O
            )
          ),
          d.jsx('button', {
            className: 'tab-button tab-button-all-button',
            onClick: () => {
              i(null), l(0)
            },
            children: p('book.allGenres'),
          }),
        ],
      }),
      d.jsxs('div', {
        className: 'filter-buttons',
        children: [
          d.jsx('h3', { children: p('book.languages') }),
          $.map((O) =>
            d.jsx(
              'button',
              {
                className: `tab-button tab-button-categoria ${a === O ? 'active' : ''}`,
                onClick: () => {
                  s(O), l(0)
                },
                children: O,
              },
              O
            )
          ),
          d.jsx('button', {
            className: 'tab-button tab-button-all-button',
            onClick: () => {
              s(null), l(0)
            },
            children: p('book.allLanguages'),
          }),
        ],
      }),
      d.jsx('div', {
        className: Fr.gridContainer,
        children: _.map((O) =>
          d.jsxs(
            'div',
            {
              className: Fr.gridItem,
              children: [
                d.jsx('img', {
                  className: 'bookPhoto',
                  src: O.nameImg
                    ? `https://media.elliotfern.com/img/library-book/${O.nameImg}.jpg`
                    : 'https://media.elliotfern.com/img/library-book/book_default.jpg',
                  alt: `Portada de ${O.titol}`,
                  title: te.decode(O.titol),
                  onClick: () => D(O.bookSlug),
                  style: { cursor: 'pointer' },
                }),
                d.jsx('p', {
                  children: d.jsx('strong', { children: te.decode(O.titol) }),
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', { children: [p('book.autor'), ':'] }),
                    ' ',
                    O.AutNom,
                    ' ',
                    O.AutCognom1,
                  ],
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', { children: [p('book.year'), ':'] }),
                    ' ',
                    O.any,
                  ],
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', {
                      children: [p('book.originalLanguage'), ':'],
                    }),
                    ' ',
                    O.lang,
                  ],
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', { children: [p('book.tematica'), ':'] }),
                    ' ',
                    O.tema,
                  ],
                }),
                d.jsx('button', {
                  className: 'tab-button tab-button-categoria',
                  onClick: () => D(O.bookSlug),
                  children: p('book.bookDetailsBtn'),
                }),
              ],
            },
            O.id
          )
        ),
      }),
      d.jsx('div', {
        className: 'pagination-container',
        children: d.jsx(dl, {
          previousLabel: 'Anterior',
          nextLabel: 'Següent',
          pageCount: Math.ceil(j.length / w),
          pageRangeDisplayed: 5,
          marginPagesDisplayed: 2,
          onPageChange: B,
          containerClassName: 'pagination',
          activeClassName: 'active',
          pageLinkClassName: 'pagination-link',
        }),
      }),
    ],
  })
}
const Xx = () => {
  const { t: e } = Xe(),
    { lang: t } = Ze(),
    r = vr(),
    n = Lt(),
    i = new URLSearchParams(n.search).get('query'),
    [a, s] = T.useState([]),
    [u, l] = T.useState(!0),
    [c, f] = T.useState(null),
    p = T.useCallback(async () => {
      if (!i) {
        f(e('search.errorEmptyQuery')), l(!1)
        return
      }
      l(!0), f(null)
      try {
        const m = await J.get(
          `https://editor.elliotfern.com/wp-json/wp/v2/posts?search=${i}&lang=${t}`
        )
        s(m.data), l(!1)
      } catch (m) {
        console.error('Error fetching data:', m), r('/error')
      }
    }, [i, t, r, e])
  return (
    T.useEffect(() => {
      p()
    }, [p]),
    u
      ? d.jsx('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '25px',
          },
          children: d.jsx('h3', { children: e('search.loading') }),
        })
      : d.jsxs(d.Fragment, {
          children: [
            d.jsxs('h2', { children: [e('search.title'), ' "', i, '":'] }),
            d.jsx('h5', { children: e('search.subTitol') }),
            c &&
              d.jsx('div', {
                style: { color: 'red', textAlign: 'center', marginTop: '20px' },
                children: d.jsx('p', { children: c }),
              }),
            !c &&
              a.length === 0 &&
              d.jsx('div', {
                style: { textAlign: 'center', marginTop: '20px' },
                children: d.jsx('p', { children: e('search.noResults') }),
              }),
            d.jsx('ul', {
              children: a.map((m) =>
                d.jsx(
                  'li',
                  {
                    children: d.jsx(re, {
                      to: `/${t}/article/${m.slug}`,
                      children: te.decode(m.title.rendered),
                    }),
                  },
                  m.id
                )
              ),
            }),
          ],
        })
  )
}
function eC() {
  return d.jsxs('div', {
    children: [
      d.jsx('h2', { children: 'Error' }),
      d.jsxs('p', {
        children: [
          "This page it's not running fine. ",
          d.jsx(re, { to: '/', children: ' You can go back to the homepage.' }),
        ],
      }),
    ],
  })
}
function tC() {
  return d.jsxs('div', {
    children: [
      d.jsx('h2', { children: 'Error 404' }),
      d.jsxs('p', {
        children: [
          "This page it's not found. ",
          d.jsx(re, { to: '/', children: ' You can go back to the homepage.' }),
        ],
      }),
    ],
  })
}
function rC() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', { children: 'Contact details' }),
      d.jsxs('p', {
        children: [
          'If you want to contact at the webmaster, please send an email to elliot[at]elliot.cat. Thanks!',
          ' ',
        ],
      }),
    ],
  })
}
function nC() {
  const [e, t] = T.useState([]),
    [r, n] = T.useState(0),
    o = 10
  T.useEffect(() => {
    document.title = 'Blog - Elliot Fernandez'
  }, []),
    T.useEffect(() => {
      ;(async () => {
        try {
          const c = await J.get('https://api.elliotfern.com/blog.php?type=blog')
          t(c.data)
        } catch (c) {
          console.error('Error fetching data:', c)
        }
      })()
    }, [])
  const i = ({ selected: l }) => {
      n(l)
    },
    a = r * o,
    s = a + o,
    u = e.slice(a, s)
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', { children: 'Blog: Calaix de sastre des de 2002' }),
      u.map((l) =>
        d.jsxs(
          'div',
          {
            children: [
              d.jsx(re, {
                to: `/blog/${l.post_name}`,
                style: { textDecoration: 'none', color: 'inherit' },
                children: d.jsx('h3', { children: l.post_title }),
              }),
              d.jsx('p', { children: l.post_excerpt }),
              d.jsxs('p', {
                children: [
                  'Publicat el: ',
                  yn(l.post_date).format('DD/MM/YYYY'),
                ],
              }),
              d.jsx(re, {
                to: `/blog/${l.post_name}`,
                children: 'Llegir article',
              }),
            ],
          },
          l.ID
        )
      ),
      d.jsx('div', {
        className: 'pagination-container',
        children: d.jsx(dl, {
          previousLabel: 'Anterior',
          nextLabel: 'Siguiente',
          pageCount: Math.ceil(e.length / o),
          pageRangeDisplayed: 5,
          marginPagesDisplayed: 2,
          onPageChange: i,
          containerClassName: 'pagination',
          activeClassName: 'active',
          pageLinkClassName: 'pagination-link',
        }),
      }),
    ],
  })
}
function oC() {
  const [e, t] = T.useState(null),
    [r, n] = T.useState(!0),
    { blogArticle: o } = Ze()
  T.useEffect(() => {
    i()
  }, [])
  const i = async () => {
    try {
      const f = await J.get(
        `https://api.elliotfern.com/blog.php?type=blogArticle&paramName=${o}`
      )
      t(f.data), n(!1)
    } catch (f) {
      console.error('Error fetching data:', f)
    }
  }
  T.useEffect(() => {
    e && e[0] && e[0].post_title && a()
  }, [e])
  const a = () => {
    document.title = `${e[0].post_title} - Open History`
  }
  if (r === !0)
    return d.jsx('div', {
      style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
      children: d.jsx('h3', { children: 'cargando ... ' }),
    })
  const s = { __html: e[0].post_content },
    u = { __html: e[0].post_excerpt },
    l = e[0].post_date,
    c = e[0].post_modified
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('meta', { name: 'description', content: e[0].post_excerpt }),
      d.jsx('h2', { className: 'text-center bold', children: e[0].post_title }),
      d.jsx('h5', {
        className: 'text-center italic',
        children: d.jsx('div', { dangerouslySetInnerHTML: u }),
      }),
      d.jsx(cl, {}),
      d.jsx('hr', {}),
      d.jsxs('p', { children: ['Publicat el ', l, ' | Modificat el ', c] }),
      d.jsx('div', { dangerouslySetInnerHTML: s }),
      d.jsx('hr', {}),
    ],
  })
}
const iC = () => {
    const { t: e } = Xe(),
      { lang: t } = Ze(),
      [r, n] = T.useState([]),
      [o, i] = T.useState([]),
      [a, s] = T.useState(''),
      [u, l] = T.useState([]),
      [c, f] = T.useState(''),
      [p, m] = T.useState(''),
      [D, w] = T.useState(!1)
    T.useEffect(() => {
      ;(async () => {
        try {
          const _ = await J.get(
            `https://api.elliotfern.com/blog.php?type=links&lang=${t}`
          )
          n(_.data)
          const P = [...new Set(_.data.map(($) => $.categoria))].sort(($, O) =>
            $.localeCompare(O)
          )
          i(P)
        } catch (_) {
          console.error('Error fetching the links:', _)
        }
      })()
    }, [t])
    const S = (F) => {
        s(F), f('')
        const _ = r.filter(($) => $.categoria === F).map(($) => $.tema),
          P = [...new Set(_)].sort(($, O) => $.localeCompare(O))
        l(P), w(!1)
      },
      y = (F) => {
        f(F), w(!0)
      },
      h = () => {
        f(''), w(!0)
      },
      x = (F) => {
        const _ = F.target.value
        m(_), w(!!_)
      },
      B = async () => {
        try {
          const F = await J.get(
            `https://api.elliotfern.com/blog.php?type=links&lang=${t}`
          )
          n(F.data)
        } catch (F) {
          console.error('Error fetching the links:', F)
        }
      },
      j = () => {
        B(), w(!0)
      },
      I = p
        ? r.filter(
            (F) =>
              F.nom.toLowerCase().includes(p.toLowerCase()) ||
              F.categoria.toLowerCase().includes(p.toLowerCase()) ||
              F.tema.toLowerCase().includes(p.toLowerCase())
          )
        : r.filter((F) => {
            const _ = a ? F.categoria === a : !0,
              P = c ? F.tema === c : !0
            return _ && P
          })
    return d.jsxs('div', {
      className: 'links-container',
      children: [
        d.jsx('h1', { children: e('link.PaginaTitol') }),
        d.jsx('div', {
          className: 'search-container',
          children: d.jsx('input', {
            type: 'text',
            className: 'search-input',
            placeholder: e('link.buscar'),
            value: p,
            onChange: x,
          }),
        }),
        !p &&
          d.jsxs(d.Fragment, {
            children: [
              d.jsx('h4', {
                className: 'center-title',
                children: e('link.Categories'),
              }),
              d.jsx('div', {
                className: 'tabs',
                children: o.map((F) =>
                  d.jsx(
                    'button',
                    {
                      onClick: () => S(F),
                      className: `tab-button tab-button-categoria ${a === F ? 'active' : ''}`,
                      children: F,
                    },
                    F
                  )
                ),
              }),
              a &&
                d.jsxs('div', {
                  className: 'tabs mt-3',
                  children: [
                    d.jsx('h4', {
                      className: 'center-title',
                      children: e('link.Topics'),
                    }),
                    d.jsxs('div', {
                      className: 'button-container',
                      children: [
                        u.map((F) =>
                          d.jsx(
                            'button',
                            {
                              onClick: () => y(F),
                              className: `tab-button tab-button-topic ${c === F ? 'active' : ''}`,
                              children: F,
                            },
                            F
                          )
                        ),
                        d.jsx('button', {
                          onClick: h,
                          className: 'tab-button tab-button-all-button',
                          children: e('link.showAllLinks'),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        D &&
          d.jsxs('div', {
            children: [
              d.jsxs('table', {
                className: 'links-table mt-4',
                children: [
                  d.jsx('thead', {
                    children: d.jsxs('tr', {
                      children: [
                        d.jsx('th', { children: e('link.web') }),
                        d.jsx('th', { children: e('link.url') }),
                        d.jsx('th', { children: e('link.categoria') }),
                        d.jsx('th', { children: e('link.tema') }),
                        d.jsx('th', { children: e('link.tipus') }),
                        d.jsx('th', { children: e('link.idioma') }),
                        d.jsx('th', { children: e('link.data') }),
                      ],
                    }),
                  }),
                  d.jsx('tbody', {
                    children: I.map((F) =>
                      d.jsxs(
                        'tr',
                        {
                          children: [
                            d.jsx('td', {
                              'data-label': e('link.web'),
                              children: d.jsxs('a', {
                                href: F.web,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: [
                                  d.jsxs('svg', {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '12',
                                    height: '12',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                    className: 'icon-external-link',
                                    children: [
                                      d.jsx('path', {
                                        d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                      }),
                                      d.jsx('polyline', {
                                        points: '15 3 21 3 21 9',
                                      }),
                                      d.jsx('line', {
                                        x1: '10',
                                        y1: '14',
                                        x2: '21',
                                        y2: '3',
                                      }),
                                    ],
                                  }),
                                  F.nom,
                                ],
                              }),
                            }),
                            d.jsx('td', {
                              className: 'url-column',
                              'data-label': e('link.url'),
                              children: F.web,
                            }),
                            d.jsx('td', {
                              'data-label': e('link.categoria'),
                              children: F.categoria,
                            }),
                            d.jsx('td', {
                              'data-label': e('link.tema'),
                              children: F.tema,
                            }),
                            d.jsx('td', {
                              'data-label': e('link.tipus'),
                              children: F.tipus,
                            }),
                            d.jsx('td', {
                              'data-label': e('link.idioma'),
                              children: F.idioma,
                            }),
                            d.jsx('td', {
                              'data-label': e('link.data'),
                              children: new Date(
                                F.linkUpdated
                              ).toLocaleDateString(),
                            }),
                          ],
                        },
                        F.id
                      )
                    ),
                  }),
                ],
              }),
              d.jsx('button', {
                onClick: j,
                className: 'tab-button tab-button-categoria center-button',
                children: e('link.refreshTable'),
              }),
            ],
          }),
      ],
    })
  },
  aC = '_cookieBanner_15fok_2',
  sC = '_box_15fok_17',
  uC = '_acceptCookiesBtn_15fok_30',
  lC = '_rejectCookiesBtn_15fok_34',
  cC = '_policyCookiesBtn_15fok_38',
  dC = '_text_15fok_47',
  Nt = {
    cookieBanner: aC,
    box: sC,
    acceptCookiesBtn: uC,
    rejectCookiesBtn: lC,
    policyCookiesBtn: cC,
    text: dC,
  },
  fC = ({ onHide: e }) => {
    const { t, i18n: r } = Xe(),
      [n, o] = T.useState(!1),
      i = vr()
    T.useEffect(() => {
      const p = c('cookiesAccepted')
      p === 'true' ? (f(), o(!1)) : o(p !== 'false')
    }, [])
    const a = () => {
        l('cookiesAccepted', 'true', 30), o(!1), f(), e()
      },
      s = () => {
        l('cookiesAccepted', 'false', 30), o(!1)
      },
      u = () => {
        o(!0), i(He[r.language].privacyPolicy)
      },
      l = (p, m, D) => {
        const w = new Date()
        w.setTime(w.getTime() + D * 24 * 60 * 60 * 1e3),
          (document.cookie = `${p}=${m};expires=${w.toUTCString()};path=/;SameSite=None;Secure`)
      },
      c = (p) => {
        const m = document.cookie.split(';')
        for (let D = 0; D < m.length; D++) {
          const w = m[D].split('=')
          if (p === w[0].trim()) return decodeURIComponent(w[1])
        }
        return null
      },
      f = () => {
        zi.initialize('G-0L7VP04REK', { gaOptions: { anonymizeIp: !0 } }),
          zi.send({ hitType: 'pageview', page: window.location.pathname })
      }
    return n
      ? d.jsx('div', {
          className: Nt.cookieBanner,
          children: d.jsxs('div', {
            className: Nt.box,
            children: [
              d.jsx('h3', { children: t('cookieBanner.titol') }),
              d.jsx('p', {
                className: Nt.text,
                children: t('cookieBanner.missatge'),
              }),
              d.jsx('button', {
                id: 'policy-cookies-btn',
                className: `${Nt.button} ${Nt.policyCookiesBtn}`,
                onClick: u,
                children: t('cookieBanner.policy'),
              }),
              d.jsx('button', {
                id: 'accept-cookies-btn',
                className: `${Nt.button} ${Nt.acceptCookiesBtn}`,
                onClick: a,
                children: t('cookieBanner.acceptar'),
              }),
              d.jsx('button', {
                id: 'reject-cookies-btn',
                className: `${Nt.button} ${Nt.rejectCookiesBtn}`,
                onClick: s,
                children: t('cookieBanner.rebutjar'),
              }),
            ],
          }),
        })
      : null
  }
function pC() {
  const [e, t] = T.useState([]),
    [r, n] = T.useState([]),
    [o, i] = T.useState(null),
    [a, s] = T.useState(null),
    [u, l] = T.useState(0),
    c = 16,
    { t: f, i18n: p } = Xe(),
    m = vr(),
    { lang: D } = Ze(),
    w = async () => {
      try {
        const P = await J.get(
          `https://api.elliotfern.com/book.php?type=totsAutors&lang=${D}`
        )
        t(P.data), n(P.data)
      } catch (P) {
        console.error('Error al obtener autores:', P)
      }
    }
  T.useEffect(() => {
    w()
  }, [])
  const S = () => {
      let P = e
      return (
        o && (P = P.filter(($) => $.pais === o)),
        a && (P = P.filter(($) => $.professio === a)),
        P
      )
    },
    y = ({ selected: P }) => {
      l(P)
    },
    h = S(),
    x = (u + 1) * c,
    B = x - c,
    j = h.slice(B, x),
    I = Array.from(new Set(r.map((P) => P.pais))),
    F = Array.from(new Set(r.map((P) => P.professio))),
    _ = (P) => {
      m(`/${p.language}/authors/${P}`)
    }
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', {
        className: 'bold',
        children: f('bookAuthors.titolPagina'),
      }),
      d.jsxs('div', {
        className: 'filter-buttons',
        children: [
          d.jsx('h3', { children: f('bookAuthors.countries') }),
          I.map((P) =>
            d.jsx(
              'button',
              {
                className: `tab-button tab-button-topic ${o === P ? 'active' : ''}`,
                onClick: () => {
                  i(P), l(0)
                },
                children: P,
              },
              P
            )
          ),
          d.jsx('button', {
            className: 'tab-button tab-button-all-button',
            onClick: () => {
              i(null), l(0)
            },
            children: f('bookAuthors.allCountries'),
          }),
        ],
      }),
      d.jsxs('div', {
        className: 'filter-buttons',
        children: [
          d.jsx('h3', { children: f('bookAuthors.professions') }),
          F.map((P) =>
            d.jsx(
              'button',
              {
                className: `tab-button tab-button-topic ${a === P ? 'active' : ''}`,
                onClick: () => {
                  s(P), l(0)
                },
                children: P,
              },
              P
            )
          ),
          d.jsx('button', {
            className: 'tab-button tab-button-all-button',
            onClick: () => {
              s(null), l(0)
            },
            children: f('bookAuthors.allProfessions'),
          }),
        ],
      }),
      d.jsx('div', {
        className: Fr.gridContainer,
        children: j.map((P) =>
          d.jsxs(
            'div',
            {
              className: Fr.gridItem,
              children: [
                d.jsx('img', {
                  className: 'authorPhoto',
                  src: P.nameImg
                    ? `https://media.elliotfern.com/img/library-author/${P.nameImg}.jpg`
                    : 'https://media.elliotfern.com/img/library-author/author_default.jpg',
                  alt: `Foto de ${P.nom} ${P.cognoms}`,
                  title: `${P.nom} ${P.cognoms}`,
                  onClick: () => _(P.autorSlug),
                  style: { cursor: 'pointer' },
                }),
                d.jsx('p', {
                  children: d.jsxs('strong', {
                    children: [te.decode(P.nom), ' ', te.decode(P.cognoms)],
                  }),
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', {
                      children: [f('bookAuthors.country'), ':'],
                    }),
                    ' ',
                    P.pais,
                  ],
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', {
                      children: [f('bookAuthors.profession'), ':'],
                    }),
                    ' ',
                    P.professio,
                  ],
                }),
                d.jsxs('p', {
                  children: [
                    d.jsxs('strong', {
                      children: [f('bookAuthors.yearBorn'), ':'],
                    }),
                    ' ',
                    P.yearBorn,
                  ],
                }),
                P.yearDie &&
                  d.jsxs('p', {
                    children: [
                      d.jsxs('strong', {
                        children: [f('bookAuthors.yearDie'), ':'],
                      }),
                      ' ',
                      P.yearDie,
                    ],
                  }),
                d.jsx('button', {
                  className: 'tab-button tab-button-categoria',
                  onClick: () => _(P.autorSlug),
                  children: f('bookAuthors.authorDetailsBtn'),
                }),
              ],
            },
            P.id
          )
        ),
      }),
      d.jsx('div', {
        className: 'pagination-container',
        children: d.jsx(dl, {
          previousLabel: 'Anterior',
          nextLabel: 'Següent',
          pageCount: Math.ceil(h.length / c),
          pageRangeDisplayed: 5,
          marginPagesDisplayed: 2,
          onPageChange: y,
          containerClassName: 'pagination',
          activeClassName: 'active',
          pageLinkClassName: 'pagination-link',
        }),
      }),
    ],
  })
}
const hC = '_container_smgk5_3',
  gC = '_contentBook_smgk5_9',
  mC = '_bookImage_smgk5_14',
  yC = '_details_smgk5_22',
  vC = '_booksContainer_smgk5_29',
  DC = {
    container: hC,
    contentBook: gC,
    bookImage: mC,
    details: yC,
    booksContainer: vC,
  }
function xC() {
  const { lang: e, slug: t } = Ze(),
    [r, n] = T.useState(null),
    { t: o, i18n: i } = Xe(),
    a = vr()
  return (
    T.useEffect(() => {
      ;(async () => {
        try {
          const u = await J.get(
            `https://api.elliotfern.com/book.php?type=llibreDetalls&slug=${t}&lang=${e}`
          )
          n(u.data),
            (document.title = `${te.decode(u.data.titol)} - Elliot Fernandez`)
        } catch (u) {
          console.error('Error al obtener detalles del libro:', u)
        }
      })()
    }, [e, t, a]),
    r
      ? d.jsxs(d.Fragment, {
          children: [
            d.jsxs('h2', {
              className: 'bold',
              children: ['Llibre: ', te.decode(r.titol)],
            }),
            d.jsxs('div', {
              className: DC.contentBook,
              children: [
                d.jsx('img', {
                  src: r.nameImg
                    ? `https://media.elliotfern.com/img/library-book/${r.nameImg}.jpg`
                    : 'https://media.elliotfern.com/img/library-book/book_default.jpg',
                  alt: `Portada de ${te.decode(r.titol)}`,
                  className: 'book-image',
                }),
                d.jsxs('div', {
                  className: 'details',
                  children: [
                    ' ',
                    r.titolEng
                      ? d.jsxs(d.Fragment, {
                          children: [
                            d.jsxs('strong', {
                              children: [o('book.title'), ':'],
                            }),
                            ' ',
                            te.decode(r.titolEng),
                          ],
                        })
                      : null,
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', {
                          children: [o('book.author'), ': '],
                        }),
                        d.jsxs(re, {
                          to: `${He[i.language].authors}/${r.autorSlug}`,
                          children: [r.AutNom, ' ', r.AutCognom1],
                        }),
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', { children: [o('book.year'), ':'] }),
                        ' ',
                        r.any,
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', {
                          children: [o('book.language'), ':'],
                        }),
                        ' ',
                        r.idioma,
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', { children: [o('book.genre'), ':'] }),
                        ' ',
                        r.nomGen,
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', { children: [o('book.topic'), ':'] }),
                        ' ',
                        r.tema,
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', {
                          children: [o('book.editorial'), ':'],
                        }),
                        ' ',
                        r.nomEditorial,
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', {
                          children: [o('book.tipusLlibre'), ':'],
                        }),
                        ' ',
                        r.tipusLlibre,
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', { children: [o('dataCreacio'), ':'] }),
                        ' ',
                        yn(r.dateCreated).format('DD/MM/YYYY'),
                      ],
                    }),
                    d.jsxs('p', {
                      children: [
                        d.jsxs('strong', {
                          children: [o('dataModificacio'), ':'],
                        }),
                        ' ',
                        yn(r.dateModified).format('DD/MM/YYYY'),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : d.jsx('div', { children: o('loading') })
  )
}
const CC = '_contentBook_1khhl_3',
  AC = '_bookImage_1khhl_9',
  wC = '_details_1khhl_17',
  bC = '_booksContainer_1khhl_24',
  Jo = { contentBook: CC, bookImage: AC, details: wC, booksContainer: bC }
function EC() {
  const { lang: e, slug: t } = Ze(),
    [r, n] = T.useState(null),
    [o, i] = T.useState([]),
    [a, s] = T.useState(null),
    { t: u, i18n: l } = Xe()
  return (
    T.useEffect(() => {
      ;(async () => {
        try {
          const p = (
            await J.get(
              `https://api.elliotfern.com/book.php?type=autorDetalls&slug=${t}&lang=${e}`
            )
          ).data
          n(p),
            (document.title = `${p.AutNom} ${p.AutCognom1} - Elliot Fernandez`)
          const m = await J.get(
            `https://api.elliotfern.com/book.php?type=autorsLlibres&id=${p.id}`
          )
          i(m.data)
        } catch (f) {
          console.error('Error al obtener detalles del autor o libros:', f),
            s(u('error.fetchData'))
        }
      })()
    }, [e, t, u]),
    a
      ? d.jsx('div', { children: a })
      : r
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsxs('div', {
                className: Jo.contentBook,
                children: [
                  d.jsx('img', {
                    src: r.nameImg
                      ? `https://media.elliotfern.com/img/library-author/${r.nameImg}.jpg`
                      : 'https://media.elliotfern.com/img/library-author/author_default.jpg',
                    alt: `Foto de ${r.AutNom} ${r.AutCognom1}`,
                    className: Jo.bookImage,
                  }),
                  d.jsxs('div', {
                    className: Jo.details,
                    children: [
                      d.jsxs('h2', {
                        className: 'bold',
                        children: [r.AutNom, ' ', r.AutCognom1],
                      }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('bookAuthors.yearBorn'), ':'],
                          }),
                          ' ',
                          r.yearBorn,
                        ],
                      }),
                      r.yearDie &&
                        d.jsxs('p', {
                          children: [
                            d.jsxs('strong', {
                              children: [u('bookAuthors.yearDie'), ':'],
                            }),
                            ' ',
                            r.yearDie,
                          ],
                        }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('bookAuthors.country'), ':'],
                          }),
                          ' ',
                          r.nomPais,
                        ],
                      }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('bookAuthors.description'), ':'],
                          }),
                          ' ',
                          te.decode(r.AutDescrip),
                        ],
                      }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('bookAuthors.profession'), ':'],
                          }),
                          ' ',
                          te.decode(r.nameOc),
                        ],
                      }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('bookAuthors.moviment'), ':'],
                          }),
                          ' ',
                          te.decode(r.nomMov),
                        ],
                      }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('bookAuthors.wikipedia'), ':'],
                          }),
                          r.AutWikipedia
                            ? d.jsx('a', {
                                href: r.AutWikipedia,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: 'Consultar web',
                              })
                            : u('bookAuthors.noWikipedia'),
                        ],
                      }),
                      d.jsxs('p', {
                        children: [
                          d.jsxs('strong', {
                            children: [u('dataCreacio'), ':'],
                          }),
                          ' ',
                          yn(r.dateCreated).format('DD/MM/YYYY'),
                        ],
                      }),
                      r.dateModified &&
                        d.jsxs('p', {
                          children: [
                            d.jsxs('strong', {
                              children: [u('dataModificacio'), ':'],
                            }),
                            ' ',
                            yn(r.dateModified).format('DD/MM/YYYY'),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              d.jsxs('div', {
                className: Jo.booksContainer,
                children: [
                  d.jsx('h3', { children: u('bookAuthors.booksByAuthor') }),
                  o.length > 0
                    ? d.jsxs('table', {
                        className: 'links-table mt-4',
                        children: [
                          d.jsx('thead', {
                            children: d.jsxs('tr', {
                              children: [
                                d.jsx('th', { children: u('book.year') }),
                                d.jsx('th', { children: u('book.title') }),
                              ],
                            }),
                          }),
                          d.jsx('tbody', {
                            children: o.map((c) =>
                              d.jsxs(
                                'tr',
                                {
                                  children: [
                                    d.jsx('td', { children: c.any }),
                                    d.jsx('td', {
                                      children: d.jsx(re, {
                                        to: `${He[l.language].books}/${c.slug}`,
                                        children: te.decode(c.titol),
                                      }),
                                    }),
                                  ],
                                },
                                c.id
                              )
                            ),
                          }),
                        ],
                      })
                    : d.jsx('p', { children: u('bookAuthors.noBooks') }),
                ],
              }),
            ],
          })
        : d.jsx('div', { children: u('loading') })
  )
}
function SC() {
  const [e, t] = T.useState(null),
    [r, n] = T.useState(!0),
    [o, i] = T.useState(null),
    { lang: a } = Ze(),
    s = async () => {
      n(!0), i(null)
      try {
        const c = await J.get(
          `https://api.elliotfern.com/blog.php?type=articleId&id=${u}`
        )
        c.data && c.data.length > 0
          ? t(c.data)
          : i('No se encontraron datos para el autor.')
      } catch (c) {
        console.error('Error fetching data:', c),
          i('Error al cargar los datos.')
      } finally {
        n(!1)
      }
    }
  T.useEffect(() => {
    s()
  }, [])
  let u = 0
  if (
    (a === 'es' || a === 'en' || a === 'fr' || a === 'it'
      ? (u = 1006)
      : a === 'ca' && (u = 3609),
    T.useEffect(() => {
      e &&
        e[0] &&
        e[0].post_title &&
        (document.title = `${e[0].post_title} - Elliot Fernandez`)
    }, [e]),
    r)
  )
    return d.jsx('div', {
      style: { display: 'flex', justifyContent: 'center', marginTop: '25px' },
      children: d.jsx('h3', { children: 'Cargando ... ' }),
    })
  if (o)
    return d.jsxs('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25px',
      },
      children: [
        d.jsx('h3', { style: { color: 'red' }, children: o }),
        d.jsx('button', { onClick: s, children: 'Intentar de nuevo' }),
      ],
    })
  const l = { __html: e[0].post_content }
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx('h2', { children: e[0].post_title }),
      d.jsx('div', { dangerouslySetInnerHTML: l }),
    ],
  })
}
const kC = () => {
    const e = Lt()
    return (
      T.useEffect(() => {
        window.scrollTo(0, 0)
      }, [e]),
      null
    )
  },
  BC = ['en', 'ca', 'es', 'it', 'fr']
function TC() {
  const e = Lt(),
    t = Pe.language,
    r = BC.includes(t) ? t : 'en',
    [n, o] = T.useState(!1),
    i = (l) => {
      const c = document.cookie.split(';')
      for (let f = 0; f < c.length; f++) {
        const p = c[f].split('=')
        if (l === p[0].trim()) return decodeURIComponent(p[1])
      }
      return null
    },
    a = () => {
      u('cookiesAccepted', 'true', 30), o(!1), s()
    },
    s = () => {
      zi.initialize('G-0L7VP04REK', { gaOptions: { anonymizeIp: !0 } })
    },
    u = (l, c, f) => {
      const p = new Date()
      p.setTime(p.getTime() + f * 24 * 60 * 60 * 1e3),
        (document.cookie = `${l}=${c};expires=${p.toUTCString()};path=/`)
    }
  return (
    T.useEffect(() => {
      const l = i('cookiesAccepted')
      l === 'true' ? (s(), o(!1)) : o(l !== 'false')
    }, [e.pathname]),
    T.useEffect(() => {
      i('cookiesAccepted') === 'true' &&
        zi.send({ hitType: 'pageview', page: e.pathname })
    }, [e.pathname]),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(Ux, {}),
        n && d.jsx(fC, { onHide: a }),
        d.jsxs('div', {
          className: 'main-container',
          children: [
            d.jsx(kC, {}),
            d.jsxs(Hm, {
              children: [
                d.jsx(ee, {
                  path: '/',
                  element: d.jsx(mt, { to: `/${r}/homepage` }),
                }),
                d.jsx(ee, {
                  path: '/en',
                  element: d.jsx(mt, { to: '/en/homepage' }),
                }),
                d.jsx(ee, {
                  path: '/ca',
                  element: d.jsx(mt, { to: '/ca/homepage' }),
                }),
                d.jsx(ee, {
                  path: '/es',
                  element: d.jsx(mt, { to: '/es/homepage' }),
                }),
                d.jsx(ee, {
                  path: '/it',
                  element: d.jsx(mt, { to: '/it/homepage' }),
                }),
                d.jsx(ee, {
                  path: '/fr',
                  element: d.jsx(mt, { to: '/fr/homepage' }),
                }),
                d.jsx(ee, {
                  path: '/homepage',
                  element: d.jsx(mt, { to: '/en/homepage' }),
                }),
                d.jsx(ee, { path: '/:lang/homepage', element: d.jsx(Yx, {}) }),
                d.jsx(ee, {
                  path: '/:lang/course/:nameCourse/',
                  element: d.jsx(Sx, {}),
                }),
                d.jsx(ee, {
                  path: '/:lang/article/:nameArticle',
                  element: d.jsx(bx, {}),
                }),
                d.jsx(ee, {
                  path: '/:lang/history-archives',
                  element: d.jsx(Ex, {}),
                }),
                d.jsx(ee, {
                  path: '/:lang/about-author',
                  element: d.jsx(Hx, {}),
                }),
                d.jsx(ee, {
                  path: '/:lang/privacy-policy',
                  element: d.jsx(Vx, {}),
                }),
                d.jsx(ee, { path: '/:lang/contact', element: d.jsx(rC, {}) }),
                d.jsx(ee, { path: '/:lang/links', element: d.jsx(iC, {}) }),
                d.jsx(ee, {
                  path: '/about-author',
                  element: d.jsx(mt, { to: '/en/about-author' }),
                }),
                d.jsx(ee, {
                  path: '/privacy-policy',
                  element: d.jsx(mt, { to: '/en/privacy-policy' }),
                }),
                d.jsx(ee, {
                  path: '/contact',
                  element: d.jsx(mt, { to: '/en/contact' }),
                }),
                d.jsx(ee, { path: '/:lang/books', element: d.jsx(Zx, {}) }),
                d.jsx(ee, {
                  path: '/:lang/books/:slug',
                  element: d.jsx(xC, {}),
                }),
                d.jsx(ee, { path: '/:lang/authors', element: d.jsx(pC, {}) }),
                d.jsx(ee, {
                  path: '/:lang/authors/:slug',
                  element: d.jsx(EC, {}),
                }),
                d.jsx(ee, {
                  path: '/blog',
                  element: d.jsx(mt, { to: '/en/blog' }),
                }),
                d.jsx(ee, { path: '/:lang/blog', element: d.jsx(nC, {}) }),
                d.jsx(ee, {
                  path: '/blog/:blogArticle',
                  element: d.jsx(oC, {}),
                }),
                d.jsx(ee, {
                  path: '/:lang/search-results',
                  element: d.jsx(Xx, {}),
                }),
                d.jsx(ee, {
                  path: '/:lang/commitment-responsibility',
                  element: d.jsx(SC, {}),
                }),
                d.jsx(ee, { path: '/error', element: d.jsx(eC, {}) }),
                d.jsx(ee, { path: '*', element: d.jsx(tC, {}) }),
              ],
            }),
          ],
        }),
        d.jsx(zx, {}),
      ],
    })
  )
}
kp(document.getElementById('root')).render(
  d.jsx(Jm, { children: d.jsx(T.StrictMode, { children: d.jsx(TC, {}) }) })
)
