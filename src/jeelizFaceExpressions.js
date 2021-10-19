/**
 * Jeeliz Weboji - https://github.com/jeeliz/jeelizWeboji
 *
 /* eslint-enable */
/* prettier-ignore */
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(b,d,g){if(b==Array.prototype||b==Object.prototype)return b;b[d]=g.value;return b};
function fa(b) {
  b = [
    'object' == typeof globalThis && globalThis,
    b,
    'object' == typeof window && window,
    'object' == typeof self && self,
    'object' == typeof global && global,
  ]
  for (var d = 0; d < b.length; ++d) {
    var g = b[d]
    if (g && g.Math == Math) return g
  }
  throw Error('Cannot find global object')
}
var pa = fa(this)
function qa(b, d) {
  if (d)
    a: {
      var g = pa
      b = b.split('.')
      for (var h = 0; h < b.length - 1; h++) {
        var t = b[h]
        if (!(t in g)) break a
        g = g[t]
      }
      b = b[b.length - 1]
      h = g[b]
      d = d(h)
      d != h &&
        null != d &&
        da(g, b, { configurable: !0, writable: !0, value: d })
    }
}
function sa(b) {
  var d = 0
  return function () {
    return d < b.length ? { done: !1, value: b[d++] } : { done: !0 }
  }
}
function ua(b) {
  var d = 'undefined' != typeof Symbol && Symbol.iterator && b[Symbol.iterator]
  return d ? d.call(b) : { next: sa(b) }
}
function wa() {
  this.L = !1
  this.o = null
  this.Ba = void 0
  this.a = 1
  this.Aa = 0
  this.H = null
}
function Da(b) {
  if (b.L) throw new TypeError('Generator is already running')
  b.L = !0
}
wa.prototype.U = function (b) {
  this.Ba = b
}
function Fa(b, d) {
  b.H = { oe: d, Me: !0 }
  b.a = b.Aa
}
wa.prototype.return = function (b) {
  this.H = { return: b }
  this.a = this.Aa
}
function Ga(b) {
  this.a = new wa()
  this.o = b
}
function Ha(b, d) {
  Da(b.a)
  var g = b.a.o
  if (g)
    return La(
      b,
      'return' in g
        ? g['return']
        : function (h) {
            return { value: h, done: !0 }
          },
      d,
      b.a.return
    )
  b.a.return(d)
  return Ma(b)
}
function La(b, d, g, h) {
  try {
    var t = d.call(b.a.o, g)
    if (!(t instanceof Object))
      throw new TypeError('Iterator result ' + t + ' is not an object')
    if (!t.done) return (b.a.L = !1), t
    var r = t.value
  } catch (n) {
    return (b.a.o = null), Fa(b.a, n), Ma(b)
  }
  b.a.o = null
  h.call(b.a, r)
  return Ma(b)
}
function Ma(b) {
  for (; b.a.a; )
    try {
      var d = b.o(b.a)
      if (d) return (b.a.L = !1), { value: d.value, done: !1 }
    } catch (g) {
      ;(b.a.Ba = void 0), Fa(b.a, g)
    }
  b.a.L = !1
  if (b.a.H) {
    d = b.a.H
    b.a.H = null
    if (d.Me) throw d.oe
    return { value: d.return, done: !0 }
  }
  return { value: void 0, done: !0 }
}
function Qa(b) {
  this.next = function (d) {
    Da(b.a)
    b.a.o ? (d = La(b, b.a.o.next, d, b.a.U)) : (b.a.U(d), (d = Ma(b)))
    return d
  }
  this.throw = function (d) {
    Da(b.a)
    b.a.o ? (d = La(b, b.a.o['throw'], d, b.a.U)) : (Fa(b.a, d), (d = Ma(b)))
    return d
  }
  this.return = function (d) {
    return Ha(b, d)
  }
  this[Symbol.iterator] = function () {
    return this
  }
}
function Ra(b) {
  function d(h) {
    return b.next(h)
  }
  function g(h) {
    return b.throw(h)
  }
  return new Promise(function (h, t) {
    function r(n) {
      n.done ? h(n.value) : Promise.resolve(n.value).then(d, g).then(r, t)
    }
    r(b.next())
  })
}
qa('Symbol', function (b) {
  function d(t) {
    if (this instanceof d) throw new TypeError('Symbol is not a constructor')
    return new g('jscomp_symbol_' + (t || '') + '_' + h++, t)
  }
  function g(t, r) {
    this.a = t
    da(this, 'description', { configurable: !0, writable: !0, value: r })
  }
  if (b) return b
  g.prototype.toString = function () {
    return this.a
  }
  var h = 0
  return d
})
qa('Symbol.iterator', function (b) {
  if (b) return b
  b = Symbol('Symbol.iterator')
  for (
    var d =
        'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
          ' '
        ),
      g = 0;
    g < d.length;
    g++
  ) {
    var h = pa[d[g]]
    'function' === typeof h &&
      'function' != typeof h.prototype[b] &&
      da(h.prototype, b, {
        configurable: !0,
        writable: !0,
        value: function () {
          return Sa(sa(this))
        },
      })
  }
  return b
})
function Sa(b) {
  b = { next: b }
  b[Symbol.iterator] = function () {
    return this
  }
  return b
}
qa('Promise', function (b) {
  function d(n) {
    this.o = 0
    this.U = void 0
    this.a = []
    var k = this.H()
    try {
      n(k.resolve, k.reject)
    } catch (m) {
      k.reject(m)
    }
  }
  function g() {
    this.a = null
  }
  function h(n) {
    return n instanceof d
      ? n
      : new d(function (k) {
          k(n)
        })
  }
  if (b) return b
  g.prototype.o = function (n) {
    if (null == this.a) {
      this.a = []
      var k = this
      this.H(function () {
        k.U()
      })
    }
    this.a.push(n)
  }
  var t = pa.setTimeout
  g.prototype.H = function (n) {
    t(n, 0)
  }
  g.prototype.U = function () {
    for (; this.a && this.a.length; ) {
      var n = this.a
      this.a = []
      for (var k = 0; k < n.length; ++k) {
        var m = n[k]
        n[k] = null
        try {
          m()
        } catch (p) {
          this.L(p)
        }
      }
    }
    this.a = null
  }
  g.prototype.L = function (n) {
    this.H(function () {
      throw n
    })
  }
  d.prototype.H = function () {
    function n(p) {
      return function (B) {
        m || ((m = !0), p.call(k, B))
      }
    }
    var k = this,
      m = !1
    return { resolve: n(this.Ue), reject: n(this.L) }
  }
  d.prototype.Ue = function (n) {
    if (n === this) this.L(new TypeError('A Promise cannot resolve to itself'))
    else if (n instanceof d) this.$e(n)
    else {
      a: switch (typeof n) {
        case 'object':
          var k = null != n
          break a
        case 'function':
          k = !0
          break a
        default:
          k = !1
      }
      k ? this.Te(n) : this.Aa(n)
    }
  }
  d.prototype.Te = function (n) {
    var k = void 0
    try {
      k = n.then
    } catch (m) {
      this.L(m)
      return
    }
    'function' == typeof k ? this.qf(k, n) : this.Aa(n)
  }
  d.prototype.L = function (n) {
    this.Ba(2, n)
  }
  d.prototype.Aa = function (n) {
    this.Ba(1, n)
  }
  d.prototype.Ba = function (n, k) {
    if (0 != this.o)
      throw Error(
        'Cannot settle(' +
          n +
          ', ' +
          k +
          '): Promise already settled in state' +
          this.o
      )
    this.o = n
    this.U = k
    this.Se()
  }
  d.prototype.Se = function () {
    if (null != this.a) {
      for (var n = 0; n < this.a.length; ++n) r.o(this.a[n])
      this.a = null
    }
  }
  var r = new g()
  d.prototype.$e = function (n) {
    var k = this.H()
    n.Ja(k.resolve, k.reject)
  }
  d.prototype.qf = function (n, k) {
    var m = this.H()
    try {
      n.call(k, m.resolve, m.reject)
    } catch (p) {
      m.reject(p)
    }
  }
  d.prototype.then = function (n, k) {
    function m(q, u) {
      return 'function' == typeof q
        ? function (D) {
            try {
              p(q(D))
            } catch (x) {
              B(x)
            }
          }
        : u
    }
    var p,
      B,
      F = new d(function (q, u) {
        p = q
        B = u
      })
    this.Ja(m(n, p), m(k, B))
    return F
  }
  d.prototype.catch = function (n) {
    return this.then(void 0, n)
  }
  d.prototype.Ja = function (n, k) {
    function m() {
      switch (p.o) {
        case 1:
          n(p.U)
          break
        case 2:
          k(p.U)
          break
        default:
          throw Error('Unexpected state: ' + p.o)
      }
    }
    var p = this
    null == this.a ? r.o(m) : this.a.push(m)
  }
  d.resolve = h
  d.reject = function (n) {
    return new d(function (k, m) {
      m(n)
    })
  }
  d.race = function (n) {
    return new d(function (k, m) {
      for (var p = ua(n), B = p.next(); !B.done; B = p.next())
        h(B.value).Ja(k, m)
    })
  }
  d.all = function (n) {
    var k = ua(n),
      m = k.next()
    return m.done
      ? h([])
      : new d(function (p, B) {
          function F(D) {
            return function (x) {
              q[D] = x
              u--
              0 == u && p(q)
            }
          }
          var q = [],
            u = 0
          do
            q.push(void 0),
              u++,
              h(m.value).Ja(F(q.length - 1), B),
              (m = k.next())
          while (!m.done)
        })
  }
  return d
})
qa('Math.log2', function (b) {
  return b
    ? b
    : function (d) {
        return Math.log(d) / Math.LN2
      }
})
var Ta =
  'function' == typeof Object.assign
    ? Object.assign
    : function (b, d) {
        for (var g = 1; g < arguments.length; g++) {
          var h = arguments[g]
          if (h)
            for (var t in h)
              Object.prototype.hasOwnProperty.call(h, t) && (b[t] = h[t])
        }
        return b
      }
