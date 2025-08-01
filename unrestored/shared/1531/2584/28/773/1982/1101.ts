module.exports = {
  indexOf: function (e, t) {
    var n;
    var r;
    if (Array.prototype.indexOf) {
      return e.indexOf(t);
    }
    for (n = 0, r = e.length; n < r; n++) {
      if (e[n] === t) {
        return n;
      }
    }
    return -1;
  },
  forEach: function (e, t, n) {
    var r;
    var i;
    if (Array.prototype.forEach) {
      return e.forEach(t, n);
    }
    for (r = 0, i = e.length; r < i; r++) {
      t.call(n, e[r], r, e);
    }
  },
  trim: function (e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (e) {
    var t = /\s|\n|\t/.exec(e);
    return t ? t.index : -1;
  }
};