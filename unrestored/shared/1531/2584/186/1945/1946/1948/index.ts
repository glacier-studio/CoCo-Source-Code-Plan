"use strict";

var r = require("../../442");
var i = require("./1949");
var o = require("../../1291");
var a = require("../../1292/index");
function s(e) {
  if (e.cancelToken) {
    e.cancelToken.throwIfRequested();
  }
}
module.exports = function (e) {
  s(e);
  e.headers = e.headers || {};
  e.data = i(e.data, e.headers, e.transformRequest);
  e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers);
  r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
    delete e.headers[t];
  });
  return (e.adapter || a.adapter)(e).then(function (t) {
    s(e);
    t.data = i(t.data, t.headers, e.transformResponse);
    return t;
  }, function (t) {
    if (!o(t)) {
      s(e);
      if (t && t.response) {
        t.response.data = i(t.response.data, t.response.headers, e.transformResponse);
      }
    }
    return Promise.reject(t);
  });
};