qa('Object.assign', function (b) {
  return b || Ta
})
function Ua(b) {
  var d = new XMLHttpRequest()
  d.open('GET', c.rc + c.neuralNetworkPath, !0)
  d.withCredentials = !1
  d.onreadystatechange = function () {
    4 !== d.readyState ||
      (200 !== d.status && 0 !== d.status) ||
      b(d.responseText)
  }
  d.send()
}
function Va(b, d) {
  if (0 === d || 'object' !== typeof b) return b
  b = Object.assign({}, b)
  d = void 0 === d || -1 === d ? -1 : d - 1
  for (var g in b) b[g] = Va(b[g], d)
  return b
}
function Wa(b, d, g) {
  return Math.min(Math.max((g - b) / (d - b), 0), 1)
}
function Xa(b) {
  switch (b) {
    case 'relu':
      return 'gl_FragColor=max(vec4(0.,0.,0.,0.),gl_FragColor);'
    case 'elu':
      return 'gl_FragColor=mix(exp(-abs(gl_FragColor))-vec4(1.,1.,1.,1.),gl_FragColor,step(0.,gl_FragColor));'
    case 'elu01':
      return 'gl_FragColor=mix(0.1*exp(-abs(gl_FragColor))-vec4(0.1,0.1,0.1,0.1),gl_FragColor,step(0.,gl_FragColor));'
    case 'arctan':
      return 'gl_FragColor=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;'
    case 'copy':
      return ''
    default:
      return !1
  }
}
function Ya(b, d) {
  var g = d % 8
  return (b[(d - g) / 8] >> (7 - g)) & 1
}
function $a(b) {
  var d = JSON.parse(b)
  b = d.ne
  var g = d.nf,
    h = d.n,
    t = null
  'undefined' === typeof btoa
    ? (t = Buffer.from(d.data, 'base64').toString('latin1'))
    : (t = atob(d.data))
  var r = t.length
  d = new Uint8Array(r)
  for (var n = 0; n < r; ++n) d[n] = t.charCodeAt(n)
  t = new Float32Array(h)
  r = new Float32Array(g)
  n = b + g + 1
  for (var k = 0; k < h; ++k) {
    for (
      var m = n * k,
        p = 0 === Ya(d, m) ? 1 : -1,
        B = m + 1,
        F = 1,
        q = 0,
        u = B + b - 1;
      u >= B;
      --u
    )
      (q += F * Ya(d, u)), (F *= 2)
    B = q
    m = m + 1 + b
    F = r.length
    q = 0
    for (u = m; u < m + F; ++u) (r[q] = Ya(d, u)), ++q
    for (F = m = 0; F < g; ++F) m += r[F] * Math.pow(2, -F - 1)
    t[k] =
      0 === m && 0 === B
        ? 0
        : p * (1 + m) * Math.pow(2, 1 + B - Math.pow(2, b - 1))
  }
  return t
}
var J = (function () {
    function b(w, f, A) {
      f = w.createShader(f)
      w.shaderSource(f, A)
      w.compileShader(f)
      return w.getShaderParameter(f, w.COMPILE_STATUS) ? f : !1
    }
    function d(w, f, A) {
      f = b(w, w.VERTEX_SHADER, f)
      A = b(w, w.FRAGMENT_SHADER, A)
      w === H && k.push(f, A)
      var L = w.createProgram()
      w.attachShader(L, f)
      w.attachShader(L, A)
      w.linkProgram(L)
      return L
    }
    function g(w) {
      return ['float', 'sampler2D', 'int']
        .map(function (f) {
          return 'precision ' + w + ' ' + f + ';\n'
        })
        .join('')
    }
    function h(w, f) {
      f.s = f.s ? !0 : !1
      if (!f.s) {
        f.ua =
          f.ua ||
          'precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}'
        f.Ha = f.Ha || ['a0']
        f.xa = f.xa || [2]
        f.precision = f.precision || q
        f.id = B++
        void 0 !== f.zd &&
          (f.zd.forEach(function (l, C) {
            f.c = f.c.replace(l, f.hb[C])
          }),
          f.zd.splice(0))
        f.mc = 0
        f.xa.forEach(function (l) {
          f.mc += 4 * l
        })
        var A = g(f.precision)
        f.ka = d(w, A + f.ua, A + f.c)
        f.m = {}
        f.f.forEach(function (l) {
          f.m[l] = w.getUniformLocation(f.ka, l)
        })
        f.attributes = {}
        f.ya = []
        f.Ha.forEach(function (l) {
          var C = w.getAttribLocation(f.ka, l)
          f.attributes[l] = C
          f.ya.push(C)
        })
        if (f.g) {
          w.useProgram(f.ka)
          p = f
          m = f.id
          for (var L in f.g) w.uniform1i(f.m[L], f.g[L])
        }
        f.ja = !0
      }
    }
    function t(w) {
      ab.zf(Q)
      m !== w.id &&
        (Q.O(),
        (m = w.id),
        (p = w),
        H.useProgram(w.ka),
        w.ya.forEach(function (f) {
          0 !== f && H.enableVertexAttribArray(f)
        }))
    }
    function r(w, f, A) {
      h(w, f, A)
      w.useProgram(f.ka)
      w.enableVertexAttribArray(0)
      m = -1
      return (p = f)
    }
    function n() {
      return {
        c: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
        f: ['u1'],
        g: { u1: 0 },
      }
    }
    var k = [],
      m = -1,
      p = null,
      B = 0,
      F = !1,
      q = 'highp',
      u = ['u1'],
      D = ['u0'],
      x = { u1: 0 },
      e = { u0: 0 },
      G = { u1: 0, u2: 1 },
      N = { u3: 0 },
      K = {
        s0: n(),
        s1: {
          c: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
          f: u,
          g: x,
          precision: 'lowp',
        },
        s2: {
          c: 'uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}',
          f: ['u1', 'u2'],
          g: G,
        },
        s3: {
          c: 'uniform sampler2D u1;uniform vec2 u4,u5;varying vec2 vv0;void main(){vec2 a=vv0*u4+u5;gl_FragColor=texture2D(u1,a);}',
          f: ['u1', 'u4', 'u5'],
          g: x,
          s: !0,
        },
        s4: {
          c: 'uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}',
          f: u,
          g: x,
        },
        s5: {
          c: 'uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}',
          f: ['u1', 'u2'],
          g: G,
        },
        s6: {
          c: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}',
          f: u,
          g: x,
        },
        s7: {
          c: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}',
          f: u,
          g: x,
        },
        s8: {
          c: 'uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}',
          f: ['u0', 'u4'],
          g: e,
        },
        s9: {
          c: 'uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}',
          f: ['u0', 'u4'],
          g: e,
        },
        s10: {
          c: 'uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}',
          f: u,
          g: x,
        },
        s11: {
          c: 'uniform sampler2D u1,u6;uniform float u7;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);gl_FragColor=mix(b,a,u7*f);}',
          f: ['u1', 'u6', 'u7'],
          g: { u1: 0, u6: 1 },
        },
        s12: {
          c: 'uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u8)+texture2D(u1,vv0+u8*vec2(1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,1.)));}',
          f: ['u1', 'u8'],
          g: x,
        },
        s13: {
          c: 'uniform sampler2D u1;uniform vec4 u9;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u9);gl_FragColor=j(a);}',
          f: ['u1', 'u9'],
          g: x,
        },
        s14: {
          c: 'uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}',
          f: D,
          g: e,
          s: !0,
        },
        s15: {
          c: 'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}',
          f: D,
          g: e,
        },
        s16: {
          c: 'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}',
          f: D,
          g: e,
        },
        s17: {
          c: 'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}',
          f: D,
          g: e,
        },
        s18: {
          c: 'uniform sampler2D u0,u7,u10;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u7,vv0),d=texture2D(u10,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}',
          f: ['u0', 'u7', 'u10'],
          g: { u0: 0, u7: 1, u10: 2 },
          s: !0,
        },
        s19: {
          c: 'uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}',
          f: D,
          g: e,
        },
        s20: {
          c: 'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}',
          f: D,
          g: e,
          s: !0,
        },
        s21: {
          c: 'uniform sampler2D u0,u11;uniform float u12;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u11,e);float b=u12*u12;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}',
          f: ['u0', 'u11', 'u12'],
          g: { u0: 0, u11: 1 },
          s: !0,
        },
        s22: {
          c: 'uniform sampler2D u1;uniform vec2 u13;varying vec2 vv0;void main(){float a=u13.x*u13.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u13.y),f=floor(u13.x*fract(b*u13.y)),g=(f*u13.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}',
          f: ['u1', 'u13'],
          g: x,
        },
        s23: {
          c: 'uniform sampler2D u14,u15,u16;varying vec2 vv0;void main(){vec4 a=texture2D(u16,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u14,b),f=texture2D(u15,c);gl_FragColor=d*f;}',
          f: ['u14', 'u15', 'u16'],
          g: { u15: 0, u14: 1, u16: 2 },
          s: !0,
        },
        s24: {
          c: 'uniform float u17;uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec2 a=fract(vv0*u17);vec4 b=texture2D(u14,vv0),c=texture2D(u15,a);gl_FragColor=b*c;}',
          f: ['u15', 'u14', 'u17'],
          g: { u15: 0, u14: 1 },
        },
        s25: {
          c: 'uniform float u17;uniform sampler2D u14,u15,u18,u19,u20,u21;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u17,l=floor(h),c=h-l;vec4 m=texture2D(u14,vv0),d=texture2D(u15,c),a=texture2D(u21,vv0);a=a*255.;vec4 n=texture2D(u18,c),o=texture2D(u19,c),p=texture2D(u20,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}',
          f: 'u14 u15 u17 u21 u18 u19 u20'.split(' '),
          g: { u15: 0, u14: 1, u21: 3, u18: 4, u19: 5, u20: 6 },
          s: !0,
        },
        s26: {
          c: 'uniform sampler2D u14,u15,u22;uniform float u17,u23,u24,u25;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u23*vv0),b=u23*vv0-a;float c=u17/u23;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u23;float k=u23*u25/u17;vec2 l=k*d,h=(l+f*u24)/u25,i=step(h,j);vec4 m=texture2D(u14,g),n=texture2D(u15,h),o=m*n*i.x*i.y,p=texture2D(u22,g);gl_FragColor=o*u24*u24+p;}',
          f: 'u14 u15 u17 u23 u24 u25 u22'.split(' '),
          g: { u15: 0, u14: 1, u22: 2 },
        },
        s27: {
          c: 'uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u14,vv0),b=texture2D(u15,vv0);gl_FragColor=a*b;}',
          f: ['u14', 'u15'],
          g: { u15: 0, u14: 1 },
          s: !0,
        },
        s28: {
          c: 'uniform sampler2D u1,u22;uniform float u26;varying vec2 vv0;void main(){gl_FragColor=texture2D(u22,vv0)+u26*texture2D(u1,vv0);}',
          f: ['u1', 'u22', 'u26'],
          g: { u1: 0, u22: 1 },
        },
        s29: {
          c: 'varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}',
          f: u,
          g: x,
          precision: 'lowp',
        },
        s30: {
          c: 'varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}',
          f: ['u1', 'u27'],
          g: x,
          precision: 'lowp',
        },
        s31: {
          c: 'varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}',
          f: ['u1', 'u27'],
          g: x,
          precision: 'lowp',
        },
        s32: {
          c: 'varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u28))*2.,b-=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,b+=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u28))*2.,b+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}',
          f: ['u1', 'u2', 'u28'],
          g: G,
          s: !0,
        },
        s33: {
          c: 'varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u28,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}',
          f: ['u1', 'u2', 'u28'],
          g: G,
          s: !0,
        },
        s34: {
          c: 'uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u8*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*h),d=texture2D(u3,a+u8*i),j=texture2D(u3,a+u8),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}',
          f: ['u3', 'u8'],
          g: N,
        },
        s35: {
          c: 'uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*k),d=texture2D(u3,a+u8*l),g=texture2D(u3,a+u8),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u8*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u8*m),d=f(a+u8*2.),g=f(a+u8*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}',
          f: ['u3', 'u8'],
          g: N,
          s: !0,
        },
        s36: {
          c: 'uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}',
          f: ['u1'],
          g: x,
          precision: 'lowp',
          s: !0,
        },
        s37: {
          c: 'uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u8)+2002./e*texture2D(u1,vv0-2.*u8)+3003./e*texture2D(u1,vv0-u8)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u8)+2002./e*texture2D(u1,vv0+2.*u8)+1001./e*texture2D(u1,vv0+3.*u8);gl_FragColor=a;}',
          f: ['u8', 'u1'],
          g: x,
          precision: 'lowp',
          s: !0,
        },
        s38: {
          c: 'uniform sampler2D u1,u11,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u11,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}',
          f: ['u1', 'u11', 'u29'],
          g: { u1: 0, u11: 1, u29: 2 },
          s: !0,
        },
      },
      S = {
        s39: {
          c: 'uniform float u17,u30;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u22,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u17,xyTo=floor(vv0*u17+eps2);float weightSize=toSparsity*u17;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u17,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}',
          f: ['u17', 'u14', 'u15', 'u22', 'u30'],
          hb: ['1.1111', 'gl_FragColor\\*=2.2222;'],
        },
        s40: {
          c: 'uniform float u17,u30,u25;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u22,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u25,xyTo=floor(vv0*u17+eps2);float weightSize=fromSparsity*u25;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u17;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u25,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}',
          f: 'u17 u25 u14 u15 u22 u30'.split(' '),
          hb: ['1.1111', 'gl_FragColor\\*=2.2222;', '3.3333'],
        },
      },
      v = null,
      P = null,
      Q = {
        $a: function () {
          return F
        },
        j: function () {
          if (!F) {
            v = Va(K, 2)
            P = Va(S, 2)
            q = 'highp'
            H.getShaderPrecisionFormat &&
              (H.getShaderPrecisionFormat(H.FRAGMENT_SHADER, H.MEDIUM_FLOAT),
              H.getShaderPrecisionFormat(H.FRAGMENT_SHADER, H.LOW_FLOAT))
            for (var w in v) h(H, v[w], w)
            J.set('s0')
            H.enableVertexAttribArray(0)
            F = !0
          }
        },
        uc: function (w) {
          w.forEach(function (f) {
            Q.tc(f)
          })
        },
        tc: function (w) {
          v[w.id] = w
          h(H, w, w.id)
        },
        Sc: function (w, f, A) {
          f || (f = w)
          v[f] = Object.create(P[w])
          v[f].Oe = !0
          P[w].hb &&
            P[w].hb.forEach(function (L, l) {
              v[f].c = v[f].c.replace(new RegExp(L, 'g'), A[l])
            })
          h(H, v[f], f)
        },
        set: function (w) {
          var f = v[w]
          f.s && ((f.s = !1), h(H, f, w))
          t(f)
        },
        Da: function (w) {
          return r(w, n(), 's41')
        },
        bc: function (w) {
          return r(
            w,
            {
              c: 'void main(){gl_FragColor=vec4(.5,.5,.5,.5);}',
              f: [],
              precision: q,
            },
            's42'
          )
        },
        pe: function (w) {
          return 'undefined' === typeof v[w] ? !1 : v[w].ja
        },
        O: function () {
          ;-1 !== m &&
            ((m = -1),
            p.ya.forEach(function (w) {
              0 !== w && H.disableVertexAttribArray(w)
            }))
        },
        cc: function () {
          var w = 0
          p.ya.forEach(function (f, A) {
            A = p.xa[A]
            H.vertexAttribPointer(f, A, H.FLOAT, !1, p.mc, w)
            w += 4 * A
          })
        },
        $f: function () {
          H.enableVertexAttribArray(0)
        },
        ib: function () {
          Q.jb(H)
        },
        jb: function (w) {
          w.vertexAttribPointer(p.ya[0], 2, w.FLOAT, !1, 8, 0)
        },
        Gg: function (w, f) {
          H.uniform1i(p.m[w], f)
        },
        D: function (w, f) {
          H.uniform1f(p.m[w], f)
        },
        la: function (w, f, A) {
          H.uniform2f(p.m[w], f, A)
        },
        Hg: function (w, f) {
          H.uniform2fv(p.m[w], f)
        },
        Af: function (w, f) {
          H.uniform3fv(p.m[w], f)
        },
        Ig: function (w, f, A, L) {
          H.uniform3f(p.m[w], f, A, L)
        },
        Bf: function (w, f, A, L, l) {
          H.uniform4f(p.m[w], f, A, L, l)
        },
        Cd: function (w, f) {
          H.uniform4fv(p.m[w], f)
        },
        Jg: function (w, f) {
          H.uniformMatrix2fv(p.m[w], !1, f)
        },
        Kg: function (w, f) {
          H.uniformMatrix3fv(p.m[w], !1, f)
        },
        Lg: function (w, f) {
          H.uniformMatrix4fv(p.m[w], !1, f)
        },
        F: function (w, f) {
          Q.set(w)
          f.forEach(function (A) {
            switch (A.type) {
              case '4f':
                H.uniform4fv(p.m[A.name], A.value)
                break
              case '3f':
                H.uniform3fv(p.m[A.name], A.value)
                break
              case '2f':
                H.uniform2fv(p.m[A.name], A.value)
                break
              case '1f':
                H.uniform1f(p.m[A.name], A.value)
                break
              case '1i':
                H.uniform1i(p.m[A.name], A.value)
                break
              case 'mat2':
                H.uniformMatrix2fv(p.m[A.name], !1, A.value)
                break
              case 'mat3':
                H.uniformMatrix3fv(p.m[A.name], !1, A.value)
                break
              case 'mat4':
                H.uniformMatrix4fv(p.m[A.name], !1, A.value)
            }
          })
        },
        lg: function () {
          return 'lowp'
        },
        i: function () {
          H.disableVertexAttribArray(0)
          Q.O()
          for (var w in v) {
            var f = v[w]
            f.ja && ((f.ja = !1), H.deleteProgram(f.ka))
            f.Oe && delete v[w]
          }
          k.forEach(function (A) {
            H.deleteShader(A)
          })
          k.splice(0)
          B = 0
          F = !1
          p = null
          m = -1
        },
      }
    return Q
  })(),
  H = null,
  eb = (function () {
    function b(q) {
      console.log('ERROR in ContextFF: ', q)
      return !1
    }
    function d(q) {
      function u() {
        bb.i()
        cb.reset()
        x.getExtension('WEBGL_lose_context').loseContext()
      }
      if (
        navigator.userAgent &&
        -1 !== navigator.userAgent.indexOf('forceWebGL1')
      )
        return !1
      var D = document.createElement('canvas')
      D.setAttribute('width', 5)
      D.setAttribute('height', 5)
      var x = null
      try {
        x = D.getContext('webgl2', q)
      } catch (e) {
        return !1
      }
      if (!x) return !1
      g(x)
      cb.Cc(x)
      q = cb.xb(x)
      if (!q.ba && !q.da) return u(), !1
      q = bb.yc(x, q)
      u()
      return q ? !0 : !1
    }
    function g(q) {
      q.clearColor(0, 0, 0, 0)
      q.disable(q.DEPTH_TEST)
      q.disable(q.BLEND)
      q.disable(q.DITHER)
      q.disable(q.STENCIL_TEST)
      q.disable(q.CULL_FACE)
      q.GENERATE_MIPMAP_HINT && q.hint(q.GENERATE_MIPMAP_HINT, q.FASTEST)
      q.disable(q.SAMPLE_ALPHA_TO_COVERAGE)
      q.disable(q.SAMPLE_COVERAGE)
      q.depthFunc(q.LEQUAL)
      q.clearDepth(1)
    }
    var h = null,
      t = null,
      r = null,
      n = null,
      k = !0,
      m = null,
      p = null,
      B = [],
      F = {
        u: function () {
          return h.width
        },
        R: function () {
          return h.height
        },
        Sa: function () {
          return h
        },
        cg: function () {
          return H
        },
        fa: function () {
          return k
        },
        flush: function () {
          H.flush()
        },
        ve: function () {
          m || (m = new Uint8Array(h.width * h.height * 4))
          H.readPixels(0, 0, h.width, h.height, H.RGBA, H.UNSIGNED_BYTE, m)
          return m
        },
        fg: function () {
          return h.toDataURL('image/jpeg')
        },
        gg: function () {
          db.N()
          t ||
            ((t = document.createElement('canvas')), (r = t.getContext('2d')))
          t.width = h.width
          t.height = h.height
          for (
            var q = F.ve(),
              u = r.createImageData(t.width, t.height),
              D = t.width,
              x = t.height,
              e = u.data,
              G = 0;
            G < x;
            ++G
          )
            for (var N = x - G - 1, K = 0; K < D; ++K) {
              var S = 4 * (G * D + K),
                v = 4 * (N * D + K)
              e[S] = q[v]
              e[S + 1] = q[v + 1]
              e[S + 2] = q[v + 2]
              e[S + 3] = q[v + 3]
            }
          r.putImageData(u, 0, 0)
          return t.toDataURL('image/png')
        },
        eg: function (q) {
          !t &&
            q &&
            ((t = document.createElement('canvas')), (r = t.getContext('2d')))
          var u = q ? t : document.createElement('canvas')
          u.width = h.width
          u.height = h.height
          ;(q ? r : u.getContext('2d')).drawImage(h, 0, 0)
          return u
        },
        j: function (q) {
          q = Object.assign(
            {
              ca: null,
              Ub: null,
              Ka: null,
              Ac: null,
              width: 512,
              height: 512,
              premultipliedAlpha: !1,
              Wc: !0,
              antialias: !1,
              debug: !1,
              Xf: !1,
            },
            q
          )
          q.ca
            ? ((H = q.ca), (h = q.ca.canvas))
            : q.Ac && !q.Ka
            ? (h = document.getElementById(q.Ac))
            : q.Ka && (h = q.Ka)
          h || (h = document.createElement('canvas'))
          h.width = q.width
          h.height = q.height
          if (H) k = H instanceof WebGL2RenderingContext
          else {
            k = !0
            var u = {
              antialias: q.antialias,
              alpha: !0,
              preserveDrawingBuffer: !0,
              premultipliedAlpha: q.premultipliedAlpha,
              stencil: !1,
              depth: q.Wc,
            }
            navigator &&
              navigator.userAgent &&
              -1 !== navigator.userAgent.indexOf('noAntialiasing') &&
              (u.antialias = !1)
            var D = d(u)
            !D && u.antialias && ((u.antialias = !1), (D = d(u)))
            D && (H = h.getContext('webgl2', u))
            H
              ? (k = !0)
              : ((H = h.getContext('webgl', u)) ||
                  (H = h.getContext('experimental-webgl', u)),
                (k = !1))
          }
          if (!H) return b('WebGL1 and 2 are not enabled')
          ;(n = H.getExtension('WEBGL_lose_context')) &&
            q.Ub &&
            ((p = q.Ub), h.addEventListener('webglcontextlost', p, !1))
          if (!cb.j()) return b('Not enough GL capabilities')
          g(H)
          J.j()
          R.j()
          if (!bb.yc(H, cb.te())) return b('Cannot filter float textures')
          B.forEach(function (x) {
            x(H)
          })
          B.splice(0)
          return !0
        },
        Sf: function () {
          return new Promise(function (q) {
            H ? q(H) : B.push(q)
          })
        },
        i: function () {
          H && (cb.i(), J.i(), bb.i())
          n &&
            p &&
            (h.removeEventListener('webglcontextlost', p, !1), (n = p = null))
          H = m = r = t = h = null
          B.splice(0)
        },
      }
    return F
  })(),
  ab = (function () {
    function b() {
      null === d &&
        ('undefined' !== typeof J
          ? (d = J)
          : 'undefined' !== typeof JEShaders && (d = JEShaders))
    }
    var d = null
    return {
      reset: function () {
        d = null
      },
      zf: function (g) {
        d !== g && (d && d.O(), (d = g))
      },
      $a: function () {
        return d.$a()
      },
      ib: function () {
        return d.ib()
      },
      jb: function (g) {
        return d.jb(g)
      },
      cc: function () {
        return d.cc()
      },
      O: function () {
        return d.O()
      },
      set: function (g) {
        b()
        return d.set(g)
      },
      Da: function (g) {
        b()
        return d.Da(g)
      },
      bc: function (g) {
        b()
        return d.bc(g)
      },
    }
  })(),
  V = (function () {
    function b(l) {
      H.bindTexture(H.TEXTURE_2D, l)
    }
    function d(l) {
      w[0] = l
      l = f[0]
      var C = (l >> 16) & 32768,
        E = (l >> 12) & 2047,
        T = (l >> 23) & 255
      return 103 > T
        ? C
        : 142 < T
        ? C | 31744 | ((255 == T ? 0 : 1) && l & 8388607)
        : 113 > T
        ? ((E |= 2048), C | ((E >> (114 - T)) + ((E >> (113 - T)) & 1)))
        : (C = (C | ((T - 112) << 10) | (E >> 1)) + (E & 1))
    }
    function g(l) {
      var C = new Uint16Array(l.length)
      l.forEach(function (E, T) {
        C[T] = d(E)
      })
      return C
    }
    function h() {
      if (null !== A.Gb) return A.Gb
      var l = r(g([0.5, 0.5, 0.5, 0.5]))
      return null === l ? !0 : (A.Gb = l)
    }
    function t() {
      if (null !== A.Hb) return A.Hb
      var l = r(new Uint8Array([127, 127, 127, 127]))
      return null === l ? !0 : (A.Hb = l)
    }
    function r(l) {
      if (!ab.$a() || !x) return null
      var C = null,
        E = Math.sqrt(l.length / 4)
      try {
        var T = H.getError()
        if ('FUCKING_BIG_ERROR' === T) return !1
        C = L.instance({ isFloat: !1, I: !0, array: l, width: E })
        T = H.getError()
        if (T !== H.NO_ERROR) return !1
      } catch (la) {
        return !1
      }
      db.N()
      H.viewport(0, 0, E, E)
      H.clearColor(0, 0, 0, 0)
      H.clear(H.COLOR_BUFFER_BIT)
      ab.set('s0')
      C.wc(0)
      R.h(!0, !0)
      l = 4 * E * E
      T = new Uint8Array(l)
      H.readPixels(0, 0, E, E, H.RGBA, H.UNSIGNED_BYTE, T)
      E = !0
      for (var O = 0; O < l; ++O) E = E && 3 > Math.abs(T[O] - 127)
      C.remove()
      db.aa()
      return E
    }
    var n = 0,
      k = null,
      m = 0,
      p = null,
      B = null,
      F = null,
      q = null,
      u = null,
      D = null,
      x = !1,
      e = [],
      G = {
        isFloat: !1,
        isPot: !0,
        isLinear: !1,
        isMipmap: !1,
        isAnisotropicFiltering: !1,
        isMirrorX: !1,
        isMirrorY: !1,
        isSrgb: !1,
        isKeepArray: !1,
        isFlipY: null,
        width: 0,
        height: 0,
        url: null,
        array: null,
        data: null,
        A: null,
        Oc: null,
        Ne: !1,
        I: !1,
        ia: null,
        cb: 4,
        Pb: 0,
      },
      N = !1,
      K = null,
      S = null,
      v = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ],
      P = !1,
      Q = !1,
      w = new Float32Array(1),
      f = new Int32Array(w.buffer),
      A = { Gb: null, Hb: null },
      L = {
        j: function () {
          x ||
            ((u = [H.RGBA, null, H.RGBA, H.RGBA]),
            (D = [H.RGBA, null, H.RGBA, H.RGBA]),
            (k = [
              H.TEXTURE0,
              H.TEXTURE1,
              H.TEXTURE2,
              H.TEXTURE3,
              H.TEXTURE4,
              H.TEXTURE5,
              H.TEXTURE6,
              H.TEXTURE7,
            ]),
            (P = 'undefined' !== typeof JEContext),
            (Q = 'undefined' !== typeof cb),
            P && JEContext.Ag() && k.push(H.TEXTURE8, H.TEXTURE9),
            (p = [-1, -1, -1, -1, -1, -1, -1, -1]),
            (q = [H.UNSIGNED_BYTE, H.FLOAT, H.FLOAT]),
            (x = !0))
        },
        Ie: function () {
          if (!B) {
            for (var l = new Float32Array(16384), C = 0; 16384 > C; ++C)
              l[C] = 2 * Math.random() - 1
            B = {
              random: L.instance({
                isFloat: !0,
                isPot: !0,
                array: l,
                width: 64,
              }),
              Kd: L.instance({
                isFloat: !1,
                isPot: !0,
                width: 1,
                array: new Uint8Array([0, 0, 0, 0]),
              }),
            }
          }
          L.Lf()
        },
        rg: function () {
          return B.Kd
        },
        Lf: function () {
          q[1] = cb.Cb(H)
        },
        xf: function () {
          D = u = [H.RGBA, H.RGBA, H.RGBA, H.RGBA]
        },
        td: function (l) {
          J.set('s1')
          db.N()
          var C = l.u(),
            E = l.R()
          H.viewport(0, 0, C, E)
          l.b(0)
          R.h(!1, !1)
        },
        kf: function (l, C) {
          L.td(l)
          H.readPixels(0, 0, l.u(), l.R(), H.RGBA, H.UNSIGNED_BYTE, C)
        },
        lf: function (l, C) {
          L.td(l)
          return cb.ac(0, 0, l.u(), l.R(), C)
        },
        Jc: function (l, C, E, T, O, la, ha) {
          l.activeTexture(l.TEXTURE0)
          var oa = l.createTexture()
          l.bindTexture(l.TEXTURE_2D, oa)
          O = O instanceof Float32Array ? O : new Float32Array(O)
          l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE)
          l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)
          l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST)
          l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST)
          l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, la)
          l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, E, T, 0, l.RGBA, l.FLOAT, O)
          l.bindTexture(l.TEXTURE_2D, null)
          l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, !1)
          ha && (db.aa(), J.Da(l))
          l.viewport(0, 0, E, T)
          l.framebufferTexture2D(
            l.FRAMEBUFFER,
            l.COLOR_ATTACHMENT0,
            l.TEXTURE_2D,
            C,
            0
          )
          l.bindTexture(l.TEXTURE_2D, oa)
          ha ? R.h(!0, !0) : R.Pa(l)
          l.deleteTexture(oa)
          x && ((p[0] = -1), (F = null), (n = 0))
        },
        tb: function (l) {
          l !== n && (H.activeTexture(k[l]), (n = l))
        },
        instance: function (l) {
          var C
          function E() {
            W = void 0 !== y.A.videoWidth ? y.A.videoWidth : y.A.width
            Y = void 0 !== y.A.videoHeight ? y.A.videoHeight : y.A.height
          }
          function T(I) {
            var X = H.getError()
            if ('FUCKING_BIG_ERROR' === X) return !1
            H.texImage2D(H.TEXTURE_2D, 0, ma, ia, ja, I)
            X = H.getError()
            X !== H.NO_ERROR &&
              ia !== H.RGBA &&
              ((ia = H.RGBA), H.texImage2D(H.TEXTURE_2D, 0, ma, ia, ja, I))
            return !0
          }
          function O() {
            if (!fb) {
              b(ka)
              va && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, va)
              y.isPot
                ? (H.texParameteri(
                    H.TEXTURE_2D,
                    H.TEXTURE_WRAP_S,
                    y.isMirrorX ? H.MIRRORED_REPEAT : H.REPEAT
                  ),
                  H.texParameteri(
                    H.TEXTURE_2D,
                    H.TEXTURE_WRAP_T,
                    y.isMirrorY ? H.MIRRORED_REPEAT : H.REPEAT
                  ))
                : (H.texParameteri(
                    H.TEXTURE_2D,
                    H.TEXTURE_WRAP_S,
                    H.CLAMP_TO_EDGE
                  ),
                  H.texParameteri(
                    H.TEXTURE_2D,
                    H.TEXTURE_WRAP_T,
                    H.CLAMP_TO_EDGE
                  ))
              y.isAnisotropicFiltering &&
                'undefined' !== typeof JESETTINGS &&
                H.texParameterf(
                  H.TEXTURE_2D,
                  JEContext.ig().TEXTURE_MAX_ANISOTROPY_EXT,
                  JESETTINGS.Of
                )
              H.texParameteri(
                H.TEXTURE_2D,
                H.TEXTURE_MAG_FILTER,
                y.isLinear ? H.LINEAR : H.NEAREST
              )
              y.isLinear
                ? H.texParameteri(
                    H.TEXTURE_2D,
                    H.TEXTURE_MIN_FILTER,
                    y.isMipmap && !Aa ? H.NEAREST_MIPMAP_LINEAR : H.LINEAR
                  )
                : H.texParameteri(
                    H.TEXTURE_2D,
                    H.TEXTURE_MIN_FILTER,
                    y.isMipmap && !Aa ? H.NEAREST_MIPMAP_NEAREST : H.NEAREST
                  )
              ia = u[y.cb - 1]
              ma = D[y.cb - 1]
              ja = q[Ba]
              if (cb.fa()) {
                var I = cb.we()
                ia === H.RGBA && ja === H.FLOAT
                  ? y.isMipmap || y.isLinear
                    ? (ma = bb.ye(H))
                    : cb.zc()
                    ? I && (ma = I)
                    : (ma = H.RGBA16F || H.RGBA)
                  : ia === H.RGB &&
                    ja === H.FLOAT &&
                    I &&
                    ((ma = I), (ia = H.RGBA))
              }
              if ((y.I && !y.isFloat) || (y.isFloat && y.isMipmap && bb.Re()))
                (ma = cb.xe()), (ja = cb.Cb(H))
              y.Pb && (Na = y.Pb)
              y.isSrgb && 4 === y.cb && (ia = JEContext.pg())
              if (y.A) T(y.A)
              else if (y.url) T(ya)
              else if (ra) {
                I = ra
                try {
                  'FUCKING_BIG_ERROR' !== H.getError() &&
                    (H.texImage2D(H.TEXTURE_2D, 0, ma, W, Y, 0, ia, ja, I),
                    H.getError() !== H.NO_ERROR &&
                      (H.texImage2D(H.TEXTURE_2D, 0, ma, W, Y, 0, ia, ja, null),
                      H.getError() !== H.NO_ERROR &&
                        H.texImage2D(
                          H.TEXTURE_2D,
                          0,
                          H.RGBA,
                          W,
                          Y,
                          0,
                          H.RGBA,
                          H.UNSIGNED_BYTE,
                          null
                        )))
                } catch (Tb) {
                  H.texImage2D(H.TEXTURE_2D, 0, ma, W, Y, 0, ia, ja, null)
                }
                y.isKeepArray || (ra = null)
              } else
                (I = H.getError()),
                  'FUCKING_BIG_ERROR' !== I &&
                    (H.texImage2D(H.TEXTURE_2D, 0, ma, W, Y, 0, ia, ja, null),
                    (I = H.getError()),
                    I !== H.NO_ERROR &&
                      ((ia = H.RGBA),
                      y.I &&
                        ja !== H.FLOAT &&
                        ((ja = H.FLOAT),
                        H.texImage2D(
                          H.TEXTURE_2D,
                          0,
                          ma,
                          W,
                          Y,
                          0,
                          ia,
                          ja,
                          null
                        ))))
              if (y.isMipmap)
                if (!Aa && ea) ea.Ab(), (Oa = !0)
                else if (Aa) {
                  I = Math.log2(Math.min(W, Y))
                  Ea = Array(1 + I)
                  Ea[0] = ka
                  for (var X = 1; X <= I; ++X) {
                    var na = Math.pow(2, X),
                      aa = W / na
                    na = Y / na
                    var Ca = H.createTexture()
                    b(Ca)
                    H.texParameteri(
                      H.TEXTURE_2D,
                      H.TEXTURE_MIN_FILTER,
                      H.NEAREST
                    )
                    H.texParameteri(
                      H.TEXTURE_2D,
                      H.TEXTURE_MAG_FILTER,
                      H.NEAREST
                    )
                    H.texImage2D(H.TEXTURE_2D, 0, ma, aa, na, 0, ia, ja, null)
                    b(null)
                    Ea[X] = Ca
                  }
                  Oa = !0
                }
              b(null)
              p[n] = -1
              va && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !1)
              Ia = !0
              y.ia && ea && (y.ia(ea), (y.ia = null))
            }
          }
          function la() {
            for (var I = W * Y, X = 2 * I, na = 3 * I, aa = 0; aa < I; ++aa)
              (ta[0][aa] = Ja[aa]),
                (ta[1][aa] = Ja[aa + I]),
                (ta[2][aa] = Ja[aa + X]),
                (ta[3][aa] = Ja[aa + na])
          }
          function ha() {
            var I = W * Y * 4
            xa = [
              new Uint8Array(I),
              new Uint8Array(I),
              new Uint8Array(I),
              new Uint8Array(I),
            ]
            ta = [
              new Float32Array(xa[0].buffer),
              new Float32Array(xa[1].buffer),
              new Float32Array(xa[2].buffer),
              new Float32Array(xa[3].buffer),
            ]
            Pa = new Uint8Array(4 * I)
            Ja = new Float32Array(Pa.buffer)
            Ka = !0
          }
          function oa() {
            C = new Uint8Array(W * Y * 4)
            gb = new Float32Array(C.buffer)
            Za = !0
          }
          var y = Object.assign({}, G, l),
            ca = m++
          null === y.isFlipY && (y.isFlipY = y.url || y.array ? !0 : !1)
          y.data &&
            ((y.array =
              'string' === typeof y.data
                ? $a(y.data)
                : y.isFloat
                ? new Float32Array(y.data)
                : new Uint8Array(y.data)),
            (y.isFlipY = !1))
          var Ba = 0,
            za = y.A ? !0 : !1,
            z = null,
            M = null,
            ba = !1,
            U = null
          y.I = y.I || y.isFloat
          y.I && (Ba = 1)
          !y.Ne && y.isFloat && Q && !cb.zc() && (y.isFloat = !1)
          y.isFloat && (Ba = 2)
          y.isAnisotropicFiltering &&
            P &&
            !JEContext.ug() &&
            (y.isAnisotropicFiltering = !1)
          var ka = y.Oc || H.createTexture(),
            ya = null,
            ra = !1,
            W = 0,
            Y = 0,
            Ia = !1,
            fb = !1,
            Ka = !1,
            ta = null,
            xa = null,
            Pa = null,
            Ja = null,
            ma = null,
            ia = null,
            ja = null,
            va = y.isFlipY,
            Cb = (l = y.I && y.isMipmap) && bb.$d(),
            Aa = l && Cb ? !0 : !1,
            Ea = null,
            Na = -1,
            Oa = !1
          var Za = !1
          var gb = (C = null)
          y.width && ((W = y.width), (Y = y.height ? y.height : W))
          var ea = {
            get: function () {
              return ka
            },
            u: function () {
              return W
            },
            R: function () {
              return Y
            },
            sg: function () {
              return y.url
            },
            vg: function () {
              return y.isFloat
            },
            xg: function () {
              return y.I
            },
            yg: function () {
              return y.isLinear
            },
            Ab: function () {
              H.generateMipmap(H.TEXTURE_2D)
            },
            Yd: function (I, X) {
              Aa
                ? (I || (I = ea.Mc()), L.tb(X), b(Ea[I]), (p[X] = -1))
                : ea.b(X)
            },
            Mc: function () {
              ;-1 === Na && (Na = Math.log(W) / Math.log(2))
              return Na
            },
            se: function (I) {
              if (Aa) {
                I || (I = ea.Mc())
                J.set('s12')
                L.tb(0)
                for (var X = W, na = Y, aa = 1; aa <= I; ++aa)
                  (X /= 2),
                    (na /= 2),
                    J.la('u8', 0.25 / X, 0.25 / na),
                    H.viewport(0, 0, X, na),
                    b(Ea[aa - 1]),
                    H.framebufferTexture2D(
                      db.Ua(),
                      H.COLOR_ATTACHMENT0,
                      H.TEXTURE_2D,
                      Ea[aa],
                      0
                    ),
                    R.h(!1, 1 === aa)
                p[0] = -1
              } else ea.Ab()
            },
            Fg: function (I) {
              ;(za = !(
                Array.isArray(I) ||
                I.constructor === Float32Array ||
                I.constructor === Uint8Array
              ))
                ? ((ra = null), (y.A = I), E())
                : (ra = I)
            },
            b: function (I) {
              if (!Ia) return !1
              L.tb(I)
              if (p[I] === ca) return !1
              b(ka)
              p[I] = ca
              return !0
            },
            wc: function (I) {
              H.activeTexture(k[I])
              n = I
              b(ka)
              p[I] = ca
            },
            l: function () {
              F = ea
              H.framebufferTexture2D(
                db.Ua(),
                H.COLOR_ATTACHMENT0,
                H.TEXTURE_2D,
                ka,
                0
              )
            },
            S: function () {
              F = ea
              H.viewport(0, 0, W, Y)
              H.framebufferTexture2D(
                db.Ua(),
                H.COLOR_ATTACHMENT0,
                H.TEXTURE_2D,
                ka,
                0
              )
            },
            kc: L.kc,
            resize: function (I, X) {
              W = I
              Y = X
              O()
            },
            clone: function (I) {
              I = L.instance({
                width: W,
                height: Y,
                I: y.I,
                isFloat: y.isFloat,
                isLinear: y.isLinear,
                isMirrorY: y.isMirrorY,
                isFlipY: I ? !va : va,
                isPot: y.isPot,
              })
              ab.set('s0')
              db.aa()
              I.l()
              H.viewport(0, 0, W, Y)
              ea.b(0)
              R.h(!0, !0)
              return I
            },
            Cf: function () {
              H.viewport(0, 0, W, Y)
            },
            remove: function () {
              H.deleteTexture(ka)
              fb = !0
              e.splice(e.indexOf(ea), 1)
              ea = null
            },
            refresh: function () {
              ea.wc(0)
              va && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !0)
              za
                ? H.texImage2D(H.TEXTURE_2D, 0, ma, ia, ja, y.A)
                : H.texImage2D(H.TEXTURE_2D, 0, ma, W, Y, 0, ia, ja, ra)
              va && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !1)
            },
            $b: function () {
              Ka || ha()
              H.readPixels(0, 0, W, 4 * Y, H.RGBA, H.UNSIGNED_BYTE, Pa)
              la()
              return ta
            },
            ff: function () {
              Ka || ha()
              return cb.ac(0, 0, W, 4 * Y, Pa).then(function () {
                la()
                return ta
              })
            },
            hf: function () {
              Za || oa()
              H.readPixels(0, 0, W, Y, H.RGBA, H.UNSIGNED_BYTE, C)
              return gb
            },
            gf: function () {
              Za || oa()
              return cb.ac(0, 0, W, Y, C)
            },
            yb: function (I) {
              db.N()
              J.set('s13')
              ea.b(0)
              if (I)
                H.viewport(0, 0, W, Y),
                  J.Bf('u9', 0.25, 0.25, 0.25, 0.25),
                  R.h(!1, !0)
              else
                for (I = 0; 4 > I; ++I)
                  H.viewport(0, Y * I, W, Y), J.Cd('u9', v[I]), R.h(!1, 0 === I)
            },
            lc: function (I) {
              var X = ja === q[0] && !t()
              b(ka)
              va && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !0)
              X
                ? (ba ||
                    ((z = document.createElement('canvas')),
                    (z.width = W),
                    (z.height = Y),
                    (M = z.getContext('2d')),
                    (U = M.createImageData(W, Y)),
                    (ba = !0)),
                  U.data.set(I),
                  M.putImageData(U, 0, 0),
                  H.texImage2D(H.TEXTURE_2D, 0, ma, ia, ja, z))
                : H.texImage2D(H.TEXTURE_2D, 0, ma, W, Y, 0, ia, ja, I)
              p[n] = ca
              va && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !1)
            },
            Og: function (I, X) {
              b(ka)
              X && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !0)
              H.texImage2D(H.TEXTURE_2D, 0, ma, ia, ja, I)
              p[n] = ca
              X && H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, !1)
            },
            Eg: function (I, X) {
              var na = W * Y,
                aa = 4 * na
              I = y.I ? (I ? 'RGBE' : 'JSON') : 'RGBA'
              X && (I = X)
              X = cb.fa() && !1
              var Ca = null
              switch (I) {
                case 'RGBE':
                  Ca = 's43'
                  break
                case 'JSON':
                  Ca = X ? 's0' : 's13'
                  break
                case 'RGBA':
                case 'RGBAARRAY':
                  Ca = 's7'
              }
              Ka ||
                ('RGBA' === I || 'RGBE' === I || 'RGBAARRAY' === I
                  ? ((xa = new Uint8Array(aa)), (Ka = !0))
                  : 'JSON' !== I || X || ha())
              db.N()
              J.set(Ca)
              ea.b(0)
              aa = null
              if ('RGBA' === I || 'RGBE' === I || 'RGBAARRAY' === I) {
                H.viewport(0, 0, W, Y)
                R.h(!0, !0)
                H.readPixels(0, 0, W, Y, H.RGBA, H.UNSIGNED_BYTE, xa)
                if ('RGBAARRAY' === I) return { data: xa }
                N ||
                  ((K = document.createElement('canvas')),
                  (S = K.getContext('2d')),
                  (N = !0))
                K.width = W
                K.height = Y
                na = S.createImageData(W, Y)
                na.data.set(xa)
                S.putImageData(na, 0, 0)
                aa = K.toDataURL('image/png')
              } else if ('JSON' === I)
                if (X)
                  (aa = new Float32Array(na)),
                    H.viewport(0, 0, W, Y),
                    R.h(!0, !0),
                    H.readPixels(0, 0, W, Y, H.RGBA, H.FLOAT, aa)
                else {
                  for (aa = 0; 4 > aa; ++aa)
                    H.viewport(0, Y * aa, W, Y),
                      J.Cd('u9', v[aa]),
                      R.h(!aa, !aa)
                  ea.$b()
                  aa = Array(na)
                  for (X = 0; X < na; ++X)
                    (aa[4 * X] = ta[0][X]),
                      (aa[4 * X + 1] = ta[1][X]),
                      (aa[4 * X + 2] = ta[2][X]),
                      (aa[4 * X + 3] = ta[3][X])
                }
              return {
                format: I,
                data: aa,
                width: W,
                height: Y,
                isMirrorY: y.isMirrorY,
                isFlipY: 'RGBA' === I ? y.isFlipY : !y.isFlipY,
              }
            },
          }
          y.isMipmap && !Aa && Ia && !Oa && (ea.Ab(), (Oa = !0))
          if (y.url)
            b(ka),
              H.texImage2D(
                H.TEXTURE_2D,
                0,
                H.RGBA,
                1,
                1,
                0,
                H.RGBA,
                H.UNSIGNED_BYTE,
                null
              ),
              (ya = new Image()),
              (ya.a = 'Anonymous'),
              (ya.crossOrigin = 'Anonymous'),
              (ya.src = y.url),
              (ya.onload = function () {
                W = ya.width
                Y = ya.height
                O()
              })
          else if (y.A) {
            var hb = function () {
              E()
              W ? O() : setTimeout(hb, 1)
            }
            hb()
          } else
            y.array
              ? (y.I && !y.isFloat
                  ? y.array instanceof Uint16Array
                    ? ((ra = y.array), O())
                    : h()
                    ? ((ra = g(y.array)), O())
                    : (O(), L.Jc(H, ka, ea.u(), ea.R(), y.array, va, !0))
                  : ((ra = y.isFloat
                      ? y.array instanceof Float32Array
                        ? y.array
                        : new Float32Array(y.array)
                      : y.array instanceof Uint8Array
                      ? y.array
                      : new Uint8Array(y.array)),
                    O()),
                y.isKeepArray ||
                  (ra && ra !== y.array && (ra = null), delete y.array))
              : y.Oc
              ? (Ia = !0)
              : O()
          ea.og = ea.u
          y.ia && Ia && (y.ia(ea), (y.ia = null))
          e.push(ea)
          return ea
        },
        N: function (l) {
          l !== n && (H.activeTexture(k[l]), (n = l))
          p[l] = -1
          b(null)
        },
        Rf: function (l) {
          B.random.b(l)
        },
        kc: function () {
          F = null
          H.framebufferTexture2D(
            db.Ua(),
            H.COLOR_ATTACHMENT0,
            H.TEXTURE_2D,
            null,
            0
          )
        },
        reset: function () {
          0 !== n && H.activeTexture(k[0])
          for (var l = 0; l < k.length; ++l) p[l] = -1
          n = -1
        },
        Dg: function () {
          n = -1
        },
        Hf: function () {
          for (var l = 0; l < k.length; ++l) L.N(l)
        },
        Kc: function () {
          B && (B.random.remove(), B.Kd.remove())
        },
        Ng: function (l, C) {
          if ('RGBA' === l.format || 'RGBE' === l.format) {
            var E = new Image()
            E.src = l.data
            E.onload = function () {
              L.instance({
                isMirrorY: l.isMirrorY,
                isFlipY: l.isFlipY,
                isFloat: !1,
                A: E,
                ia: function (T) {
                  if ('RGBA' === l.format) C(T)
                  else {
                    var O = l.width,
                      la = l.height,
                      ha = L.instance({
                        isMirrorY: l.isMirrorY,
                        isFloat: !0,
                        width: O,
                        height: la,
                        isFlipY: l.isFlipY,
                      })
                    db.aa()
                    H.viewport(0, 0, O, la)
                    J.set('s44')
                    ha.l()
                    T.b(0)
                    R.h(!0, !0)
                    L.N(0)
                    C(ha)
                    cb.flush()
                    setTimeout(T.remove, 50)
                  }
                },
              })
            }
          } else
            'JSON' === l.format
              ? C(
                  L.instance({
                    isFloat: !0,
                    isFlipY: l.isFlipY,
                    width: l.width,
                    height: l.height,
                    array: new Float32Array(l.data),
                  })
                )
              : C(!1)
        },
        de: g,
        i: function () {
          F && (db.aa(), L.kc(), db.N())
          L.Hf()
          e.slice(0).forEach(function (l) {
            l.remove()
          })
          e.splice(0)
          x = !1
          m = 0
          'undefined' !== typeof bb && bb.i()
          B = null
        },
      }
    return L
  })(),
  ib = {
    instance: function (b) {
      var d = [V.instance(b), V.instance(b)],
        g = [d[1], d[0]],
        h = g,
        t = {
          Bd: function (r) {
            h[1].l()
            h[0].b(r)
            t.Fd()
          },
          uf: function (r) {
            h[1].S()
            h[0].b(r)
            t.Fd()
          },
          Fd: function () {
            h = h === d ? g : d
          },
          refresh: function () {
            h[0].refresh()
            h[1].refresh()
          },
          b: function (r) {
            h[0].b(r)
          },
          Qf: function (r) {
            h[1].b(r)
          },
          Be: function () {
            return h[0]
          },
          mg: function () {
            return h[1]
          },
          lc: function (r) {
            h[0].lc(r)
            h[1].lc(r)
          },
          remove: function () {
            h[0].remove()
            h[1].remove()
            h = null
          },
          sync: function () {
            t.uf(0)
            J.set('s0')
            R.h(!1, !1)
          },
        }
      return t
    },
  },
  R = (function () {
    function b(m) {
      var p = { $: null, C: null }
      p.$ = m.createBuffer()
      m.bindBuffer(m.ARRAY_BUFFER, p.$)
      m.bufferData(
        m.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        m.STATIC_DRAW
      )
      p.C = m.createBuffer()
      m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, p.C)
      m.bufferData(
        m.ELEMENT_ARRAY_BUFFER,
        new Uint16Array([0, 1, 2]),
        m.STATIC_DRAW
      )
      return p
    }
    var d = null,
      g = 0,
      h = !1,
      t = [],
      r = -2,
      n = -2,
      k = {
        reset: function () {
          n = r = -2
        },
        j: function () {
          h || ((d = b(H)), k.ub(), (h = !0))
        },
        instance: function (m) {
          var p = g++,
            B = m.C ? m.C.length : 0,
            F = 'undefined' === typeof m.mode ? H.STATIC_DRAW : m.mode,
            q = H.createBuffer()
          H.bindBuffer(H.ARRAY_BUFFER, q)
          H.bufferData(
            H.ARRAY_BUFFER,
            m.$ instanceof Float32Array ? m.$ : new Float32Array(m.$),
            F
          )
          r = p
          var u = null,
            D = null,
            x = null
          if (m.C) {
            u = H.createBuffer()
            H.bindBuffer(H.ELEMENT_ARRAY_BUFFER, u)
            var e = null
            65536 > m.C.length
              ? ((e = Uint16Array), (D = H.UNSIGNED_SHORT), (x = 2))
              : ((e = Uint32Array), (D = H.UNSIGNED_INT), (x = 4))
            e = m.C instanceof e ? m.C : new e(m.C)
            H.bufferData(H.ELEMENT_ARRAY_BUFFER, e, F)
            n = p
          }
          var G = {
            Zd: function (N) {
              r !== p && (H.bindBuffer(H.ARRAY_BUFFER, q), (r = p))
              N && ab.cc()
            },
            Wd: function () {
              n !== p && (H.bindBuffer(H.ELEMENT_ARRAY_BUFFER, u), (n = p))
            },
            bind: function (N) {
              G.Zd(N)
              G.Wd()
            },
            Yf: function () {
              H.drawElements(H.TRIANGLES, B, D, 0)
            },
            Zf: function (N, K) {
              H.drawElements(H.TRIANGLES, N, D, K * x)
            },
            remove: function () {
              H.deleteBuffer(q)
              m.C && H.deleteBuffer(u)
              G = null
            },
          }
          t.push(G)
          return G
        },
        ub: function () {
          ;-1 !== r && (H.bindBuffer(H.ARRAY_BUFFER, d.$), (r = -1))
          ;-1 !== n && (H.bindBuffer(H.ELEMENT_ARRAY_BUFFER, d.C), (n = -1))
        },
        h: function (m, p) {
          m && R.ub()
          p && ab.ib()
          H.drawElements(H.TRIANGLES, 3, H.UNSIGNED_SHORT, 0)
        },
        Pa: function (m) {
          m = m || H
          var p = b(m)
          m.bindBuffer(m.ARRAY_BUFFER, p.$)
          m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, p.C)
          ab.jb(m)
          m.clear(m.COLOR_BUFFER_BIT)
          m.drawElements(m.TRIANGLES, 3, m.UNSIGNED_SHORT, 0)
          m.flush()
          m.bindBuffer(m.ARRAY_BUFFER, null)
          m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, null)
          m.deleteBuffer(p.$)
          m.deleteBuffer(p.C)
          k.reset()
          h && (k.ub(), ab.ib())
        },
        Kc: function () {
          var m = H,
            p = d
          m.deleteBuffer(p.$)
          m.deleteBuffer(p.C)
        },
        i: function () {
          k.Kc()
          t.forEach(function (m) {
            m.remove()
          })
          H.bindBuffer(H.ARRAY_BUFFER, null)
          H.bindBuffer(H.ELEMENT_ARRAY_BUFFER, null)
          k.reset()
          h = !1
          t.splice(0)
          g = 0
        },
      }
    return k
  })(),
  db = (function () {
    var b = null,
      d = null,
      g = null,
      h = !1,
      t = [],
      r = { B: -2, Ic: 1 },
      n = {
        $a: function () {
          return h
        },
        j: function () {
          if (!h) {
            b = H.createFramebuffer()
            var k = cb.fa()
            d = k && H.DRAW_FRAMEBUFFER ? H.DRAW_FRAMEBUFFER : H.FRAMEBUFFER
            g = k && H.READ_FRAMEBUFFER ? H.READ_FRAMEBUFFER : H.FRAMEBUFFER
            h = !0
          }
        },
        jg: function () {
          return d
        },
        ze: function () {
          return g
        },
        Ua: function () {
          return H.FRAMEBUFFER
        },
        ng: function () {
          return r
        },
        bg: function () {
          return b
        },
        instance: function (k) {
          void 0 === k.Vc && (k.Vc = !1)
          var m = k.ta ? k.ta : null,
            p = k.width,
            B = void 0 !== k.height ? k.height : k.width,
            F = b,
            q = null,
            u = !1,
            D = !1,
            x = 0
          m && ((p = p ? p : m.u()), (B = B ? B : m.R()))
          var e = {
            Ad: function () {
              u || ((F = H.createFramebuffer()), (u = !0), (x = r.Ic++))
            },
            Qd: function () {
              e.Ad()
              e.l()
              q = H.createRenderbuffer()
              H.bindRenderbuffer(H.RENDERBUFFER, q)
              H.renderbufferStorage(H.RENDERBUFFER, H.DEPTH_COMPONENT16, p, B)
              H.framebufferRenderbuffer(
                d,
                H.DEPTH_ATTACHMENT,
                H.RENDERBUFFER,
                q
              )
              H.clearDepth(1)
            },
            bind: function (G, N) {
              x !== r.B && (H.bindFramebuffer(d, F), (r.B = x))
              m && m.l()
              N && H.viewport(0, 0, p, B)
              G && H.clear(H.COLOR_BUFFER_BIT | H.DEPTH_BUFFER_BIT)
            },
            Pf: function () {
              x !== r.B && (H.bindFramebuffer(d, F), (r.B = x))
            },
            clear: function () {
              H.clear(H.COLOR_BUFFER_BIT | H.DEPTH_BUFFER_BIT)
            },
            Vf: function () {
              H.clear(H.COLOR_BUFFER_BIT)
            },
            Wf: function () {
              H.clear(H.DEPTH_BUFFER_BIT)
            },
            Cf: function () {
              H.viewport(0, 0, p, B)
            },
            l: function () {
              x !== r.B && (H.bindFramebuffer(d, F), (r.B = x))
            },
            rtt: function (G) {
              m = G
              r.B !== x && (H.bindFramebuffer(H.FRAMEBUFFER, F), (r.B = x))
              G.l()
            },
            N: function () {
              H.bindFramebuffer(d, null)
              r.B = -1
            },
            resize: function (G, N) {
              p = G
              B = N
              q &&
                (H.bindRenderbuffer(H.RENDERBUFFER, q),
                H.renderbufferStorage(
                  H.RENDERBUFFER,
                  H.DEPTH_COMPONENT16,
                  p,
                  B
                ))
            },
            remove: function () {
              F === b ||
                D ||
                (H.bindFramebuffer(d, F),
                H.framebufferTexture2D(
                  d,
                  H.COLOR_ATTACHMENT0,
                  H.TEXTURE_2D,
                  null,
                  0
                ),
                q &&
                  H.framebufferRenderbuffer(
                    d,
                    H.DEPTH_ATTACHMENT,
                    H.RENDERBUFFER,
                    null
                  ),
                H.bindFramebuffer(d, null),
                H.deleteFramebuffer(F),
                q && H.deleteRenderbuffer(q))
              D = !0
            },
          }
          k.Vc && e.Qd()
          t.push(e)
          return e
        },
        N: function () {
          H.bindFramebuffer(d, null)
          r.B = -1
        },
        If: function () {
          H.bindFramebuffer(d, null)
          H.clear(H.COLOR_BUFFER_BIT | H.DEPTH_BUFFER_BIT)
          cb.Dd()
          r.B = -1
        },
        reset: function () {
          r.B = -2
        },
        aa: function () {
          0 !== r.B && (H.bindFramebuffer(d, b), (r.B = 0))
        },
        clear: function () {
          cb.Dd()
          H.clear(H.COLOR_BUFFER_BIT)
        },
        i: function () {
          n.N()
          t.forEach(function (k) {
            k.remove()
          })
          null !== b && (H.deleteFramebuffer(b), (b = null))
          n.reset()
          h = !1
          t.splice(0)
          r.Ic = 1
        },
      }
    return n
  })(),
  cb = (function () {
    function b() {
      t = 'undefined' === typeof eb ? JEContext : eb
      r = !0
    }
    function d(e, G) {
      for (var N = 0; N < e.length; ++N) {
        var K = G.getExtension(e[N])
        if (K) return K
      }
      return null
    }
    function g() {
      null !== u.nb && (clearInterval(u.nb), (u.nb = null))
      u.oa = !1
    }
    function h() {
      u.za && (H.deleteSync(u.za), (u.za = null))
    }
    var t = null,
      r = !1,
      n = {
        Xc: !1,
        ec: null,
        fc: null,
        $c: !1,
        Qe: !1,
        hc: null,
        ad: !1,
        ic: null,
        Yc: !1,
        vb: null,
        Ke: !1,
        wb: null,
        Le: !1,
      },
      k = null,
      m = { ba: !0, da: !0, zb: !0, sd: !1 },
      p = null,
      B = !0,
      F = null,
      q = null,
      u = { oa: !1, na: null, za: null, Fb: -1, V: null, nb: null },
      D = 'undefined' === typeof window ? {} : window,
      x = {
        j: function () {
          if (r) return !0
          x.reset()
          r || b()
          var e = H
          if (!k.Xc) {
            k.ec = x.Fc(e)
            D.GL_EXT_FLOAT = k.ec
            k.$c = k.ec ? !0 : !1
            if (k.$c || x.fa())
              (k.fc = x.Gc(e)),
                (k.Qe = k.fc ? !0 : !1),
                (D.GL_EXT_FLOATLINEAR = k.fc)
            k.Xc = !0
          }
          if (!k.Yc) {
            k.hc = x.Na(e)
            k.hc && ((k.ad = !0), (D.GL_EXT_HALFFLOAT = k.hc))
            if (k.ad || x.fa())
              (k.ic = x.Hc(e)), (D.GL_EXT_HALFFLOATLINEAR = k.ic)
            k.tg = k.ic ? !0 : !1
            k.Yc = !0
          }
          k.vb = x.Dc(e)
          k.Ke = k.vb ? !0 : !1
          D.GL_EXT_COLORBUFFERFLOAT = k.vb
          k.wb = x.Ec(e)
          k.Le = k.wb ? !0 : !1
          D.GL_EXT_COLORBUFFERHALFFLOAT = k.wb
          db.j()
          V.j()
          if (!x.ge()) return !1
          R.j()
          V.Ie()
          return !0
        },
        reset: function () {
          k = Object.assign({}, n)
          p = Object.assign({}, m)
        },
        u: function () {
          r || b()
          return t.u()
        },
        R: function () {
          r || b()
          return t.R()
        },
        fa: function () {
          r || b()
          return t.fa()
        },
        Cc: function (e) {
          x.Dc(e)
          x.Ec(e)
          x.Fc(e)
          x.Gc(e)
          x.Na(e)
          x.Hc(e)
        },
        Dc: d.bind(null, [
          'EXT_color_buffer_float',
          'WEBGL_color_buffer_float',
          'OES_color_buffer_float',
        ]),
        Ec: d.bind(null, [
          'EXT_color_buffer_half_float',
          'WEBGL_color_buffer_half_float',
          'OES_color_buffer_half_float',
        ]),
        Fc: d.bind(null, [
          'OES_texture_float',
          'MOZ_OES_texture_float',
          'WEBKIT_OES_texture_float',
        ]),
        Gc: d.bind(null, [
          'OES_texture_float_linear',
          'MOZ_OES_texture_float_linear',
          'WEBKIT_OES_texture_float_linear',
        ]),
        Na: d.bind(null, [
          'OES_texture_half_float',
          'MOZ_OES_texture_half_float',
          'WEBKIT_OES_texture_half_float',
        ]),
        Hc: d.bind(null, [
          'OES_texture_half_float_linear',
          'MOZ_OES_texture_half_float_linear',
          'WEBKIT_OES_texture_half_float_linear',
        ]),
        Cb: function (e) {
          var G = x.Na(e)
          return G && G.HALF_FLOAT_OES
            ? G.HALF_FLOAT_OES
            : e.HALF_FLOAT || e.FLOAT
        },
        we: function () {
          return q || H.RGBA32F || H.RGBA
        },
        xe: function () {
          return F || H.RGBA16F || H.RGBA
        },
        te: function () {
          return p
        },
        zc: function () {
          return p.ba
        },
        Uf: function () {
          return p.da
        },
        Tf: function () {
          return p.zb
        },
        ae: function () {
          return p.sd && B
        },
        Jd: function (e) {
          B = e
          !e && u.oa && (h(), H.bindBuffer(u.V, null), (u.oa = !1))
        },
        zg: function () {
          return u.oa
        },
        lb: function (e, G, N) {
          function K() {
            e.bindTexture(e.TEXTURE_2D, null)
            e.bindFramebuffer(S, null)
            e.deleteTexture(Q)
            e.deleteFramebuffer(P)
          }
          var S = e.FRAMEBUFFER,
            v = e.NEAREST,
            P = e.createFramebuffer()
          e.bindFramebuffer(S, P)
          var Q = e.createTexture()
          e.activeTexture(e.TEXTURE0)
          e.bindTexture(e.TEXTURE_2D, Q)
          e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1)
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE)
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, v)
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, v)
          e.texImage2D(e.TEXTURE_2D, 0, G, 3, 3, 0, e.RGBA, N, null)
          e.framebufferTexture2D(
            e.FRAMEBUFFER,
            e.COLOR_ATTACHMENT0,
            e.TEXTURE_2D,
            Q,
            0
          )
          if (
            e.checkFramebufferStatus(e.READ_FRAMEBUFFER || e.FRAMEBUFFER) !==
            e.FRAMEBUFFER_COMPLETE
          )
            return K(), !1
          ab.bc(e)
          e.clearColor(0, 0, 0, 0)
          e.viewport(0, 0, 3, 3)
          e.disable(e.DEPTH_TEST)
          e.clear(e.COLOR_BUFFER_BIT)
          R.Pa(e)
          e.bindFramebuffer(S, null)
          ab.Da(e)
          e.activeTexture(e.TEXTURE0)
          e.bindTexture(e.TEXTURE_2D, Q)
          R.Pa(e)
          G = new Uint8Array(36)
          e.readPixels(0, 0, 3, 3, e.RGBA, e.UNSIGNED_BYTE, G)
          K()
          for (N = 0; 36 > N; ++N)
            if (3 !== N % 4 && 3 < Math.abs(G[N] - 127)) return !1
          return !0
        },
        xb: function (e) {
          var G = { ba: !1, da: !1 }
          e.disable(e.BLEND)
          e.clearColor(0, 0, 0, 0)
          e.clear(e.COLOR_BUFFER_BIT)
          e.RGBA32F &&
            x.lb(e, e.RGBA32F, e.FLOAT) &&
            ((G.ba = !0), (q = e.RGBA32F))
          !G.ba && x.lb(e, e.RGBA, e.FLOAT) && ((G.ba = !0), (q = e.RGBA))
          var N = x.Cb(e)
          F = null
          e.RGBA16F && x.lb(e, e.RGBA16F, N) && ((G.da = !0), (F = e.RGBA16F))
          !G.da && x.lb(e, e.RGBA, N) && ((G.da = !0), (F = e.RGBA))
          return G
        },
        he: function () {
          var e = db.instance({ width: 2 })
          e.Ad()
          var G = V.instance({ width: 2, isFloat: !0, cb: 3 })
          e.l()
          G.l()
          x.flush()
          H.checkFramebufferStatus(db.ze()) !== H.FRAMEBUFFER_COMPLETE
            ? (V.xf(), (p.zb = !1))
            : (p.zb = !0)
          e.remove()
          G.remove()
        },
        ie: function () {
          var e = !1
          x.fa() &&
            (e =
              'PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer'
                .split(' ')
                .every(function (G) {
                  return 'undefined' !== typeof H[G]
                }))
          p.sd = e
        },
        ge: function () {
          var e = x.xb(H)
          Object.assign(p, e)
          if (!p.ba && !p.da) return !1
          x.he()
          x.ie()
          return !0
        },
        jf: function (e, G, N, K, S) {
          H.readPixels(e, G, N, K, H.RGBA, H.UNSIGNED_BYTE, S)
          return Promise.resolve(S, !1)
        },
        ac: function (e, G, N, K, S, v) {
          if (!x.ae()) return x.jf(e, G, N, K, S)
          null === u.na &&
            ((u.V = H.PIXEL_PACK_BUFFER),
            (u.na = H.createBuffer()),
            (u.Fb = -1))
          H.bindBuffer(u.V, u.na)
          S.byteLength !== u.Fb &&
            (H.bufferData(u.V, S.byteLength, H.STREAM_READ),
            (u.Fb = S.byteLength))
          H.readPixels(e, G, N, K, H.RGBA, H.UNSIGNED_BYTE, 0)
          u.za = H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE, 0)
          x.flush()
          var P = !1
          return new Promise(function (Q, w) {
            function f() {
              if (!u.oa) return g(), w(), !1
              switch (H.clientWaitSync(u.za, 0, 0)) {
                case H.TIMEOUT_EXPIRED:
                case H.WAIT_FAILED:
                  return !1
                default:
                  return (
                    g(),
                    h(),
                    H.getBufferSubData(u.V, 0, S),
                    H.bindBuffer(u.V, null),
                    Q(S, P),
                    !0
                  )
              }
            }
            g()
            u.oa = !0
            f() || (v && !P && ((P = !0), v()), (u.nb = setInterval(f, 0)))
          })
        },
        Dd: function () {
          H.viewport(0, 0, x.u(), x.R())
        },
        flush: function () {
          H.flush()
        },
        i: function () {
          g()
          h()
          V.i()
          db.i()
          R.i()
          null !== u.na && (H.deleteBuffer(u.na), (u.na = null))
          ab.reset()
          r = !1
        },
      }
    return x
  })(),
  bb = (function () {
    function b(v, P, Q, w) {
      e.texParameteri(
        e.TEXTURE_2D,
        e.TEXTURE_MIN_FILTER,
        w ? e.NEAREST_MIPMAP_NEAREST : e.LINEAR
      )
      var f = null
      if (null !== Q)
        try {
          f = e.getError()
          if ('FUCKING_BIG_ERROR' === f) return !1
          e.texImage2D(e.TEXTURE_2D, 0, v, 4, 4, 0, e.RGBA, P, Q)
          f = e.getError()
          if (f !== e.NO_ERROR) return !1
        } catch (A) {
          return !1
        }
      w && e.generateMipmap(e.TEXTURE_2D)
      e.clear(e.COLOR_BUFFER_BIT)
      R.Pa(e)
      f = e.getError()
      if ('FUCKING_BIG_ERROR' === f) return !1
      e.readPixels(0, 0, 2, 2, e.RGBA, e.UNSIGNED_BYTE, B)
      f = e.getError()
      f === e.INVALID_OPERATION &&
        'undefined' !== typeof e.PIXEL_PACK_BUFFER &&
        (e.bindBuffer(e.PIXEL_PACK_BUFFER, null),
        e.readPixels(0, 0, 2, 2, e.RGBA, e.UNSIGNED_BYTE, B),
        (f = e.getError()))
      if (f !== e.NO_ERROR) return !1
      Q = !0
      for (w = 0; 16 > w; ++w) Q = Q && 4 > Math.abs(B[w] - 127)
      Q && ((m.ld = P), (m.Uc = v))
      return Q
    }
    function d(v, P) {
      return G.ba && b(v, e.FLOAT, new Float32Array(F), P)
        ? ((k = n.sc), !0)
        : !1
    }
    function g(v, P, Q) {
      if (!G.da) return !1
      var w = V.de(F),
        f = cb.Na(e)
      if (
        (f && f.HALF_FLOAT_OES && b(v, f.HALF_FLOAT_OES, w, P)) ||
        (e.HALF_FLOAT && b(v, e.HALF_FLOAT, w, P))
      )
        return (k = n.wa), !0
      w = new Float32Array(F)
      if (b(v, e.FLOAT, w, P)) return (k = n.wa), !0
      e.bindTexture(e.TEXTURE_2D, Q)
      e.texImage2D(
        e.TEXTURE_2D,
        0,
        e.RGBA,
        2,
        2,
        0,
        e.RGBA,
        e.UNSIGNED_BYTE,
        null
      )
      e.bindFramebuffer(m.La, S)
      V.Jc(e, Q, 2, 2, w, !1, !1)
      e.bindFramebuffer(m.La, null)
      e.bindTexture(e.TEXTURE_2D, Q)
      return b(v, null, null, P) ? ((k = n.wa), !0) : !1
    }
    function h(v, P, Q) {
      p = !0
      if (g(v, !0, Q) || d(P, !0)) return !0
      p = !1
      return g(v, !1, Q) || d(P, !1) ? !0 : !1
    }
    function t(v) {
      if (k === n.O) {
        e = v || H
        k = n.RGBA8
        p = !0
        cb.Cc(e)
        G || (G = cb.xb(e))
        db.reset()
        S = e.createFramebuffer()
        m.La = e.DRAW_FRAMEBUFFER || e.FRAMEBUFFER
        e.bindFramebuffer(m.La, null)
        e.clearColor(0, 0, 0, 0)
        e.viewport(0, 0, 2, 2)
        J.O()
        N = J.Da(e)
        v = e.createTexture()
        e.activeTexture(e.TEXTURE0)
        e.bindTexture(e.TEXTURE_2D, v)
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT)
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST)
        K = v
        var P = (v = e.RGBA),
          Q = e.RGBA16F,
          w = e.RGBA32F
        w && (v = w)
        Q && (P = Q)
        if ((Q || w) && h(P, v, K)) return r(), !0
        v = P = e.RGBA
        if (h(P, v, K)) return r(), !0
        k = n.RGBA8
        r()
        return !1
      }
    }
    function r() {
      e.deleteProgram(N.ka)
      e.deleteTexture(K)
      K = N = null
    }
    for (
      var n = { O: -1, sc: 3, wa: 2, RGBA8: 0 },
        k = n.O,
        m = { ld: null, Uc: null, La: null },
        p = !0,
        B = new Uint8Array(16),
        F = Array(64),
        q = 0;
      4 > q;
      ++q
    )
      for (var u = 0; 4 > u; ++u) {
        var D = 0 === (u + q) % 2 ? 1 : 0,
          x = 4 * q + u
        F[4 * x] = D
        F[4 * x + 1] = D
        F[4 * x + 2] = D
        F[4 * x + 3] = D
      }
    var e = null,
      G = null,
      N = null,
      K = null,
      S = null
    return {
      $d: function (v) {
        t(v)
        return p
      },
      yc: function (v, P) {
        k === n.O && (typeof ('undefined' !== P) && (G = P), t(v))
        return k !== n.RGBA8
      },
      wg: function (v) {
        t(v)
        return k === n.sc
      },
      Re: function (v) {
        t(v)
        return k === n.wa
      },
      kg: function (v) {
        t(v)
        return m.ld
      },
      ye: function (v) {
        t(v)
        return m.Uc
      },
      i: function () {
        e = null
        p = !0
        k = n.O
        G = null
      },
    }
  })(),
  jb = {
    instance: function (b) {
      var d = V.instance(b.alpha),
        g = V.instance(b.beta)
      return {
        ke: function () {
          d.b(1)
          g.b(2)
        },
      }
    },
  },
  mb = {
    instance: function (b) {
      var d = null,
        g = !1,
        h = !1,
        t = null,
        r = !1,
        n = !1,
        k = null,
        m = 'undefined' === typeof b.preprocessing ? !1 : b.preprocessing,
        p =
          'undefined' === typeof b.preprocessingSize
            ? b.size
            : b.preprocessingSize
      b.mask &&
        ((g = !0),
        c && void 0 !== c.Vd && (b.mask = c.Vd + b.mask),
        (d = V.instance({ isFloat: !1, url: b.mask })))
      var B = !1
      b.customInputShader &&
        ((B = 's45'),
        J.tc({
          name: '_',
          id: B,
          c: b.customInputShader,
          Mg: ['uSource'],
          precision: 'lowp',
        }),
        J.F(B, [{ type: '1i', name: '_', value: 0 }]))
      switch (m) {
        case 'sobel':
          k = 's32'
          r = !0
          break
        case 'meanNormalization':
          k = 's33'
          r = !0
          break
        case 'grayScale':
          k = 's29'
          r = !1
          break
        case 'grayScaleTilt':
          k = 's30'
          n = !0
          r = !1
          break
        case 'rgbGrayTilt':
          k = 's31'
          n = !0
          r = !1
          break
        case 'copy':
          k = B ? B : 's0'
          break
        case 'inputLightRegulation':
          k = B ? B : 's29'
          t = kb.instance({ Tc: p, kd: b.size, hd: b.nBlurPass, Za: !1 })
          h = !0
          break
        case 'inputMix0':
          k = 'none'
          t = lb.instance({
            K: p,
            Ld: b.varianceMin,
            xc: b.blurKernelSizePx,
            Za: !1,
          })
          h = !0
          break
        case 'direct':
        case 'none':
          k = 'abort'
          break
        default:
          k = 's4'
      }
      n && J.F(k, [{ name: 'u27', type: '1f', value: b.tilt }])
      g && (k += 'Mask')
      var F = V.instance({ isFloat: !1, isPot: !1, width: b.size }),
        q = {
          u: function () {
            return p
          },
          Db: function () {
            return q.u()
          },
          Fe: function () {
            return h ? t.Eb() : F
          },
          M: function (u) {
            db.aa()
            'abort' !== k &&
              ('none' !== k &&
                (J.set(k),
                r && J.D('u28', 1 / b.size),
                F.S(),
                g && d.b(1),
                R.h(!1, !1),
                F.b(0),
                (u = F)),
              h && t.process(u))
          },
          i: function () {
            F.remove()
            g && d.remove()
          },
        }
      return q
    },
  },
  sb = {
    instance: function (b) {
      function d(l) {
        t.forEach(function (C, E) {
          r[E][0] = l[0][C]
          r[E][1] = l[1][C]
          r[E][2] = l[2][C]
          r[E][3] = l[3][C]
        })
        return r
      }
      b.normalize = b.normalize || !1
      var g = {
          input: null,
          Ia: null,
          Ib: null,
          Y: null,
          eb: null,
          Xb: null,
          Yb: null,
        },
        h = null,
        t = [],
        r = [],
        n = !1,
        k = null,
        m = !0,
        p = -1,
        B = b.isReorganize ? b.isReorganize : !1,
        F = b.kernelsCount ? !0 : !1,
        q = b.dynPelu ? jb.instance(b.dynPelu) : !1,
        u = q ? !0 : !1,
        D = { isEnabled: !1 }
      b.Pe
        ? ((b.sparsity =
            'undefined' !== typeof b.sparsity ? b.sparsity : b.gb.Db()),
          (m = !1))
        : 'full' === b.connectivityUp && (b.sparsity = b.gb.Db())
      var x = {
          elu: 's16',
          elu01: 's17',
          relu: 's15',
          arctan: 's19',
          sigmoid: 's14',
          copy: 's0',
          softplus: 's20',
          dynPelu: 's18',
        }[b.activation],
        e = b.sparsity * b.sparsity,
        G = !1,
        N = b.size,
        K = ''
      if (b.maxPooling) {
        switch (b.maxPooling.size) {
          case 2:
            K = 's34'
            break
          case 4:
            K = 's35'
        }
        G = !0
        N /= b.maxPooling.size
        g.Xb = V.instance({ isFloat: !0, isPot: !1, width: N })
      }
      var S = b.normalization ? !0 : !1,
        v = null,
        P = null,
        Q = null
      if (S) {
        v = 's46' + b.index.toString()
        J.Sc('s46', v, [((b.normalization.n - 1) / 2).toFixed(1)])
        J.F(v, [
          { type: '1i', name: 'u1', value: 0 },
          { type: '2f', name: 'u8', value: [1 / b.size, 1 / b.size] },
          { type: '1f', name: 'u7', value: b.normalization.alpha },
          { type: '1f', name: 'u10', value: b.normalization.beta },
          { type: '1f', name: 'u31', value: b.normalization.k },
        ])
        var w = { isFloat: !0, isPot: !0, width: b.size }
        P = V.instance(w)
        Q = V.instance(w)
      }
      var f = -1,
        A = null
      m && (g.Y = V.instance({ isFloat: !0, isPot: !1, width: b.size }))
      g.Ia = V.instance(b.bias)
      var L = {
        u: function () {
          return b.size
        },
        Db: function () {
          return N
        },
        Lc: function () {
          return b.classesCount
        },
        Xd: function (l) {
          h.b(l)
        },
        cf: function () {
          b.remap &&
            b.remap.isEnabled &&
            (D = {
              isEnabled: !0,
              Ve: V.instance({
                isFloat: !1,
                isFlipY: !1,
                array: new Uint8Array(b.remap.maskTexture.data),
                width: b.remap.maskTexture.width,
                isPot: !1,
              }),
              bb: b.remap.layers.map(function (l) {
                return b.parent.Ce(l)
              }),
              depth: b.remap.depth,
            })
        },
        yf: function () {
          switch (b.connectivityUp) {
            case 'direct':
              A = nb.instance(b.connectivity)
              break
            case 'square':
              A = ob.instance(b.connectivity)
              break
            case 'squareFast':
              A = pb.instance(b.connectivity, b.activation)
              break
            case 'full':
              A = qb.instance(b.connectivity)
              break
            case 'conv':
              ;(p = b.kernelsCount),
                (A = rb.instance(b.connectivity)),
                B &&
                  (g.eb = V.instance({
                    width: N,
                    isFloat: !0,
                    isFlipY: !1,
                    isPot: !1,
                  }))
          }
          if (A.sa) {
            var l = b.size * b.sparsity
            f = Math.log(l / b.size) / Math.log(2)
            g.input = V.instance({
              isMipmap: !0,
              isFloat: !0,
              isPot: !0,
              width: l,
              Pb: f,
            })
            g.Ib = V.instance({ isFloat: !0, isPot: !0, width: b.size })
          }
        },
        M: function (l, C) {
          h = l
          A.sa
            ? (g.input.S(),
              F && g.Ia.b(2),
              A.M(D),
              g.input.b(0),
              g.input.se(f),
              g.Ib.S(),
              F ? J.set('s0') : (J.set('s28'), J.D('u26', e), g.Ia.b(1)),
              g.input.Yd(f, 0),
              R.h(!1, !1),
              J.set(x),
              S ? P.l() : g.Y.l(),
              g.Ib.b(0),
              u && q.ke(),
              R.h(!1, !1))
            : (g.Y.S(), g.Ia.b(1), A.M())
          S &&
            (J.set(v),
            Q.l(),
            P.b(0),
            R.h(!1, !1),
            J.set('s47'),
            J.D('u7', 1),
            g.Y.l(),
            Q.b(1),
            R.h(!1, !1))
          if (m)
            return (
              G
                ? (g.Xb.S(),
                  g.Y.b(0),
                  J.set(K),
                  J.la('u8', 1 / b.size, 1 / b.size),
                  R.h(!1, !1),
                  (C = g.Xb))
                : (C = g.Y),
              C.b(0),
              B &&
                (g.eb.l(),
                J.set('s22'),
                J.la('u13', p, N / p),
                R.h(!1, !1),
                (C = g.eb),
                g.eb.b(0)),
              C
            )
          var E = g.Y
          b.normalize &&
            (J.set('gpuRawAvg' === n ? 's9' : 's8'),
            J.D('u4', 1 / b.size),
            g.Yb.S(),
            g.Y.b(0),
            R.h(!1, !1),
            (E = g.Yb))
          l = null
          switch (n) {
            case 'cpuRGBA2Float':
              E.yb(!1)
              C ? (l = L.df(E).then(k)) : ((E = L.ef(E)), k(E))
              break
            case 'cpuMeanFloat':
              E.yb(!0)
              if (C) l = E.gf().then(k)
              else {
                E = E.hf()
                for (var T = 0; T < E.length; ++T);
                k(E)
              }
              break
            case 'gpuRawAvg':
            case 'gpuRaw':
              E.b(0)
            case 'none':
              null !== k && k(E)
          }
          C && null === l && (l = Promise.resolve())
          return l
        },
        ee: function (l) {
          l && ((n = l.Zb || 'none'), (k = l.Wb || null))
          g.Y = V.instance({
            isFloat: !0,
            isPot: !0,
            isMipmap: !1,
            width: b.size,
          })
          l =
            'undefined' !== typeof b.classesCount && b.classesCount
              ? b.classesCount
              : b.size * b.size
          for (var C = 0, E = 0, T = 0; C < l; ++C)
            t.push(E + (b.size - 1 - T) * b.size),
              r.push([-1, -1, -1, -1]),
              ++E,
              E === b.size && ((E = 0), ++T)
          b.normalize &&
            (g.Yb = V.instance({ isFloat: !0, isPot: !0, width: b.size }))
        },
        df: function (l) {
          return l.ff().then(d)
        },
        ef: function (l) {
          l = l.$b()
          d(l)
          return r
        },
        i: function () {
          for (var l in g) {
            var C = g[l]
            C && C.remove()
          }
          A && (A.i(), (A = null))
        },
      }
      b.gb && L.yf(b.gb)
      return L
    },
  }
