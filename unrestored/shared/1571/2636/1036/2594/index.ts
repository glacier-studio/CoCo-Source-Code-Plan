/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2594
 */

var r = require(/* 2595 */"./2595")
var o = require(/* 2596 */"./2596")
var i = require(/* 2597 */"./2597")
var a = require(/* 2598 */"./2598/index")
var s = require(/* 1464 */"./1464/index")
function c(e, t) {
  this.typeNumber = e
  this.errorCorrectLevel = t
  this.modules = null
  this.moduleCount = 0
  this.dataCache = null
  this.dataList = []
}
var /* [auto-meaningful-name] */c$prototype = c.prototype
c$prototype.addData = function (e) {
  var t = new r(e)
  this.dataList.push(t)
  this.dataCache = null
}
c$prototype.isDark = function (e, t) {
  if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) {
    throw new Error(e + "," + t)
  }
  return this.modules[e][t]
}
c$prototype.getModuleCount = function () {
  return this.moduleCount
}
c$prototype.make = function () {
  if (this.typeNumber < 1) {
    var e = 1
    for (e = 1; e < 40; e++) {
      for (var t = o.getRSBlocks(e, this.errorCorrectLevel), n = new i(), r = 0, s = 0; s < t.length; s++) {
        r += t[s].dataCount
      }
      for (s = 0; s < this.dataList.length; s++) {
        var c = this.dataList[s]
        n.put(c.mode, 4)
        n.put(c.getLength(), a.getLengthInBits(c.mode, e))
        c.write(n)
      }
      if (n.getLengthInBits() <= 8 * r) {
        break
      }
    }
    this.typeNumber = e
  }
  this.makeImpl(false, this.getBestMaskPattern())
}
c$prototype.makeImpl = function (e, t) {
  this.moduleCount = 4 * this.typeNumber + 17
  this.modules = new Array(this.moduleCount)
  for (var n = 0; n < this.moduleCount; n++) {
    this.modules[n] = new Array(this.moduleCount)
    for (var r = 0; r < this.moduleCount; r++) {
      this.modules[n][r] = null
    }
  }
  this.setupPositionProbePattern(0, 0)
  this.setupPositionProbePattern(this.moduleCount - 7, 0)
  this.setupPositionProbePattern(0, this.moduleCount - 7)
  this.setupPositionAdjustPattern()
  this.setupTimingPattern()
  this.setupTypeInfo(e, t)
  if (this.typeNumber >= 7) {
    this.setupTypeNumber(e)
  }
  if (null == this.dataCache) {
    this.dataCache = c.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)
  }
  this.mapData(this.dataCache, t)
}
c$prototype.setupPositionProbePattern = function (e, t) {
  for (var n = -1; n <= 7; n++) {
    if (!(e + n <= -1 || this.moduleCount <= e + n)) {
      for (var r = -1; r <= 7; r++) {
        if (!(t + r <= -1 || this.moduleCount <= t + r)) {
          this.modules[e + n][t + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4
        }
      }
    }
  }
}
c$prototype.getBestMaskPattern = function () {
  for (var e = 0, t = 0, n = 0; n < 8; n++) {
    this.makeImpl(true, n)
    var r = a.getLostPoint(this)
    if (0 == n || e > r) {
      e = r
      t = n
    }
  }
  return t
}
c$prototype.createMovieClip = function (e, t, n) {
  var r = e.createEmptyMovieClip(t, n)
  this.make()
  for (var o = 0; o < this.modules.length; o++) {
    for (var i = 1 * o, a = 0; a < this.modules[o].length; a++) {
      var s = 1 * a
      if (this.modules[o][a]) {
        r.beginFill(0, 100)
        r.moveTo(s, i)
        r.lineTo(s + 1, i)
        r.lineTo(s + 1, i + 1)
        r.lineTo(s, i + 1)
        r.endFill()
      }
    }
  }
  return r
}
c$prototype.setupTimingPattern = function () {
  for (var e = 8; e < this.moduleCount - 8; e++) {
    if (null == this.modules[e][6]) {
      this.modules[e][6] = e % 2 == 0
    }
  }
  for (var t = 8; t < this.moduleCount - 8; t++) {
    if (null == this.modules[6][t]) {
      this.modules[6][t] = t % 2 == 0
    }
  }
}
c$prototype.setupPositionAdjustPattern = function () {
  for (var e = a.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) {
    for (var n = 0; n < e.length; n++) {
      var r = e[t]
      var o = e[n]
      if (null == this.modules[r][o]) {
        for (var i = -2; i <= 2; i++) {
          for (var s = -2; s <= 2; s++) {
            this.modules[r + i][o + s] = -2 == i || 2 == i || -2 == s || 2 == s || 0 == i && 0 == s
          }
        }
      }
    }
  }
}
c$prototype.setupTypeNumber = function (e) {
  for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
    var r = !e && 1 == (t >> n & 1)
    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
  }
  for (n = 0; n < 18; n++) {
    r = !e && 1 == (t >> n & 1)
    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
  }
}
c$prototype.setupTypeInfo = function (e, t) {
  for (var n = this.errorCorrectLevel << 3 | t, r = a.getBCHTypeInfo(n), o = 0; o < 15; o++) {
    var i = !e && 1 == (r >> o & 1)
    if (o < 6) {
      this.modules[o][8] = i
    } else {
      if (o < 8) {
        this.modules[o + 1][8] = i
      } else {
        this.modules[this.moduleCount - 15 + o][8] = i
      }
    }
  }
  for (o = 0; o < 15; o++) {
    i = !e && 1 == (r >> o & 1)
    if (o < 8) {
      this.modules[8][this.moduleCount - o - 1] = i
    } else {
      if (o < 9) {
        this.modules[8][15 - o - 1 + 1] = i
      } else {
        this.modules[8][15 - o - 1] = i
      }
    }
  }
  this.modules[this.moduleCount - 8][8] = !e
}
c$prototype.mapData = function (e, t) {
  for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, s = this.moduleCount - 1; s > 0; s -= 2) {
    for (6 == s && s--;;) {
      for (var c = 0; c < 2; c++) {
        if (null == this.modules[r][s - c]) {
          var l = false
          if (i < e.length) {
            l = 1 == (e[i] >>> o & 1)
          }
          if (a.getMask(t, r, s - c)) {
            l = !l
          }
          this.modules[r][s - c] = l
          if (-1 == --o) {
            i++
            o = 7
          }
        }
      }
      if ((r += n) < 0 || this.moduleCount <= r) {
        r -= n
        n = -n
        break
      }
    }
  }
}
c.PAD0 = 236
c.PAD1 = 17
c.createData = function (e, t, n) {
  for (var r = o.getRSBlocks(e, t), s = new i(), l = 0; l < n.length; l++) {
    var u = n[l]
    s.put(u.mode, 4)
    s.put(u.getLength(), a.getLengthInBits(u.mode, e))
    u.write(s)
  }
  var d = 0
  for (l = 0; l < r.length; l++) {
    d += r[l].dataCount
  }
  if (s.getLengthInBits() > 8 * d) {
    throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * d + ")")
  }
  for (s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4); s.getLengthInBits() % 8 != 0;) {
    s.putBit(false)
  }
  for (; !(s.getLengthInBits() >= 8 * d) && (s.put(c.PAD0, 8), !(s.getLengthInBits() >= 8 * d));) {
    s.put(c.PAD1, 8)
  }
  return c.createBytes(s, r)
}
c.createBytes = function (e, t) {
  for (var n = 0, r = 0, o = 0, i = new Array(t.length), c = new Array(t.length), l = 0; l < t.length; l++) {
    var /* [auto-meaningful-name] */tL$dataCount = t[l].dataCount
    var d = t[l].totalCount - tL$dataCount
    r = Math.max(r, tL$dataCount)
    o = Math.max(o, d)
    i[l] = new Array(tL$dataCount)
    for (var p = 0; p < i[l].length; p++) {
      i[l][p] = 255 & e.buffer[p + n]
    }
    n += tL$dataCount
    var f = a.getErrorCorrectPolynomial(d)
    var h = new s(i[l], f.getLength() - 1).mod(f)
    c[l] = new Array(f.getLength() - 1)
    for (p = 0; p < c[l].length; p++) {
      var m = p + h.getLength() - c[l].length
      c[l][p] = m >= 0 ? h.get(m) : 0
    }
  }
  var g = 0
  for (p = 0; p < t.length; p++) {
    g += t[p].totalCount
  }
  var _ = new Array(g)
  var v = 0
  for (p = 0; p < r; p++) {
    for (l = 0; l < t.length; l++) {
      if (p < i[l].length) {
        _[v++] = i[l][p]
      }
    }
  }
  for (p = 0; p < o; p++) {
    for (l = 0; l < t.length; l++) {
      if (p < c[l].length) {
        _[v++] = c[l][p]
      }
    }
  }
  return _
}
module.exports = c
