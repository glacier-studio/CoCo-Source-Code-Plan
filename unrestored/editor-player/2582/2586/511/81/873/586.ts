"use strict";

export { n as a };
var n = function () {
  function t(t, e, r) {
    this.deviceId = t;
    this.label = e;
    this.kind = "videoinput";
    this.groupId = r || void 0;
  }
  t.prototype.toJSON = function () {
    return {
      kind: this.kind,
      groupId: this.groupId,
      deviceId: this.deviceId,
      label: this.label
    };
  };
  return t;
}();
export default n;