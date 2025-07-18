import * as r from "./2347/1366";
import * as i from "./2349/1367";
exports.NUMERIC = {
  id: "Numeric",
  bit: 1,
  ccBits: [10, 12, 14]
};
exports.ALPHANUMERIC = {
  id: "Alphanumeric",
  bit: 2,
  ccBits: [9, 11, 13]
};
exports.BYTE = {
  id: "Byte",
  bit: 4,
  ccBits: [8, 16, 16]
};
exports.KANJI = {
  id: "Kanji",
  bit: 8,
  ccBits: [8, 10, 12]
};
exports.MIXED = {
  bit: -1
};
exports.getCharCountIndicator = function (e, t) {
  if (!e.ccBits) {
    throw new Error("Invalid mode: " + e);
  }
  if (!r.isValid(t)) {
    throw new Error("Invalid version: " + t);
  }
  return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2];
};
exports.getBestModeForData = function (e) {
  return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE;
};
exports.toString = function (e) {
  if (e && e.id) {
    return e.id;
  }
  throw new Error("Invalid mode");
};
exports.isValid = function (e) {
  return e && e.bit && e.ccBits;
};
exports.from = function (e, n) {
  if (t.isValid(e)) {
    return e;
  }
  try {
    return function (e) {
      if ("string" !== typeof e) {
        throw new Error("Param is not a string");
      }
      switch (e.toLowerCase()) {
        case "numeric":
          return t.NUMERIC;
        case "alphanumeric":
          return t.ALPHANUMERIC;
        case "kanji":
          return t.KANJI;
        case "byte":
          return t.BYTE;
        default:
          throw new Error("Unknown mode: " + e);
      }
    }(e);
  } catch (r) {
    return n;
  }
};