function tb(b) {
  var d = null,
    g = null,
    h = null,
    t = 0
  this.j = function (r) {
    this.wf(r.bb)
    h.ee({ Zb: r.Zb, Wb: r.Wb })
  }
  this.Ce = function (r) {
    return d[r]
  }
  this.wf = function (r) {
    var n = null
    t = r.length
    d = r.map(function (k, m) {
      k = Object.assign({}, k, {
        index: m,
        parent: this,
        gb: n,
        Pe: m === t - 1,
      })
      return (n = m = 0 === m ? mb.instance(k) : sb.instance(k))
    })
    g = d[0]
    h = d[t - 1]
    d.forEach(function (k, m) {
      0 !== m && k.cf()
    })
  }
  this.M = function (r) {
    var n = r
    d.forEach(function (k) {
      n = k.M(n, !1)
    })
    return n
  }
  this.Ae = function () {
    return g.u()
  }
  this.Ge = function () {
    return h.u()
  }
  this.Eb = function () {
    return h.Fe()
  }
  this.Lc = function () {
    return h.Lc()
  }
  this.i = function () {
    d &&
      (d.forEach(function (r) {
        r.i()
      }),
      (h = g = d = null),
      (t = 0))
  }
  'undefined' !== typeof b && this.j(b)
}
var nb = {
    instance: function (b) {
      var d = V.instance(b.weights)
      return {
        sa: !0,
        Ta: function () {
          return 1
        },
        i: function () {
          d.remove()
        },
        He: function () {
          return d
        },
        M: function () {
          J.set('s27')
          d.b(1)
          R.h(!1, !1)
        },
      }
    },
  },
  qb = {
    instance: function (b) {
      var d = b.fromLayerSize,
        g = V.instance(b.weights)
      return {
        sa: !0,
        Ta: function () {
          return d
        },
        i: function () {
          g.remove()
        },
        M: function (h) {
          if (h.isEnabled) {
            J.set('s25')
            h.Ve.b(3)
            var t,
              r = Math.min(h.bb.length, h.depth)
            for (t = 0; t < r; ++t) h.bb[t].Xd(4 + t)
          } else J.set('s24')
          J.D('u17', b.toLayerSize)
          g.b(1)
          R.h(!1, !1)
        },
      }
    },
  },
  ob = {
    instance: function (b) {
      for (
        var d = b.fromLayerSize,
          g = b.toLayerSize,
          h = b.toSparsity,
          t = h * g,
          r = t / d,
          n = d / g,
          k = 0,
          m = 0,
          p = 0,
          B = Array(h * g * h * g * 4),
          F = Array(h * g * h * g * 4),
          q = Array(d * d),
          u = 0;
        u < q.length;
        ++u
      )
        q[u] = 0
      u = Math.floor(h / 2)
      for (var D = 0.5 / g, x = 0.5 / d, e = 0.5 / t, G = 0; G < g; ++G)
        for (var N = Math.round(G * n), K = 0; K < g; ++K) {
          var S = Math.round(K * n),
            v = G / g,
            P = K / g
          v += D
          P += D
          for (var Q = 0; Q < h; ++Q) {
            var w = N + Q - u
            0 > w && (w += d)
            w >= d && (w -= d)
            for (var f = 0; f < h; ++f) {
              var A = k / t,
                L = m / t,
                l = S + f - u
              0 > l && (l += d)
              l >= d && (l -= d)
              var C = w / d,
                E = l / d
              L = 1 - L - 1 / t
              C += x
              E += x
              A += e
              L += e
              var T = G * h + Q,
                O = K * h + f
              O = g * h - O - 1
              T = O * g * h + T
              B[4 * T] = A
              B[4 * T + 1] = L
              B[4 * T + 2] = C
              B[4 * T + 3] = E
              E = q[l * d + w]++
              T = E % r
              C = w * r + T
              l = l * r + (E - T) / r
              l = d * r - 1 - l
              l = l * d * r + C
              F[4 * l] = A
              F[4 * l + 1] = L
              F[4 * l + 2] = v
              F[4 * l + 3] = P
              ++k >= t && ((k = 0), ++m)
              ++p
            }
          }
        }
      q = null
      var la = V.instance(b.weights)
      delete b.weights.data
      var ha = V.instance({
        width: t,
        isFloat: !0,
        array: new Float32Array(F),
        isPot: !0,
      })
      F = null
      var oa = V.instance({
        width: t,
        isFloat: !0,
        array: new Float32Array(B),
        isPot: !0,
      })
      B = null
      return {
        sa: !0,
        Ta: function () {
          return r
        },
        i: function () {
          ha.remove()
          oa.remove()
          la.remove()
        },
        M: function () {
          J.set('s23')
          la.b(1)
          oa.b(2)
          R.h(!1, !1)
        },
      }
    },
  },
  rb = {
    instance: function (b) {
      var d = b.kernelsCount,
        g = b.toSparsity,
        h = (g * b.toLayerSize) / b.fromLayerSize,
        t = V.instance(b.weights)
      return {
        sa: !0,
        Ta: function () {
          return h
        },
        qg: function () {
          return g
        },
        He: function () {
          return t
        },
        i: function () {
          t.remove()
        },
        M: function () {
          J.set('s26')
          J.D('u23', d)
          J.D('u24', g)
          J.D('u17', b.toLayerSize)
          J.D('u25', b.fromLayerSize)
          t.b(1)
          R.h(!1, !1)
        },
      }
    },
  },
  pb = {
    instance: function (b, d) {
      var g = b.fromLayerSize,
        h = b.toLayerSize,
        t = b.toSparsity,
        r = b.stride ? b.stride : 1,
        n = (t * h) / g,
        k = h < g,
        m = g / h,
        p = V.instance(b.weights),
        B =
          's48' +
          [g.toString(), h.toString(), t.toString(), r.toString(), d].join('_')
      J.pe(B) ||
        ((b = Xa(d)),
        (h = [
          { type: '1f', name: 'u17', value: h },
          { type: '1f', name: 'u30', value: r },
        ]),
        k && h.push({ type: '1f', name: 'u25', value: g }),
        (g = [(k ? n : t).toFixed(1), b]),
        k && g.push(m.toFixed(1)),
        J.Sc(k ? 's40' : 's39', B, g),
        J.F(
          B,
          h.concat([
            { type: '1i', name: 'u15', value: 0 },
            { type: '1i', name: 'u22', value: 1 },
            { type: '1i', name: 'u14', value: 3 },
          ])
        ))
      return {
        sa: !1,
        Ta: function () {
          return n
        },
        i: function () {
          p.remove()
        },
        M: function () {
          J.set(B)
          p.b(3)
          R.h(!1, !1)
        },
      }
    },
  },
  kb = {
    instance: function (b) {
      var d = b.hd ? b.hd : 3,
        g = b.Tc ? b.Tc : 64,
        h = b.kd ? b.kd : 64,
        t = b.Za ? !0 : !1
      b = { isFloat: !1, width: g, isPot: !1, isFlipY: !1 }
      var r = V.instance(b),
        n = V.instance(b),
        k = V.instance(b),
        m = V.instance(b),
        p = V.instance({ isFloat: !0, width: h, isPot: !1, isFlipY: !1 }),
        B = 1 / g
      return {
        process: function (F) {
          J.set('s36')
          m.l()
          R.h(t, !1)
          J.set('s37')
          for (var q = 0; q < d; ++q)
            r.l(),
              J.la('u8', B, 0),
              R.h(t, !1),
              k.l(),
              m.b(0),
              R.h(t, !1),
              n.l(),
              r.b(0),
              J.la('u8', 0, B),
              R.h(t, !1),
              m.l(),
              k.b(0),
              R.h(t, !1),
              q !== d - 1 && n.b(0)
          J.set('s38')
          p.l()
          F.b(0)
          n.b(1)
          m.b(2)
          R.h(t, !1)
          p.b(0)
        },
        Eb: function () {
          return p
        },
      }
    },
  },
  lb = {
    instance: function (b) {
      function d(m) {
        return V.instance({ isFloat: m, width: g.K, isPot: !1, isFlipY: !1 })
      }
      var g = Object.assign({ Ld: 0.1, xc: 9, K: 128, Za: !1 }, b),
        h = d(!1),
        t = [d(!1), d(!1), d(!1)],
        r = [d(!1), d(!1), d(!1)],
        n = d(!0),
        k = [h, r[0], r[1]]
      b = { u1: 0 }
      J.uc([
        {
          id: 's50',
          name: '_',
          c: 'uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.,1.,1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}',
          g: b,
          f: ['u1'],
          precision: 'lowp',
        },
        {
          id: 's51',
          name: '_',
          c: 'uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u32;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u32*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}'
            .replace('1.1111', Math.round((g.xc - 1) / 2).toFixed(2))
            .replace('2.2222', (1 / g.K).toFixed(6)),
          g: b,
          f: ['u1', 'u32'],
          precision: 'lowp',
        },
        {
          id: 's52',
          name: '_',
          c: 'uniform sampler2D u33,u34,u35,u36;const float f=1.1111;const vec3 g=vec3(1.,1.,1.);varying vec2 vv0;void main(){vec3 a=texture2D(u33,vv0).rgb;float c=texture2D(u34,vv0).r,d=texture2D(u35,vv0).r,h=texture2D(u36,vv0).r,i=a.r*a.r;vec3 b=vec3(c,d,h),j=max(g*f,abs(i-b*b)),k=sqrt(j);gl_FragColor=vec4(a.r,(a-b)/k);}'.replace(
            '1.1111',
            g.Ld.toFixed(4)
          ),
          g: { u33: 0, u34: 1, u35: 2, u36: 3 },
          f: ['u33', 'u34', 'u35', 'u36'],
          precision: 'highp',
        },
      ])
      return {
        process: function () {
          J.set('s50')
          h.S()
          R.h(g.Za, !1)
          J.set('s51')
          for (var m = 0; 3 > m; ++m)
            J.la('u32', 1, 0),
              t[m].l(),
              k[m].b(0),
              R.h(!1, !1),
              J.la('u32', 0, 1),
              r[m].l(),
              t[m].b(0),
              R.h(!1, !1)
          J.set('s52')
          n.l()
          h.b(0)
          r[0].b(1)
          r[1].b(2)
          r[2].b(3)
          R.h(!1, !1)
          n.b(0)
        },
        Eb: function () {
          return n
        },
      }
    },
  }
