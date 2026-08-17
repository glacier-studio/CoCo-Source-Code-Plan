/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1132
 */

"use strict"

export { re as Node }
export { U as Parser }
export { F as Position }
export { P as SourceLocation }
export { ae as TokContext }
export { Te as Token }
export { A as TokenType }
export { M as defaultOptions }
export { N as getLineInfo }
export { _ as isIdentifierChar }
export { p as isIdentifierStart }
export { C as isNewLine }
export { y as keywordTypes }
export { E as lineBreak }
export { x as lineBreakG }
export { O as nonASCIIwhitespace }
export { Pe as parse }
export { Ne as parseExpressionAt }
export { se as tokContexts }
export { w as tokTypes }
export { Me as tokenizer }
export { _7$4$1 as version }
var r = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}
var /* [auto-meaningful-name] */BreakCaseCatchContinueDebuggerDefaultDoElseFinallyForFunctionIfReturnSwitchThrowTryVarWhileWithNullTrueFalseInstanceofTypeofVoidDeleteNewInThis = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"
var o = {
  5: BreakCaseCatchContinueDebuggerDefaultDoElseFinallyForFunctionIfReturnSwitchThrowTryVarWhileWithNullTrueFalseInstanceofTypeofVoidDeleteNewInThis,
  "5module": BreakCaseCatchContinueDebuggerDefaultDoElseFinallyForFunctionIfReturnSwitchThrowTryVarWhileWithNullTrueFalseInstanceofTypeofVoidDeleteNewInThis + " export import",
  6: BreakCaseCatchContinueDebuggerDefaultDoElseFinallyForFunctionIfReturnSwitchThrowTryVarWhileWithNullTrueFalseInstanceofTypeofVoidDeleteNewInThis + " const class extends export import super"
}
var a = /^in(stanceof)?$/
var s = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
var c = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿"
var u = new RegExp("[" + s + "]")
var l = new RegExp("[" + s + c + "]")
s = c = null
var f = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938]
var d = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239]
function h(e, t) {
  for (var n = 65536, r = 0; r < t.length; r += 2) {
    if ((n += t[r]) > e) {
      return false
    }
    if ((n += t[r + 1]) >= e) {
      return true
    }
  }
}
function p(e, t) {
  return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : false !== t && h(e, f)))
}
function _(e, t) {
  return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && l.test(String.fromCharCode(e)) : false !== t && (h(e, f) || h(e, d)))))
}
var A = function (e, t) {
  if (undefined === t) {
    t = {}
  }
  this.label = e
  this.keyword = t.keyword
  this.beforeExpr = !!t.beforeExpr
  this.startsExpr = !!t.startsExpr
  this.isLoop = !!t.isLoop
  this.isAssign = !!t.isAssign
  this.prefix = !!t.prefix
  this.postfix = !!t.postfix
  this.binop = t.binop || null
  this.updateContext = null
}
function g(e, t) {
  return new A(e, {
    beforeExpr: true,
    binop: t
  })
}
var v = {
  beforeExpr: true
}
var m = {
  startsExpr: true
}
var y = {}
function b(e, t) {
  if (undefined === t) {
    t = {}
  }
  t.keyword = e
  return y[e] = new A(e, t)
}
var w = {
  num: new A("num", m),
  regexp: new A("regexp", m),
  string: new A("string", m),
  name: new A("name", m),
  eof: new A("eof"),
  bracketL: new A("[", {
    beforeExpr: true,
    startsExpr: true
  }),
  bracketR: new A("]"),
  braceL: new A("{", {
    beforeExpr: true,
    startsExpr: true
  }),
  braceR: new A("}"),
  parenL: new A("(", {
    beforeExpr: true,
    startsExpr: true
  }),
  parenR: new A(")"),
  comma: new A(",", v),
  semi: new A(";", v),
  colon: new A(":", v),
  dot: new A("."),
  question: new A("?", v),
  questionDot: new A("?."),
  arrow: new A("=>", v),
  template: new A("template"),
  invalidTemplate: new A("invalidTemplate"),
  ellipsis: new A("...", v),
  backQuote: new A("`", m),
  dollarBraceL: new A("${", {
    beforeExpr: true,
    startsExpr: true
  }),
  eq: new A("=", {
    beforeExpr: true,
    isAssign: true
  }),
  assign: new A("_=", {
    beforeExpr: true,
    isAssign: true
  }),
  incDec: new A("++/--", {
    prefix: true,
    postfix: true,
    startsExpr: true
  }),
  prefix: new A("!/~", {
    beforeExpr: true,
    prefix: true,
    startsExpr: true
  }),
  logicalOR: g("||", 1),
  logicalAND: g("&&", 2),
  bitwiseOR: g("|", 3),
  bitwiseXOR: g("^", 4),
  bitwiseAND: g("&", 5),
  equality: g("==/!=/===/!==", 6),
  relational: g("</>/<=/>=", 7),
  bitShift: g("<</>>/>>>", 8),
  plusMin: new A("+/-", {
    beforeExpr: true,
    binop: 9,
    prefix: true,
    startsExpr: true
  }),
  modulo: g("%", 10),
  star: g("*", 10),
  slash: g("/", 10),
  starstar: new A("**", {
    beforeExpr: true
  }),
  coalesce: g("??", 1),
  _break: b("break"),
  _case: b("case", v),
  _catch: b("catch"),
  _continue: b("continue"),
  _debugger: b("debugger"),
  _default: b("default", v),
  _do: b("do", {
    isLoop: true,
    beforeExpr: true
  }),
  _else: b("else", v),
  _finally: b("finally"),
  _for: b("for", {
    isLoop: true
  }),
  _function: b("function", m),
  _if: b("if"),
  _return: b("return", v),
  _switch: b("switch"),
  _throw: b("throw", v),
  _try: b("try"),
  _var: b("var"),
  _const: b("const"),
  _while: b("while", {
    isLoop: true
  }),
  _with: b("with"),
  _new: b("new", {
    beforeExpr: true,
    startsExpr: true
  }),
  _this: b("this", m),
  _super: b("super", m),
  _class: b("class", m),
  _extends: b("extends", v),
  _export: b("export"),
  _import: b("import", m),
  _null: b("null", m),
  _true: b("true", m),
  _false: b("false", m),
  _in: b("in", {
    beforeExpr: true,
    binop: 7
  }),
  _instanceof: b("instanceof", {
    beforeExpr: true,
    binop: 7
  }),
  _typeof: b("typeof", {
    beforeExpr: true,
    prefix: true,
    startsExpr: true
  }),
  _void: b("void", {
    beforeExpr: true,
    prefix: true,
    startsExpr: true
  }),
  _delete: b("delete", {
    beforeExpr: true,
    prefix: true,
    startsExpr: true
  })
}
var E = /\r\n?|\n|\u2028|\u2029/
var x = new RegExp(E.source, "g")
function C(e, t) {
  return 10 === e || 13 === e || !t && (8232 === e || 8233 === e)
}
var O = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/
var k = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
var /* [auto-meaningful-name] */Object$prototype$toString = Object$prototype.toString
function D(e, t) {
  return Object$prototype$hasOwnProperty.call(e, t)
}
var I = Array.isArray || function (e) {
  return "[object Array]" === Object$prototype$toString.call(e)
}
function R(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$")
}
var F = function (e, t) {
  this.line = e
  this.column = t
}
F.prototype.offset = function (e) {
  return new F(this.line, this.column + e)
}
var P = function (e, t, n) {
  this.start = t
  this.end = n
  if (null !== e.sourceFile) {
    this.source = e.sourceFile
  }
}
function N(e, t) {
  for (var n = 1, r = 0;;) {
    x.lastIndex = r
    var i = x.exec(e)
    if (!(i && i.index < t)) {
      return new F(n, t - r)
    }
    ++n
    r = i.index + i[0].length
  }
}
var M = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowAwaitOutsideFunction: false,
  allowHashBang: false,
  locations: false,
  onToken: null,
  onComment: null,
  ranges: false,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: false
}
function L(e) {
  var t = {}
  for (var n in M) t[n] = e && D(e, n) ? e[n] : M[n]
  if (t.ecmaVersion >= 2015) {
    t.ecmaVersion -= 2009
  }
  if (null == t.allowReserved) {
    t.allowReserved = t.ecmaVersion < 5
  }
  if (I(t.onToken)) {
    var /* [auto-meaningful-name] */t$onToken = t.onToken
    t.onToken = function (e) {
      return t$onToken.push(e)
    }
  }
  if (I(t.onComment)) {
    t.onComment = function (e, t) {
      return function (n, r, i, o, a, s) {
        var c = {
          type: n ? "Block" : "Line",
          value: r,
          start: i,
          end: o
        }
        if (e.locations) {
          c.loc = new P(this, a, s)
        }
        if (e.ranges) {
          c.range = [i, o]
        }
        t.push(c)
      }
    }(t, t.onComment)
  }
  return t
}
function j(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0)
}
var U = function (e, t, n) {
  this.options = e = L(e)
  this.sourceFile = e.sourceFile
  this.keywords = R(o[e.ecmaVersion >= 6 ? 6 : "module" === e.sourceType ? "5module" : 5])
  var i = ""
  if (true !== e.allowReserved) {
    for (var /* [auto-meaningful-name] */e$ecmaVersion = e.ecmaVersion; !(i = r[e$ecmaVersion]); e$ecmaVersion--) {
      ;
    }
    if ("module" === e.sourceType) {
      i += " await"
    }
  }
  this.reservedWords = R(i)
  var s = (i ? i + " " : "") + r.strict
  this.reservedWordsStrict = R(s)
  this.reservedWordsStrictBind = R(s + " " + r.strictBind)
  this.input = String(t)
  this.containsEsc = false
  if (n) {
    this.pos = n
    this.lineStart = this.input.lastIndexOf("\n", n - 1) + 1
    this.curLine = this.input.slice(0, this.lineStart).split(E).length
  } else {
    this.pos = this.lineStart = 0
    this.curLine = 1
  }
  this.type = w.eof
  this.value = null
  this.start = this.end = this.pos
  this.startLoc = this.endLoc = this.curPosition()
  this.lastTokEndLoc = this.lastTokStartLoc = null
  this.lastTokStart = this.lastTokEnd = this.pos
  this.context = this.initialContext()
  this.exprAllowed = true
  this.inModule = "module" === e.sourceType
  this.strict = this.inModule || this.strictDirective(this.pos)
  this.potentialArrowAt = -1
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0
  this.labels = []
  this.undefinedExports = {}
  if (0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2)) {
    this.skipLineComment(2)
  }
  this.scopeStack = []
  this.enterScope(1)
  this.regexpState = null
}
var H = {
  inFunction: {
    configurable: true
  },
  inGenerator: {
    configurable: true
  },
  inAsync: {
    configurable: true
  },
  allowSuper: {
    configurable: true
  },
  allowDirectSuper: {
    configurable: true
  },
  treatFunctionsAsVar: {
    configurable: true
  }
}
U.prototype.parse = function () {
  var e = this.options.program || this.startNode()
  this.nextToken()
  return this.parseTopLevel(e)
}
H.inFunction.get = function () {
  return (2 & this.currentVarScope().flags) > 0
}
H.inGenerator.get = function () {
  return (8 & this.currentVarScope().flags) > 0
}
H.inAsync.get = function () {
  return (4 & this.currentVarScope().flags) > 0
}
H.allowSuper.get = function () {
  return (64 & this.currentThisScope().flags) > 0
}
H.allowDirectSuper.get = function () {
  return (128 & this.currentThisScope().flags) > 0
}
H.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope())
}
U.prototype.inNonArrowFunction = function () {
  return (2 & this.currentThisScope().flags) > 0
}
U.extend = function () {
  for (var e = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
    e[arguments$length] = arguments[arguments$length]
  }
  for (var n = this, r = 0; r < e.length; r++) {
    n = e[r](n)
  }
  return n
}
U.parse = function (e, t) {
  return new this(t, e).parse()
}
U.parseExpressionAt = function (e, t, n) {
  var r = new this(n, e, t)
  r.nextToken()
  return r.parseExpression()
}
U.tokenizer = function (e, t) {
  return new this(t, e)
}
Object.defineProperties(U.prototype, H)
var /* [auto-meaningful-name] */U$prototype = U.prototype
var G = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/
function z() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
}
U$prototype.strictDirective = function (e) {
  for (;;) {
    k.lastIndex = e
    e += k.exec(this.input)[0].length
    var t = G.exec(this.input.slice(e))
    if (!t) {
      return false
    }
    if ("use strict" === (t[1] || t[2])) {
      k.lastIndex = e + t[0].length
      var n = k.exec(this.input)
      var r = n.index + n[0].length
      var i = this.input.charAt(r)
      return ";" === i || "}" === i || E.test(n[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || "!" === i && "=" === this.input.charAt(r + 1))
    }
    e += t[0].length
    k.lastIndex = e
    e += k.exec(this.input)[0].length
    if (";" === this.input[e]) {
      e++
    }
  }
}
U$prototype.eat = function (e) {
  return this.type === e && (this.next(), true)
}
U$prototype.isContextual = function (e) {
  return this.type === w.name && this.value === e && !this.containsEsc
}
U$prototype.eatContextual = function (e) {
  return !!this.isContextual(e) && (this.next(), true)
}
U$prototype.expectContextual = function (e) {
  if (!this.eatContextual(e)) {
    this.unexpected()
  }
}
U$prototype.canInsertSemicolon = function () {
  return this.type === w.eof || this.type === w.braceR || E.test(this.input.slice(this.lastTokEnd, this.start))
}
U$prototype.insertSemicolon = function () {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc)
    }
    return true
  }
}
U$prototype.semicolon = function () {
  if (!(this.eat(w.semi) || this.insertSemicolon())) {
    this.unexpected()
  }
}
U$prototype.afterTrailingComma = function (e, t) {
  if (this.type === e) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc)
    }
    if (!t) {
      this.next()
    }
    return true
  }
}
U$prototype.expect = function (e) {
  if (!this.eat(e)) {
    this.unexpected()
  }
}
U$prototype.unexpected = function (e) {
  this.raise(null != e ? e : this.start, "Unexpected token")
}
U$prototype.checkPatternErrors = function (e, t) {
  if (e) {
    if (e.trailingComma > -1) {
      this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element")
    }
    var n = t ? e.parenthesizedAssign : e.parenthesizedBind
    if (n > -1) {
      this.raiseRecoverable(n, "Parenthesized pattern")
    }
  }
}
U$prototype.checkExpressionErrors = function (e, t) {
  if (!e) {
    return false
  }
  var /* [auto-meaningful-name] */e$shorthandAssign = e.shorthandAssign
  var /* [auto-meaningful-name] */e$doubleProto = e.doubleProto
  if (!t) {
    return e$shorthandAssign >= 0 || e$doubleProto >= 0
  }
  if (e$shorthandAssign >= 0) {
    this.raise(e$shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns")
  }
  if (e$doubleProto >= 0) {
    this.raiseRecoverable(e$doubleProto, "Redefinition of __proto__ property")
  }
}
U$prototype.checkYieldAwaitInDefaultParams = function () {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value")
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value")
  }
}
U$prototype.isSimpleAssignTarget = function (e) {
  return "ParenthesizedExpression" === e.type ? this.isSimpleAssignTarget(e.expression) : "Identifier" === e.type || "MemberExpression" === e.type
}
var /* [auto-meaningful-name] */U$prototype1 = U.prototype
U$prototype1.parseTopLevel = function (e) {
  var t = {}
  for (e.body || (e.body = []); this.type !== w.eof;) {
    var n = this.parseStatement(null, true, t)
    e.body.push(n)
  }
  if (this.inModule) {
    for (var r = 0, i = Object.keys(this.undefinedExports); r < i.length; r += 1) {
      var o = i[r]
      this.raiseRecoverable(this.undefinedExports[o].start, "Export '" + o + "' is not defined")
    }
  }
  this.adaptDirectivePrologue(e.body)
  this.next()
  e.sourceType = this.options.sourceType
  return this.finishNode(e, "Program")
}
var W = {
  kind: "loop"
}
var K = {
  kind: "switch"
}
U$prototype1.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false
  }
  k.lastIndex = this.pos
  var t = k.exec(this.input)
  var n = this.pos + t[0].length
  var r = this.input.charCodeAt(n)
  if (91 === r) {
    return true
  }
  if (e) {
    return false
  }
  if (123 === r) {
    return true
  }
  if (p(r, true)) {
    for (var i = n + 1; _(this.input.charCodeAt(i), true);) {
      ++i
    }
    var o = this.input.slice(n, i)
    if (!a.test(o)) {
      return true
    }
  }
  return false
}
U$prototype1.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false
  }
  k.lastIndex = this.pos
  var e = k.exec(this.input)
  var t = this.pos + e[0].length
  return !E.test(this.input.slice(this.pos, t)) && "function" === this.input.slice(t, t + 8) && (t + 8 === this.input.length || !_(this.input.charAt(t + 8)))
}
U$prototype1.parseStatement = function (e, t, n) {
  var r
  var /* [auto-meaningful-name] */this$type = this.type
  var o = this.startNode()
  switch (this.isLet(e) && (this$type = w._var, r = "let"), this$type) {
    case w._break:
    case w._continue:
      return this.parseBreakContinueStatement(o, this$type.keyword)
    case w._debugger:
      return this.parseDebuggerStatement(o)
    case w._do:
      return this.parseDoStatement(o)
    case w._for:
      return this.parseForStatement(o)
    case w._function:
      if (e && (this.strict || "if" !== e && "label" !== e) && this.options.ecmaVersion >= 6) {
        this.unexpected()
      }
      return this.parseFunctionStatement(o, false, !e)
    case w._class:
      if (e) {
        this.unexpected()
      }
      return this.parseClass(o, true)
    case w._if:
      return this.parseIfStatement(o)
    case w._return:
      return this.parseReturnStatement(o)
    case w._switch:
      return this.parseSwitchStatement(o)
    case w._throw:
      return this.parseThrowStatement(o)
    case w._try:
      return this.parseTryStatement(o)
    case w._const:
    case w._var:
      r = r || this.value
      if (e && "var" !== r) {
        this.unexpected()
      }
      return this.parseVarStatement(o, r)
    case w._while:
      return this.parseWhileStatement(o)
    case w._with:
      return this.parseWithStatement(o)
    case w.braceL:
      return this.parseBlock(true, o)
    case w.semi:
      return this.parseEmptyStatement(o)
    case w._export:
    case w._import:
      if (this.options.ecmaVersion > 10 && this$type === w._import) {
        k.lastIndex = this.pos
        var a = k.exec(this.input)
        var s = this.pos + a[0].length
        var c = this.input.charCodeAt(s)
        if (40 === c || 46 === c) {
          return this.parseExpressionStatement(o, this.parseExpression())
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!t) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level")
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")
        }
      }
      return this$type === w._import ? this.parseImport(o) : this.parseExport(o, n)
    default:
      if (this.isAsyncFunction()) {
        if (e) {
          this.unexpected()
        }
        this.next()
        return this.parseFunctionStatement(o, true, !e)
      }
      var /* [auto-meaningful-name] */this$value = this.value,
        l = this.parseExpression()
      return this$type === w.name && "Identifier" === l.type && this.eat(w.colon) ? this.parseLabeledStatement(o, this$value, l, e) : this.parseExpressionStatement(o, l)
  }
}
U$prototype1.parseBreakContinueStatement = function (e, t) {
  var n = "break" === t
  this.next()
  if (this.eat(w.semi) || this.insertSemicolon()) {
    e.label = null
  } else {
    if (this.type !== w.name) {
      this.unexpected()
    } else {
      e.label = this.parseIdent()
      this.semicolon()
    }
  }
  for (var r = 0; r < this.labels.length; ++r) {
    var i = this.labels[r]
    if (null == e.label || i.name === e.label.name) {
      if (null != i.kind && (n || "loop" === i.kind)) {
        break
      }
      if (e.label && n) {
        break
      }
    }
  }
  if (r === this.labels.length) {
    this.raise(e.start, "Unsyntactic " + t)
  }
  return this.finishNode(e, n ? "BreakStatement" : "ContinueStatement")
}
U$prototype1.parseDebuggerStatement = function (e) {
  this.next()
  this.semicolon()
  return this.finishNode(e, "DebuggerStatement")
}
U$prototype1.parseDoStatement = function (e) {
  this.next()
  this.labels.push(W)
  e.body = this.parseStatement("do")
  this.labels.pop()
  this.expect(w._while)
  e.test = this.parseParenExpression()
  if (this.options.ecmaVersion >= 6) {
    this.eat(w.semi)
  } else {
    this.semicolon()
  }
  return this.finishNode(e, "DoWhileStatement")
}
U$prototype1.parseForStatement = function (e) {
  this.next()
  var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1
  this.labels.push(W)
  this.enterScope(0)
  this.expect(w.parenL)
  if (this.type === w.semi) {
    if (t > -1) {
      this.unexpected(t)
    }
    return this.parseFor(e, null)
  }
  var n = this.isLet()
  if (this.type === w._var || this.type === w._const || n) {
    var r = this.startNode()
    var i = n ? "let" : this.value
    this.next()
    this.parseVar(r, true, i)
    this.finishNode(r, "VariableDeclaration")
    return (this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === r.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === w._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, r)) : (t > -1 && this.unexpected(t), this.parseFor(e, r))
  }
  var o = new z()
  var a = this.parseExpression(true, o)
  return this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === w._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(a, false, o), this.checkLVal(a), this.parseForIn(e, a)) : (this.checkExpressionErrors(o, true), t > -1 && this.unexpected(t), this.parseFor(e, a))
}
U$prototype1.parseFunctionStatement = function (e, t, n) {
  this.next()
  return this.parseFunction(e, Y | (n ? 0 : q), false, t)
}
U$prototype1.parseIfStatement = function (e) {
  this.next()
  e.test = this.parseParenExpression()
  e.consequent = this.parseStatement("if")
  e.alternate = this.eat(w._else) ? this.parseStatement("if") : null
  return this.finishNode(e, "IfStatement")
}
U$prototype1.parseReturnStatement = function (e) {
  if (!(this.inFunction || this.options.allowReturnOutsideFunction)) {
    this.raise(this.start, "'return' outside of function")
  }
  this.next()
  if (this.eat(w.semi) || this.insertSemicolon()) {
    e.argument = null
  } else {
    e.argument = this.parseExpression()
    this.semicolon()
  }
  return this.finishNode(e, "ReturnStatement")
}
U$prototype1.parseSwitchStatement = function (e) {
  var t
  this.next()
  e.discriminant = this.parseParenExpression()
  e.cases = []
  this.expect(w.braceL)
  this.labels.push(K)
  this.enterScope(0)
  for (var n = false; this.type !== w.braceR;) {
    if (this.type === w._case || this.type === w._default) {
      var r = this.type === w._case
      if (t) {
        this.finishNode(t, "SwitchCase")
      }
      e.cases.push(t = this.startNode())
      t.consequent = []
      this.next()
      if (r) {
        t.test = this.parseExpression()
      } else {
        if (n) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses")
        }
        n = true
        t.test = null
      }
      this.expect(w.colon)
    } else {
      if (!t) {
        this.unexpected()
      }
      t.consequent.push(this.parseStatement(null))
    }
  }
  this.exitScope()
  if (t) {
    this.finishNode(t, "SwitchCase")
  }
  this.next()
  this.labels.pop()
  return this.finishNode(e, "SwitchStatement")
}
U$prototype1.parseThrowStatement = function (e) {
  this.next()
  if (E.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw")
  }
  e.argument = this.parseExpression()
  this.semicolon()
  return this.finishNode(e, "ThrowStatement")
}
var X = []
U$prototype1.parseTryStatement = function (e) {
  this.next()
  e.block = this.parseBlock()
  e.handler = null
  if (this.type === w._catch) {
    var t = this.startNode()
    this.next()
    if (this.eat(w.parenL)) {
      t.param = this.parseBindingAtom()
      var n = "Identifier" === t.param.type
      this.enterScope(n ? 32 : 0)
      this.checkLVal(t.param, n ? 4 : 2)
      this.expect(w.parenR)
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected()
      }
      t.param = null
      this.enterScope(0)
    }
    t.body = this.parseBlock(false)
    this.exitScope()
    e.handler = this.finishNode(t, "CatchClause")
  }
  e.finalizer = this.eat(w._finally) ? this.parseBlock() : null
  if (!(e.handler || e.finalizer)) {
    this.raise(e.start, "Missing catch or finally clause")
  }
  return this.finishNode(e, "TryStatement")
}
U$prototype1.parseVarStatement = function (e, t) {
  this.next()
  this.parseVar(e, false, t)
  this.semicolon()
  return this.finishNode(e, "VariableDeclaration")
}
U$prototype1.parseWhileStatement = function (e) {
  this.next()
  e.test = this.parseParenExpression()
  this.labels.push(W)
  e.body = this.parseStatement("while")
  this.labels.pop()
  return this.finishNode(e, "WhileStatement")
}
U$prototype1.parseWithStatement = function (e) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode")
  }
  this.next()
  e.object = this.parseParenExpression()
  e.body = this.parseStatement("with")
  return this.finishNode(e, "WithStatement")
}
U$prototype1.parseEmptyStatement = function (e) {
  this.next()
  return this.finishNode(e, "EmptyStatement")
}
U$prototype1.parseLabeledStatement = function (e, t, n, r) {
  for (var i = 0, /* [auto-meaningful-name] */this$labels = this.labels; i < this$labels.length; i += 1) {
    if (this$labels[i].name === t) {
      this.raise(n.start, "Label '" + t + "' is already declared")
    }
  }
  for (var a = this.type.isLoop ? "loop" : this.type === w._switch ? "switch" : null, s = this.labels.length - 1; s >= 0; s--) {
    var c = this.labels[s]
    if (c.statementStart !== e.start) {
      break
    }
    c.statementStart = this.start
    c.kind = a
  }
  this.labels.push({
    name: t,
    kind: a,
    statementStart: this.start
  })
  e.body = this.parseStatement(r ? -1 === r.indexOf("label") ? r + "label" : r : "label")
  this.labels.pop()
  e.label = n
  return this.finishNode(e, "LabeledStatement")
}
U$prototype1.parseExpressionStatement = function (e, t) {
  e.expression = t
  this.semicolon()
  return this.finishNode(e, "ExpressionStatement")
}
U$prototype1.parseBlock = function (e, t, n) {
  for (undefined === e && (e = true), undefined === t && (t = this.startNode()), t.body = [], this.expect(w.braceL), e && this.enterScope(0); this.type !== w.braceR;) {
    var r = this.parseStatement(null)
    t.body.push(r)
  }
  if (n) {
    this.strict = false
  }
  this.next()
  if (e) {
    this.exitScope()
  }
  return this.finishNode(t, "BlockStatement")
}
U$prototype1.parseFor = function (e, t) {
  e.init = t
  this.expect(w.semi)
  e.test = this.type === w.semi ? null : this.parseExpression()
  this.expect(w.semi)
  e.update = this.type === w.parenR ? null : this.parseExpression()
  this.expect(w.parenR)
  e.body = this.parseStatement("for")
  this.exitScope()
  this.labels.pop()
  return this.finishNode(e, "ForStatement")
}
U$prototype1.parseForIn = function (e, t) {
  var n = this.type === w._in
  this.next()
  if ("VariableDeclaration" === t.type && null != t.declarations[0].init && (!n || this.options.ecmaVersion < 8 || this.strict || "var" !== t.kind || "Identifier" !== t.declarations[0].id.type)) {
    this.raise(t.start, (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
  } else {
    if ("AssignmentPattern" === t.type) {
      this.raise(t.start, "Invalid left-hand side in for-loop")
    }
  }
  e.left = t
  e.right = n ? this.parseExpression() : this.parseMaybeAssign()
  this.expect(w.parenR)
  e.body = this.parseStatement("for")
  this.exitScope()
  this.labels.pop()
  return this.finishNode(e, n ? "ForInStatement" : "ForOfStatement")
}
U$prototype1.parseVar = function (e, t, n) {
  for (e.declarations = [], e.kind = n;;) {
    var r = this.startNode()
    this.parseVarId(r, n)
    if (this.eat(w.eq)) {
      r.init = this.parseMaybeAssign(t)
    } else {
      if ("const" !== n || this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
        if ("Identifier" === r.id.type || t && (this.type === w._in || this.isContextual("of"))) {
          r.init = null
        } else {
          this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value")
        }
      } else {
        this.unexpected()
      }
    }
    e.declarations.push(this.finishNode(r, "VariableDeclarator"))
    if (!this.eat(w.comma)) {
      break
    }
  }
  return e
}
U$prototype1.parseVarId = function (e, t) {
  e.id = this.parseBindingAtom()
  this.checkLVal(e.id, "var" === t ? 1 : 2, false)
}
var Y = 1
var q = 2
U$prototype1.parseFunction = function (e, t, n, r) {
  this.initFunction(e)
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) {
    if (this.type === w.star && t & q) {
      this.unexpected()
    }
    e.generator = this.eat(w.star)
  }
  if (this.options.ecmaVersion >= 8) {
    e.async = !!r
  }
  if (t & Y) {
    e.id = 4 & t && this.type !== w.name ? null : this.parseIdent()
    if (!(!e.id || t & q)) {
      this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3)
    }
  }
  var /* [auto-meaningful-name] */this$yieldPos = this.yieldPos
  var /* [auto-meaningful-name] */this$awaitPos = this.awaitPos
  var /* [auto-meaningful-name] */this$awaitIdentPos = this.awaitIdentPos
  this.yieldPos = 0
  this.awaitPos = 0
  this.awaitIdentPos = 0
  this.enterScope(j(e.async, e.generator))
  if (!(t & Y)) {
    e.id = this.type === w.name ? this.parseIdent() : null
  }
  this.parseFunctionParams(e)
  this.parseFunctionBody(e, n, false)
  this.yieldPos = this$yieldPos
  this.awaitPos = this$awaitPos
  this.awaitIdentPos = this$awaitIdentPos
  return this.finishNode(e, t & Y ? "FunctionDeclaration" : "FunctionExpression")
}
U$prototype1.parseFunctionParams = function (e) {
  this.expect(w.parenL)
  e.params = this.parseBindingList(w.parenR, false, this.options.ecmaVersion >= 8)
  this.checkYieldAwaitInDefaultParams()
}
U$prototype1.parseClass = function (e, t) {
  this.next()
  var /* [auto-meaningful-name] */this$strict = this.strict
  this.strict = true
  this.parseClassId(e, t)
  this.parseClassSuper(e)
  var r = this.startNode()
  var i = false
  for (r.body = [], this.expect(w.braceL); this.type !== w.braceR;) {
    var o = this.parseClassElement(null !== e.superClass)
    if (o) {
      r.body.push(o)
      if ("MethodDefinition" === o.type && "constructor" === o.kind) {
        if (i) {
          this.raise(o.start, "Duplicate constructor in the same class")
        }
        i = true
      }
    }
  }
  this.strict = this$strict
  this.next()
  e.body = this.finishNode(r, "ClassBody")
  return this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
}
U$prototype1.parseClassElement = function (e) {
  var t = this
  if (this.eat(w.semi)) {
    return null
  }
  var n = this.startNode()
  var r = function (e, r) {
    if (undefined === r) {
      r = false
    }
    var /* [auto-meaningful-name] */t$start = t.start
    var /* [auto-meaningful-name] */t$startLoc = t.startLoc
    return !!t.eatContextual(e) && (!(t.type === w.parenL || r && t.canInsertSemicolon()) || (n.key && t.unexpected(), n.computed = false, n.key = t.startNodeAt(t$start, t$startLoc), n.key.name = e, t.finishNode(n.key, "Identifier"), false))
  }
  n.kind = "method"
  n.static = r("static")
  var i = this.eat(w.star)
  var o = false
  if (!i) {
    if (this.options.ecmaVersion >= 8 && r("async", true)) {
      o = true
      i = this.options.ecmaVersion >= 9 && this.eat(w.star)
    } else {
      if (r("get")) {
        n.kind = "get"
      } else {
        if (r("set")) {
          n.kind = "set"
        }
      }
    }
  }
  if (!n.key) {
    this.parsePropertyName(n)
  }
  var /* [auto-meaningful-name] */n$key = n.key
  var s = false
  if (n.computed || n.static || !("Identifier" === n$key.type && "constructor" === n$key.name || "Literal" === n$key.type && "constructor" === n$key.value)) {
    if (n.static && "Identifier" === n$key.type && "prototype" === n$key.name) {
      this.raise(n$key.start, "Classes may not have a static property named prototype")
    }
  } else {
    if ("method" !== n.kind) {
      this.raise(n$key.start, "Constructor can't have get/set modifier")
    }
    if (i) {
      this.raise(n$key.start, "Constructor can't be a generator")
    }
    if (o) {
      this.raise(n$key.start, "Constructor can't be an async method")
    }
    n.kind = "constructor"
    s = e
  }
  this.parseClassMethod(n, i, o, s)
  if ("get" === n.kind && 0 !== n.value.params.length) {
    this.raiseRecoverable(n.value.start, "getter should have no params")
  }
  if ("set" === n.kind && 1 !== n.value.params.length) {
    this.raiseRecoverable(n.value.start, "setter should have exactly one param")
  }
  if ("set" === n.kind && "RestElement" === n.value.params[0].type) {
    this.raiseRecoverable(n.value.params[0].start, "Setter cannot use rest params")
  }
  return n
}
U$prototype1.parseClassMethod = function (e, t, n, r) {
  e.value = this.parseMethod(t, n, r)
  return this.finishNode(e, "MethodDefinition")
}
U$prototype1.parseClassId = function (e, t) {
  if (this.type === w.name) {
    e.id = this.parseIdent()
    if (t) {
      this.checkLVal(e.id, 2, false)
    }
  } else {
    if (true === t) {
      this.unexpected()
    }
    e.id = null
  }
}
U$prototype1.parseClassSuper = function (e) {
  e.superClass = this.eat(w._extends) ? this.parseExprSubscripts() : null
}
U$prototype1.parseExport = function (e, t) {
  this.next()
  if (this.eat(w.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        e.exported = this.parseIdent(true)
        this.checkExport(t, e.exported.name, this.lastTokStart)
      } else {
        e.exported = null
      }
    }
    this.expectContextual("from")
    if (this.type !== w.string) {
      this.unexpected()
    }
    e.source = this.parseExprAtom()
    this.semicolon()
    return this.finishNode(e, "ExportAllDeclaration")
  }
  if (this.eat(w._default)) {
    var n
    this.checkExport(t, "default", this.lastTokStart)
    if (this.type === w._function || (n = this.isAsyncFunction())) {
      var r = this.startNode()
      this.next()
      if (n) {
        this.next()
      }
      e.declaration = this.parseFunction(r, 4 | Y, false, n)
    } else if (this.type === w._class) {
      var i = this.startNode()
      e.declaration = this.parseClass(i, "nullableID")
    } else {
      e.declaration = this.parseMaybeAssign()
      this.semicolon()
    }
    return this.finishNode(e, "ExportDefaultDeclaration")
  }
  if (this.shouldParseExportStatement()) {
    e.declaration = this.parseStatement(null)
    if ("VariableDeclaration" === e.declaration.type) {
      this.checkVariableExport(t, e.declaration.declarations)
    } else {
      this.checkExport(t, e.declaration.id.name, e.declaration.id.start)
    }
    e.specifiers = []
    e.source = null
  } else {
    e.declaration = null
    e.specifiers = this.parseExportSpecifiers(t)
    if (this.eatContextual("from")) {
      if (this.type !== w.string) {
        this.unexpected()
      }
      e.source = this.parseExprAtom()
    } else {
      for (var o = 0, /* [auto-meaningful-name] */e$specifiers = e.specifiers; o < e$specifiers.length; o += 1) {
        var s = e$specifiers[o]
        this.checkUnreserved(s.local)
        this.checkLocalExport(s.local)
      }
      e.source = null
    }
    this.semicolon()
  }
  return this.finishNode(e, "ExportNamedDeclaration")
}
U$prototype1.checkExport = function (e, t, n) {
  if (e) {
    if (D(e, t)) {
      this.raiseRecoverable(n, "Duplicate export '" + t + "'")
    }
    e[t] = true
  }
}
U$prototype1.checkPatternExport = function (e, t) {
  var /* [auto-meaningful-name] */t$type = t.type
  if ("Identifier" === t$type) {
    this.checkExport(e, t.name, t.start)
  } else if ("ObjectPattern" === t$type) {
    for (var r = 0, /* [auto-meaningful-name] */t$properties = t.properties; r < t$properties.length; r += 1) {
      var o = t$properties[r]
      this.checkPatternExport(e, o)
    }
  } else if ("ArrayPattern" === t$type) {
    for (var a = 0, /* [auto-meaningful-name] */t$elements = t.elements; a < t$elements.length; a += 1) {
      var c = t$elements[a]
      if (c) {
        this.checkPatternExport(e, c)
      }
    }
  } else if ("Property" === t$type) {
    this.checkPatternExport(e, t.value)
  } else {
    if ("AssignmentPattern" === t$type) {
      this.checkPatternExport(e, t.left)
    } else {
      if ("RestElement" === t$type) {
        this.checkPatternExport(e, t.argument)
      } else {
        if ("ParenthesizedExpression" === t$type) {
          this.checkPatternExport(e, t.expression)
        }
      }
    }
  }
}
U$prototype1.checkVariableExport = function (e, t) {
  if (e) {
    for (var n = 0, r = t; n < r.length; n += 1) {
      var i = r[n]
      this.checkPatternExport(e, i.id)
    }
  }
}
U$prototype1.shouldParseExportStatement = function () {
  return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
}
U$prototype1.parseExportSpecifiers = function (e) {
  var t = []
  var n = true
  for (this.expect(w.braceL); !this.eat(w.braceR);) {
    if (n) {
      n = false
    } else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) {
      break
    }
    var r = this.startNode()
    r.local = this.parseIdent(true)
    r.exported = this.eatContextual("as") ? this.parseIdent(true) : r.local
    this.checkExport(e, r.exported.name, r.exported.start)
    t.push(this.finishNode(r, "ExportSpecifier"))
  }
  return t
}
U$prototype1.parseImport = function (e) {
  this.next()
  if (this.type === w.string) {
    e.specifiers = X
    e.source = this.parseExprAtom()
  } else {
    e.specifiers = this.parseImportSpecifiers()
    this.expectContextual("from")
    e.source = this.type === w.string ? this.parseExprAtom() : this.unexpected()
  }
  this.semicolon()
  return this.finishNode(e, "ImportDeclaration")
}
U$prototype1.parseImportSpecifiers = function () {
  var e = []
  var t = true
  if (this.type === w.name) {
    var n = this.startNode()
    n.local = this.parseIdent()
    this.checkLVal(n.local, 2)
    e.push(this.finishNode(n, "ImportDefaultSpecifier"))
    if (!this.eat(w.comma)) {
      return e
    }
  }
  if (this.type === w.star) {
    var r = this.startNode()
    this.next()
    this.expectContextual("as")
    r.local = this.parseIdent()
    this.checkLVal(r.local, 2)
    e.push(this.finishNode(r, "ImportNamespaceSpecifier"))
    return e
  }
  for (this.expect(w.braceL); !this.eat(w.braceR);) {
    if (t) {
      t = false
    } else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) {
      break
    }
    var i = this.startNode()
    i.imported = this.parseIdent(true)
    if (this.eatContextual("as")) {
      i.local = this.parseIdent()
    } else {
      this.checkUnreserved(i.imported)
      i.local = i.imported
    }
    this.checkLVal(i.local, 2)
    e.push(this.finishNode(i, "ImportSpecifier"))
  }
  return e
}
U$prototype1.adaptDirectivePrologue = function (e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) {
    e[t].directive = e[t].expression.raw.slice(1, -1)
  }
}
U$prototype1.isDirectiveCandidate = function (e) {
  return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" === typeof e.expression.value && ("\"" === this.input[e.start] || "'" === this.input[e.start])
}
var /* [auto-meaningful-name] */U$prototype2 = U.prototype
U$prototype2.toAssignable = function (e, t, n) {
  if (this.options.ecmaVersion >= 6 && e) {
    switch (e.type) {
      case "Identifier":
        if (this.inAsync && "await" === e.name) {
          this.raise(e.start, "Cannot use 'await' as identifier inside an async function")
        }
        break
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break
      case "ObjectExpression":
        e.type = "ObjectPattern"
        if (n) {
          this.checkPatternErrors(n, true)
        }
        for (var r = 0, /* [auto-meaningful-name] */e$properties = e.properties; r < e$properties.length; r += 1) {
          var o = e$properties[r]
          this.toAssignable(o, t)
          if (!("RestElement" !== o.type || "ArrayPattern" !== o.argument.type && "ObjectPattern" !== o.argument.type)) {
            this.raise(o.argument.start, "Unexpected token")
          }
        }
        break
      case "Property":
        if ("init" !== e.kind) {
          this.raise(e.key.start, "Object pattern can't contain getter or setter")
        }
        this.toAssignable(e.value, t)
        break
      case "ArrayExpression":
        e.type = "ArrayPattern"
        if (n) {
          this.checkPatternErrors(n, true)
        }
        this.toAssignableList(e.elements, t)
        break
      case "SpreadElement":
        e.type = "RestElement"
        this.toAssignable(e.argument, t)
        if ("AssignmentPattern" === e.argument.type) {
          this.raise(e.argument.start, "Rest elements cannot have a default value")
        }
        break
      case "AssignmentExpression":
        if ("=" !== e.operator) {
          this.raise(e.left.end, "Only '=' operator can be used for specifying default value.")
        }
        e.type = "AssignmentPattern"
        delete e.operator
        this.toAssignable(e.left, t)
      case "AssignmentPattern":
        break
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, n)
        break
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side")
        break
      case "MemberExpression":
        if (!t) {
          break
        }
      default:
        this.raise(e.start, "Assigning to rvalue")
    }
  } else if (n) {
    this.checkPatternErrors(n, true)
  }
  return e
}
U$prototype2.toAssignableList = function (e, t) {
  for (var /* [auto-meaningful-name] */e$length = e.length, r = 0; r < e$length; r++) {
    var i = e[r]
    if (i) {
      this.toAssignable(i, t)
    }
  }
  if (e$length) {
    var o = e[e$length - 1]
    if (6 === this.options.ecmaVersion && t && o && "RestElement" === o.type && "Identifier" !== o.argument.type) {
      this.unexpected(o.argument.start)
    }
  }
  return e
}
U$prototype2.parseSpread = function (e) {
  var t = this.startNode()
  this.next()
  t.argument = this.parseMaybeAssign(false, e)
  return this.finishNode(t, "SpreadElement")
}
U$prototype2.parseRestBinding = function () {
  var e = this.startNode()
  this.next()
  if (6 === this.options.ecmaVersion && this.type !== w.name) {
    this.unexpected()
  }
  e.argument = this.parseBindingAtom()
  return this.finishNode(e, "RestElement")
}
U$prototype2.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case w.bracketL:
        var e = this.startNode()
        this.next()
        e.elements = this.parseBindingList(w.bracketR, true, true)
        return this.finishNode(e, "ArrayPattern")
      case w.braceL:
        return this.parseObj(true)
    }
  }
  return this.parseIdent()
}
U$prototype2.parseBindingList = function (e, t, n) {
  for (var r = [], i = true; !this.eat(e);) {
    if (i) {
      i = false
    } else {
      this.expect(w.comma)
    }
    if (t && this.type === w.comma) {
      r.push(null)
    } else {
      if (n && this.afterTrailingComma(e)) {
        break
      }
      if (this.type === w.ellipsis) {
        var o = this.parseRestBinding()
        this.parseBindingListItem(o)
        r.push(o)
        if (this.type === w.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element")
        }
        this.expect(e)
        break
      }
      var a = this.parseMaybeDefault(this.start, this.startLoc)
      this.parseBindingListItem(a)
      r.push(a)
    }
  }
  return r
}
U$prototype2.parseBindingListItem = function (e) {
  return e
}
U$prototype2.parseMaybeDefault = function (e, t, n) {
  n = n || this.parseBindingAtom()
  if (this.options.ecmaVersion < 6 || !this.eat(w.eq)) {
    return n
  }
  var r = this.startNodeAt(e, t)
  r.left = n
  r.right = this.parseMaybeAssign()
  return this.finishNode(r, "AssignmentPattern")
}
U$prototype2.checkLVal = function (e, t, n) {
  switch (undefined === t && (t = 0), e.type) {
    case "Identifier":
      if (2 === t && "let" === e.name) {
        this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name")
      }
      if (this.strict && this.reservedWordsStrictBind.test(e.name)) {
        this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode")
      }
      if (n) {
        if (D(n, e.name)) {
          this.raiseRecoverable(e.start, "Argument name clash")
        }
        n[e.name] = true
      }
      if (0 !== t && 5 !== t) {
        this.declareName(e.name, t, e.start)
      }
      break
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side")
      break
    case "MemberExpression":
      if (t) {
        this.raiseRecoverable(e.start, "Binding member expression")
      }
      break
    case "ObjectPattern":
      for (var r = 0, /* [auto-meaningful-name] */e$properties = e.properties; r < e$properties.length; r += 1) {
        var o = e$properties[r]
        this.checkLVal(o, t, n)
      }
      break
    case "Property":
      this.checkLVal(e.value, t, n)
      break
    case "ArrayPattern":
      for (var a = 0, /* [auto-meaningful-name] */e$elements = e.elements; a < e$elements.length; a += 1) {
        var c = e$elements[a]
        if (c) {
          this.checkLVal(c, t, n)
        }
      }
      break
    case "AssignmentPattern":
      this.checkLVal(e.left, t, n)
      break
    case "RestElement":
      this.checkLVal(e.argument, t, n)
      break
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, n)
      break
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue")
  }
}
var /* [auto-meaningful-name] */U$prototype3 = U.prototype
U$prototype3.checkPropClash = function (e, t, n) {
  if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === e.type) && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var r
    var /* [auto-meaningful-name] */e$key = e.key
    switch (e$key.type) {
      case "Identifier":
        r = e$key.name
        break
      case "Literal":
        r = String(e$key.value)
        break
      default:
        return
    }
    var /* [auto-meaningful-name] */e$kind = e.kind
    if (this.options.ecmaVersion >= 6) {
      if ("__proto__" === r && "init" === e$kind) {
        if (t.proto) {
          if (n) {
            if (n.doubleProto < 0) {
              n.doubleProto = e$key.start
            }
          } else {
            this.raiseRecoverable(e$key.start, "Redefinition of __proto__ property")
          }
        }
        t.proto = true
      }
    } else {
      var a = t[r = "$" + r]
      if (a) {
        if ("init" === e$kind ? this.strict && a.init || a.get || a.set : a.init || a[e$kind]) {
          this.raiseRecoverable(e$key.start, "Redefinition of property")
        }
      } else {
        a = t[r] = {
          init: false,
          get: false,
          set: false
        }
      }
      a[e$kind] = true
    }
  }
}
U$prototype3.parseExpression = function (e, t) {
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  var i = this.parseMaybeAssign(e, t)
  if (this.type === w.comma) {
    var o = this.startNodeAt(this$start, this$startLoc)
    for (o.expressions = [i]; this.eat(w.comma);) {
      o.expressions.push(this.parseMaybeAssign(e, t))
    }
    return this.finishNode(o, "SequenceExpression")
  }
  return i
}
U$prototype3.parseMaybeAssign = function (e, t, n) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(e)
    }
    this.exprAllowed = false
  }
  var r = false
  var i = -1
  var o = -1
  if (t) {
    i = t.parenthesizedAssign
    o = t.trailingComma
    t.parenthesizedAssign = t.trailingComma = -1
  } else {
    t = new z()
    r = true
  }
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  if (!(this.type !== w.parenL && this.type !== w.name)) {
    this.potentialArrowAt = this.start
  }
  var c = this.parseMaybeConditional(e, t)
  if (n) {
    c = n.call(this, c, this$start, this$startLoc)
  }
  if (this.type.isAssign) {
    var u = this.startNodeAt(this$start, this$startLoc)
    u.operator = this.value
    u.left = this.type === w.eq ? this.toAssignable(c, false, t) : c
    if (!r) {
      t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1
    }
    if (t.shorthandAssign >= u.left.start) {
      t.shorthandAssign = -1
    }
    this.checkLVal(c)
    this.next()
    u.right = this.parseMaybeAssign(e)
    return this.finishNode(u, "AssignmentExpression")
  }
  if (r) {
    this.checkExpressionErrors(t, true)
  }
  if (i > -1) {
    t.parenthesizedAssign = i
  }
  if (o > -1) {
    t.trailingComma = o
  }
  return c
}
U$prototype3.parseMaybeConditional = function (e, t) {
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  var i = this.parseExprOps(e, t)
  if (this.checkExpressionErrors(t)) {
    return i
  }
  if (this.eat(w.question)) {
    var o = this.startNodeAt(this$start, this$startLoc)
    o.test = i
    o.consequent = this.parseMaybeAssign()
    this.expect(w.colon)
    o.alternate = this.parseMaybeAssign(e)
    return this.finishNode(o, "ConditionalExpression")
  }
  return i
}
U$prototype3.parseExprOps = function (e, t) {
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  var i = this.parseMaybeUnary(t, false)
  return this.checkExpressionErrors(t) || i.start === this$start && "ArrowFunctionExpression" === i.type ? i : this.parseExprOp(i, this$start, this$startLoc, -1, e)
}
U$prototype3.parseExprOp = function (e, t, n, r, i) {
  var /* [auto-meaningful-name] */this$type$binop = this.type.binop
  if (null != this$type$binop && (!i || this.type !== w._in) && this$type$binop > r) {
    var a = this.type === w.logicalOR || this.type === w.logicalAND
    var s = this.type === w.coalesce
    if (s) {
      this$type$binop = w.logicalAND.binop
    }
    var /* [auto-meaningful-name] */this$value = this.value
    this.next()
    var /* [auto-meaningful-name] */this$start = this.start
    var /* [auto-meaningful-name] */this$startLoc = this.startLoc
    var f = this.parseExprOp(this.parseMaybeUnary(null, false), this$start, this$startLoc, this$type$binop, i)
    var d = this.buildBinary(t, n, e, f, this$value, a || s)
    if (a && this.type === w.coalesce || s && (this.type === w.logicalOR || this.type === w.logicalAND)) {
      this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses")
    }
    return this.parseExprOp(d, t, n, r, i)
  }
  return e
}
U$prototype3.buildBinary = function (e, t, n, r, i, o) {
  var a = this.startNodeAt(e, t)
  a.left = n
  a.operator = i
  a.right = r
  return this.finishNode(a, o ? "LogicalExpression" : "BinaryExpression")
}
U$prototype3.parseMaybeUnary = function (e, t) {
  var n
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) {
    n = this.parseAwait()
    t = true
  } else if (this.type.prefix) {
    var o = this.startNode()
    var a = this.type === w.incDec
    o.operator = this.value
    o.prefix = true
    this.next()
    o.argument = this.parseMaybeUnary(null, true)
    this.checkExpressionErrors(e, true)
    if (a) {
      this.checkLVal(o.argument)
    } else {
      if (this.strict && "delete" === o.operator && "Identifier" === o.argument.type) {
        this.raiseRecoverable(o.start, "Deleting local variable in strict mode")
      } else {
        t = true
      }
    }
    n = this.finishNode(o, a ? "UpdateExpression" : "UnaryExpression")
  } else {
    n = this.parseExprSubscripts(e)
    if (this.checkExpressionErrors(e)) {
      return n
    }
    for (; this.type.postfix && !this.canInsertSemicolon();) {
      var s = this.startNodeAt(this$start, this$startLoc)
      s.operator = this.value
      s.prefix = false
      s.argument = n
      this.checkLVal(n)
      this.next()
      n = this.finishNode(s, "UpdateExpression")
    }
  }
  return !t && this.eat(w.starstar) ? this.buildBinary(this$start, this$startLoc, n, this.parseMaybeUnary(null, false), "**", false) : n
}
U$prototype3.parseExprSubscripts = function (e) {
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  var r = this.parseExprAtom(e)
  if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) {
    return r
  }
  var i = this.parseSubscripts(r, this$start, this$startLoc)
  if (e && "MemberExpression" === i.type) {
    if (e.parenthesizedAssign >= i.start) {
      e.parenthesizedAssign = -1
    }
    if (e.parenthesizedBind >= i.start) {
      e.parenthesizedBind = -1
    }
  }
  return i
}
U$prototype3.parseSubscripts = function (e, t, n, r) {
  for (var i = this.options.ecmaVersion >= 8 && "Identifier" === e.type && "async" === e.name && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = false;;) {
    var a = this.parseSubscript(e, t, n, r, i, o)
    if (a.optional) {
      o = true
    }
    if (a === e || "ArrowFunctionExpression" === a.type) {
      if (o) {
        var s = this.startNodeAt(t, n)
        s.expression = a
        a = this.finishNode(s, "ChainExpression")
      }
      return a
    }
    e = a
  }
}
U$prototype3.parseSubscript = function (e, t, n, r, i, o) {
  var a = this.options.ecmaVersion >= 11
  var s = a && this.eat(w.questionDot)
  if (r && s) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions")
  }
  var c = this.eat(w.bracketL)
  if (c || s && this.type !== w.parenL && this.type !== w.backQuote || this.eat(w.dot)) {
    var u = this.startNodeAt(t, n)
    u.object = e
    u.property = c ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved)
    u.computed = !!c
    if (c) {
      this.expect(w.bracketR)
    }
    if (a) {
      u.optional = s
    }
    e = this.finishNode(u, "MemberExpression")
  } else if (!r && this.eat(w.parenL)) {
    var l = new z()
    var /* [auto-meaningful-name] */this$yieldPos = this.yieldPos
    var /* [auto-meaningful-name] */this$awaitPos = this.awaitPos
    var /* [auto-meaningful-name] */this$awaitIdentPos = this.awaitIdentPos
    this.yieldPos = 0
    this.awaitPos = 0
    this.awaitIdentPos = 0
    var p = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, false, l)
    if (i && !s && !this.canInsertSemicolon() && this.eat(w.arrow)) {
      this.checkPatternErrors(l, false)
      this.checkYieldAwaitInDefaultParams()
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function")
      }
      this.yieldPos = this$yieldPos
      this.awaitPos = this$awaitPos
      this.awaitIdentPos = this$awaitIdentPos
      return this.parseArrowExpression(this.startNodeAt(t, n), p, true)
    }
    this.checkExpressionErrors(l, true)
    this.yieldPos = this$yieldPos || this.yieldPos
    this.awaitPos = this$awaitPos || this.awaitPos
    this.awaitIdentPos = this$awaitIdentPos || this.awaitIdentPos
    var _ = this.startNodeAt(t, n)
    _.callee = e
    _.arguments = p
    if (a) {
      _.optional = s
    }
    e = this.finishNode(_, "CallExpression")
  } else if (this.type === w.backQuote) {
    if (s || o) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions")
    }
    var A = this.startNodeAt(t, n)
    A.tag = e
    A.quasi = this.parseTemplate({
      isTagged: true
    })
    e = this.finishNode(A, "TaggedTemplateExpression")
  }
  return e
}
U$prototype3.parseExprAtom = function (e) {
  if (this.type === w.slash) {
    this.readRegexp()
  }
  var t
  var n = this.potentialArrowAt === this.start
  switch (this.type) {
    case w._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method")
      }
      t = this.startNode()
      this.next()
      if (!(this.type !== w.parenL || this.allowDirectSuper)) {
        this.raise(t.start, "super() call outside constructor of a subclass")
      }
      if (this.type !== w.dot && this.type !== w.bracketL && this.type !== w.parenL) {
        this.unexpected()
      }
      return this.finishNode(t, "Super")
    case w._this:
      t = this.startNode()
      this.next()
      return this.finishNode(t, "ThisExpression")
    case w.name:
      var /* [auto-meaningful-name] */this$start = this.start,
        /* [auto-meaningful-name] */this$startLoc = this.startLoc,
        /* [auto-meaningful-name] */this$containsEsc = this.containsEsc,
        a = this.parseIdent(false)
      if (this.options.ecmaVersion >= 8 && !this$containsEsc && "async" === a.name && !this.canInsertSemicolon() && this.eat(w._function)) {
        return this.parseFunction(this.startNodeAt(this$start, this$startLoc), 0, false, true)
      }
      if (n && !this.canInsertSemicolon()) {
        if (this.eat(w.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(this$start, this$startLoc), [a], false)
        }
        if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === w.name && !this$containsEsc) {
          a = this.parseIdent(false)
          if (!(!this.canInsertSemicolon() && this.eat(w.arrow))) {
            this.unexpected()
          }
          return this.parseArrowExpression(this.startNodeAt(this$start, this$startLoc), [a], true)
        }
      }
      return a
    case w.regexp:
      var /* [auto-meaningful-name] */this$value = this.value;
      (t = this.parseLiteral(this$value.value)).regex = {
        pattern: this$value.pattern,
        flags: this$value.flags
      }
      return t
    case w.num:
    case w.string:
      return this.parseLiteral(this.value)
    case w._null:
    case w._true:
    case w._false:
      (t = this.startNode()).value = this.type === w._null ? null : this.type === w._true
      t.raw = this.type.keyword
      this.next()
      return this.finishNode(t, "Literal")
    case w.parenL:
      var /* [auto-meaningful-name] */this$start1 = this.start,
        u = this.parseParenAndDistinguishExpression(n)
      if (e) {
        if (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(u)) {
          e.parenthesizedAssign = this$start1
        }
        if (e.parenthesizedBind < 0) {
          e.parenthesizedBind = this$start1
        }
      }
      return u
    case w.bracketL:
      t = this.startNode()
      this.next()
      t.elements = this.parseExprList(w.bracketR, true, true, e)
      return this.finishNode(t, "ArrayExpression")
    case w.braceL:
      return this.parseObj(false, e)
    case w._function:
      t = this.startNode()
      this.next()
      return this.parseFunction(t, 0)
    case w._class:
      return this.parseClass(this.startNode(), false)
    case w._new:
      return this.parseNew()
    case w.backQuote:
      return this.parseTemplate()
    case w._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected()
    default:
      this.unexpected()
  }
}
U$prototype3.parseExprImport = function () {
  var e = this.startNode()
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import")
  }
  var t = this.parseIdent(true)
  switch (this.type) {
    case w.parenL:
      return this.parseDynamicImport(e)
    case w.dot:
      e.meta = t
      return this.parseImportMeta(e)
    default:
      this.unexpected()
  }
}
U$prototype3.parseDynamicImport = function (e) {
  this.next()
  e.source = this.parseMaybeAssign()
  if (!this.eat(w.parenR)) {
    var /* [auto-meaningful-name] */this$start = this.start
    if (this.eat(w.comma) && this.eat(w.parenR)) {
      this.raiseRecoverable(this$start, "Trailing comma is not allowed in import()")
    } else {
      this.unexpected(this$start)
    }
  }
  return this.finishNode(e, "ImportExpression")
}
U$prototype3.parseImportMeta = function (e) {
  this.next()
  var /* [auto-meaningful-name] */this$containsEsc = this.containsEsc
  e.property = this.parseIdent(true)
  if ("meta" !== e.property.name) {
    this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'")
  }
  if (this$containsEsc) {
    this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters")
  }
  if ("module" !== this.options.sourceType) {
    this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module")
  }
  return this.finishNode(e, "MetaProperty")
}
U$prototype3.parseLiteral = function (e) {
  var t = this.startNode()
  t.value = e
  t.raw = this.input.slice(this.start, this.end)
  if (110 === t.raw.charCodeAt(t.raw.length - 1)) {
    t.bigint = t.raw.slice(0, -1).replace(/_/g, "")
  }
  this.next()
  return this.finishNode(t, "Literal")
}
U$prototype3.parseParenExpression = function () {
  this.expect(w.parenL)
  var e = this.parseExpression()
  this.expect(w.parenR)
  return e
}
U$prototype3.parseParenAndDistinguishExpression = function (e) {
  var t
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  var i = this.options.ecmaVersion >= 8
  if (this.options.ecmaVersion >= 6) {
    this.next()
    var /* [auto-meaningful-name] */this$start1
    var /* [auto-meaningful-name] */this$start2 = this.start
    var /* [auto-meaningful-name] */this$startLoc1 = this.startLoc
    var c = []
    var u = true
    var l = false
    var f = new z()
    var /* [auto-meaningful-name] */this$yieldPos = this.yieldPos
    var /* [auto-meaningful-name] */this$awaitPos = this.awaitPos
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== w.parenR;) {
      if (u) {
        u = false
      } else {
        this.expect(w.comma)
      }
      if (i && this.afterTrailingComma(w.parenR, true)) {
        l = true
        break
      }
      if (this.type === w.ellipsis) {
        this$start1 = this.start
        c.push(this.parseParenItem(this.parseRestBinding()))
        if (this.type === w.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element")
        }
        break
      }
      c.push(this.parseMaybeAssign(false, f, this.parseParenItem))
    }
    var /* [auto-meaningful-name] */this$start3 = this.start
    var /* [auto-meaningful-name] */this$startLoc2 = this.startLoc
    this.expect(w.parenR)
    if (e && !this.canInsertSemicolon() && this.eat(w.arrow)) {
      this.checkPatternErrors(f, false)
      this.checkYieldAwaitInDefaultParams()
      this.yieldPos = this$yieldPos
      this.awaitPos = this$awaitPos
      return this.parseParenArrowList(this$start, this$startLoc, c)
    }
    if (!(c.length && !l)) {
      this.unexpected(this.lastTokStart)
    }
    if (this$start1) {
      this.unexpected(this$start1)
    }
    this.checkExpressionErrors(f, true)
    this.yieldPos = this$yieldPos || this.yieldPos
    this.awaitPos = this$awaitPos || this.awaitPos
    if (c.length > 1) {
      (t = this.startNodeAt(this$start2, this$startLoc1)).expressions = c
      this.finishNodeAt(t, "SequenceExpression", this$start3, this$startLoc2)
    } else {
      t = c[0]
    }
  } else {
    t = this.parseParenExpression()
  }
  if (this.options.preserveParens) {
    var A = this.startNodeAt(this$start, this$startLoc)
    A.expression = t
    return this.finishNode(A, "ParenthesizedExpression")
  }
  return t
}
U$prototype3.parseParenItem = function (e) {
  return e
}
U$prototype3.parseParenArrowList = function (e, t, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), n)
}
var Z = []
U$prototype3.parseNew = function () {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new")
  }
  var e = this.startNode()
  var t = this.parseIdent(true)
  if (this.options.ecmaVersion >= 6 && this.eat(w.dot)) {
    e.meta = t
    var /* [auto-meaningful-name] */this$containsEsc = this.containsEsc
    e.property = this.parseIdent(true)
    if ("target" !== e.property.name) {
      this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'")
    }
    if (this$containsEsc) {
      this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters")
    }
    if (!this.inNonArrowFunction()) {
      this.raiseRecoverable(e.start, "'new.target' can only be used in functions")
    }
    return this.finishNode(e, "MetaProperty")
  }
  var /* [auto-meaningful-name] */this$start = this.start
  var /* [auto-meaningful-name] */this$startLoc = this.startLoc
  var o = this.type === w._import
  e.callee = this.parseSubscripts(this.parseExprAtom(), this$start, this$startLoc, true)
  if (o && "ImportExpression" === e.callee.type) {
    this.raise(this$start, "Cannot use new with import()")
  }
  if (this.eat(w.parenL)) {
    e.arguments = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, false)
  } else {
    e.arguments = Z
  }
  return this.finishNode(e, "NewExpression")
}
U$prototype3.parseTemplateElement = function (e) {
  var /* [auto-meaningful-name] */e$isTagged = e.isTagged
  var n = this.startNode()
  if (this.type === w.invalidTemplate) {
    if (!e$isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal")
    }
    n.value = {
      raw: this.value,
      cooked: null
    }
  } else {
    n.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    }
  }
  this.next()
  n.tail = this.type === w.backQuote
  return this.finishNode(n, "TemplateElement")
}
U$prototype3.parseTemplate = function (e) {
  if (undefined === e) {
    e = {}
  }
  var /* [auto-meaningful-name] */e$isTagged = e.isTagged
  if (undefined === e$isTagged) {
    e$isTagged = false
  }
  var n = this.startNode()
  this.next()
  n.expressions = []
  var r = this.parseTemplateElement({
    isTagged: e$isTagged
  })
  for (n.quasis = [r]; !r.tail;) {
    if (this.type === w.eof) {
      this.raise(this.pos, "Unterminated template literal")
    }
    this.expect(w.dollarBraceL)
    n.expressions.push(this.parseExpression())
    this.expect(w.braceR)
    n.quasis.push(r = this.parseTemplateElement({
      isTagged: e$isTagged
    }))
  }
  this.next()
  return this.finishNode(n, "TemplateLiteral")
}
U$prototype3.isAsyncProp = function (e) {
  return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.type === w.name || this.type === w.num || this.type === w.string || this.type === w.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === w.star) && !E.test(this.input.slice(this.lastTokEnd, this.start))
}
U$prototype3.parseObj = function (e, t) {
  var n = this.startNode()
  var r = true
  var i = {}
  for (n.properties = [], this.next(); !this.eat(w.braceR);) {
    if (r) {
      r = false
    } else if (this.expect(w.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(w.braceR)) {
      break
    }
    var o = this.parseProperty(e, t)
    if (!e) {
      this.checkPropClash(o, i, t)
    }
    n.properties.push(o)
  }
  return this.finishNode(n, e ? "ObjectPattern" : "ObjectExpression")
}
U$prototype3.parseProperty = function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */this$start
  var /* [auto-meaningful-name] */this$startLoc
  var a = this.startNode()
  if (this.options.ecmaVersion >= 9 && this.eat(w.ellipsis)) {
    return e ? (a.argument = this.parseIdent(false), this.type === w.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === w.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(false, t), this.type === w.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"))
  }
  if (this.options.ecmaVersion >= 6) {
    a.method = false
    a.shorthand = false
    if (e || t) {
      this$start = this.start
      this$startLoc = this.startLoc
    }
    if (!e) {
      n = this.eat(w.star)
    }
  }
  var /* [auto-meaningful-name] */this$containsEsc = this.containsEsc
  this.parsePropertyName(a)
  if (!e && !this$containsEsc && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(a)) {
    r = true
    n = this.options.ecmaVersion >= 9 && this.eat(w.star)
    this.parsePropertyName(a, t)
  } else {
    r = false
  }
  this.parsePropertyValue(a, e, n, r, this$start, this$startLoc, t, this$containsEsc)
  return this.finishNode(a, "Property")
}
U$prototype3.parsePropertyValue = function (e, t, n, r, i, o, a, s) {
  if ((n || r) && this.type === w.colon) {
    this.unexpected()
  }
  if (this.eat(w.colon)) {
    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, a)
    e.kind = "init"
  } else if (this.options.ecmaVersion >= 6 && this.type === w.parenL) {
    if (t) {
      this.unexpected()
    }
    e.kind = "init"
    e.method = true
    e.value = this.parseMethod(n, r)
  } else if (t || s || !(this.options.ecmaVersion >= 5) || e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || this.type === w.comma || this.type === w.braceR || this.type === w.eq) {
    if (this.options.ecmaVersion >= 6 && !e.computed && "Identifier" === e.key.type) {
      if (n || r) {
        this.unexpected()
      }
      this.checkUnreserved(e.key)
      if (!("await" !== e.key.name || this.awaitIdentPos)) {
        this.awaitIdentPos = i
      }
      e.kind = "init"
      if (t) {
        e.value = this.parseMaybeDefault(i, o, e.key)
      } else {
        if (this.type === w.eq && a) {
          if (a.shorthandAssign < 0) {
            a.shorthandAssign = this.start
          }
          e.value = this.parseMaybeDefault(i, o, e.key)
        } else {
          e.value = e.key
        }
      }
      e.shorthand = true
    } else {
      this.unexpected()
    }
  } else {
    if (n || r) {
      this.unexpected()
    }
    e.kind = e.key.name
    this.parsePropertyName(e)
    e.value = this.parseMethod(false)
    var c = "get" === e.kind ? 0 : 1
    if (e.value.params.length !== c) {
      var /* [auto-meaningful-name] */e$value$start = e.value.start
      if ("get" === e.kind) {
        this.raiseRecoverable(e$value$start, "getter should have no params")
      } else {
        this.raiseRecoverable(e$value$start, "setter should have exactly one param")
      }
    } else if ("set" === e.kind && "RestElement" === e.value.params[0].type) {
      this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params")
    }
  }
}
U$prototype3.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(w.bracketL)) {
      e.computed = true
      e.key = this.parseMaybeAssign()
      this.expect(w.bracketR)
      return e.key
    }
    e.computed = false
  }
  return e.key = this.type === w.num || this.type === w.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
}
U$prototype3.initFunction = function (e) {
  e.id = null
  if (this.options.ecmaVersion >= 6) {
    e.generator = e.expression = false
  }
  if (this.options.ecmaVersion >= 8) {
    e.async = false
  }
}
U$prototype3.parseMethod = function (e, t, n) {
  var r = this.startNode()
  var /* [auto-meaningful-name] */this$yieldPos = this.yieldPos
  var /* [auto-meaningful-name] */this$awaitPos = this.awaitPos
  var /* [auto-meaningful-name] */this$awaitIdentPos = this.awaitIdentPos
  this.initFunction(r)
  if (this.options.ecmaVersion >= 6) {
    r.generator = e
  }
  if (this.options.ecmaVersion >= 8) {
    r.async = !!t
  }
  this.yieldPos = 0
  this.awaitPos = 0
  this.awaitIdentPos = 0
  this.enterScope(64 | j(t, r.generator) | (n ? 128 : 0))
  this.expect(w.parenL)
  r.params = this.parseBindingList(w.parenR, false, this.options.ecmaVersion >= 8)
  this.checkYieldAwaitInDefaultParams()
  this.parseFunctionBody(r, false, true)
  this.yieldPos = this$yieldPos
  this.awaitPos = this$awaitPos
  this.awaitIdentPos = this$awaitIdentPos
  return this.finishNode(r, "FunctionExpression")
}
U$prototype3.parseArrowExpression = function (e, t, n) {
  var /* [auto-meaningful-name] */this$yieldPos = this.yieldPos
  var /* [auto-meaningful-name] */this$awaitPos = this.awaitPos
  var /* [auto-meaningful-name] */this$awaitIdentPos = this.awaitIdentPos
  this.enterScope(16 | j(n, false))
  this.initFunction(e)
  if (this.options.ecmaVersion >= 8) {
    e.async = !!n
  }
  this.yieldPos = 0
  this.awaitPos = 0
  this.awaitIdentPos = 0
  e.params = this.toAssignableList(t, true)
  this.parseFunctionBody(e, true, false)
  this.yieldPos = this$yieldPos
  this.awaitPos = this$awaitPos
  this.awaitIdentPos = this$awaitIdentPos
  return this.finishNode(e, "ArrowFunctionExpression")
}
U$prototype3.parseFunctionBody = function (e, t, n) {
  var r = t && this.type !== w.braceL
  var /* [auto-meaningful-name] */this$strict = this.strict
  var o = false
  if (r) {
    e.body = this.parseMaybeAssign()
    e.expression = true
    this.checkParams(e, false)
  } else {
    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params)
    if (!(this$strict && !a)) {
      if ((o = this.strictDirective(this.end)) && a) {
        this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list")
      }
    }
    var /* [auto-meaningful-name] */this$labels = this.labels
    this.labels = []
    if (o) {
      this.strict = true
    }
    this.checkParams(e, !this$strict && !o && !t && !n && this.isSimpleParamList(e.params))
    if (this.strict && e.id) {
      this.checkLVal(e.id, 5)
    }
    e.body = this.parseBlock(false, undefined, o && !this$strict)
    e.expression = false
    this.adaptDirectivePrologue(e.body.body)
    this.labels = this$labels
  }
  this.exitScope()
}
U$prototype3.isSimpleParamList = function (e) {
  for (var t = 0, n = e; t < n.length; t += 1) {
    if ("Identifier" !== n[t].type) {
      return false
    }
  }
  return true
}
U$prototype3.checkParams = function (e, t) {
  for (var n = {}, r = 0, /* [auto-meaningful-name] */e$params = e.params; r < e$params.length; r += 1) {
    var o = e$params[r]
    this.checkLVal(o, 1, t ? null : n)
  }
}
U$prototype3.parseExprList = function (e, t, n, r) {
  for (var i = [], o = true; !this.eat(e);) {
    if (o) {
      o = false
    } else if (this.expect(w.comma), t && this.afterTrailingComma(e)) {
      break
    }
    var a = undefined
    if (n && this.type === w.comma) {
      a = null
    } else {
      if (this.type === w.ellipsis) {
        a = this.parseSpread(r)
        if (r && this.type === w.comma && r.trailingComma < 0) {
          r.trailingComma = this.start
        }
      } else {
        a = this.parseMaybeAssign(false, r)
      }
    }
    i.push(a)
  }
  return i
}
U$prototype3.checkUnreserved = function (e) {
  var /* [auto-meaningful-name] */e$start = e.start
  var /* [auto-meaningful-name] */e$end = e.end
  var /* [auto-meaningful-name] */e$name = e.name
  if (!(this.inGenerator && "yield" === e$name && this.raiseRecoverable(e$start, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === e$name && this.raiseRecoverable(e$start, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(e$name) && this.raise(e$start, "Unexpected keyword '" + e$name + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e$start, e$end).indexOf("\\"))) {
    if ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(e$name)) {
      if (!(this.inAsync || "await" !== e$name)) {
        this.raiseRecoverable(e$start, "Cannot use keyword 'await' outside an async function")
      }
      this.raiseRecoverable(e$start, "The keyword '" + e$name + "' is reserved")
    }
  }
}
U$prototype3.parseIdent = function (e, t) {
  var n = this.startNode()
  if (this.type === w.name) {
    n.name = this.value
  } else {
    if (this.type.keyword) {
      n.name = this.type.keyword
      if (!("class" !== n.name && "function" !== n.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart))) {
        this.context.pop()
      }
    } else {
      this.unexpected()
    }
  }
  this.next(!!e)
  this.finishNode(n, "Identifier")
  if (!e) {
    this.checkUnreserved(n)
    if (!("await" !== n.name || this.awaitIdentPos)) {
      this.awaitIdentPos = n.start
    }
  }
  return n
}
U$prototype3.parseYield = function (e) {
  if (!this.yieldPos) {
    this.yieldPos = this.start
  }
  var t = this.startNode()
  this.next()
  if (this.type === w.semi || this.canInsertSemicolon() || this.type !== w.star && !this.type.startsExpr) {
    t.delegate = false
    t.argument = null
  } else {
    t.delegate = this.eat(w.star)
    t.argument = this.parseMaybeAssign(e)
  }
  return this.finishNode(t, "YieldExpression")
}
U$prototype3.parseAwait = function () {
  if (!this.awaitPos) {
    this.awaitPos = this.start
  }
  var e = this.startNode()
  this.next()
  e.argument = this.parseMaybeUnary(null, false)
  return this.finishNode(e, "AwaitExpression")
}
var /* [auto-meaningful-name] */U$prototype4 = U.prototype
U$prototype4.raise = function (e, t) {
  var n = N(this.input, e)
  t += " (" + n.line + ":" + n.column + ")"
  var r = new SyntaxError(t)
  r.pos = e
  r.loc = n
  r.raisedAt = this.pos
  throw r
}
U$prototype4.raiseRecoverable = U$prototype4.raise
U$prototype4.curPosition = function () {
  if (this.options.locations) {
    return new F(this.curLine, this.pos - this.lineStart)
  }
}
var /* [auto-meaningful-name] */U$prototype5 = U.prototype
var ne = function (e) {
  this.flags = e
  this.var = []
  this.lexical = []
  this.functions = []
}
U$prototype5.enterScope = function (e) {
  this.scopeStack.push(new ne(e))
}
U$prototype5.exitScope = function () {
  this.scopeStack.pop()
}
U$prototype5.treatFunctionsAsVarInScope = function (e) {
  return 2 & e.flags || !this.inModule && 1 & e.flags
}
U$prototype5.declareName = function (e, t, n) {
  var r = false
  if (2 === t) {
    var i = this.currentScope()
    r = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1
    i.lexical.push(e)
    if (this.inModule && 1 & i.flags) {
      delete this.undefinedExports[e]
    }
  } else if (4 === t) {
    this.currentScope().lexical.push(e)
  } else if (3 === t) {
    var o = this.currentScope()
    r = this.treatFunctionsAsVar ? o.lexical.indexOf(e) > -1 : o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1
    o.functions.push(e)
  } else {
    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
      var s = this.scopeStack[a]
      if (s.lexical.indexOf(e) > -1 && !(32 & s.flags && s.lexical[0] === e) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(e) > -1) {
        r = true
        break
      }
      s.var.push(e)
      if (this.inModule && 1 & s.flags) {
        delete this.undefinedExports[e]
      }
      if (3 & s.flags) {
        break
      }
    }
  }
  if (r) {
    this.raiseRecoverable(n, "Identifier '" + e + "' has already been declared")
  }
}
U$prototype5.checkLocalExport = function (e) {
  if (-1 === this.scopeStack[0].lexical.indexOf(e.name) && -1 === this.scopeStack[0].var.indexOf(e.name)) {
    this.undefinedExports[e.name] = e
  }
}
U$prototype5.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1]
}
U$prototype5.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1;; e--) {
    var t = this.scopeStack[e]
    if (3 & t.flags) {
      return t
    }
  }
}
U$prototype5.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1;; e--) {
    var t = this.scopeStack[e]
    if (3 & t.flags && !(16 & t.flags)) {
      return t
    }
  }
}
var re = function (e, t, n) {
  this.type = ""
  this.start = t
  this.end = 0
  if (e.options.locations) {
    this.loc = new P(e, n)
  }
  if (e.options.directSourceFile) {
    this.sourceFile = e.options.directSourceFile
  }
  if (e.options.ranges) {
    this.range = [t, 0]
  }
}
var /* [auto-meaningful-name] */U$prototype6 = U.prototype
function oe(e, t, n, r) {
  e.type = t
  e.end = n
  if (this.options.locations) {
    e.loc.end = r
  }
  if (this.options.ranges) {
    e.range[1] = n
  }
  return e
}
U$prototype6.startNode = function () {
  return new re(this, this.start, this.startLoc)
}
U$prototype6.startNodeAt = function (e, t) {
  return new re(this, e, t)
}
U$prototype6.finishNode = function (e, t) {
  return oe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc)
}
U$prototype6.finishNodeAt = function (e, t, n, r) {
  return oe.call(this, e, t, n, r)
}
var ae = function (e, t, n, r, i) {
  this.token = e
  this.isExpr = !!t
  this.preserveSpace = !!n
  this.override = r
  this.generator = !!i
}
var se = {
  b_stat: new ae("{", false),
  b_expr: new ae("{", true),
  b_tmpl: new ae("${", false),
  p_stat: new ae("(", false),
  p_expr: new ae("(", true),
  q_tmpl: new ae("`", true, true, function (e) {
    return e.tryReadTemplateToken()
  }),
  f_stat: new ae("function", false),
  f_expr: new ae("function", true),
  f_expr_gen: new ae("function", true, false, null, true),
  f_gen: new ae("function", false, false, null, true)
}
var /* [auto-meaningful-name] */U$prototype7 = U.prototype
U$prototype7.initialContext = function () {
  return [se.b_stat]
}
U$prototype7.braceIsBlock = function (e) {
  var t = this.curContext()
  return t === se.f_expr || t === se.f_stat || (e !== w.colon || t !== se.b_stat && t !== se.b_expr ? e === w._return || e === w.name && this.exprAllowed ? E.test(this.input.slice(this.lastTokEnd, this.start)) : e === w._else || e === w.semi || e === w.eof || e === w.parenR || e === w.arrow || (e === w.braceL ? t === se.b_stat : e !== w._var && e !== w._const && e !== w.name && !this.exprAllowed) : !t.isExpr)
}
U$prototype7.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e]
    if ("function" === t.token) {
      return t.generator
    }
  }
  return false
}
U$prototype7.updateContext = function (e) {
  var /* [auto-meaningful-name] */this$type$updateContext
  var /* [auto-meaningful-name] */this$type = this.type
  if (this$type.keyword && e === w.dot) {
    this.exprAllowed = false
  } else {
    if (this$type$updateContext = this$type.updateContext) {
      this$type$updateContext.call(this, e)
    } else {
      this.exprAllowed = this$type.beforeExpr
    }
  }
}
w.parenR.updateContext = w.braceR.updateContext = function () {
  if (1 !== this.context.length) {
    var e = this.context.pop()
    if (e === se.b_stat && "function" === this.curContext().token) {
      e = this.context.pop()
    }
    this.exprAllowed = !e.isExpr
  } else {
    this.exprAllowed = true
  }
}
w.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? se.b_stat : se.b_expr)
  this.exprAllowed = true
}
w.dollarBraceL.updateContext = function () {
  this.context.push(se.b_tmpl)
  this.exprAllowed = true
}
w.parenL.updateContext = function (e) {
  var t = e === w._if || e === w._for || e === w._with || e === w._while
  this.context.push(t ? se.p_stat : se.p_expr)
  this.exprAllowed = true
}
w.incDec.updateContext = function () {}
w._function.updateContext = w._class.updateContext = function (e) {
  if (!e.beforeExpr || e === w.semi || e === w._else || e === w._return && E.test(this.input.slice(this.lastTokEnd, this.start)) || (e === w.colon || e === w.braceL) && this.curContext() === se.b_stat) {
    this.context.push(se.f_stat)
  } else {
    this.context.push(se.f_expr)
  }
  this.exprAllowed = false
}
w.backQuote.updateContext = function () {
  if (this.curContext() === se.q_tmpl) {
    this.context.pop()
  } else {
    this.context.push(se.q_tmpl)
  }
  this.exprAllowed = false
}
w.star.updateContext = function (e) {
  if (e === w._function) {
    var t = this.context.length - 1
    if (this.context[t] === se.f_expr) {
      this.context[t] = se.f_expr_gen
    } else {
      this.context[t] = se.f_gen
    }
  }
  this.exprAllowed = true
}
w.name.updateContext = function (e) {
  var t = false
  if (this.options.ecmaVersion >= 6 && e !== w.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext())) {
    t = true
  }
  this.exprAllowed = t
}
var /* [auto-meaningful-name] */ASCIIASCII_Hex_DigitAHexAlphabeticAlphaAnyAssignedBidi_ControlBidi_CBidi_MirroredBidi_MCase_IgnorableCICasedChanges_When_CasefoldedCWCFChanges_When_CasemappedCWCMChanges_When_LowercasedCWLChanges_When_NFKC_CasefoldedCWKCFChanges_When_TitlecasedCWTChanges_When_UppercasedCWUDashDefault_Ignorable_Code_PointDIDeprecatedDepDiacriticDiaEmojiEmoji_ComponentEmoji_ModifierEmoji_Modifier_BaseEmoji_PresentationExtenderExtGrapheme_BaseGr_BaseGrapheme_ExtendGr_ExtHex_DigitHexIDS_Binary_OperatorIDSBIDS_Trinary_OperatorIDSTID_ContinueIDCID_StartIDSIdeographicIdeoJoin_ControlJoin_CLogical_Order_ExceptionLOELowercaseLowerMathNoncharacter_Code_PointNCharPattern_SyntaxPat_SynPattern_White_SpacePat_WSQuotation_MarkQMarkRadicalRegional_IndicatorRISentence_TerminalSTermSoft_DottedSDTerminal_PunctuationTermUnified_IdeographUIdeoUppercaseUpperVariation_SelectorVSWhite_SpaceSpaceXID_ContinueXIDCXID_StartXIDS = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS"
var le = ASCIIASCII_Hex_DigitAHexAlphabeticAlphaAnyAssignedBidi_ControlBidi_CBidi_MirroredBidi_MCase_IgnorableCICasedChanges_When_CasefoldedCWCFChanges_When_CasemappedCWCMChanges_When_LowercasedCWLChanges_When_NFKC_CasefoldedCWKCFChanges_When_TitlecasedCWTChanges_When_UppercasedCWUDashDefault_Ignorable_Code_PointDIDeprecatedDepDiacriticDiaEmojiEmoji_ComponentEmoji_ModifierEmoji_Modifier_BaseEmoji_PresentationExtenderExtGrapheme_BaseGr_BaseGrapheme_ExtendGr_ExtHex_DigitHexIDS_Binary_OperatorIDSBIDS_Trinary_OperatorIDSTID_ContinueIDCID_StartIDSIdeographicIdeoJoin_ControlJoin_CLogical_Order_ExceptionLOELowercaseLowerMathNoncharacter_Code_PointNCharPattern_SyntaxPat_SynPattern_White_SpacePat_WSQuotation_MarkQMarkRadicalRegional_IndicatorRISentence_TerminalSTermSoft_DottedSDTerminal_PunctuationTermUnified_IdeographUIdeoUppercaseUpperVariation_SelectorVSWhite_SpaceSpaceXID_ContinueXIDCXID_StartXIDS + " Extended_Pictographic"
var fe = {
  9: ASCIIASCII_Hex_DigitAHexAlphabeticAlphaAnyAssignedBidi_ControlBidi_CBidi_MirroredBidi_MCase_IgnorableCICasedChanges_When_CasefoldedCWCFChanges_When_CasemappedCWCMChanges_When_LowercasedCWLChanges_When_NFKC_CasefoldedCWKCFChanges_When_TitlecasedCWTChanges_When_UppercasedCWUDashDefault_Ignorable_Code_PointDIDeprecatedDepDiacriticDiaEmojiEmoji_ComponentEmoji_ModifierEmoji_Modifier_BaseEmoji_PresentationExtenderExtGrapheme_BaseGr_BaseGrapheme_ExtendGr_ExtHex_DigitHexIDS_Binary_OperatorIDSBIDS_Trinary_OperatorIDSTID_ContinueIDCID_StartIDSIdeographicIdeoJoin_ControlJoin_CLogical_Order_ExceptionLOELowercaseLowerMathNoncharacter_Code_PointNCharPattern_SyntaxPat_SynPattern_White_SpacePat_WSQuotation_MarkQMarkRadicalRegional_IndicatorRISentence_TerminalSTermSoft_DottedSDTerminal_PunctuationTermUnified_IdeographUIdeoUppercaseUpperVariation_SelectorVSWhite_SpaceSpaceXID_ContinueXIDCXID_StartXIDS,
  10: le,
  11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"
}
var /* [auto-meaningful-name] */Cased_LetterLCClose_PunctuationPeConnector_PunctuationPcControlCcCntrlCurrency_SymbolScDash_PunctuationPdDecimal_NumberNdDigitEnclosing_MarkMeFinal_PunctuationPfFormatCfInitial_PunctuationPiLetterLLetter_NumberNlLine_SeparatorZlLowercase_LetterLlMarkMCombining_MarkMath_SymbolSmModifier_LetterLmModifier_SymbolSkNonspacing_MarkMnNumberNOpen_PunctuationPsOtherCOther_LetterLoOther_NumberNoOther_PunctuationPoOther_SymbolSoParagraph_SeparatorZpPrivate_UseCoPunctuationPPunctSeparatorZSpace_SeparatorZsSpacing_MarkMcSurrogateCsSymbolSTitlecase_LetterLtUnassignedCnUppercase_LetterLu = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu"
var /* [auto-meaningful-name] */AdlamAdlmAhomAhomAnatolian_HieroglyphsHluwArabicArabArmenianArmnAvestanAvstBalineseBaliBamumBamuBassa_VahBassBatakBatkBengaliBengBhaiksukiBhksBopomofoBopoBrahmiBrahBrailleBraiBugineseBugiBuhidBuhdCanadian_AboriginalCansCarianCariCaucasian_AlbanianAghbChakmaCakmChamChamCherokeeCherCommonZyyyCopticCoptQaacCuneiformXsuxCypriotCprtCyrillicCyrlDeseretDsrtDevanagariDevaDuployanDuplEgyptian_HieroglyphsEgypElbasanElbaEthiopicEthiGeorgianGeorGlagoliticGlagGothicGothGranthaGranGreekGrekGujaratiGujrGurmukhiGuruHanHaniHangulHangHanunooHanoHatranHatrHebrewHebrHiraganaHiraImperial_AramaicArmiInheritedZinhQaaiInscriptional_PahlaviPhliInscriptional_ParthianPrtiJavaneseJavaKaithiKthiKannadaKndaKatakanaKanaKayah_LiKaliKharoshthiKharKhmerKhmrKhojkiKhojKhudawadiSindLaoLaooLatinLatnLepchaLepcLimbuLimbLinear_ALinaLinear_BLinbLisuLisuLycianLyciLydianLydiMahajaniMahjMalayalamMlymMandaicMandManichaeanManiMarchenMarcMasaram_GondiGonmMeetei_MayekMteiMende_KikakuiMendMeroitic_CursiveMercMeroitic_HieroglyphsMeroMiaoPlrdModiModiMongolianMongMroMrooMultaniMultMyanmarMymrNabataeanNbatNew_Tai_LueTaluNewaNewaNkoNkooNushuNshuOghamOgamOl_ChikiOlckOld_HungarianHungOld_ItalicItalOld_North_ArabianNarbOld_PermicPermOld_PersianXpeoOld_South_ArabianSarbOld_TurkicOrkhOriyaOryaOsageOsgeOsmanyaOsmaPahawh_HmongHmngPalmyrenePalmPau_Cin_HauPaucPhags_PaPhagPhoenicianPhnxPsalter_PahlaviPhlpRejangRjngRunicRunrSamaritanSamrSaurashtraSaurSharadaShrdShavianShawSiddhamSiddSignWritingSgnwSinhalaSinhSora_SompengSoraSoyomboSoyoSundaneseSundSyloti_NagriSyloSyriacSyrcTagalogTglgTagbanwaTagbTai_LeTaleTai_ThamLanaTai_VietTavtTakriTakrTamilTamlTangutTangTeluguTeluThaanaThaaThaiThaiTibetanTibtTifinaghTfngTirhutaTirhUgariticUgarVaiVaiiWarang_CitiWaraYiYiiiZanabazar_SquareZanb = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb"
var pe = AdlamAdlmAhomAhomAnatolian_HieroglyphsHluwArabicArabArmenianArmnAvestanAvstBalineseBaliBamumBamuBassa_VahBassBatakBatkBengaliBengBhaiksukiBhksBopomofoBopoBrahmiBrahBrailleBraiBugineseBugiBuhidBuhdCanadian_AboriginalCansCarianCariCaucasian_AlbanianAghbChakmaCakmChamChamCherokeeCherCommonZyyyCopticCoptQaacCuneiformXsuxCypriotCprtCyrillicCyrlDeseretDsrtDevanagariDevaDuployanDuplEgyptian_HieroglyphsEgypElbasanElbaEthiopicEthiGeorgianGeorGlagoliticGlagGothicGothGranthaGranGreekGrekGujaratiGujrGurmukhiGuruHanHaniHangulHangHanunooHanoHatranHatrHebrewHebrHiraganaHiraImperial_AramaicArmiInheritedZinhQaaiInscriptional_PahlaviPhliInscriptional_ParthianPrtiJavaneseJavaKaithiKthiKannadaKndaKatakanaKanaKayah_LiKaliKharoshthiKharKhmerKhmrKhojkiKhojKhudawadiSindLaoLaooLatinLatnLepchaLepcLimbuLimbLinear_ALinaLinear_BLinbLisuLisuLycianLyciLydianLydiMahajaniMahjMalayalamMlymMandaicMandManichaeanManiMarchenMarcMasaram_GondiGonmMeetei_MayekMteiMende_KikakuiMendMeroitic_CursiveMercMeroitic_HieroglyphsMeroMiaoPlrdModiModiMongolianMongMroMrooMultaniMultMyanmarMymrNabataeanNbatNew_Tai_LueTaluNewaNewaNkoNkooNushuNshuOghamOgamOl_ChikiOlckOld_HungarianHungOld_ItalicItalOld_North_ArabianNarbOld_PermicPermOld_PersianXpeoOld_South_ArabianSarbOld_TurkicOrkhOriyaOryaOsageOsgeOsmanyaOsmaPahawh_HmongHmngPalmyrenePalmPau_Cin_HauPaucPhags_PaPhagPhoenicianPhnxPsalter_PahlaviPhlpRejangRjngRunicRunrSamaritanSamrSaurashtraSaurSharadaShrdShavianShawSiddhamSiddSignWritingSgnwSinhalaSinhSora_SompengSoraSoyomboSoyoSundaneseSundSyloti_NagriSyloSyriacSyrcTagalogTglgTagbanwaTagbTai_LeTaleTai_ThamLanaTai_VietTavtTakriTakrTamilTamlTangutTangTeluguTeluThaanaThaaThaiThaiTibetanTibtTifinaghTfngTirhutaTirhUgariticUgarVaiVaiiWarang_CitiWaraYiYiiiZanabazar_SquareZanb + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd"
var _e = {
  9: AdlamAdlmAhomAhomAnatolian_HieroglyphsHluwArabicArabArmenianArmnAvestanAvstBalineseBaliBamumBamuBassa_VahBassBatakBatkBengaliBengBhaiksukiBhksBopomofoBopoBrahmiBrahBrailleBraiBugineseBugiBuhidBuhdCanadian_AboriginalCansCarianCariCaucasian_AlbanianAghbChakmaCakmChamChamCherokeeCherCommonZyyyCopticCoptQaacCuneiformXsuxCypriotCprtCyrillicCyrlDeseretDsrtDevanagariDevaDuployanDuplEgyptian_HieroglyphsEgypElbasanElbaEthiopicEthiGeorgianGeorGlagoliticGlagGothicGothGranthaGranGreekGrekGujaratiGujrGurmukhiGuruHanHaniHangulHangHanunooHanoHatranHatrHebrewHebrHiraganaHiraImperial_AramaicArmiInheritedZinhQaaiInscriptional_PahlaviPhliInscriptional_ParthianPrtiJavaneseJavaKaithiKthiKannadaKndaKatakanaKanaKayah_LiKaliKharoshthiKharKhmerKhmrKhojkiKhojKhudawadiSindLaoLaooLatinLatnLepchaLepcLimbuLimbLinear_ALinaLinear_BLinbLisuLisuLycianLyciLydianLydiMahajaniMahjMalayalamMlymMandaicMandManichaeanManiMarchenMarcMasaram_GondiGonmMeetei_MayekMteiMende_KikakuiMendMeroitic_CursiveMercMeroitic_HieroglyphsMeroMiaoPlrdModiModiMongolianMongMroMrooMultaniMultMyanmarMymrNabataeanNbatNew_Tai_LueTaluNewaNewaNkoNkooNushuNshuOghamOgamOl_ChikiOlckOld_HungarianHungOld_ItalicItalOld_North_ArabianNarbOld_PermicPermOld_PersianXpeoOld_South_ArabianSarbOld_TurkicOrkhOriyaOryaOsageOsgeOsmanyaOsmaPahawh_HmongHmngPalmyrenePalmPau_Cin_HauPaucPhags_PaPhagPhoenicianPhnxPsalter_PahlaviPhlpRejangRjngRunicRunrSamaritanSamrSaurashtraSaurSharadaShrdShavianShawSiddhamSiddSignWritingSgnwSinhalaSinhSora_SompengSoraSoyomboSoyoSundaneseSundSyloti_NagriSyloSyriacSyrcTagalogTglgTagbanwaTagbTai_LeTaleTai_ThamLanaTai_VietTavtTakriTakrTamilTamlTangutTangTeluguTeluThaanaThaaThaiThaiTibetanTibtTifinaghTfngTirhutaTirhUgariticUgarVaiVaiiWarang_CitiWaraYiYiiiZanabazar_SquareZanb,
  10: pe,
  11: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
}
var Ae = {}
function ge(e) {
  var t = Ae[e] = {
    binary: R(fe[e] + " " + Cased_LetterLCClose_PunctuationPeConnector_PunctuationPcControlCcCntrlCurrency_SymbolScDash_PunctuationPdDecimal_NumberNdDigitEnclosing_MarkMeFinal_PunctuationPfFormatCfInitial_PunctuationPiLetterLLetter_NumberNlLine_SeparatorZlLowercase_LetterLlMarkMCombining_MarkMath_SymbolSmModifier_LetterLmModifier_SymbolSkNonspacing_MarkMnNumberNOpen_PunctuationPsOtherCOther_LetterLoOther_NumberNoOther_PunctuationPoOther_SymbolSoParagraph_SeparatorZpPrivate_UseCoPunctuationPPunctSeparatorZSpace_SeparatorZsSpacing_MarkMcSurrogateCsSymbolSTitlecase_LetterLtUnassignedCnUppercase_LetterLu),
    nonBinary: {
      General_Category: R(Cased_LetterLCClose_PunctuationPeConnector_PunctuationPcControlCcCntrlCurrency_SymbolScDash_PunctuationPdDecimal_NumberNdDigitEnclosing_MarkMeFinal_PunctuationPfFormatCfInitial_PunctuationPiLetterLLetter_NumberNlLine_SeparatorZlLowercase_LetterLlMarkMCombining_MarkMath_SymbolSmModifier_LetterLmModifier_SymbolSkNonspacing_MarkMnNumberNOpen_PunctuationPsOtherCOther_LetterLoOther_NumberNoOther_PunctuationPoOther_SymbolSoParagraph_SeparatorZpPrivate_UseCoPunctuationPPunctSeparatorZSpace_SeparatorZsSpacing_MarkMcSurrogateCsSymbolSTitlecase_LetterLtUnassignedCnUppercase_LetterLu),
      Script: R(_e[e])
    }
  }
  t.nonBinary.Script_Extensions = t.nonBinary.Script
  t.nonBinary.gc = t.nonBinary.General_Category
  t.nonBinary.sc = t.nonBinary.Script
  t.nonBinary.scx = t.nonBinary.Script_Extensions
}
ge(9)
ge(10)
ge(11)
var /* [auto-meaningful-name] */U$prototype8 = U.prototype
var me = function (e) {
  this.parser = e
  this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "")
  this.unicodeProperties = Ae[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion]
  this.source = ""
  this.flags = ""
  this.start = 0
  this.switchU = false
  this.switchN = false
  this.pos = 0
  this.lastIntValue = 0
  this.lastStringValue = ""
  this.lastAssertionIsQuantifiable = false
  this.numCapturingParens = 0
  this.maxBackReference = 0
  this.groupNames = []
  this.backReferenceNames = []
}
function ye(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
}
function be(e) {
  return 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || e >= 91 && e <= 94 || e >= 123 && e <= 125
}
function we(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122
}
function Ee(e) {
  return we(e) || 95 === e
}
function xe(e) {
  return Ee(e) || Ce(e)
}
function Ce(e) {
  return e >= 48 && e <= 57
}
function Oe(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
}
function ke(e) {
  return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48
}
function Se(e) {
  return e >= 48 && e <= 55
}
me.prototype.reset = function (e, t, n) {
  var r = -1 !== n.indexOf("u")
  this.start = 0 | e
  this.source = t + ""
  this.flags = n
  this.switchU = r && this.parser.options.ecmaVersion >= 6
  this.switchN = r && this.parser.options.ecmaVersion >= 9
}
me.prototype.raise = function (e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e)
}
me.prototype.at = function (e, t) {
  if (undefined === t) {
    t = false
  }
  var /* [auto-meaningful-name] */this$source = this.source
  var /* [auto-meaningful-name] */this$source$length = this$source.length
  if (e >= this$source$length) {
    return -1
  }
  var i = this$source.charCodeAt(e)
  if (!t && !this.switchU || i <= 55295 || i >= 57344 || e + 1 >= this$source$length) {
    return i
  }
  var o = this$source.charCodeAt(e + 1)
  return o >= 56320 && o <= 57343 ? (i << 10) + o - 56613888 : i
}
me.prototype.nextIndex = function (e, t) {
  if (undefined === t) {
    t = false
  }
  var /* [auto-meaningful-name] */this$source = this.source
  var /* [auto-meaningful-name] */this$source$length = this$source.length
  if (e >= this$source$length) {
    return this$source$length
  }
  var i
  var o = this$source.charCodeAt(e)
  return !t && !this.switchU || o <= 55295 || o >= 57344 || e + 1 >= this$source$length || (i = this$source.charCodeAt(e + 1)) < 56320 || i > 57343 ? e + 1 : e + 2
}
me.prototype.current = function (e) {
  if (undefined === e) {
    e = false
  }
  return this.at(this.pos, e)
}
me.prototype.lookahead = function (e) {
  if (undefined === e) {
    e = false
  }
  return this.at(this.nextIndex(this.pos, e), e)
}
me.prototype.advance = function (e) {
  if (undefined === e) {
    e = false
  }
  this.pos = this.nextIndex(this.pos, e)
}
me.prototype.eat = function (e, t) {
  if (undefined === t) {
    t = false
  }
  return this.current(t) === e && (this.advance(t), true)
}
U$prototype8.validateRegExpFlags = function (e) {
  for (var /* [auto-meaningful-name] */e$validFlags = e.validFlags, /* [auto-meaningful-name] */e$flags = e.flags, r = 0; r < e$flags.length; r++) {
    var i = e$flags.charAt(r)
    if (-1 === e$validFlags.indexOf(i)) {
      this.raise(e.start, "Invalid regular expression flag")
    }
    if (e$flags.indexOf(i, r + 1) > -1) {
      this.raise(e.start, "Duplicate regular expression flag")
    }
  }
}
U$prototype8.validateRegExpPattern = function (e) {
  this.regexp_pattern(e)
  if (!e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0) {
    e.switchN = true
    this.regexp_pattern(e)
  }
}
U$prototype8.regexp_pattern = function (e) {
  e.pos = 0
  e.lastIntValue = 0
  e.lastStringValue = ""
  e.lastAssertionIsQuantifiable = false
  e.numCapturingParens = 0
  e.maxBackReference = 0
  e.groupNames.length = 0
  e.backReferenceNames.length = 0
  this.regexp_disjunction(e)
  if (e.pos !== e.source.length) {
    if (e.eat(41)) {
      e.raise("Unmatched ')'")
    }
    if (e.eat(93) || e.eat(125)) {
      e.raise("Lone quantifier brackets")
    }
  }
  if (e.maxBackReference > e.numCapturingParens) {
    e.raise("Invalid escape")
  }
  for (var t = 0, /* [auto-meaningful-name] */e$backReferenceNames = e.backReferenceNames; t < e$backReferenceNames.length; t += 1) {
    var r = e$backReferenceNames[t]
    if (-1 === e.groupNames.indexOf(r)) {
      e.raise("Invalid named capture referenced")
    }
  }
}
U$prototype8.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124);) {
    this.regexp_alternative(e)
  }
  if (this.regexp_eatQuantifier(e, true)) {
    e.raise("Nothing to repeat")
  }
  if (e.eat(123)) {
    e.raise("Lone quantifier brackets")
  }
}
U$prototype8.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e);) {
    ;
  }
}
U$prototype8.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), true) : !!(e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), true)
}
U$prototype8.regexp_eatAssertion = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  e.lastAssertionIsQuantifiable = false
  if (e.eat(94) || e.eat(36)) {
    return true
  }
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) {
      return true
    }
    e.pos = e$pos
  }
  if (e.eat(40) && e.eat(63)) {
    var n = false
    if (this.options.ecmaVersion >= 9) {
      n = e.eat(60)
    }
    if (e.eat(61) || e.eat(33)) {
      this.regexp_disjunction(e)
      if (!e.eat(41)) {
        e.raise("Unterminated group")
      }
      e.lastAssertionIsQuantifiable = !n
      return true
    }
  }
  e.pos = e$pos
  return false
}
U$prototype8.regexp_eatQuantifier = function (e, t) {
  if (undefined === t) {
    t = false
  }
  return !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), true)
}
U$prototype8.regexp_eatQuantifierPrefix = function (e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t)
}
U$prototype8.regexp_eatBracedQuantifier = function (e, t) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(123)) {
    var r = 0
    var i = -1
    if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))) {
      if (-1 !== i && i < r && !t) {
        e.raise("numbers out of order in {} quantifier")
      }
      return true
    }
    if (e.switchU && !t) {
      e.raise("Incomplete quantifier")
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatAtom = function (e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e)
}
U$prototype8.regexp_eatReverseSolidusAtomEscape = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) {
      return true
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatUncapturingGroup = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      this.regexp_disjunction(e)
      if (e.eat(41)) {
        return true
      }
      e.raise("Unterminated group")
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(e)
    } else {
      if (63 === e.current()) {
        e.raise("Invalid group")
      }
    }
    this.regexp_disjunction(e)
    if (e.eat(41)) {
      e.numCapturingParens += 1
      return true
    }
    e.raise("Unterminated group")
  }
  return false
}
U$prototype8.regexp_eatExtendedAtom = function (e) {
  return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e)
}
U$prototype8.regexp_eatInvalidBracedQuantifier = function (e) {
  if (this.regexp_eatBracedQuantifier(e, true)) {
    e.raise("Nothing to repeat")
  }
  return false
}
U$prototype8.regexp_eatSyntaxCharacter = function (e) {
  var t = e.current()
  return !!be(t) && (e.lastIntValue = t, e.advance(), true)
}
U$prototype8.regexp_eatPatternCharacters = function (e) {
  for (var /* [auto-meaningful-name] */e$pos = e.pos, n = 0; -1 !== (n = e.current()) && !be(n);) {
    e.advance()
  }
  return e.pos !== e$pos
}
U$prototype8.regexp_eatExtendedPatternCharacter = function (e) {
  var t = e.current()
  return !(-1 === t || 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || 91 === t || 94 === t || 124 === t) && (e.advance(), true)
}
U$prototype8.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      if (-1 !== e.groupNames.indexOf(e.lastStringValue)) {
        e.raise("Duplicate capture group name")
      }
      return void e.groupNames.push(e.lastStringValue)
    }
    e.raise("Invalid group")
  }
}
U$prototype8.regexp_eatGroupName = function (e) {
  e.lastStringValue = ""
  if (e.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) {
      return true
    }
    e.raise("Invalid capture group name")
  }
  return false
}
U$prototype8.regexp_eatRegExpIdentifierName = function (e) {
  e.lastStringValue = ""
  if (this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += ye(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) {
      e.lastStringValue += ye(e.lastIntValue)
    }
    return true
  }
  return false
}
U$prototype8.regexp_eatRegExpIdentifierStart = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  var n = this.options.ecmaVersion >= 11
  var r = e.current(n)
  e.advance(n)
  if (92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(e, n)) {
    r = e.lastIntValue
  }
  return function (e) {
    return p(e, true) || 36 === e || 95 === e
  }(r) ? (e.lastIntValue = r, true) : (e.pos = e$pos, false)
}
U$prototype8.regexp_eatRegExpIdentifierPart = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  var n = this.options.ecmaVersion >= 11
  var r = e.current(n)
  e.advance(n)
  if (92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(e, n)) {
    r = e.lastIntValue
  }
  return function (e) {
    return _(e, true) || 36 === e || 95 === e || 8204 === e || 8205 === e
  }(r) ? (e.lastIntValue = r, true) : (e.pos = e$pos, false)
}
U$prototype8.regexp_eatAtomEscape = function (e) {
  return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (99 === e.current() && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), false)
}
U$prototype8.regexp_eatBackReference = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (this.regexp_eatDecimalEscape(e)) {
    var /* [auto-meaningful-name] */e$lastIntValue = e.lastIntValue
    if (e.switchU) {
      if (e$lastIntValue > e.maxBackReference) {
        e.maxBackReference = e$lastIntValue
      }
      return true
    }
    if (e$lastIntValue <= e.numCapturingParens) {
      return true
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e)) {
      e.backReferenceNames.push(e.lastStringValue)
      return true
    }
    e.raise("Invalid named reference")
  }
  return false
}
U$prototype8.regexp_eatCharacterEscape = function (e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, false) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e)
}
U$prototype8.regexp_eatCControlLetter = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) {
      return true
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatZero = function (e) {
  return 48 === e.current() && !Ce(e.lookahead()) && (e.lastIntValue = 0, e.advance(), true)
}
U$prototype8.regexp_eatControlEscape = function (e) {
  var t = e.current()
  return 116 === t ? (e.lastIntValue = 9, e.advance(), true) : 110 === t ? (e.lastIntValue = 10, e.advance(), true) : 118 === t ? (e.lastIntValue = 11, e.advance(), true) : 102 === t ? (e.lastIntValue = 12, e.advance(), true) : 114 === t && (e.lastIntValue = 13, e.advance(), true)
}
U$prototype8.regexp_eatControlLetter = function (e) {
  var t = e.current()
  return !!we(t) && (e.lastIntValue = t % 32, e.advance(), true)
}
U$prototype8.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
  if (undefined === t) {
    t = false
  }
  var /* [auto-meaningful-name] */e$lastIntValue
  var /* [auto-meaningful-name] */e$pos = e.pos
  var i = t || e.switchU
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var /* [auto-meaningful-name] */e$lastIntValue1 = e.lastIntValue
      if (i && e$lastIntValue1 >= 55296 && e$lastIntValue1 <= 56319) {
        var /* [auto-meaningful-name] */e$pos1 = e.pos
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var /* [auto-meaningful-name] */e$lastIntValue2 = e.lastIntValue
          if (e$lastIntValue2 >= 56320 && e$lastIntValue2 <= 57343) {
            e.lastIntValue = 1024 * (e$lastIntValue1 - 55296) + (e$lastIntValue2 - 56320) + 65536
            return true
          }
        }
        e.pos = e$pos1
        e.lastIntValue = e$lastIntValue1
      }
      return true
    }
    if (i && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && (e$lastIntValue = e.lastIntValue) >= 0 && e$lastIntValue <= 1114111) {
      return true
    }
    if (i) {
      e.raise("Invalid unicode escape")
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatIdentityEscape = function (e) {
  if (e.switchU) {
    return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, true)
  }
  var t = e.current()
  return !(99 === t || e.switchN && 107 === t) && (e.lastIntValue = t, e.advance(), true)
}
U$prototype8.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0
  var t = e.current()
  if (t >= 49 && t <= 57) {
    do {
      e.lastIntValue = 10 * e.lastIntValue + (t - 48)
      e.advance()
    } while ((t = e.current()) >= 48 && t <= 57)
    return true
  }
  return false
}
U$prototype8.regexp_eatCharacterClassEscape = function (e) {
  var t = e.current()
  if (function (e) {
    return 100 === e || 68 === e || 115 === e || 83 === e || 119 === e || 87 === e
  }(t)) {
    e.lastIntValue = -1
    e.advance()
    return true
  }
  if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
    e.lastIntValue = -1
    e.advance()
    if (e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)) {
      return true
    }
    e.raise("Invalid property name")
  }
  return false
}
U$prototype8.regexp_eatUnicodePropertyValueExpression = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var /* [auto-meaningful-name] */e$lastStringValue = e.lastStringValue
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var /* [auto-meaningful-name] */e$lastStringValue1 = e.lastStringValue
      this.regexp_validateUnicodePropertyNameAndValue(e, e$lastStringValue, e$lastStringValue1)
      return true
    }
  }
  e.pos = e$pos
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var /* [auto-meaningful-name] */e$lastStringValue2 = e.lastStringValue
    this.regexp_validateUnicodePropertyNameOrValue(e, e$lastStringValue2)
    return true
  }
  return false
}
U$prototype8.regexp_validateUnicodePropertyNameAndValue = function (e, t, n) {
  if (!D(e.unicodeProperties.nonBinary, t)) {
    e.raise("Invalid property name")
  }
  if (!e.unicodeProperties.nonBinary[t].test(n)) {
    e.raise("Invalid property value")
  }
}
U$prototype8.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
  if (!e.unicodeProperties.binary.test(t)) {
    e.raise("Invalid property name")
  }
}
U$prototype8.regexp_eatUnicodePropertyName = function (e) {
  var t = 0
  for (e.lastStringValue = ""; Ee(t = e.current());) {
    e.lastStringValue += ye(t)
    e.advance()
  }
  return "" !== e.lastStringValue
}
U$prototype8.regexp_eatUnicodePropertyValue = function (e) {
  var t = 0
  for (e.lastStringValue = ""; xe(t = e.current());) {
    e.lastStringValue += ye(t)
    e.advance()
  }
  return "" !== e.lastStringValue
}
U$prototype8.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e)
}
U$prototype8.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    e.eat(94)
    this.regexp_classRanges(e)
    if (e.eat(93)) {
      return true
    }
    e.raise("Unterminated character class")
  }
  return false
}
U$prototype8.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e);) {
    var /* [auto-meaningful-name] */e$lastIntValue = e.lastIntValue
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var /* [auto-meaningful-name] */e$lastIntValue1 = e.lastIntValue
      if (!(!e.switchU || -1 !== e$lastIntValue && -1 !== e$lastIntValue1)) {
        e.raise("Invalid character class")
      }
      if (-1 !== e$lastIntValue && -1 !== e$lastIntValue1 && e$lastIntValue > e$lastIntValue1) {
        e.raise("Range out of order in character class")
      }
    }
  }
}
U$prototype8.regexp_eatClassAtom = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) {
      return true
    }
    if (e.switchU) {
      var n = e.current()
      if (99 === n || Se(n)) {
        e.raise("Invalid class escape")
      }
      e.raise("Invalid escape")
    }
    e.pos = e$pos
  }
  var r = e.current()
  return 93 !== r && (e.lastIntValue = r, e.advance(), true)
}
U$prototype8.regexp_eatClassEscape = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(98)) {
    e.lastIntValue = 8
    return true
  }
  if (e.switchU && e.eat(45)) {
    e.lastIntValue = 45
    return true
  }
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) {
      return true
    }
    e.pos = e$pos
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
}
U$prototype8.regexp_eatClassControlLetter = function (e) {
  var t = e.current()
  return !(!Ce(t) && 95 !== t) && (e.lastIntValue = t % 32, e.advance(), true)
}
U$prototype8.regexp_eatHexEscapeSequence = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) {
      return true
    }
    if (e.switchU) {
      e.raise("Invalid escape")
    }
    e.pos = e$pos
  }
  return false
}
U$prototype8.regexp_eatDecimalDigits = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  var n = 0
  for (e.lastIntValue = 0; Ce(n = e.current());) {
    e.lastIntValue = 10 * e.lastIntValue + (n - 48)
    e.advance()
  }
  return e.pos !== e$pos
}
U$prototype8.regexp_eatHexDigits = function (e) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  var n = 0
  for (e.lastIntValue = 0; Oe(n = e.current());) {
    e.lastIntValue = 16 * e.lastIntValue + ke(n)
    e.advance()
  }
  return e.pos !== e$pos
}
U$prototype8.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var /* [auto-meaningful-name] */e$lastIntValue = e.lastIntValue
    if (this.regexp_eatOctalDigit(e)) {
      var /* [auto-meaningful-name] */e$lastIntValue1 = e.lastIntValue
      if (e$lastIntValue <= 3 && this.regexp_eatOctalDigit(e)) {
        e.lastIntValue = 64 * e$lastIntValue + 8 * e$lastIntValue1 + e.lastIntValue
      } else {
        e.lastIntValue = 8 * e$lastIntValue + e$lastIntValue1
      }
    } else {
      e.lastIntValue = e$lastIntValue
    }
    return true
  }
  return false
}
U$prototype8.regexp_eatOctalDigit = function (e) {
  var t = e.current()
  return Se(t) ? (e.lastIntValue = t - 48, e.advance(), true) : (e.lastIntValue = 0, false)
}
U$prototype8.regexp_eatFixedHexDigits = function (e, t) {
  var /* [auto-meaningful-name] */e$pos = e.pos
  e.lastIntValue = 0
  for (var r = 0; r < t; ++r) {
    var i = e.current()
    if (!Oe(i)) {
      e.pos = e$pos
      return false
    }
    e.lastIntValue = 16 * e.lastIntValue + ke(i)
    e.advance()
  }
  return true
}
var Te = function (e) {
  this.type = e.type
  this.value = e.value
  this.start = e.start
  this.end = e.end
  if (e.options.locations) {
    this.loc = new P(e, e.startLoc, e.endLoc)
  }
  if (e.options.ranges) {
    this.range = [e.start, e.end]
  }
}
var /* [auto-meaningful-name] */U$prototype9 = U.prototype
function De(e) {
  return "function" !== typeof BigInt ? null : BigInt(e.replace(/_/g, ""))
}
function Ie(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
}
U$prototype9.next = function (e) {
  if (!e && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword)
  }
  if (this.options.onToken) {
    this.options.onToken(new Te(this))
  }
  this.lastTokEnd = this.end
  this.lastTokStart = this.start
  this.lastTokEndLoc = this.endLoc
  this.lastTokStartLoc = this.startLoc
  this.nextToken()
}
U$prototype9.getToken = function () {
  this.next()
  return new Te(this)
}
if ("undefined" !== typeof Symbol) {
  U$prototype9[Symbol.iterator] = function () {
    var e = this
    return {
      next: function () {
        var t = e.getToken()
        return {
          done: t.type === w.eof,
          value: t
        }
      }
    }
  }
}
U$prototype9.curContext = function () {
  return this.context[this.context.length - 1]
}
U$prototype9.nextToken = function () {
  var e = this.curContext()
  if (!(e && e.preserveSpace)) {
    this.skipSpace()
  }
  this.start = this.pos
  if (this.options.locations) {
    this.startLoc = this.curPosition()
  }
  return this.pos >= this.input.length ? this.finishToken(w.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos())
}
U$prototype9.readToken = function (e) {
  return p(e, this.options.ecmaVersion >= 6) || 92 === e ? this.readWord() : this.getTokenFromCode(e)
}
U$prototype9.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos)
  return e <= 55295 || e >= 57344 ? e : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
}
U$prototype9.skipBlockComment = function () {
  var e
  var t = this.options.onComment && this.curPosition()
  var /* [auto-meaningful-name] */this$pos = this.pos
  var r = this.input.indexOf("*/", this.pos += 2)
  if (-1 === r) {
    this.raise(this.pos - 2, "Unterminated comment")
  }
  this.pos = r + 2
  if (this.options.locations) {
    for (x.lastIndex = this$pos; (e = x.exec(this.input)) && e.index < this.pos;) {
      ++this.curLine
      this.lineStart = e.index + e[0].length
    }
  }
  if (this.options.onComment) {
    this.options.onComment(true, this.input.slice(this$pos + 2, r), this$pos, this.pos, t, this.curPosition())
  }
}
U$prototype9.skipLineComment = function (e) {
  for (var /* [auto-meaningful-name] */this$pos = this.pos, n = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !C(r);) {
    r = this.input.charCodeAt(++this.pos)
  }
  if (this.options.onComment) {
    this.options.onComment(false, this.input.slice(this$pos + e, this.pos), this$pos, this.pos, n, this.curPosition())
  }
}
U$prototype9.skipSpace = function () {
  e: for (; this.pos < this.input.length;) {
    var e = this.input.charCodeAt(this.pos)
    switch (e) {
      case 32:
      case 160:
        ++this.pos
        break
      case 13:
        if (10 === this.input.charCodeAt(this.pos + 1)) {
          ++this.pos
        }
      case 10:
      case 8232:
      case 8233:
        ++this.pos
        if (this.options.locations) {
          ++this.curLine
          this.lineStart = this.pos
        }
        break
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment()
            break
          case 47:
            this.skipLineComment(2)
            break
          default:
            break e
        }
        break
      default:
        if (!(e > 8 && e < 14 || e >= 5760 && O.test(String.fromCharCode(e)))) {
          break e
        }
        ++this.pos
    }
  }
}
U$prototype9.finishToken = function (e, t) {
  this.end = this.pos
  if (this.options.locations) {
    this.endLoc = this.curPosition()
  }
  var /* [auto-meaningful-name] */this$type = this.type
  this.type = e
  this.value = t
  this.updateContext(this$type)
}
U$prototype9.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1)
  if (e >= 48 && e <= 57) {
    return this.readNumber(true)
  }
  var t = this.input.charCodeAt(this.pos + 2)
  return this.options.ecmaVersion >= 6 && 46 === e && 46 === t ? (this.pos += 3, this.finishToken(w.ellipsis)) : (++this.pos, this.finishToken(w.dot))
}
U$prototype9.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1)
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(w.assign, 2) : this.finishOp(w.slash, 1)
}
U$prototype9.readToken_mult_modulo_exp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1)
  var n = 1
  var r = 42 === e ? w.star : w.modulo
  if (this.options.ecmaVersion >= 7 && 42 === e && 42 === t) {
    ++n
    r = w.starstar
    t = this.input.charCodeAt(this.pos + 2)
  }
  return 61 === t ? this.finishOp(w.assign, n + 1) : this.finishOp(r, n)
}
U$prototype9.readToken_pipe_amp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1)
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      if (61 === this.input.charCodeAt(this.pos + 2)) {
        return this.finishOp(w.assign, 3)
      }
    }
    return this.finishOp(124 === e ? w.logicalOR : w.logicalAND, 2)
  }
  return 61 === t ? this.finishOp(w.assign, 2) : this.finishOp(124 === e ? w.bitwiseOR : w.bitwiseAND, 1)
}
U$prototype9.readToken_caret = function () {
  return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(w.assign, 2) : this.finishOp(w.bitwiseXOR, 1)
}
U$prototype9.readToken_plus_min = function (e) {
  var t = this.input.charCodeAt(this.pos + 1)
  return t === e ? 45 !== t || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !E.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(w.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t ? this.finishOp(w.assign, 2) : this.finishOp(w.plusMin, 1)
}
U$prototype9.readToken_lt_gt = function (e) {
  var t = this.input.charCodeAt(this.pos + 1)
  var n = 1
  return t === e ? (n = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + n) ? this.finishOp(w.assign, n + 1) : this.finishOp(w.bitShift, n)) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === t && (n = 2), this.finishOp(w.relational, n)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
}
U$prototype9.readToken_eq_excl = function (e) {
  var t = this.input.charCodeAt(this.pos + 1)
  return 61 === t ? this.finishOp(w.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(w.arrow)) : this.finishOp(61 === e ? w.eq : w.prefix, 1)
}
U$prototype9.readToken_question = function () {
  var /* [auto-meaningful-name] */this$options$ecmaVersion = this.options.ecmaVersion
  if (this$options$ecmaVersion >= 11) {
    var t = this.input.charCodeAt(this.pos + 1)
    if (46 === t) {
      var n = this.input.charCodeAt(this.pos + 2)
      if (n < 48 || n > 57) {
        return this.finishOp(w.questionDot, 2)
      }
    }
    if (63 === t) {
      if (this$options$ecmaVersion >= 12) {
        if (61 === this.input.charCodeAt(this.pos + 2)) {
          return this.finishOp(w.assign, 3)
        }
      }
      return this.finishOp(w.coalesce, 2)
    }
  }
  return this.finishOp(w.question, 1)
}
U$prototype9.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot()
    case 40:
      ++this.pos
      return this.finishToken(w.parenL)
    case 41:
      ++this.pos
      return this.finishToken(w.parenR)
    case 59:
      ++this.pos
      return this.finishToken(w.semi)
    case 44:
      ++this.pos
      return this.finishToken(w.comma)
    case 91:
      ++this.pos
      return this.finishToken(w.bracketL)
    case 93:
      ++this.pos
      return this.finishToken(w.bracketR)
    case 123:
      ++this.pos
      return this.finishToken(w.braceL)
    case 125:
      ++this.pos
      return this.finishToken(w.braceR)
    case 58:
      ++this.pos
      return this.finishToken(w.colon)
    case 96:
      if (this.options.ecmaVersion < 6) {
        break
      }
      ++this.pos
      return this.finishToken(w.backQuote)
    case 48:
      var t = this.input.charCodeAt(this.pos + 1)
      if (120 === t || 88 === t) {
        return this.readRadixNumber(16)
      }
      if (this.options.ecmaVersion >= 6) {
        if (111 === t || 79 === t) {
          return this.readRadixNumber(8)
        }
        if (98 === t || 66 === t) {
          return this.readRadixNumber(2)
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false)
    case 34:
    case 39:
      return this.readString(e)
    case 47:
      return this.readToken_slash()
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e)
    case 124:
    case 38:
      return this.readToken_pipe_amp(e)
    case 94:
      return this.readToken_caret()
    case 43:
    case 45:
      return this.readToken_plus_min(e)
    case 60:
    case 62:
      return this.readToken_lt_gt(e)
    case 61:
    case 33:
      return this.readToken_eq_excl(e)
    case 63:
      return this.readToken_question()
    case 126:
      return this.finishOp(w.prefix, 1)
  }
  this.raise(this.pos, "Unexpected character '" + Ie(e) + "'")
}
U$prototype9.finishOp = function (e, t) {
  var n = this.input.slice(this.pos, this.pos + t)
  this.pos += t
  return this.finishToken(e, n)
}
U$prototype9.readRegexp = function () {
  for (var e, t, /* [auto-meaningful-name] */this$pos = this.pos;;) {
    if (this.pos >= this.input.length) {
      this.raise(this$pos, "Unterminated regular expression")
    }
    var r = this.input.charAt(this.pos)
    if (E.test(r)) {
      this.raise(this$pos, "Unterminated regular expression")
    }
    if (e) {
      e = false
    } else {
      if ("[" === r) {
        t = true
      } else if ("]" === r && t) {
        t = false
      } else if ("/" === r && !t) {
        break
      }
      e = "\\" === r
    }
    ++this.pos
  }
  var i = this.input.slice(this$pos, this.pos)
  ++this.pos
  var /* [auto-meaningful-name] */this$pos1 = this.pos
  var a = this.readWord1()
  if (this.containsEsc) {
    this.unexpected(this$pos1)
  }
  var s = this.regexpState || (this.regexpState = new me(this))
  s.reset(this$pos, i, a)
  this.validateRegExpFlags(s)
  this.validateRegExpPattern(s)
  var c = null
  try {
    c = new RegExp(i, a)
  } catch (u) {}
  return this.finishToken(w.regexp, {
    pattern: i,
    flags: a,
    value: c
  })
}
U$prototype9.readInt = function (e, t, n) {
  for (var r = this.options.ecmaVersion >= 12 && undefined === t, i = n && 48 === this.input.charCodeAt(this.pos), /* [auto-meaningful-name] */this$pos = this.pos, a = 0, s = 0, c = 0, u = null == t ? 1 / 0 : t; c < u; ++c, ++this.pos) {
    var l = this.input.charCodeAt(this.pos)
    var f = undefined
    if (r && 95 === l) {
      if (i) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals")
      }
      if (95 === s) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore")
      }
      if (0 === c) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits")
      }
      s = l
    } else {
      if ((f = l >= 97 ? l - 97 + 10 : l >= 65 ? l - 65 + 10 : l >= 48 && l <= 57 ? l - 48 : 1 / 0) >= e) {
        break
      }
      s = l
      a = a * e + f
    }
  }
  if (r && 95 === s) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits")
  }
  return this.pos === this$pos || null != t && this.pos - this$pos !== t ? null : a
}
U$prototype9.readRadixNumber = function (e) {
  var /* [auto-meaningful-name] */this$pos = this.pos
  this.pos += 2
  var n = this.readInt(e)
  if (null == n) {
    this.raise(this.start + 2, "Expected number in radix " + e)
  }
  if (this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos)) {
    n = De(this.input.slice(this$pos, this.pos))
    ++this.pos
  } else {
    if (p(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number")
    }
  }
  return this.finishToken(w.num, n)
}
U$prototype9.readNumber = function (e) {
  var /* [auto-meaningful-name] */this$pos = this.pos
  if (!(e || null !== this.readInt(10, undefined, true))) {
    this.raise(this$pos, "Invalid number")
  }
  var n = this.pos - this$pos >= 2 && 48 === this.input.charCodeAt(this$pos)
  if (n && this.strict) {
    this.raise(this$pos, "Invalid number")
  }
  var r = this.input.charCodeAt(this.pos)
  if (!n && !e && this.options.ecmaVersion >= 11 && 110 === r) {
    var i = De(this.input.slice(this$pos, this.pos))
    ++this.pos
    if (p(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number")
    }
    return this.finishToken(w.num, i)
  }
  if (n && /[89]/.test(this.input.slice(this$pos, this.pos))) {
    n = false
  }
  if (!(46 !== r || n)) {
    ++this.pos
    this.readInt(10)
    r = this.input.charCodeAt(this.pos)
  }
  if (!(69 !== r && 101 !== r || n)) {
    if (!(43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r)) {
      ++this.pos
    }
    if (null === this.readInt(10)) {
      this.raise(this$pos, "Invalid number")
    }
  }
  if (p(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number")
  }
  var o
  o = this.input.slice(this$pos, this.pos)
  var a = n ? parseInt(o, 8) : parseFloat(o.replace(/_/g, ""))
  return this.finishToken(w.num, a)
}
U$prototype9.readCodePoint = function () {
  var e
  if (123 === this.input.charCodeAt(this.pos)) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected()
    }
    var t = ++this.pos
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)
    ++this.pos
    if (e > 1114111) {
      this.invalidStringToken(t, "Code point out of bounds")
    }
  } else {
    e = this.readHexChar(4)
  }
  return e
}
U$prototype9.readString = function (e) {
  for (var t = "", n = ++this.pos;;) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant")
    }
    var r = this.input.charCodeAt(this.pos)
    if (r === e) {
      break
    }
    if (92 === r) {
      t += this.input.slice(n, this.pos)
      t += this.readEscapedChar(false)
      n = this.pos
    } else {
      if (C(r, this.options.ecmaVersion >= 10)) {
        this.raise(this.start, "Unterminated string constant")
      }
      ++this.pos
    }
  }
  t += this.input.slice(n, this.pos++)
  return this.finishToken(w.string, t)
}
var Re = {}
U$prototype9.tryReadTemplateToken = function () {
  this.inTemplateElement = true
  try {
    this.readTmplToken()
  } catch (e) {
    if (e !== Re) {
      throw e
    }
    this.readInvalidTemplateToken()
  }
  this.inTemplateElement = false
}
U$prototype9.invalidStringToken = function (e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw Re
  }
  this.raise(e, t)
}
U$prototype9.readTmplToken = function () {
  for (var e = "", /* [auto-meaningful-name] */this$pos = this.pos;;) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template")
    }
    var n = this.input.charCodeAt(this.pos)
    if (96 === n || 36 === n && 123 === this.input.charCodeAt(this.pos + 1)) {
      return this.pos !== this.start || this.type !== w.template && this.type !== w.invalidTemplate ? (e += this.input.slice(this$pos, this.pos), this.finishToken(w.template, e)) : 36 === n ? (this.pos += 2, this.finishToken(w.dollarBraceL)) : (++this.pos, this.finishToken(w.backQuote))
    }
    if (92 === n) {
      e += this.input.slice(this$pos, this.pos)
      e += this.readEscapedChar(true)
      this$pos = this.pos
    } else if (C(n)) {
      switch (e += this.input.slice(this$pos, this.pos), ++this.pos, n) {
        case 13:
          if (10 === this.input.charCodeAt(this.pos)) {
            ++this.pos
          }
        case 10:
          e += "\n"
          break
        default:
          e += String.fromCharCode(n)
      }
      if (this.options.locations) {
        ++this.curLine
        this.lineStart = this.pos
      }
      this$pos = this.pos
    } else {
      ++this.pos
    }
  }
}
U$prototype9.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos
        break
      case "$":
        if ("{" !== this.input[this.pos + 1]) {
          break
        }
      case "`":
        return this.finishToken(w.invalidTemplate, this.input.slice(this.start, this.pos))
    }
  }
  this.raise(this.start, "Unterminated template")
}
U$prototype9.readEscapedChar = function (e) {
  var t = this.input.charCodeAt(++this.pos)
  switch (++this.pos, t) {
    case 110:
      return "\n"
    case 114:
      return "\r"
    case 120:
      return String.fromCharCode(this.readHexChar(2))
    case 117:
      return Ie(this.readCodePoint())
    case 116:
      return "\t"
    case 98:
      return "\b"
    case 118:
      return "\u000b"
    case 102:
      return "\f"
    case 13:
      if (10 === this.input.charCodeAt(this.pos)) {
        ++this.pos
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos
        ++this.curLine
      }
      return ""
    case 56:
    case 57:
      if (e) {
        var n = this.pos - 1
        this.invalidStringToken(n, "Invalid escape sequence in template string")
        return null
      }
    default:
      if (t >= 48 && t <= 55) {
        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0]
        var i = parseInt(r, 8)
        if (i > 255) {
          r = r.slice(0, -1)
          i = parseInt(r, 8)
        }
        this.pos += r.length - 1
        t = this.input.charCodeAt(this.pos)
        if (!("0" === r && 56 !== t && 57 !== t || !this.strict && !e)) {
          this.invalidStringToken(this.pos - 1 - r.length, e ? "Octal literal in template string" : "Octal literal in strict mode")
        }
        return String.fromCharCode(i)
      }
      return C(t) ? "" : String.fromCharCode(t)
  }
}
U$prototype9.readHexChar = function (e) {
  var /* [auto-meaningful-name] */this$pos = this.pos
  var n = this.readInt(16, e)
  if (null === n) {
    this.invalidStringToken(this$pos, "Bad character escape sequence")
  }
  return n
}
U$prototype9.readWord1 = function () {
  this.containsEsc = false
  for (var e = "", t = true, /* [auto-meaningful-name] */this$pos = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
    var i = this.fullCharCodeAtPos()
    if (_(i, r)) {
      this.pos += i <= 65535 ? 1 : 2
    } else {
      if (92 !== i) {
        break
      }
      this.containsEsc = true
      e += this.input.slice(this$pos, this.pos)
      var /* [auto-meaningful-name] */this$pos1 = this.pos
      if (117 !== this.input.charCodeAt(++this.pos)) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX")
      }
      ++this.pos
      var a = this.readCodePoint()
      if (!(t ? p : _)(a, r)) {
        this.invalidStringToken(this$pos1, "Invalid Unicode escape")
      }
      e += Ie(a)
      this$pos = this.pos
    }
    t = false
  }
  return e + this.input.slice(this$pos, this.pos)
}
U$prototype9.readWord = function () {
  var e = this.readWord1()
  var /* [auto-meaningful-name] */w$name = w.name
  if (this.keywords.test(e)) {
    w$name = y[e]
  }
  return this.finishToken(w$name, e)
}
var /* [auto-meaningful-name] */_7$4$1 = "7.4.1"
function Pe(e, t) {
  return U.parse(e, t)
}
function Ne(e, t, n) {
  return U.parseExpressionAt(e, t, n)
}
function Me(e, t) {
  return U.tokenizer(e, t)
}
U.acorn = {
  Parser: U,
  version: _7$4$1,
  defaultOptions: M,
  Position: F,
  SourceLocation: P,
  getLineInfo: N,
  Node: re,
  TokenType: A,
  tokTypes: w,
  keywordTypes: y,
  TokContext: ae,
  tokContexts: se,
  isIdentifierChar: _,
  isIdentifierStart: p,
  Token: Te,
  isNewLine: C,
  lineBreak: E,
  lineBreakG: x,
  nonASCIIwhitespace: O
}