function ub(b, d) {
  b[d] = !0
  b.setAttribute(d, 'true')
}
function vb() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}
function wb() {
  var b = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
  return b && b.length && 2 < b.length
    ? [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3] || 0, 10)]
    : [0, 0, 0]
}
function xb() {
  var b = navigator.userAgent.toLowerCase()
  return -1 !== b.indexOf('safari') && -1 === b.indexOf('chrome') ? !0 : !1
}
function yb() {
  return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1
}
function zb(b) {
  if (!b) return b
  var d = null
  if (b.video) {
    var g = function (h) {
      return h && 'object' === typeof h ? Object.assign({}, h) : h
    }
    d = {}
    'undefined' !== typeof b.video.width && (d.width = g(b.video.width))
    'undefined' !== typeof b.video.height && (d.height = g(b.video.height))
    'undefined' !== typeof b.video.facingMode &&
      (d.facingMode = g(b.video.facingMode))
  }
  d = { audio: b.audio, video: d }
  'undefined' !== typeof b.deviceId && Ab(d, b.deviceId)
  return d
}
function Ab(b, d) {
  d &&
    ((b.video = b.video || {}),
    (b.video.deviceId = { exact: d }),
    b.video.facingMode && delete b.video.facingMode)
}
function Bb(b) {
  var d = b.video.width
  b.video.width = b.video.height
  b.video.height = d
  return b
}
function Db(b) {
  function d(q) {
    return [
      480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920,
    ].sort(function (u, D) {
      return Math.abs(u - q) - Math.abs(D - q)
    })
  }
  function g(q) {
    var u = zb(b)
    q = q(u)
    t.push(q)
    h(q)
  }
  function h(q) {
    if (q.video && q.video.facingMode && q.video.facingMode.exact) {
      var u = q.video.facingMode.exact
      q = zb(q)
      delete q.video.facingMode.exact
      q.video.facingMode.ideal = u
      t.push(q)
    }
  }
  var t = []
  if (!b || !b.video) return t
  h(b)
  if (b.video.width && b.video.height) {
    if (b.video.width.ideal && b.video.height.ideal) {
      var r = d(b.video.width.ideal).slice(0, 3),
        n = d(b.video.height.ideal).slice(0, 3),
        k = {},
        m = 0
      for (k.ha = void 0; m < r.length; k = { ha: k.ha }, ++m) {
        k.ha = r[m]
        var p = {},
          B = 0
        for (p.ga = void 0; B < n.length; p = { ga: p.ga }, ++B)
          if (
            ((p.ga = n[B]),
            k.ha !== b.video.width.ideal || p.ga !== b.video.height.ideal)
          ) {
            var F = Math.max(k.ha, p.ga) / Math.min(k.ha, p.ga)
            F < 4 / 3 - 0.1 ||
              F > 16 / 9 + 0.1 ||
              g(
                (function (q, u) {
                  return function (D) {
                    D.video.width.ideal = q.ha
                    D.video.height.ideal = u.ga
                    return D
                  }
                })(k, p)
              )
          }
      }
    }
    g(function (q) {
      return Bb(q)
    })
  }
  b.video.width &&
    b.video.height &&
    (b.video.width.ideal &&
      b.video.height.ideal &&
      g(function (q) {
        delete q.video.width.ideal
        delete q.video.height.ideal
        return q
      }),
    g(function (q) {
      delete q.video.width
      delete q.video.height
      return q
    }))
  b.video.facingMode &&
    (g(function (q) {
      delete q.video.facingMode
      return q
    }),
    b.video.width &&
      b.video.height &&
      g(function (q) {
        Bb(q)
        delete q.video.facingMode
        return q
      }))
  t.push({ audio: b.audio, video: !0 })
  return t
}
function Eb(b) {
  try {
    var d = window.matchMedia('(orientation: portrait)').matches ? !0 : !1
  } catch (h) {
    d = window.innerHeight > window.innerWidth
  }
  if (d && b && b.video) {
    d = b.video.width
    var g = b.video.height
    d &&
      g &&
      d.ideal &&
      g.ideal &&
      d.ideal > g.ideal &&
      ((b.video.height = d), (b.video.width = g))
  }
}
function Fb(b) {
  b.volume = 0
  ub(b, 'muted')
  if (xb()) {
    if (1 === b.volume) {
      var d = function () {
        b.volume = 0
        window.removeEventListener('mousemove', d, !1)
        window.removeEventListener('touchstart', d, !1)
      }
      window.addEventListener('mousemove', d, !1)
      window.addEventListener('touchstart', d, !1)
    }
    setTimeout(function () {
      b.volume = 0
      ub(b, 'muted')
    }, 5)
  }
}
function Gb(b, d, g, h) {
  function t(n) {
    r || ((r = !0), g(n))
  }
  var r = !1
  navigator.mediaDevices
    .getUserMedia(h)
    .then(function (n) {
      function k() {
        setTimeout(function () {
          if (b.currentTime) {
            var p = b.videoWidth,
              B = b.videoHeight
            if (0 === p || 0 === B) t('VIDEO_NULLSIZE')
            else {
              p && (b.style.width = p.toString() + 'px')
              B && (b.style.height = B.toString() + 'px')
              p = { be: null, Df: null, We: null }
              try {
                var F = n.getVideoTracks()[0]
                F &&
                  ((p.We = F),
                  (p.be = F.getCapabilities()),
                  (p.Df = F.getSettings()))
              } catch (q) {}
              xb() || vb()
                ? b.parentNode && null !== b.parentNode
                  ? (r || d(b, n, p),
                    setTimeout(function () {
                      b.play()
                    }, 100))
                  : (document.body.appendChild(b),
                    Fb(b),
                    r || d(b, n, p),
                    setTimeout(function () {
                      b.style.transform = 'scale(0.0001,0.0001)'
                      b.style.position = 'fixed'
                      b.style.bottom = '0px'
                      b.style.right = '0px'
                      Fb(b)
                      setTimeout(function () {
                        b.play()
                      }, 100)
                    }, 80))
                : r || d(b, n, p)
            }
          } else t('VIDEO_NOTSTARTED')
        }, 700)
      }
      function m() {
        b.removeEventListener('loadeddata', m, !1)
        var p = b.play()
        Fb(b)
        'undefined' === typeof p
          ? k()
          : p
              .then(function () {
                k()
              })
              .catch(function () {
                t('VIDEO_PLAYPROMISEREJECTED')
              })
      }
      'undefined' !== typeof b.srcObject
        ? (b.srcObject = n)
        : ((b.src = window.URL.createObjectURL(n)), (b.videoStream = n))
      Fb(b)
      b.addEventListener('loadeddata', m, !1)
    })
    .catch(function (n) {
      t(n)
    })
}
function Hb(b, d, g) {
  var h = yb() ? document.createElement('video') : !1
  if (h)
    if (yb()) {
      if (g && g.video) {
        if (vb()) {
          var t = wb()
          0 !== t[0] && (12 > t[0] || (12 === t[0] && 2 > t[1])) && Eb(g)
        }
        g.video.width &&
          g.video.width.ideal &&
          (h.style.width = g.video.width.ideal + 'px')
        g.video.height &&
          g.video.height.ideal &&
          (h.style.height = g.video.height.ideal + 'px')
      }
      ub(h, 'autoplay')
      ub(h, 'playsinline')
      g && g.audio ? (h.volume = 0) : ub(h, 'muted')
      Gb(
        h,
        b,
        function () {
          function r(k) {
            if (0 === k.length) d('INVALID_FALLBACKCONSTRAINTS')
            else {
              var m = k.shift()
              Gb(
                h,
                b,
                function () {
                  r(k)
                },
                m
              )
            }
          }
          var n = Db(g)
          r(n)
        },
        g
      )
    } else d && d('MEDIASTREAMAPI_NOTFOUND')
  else d && d('VIDEO_NOTPROVIDED')
}
var Ib = (function () {
    function b(D, x, e, G, N, K, S) {
      if (!q)
        if (S === K.length) N()
        else {
          switch (K[S]) {
            case 'A':
              e()
              break
            case 'D':
              D()
              break
            case 'S':
              x()
                .then(function (v, P) {
                  u.Id()
                  b(D, x, e, P ? null : G, N, K, ++S)
                })
                .catch(function (v) {
                  N()
                  throw v
                })
              return
            case 'R':
              G && G()
          }
          b(D, x, e, G, N, K, ++S)
        }
    }
    var d = {
        n: 5,
        Rb: 1,
        fd: 0,
        Ra: [35, 49],
        Ma: [2, 200],
        k: 0.7,
        Kf: 200,
        bf: 0.05,
      },
      g = -1,
      h = null,
      t = -1,
      r = -1,
      n = 0,
      k = -1,
      m = -1,
      p = 0,
      B = 0,
      F = d.Ma[1],
      q = !0,
      u = {
        De: function () {
          switch (g) {
            case -1:
              return -1
            case 0:
              return m + h.fd
            case 1:
              return p
          }
        },
        ue: function (D) {
          return Math.pow(Math.min(Math.max(k, 0), h.n - 1) / (h.n - 1), D || 1)
        },
        j: function (D) {
          h = Object.assign({}, d, D)
          k = m = h.Rb
          g = 0
          u.reset()
        },
        Id: function (D) {
          D = ('undefined' === typeof D ? Date.now() : D) || 0
          var x = Math.min(Math.max(D - B, h.Ma[0]), h.Ma[1])
          F = x
          B = D
          var e = -1 === t ? 0 : h.k
          t = Math.min(Math.max(1e3 / x, 5), 120) * (1 - e) + t * e
          D - r > h.Kf &&
            5 < ++n &&
            ((x = h.k),
            (k =
              k * (1 - x) +
              (t < h.Ra[0] ? m - 1 : t > h.Ra[1] ? m + 1 : m) * x),
            Math.abs(k - m) > 1 - h.bf &&
              ((x = Math.min(Math.max(Math.round(k), 0), h.n - 1)),
              x !== m && ((k = m = x), (t = (h.Ra[1] - h.Ra[0]) / 2))),
            (r = D))
        },
        ud: function (D, x, e, G, N, K) {
          q = !1
          b(D, x, e, G, N, K, 0)
        },
        stop: function () {
          q = !0
        },
        vf: function (D) {
          p = D
          g = 1
        },
        Jf: function () {
          g = 0
          u.reset()
        },
        reset: function () {
          F = d.Ma[1]
          r = t = -1
          n = 0
        },
        hg: function () {
          return F
        },
      }
    return u
  })(),
  Jb = (function () {
    function b() {
      g(x + u.Qb)
      e.port.postMessage('DONE')
    }
    function d() {
      var f = u.P
      v.isEnabled && (f = Math.max(f, v.P))
      S.Ga = 0 === f ? N(g) : N(h)
    }
    function g(f) {
      K.pa &&
        null !== D &&
        ((f -= x),
        (f = Math.min(Math.max(f, u.Bc[0]), u.Bc[1])),
        (x += f),
        r(),
        v.isEnabled && v.Ca && K.X && x - v.Mb > u.qc && (p(), (v.Mb = x)),
        D(x))
    }
    function h(f) {
      K.pa && (S.timeout = window.setTimeout(g.bind(null, f), u.P))
    }
    function t() {
      D = null
      K.pa = !1
      r()
    }
    function r() {
      S.Ga && (window.cancelAnimationFrame(S.Ga), (S.Ga = null))
      S.timeout && (window.clearTimeout(S.timeout), (S.timeout = null))
    }
    function n(f) {
      f && !K.X
        ? ((K.X = !0), G && Ib.Jf(), e.port.postMessage('STOP'), cb.Jd(!0), d())
        : !f &&
          K.X &&
          ((K.X = !1), G && Ib.vf(1), cb.Jd(!1), e.port.postMessage('START'))
    }
    function k(f) {
      f.target.hidden ? Q() : P()
    }
    function m(f, A, L) {
      A = f.createShader(A)
      f.shaderSource(A, L)
      f.compileShader(A)
      return A
    }
    function p() {
      v.Ca = !1
      var f = v.ca,
        A = v.Va,
        L = v.Wa,
        l = v.V
      f.uniform1f(v.Pc, Math.random())
      v.qa ? A.beginQueryEXT(l, L) : f.beginQuery(l, L)
      f.drawElements(f.POINTS, 1, f.UNSIGNED_SHORT, 0)
      v.qa ? A.endQueryEXT(l) : f.endQuery(l)
      cb.flush()
      F()
        .then(function (C) {
          C = (u.Nd * u.oc * 1e3) / C
          v.ob = (v.ob + 1) % u.va
          v.Ob[v.ob] = C
          if (++v.bd > u.va) {
            v.ab.set(v.Ob)
            v.ab.sort(function (T, O) {
              return T - O
            })
            C = v.ab[Math.floor(u.va / 2)]
            v.Oa = Math.max(v.Oa, C)
            var E = 0
            for (
              E = 0;
              E < v.jc &&
              !(C > v.Oa * (1 - (u.pc[E] + u.Od * (E >= v.mb ? 1 : -1))));
              ++E
            )
              E === v.jc - 1 && ++E
            E !== v.mb &&
              (console.log('THERMAL THROTTLING LEVEL = ' + E.toString()),
              (v.mb = E),
              (v.P = 0 === E ? 0 : u.Md[E - 1]),
              u.nc && u.nc(E))
          }
          v.Ca = !0
        })
        .catch(function () {
          v.Ca = !0
        })
    }
    function B(f) {
      var A = v.ca,
        L = v.Va,
        l = v.Wa,
        C = !1
      v.qa
        ? (C = L.ag(l, L.QUERY_RESULT_AVAILABLE_EXT))
        : (C = A.getQueryParameter(l, A.QUERY_RESULT_AVAILABLE))
      A = A.getParameter(L.GPU_DISJOINT_EXT)
      C ? f(!A) : setTimeout(B.bind(null, f), 0.1)
    }
    function F() {
      return new Promise(function (f, A) {
        B(function (L) {
          if (L) {
            L = v.ca
            var l = v.Va,
              C = v.Wa
            L = v.qa
              ? l.getQueryObjectEXT(C, l.QUERY_RESULT_EXT)
              : L.getQueryParameter(C, L.QUERY_RESULT)
            f(L)
          } else A()
        })
      })
    }
    var q = {
        Zc: !0,
        Bc: [1, 200],
        Qb: 20,
        P: 0,
        Pd: !1,
        oc: 50,
        Nd: 240,
        qc: 3e3,
        va: 3,
        pc: [0.2, 0.35, 0.5],
        Od: 0.05,
        Md: [8, 20, 40],
        nc: null,
      },
      u = null,
      D = null,
      x = 0,
      e = null,
      G = !1,
      N = null,
      K = { ja: !1, X: !0, Lb: !1, Kb: !1, Jb: !1, pa: !1 },
      S = { Ga: null, timeout: null },
      v = {
        isEnabled: !1,
        Ca: !1,
        ca: null,
        Va: null,
        Wa: null,
        V: null,
        Pc: null,
        qa: !0,
        mb: 0,
        jc: 0,
        P: 0,
        Mb: 0,
        bd: 0,
        Ob: null,
        ab: null,
        ob: 0,
        Oa: 0,
      },
      P = n.bind(null, !0),
      Q = n.bind(null, !1),
      w = {
        j: function (f) {
          u = Object.assign(q, f)
          Object.assign(K, { X: !0, ja: !0, pa: !1 })
          N = window.requestPostAnimationFrame || window.requestAnimationFrame
          if (u.Pd) {
            f = document.createElement('canvas')
            f.setAttribute('width', '1')
            f.setAttribute('height', '1')
            var A = { antialias: !1 }
            f = f.getContext('webgl2', A) || f.getContext('webgl', A)
            if (
              (A =
                f.getExtension('EXT_disjoint_timer_query') ||
                f.getExtension('EXT_disjoint_timer_query_webgl2'))
            ) {
              v.ca = f
              v.Va = A
              v.isEnabled = !0
              v.qa = A.beginQueryEXT ? !0 : !1
              var L = m(
                  f,
                  f.VERTEX_SHADER,
                  'attribute vec4 a0;void main(){gl_Position=a0;}'
                ),
                l = m(
                  f,
                  f.FRAGMENT_SHADER,
                  'precision lowp float;uniform float u37;void main(){vec4 a=u37*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}'.replace(
                    '666',
                    u.oc.toString()
                  )
                ),
                C = f.createProgram()
              f.attachShader(C, L)
              f.attachShader(C, l)
              f.linkProgram(C)
              L = f.getAttribLocation(C, 'a0')
              v.Pc = f.getUniformLocation(C, 'u37')
              f.useProgram(C)
              f.enableVertexAttribArray(L)
              C = f.createBuffer()
              f.bindBuffer(f.ARRAY_BUFFER, C)
              f.bufferData(
                f.ARRAY_BUFFER,
                new Float32Array([0.5, 0.5, 0, 1]),
                f.STATIC_DRAW
              )
              f.vertexAttribPointer(L, 4, f.FLOAT, !1, 16, 0)
              C = f.createBuffer()
              f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, C)
              f.bufferData(
                f.ELEMENT_ARRAY_BUFFER,
                new Uint16Array([0]),
                f.STATIC_DRAW
              )
              f.disable(f.DEPTH_TEST)
              f.disable(f.DITHER)
              f.disable(f.STENCIL_TEST)
              f.viewport(0, 0, 1, 1)
              C = v.qa ? A.createQueryEXT() : f.createQuery()
              v.Wa = C
              v.V = A.TIME_ELAPSED_EXT || f.TIME_ELAPSED
              v.mb = 0
              v.jc = u.pc.length
              v.P = 0
              v.Mb = -u.qc
              v.Ob = new Float32Array(u.va)
              v.ab = new Float32Array(u.va)
              v.Oa = 0
              v.ob = 0
              v.bd = 0
              v.Ca = !0
            }
          }
          if (u.Zc) {
            f = !1
            try {
              if ('undefined' === typeof SharedWorker) {
                var E = URL.createObjectURL(
                    new Blob(
                      [
                        "let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " +
                          u.Qb.toString() +
                          ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);",
                      ],
                      { type: 'text/javascript' }
                    )
                  ),
                  T = new Worker(E)
                T.addEventListener('message', b)
                e = { md: T, port: T }
                K.Lb = !0
              } else {
                var O = URL.createObjectURL(
                    new Blob(
                      [
                        "let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " +
                          u.Qb.toString() +
                          ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()",
                      ],
                      { type: 'text/javascript' }
                    )
                  ),
                  la = new SharedWorker(O)
                la.port.start()
                la.port.addEventListener('message', b)
                e = { md: la, port: la.port }
                K.Kb = !0
              }
              f = !0
            } catch (ha) {}
            f &&
              ('onvisibilitychange' in document
                ? document.addEventListener('visibilitychange', k)
                : (window.addEventListener('blur', Q),
                  window.addEventListener('focus', P)),
              (K.Jb = !0))
          }
          G = 'undefined' !== typeof Ib
        },
        i: function () {
          t()
          K.Jb &&
            ('onvisibilitychange' in document
              ? document.removeEventListener('visibilitychange', k)
              : (window.removeEventListener('blur', Q),
                window.removeEventListener('focus', P)),
            (K.Jb = !1))
          K.Kb
            ? (e.port.close(), (K.Kb = !1))
            : K.Lb && (e.md.terminate(), (K.Lb = !1))
          Object.assign(K, { X: !0, ja: !1, pa: !1 })
          D = null
        },
        Bg: function () {
          return K.X
        },
        update: function (f) {
          Object.assign(u, f)
        },
        ud: function (f) {
          K.ja || w.j({})
          r()
          K.pa = !0
          D = f
          K.X && d()
        },
        stop: t,
      }
    return w
  })(),
  Kb = (function () {
    var b = {
        jd: 4,
        fb: [1.5, 1.5, 2],
        Z: [0.1, 0.1, 0.1],
        wd: 1,
        K: -1,
        ea: -1,
        Ff: 2,
        af: 1,
        yd: !0,
        me: 0.8,
      },
      d = null,
      g = [],
      h = [0],
      t = [0.5, 0.5, 1]
    return {
      j: function (r) {
        d = Object.assign({}, b, r)
        g.splice(0)
        r = d.fb[0] * d.Z[0]
        var n = d.fb[1] * d.Z[1],
          k = 1 / (1 + d.fb[2] * d.Z[2]),
          m = d.wd * Math.min(d.K, d.ea),
          p = m / d.K
        m /= d.ea
        var B = 0.5 * d.me
        B *= B
        for (var F = 0; F < d.jd; ++F) {
          var q = Math.pow(k, F),
            u = p * q,
            D = m * q
          q = u * d.af
          var x = u * r,
            e = D * n
          u /= 2
          D /= 2
          for (
            var G = 1 + (1 - u - u) / x, N = 1 + (1 - D - D) / e, K = 0;
            K < N;
            ++K
          )
            for (var S = D + K * e, v = S - 0.5, P = 0; P < G; ++P) {
              var Q = u + P * x,
                w = Q - 0.5
              w * w + v * v > B || g.push([Q, S, q])
            }
        }
        d.yd &&
          g.sort(function (f, A) {
            var L = f[0] - 0.5
            f = f[1] - 0.5
            var l = A[0] - 0.5
            A = A[1] - 0.5
            return L * L + f * f - (l * l + A * A)
          })
      },
      get: function (r) {
        var n = g.length
        if (0 === n) return t
        for (; r >= h.length; ) h.push(0)
        h[r] >= n && (h[r] = 0)
        var k = g[Math.floor(h[r])]
        h[r] = (h[r] + 1 / d.Ff) % n
        return k
      },
      reset: function () {
        for (var r = g.length / h.length, n = 0; n < h.length; ++n)
          h[n] = Math.floor(n * r)
      },
    }
  })(),
  Lb = {
    Bb: function () {
      return Date.now()
    },
    dg: function () {
      return performance.now()
    },
  },
  Mb = (function () {
    var b = 0,
      d = null,
      g = null,
      h = null,
      t = null
    return {
      j: function (r, n) {
        b = r.length
        d = n
        g = r
        h = new Float32Array(b)
        t = new Float32Array(b)
      },
      Ee: function () {
        return t
      },
      Ef: function (r, n, k) {
        r.forEach(function (m, p) {
          var B = Math.min(1, g[p] * k * (n + 0.33 * (1 - n)))
          m = B * m + (1 - B) * h[p]
          h[p] = m
          m = d[p](m)
          m = Math.min(Math.max(m, 0), 1)
          t[p] = m
        })
      },
    }
  })(),
  Z = {
    VERSION: '1.3.3',
    ma: [],
    rb: !1,
    sb: !1,
    qb: !1,
    Fa: !0,
    Ea: !1,
    ready: !1,
    initialized: !1,
  },
  Nb = {
    facingMode: 'user',
    idealWidth: 800,
    idealHeight: 600,
    minWidth: 240,
    maxWidth: 1280,
    minHeight: 240,
    maxHeight: 1280,
    rotate: 0,
    isAudio: !0,
    disableRendering: !1,
  },
  c = {
    neuralNetworkPath: 'jeelizFaceExpressionsNNC.json',
    rc: '../../',
    P: 0,
    width: 512,
    height: 512,
    Gf: 40,
    xd: [0.6, 5.8],
    Z: [0.11, 0.11, 0.3],
    tf: 0.7,
    rf: 2,
    sf: [2, 2, 2],
    Qa: !0,
    re: 0.1,
    threshold: 0.8,
    Gd: 0.7,
    Hd: 0.03,
    le: 0.06,
    qe: 0.02,
    Sd: [1, 0.05],
    Nf: 10,
    Je: !1,
    pb: [2, 7],
    J: { Qc: [3, 7], quality: [0, 6], position: [0, 7], rotation: [5, 7] },
    Tb: 11,
    gd: 1,
    Xe: 1,
    Td: [0.1, 0.01],
    mf: [0.4, -0.7, -0.4],
    pf: [0.3, 0, 0],
    je: !1,
    Ud: 0.001,
    vc: [Math.PI / 10, Math.PI / 6],
    od: [0.1, 0.4],
    pd: [0.009, 0.02],
    qd: [0.1, 0.2],
    Sb: 5,
    Rc: 0.1,
    Rd: [0.2, 0.2, 0.15, 0.15, 0.15, 0.15, 0.5, 0.2, 0.3, 0.3, 0.2],
    Ye: [
      Wa.bind(null, 0.1, 0.7),
      Wa.bind(null, 0.1, 0.7),
      Wa.bind(null, 0.05, 0.4),
      Wa.bind(null, 0.05, 0.4),
      Wa.bind(null, 0.05, 0.6),
      Wa.bind(null, 0.05, 0.6),
      Wa.bind(null, 0.1, 0.5),
      Wa.bind(null, 0.3, 0.7),
      Wa.bind(null, 0.7, 0.8),
      Wa.bind(null, 0.7, 0.8),
      Wa.bind(null, 0.15, 0.6),
    ],
  }
Z.get_nMorphs = function () {
  return c.Tb
}
var Ob = null,
  Pb = null,
  Qb = null,
  Rb = []
function Sb() {
  function b() {
    1 === ++la &&
      (Mb.j(c.Rd, c.Ye),
      d(),
      (Z.ready = !0),
      Z.ma.forEach(function (z) {
        z()
      }),
      Z.ma.splice(0, Z.ma.length),
      g(),
      (la = 0))
  }
  function d() {
    K = new Float32Array(c.Tb)
    S = new Float32Array(c.Tb)
    v = new Uint8Array(e * e * 4)
    Z.get_morphTargetInfluences = function () {
      return K
    }
    Z.get_morphTargetInfluencesStabilized = function () {
      return Mb.Ee()
    }
    Z.set_morphUpdateCallback = function (z) {
      P = z
    }
    Z.get_rotation = function () {
      return f
    }
    Z.get_positionScale = function () {
      var z = G.Ed.Be()
      z.yb(!1)
      z = z.$b()
      l[0] = 1 - z[1][0]
      l[1] = z[2][0]
      l[2] = z[3][0] * E.G[0]
      return l
    }
    Z.get_rotationStabilized = function () {
      return L
    }
    Z.switch_sleep = function (z) {
      oa !== ha.dc || z ? (oa = z ? ha.dc : ha.play) : g()
    }
    Z.on_detect = function (z) {
      z(y.W)
      y.Vb.push(z)
    }
    Z.is_detected = function () {
      return y.W
    }
    Z.set_animateDelay = function (z) {
      D = z
      Jb.update({ P: D })
    }
  }
  function g() {
    oa !== ha.play && ((oa = ha.play), Jb.stop(), h())
  }
  function h() {
    var z, M
    return Ra(
      new Qa(
        new Ga(function (ba) {
          switch (ba.a) {
            case 1:
              a: {
                if ('VIDEO' === O.element.nodeName) {
                  var U = O.element.currentTime - Ba
                  0 > U && (Ba = O.element.currentTime)
                  if (1e3 * U < c.Nf) break a
                  Ba += U
                }
                O.ta.refresh()
                U = za.Nc()
                ;(U[0] === O.G[0] && U[1] === O.G[1]) || p()
              }
              z = Ib.De()
              M = 0
            case 2:
              if (!(M < z)) {
                ba.a = 4
                break
              }
              U = G
              var ka = x
              J.set('s54')
              db.aa()
              U.Xa.S()
              O.ta.b(0)
              U.kb.b(1)
              c.Qa && J.D('u38', C)
              R.h(!1, !1)
              U.Xa.b(0)
              ka.M(U.Xa)
              c.Je
                ? (U = V.lf(Q, v).then(t))
                : (V.kf(Q, v), t(), (U = Promise.resolve()))
              ba.a = 3
              return { value: U }
            case 3:
              ++M
              ba.a = 2
              break
            case 4:
              Nb.disableRendering ||
                ((U = G),
                db.aa(),
                N.S(),
                J.set('s57'),
                c.Qa && J.D('u38', C),
                U.kb.b(0),
                R.h(!1, !1)),
                (U = Ib.ue()),
                (T = 3 * (1 - U) + 1 * U),
                Ib.Id(),
                Z.Fa &&
                  (db.If(),
                  J.set('s53'),
                  O.ta.b(0),
                  R.h(!1, !1),
                  H.enable(H.BLEND),
                  H.blendFunc(H.SRC_ALPHA, H.ONE),
                  N.b(0),
                  R.h(!1, !1),
                  H.disable(H.BLEND)),
                H.flush(),
                oa !== ha.dc && Jb.ud(h),
                (ba.a = 0)
          }
        })
      )
    )
  }
  function t() {
    k()
    if (!c.je && y.W) {
      for (var z = 0, M = 0; 3 > M; ++M)
        (z = n(M + c.J.rotation[0], c.J.rotation[1])),
          (z = (2 * z - 1) * c.mf[M]),
          (z += c.pf[M]),
          (w[M] = z)
      c.Qa && ((M = c.re), (C = C * (1 - M) + (-z + C) * M))
    }
    r()
    z = Lb.Bb()
    M = z - ca.dd
    var ba = n(c.J.quality[0], c.J.quality[1])
    ca.nd = Wa(c.od[0], c.od[1], ba)
    ba = n(c.J.position[0], c.J.position[1])
    var U = n(c.J.position[0] + 1, c.J.position[1]),
      ka = n(c.J.position[0] + 2, c.J.position[1])
    ca.vd = 1 - Wa(c.qd[0], c.qd[1], Math.sqrt(ba * ba + U * U + ka * ka) / M)
    ba = ca.ra[0] - w[0]
    U = ca.ra[1] - w[1]
    ka = ca.ra[2] - w[2]
    M = Math.sqrt(ba * ba + U * U + ka * ka) / M
    ca.ra[0] = w[0]
    ca.ra[1] = w[1]
    ca.ra[2] = w[2]
    ca.rd = 1 - Wa(c.pd[0], c.pd[1], M)
    ca.T = ca.nd * ca.vd * ca.rd
    ca.dd = z
    ca.cd[ca.Nb] = ca.T
    ca.Nb = (ca.Nb + 1) % c.Sb
    for (z = 0; z < c.Sb; ++z) ca.T = Math.min(ca.cd[z], ca.T)
    Mb.Ef(K, ca.T, T, S)
    P && P(ca.T, T)
    if (y.W) {
      z = ca.T
      M = c.Td
      z = T * (M[0] * (1 - z) + M[1] * z)
      for (M = 0; 3 > M; ++M) (f[M] = z * w[M] + (1 - z) * f[M]), (L[M] = f[M])
      L[2] -= C
    } else
      (z = Lb.Bb() * c.Ud),
        (A[0] = c.vc[0] * Math.sin(z)),
        (A[1] = c.vc[1] * Math.cos(z)),
        (L[0] = A[0]),
        (L[1] = A[1]),
        (L[2] = A[2])
  }
  function r() {
    var z = n(c.J.Qc[0], c.J.Qc[1])
    y.Ya = c.Rc * z + (1 - c.Rc) * y.Ya
    y.Ya > c.Gd + c.Hd && !y.W
      ? (y.Vb.forEach(function (M) {
          M(!0)
        }),
        (y.W = !0))
      : y.Ya < c.Gd - c.Hd &&
        y.W &&
        (y.Vb.forEach(function (M) {
          M(!1)
        }),
        (y.W = !1),
        (C = 0))
  }
  function n(z, M) {
    z += e * M
    return (v[4 * z] + v[4 * z + 1] + v[4 * z + 2] + v[4 * z + 3]) / 1020
  }
  function k() {
    K.forEach(function (z, M) {
      if (y.W) {
        var ba = (c.gd + M) % e,
          U = c.Xe + Math.floor((c.gd + M) / e)
        U = e - 1 - U
        ba += e * U
        U = v.slice(4 * ba, 4 * ba + 4)
        ba = (U[0] + U[1] + U[2] + U[3]) / 1020
        U =
          c.qe *
          Math.sqrt(
            (U[0] * U[0] + U[1] * U[1] + U[2] * U[2] + U[3] * U[3]) / 1020 -
              ba * ba
          )
        K[M] = z > ba - U && z < ba + U ? z : ba
      } else K[M] = 0
    })
  }
  function m(z) {
    x = new tb({
      bb: z.layers,
      Zb: 'gpuRaw',
      Wb: function (M) {
        var ba = G
        ba.kb.Bd(1)
        H.viewport(0, 0, 1, 1)
        J.set('s55')
        c.Qa && J.D('u38', C)
        J.D('u39', ca.T)
        J.Af('u40', Kb.get(0))
        R.h(!1, !1)
        ba.Ed.Bd(1)
        J.set('s56')
        J.D('u39', ca.T)
        ba.kb.b(0)
        R.h(!1, !1)
        Q = M
      },
    })
    z = x.Ae()
    z !== u && ((u = z), B(), G.Xa.resize(u, u), F())
    e = x.Ge()
    b()
  }
  function p() {
    var z = za.Nc()
    O.G[0] = z[0]
    O.G[1] = z[1]
    eb.Sa().width = z[0]
    eb.Sa().height = z[1]
    c.width = z[0]
    c.height = z[1]
    z = O.Mf
    var M = O.G[1] / O.G[0],
      ba = eb.R() / eb.u()
    M > ba
      ? 1 >= M
        ? (z[0] *= M)
        : (z[1] /= M)
      : ((z[0] *= M), (M = 1 / ba), (z[0] *= M), (z[1] *= M))
    z[1] *= ba
    J.F('s57', [{ name: 'u41', type: '1f', value: ba }])
    O.v[0] = 0
    O.v[1] = 0
    O.v[2] = 0
    O.v[3] = 0
    switch (Nb.rotate) {
      case 0:
        O.v[0] = z[0]
        O.v[3] = z[1]
        break
      case 180:
        O.v[0] = -z[0]
        O.v[3] = -z[1]
        break
      case 90:
        O.v[1] = z[0]
        O.v[2] = -z[1]
        break
      case -90:
        ;(O.v[1] = -z[0]), (O.v[2] = z[1])
    }
    z = [{ type: 'mat2', name: 'u42', value: O.v }]
    J.F('s54', z)
    J.F('s53', z)
    J.F('s57', [
      {
        type: 'mat2',
        name: 'u42',
        value: 90 === Math.abs(Nb.rotate) ? [0, -O.v[1], -O.v[2], 0] : O.v,
      },
    ])
  }
  function B() {
    E.K = c.width
    E.ea = c.height
    Kb.j({ fb: c.sf, jd: c.rf, K: E.K, ea: E.ea, wd: c.tf, Z: c.Z, yd: !0 })
    E.G = [1, E.K / E.ea]
  }
  function F() {
    J.F('s53', [{ type: '1i', name: 'u1', value: 0 }])
    J.F('s54', [
      { type: '1i', name: 'u1', value: 0 },
      { type: '1i', name: 'u43', value: 1 },
      { type: '1f', name: 'u38', value: 0 },
      { type: '2f', name: 'u44', value: E.G },
    ])
    J.F('s57', [
      { type: '1i', name: 'u43', value: 0 },
      { type: '2f', name: 'u44', value: E.G },
      { type: '1f', name: 'u38', value: 0 },
      { type: '3f', name: 'u45', value: [0, 0.5, 1] },
    ])
    J.F('s55', [
      { type: '1i', name: 'u46', value: 0 },
      { type: '1i', name: 'u43', value: 1 },
      { type: '1f', name: 'u47', value: c.xd[0] },
      { type: '1f', name: 'u48', value: c.xd[1] },
      { type: '1f', name: 'u49', value: c.Gf },
      { type: '1f', name: 'u50', value: c.threshold },
      { type: '1f', name: 'u51', value: c.le },
      { type: '1f', name: 'u38', value: 0 },
      {
        type: '3f',
        name: 'u52',
        value: [c.Z[0] * E.G[0], c.Z[1] * E.G[1], c.Z[2]],
      },
    ])
    J.F('s56', [
      { type: '1i', name: 'u1', value: 0 },
      { type: '1i', name: 'u6', value: 1 },
      { type: '2f', name: 'u53', value: c.Sd },
    ])
  }
  function q(z) {
    var M = new Float32Array([0, 0.5, 0.5, 0])
    z.Xa = V.instance({ isPot: !0, isFloat: !1, width: u })
    M = { width: 1, height: 1, isFloat: !0, isPot: !1, array: M }
    z.kb = ib.instance(M)
    z.Ed = ib.instance(M)
  }
  var u = 64,
    D = c.P,
    x = null,
    e = 0,
    G = {},
    N = null,
    K = null,
    S = null,
    v = null,
    P = null,
    Q = null,
    w = [0, 0, 0],
    f = [0, 0, 0],
    A = [0, 0, 0],
    L = [0, 0, 0],
    l = [0, 0, 0],
    C = 0,
    E = { G: null, K: -1, ea: -1 },
    T = 1,
    O = {
      Mf: [0.5, 0.5],
      v: [0.5, 0, 0, 0.5],
      element: null,
      ta: null,
      G: [-1, -1],
    },
    la = 0,
    ha = { fe: -4, Ze: -3, Cg: -2, dc: -1, play: 0 },
    oa = ha.Ze,
    y = { Ya: 0, W: !1, Vb: [] },
    ca = {
      T: 1,
      vd: 1,
      nd: 1,
      rd: 1,
      ra: [0, 0, 0],
      dd: Lb.Bb(),
      cd: new Float32Array(c.Sb),
      Nb: 0,
    },
    Ba = 0,
    za = {
      j: function () {
        O.ta = V.instance({ A: O.element, isPot: !1, isFloat: !1, isFlipY: !0 })
        N = V.instance({ isPot: !1, isFloat: !1, width: E.K, height: E.ea })
        q(G)
        Jb.j({ Zc: !1, P: D })
        Ib.j({ Rb: 0, n: c.pb[1] - c.pb[0] + 1, fd: c.pb[0] })
        Qb
          ? m(Qb)
          : Ua(function (z) {
              z = JSON.parse(z)
              m(z)
            })
      },
      i: function () {
        Jb.stop()
        x && (x.i(), (x = null))
        oa = ha.fe
      },
      ce: function (z) {
        Z.rb && Z.rb()
        var M = {
          video: {
            facingMode: { ideal: Nb.facingMode },
            width: { min: Nb.minWidth, max: Nb.maxWidth, ideal: Nb.idealWidth },
            height: {
              min: Nb.minHeight,
              max: Nb.maxHeight,
              ideal: Nb.idealHeight,
            },
          },
          audio: Nb.isAudio,
        }
        Ab(M, Nb.deviceId)
        Hb(
          function (ba, U) {
            Ob = U
            Z.sb && Z.sb()
            z(ba)
          },
          function () {
            window.a && window.a('WEBCAM_UNAVAILABLE')
          },
          M
        )
      },
      ed: function (z, M) {
        J.uc([
          {
            id: 's53',
            name: '_',
            ua: 'attribute vec2 a0;uniform mat2 u42;varying vec2 vv0;const vec2 f=vec2(.5,.5);void main(){gl_Position=vec4(a0,0.,1.),vv0=f+u42*a0;}',
            Ha: ['a0'],
            xa: [2],
            c: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
            f: ['u1', 'u42'],
            precision: 'lowp',
          },
          {
            id: 's54',
            name: '_',
            c: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
            ua: 'attribute vec2 a0;uniform sampler2D u43;uniform mat2 u42;uniform vec2 u44;uniform float u38;const vec2 e=vec2(.25,.5),f=vec2(.5,.5);varying vec2 vv0;void main(){vec4 a=texture2D(u43,e);vec2 d=a.gb,h=a.a*u44;float b=cos(u38),c=sin(u38);vec2 i=mat2(b,c,-c,b)*a0,j=d+i*.5*h,k=j-.5;vv0=f+2.*u42*k,gl_Position=vec4(a0,0.,1.);}',
            Ha: ['a0'],
            xa: [2],
            f: ['u1', 'u43', 'u44', 'u42', 'u38'],
            precision: 'lowp',
          },
          {
            id: 's55',
            name: '_',
            ua: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
            c: 'uniform sampler2D u46,u43;uniform vec3 u40,u52;uniform float u47,u48,u49,u50,u39,u51,u38;varying vec2 vv0;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 h=texture2D(u46,vec2(.4375,.9375)),i=texture2D(u46,vec2(.5625,.9375));float j=dot(h-i,e);bool k=j>u50;vec4 a=texture2D(u43,vec2(.5,.5));k?a.r=2.:a.r>u49?a.r=0.:a.r>1.9&&(a.a>u48||a.a<u47)?a.r=0.:a.r>1.9?a.r+=1.:0.;if(a.r<.9)a.gba=u40,a.r=1.;else{float l=dot(e,texture2D(u46,vec2(.0625,.9375))),m=dot(e,texture2D(u46,vec2(.1875,.9375))),d=dot(e,texture2D(u46,vec2(.3125,.9375))),f=cos(u38),g=sin(u38);vec2 c=mat2(f,g,-g,f)*vec2(l,m);float b;a.r>1.9?(b=1.-u39,b*=1.-step(abs(c.x),u51)*step(abs(c.y),u51)*step(abs(d),u51)):(b=1.,a.r=0.),a.gba+=vec3(c,d)*u52*a.a*b;}gl_FragColor=a;}',
            f: 'u46 u43 u40 u47 u48 u49 u50 u52 u39 u51 u38'.split(' '),
          },
          {
            id: 's57',
            name: '_',
            ua: 'attribute vec2 a0;uniform mat2 u42;varying vec2 vv0;const vec2 f=vec2(.5,.5);void main(){gl_Position=vec4(a0,0.,1.),vv0=f+u42*a0;}',
            c: 'uniform sampler2D u43;uniform vec3 u45;uniform vec2 u44;uniform float u38,u41;varying vec2 vv0;const vec2 l=vec2(1.,1.),e=vec2(.5,.5),m=vec2(.25,.5);void main(){float f=cos(u38),g=-sin(u38);mat2 h=mat2(f,g/u41,-g*u41,f);vec2 b=h*(vv0-e);vec4 i=texture2D(u43,m);vec2 c=h*(i.gb-e);float n=i.a;vec2 d=.5*n*u44,o=c+d,p=c-d,j=step(p,b)*step(b,o);float q=j.x*j.y;vec2 a=abs(c-b)/d;a=pow(a,3.*l),gl_FragColor=vec4(q*u45*max(a.x,a.y),1.);}',
            f: 'u43 u44 u45 u42 u38 u41'.split(' '),
            precision: 'lowp',
          },
          {
            id: 's56',
            name: '_',
            c: 'uniform sampler2D u1,u6;uniform vec2 u53;uniform float u39;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);float c=mix(u53.x,u53.y,u39);gl_FragColor=mix(b,a,c*f);}',
            f: ['u1', 'u6', 'u53', 'u39'],
          },
        ])
        O.element = z
        Pb = O.element
        p()
        B()
        F()
        za.j()
        M && M()
      },
      Nc: function () {
        var z = [-1, -1],
          M = O.element
        'VIDEO' === M.nodeName
          ? ((z[0] = M.videoWidth), (z[1] = M.videoHeight))
          : ((z[0] = M.width), (z[1] = M.height))
        90 === Math.abs(Nb.rotate) && z.reverse()
        return z
      },
    }
  Rb.push(za)
  return za
}
Z.onLoad = function (b) {
  Z.ready ? b() : Z.ma.push(b)
}
Z.switch_displayVideo = function (b) {
  Z.Fa = b
  Z.Ea && (Z.Ea.style.display = Z.Fa ? 'block' : 'none')
}
Z.onWebcamAsk = function (b) {
  Z.rb = b
}
Z.onContextLost = function (b) {
  Z.qb = b
}
Z.onWebcamGet = function (b) {
  Z.sb = b
}
Z.destroy = function () {
  Jb.i()
  Pb &&
    Pb.srcObject &&
    Pb.srcObject.getTracks().forEach(function (b) {
      b.stop()
    })
  Rb.forEach(function (b) {
    b.i()
  })
  Rb.splice(0)
  eb.i()
  Z.switch_displayVideo(!1)
  Z.initialized = !1
  Z.ma.splice(0)
}
Z.set_size = function (b, d) {
  c.width = b
  c.height = d
}
Z.get_size = function () {
  return { width: c.width, height: c.height }
}
Z.get_videoStream = function () {
  return Ob
}
Z.get_video = function () {
  return Pb
}
Z.get_cv = function () {
  return eb.Sa()
}
Z.set_color = function (b) {
  J.F('s57', [{ type: '3f', name: 'u45', value: b }])
}
Z.init = function (b) {
  var d = Sb(),
    g =
      b.callbackReady ||
      function (r) {
        console.log('ERR:', r)
      },
    h = b.callbackReady ? b.callbackReady.bind(null, !1) : null
  if (b.canvasId || b.canvas) {
    var t = b.canvas ? b.canvas : document.getElementById(b.canvasId)
    if (t)
      if (Z.initialized) g('ALREADY_INITIALIZED')
      else {
        Z.initialized = !0
        window.a = g
          ? function (r) {
              g(r)
              window.a = !1
            }
          : !1
        b.NNCPath && (c.rc = b.NNCPath)
        'undefined' !== typeof b.NNC &&
          (Qb = 'string' === typeof b.NNC ? JSON.parse(b.NNC) : b.NNC)
        h && Z.ma.push(h)
        if (
          !eb.j({
            Ka: t,
            width: c.width,
            height: c.height,
            debug: !1,
            Wc: !1,
            Ub: function () {
              Z.qb && Z.qb()
            },
            premultipliedAlpha: !1,
          })
        )
          return g('GL_INCOMPATIBLE'), !1
        Z.Ea = eb.Sa()
        Z.Fa || (Z.Ea.style.display = 'none')
        b.videoSettings && b.videoSettings.videoElement
          ? d.ed(b.videoSettings.videoElement, !1)
          : (b.videoSettings && Object.assign(Nb, b.videoSettings),
            d.ce(function (r) {
              d.ed(r, !1)
            }))
        return !0
      }
    else g('INVALID_CANVAS')
  } else g('NO_CANVASID')
}
const JEELIZFACEEXPRESSIONS = Z
if (typeof module !== 'undefined') {
  module.exports = JEELIZFACEEXPRESSIONS
}
