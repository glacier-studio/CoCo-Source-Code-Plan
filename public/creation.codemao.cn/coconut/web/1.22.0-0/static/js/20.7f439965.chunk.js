(this.webpackJsonpappcraft = this.webpackJsonpappcraft || []).push([[20], {
    3275: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "CodemaoApi", (function() {
            return u
        }
        )),
        n.d(e, "CodemaoError", (function() {
            return f
        }
        )),
        n.d(e, "CodemaoRequest", (function() {
            return O
        }
        )),
        n.d(e, "ERROR", (function() {
            return r
        }
        )),
        n.d(e, "U", (function() {
            return et
        }
        )),
        n.d(e, "auth", (function() {
            return ct
        }
        )),
        n.d(e, "captcha", (function() {
            return Ot
        }
        )),
        n.d(e, "init", (function() {
            return bt
        }
        ));
        var r, o = {
            dev: {
                env: "dev",
                host: {
                    tiger: "https://backend-dev.codemao.cn",
                    platform: "https://dev-open-service.codemao.cn"
                },
                domain: ".codemao.cn"
            },
            staging: {
                env: "staging",
                host: {
                    tiger: "https://backend-test.codemao.cn",
                    platform: "https://staging-open-service.codemao.cn"
                },
                domain: ".codemao.cn"
            },
            prod: {
                env: "prod",
                host: {
                    tiger: "https://api.codemao.cn",
                    platform: "https://open-service.codemao.cn"
                },
                domain: ".codemao.cn"
            },
            "api-test": {
                env: "api-test",
                host: {
                    tiger: "https://test-api.codemao.cn",
                    platform: "https://test-open-service.codemao.cn"
                },
                domain: ".codemao.cn"
            },
            test: {
                env: "test",
                host: {
                    tiger: "https://test-api.codemao.cn",
                    platform: "https://test-open-service.codemao.cn"
                },
                domain: ".codemao.cn"
            },
            press: {
                env: "press",
                host: {
                    tiger: "https://press-api.codemao.cn",
                    platform: "https://press-open-service.codemao.cn"
                },
                domain: ".codemao.cn"
            }
        };
        !function(t) {
            t[t.INVALID_INIT_PARAMS = -1] = "INVALID_INIT_PARAMS",
            t[t.INVALID_PHONE_NUMBER = 0] = "INVALID_PHONE_NUMBER",
            t[t.INVALID_CAPTCHA = 1] = "INVALID_CAPTCHA",
            t[t.INVALID_PASSWORD = 2] = "INVALID_PASSWORD",
            t[t.INVALID_USERNAME = 3] = "INVALID_USERNAME",
            t[t.INVALID_NICKNAME = 4] = "INVALID_NICKNAME",
            t[t.INVALID_FULLNAME = 5] = "INVALID_FULLNAME",
            t[t.INVALID_QQ = 6] = "INVALID_QQ",
            t[t.INVALID_DESCRIPTION = 7] = "INVALID_DESCRIPTION",
            t[t.INVALID_SEX = 8] = "INVALID_SEX",
            t[t.INVALID_BIRTHDAY = 9] = "INVALID_BIRTHDAY",
            t[t.PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD = 10] = "PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD",
            t[t.NO_TOKEN = 11] = "NO_TOKEN",
            t[t.REQUEST_TIMEOUT = 12] = "REQUEST_TIMEOUT",
            t[t.REQUEST_ERROR = 13] = "REQUEST_ERROR",
            t[t.PHONE_REGISTERED = 14] = "PHONE_REGISTERED",
            t[t.PHONE_UNREGISTERED = 15] = "PHONE_UNREGISTERED",
            t[t.USER_NOT_EXIST_OR_PWD_WRONG = 16] = "USER_NOT_EXIST_OR_PWD_WRONG",
            t[t.USER_NOT_EXIST = 17] = "USER_NOT_EXIST",
            t[t.CANNOT_SET_FUTURE_DATE = 18] = "CANNOT_SET_FUTURE_DATE",
            t[t.CANNOT_SET_USERNAME_REPEATEDLY = 19] = "CANNOT_SET_USERNAME_REPEATEDLY",
            t[t.USERNAME_EXIST = 20] = "USERNAME_EXIST",
            t[t.NEED_TO_BIND_PHONE = 21] = "NEED_TO_BIND_PHONE",
            t[t.USE_BOUND_PHONE_TO_RECEIVE_CAPTCHA = 22] = "USE_BOUND_PHONE_TO_RECEIVE_CAPTCHA",
            t[t.WRONG_OLD_PWD = 23] = "WRONG_OLD_PWD",
            t[t.PWDS_DO_NOT_MATCH = 24] = "PWDS_DO_NOT_MATCH",
            t[t.INIT_PWD_CAN_SET_ONLY_ONCE = 25] = "INIT_PWD_CAN_SET_ONLY_ONCE",
            t[t.NEED_PRIMARY_ACCOUNT = 26] = "NEED_PRIMARY_ACCOUNT",
            t[t.VERIFY_CAPTCHA_FAIL = 27] = "VERIFY_CAPTCHA_FAIL",
            t[t.USER_PHONE_BOUND = 28] = "USER_PHONE_BOUND",
            t[t.OLD_PHONE_WRONG = 29] = "OLD_PHONE_WRONG",
            t[t.ILLEGAL_OPERATION = 30] = "ILLEGAL_OPERATION",
            t[t.CANNOT_BIND_OLD_PHONE = 31] = "CANNOT_BIND_OLD_PHONE",
            t[t.ILLEGAL_OAUTH_TICKET = 32] = "ILLEGAL_OAUTH_TICKET",
            t[t.ILLEGAL_AUTHORIZATION_CATEGORY = 33] = "ILLEGAL_AUTHORIZATION_CATEGORY",
            t[t.THIRD_PARTY_ACCOUNT_BOUND = 34] = "THIRD_PARTY_ACCOUNT_BOUND",
            t[t.AUTHORIZATION_ACCOUNT_BOUND = 35] = "AUTHORIZATION_ACCOUNT_BOUND",
            t[t.BIND_PHONE_OR_SET_USERNAME_AND_PWD = 36] = "BIND_PHONE_OR_SET_USERNAME_AND_PWD",
            t[t.SEND_CAPTCHA_TOO_FRUQUENTLY = 37] = "SEND_CAPTCHA_TOO_FRUQUENTLY",
            t[t.ILLEGAL_PID = 38] = "ILLEGAL_PID",
            t[t.NICKNAME_EXIST = 39] = "NICKNAME_EXIST",
            t[t.PHONE_BOUND_BY_OTHER_ACCOUNT = 40] = "PHONE_BOUND_BY_OTHER_ACCOUNT",
            t[t.QQ_ERROR_RECEIVED = 41] = "QQ_ERROR_RECEIVED",
            t[t.WECHAR_ERROR_RECEIVED = 42] = "WECHAR_ERROR_RECEIVED",
            t[t.TOKEN_INVALID = 43] = "TOKEN_INVALID",
            t[t.REFRESH_TOKEN_INVALID = 44] = "REFRESH_TOKEN_INVALID",
            t[t.WRONG_TICKET = 45] = "WRONG_TICKET",
            t[t.COOKIE_INVALID = 46] = "COOKIE_INVALID",
            t[t.Appid_NotFound = 47] = "Appid_NotFound",
            t[t.Default_CaptchaRule_NotFound = 48] = "Default_CaptchaRule_NotFound",
            t[t.TencentCaptcha_Exception = 49] = "TencentCaptcha_Exception",
            t[t.GeetestCaptcha_Exception = 50] = "GeetestCaptcha_Exception",
            t[t.INVALID_EMAIL_ADDRESS = 51] = "INVALID_EMAIL_ADDRESS",
            t[t.EMAIL_HAS_REGISTERED = 52] = "EMAIL_HAS_REGISTERED",
            t[t.ACCOUNT_HAS_BLOCKED = 53] = "ACCOUNT_HAS_BLOCKED",
            t[t.RECEIVABLE_CAPTCHA_TIMES_LIMITTED = 54] = "RECEIVABLE_CAPTCHA_TIMES_LIMITTED",
            t[t.AGREEMENT_IDS = 55] = "AGREEMENT_IDS"
        }(r || (r = {}));
        var i = {
            REGISTER_SEND_CAPTCHA: "/tiger/v3/web/accounts/captcha/register/phone/with-agreement",
            REGISTER: "/tiger/v3/web/accounts/register/phone/with-agreement",
            LOGIN_CAPTCHA: "/tiger/v3/web/accounts/captcha/login/post-process",
            LOGIN_PHONE: "/tiger/v3/web/accounts/phone/login/post-process",
            LOGIN_ACCOUNT: "/tiger/v3/web/accounts/login",
            LOGIN_WECHAT: "/tiger/v3/web/accounts/oauth/wechat",
            LOGIN_QQ: "/tiger/v3/web/accounts/oauth/qq",
            BIND_PHONE_FOR_THIRD_PARTY: "/tiger/v3/web/accounts/captcha/oauth",
            CREATE_USER_FOR_THIRD_PARTY: "/tiger/v3/web/accounts/oauth/third-party",
            SET_USERNAME: "/tiger/v3/web/accounts/username",
            BIND_PHONE_CAPTCHA: "/tiger/v3/web/accounts/captcha/phone/bind",
            BIND_PHONE: "/tiger/v3/web/accounts/phone/bind",
            BIND_PHONE_CHECK: "/tiger/v3/web/accounts/phone/check",
            REBIND_PHONE_CAPTCHA: "/tiger/v3/web/accounts/captcha/phone/change",
            REBIND_PHONE: "/tiger/v3/web/accounts/phone/change",
            CHANGE_PWD_BY_OLD: "/tiger/v3/web/accounts/password",
            CHNAGE_PWD_BY_PHONE_CAPTCHA: "/tiger/v3/web/accounts/captcha/password/update",
            CHANGE_PWD_BY_PHONE: "/tiger/v3/web/accounts/password/phone",
            INIT_PASSWORD: "/tiger/v3/web/accounts/password/setting",
            RESET_PWD_CAPTCHA: "/tiger/v3/web/accounts/captcha/password/reset",
            RESET_PWD_TOKEN: "/tiger/v3/web/accounts/captcha/password/check",
            RESET_PWD: "/tiger/v3/web/accounts/password/reset",
            SET_PROFILE: "/tiger/v3/web/accounts/info",
            CHECK_BIND_FOR_THIRD_PARTY: "/tiger/v3/web/accounts/oauths",
            BIND_WECHAT: "/tiger/v3/web/accounts/oauth/wechat/bind",
            UNBIND_WECHAT: "/tiger/v3/web/accounts/oauth/wechat/unbind",
            BIND_QQ: "/tiger/v3/web/accounts/oauth/qq/bind",
            UNBIND_QQ: "/tiger/v3/web/accounts/oauth/qq/unbind",
            GET_PROFILE: "/tiger/v3/web/accounts/profile",
            GET_AUTH: "/tiger/v3/web/accounts/privacy",
            GET_GRADE_LIST: "/tiger/v3/web/accounts/grade-list",
            LOGOUT: "/tiger/v3/web/accounts/logout",
            SEND_UNIVERSAL_CAPTCHA: "/tiger/v3/web/accounts/captcha/common",
            VERIFY_UNIVERSAL_CAPTCHA: "/tiger/v3/web/accounts/captcha/common/check",
            LOGIN_CAPTCHA_SILENCE: "/tiger/v3/web/accounts/captcha/login/silence",
            LOGIN_PHONE_SILENCE: "/tiger/v3/web/accounts/phone/login/silence",
            LOGIN_ACCOUNT_TICKET: "/tiger/v3/web/accounts/login/security",
            SEND_EMAIL_REGISTERATION_CAPTCHA: "/tiger/v3/web/accounts/email/captcha/send",
            VERIFY_EMAIL_REGISTERATION_CAPTCHA: "/tiger/v3/web/accounts/email/captcha/check",
            REGISTER_BY_EMAIL: "/tiger/v3/web/accounts/email/register",
            GET_AGREEMENTS: "/tiger/v3/web/accounts/agreements",
            GET_AGREEMENTS_NEED_SIGN: "/tiger/v3/web/accounts/agreements/need-sign",
            SIGN_AGREEMENTS: "/tiger/v3/web/accounts/agreements/sign",
            VOICE_CAPTCHA: "/tiger/v3/web/accounts/voice/captcha/send",
            FIND_LATEST_PROTOCOL_LIST: "/tiger/v3/web/accounts/protocol/list"
        }
          , c = {
            GET_RULE: "/captcha/rule/v3",
            GET_GEETEST_PARAMS: "/captcha/geetest/register",
            CHECK_AND_GET_GEETEST_TICKET: "/captcha/geetest/verify",
            CHECK_AND_GET_TENCENT_TICKET: "/captcha/tencent",
            CHECK_AND_GET_NEXTDATA_TICKET: "/captcha/nextdata",
            CHECK_AND_GET_NETEASE_TICKET: "/captcha/netease",
            CHECK_AND_GET_ALIYUN_TICKET: "/captcha/aliyun"
        }
          , s = {
            REFRESH_TOKEN: "/tiger/v3/web/accounts/tokens/refresh",
            DELETE_TOKEN: "/tiger/v3/web/accounts/tokens",
            GET_TOKEN_FROM_OLD_COOKIE: "/tiger/v3/web/accounts/tokens/convert"
        }
          , a = {
            Net: navigator.connection ? navigator.connection.effectiveType : "",
            "SDK-Account-Version": "0.16.0"
        }
          , u = Object.freeze({
            __proto__: null,
            Api: i,
            TIGER_CAPTCHA_API: {
                GET_RULE: "/tiger/captcha/graph/rule",
                GET_GEETEST_PARAMS: "/tiger/captcha/graph/geetest/register_slide",
                CHECK_AND_GET_GEETEST_TICKET: "/tiger/captcha/graph/tickets/geetest",
                CHECK_AND_GET_WATERPROOFWALL_TICKET: "/tiger/captcha/graph/tickets/waterproof-wall"
            },
            PLATFORM_CAPTCHA_API: c,
            TIGER_TOKEN_API: s,
            PUBLIC_HEADERS: a
        })
          , _ = function(t, e) {
            return (_ = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            )(t, e)
        };
        function d(t, e) {
            function n() {
                this.constructor = t
            }
            _(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        var h = function() {
            return (h = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function p(t, e, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function c(t) {
                    try {
                        a(r.next(t))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(t) {
                    try {
                        a(r.throw(t))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(c, s)
                }
                a((r = r.apply(t, e || [])).next())
            }
            ))
        }
        function l(t, e) {
            var n, r, o, i, c = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; c; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(),
                                    c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2],
                                        c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                i = e.call(t, c)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        var E, f = function(t) {
            function e(e) {
                var n = t.call(this, e.message) || this
                  , r = e.error_code
                  , o = e.error_origin_response
                  , i = void 0 === o ? {
                    error_code: r,
                    error_message: e.message,
                    error_number: r || null
                } : o;
                return void 0 !== e.error_code && (n.error_code = r),
                e.error_body && (n.error_body = e.error_body),
                n.response = i,
                n
            }
            return d(e, t),
            e
        }(Error), T = function(t) {
            console.error("Iris SDK error: " + t)
        }, N = {
            AC3_0: {
                error_code: r.PHONE_REGISTERED,
                message: "Phone number is registered."
            },
            AC3_1: {
                error_code: r.PHONE_UNREGISTERED,
                message: "Phone number is unregistered."
            },
            AC3_2: {
                error_code: r.USER_NOT_EXIST_OR_PWD_WRONG,
                message: "User doesn't exist or password is wrong."
            },
            AC3_3: {
                error_code: r.USER_NOT_EXIST,
                message: "User doesn't exist."
            },
            AC3_4: {
                error_code: r.CANNOT_SET_FUTURE_DATE,
                message: "Cannot set a future date."
            },
            AC3_5: {
                error_code: r.CANNOT_SET_USERNAME_REPEATEDLY,
                message: "Cannot set the username repeatedly."
            },
            AC3_6: {
                error_code: r.USERNAME_EXIST,
                message: "Username is already existed."
            },
            AC3_7: {
                error_code: r.NEED_TO_BIND_PHONE,
                message: "User need to bind a phone."
            },
            AC3_8: {
                error_code: r.USE_BOUND_PHONE_TO_RECEIVE_CAPTCHA,
                message: "Need to use the bound phone to receive the captcha."
            },
            AC3_9: {
                error_code: r.WRONG_OLD_PWD,
                message: "Wrong old password."
            },
            AC3_10: {
                error_code: r.PWDS_DO_NOT_MATCH,
                message: "Passwords do not match."
            },
            AC3_11: {
                error_code: r.INIT_PWD_CAN_SET_ONLY_ONCE,
                message: "Init-password can be set only once."
            },
            AC3_12: {
                error_code: r.NEED_PRIMARY_ACCOUNT,
                message: "Primary account should exist.(one of email, username and phone number)."
            },
            AC3_13: {
                error_code: r.VERIFY_CAPTCHA_FAIL,
                message: "Fail when verifying the captcha."
            },
            AC3_14: {
                error_code: r.USER_PHONE_BOUND,
                message: "User has bound a phone."
            },
            AC3_15: {
                error_code: r.OLD_PHONE_WRONG,
                message: "Old phone number is wrong."
            },
            AC3_16: {
                error_code: r.ILLEGAL_OPERATION,
                message: "Operation is illegal."
            },
            AC3_17: {
                error_code: r.CANNOT_BIND_OLD_PHONE,
                message: "Cannot bind phone with a old phone number."
            },
            AC3_18: {
                error_code: r.ILLEGAL_OAUTH_TICKET,
                message: "Oauth_ticket is illegal."
            },
            AC3_19: {
                error_code: r.ILLEGAL_AUTHORIZATION_CATEGORY,
                message: "Authorization category is illegal."
            },
            AC3_20: {
                error_code: r.THIRD_PARTY_ACCOUNT_BOUND,
                message: "Third-party account has been bound."
            },
            AC3_21: {
                error_code: r.AUTHORIZATION_ACCOUNT_BOUND,
                message: "Account has been bound with the the same authorization account."
            },
            AC3_22: {
                error_code: r.BIND_PHONE_OR_SET_USERNAME_AND_PWD,
                message: "Please bind a phone or set the username."
            },
            AC3_23: {
                error_code: r.SEND_CAPTCHA_TOO_FRUQUENTLY,
                message: "Request captchas too fruquently."
            },
            AC3_24: {
                error_code: r.ILLEGAL_PID,
                message: "Pid is illegal."
            },
            AC3_25: {
                error_code: r.NICKNAME_EXIST,
                message: "Nickname is already existed."
            },
            AC3_26: {
                error_code: r.PHONE_BOUND_BY_OTHER_ACCOUNT,
                message: "Phone has been bound by other account."
            },
            AC3_27: {
                error_code: r.WRONG_TICKET,
                message: "Ticket is wrong."
            },
            AC3_44: {
                error_code: r.ACCOUNT_HAS_BLOCKED,
                message: "Account has blocked in blacklist."
            },
            AC3_48: {
                error_code: r.RECEIVABLE_CAPTCHA_TIMES_LIMITTED,
                message: "Reached the specified limitation of sending times."
            },
            AC3_61: {
                error_code: r.EMAIL_HAS_REGISTERED,
                message: "Email has registered."
            },
            C_1: {
                error_code: r.QQ_ERROR_RECEIVED,
                message: "Receive error from QQ when login with it."
            },
            C_2: {
                error_code: r.WECHAR_ERROR_RECEIVED,
                message: "Receive error from WeChat when login with it."
            },
            GCAP_1: {
                error_code: r.INVALID_CAPTCHA,
                message: "Invalid Ticket."
            },
            1e7: {
                error_code: r.TOKEN_INVALID,
                message: "Access token is invalid."
            },
            10000001: {
                error_code: r.REFRESH_TOKEN_INVALID,
                message: "Refresh token is invalid."
            },
            10000002: {
                error_code: r.COOKIE_INVALID,
                message: "Fail to convert cookie to token."
            },
            10017001: {
                error_code: r.Appid_NotFound,
                message: "AppidNotFoundException"
            },
            10017002: {
                error_code: r.Default_CaptchaRule_NotFound,
                message: "DefaultCaptchaRuleNotFoundException"
            },
            10017003: {
                error_code: r.TencentCaptcha_Exception,
                message: "TencentCaptchaException"
            },
            10017004: {
                error_code: r.GeetestCaptcha_Exception,
                message: "GeetestCaptchaException"
            }
        }, v = {
            pid: {
                required: !0,
                types: ["string"]
            },
            appid: {
                required: !0,
                types: ["string", "number"]
            },
            product_code: {
                required: !0,
                types: ["string", "number"]
            }
        }, A = {}, m = function() {
            return A
        }, I = o.prod, C = function() {
            return I
        }, g = function() {
            return E
        }, O = function() {
            function t(t) {
                this.hostType = t && t.hostType || "tiger",
                this.timeout = t && t.timeout || 2e4,
                this.public_headers = t && t.public_headers
            }
            return t.prototype.get_complete_url = function(t, e) {
                var n = Object.keys(e).filter((function(t) {
                    return e[t]
                }
                )).map((function(t) {
                    return t + "=" + e[t]
                }
                )).join("&");
                return 0 === Object.keys(e).length ? "" + C().host[this.hostType] + t : "" + C().host[this.hostType] + t + "?" + n
            }
            ,
            t.prototype.dispatch_request = function(t) {
                return p(this, void 0, void 0, (function() {
                    var e = this;
                    return l(this, (function(n) {
                        return [2, new Promise((function(n, o) {
                            var i = t.url
                              , c = t.method
                              , s = t.data
                              , a = t.without_base_url
                              , u = t.params || {}
                              , _ = {};
                            m().auth_version && (_["Auth-Version"] = m().auth_version),
                            m().client_id && (_["Client-ID"] = m().client_id);
                            var d = h(h(h({}, e.public_headers), t.headers), _)
                              , p = a ? i : e.get_complete_url(i, u)
                              , l = new XMLHttpRequest;
                            l.open(c.toUpperCase(), p, !0),
                            s && l.setRequestHeader("Content-Type", "application/json;charset=utf-8"),
                            l.timeout = m().requestTimeout || e.timeout,
                            l.withCredentials = !0,
                            l.onreadystatechange = function() {
                                var t;
                                if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:")))
                                    if (l.status >= 200 && l.status <= 300) {
                                        var e = l.response;
                                        n(e ? {
                                            status: l.status,
                                            statusText: l.statusText,
                                            data: JSON.parse(e)
                                        } : {
                                            status: l.status,
                                            statusText: l.statusText,
                                            data: null
                                        })
                                    } else
                                        try {
                                            e = JSON.parse(l.response);
                                            var r = N[e.error_code];
                                            o(new f(r ? h(h({}, r), {
                                                error_origin_response: e
                                            }) : {
                                                error_code: e.error_code,
                                                error_body: (null === (t = e.catastrophe) || void 0 === t ? void 0 : t.error) || e,
                                                error_origin_response: e,
                                                message: "Get error from " + p + "."
                                            }))
                                        } catch (r) {
                                            o(r)
                                        }
                            }
                            ,
                            l.onerror = function() {
                                o(new f({
                                    error_code: r.REQUEST_ERROR,
                                    message: "Network error."
                                }))
                            }
                            ,
                            l.ontimeout = function() {
                                o(new f({
                                    error_code: r.REQUEST_TIMEOUT,
                                    message: "ECONNABORTED:timeout of " + l.timeout + " ms exceeded."
                                }))
                            }
                            ;
                            try {
                                "setRequestHeader"in l && Object.keys(d).forEach((function(t) {
                                    l.setRequestHeader(t, d[t])
                                }
                                ))
                            } catch (E) {
                                throw console.error(E),
                                console.log("headers is ", d),
                                new Error("Iris Error: \u8bbe\u7f6e\u8bf7\u6c42\u5934\u65f6\u51fa\u9519\uff0c\u8bf7\u68c0\u67e5\u8bf7\u6c42\u5934\uff0c\u4e0d\u80fd\u542b\u6709\u4e2d\u6587")
                            }
                            s ? l.send(JSON.stringify(s)) : l.send()
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t
        }(), b = (new O,
        new O({
            hostType: "platform"
        }));
        function R(t, e) {
            t && Object.keys(t).map((function(t) {
                -1 === e.indexOf(t) && new T("\u8bf7\u786e\u8ba4 " + t + " \u53c2\u6570\u662f\u5426\u5408\u6cd5")
            }
            ))
        }
        function w(t, e, n) {
            return function(r) {
                if (!e.test(r))
                    throw new f({
                        error_code: n,
                        message: "Invalid " + t + ' "' + r + '", it should match the RegExp ' + e + "."
                    })
            }
        }
        var k = w("phone_number", /^1[3456789]\d{9}$/, r.INVALID_PHONE_NUMBER)
          , D = w("email_address", /^\w+@[a-z0-9]+\.[a-z]{2,4}/, r.INVALID_EMAIL_ADDRESS)
          , y = w("captcha", /^\d{6}$/, r.INVALID_CAPTCHA)
          , S = w("password", /^[a-zA-Z0-9\_\-@#?!~$^&\*\(\)\/%<>,\.;:"+=|\\{}\[\]]{6,20}$/, r.INVALID_PASSWORD)
          , P = w("username", /^[a-zA-Z]{1}\w{5,29}$/, r.INVALID_USERNAME)
          , L = w("nickname", /^[^\s\u2600\u2601\u2602\u03df\u2609\u263c\u263e\u263d\u2641\u2668\u2744\u2745\u2746\u2603\u2601\u2709\u2121\u213b\u260e\u260f\u2702\u2704\u2706\u270e\u270f\u2710\u2711\u2712\u2707\u2117\xa9\xae\ud83c\udd4f\ud83c\udd8f\u2690\u2691\u2686\u2687\u2688\u2689\u269e\u269f\u26a0\u26ac\u26ad\u26ae\u26af\u260a\u32c0\u32c1\u32c2\u32c3\u32c4\u32c5\u32c6\u32c7\u32c8\u32c9\u32ca\u32cb\u33e0\u33e1\u33e2\u33e3\u33e4\u33e5\u33e6\u33e7\u33e8\u33e9 \u33ea\u33eb\u33ec\u33ed\u33ee\u33ef\u33f0\u33f1\u33f2\u33f3\u33f4\u33f5\u33f6\u33f7\u33f8\u33f9\u33fa\u33fb\u33fc\u33fd\u33fe\u3358\u3359\u335a\u335b\u335c\u335d\u335e\u335f\u3360\u3361\u3362\u3363\u3364\u3365\u3366\u3367\u3368\u3369\u336a\u336b\u336c\u336d\u336e\u336f\u3370\u33c2\u33d8\u2673\u2674\u2675\u2676\u2677\u2678\u2679\u267a\u2672\u267b\u267c\u267d\u2680\u2681\u2682\u2683\u2684\u2685]{1,20}$/, r.INVALID_NICKNAME)
          , H = w("fullname", /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z](\s?[a-zA-Z]){3,29})$/, r.INVALID_FULLNAME)
          , G = w("qq", /^\d{5,20}$/, r.INVALID_QQ);
        function U(t) {
            if (t.length > 50)
                throw new f({
                    error_code: r.INVALID_DESCRIPTION,
                    message: "Invalid description, it should contains only 0 - 50 characters."
                })
        }
        function q(t) {
            if (0 !== t && 1 !== t)
                throw new f({
                    error_code: r.INVALID_SEX,
                    message: 'Invalid sex "' + t + '", it should be 0 or 1.'
                })
        }
        function M(t) {
            if (!Number.isInteger(t))
                throw new f({
                    error_code: r.INVALID_BIRTHDAY,
                    message: 'Invalid birthday "' + t + '", it should be a integer number.'
                })
        }
        function B(t) {
            var e = t.phone_number
              , n = t.password
              , r = t.captcha
              , o = t.agreement_ids;
            k(e),
            S(n),
            y(r),
            V(o)
        }
        function V(t) {
            if (!(null === t || void 0 === t ? void 0 : t.length))
                throw new f({
                    error_code: r.AGREEMENT_IDS,
                    message: "agreement_ids should not be an empty array."
                })
        }
        function K(t) {
            var e = t.birthday
              , n = t.sex
              , r = t.fullname
              , o = t.nickname
              , i = t.qq
              , c = t.description;
            e && M(e),
            n && q(n),
            r && H(r),
            o && L(o),
            i && G(i),
            c && U(c)
        }
        function x(t, e) {
            if (t !== e)
                throw new f({
                    error_code: r.PWD_IS_NOT_EQUAL_TO_CONFIRMED_PWD,
                    message: "Password is not equal to confirmed password."
                })
        }
        function W(t, e) {
            return p(this, void 0, void 0, (function() {
                return l(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]),
                        [4, e()];
                    case 1:
                        return [2, n.sent()];
                    case 2:
                        if (n.sent(),
                        t > 1)
                            return [2, W(t - 1, e)];
                        throw new f({
                            message: "Get geetest init params fail, please reload the page or try again later."
                        });
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function F(t) {
            var e = t.name + "=" + t.value + "; domain=" + t.domain + "; max-age=" + t.max_age + "; path=/;"
              , n = e + " samesite=none; secure";
            document.cookie = e,
            document.cookie = n
        }
        function Y(t) {
            var e = {};
            return document.cookie.split(";").forEach((function(t) {
                var n = t.indexOf("=")
                  , r = t.slice(0, n)
                  , o = t.slice(n + 1);
                e[r.trim()] = o
            }
            )),
            e[t]
        }
        function j(t, e) {
            F({
                name: t,
                value: "",
                domain: e,
                max_age: -999999
            })
        }
        function Q(t) {
            var e = C().env
              , n = "prod" === e ? "" : e + "-";
            return "token_type" === t ? n + "token-type" : "" + n + t + "-token"
        }
        function X(t) {
            return !(!t || "undefined" === t || "" === t)
        }
        function z(t, e, n) {
            return p(this, void 0, void 0, (function() {
                return l(this, (function(r) {
                    return [2, new Promise((function(r, o) {
                        if (document.getElementById(e))
                            r();
                        else {
                            var i;
                            n && (i = setTimeout((function() {
                                r(),
                                clearTimeout(i)
                            }
                            ), 1e3 * n));
                            var c = document.createElement("script");
                            c.type = "text/javascript",
                            c.onload = function() {
                                r(),
                                i && clearTimeout(i)
                            }
                            ,
                            c.id = e,
                            c.src = t,
                            c.setAttribute("defer", ""),
                            document.getElementsByTagName("head")[0].appendChild(c)
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        function Z(t, e) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function $(t, e, n) {
            return new Promise((function(r, o) {
                var i = document.createElement(t);
                i.onload = function() {
                    r(!0)
                }
                ,
                i.onerror = function() {
                    o(!1)
                }
                ,
                e && Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    "innerHTML" !== t && "style" !== t && i.setAttribute(t, "string" !== typeof n ? JSON.stringify(n) : n)
                }
                )),
                i.innerHTML = e.innerHTML,
                i.setAttribute("style", n || ""),
                document.body.appendChild(i),
                r(!0)
            }
            ))
        }
        function J(t) {
            var e = "" + (new Date).getTime() / 1e3;
            return "iris-" + t + "-" + parseInt(e, 10)
        }
        var tt, et = Object.freeze({
            __proto__: null,
            check_input_existence: R,
            check_phone_number: k,
            validate_email_address: D,
            check_captcha: y,
            check_password: S,
            check_username: P,
            check_nickname: L,
            check_fullname: H,
            check_qq: G,
            check_description: U,
            check_sex: q,
            check_birthday: M,
            check_register_options: B,
            check_agreement_ids: V,
            check_profile: K,
            check_if_pwd_equals_confirmed_pwd: x,
            retry: W,
            set_cookie: F,
            get_cookie: Y,
            clear_cookie: j,
            get_cookie_name: Q,
            is_cookie_exist: X,
            load_script: z,
            hasProperty: Z,
            appendDomNode: $,
            simpleHash: J
        }), nt = function() {
            function t() {
                this.request = new O({
                    public_headers: h({
                        "Product-Code": g().product_code,
                        Platform: g().platform
                    }, a)
                })
            }
            return t.prototype.dispatch_request = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return [2, this.request.dispatch_request(t)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_complete_access_token = function() {
                var t = Y(Q("token_type"))
                  , e = Y(Q("access"));
                if (X(t) && X(e))
                    return t + " " + e;
                var n = C().domain;
                throw j(Q("access"), n),
                j(Q("token_type"), n),
                new f({
                    error_code: r.NO_TOKEN,
                    message: "NO Token(cookie might have been expired). Please login."
                })
            }
            ,
            t.prototype.get_access = function(t) {
                return p(this, void 0, void 0, (function() {
                    var e;
                    return l(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            switch (this.check()) {
                            case "ACCESS_EXIST":
                                return [3, 1];
                            case "REFRESH_EXIST":
                                return [3, 2];
                            case "NO_TOKEN":
                                return [3, 4]
                            }
                            return [3, 7];
                        case 1:
                            return [2, this.get_complete_access_token()];
                        case 2:
                            return [4, this.refresh()];
                        case 3:
                            return n.sent(),
                            [2, this.get_complete_access_token()];
                        case 4:
                            return n.trys.push([4, 6, , 7]),
                            [4, this.convert_cookie_to_token(t)];
                        case 5:
                            return e = n.sent(),
                            this.set(e.data),
                            [2, this.get_complete_access_token()];
                        case 6:
                            throw n.sent(),
                            this.clear(),
                            new f({
                                error_code: r.NO_TOKEN,
                                message: "NO Token. Please login."
                            });
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.convert_cookie_to_token = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return [2, this.dispatch_request({
                            url: s.GET_TOKEN_FROM_OLD_COOKIE,
                            method: "post",
                            headers: t ? {
                                Authorization: "Bearer " + t
                            } : {}
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_refresh = function() {
                if (m().auth_version && "NO_TOKEN" === this.check())
                    throw new f({
                        error_code: r.NO_TOKEN,
                        message: "NO Token. Please login."
                    });
                return Y(Q("refresh"))
            }
            ,
            t.prototype.set = function(t) {
                var e = t.access
                  , n = t.refresh
                  , r = C().domain;
                e && e.token && e.type && e.expires_in ? (F({
                    name: Q("access"),
                    value: e.token,
                    domain: r,
                    max_age: e.expires_in
                }),
                F({
                    name: Q("token_type"),
                    value: e.type,
                    domain: r,
                    max_age: e.expires_in
                })) : console.warn("Unexpected access token response from back-end: ", e),
                n && (n.token && n.expires_in || console.warn("Unexpected refresh token response from back-end: ", n),
                F({
                    name: Q("refresh"),
                    value: n.token,
                    domain: r,
                    max_age: n.expires_in
                }))
            }
            ,
            t.prototype.refresh_token = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            method: "put",
                            url: s.REFRESH_TOKEN,
                            data: {
                                refresh_token: this.get_refresh()
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.refresh = function() {
                return p(this, void 0, void 0, (function() {
                    var t, e;
                    return l(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]),
                            [4, this.refresh_token()];
                        case 1:
                            return t = n.sent(),
                            this.set(t.data),
                            [3, 3];
                        case 2:
                            throw (e = n.sent()).error_code === r.REFRESH_TOKEN_INVALID && this.clear(),
                            e;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.check = function() {
                return X(Y(Q("access"))) && X(Y(Q("token_type"))) ? "ACCESS_EXIST" : X(Y(Q("refresh"))) ? "REFRESH_EXIST" : "NO_TOKEN"
            }
            ,
            t.prototype.clear = function() {
                var t = C().domain;
                j(Q("access"), t),
                j(Q("token_type"), t),
                j(Q("refresh"), t)
            }
            ,
            t
        }();
        function rt(t, e) {
            return p(this, void 0, void 0, (function() {
                var n;
                return l(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 5]),
                        [4, e()];
                    case 1:
                        return [2, o.sent()];
                    case 2:
                        return n = o.sent(),
                        n.error_code === r.TOKEN_INVALID && t > 1 ? [4, (new nt).refresh()] : [3, 4];
                    case 3:
                        return o.sent(),
                        [2, rt(t - 1, e)];
                    case 4:
                        throw n;
                    case 5:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        var ot = function(t, e, n) {
            return !1 !== e ? h(h(h({}, t), {
                "X-Captcha-Id": g().appid || ""
            }), n) : t
        };
        var it = function() {
            function t() {
                var t;
                this.request = new O({
                    public_headers: h(h({
                        "Product-Code": g().product_code,
                        pid: g().pid,
                        Platform: g().platform
                    }, a), null === (t = m()) || void 0 === t ? void 0 : t.custom_headers)
                }),
                this.token = new nt
            }
            return t.prototype.dispatch_request = function(t) {
                return p(this, void 0, void 0, (function() {
                    var e, n, r = this;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return t.with_token && m().auth_version ? (t.headers = t.headers || {},
                            e = t.headers,
                            n = "Authorization",
                            [4, this.token.get_access()]) : [3, 2];
                        case 1:
                            return e[n] = o.sent(),
                            [2, rt(2, (function() {
                                return p(r, void 0, void 0, (function() {
                                    return l(this, (function(e) {
                                        return [2, this.request.dispatch_request(t)]
                                    }
                                    ))
                                }
                                ))
                            }
                            ))];
                        case 2:
                            return [2, this.request.dispatch_request(t)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.email_register_send_captcha = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return D(t),
                        [2, this.dispatch_request({
                            url: i.SEND_EMAIL_REGISTERATION_CAPTCHA,
                            method: "post",
                            data: {
                                email: t
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            })
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.validate_email_register_captcha = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return D(t),
                        [2, this.dispatch_request({
                            url: i.VERIFY_EMAIL_REGISTERATION_CAPTCHA,
                            method: "post",
                            data: {
                                email: t,
                                captcha: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.register_email = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    var n, r, o;
                    return l(this, (function(c) {
                        return n = t.captchaTicket,
                        r = t.password,
                        o = t.rePassword,
                        S(r),
                        S(o),
                        x(r, o),
                        [2, this.dispatch_request({
                            url: i.REGISTER_BY_EMAIL,
                            method: "post",
                            data: {
                                captchaTicket: n,
                                password: r,
                                rePassword: o,
                                pid: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_agreements = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.GET_AGREEMENTS,
                            method: "get"
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_agreements_need_sign = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.GET_AGREEMENTS_NEED_SIGN,
                            method: "get"
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.sign_agreements = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return [2, this.dispatch_request({
                            url: i.SIGN_AGREEMENTS,
                            method: "post",
                            data: {
                                agreement_ids: t,
                                pid: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.find_latest_protocol_list = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return [2, this.dispatch_request({
                            url: i.FIND_LATEST_PROTOCOL_LIST,
                            method: "post",
                            data: {
                                codeList: t,
                                pid: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.send_voice_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    var r, o, c;
                    return l(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return r = t.phone_number,
                            o = t.type,
                            k(r),
                            [4, this.dispatch_request({
                                url: i.VOICE_CAPTCHA,
                                method: "post",
                                data: {
                                    phone_number: r,
                                    type: o.toUpperCase(),
                                    oauth_ticket: n
                                },
                                headers: ot({
                                    "X-Captcha-Ticket": e
                                })
                            })];
                        case 1:
                            return 200 === (c = s.sent()).status && this.token.set(c.data.auth.token),
                            [2, c]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.register_send_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.REGISTER_SEND_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: n
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            })
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.register = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    var n, r;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return R(t, ["phone_number", "captcha", "password", "agreement_ids"]),
                            B(t),
                            n = e || g().pid,
                            [4, this.dispatch_request({
                                url: i.REGISTER,
                                method: "post",
                                data: h(h({}, t), {
                                    pid: n
                                })
                            })];
                        case 1:
                            return 200 === (r = o.sent()).status && this.token.set(r.data.auth.token),
                            [2, r]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.LOGIN_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: n
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            })
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_phone = function(t, e, n, r) {
                return p(this, void 0, void 0, (function() {
                    var o, c;
                    return l(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return k(t),
                            y(e),
                            o = n || g().pid,
                            [4, this.dispatch_request({
                                url: i.LOGIN_PHONE,
                                method: "post",
                                data: {
                                    phone_number: t,
                                    captcha: e,
                                    pid: o,
                                    agreement_ids: r || [-1]
                                }
                            })];
                        case 1:
                            return 200 === (c = s.sent()).status && this.token.set(c.data.auth.token),
                            [2, c]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_account = function(t, e, n, r) {
                return p(this, void 0, void 0, (function() {
                    var o, c;
                    return l(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return o = n || g().pid,
                            [4, this.dispatch_request({
                                url: i.LOGIN_ACCOUNT,
                                method: "post",
                                data: {
                                    identity: t,
                                    password: e,
                                    pid: o,
                                    agreement_ids: r || [-1]
                                }
                            })];
                        case 1:
                            return 200 === (c = s.sent()).status && this.token.set(c.data.auth.token),
                            [2, c]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_wechat = function(t, e, n, r) {
                return p(this, void 0, void 0, (function() {
                    var o, c;
                    return l(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return o = n || g().pid,
                            [4, this.dispatch_request({
                                url: i.LOGIN_WECHAT,
                                method: "post",
                                data: {
                                    code: t,
                                    pid: o,
                                    appid: r,
                                    agreement_ids: e || [-1]
                                }
                            })];
                        case 1:
                            return 200 === (c = s.sent()).status && c.data.auth && this.token.set(c.data.auth.token),
                            [2, c]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_qq = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    var r, o;
                    return l(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return r = n || g().pid,
                            [4, this.dispatch_request({
                                url: i.LOGIN_QQ,
                                method: "post",
                                data: {
                                    code: t,
                                    pid: r,
                                    agreement_ids: e || [-1]
                                }
                            })];
                        case 1:
                            return 200 === (o = c.sent()).status && o.data.auth && this.token.set(o.data.auth.token),
                            [2, o]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bind_phone_for_third_party = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.BIND_PHONE_FOR_THIRD_PARTY,
                            method: "post",
                            data: {
                                phone_number: t,
                                oauth_ticket: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.create_user_for_third_party = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    var r;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return e && y(e),
                            [4, this.dispatch_request({
                                url: i.CREATE_USER_FOR_THIRD_PARTY,
                                method: "post",
                                data: e ? {
                                    oauth_ticket: t,
                                    captcha: e,
                                    agreement_ids: n || [-1]
                                } : {
                                    oauth_ticket: t,
                                    agreement_ids: n || [-1]
                                }
                            })];
                        case 1:
                            return 200 === (r = o.sent()).status && this.token.set(r.data.auth.token),
                            [2, r]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.logout = function() {
                return p(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.dispatch_request({
                                url: i.LOGOUT,
                                method: "post",
                                data: {
                                    refresh_token: this.token.get_refresh()
                                },
                                with_token: !0
                            })];
                        case 1:
                            return (t = e.sent()) && this.token.clear(),
                            [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bind_phone_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.BIND_PHONE_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: n
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            }),
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bind_phone = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return k(t),
                        y(e),
                        [2, this.dispatch_request({
                            url: i.BIND_PHONE,
                            method: "patch",
                            data: {
                                phone_number: t,
                                captcha: e
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bind_phone_check = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.BIND_PHONE_CHECK,
                            method: "get",
                            params: {
                                phone_number: t
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.rebind_phone_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        k(e),
                        [2, this.dispatch_request({
                            url: i.REBIND_PHONE_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                old_phone_number: e,
                                pid: n
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.rebind_phone = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return k(t),
                        y(e),
                        [2, this.dispatch_request({
                            url: i.REBIND_PHONE,
                            method: "patch",
                            data: {
                                phone_number: t,
                                captcha: e
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.reset_pwd_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.RESET_PWD_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: n
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            })
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.reset_pwd_token = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return k(t),
                        y(e),
                        [2, this.dispatch_request({
                            url: i.RESET_PWD_TOKEN,
                            method: "post",
                            data: {
                                phone_number: t,
                                captcha: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.reset_pwd = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    var r, o;
                    return l(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            S(e),
                            S(n),
                            x(e, n),
                            r = {
                                url: i.RESET_PWD,
                                method: "patch",
                                data: {
                                    ticket: t,
                                    password: e,
                                    confirm_password: n
                                }
                            },
                            c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]),
                            [4, this.token.get_access()];
                        case 2:
                            return o = c.sent(),
                            [3, 4];
                        case 3:
                            return c.sent(),
                            o = "",
                            [3, 4];
                        case 4:
                            return "" !== o && Object.assign(r, {
                                with_token: !0
                            }),
                            [2, this.dispatch_request(r)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.send_universal_captcha = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.SEND_UNIVERSAL_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: n
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            })
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.verify_universal_captcha = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return k(t),
                        y(e),
                        [2, this.dispatch_request({
                            url: i.VERIFY_UNIVERSAL_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                captcha: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_captcha_silence = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(r) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.LOGIN_CAPTCHA_SILENCE,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: n
                            },
                            headers: ot({
                                "X-Captcha-Ticket": e
                            })
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_phone_silence = function(t, e, n, r) {
                return p(this, void 0, void 0, (function() {
                    var o, c, s, a, u;
                    return l(this, (function(_) {
                        switch (_.label) {
                        case 0:
                            return o = "",
                            c = "",
                            s = "",
                            "string" === typeof t && (o = t || "",
                            c = e || "",
                            s = n || ""),
                            "object" === typeof t && (o = (null === t || void 0 === t ? void 0 : t.phone_number) || "",
                            c = (null === t || void 0 === t ? void 0 : t.captcha) || "",
                            r = null === t || void 0 === t ? void 0 : t.agreement_ids,
                            s = e || ""),
                            k(o),
                            y(c),
                            a = s || g().pid,
                            [4, this.dispatch_request({
                                url: i.LOGIN_PHONE_SILENCE,
                                method: "post",
                                data: {
                                    phone_number: o,
                                    captcha: c,
                                    pid: a,
                                    agreement_ids: r || [-1]
                                }
                            })];
                        case 1:
                            return 200 === (u = _.sent()).status && this.token.set(u.data.auth.token),
                            [2, u]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_access_token = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return [2, this.token.get_access(t)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.request_with_token = function(t) {
                return p(this, void 0, void 0, (function() {
                    var e;
                    return l(this, (function(n) {
                        return e = {
                            with_token: !0,
                            without_base_url: !0
                        },
                        [2, this.dispatch_request(Object.assign(t, e))]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.set_username = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return P(t),
                        [2, this.dispatch_request({
                            url: i.SET_USERNAME,
                            method: "patch",
                            data: {
                                username: t
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.init_password = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return S(t),
                        S(e),
                        x(t, e),
                        [2, this.dispatch_request({
                            url: i.INIT_PASSWORD,
                            method: "patch",
                            data: {
                                password: t,
                                confirm_password: e
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.change_pwd_by_old = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    var r;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return S(e),
                            S(n),
                            x(e, n),
                            [4, this.dispatch_request({
                                url: i.CHANGE_PWD_BY_OLD,
                                method: "patch",
                                data: {
                                    old_password: t,
                                    password: e,
                                    confirm_password: n
                                },
                                with_token: !0
                            })];
                        case 1:
                            return (r = o.sent()) && this.token.clear(),
                            [2, r]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.change_pwd_by_phone_captcha = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return k(t),
                        [2, this.dispatch_request({
                            url: i.CHNAGE_PWD_BY_PHONE_CAPTCHA,
                            method: "post",
                            data: {
                                phone_number: t,
                                pid: e
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.change_pwd_by_phone = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    var r;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return k(t),
                            y(e),
                            S(n),
                            [4, this.dispatch_request({
                                url: i.CHANGE_PWD_BY_PHONE,
                                method: "patch",
                                data: {
                                    phone_number: t,
                                    captcha: e,
                                    password: n
                                },
                                with_token: !0
                            })];
                        case 1:
                            return (r = o.sent()) && this.token.clear(),
                            [2, r]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.set_profile = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return t && (R(t, ["nickname", "avatar_url", "fullname", "birthday", "sex", "qq", "description", "grade"]),
                        K(t)),
                        [2, this.dispatch_request({
                            url: i.SET_PROFILE,
                            method: "patch",
                            data: h({}, t),
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.check_bind_for_third_party = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.CHECK_BIND_FOR_THIRD_PARTY,
                            method: "get",
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bind_wechat = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return [2, this.dispatch_request({
                            url: i.BIND_WECHAT,
                            method: "post",
                            data: {
                                code: t,
                                appid: e
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.unbind_wechat = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.UNBIND_WECHAT,
                            method: "patch",
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bind_qq = function(t, e, n) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return [2, this.dispatch_request({
                            url: i.BIND_QQ,
                            method: "post",
                            data: {
                                code: t,
                                agreement_ids: n
                            },
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.unbind_qq = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.UNBIND_QQ,
                            method: "patch",
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_profile = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.GET_PROFILE,
                            method: "get",
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_auth = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.GET_AUTH,
                            method: "get",
                            with_token: !0
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.login_account_ticket = function(t, e, n, r, o) {
                return p(this, void 0, void 0, (function() {
                    var c;
                    return l(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return [4, this.dispatch_request({
                                url: i.LOGIN_ACCOUNT_TICKET,
                                method: "post",
                                data: {
                                    identity: t,
                                    password: e,
                                    pid: n,
                                    agreement_ids: o || [-1]
                                },
                                headers: ot({
                                    "X-Captcha-Ticket": r
                                })
                            })];
                        case 1:
                            return 200 === (c = s.sent()).status && this.token.set(c.data.auth.token),
                            [2, c]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_grade_list = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, this.dispatch_request({
                            url: i.GET_GRADE_LIST,
                            method: "get"
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t
        }()
          , ct = Object.freeze({
            __proto__: null,
            init: function(t) {
                if (t.appid || (t.appid = ""),
                function(t) {
                    if (!t)
                        throw new Error("you should specify a config to init Iris auth module");
                    Object.keys(v).forEach((function(e) {
                        if ("platform" !== e) {
                            var n = t[e];
                            if (v[e].required && !n && "" !== n)
                                throw new f({
                                    error_code: r.INVALID_INIT_PARAMS,
                                    message: e + " is required,but got null or undefined"
                                });
                            var o = typeof t[e];
                            if (!v[e].types.includes(o))
                                throw new f({
                                    error_code: r.INVALID_INIT_PARAMS,
                                    message: e + " should be type of " + v[e].type.join(" or ") + ",but got " + o
                                })
                        }
                    }
                    ))
                }(t),
                E = t,
                ["pid", "appid", "product_code", "platform"].every((function(t) {
                    return Z(t, g())
                }
                )))
                    return tt = new it;
                throw new Error("Auth init fail.Check init params.")
            },
            get_auth_instance: function() {
                if (!tt)
                    throw new f({
                        message: "Iris SDK error: Please run init() correctly, before get_auth_instance()."
                    });
                return tt
            },
            CodemaoAuth: it
        })
          , st = function(t) {
            this.options = t
        }
          , at = {
            FINGER_PRINT_2: "https://static.codemao.cn/iris/fingerprint2.min.js",
            GEETEST: "https://static.codemao.cn/arch/gt.js",
            TENCENT: "https://turing.captcha.qcloud.com/TCaptcha.js",
            NEXTDATA: "https://static.codemao.cn/arch/smcp.min.js",
            NETEASE: "https://static.codemao.cn/arch/netease-load.min.js",
            ALIYUN: "https://g.alicdn.com/AWSC/AWSC/awsc.js"
        }
          , ut = function(t, e) {
            return {
                message: t,
                error: e
            }
        }
          , _t = {
            product: "bind",
            width: "300px"
        }
          , dt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.product_id = e.product_id || "",
                n.dom_id = e.dom_id,
                n.success_callback = e.success_callback,
                n.init_options = e.init_options,
                n.fail_callback = e.fail_callback,
                n.close_callback = e.close_callback,
                n
            }
            return d(e, t),
            e.prototype.get_init_params = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return [2, b.dispatch_request({
                            url: c.GET_GEETEST_PARAMS,
                            method: "post",
                            data: {
                                appid: this.product_id
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.init_geetest = function(t) {
                return p(this, void 0, void 0, (function() {
                    var e, n, r = this;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, W(3, (function() {
                                return p(r, void 0, void 0, (function() {
                                    return l(this, (function(t) {
                                        return [2, this.get_init_params()]
                                    }
                                    ))
                                }
                                ))
                            }
                            ))];
                        case 1:
                            return e = o.sent(),
                            n = e.data,
                            [2, new Promise((function(e) {
                                initGeetest(h({
                                    gt: n.gt,
                                    challenge: n.challenge,
                                    offline: !n.success,
                                    new_captcha: n.new_captcha
                                }, t), (function(t) {
                                    t.onReady((function() {
                                        e(t)
                                    }
                                    )).onSuccess((function() {
                                        return p(r, void 0, void 0, (function() {
                                            var t, e;
                                            return l(this, (function(n) {
                                                switch (n.label) {
                                                case 0:
                                                    return n.trys.push([0, 2, , 3]),
                                                    [4, this.get_ticket()];
                                                case 1:
                                                    return t = n.sent(),
                                                    this.success_callback(t.data.ticket, this.product_id),
                                                    [3, 3];
                                                case 2:
                                                    return e = n.sent(),
                                                    this.fail_callback && this.fail_callback(e),
                                                    [3, 3];
                                                case 3:
                                                    return [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).onError((function() {
                                        throw r.fail_callback && r.fail_callback(),
                                        new Error("Got error in Geetest captcha.")
                                    }
                                    )).onClose((function() {
                                        !r.captcha_obj.getValidate() && r.close_callback && r.close_callback()
                                    }
                                    ))
                                }
                                ))
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.init = function() {
                return p(this, void 0, void 0, (function() {
                    var t, e;
                    return l(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return t = this.init_options || _t,
                            [4, z(at.GEETEST, "geetest-captcha")];
                        case 1:
                            return n.sent(),
                            e = this,
                            [4, this.init_geetest(t)];
                        case 2:
                            return e.captcha_obj = n.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.show = function() {
                this.init_options && "bind" !== this.init_options.product ? this.captcha_obj.appendTo("#" + this.dom_id) : this.captcha_obj.verify()
            }
            ,
            e.prototype.get_ticket = function() {
                return p(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(e) {
                        return t = this.captcha_obj.getValidate(),
                        [2, b.dispatch_request({
                            url: c.CHECK_AND_GET_GEETEST_TICKET,
                            method: "post",
                            data: {
                                geetest_challenge: t.geetest_challenge,
                                geetest_validate: t.geetest_validate,
                                geetest_seccode: t.geetest_seccode,
                                appid: this.product_id
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            e.create = function(t, n) {
                var r = t.dom_id
                  , o = t.success_callback
                  , i = t.fail_callback
                  , c = t.close_callback
                  , s = t.product_id
                  , a = t.init_options;
                return new e({
                    product_id: s || n.appid,
                    dom_id: r,
                    success_callback: o,
                    fail_callback: i,
                    close_callback: c,
                    init_options: a
                })
            }
            ,
            e
        }(st)
          , ht = {
            product: "popup",
            width: 300
        }
          , pt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.instance = new Object,
                n.options = e,
                n.instance = new Object,
                n
            }
            return d(e, t),
            e.prototype.init = function() {
                return p(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return "undefined" !== typeof initSMCaptcha ? [3, 2] : [4, z(at.NEXTDATA, "SM_GT")];
                        case 1:
                            e.sent(),
                            e.label = 2;
                        case 2:
                            return t = this,
                            [4, this.init_smCaptcha()];
                        case 3:
                            return t.instance = e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.init_smCaptcha = function() {
                return p(this, void 0, void 0, (function() {
                    var t, e, n, r, o, i, c = this;
                    return l(this, (function(s) {
                        return t = this.options,
                        e = t.dom_id,
                        n = t.success_callback,
                        r = t.fail_callback,
                        o = t.close_callback,
                        i = t.init_options,
                        [2, new Promise((function(t, s) {
                            initSMCaptcha(h(h(h({
                                appendTo: e && "#" + e,
                                appid: c.options.product_id
                            }, ht), i), {
                                organization: "sXoTexBWs1dfyzt8eTev"
                            }), (function(e) {
                                if (!e)
                                    throw new Error("shumei captcha init failed message: can not get instance");
                                e.onReady((function() {
                                    t(e)
                                }
                                )),
                                e.onSuccess((function(t) {
                                    return p(c, void 0, void 0, (function() {
                                        var e, o;
                                        return l(this, (function(i) {
                                            switch (i.label) {
                                            case 0:
                                                if (!t.pass)
                                                    return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]),
                                                [4, this.get_ticket()];
                                            case 2:
                                                return e = i.sent(),
                                                null === n || void 0 === n || n(e.data.ticket, this.options.product_id || ""),
                                                [3, 4];
                                            case 3:
                                                return o = i.sent(),
                                                null === r || void 0 === r || r(ut("success_callback triggerd fatal error", o)),
                                                [3, 4];
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                null === r || void 0 === r || r(ut("incorrect captcha checking", t)),
                                                i.label = 6;
                                            case 6:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )),
                                e.onError((function(t, e) {
                                    var n = ut("some error occurred", {
                                        errType: t,
                                        errMsg: e
                                    });
                                    null === r || void 0 === r || r(n),
                                    s(n)
                                }
                                )),
                                e.onClose((function() {
                                    null === o || void 0 === o || o()
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.show = function() {
                var t = this.options.init_options;
                this.options && ["embed", "float"].includes((null === t || void 0 === t ? void 0 : t.product) || "") ? this.instance.appendTo("#" + this.options.dom_id) : this.instance.verify()
            }
            ,
            e.prototype.get_ticket = function(t) {
                return p(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(e) {
                        return t = this.instance.getValidate(),
                        [2, b.dispatch_request({
                            url: c.CHECK_AND_GET_NEXTDATA_TICKET,
                            method: "post",
                            data: {
                                rid: t.rid,
                                appid: this.options.product_id
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            e.create = function(t, n) {
                var r = t.dom_id
                  , o = t.success_callback
                  , i = t.fail_callback
                  , c = t.close_callback
                  , s = t.init_options;
                return new e({
                    product_id: t.product_id || n.appid,
                    dom_id: r,
                    success_callback: o,
                    fail_callback: i,
                    close_callback: c,
                    init_options: s
                })
            }
            ,
            e
        }(st)
          , lt = {}
          , Et = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.product_id = e.product_id || "",
                n.dom_id = e.dom_id,
                n.success_callback = e.success_callback,
                n.fail_callback = e.fail_callback,
                n.close_callback = e.close_callback,
                n.request = new O,
                n
            }
            return d(e, t),
            e.prototype.init = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return "undefined" !== typeof TencentCaptcha ? [3, 2] : [4, z(at.TENCENT, "TENCENT_GT")];
                        case 1:
                            t.sent(),
                            t.label = 2;
                        case 2:
                            return [4, this.initTencentCaptcha(this.dom_id)];
                        case 3:
                            return t.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.initTencentCaptcha = function(t) {
                return p(this, void 0, void 0, (function() {
                    var e, n = this;
                    return l(this, (function(r) {
                        return e = function(t) {
                            return p(n, void 0, void 0, (function() {
                                var e, n;
                                return l(this, (function(r) {
                                    switch (r.label) {
                                    case 0:
                                        if (null == t)
                                            return [2];
                                        if (0 !== t.ret)
                                            return [3, 5];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]),
                                        [4, this.get_ticket(t.ticket, t.randstr)];
                                    case 2:
                                        return e = r.sent(),
                                        this.success_callback(e.data.ticket, this.product_id),
                                        [3, 4];
                                    case 3:
                                        return n = r.sent(),
                                        this.fail_callback && this.fail_callback(n),
                                        [3, 4];
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        1 === t.ret ? this.fail_callback && this.fail_callback() : 2 === t.ret && this.close_callback && this.close_callback(),
                                        r.label = 6;
                                    case 6:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        this.captcha_obj = t ? new TencentCaptcha(document.getElementById(t),this.product_id,e,lt) : new TencentCaptcha(this.product_id,e,lt),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.show = function() {
                this.captcha_obj.show()
            }
            ,
            e.prototype.get_ticket = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return [2, b.dispatch_request({
                            url: c.CHECK_AND_GET_TENCENT_TICKET,
                            method: "post",
                            data: {
                                appid: this.product_id,
                                tencentTicket: t,
                                randomStr: e
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            e.create = function(t, n) {
                var r = t.dom_id
                  , o = t.success_callback
                  , i = t.fail_callback
                  , c = t.close_callback;
                return new e({
                    product_id: t.product_id || n.appid,
                    dom_id: r,
                    success_callback: o,
                    fail_callback: i,
                    close_callback: c
                })
            }
            ,
            e
        }(st)
          , ft = {
            mode: "popup",
            width: 300
        }
          , Tt = J("mask")
          , Nt = J("inner")
          , vt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.instance = new Object,
                n.options = e,
                n.instance = new Object;
                var r = n;
                return function() {
                    var t, e;
                    p(this, void 0, void 0, (function() {
                        var n;
                        return l(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return n = 0 - ((null === (e = null === (t = r.options) || void 0 === t ? void 0 : t.init_options) || void 0 === e ? void 0 : e.width) || ft.width) / 2,
                                r.options.dom_id || document.getElementById(Tt) ? [3, 2] : [4, $("div", {
                                    id: Tt,
                                    innerHTML: '<div style="position: absolute; width: 2px; height: 2px; left: 50%; top: 50%; transform: translate(-50%, -50%); margin: ' + n + "px 0 0 " + n + 'px" id="' + Nt + '"/>'
                                }, "position: fixed;\n          left: 0px;\n          top: 0px;\n          height: 100vh;\n          width: 100vw;\n          background: rgba(0, 0, 0, .5);\n          z-index: 999;")];
                            case 1:
                                o.sent(),
                                o.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }(),
                n
            }
            return d(e, t),
            e.prototype.init = function() {
                return p(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return "undefined" !== typeof initNECaptcha ? [3, 2] : [4, z(at.NETEASE, "NETEASE_GT")];
                        case 1:
                            e.sent(),
                            e.label = 2;
                        case 2:
                            return t = this,
                            [4, this.init_NECaptcha()];
                        case 3:
                            return t.instance = e.sent(),
                            this.show(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.init_NECaptcha = function() {
                return p(this, void 0, void 0, (function() {
                    var t, e, n, r, o, i, c = this;
                    return l(this, (function(s) {
                        return t = this.options,
                        e = t.dom_id,
                        n = t.success_callback,
                        r = t.fail_callback,
                        o = t.close_callback,
                        i = t.init_options,
                        [2, new Promise((function(t, s) {
                            initNECaptcha(h(h(h({
                                captchaId: c.options.product_id,
                                element: e ? "#" + e : "#" + Nt,
                                appendTo: e ? "#" + e : "#" + Nt
                            }, ft), i), {
                                onVerify: function(t, e) {
                                    return p(c, void 0, void 0, (function() {
                                        var o;
                                        return l(this, (function(i) {
                                            switch (i.label) {
                                            case 0:
                                                return t ? (null === r || void 0 === r || r(ut("incorrect captcha checking", t)),
                                                [3, 3]) : [3, 1];
                                            case 1:
                                                return [4, this.get_ticket(e.validate)];
                                            case 2:
                                                o = i.sent(),
                                                null === n || void 0 === n || n(o.data.ticket, this.options.product_id || ""),
                                                this.clearMask(),
                                                i.label = 3;
                                            case 3:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                },
                                onError: function(t) {
                                    null === r || void 0 === r || r(ut("fatal error occurred", t))
                                },
                                onClose: function() {
                                    null === o || void 0 === o || o(),
                                    c.clearMask()
                                }
                            }), (function(e) {
                                t(e)
                            }
                            ), (function(t) {
                                var e = ut("some error occurred", t);
                                null === r || void 0 === r || r(e),
                                s(e)
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.show = function() {
                this.instance.popUp()
            }
            ,
            e.prototype.clearMask = function() {
                var t = document.getElementById(Tt);
                t && setTimeout((function() {
                    document.body.removeChild(t)
                }
                ), 600)
            }
            ,
            e.prototype.get_ticket = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return [2, b.dispatch_request({
                            url: c.CHECK_AND_GET_NETEASE_TICKET,
                            method: "post",
                            data: {
                                validate: t,
                                appid: this.options.product_id
                            }
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            e.create = function(t, n) {
                var r = t.dom_id
                  , o = t.success_callback
                  , i = t.fail_callback
                  , c = t.close_callback
                  , s = t.init_options;
                return new e({
                    product_id: t.product_id || n.appid,
                    dom_id: r,
                    success_callback: o,
                    fail_callback: i,
                    close_callback: c,
                    init_options: s
                })
            }
            ,
            e
        }(st)
          , At = {
            appkey: "FFFF00000000017E8E25",
            scene: "nc_login_h5"
        }
          , mt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handleOnCancel = function() {
                    n.close_callback && n.close_callback(),
                    n.clearMask()
                }
                ,
                n.initNCCaptcha = function(t) {
                    AWSC.use("nc", (function(e, r) {
                        window.nc = r.init(h(h({}, t), {
                            renderTo: "aliyun_captcha_dom_id",
                            success: function(t) {
                                return p(n, void 0, void 0, (function() {
                                    var e;
                                    return l(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return [4, this.get_ticket(t)];
                                        case 1:
                                            return 200 === (e = n.sent()).status ? (null === this || void 0 === this || this.success_callback(e.data.ticket, e.data.appid),
                                            null === this || void 0 === this || this.clearMask()) : this.fail_callback && this.fail_callback(e),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            fail: function(t) {
                                throw n.fail_callback && n.fail_callback(t),
                                new Error("\u9a8c\u8bc1\u5931\u8d25")
                            },
                            error: function(t) {
                                throw n.fail_callback && n.fail_callback(t),
                                new Error("\u9a8c\u8bc1\u5f02\u5e38")
                            }
                        }))
                    }
                    ))
                }
                ,
                n.product_id = e.product_id || "",
                n.dom_id = e.dom_id,
                n.success_callback = e.success_callback,
                n.fail_callback = e.fail_callback,
                n.close_callback = e.close_callback,
                n.request = new O,
                n
            }
            return d(e, t),
            e.prototype.init = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return "undefined" !== typeof AWSC ? [3, 2] : [4, z(at.ALIYUN, "ALIYUN_GT")];
                        case 1:
                            t.sent(),
                            t.label = 2;
                        case 2:
                            return [4, this.initAliyunCaptcha()];
                        case 3:
                            return t.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.initAliyunCaptcha = function() {
                return p(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return document.getElementById("aliyun_captcha_dom_id") ? [3, 2] : [4, $("div", {
                                id: "aliyun_captcha_dom_wrapper_id",
                                innerHTML: '\n            <div\n              style="position: absolute; display: flex; flex-direction: column; padding-top: 20px; justify-content: flex-start; align-items: center; width: 400px; height: 130px; background-color: #fff; left: 50%; top: 50%; transform: translate(-50%, -50%);"\n            >\n              <div style="font-size: 20px">\u62d6\u52a8\u4e0b\u65b9\u6ed1\u5757\u5b8c\u6210\u9a8c\u8bc1</div>\n              <div\n                style="display: flex; justify-content: center; align-items: center; bottom: 20px"\n                id="aliyun_captcha_dom_id"\n              >\n              </div>\n              <div id="aliyun_captcha_dom_close_id" style="cursor: pointer; color: blue; position: absolute; top: 20px; right: 20px">\u5173\u95ed</div>\n            </div>\n          '
                            }, "position: fixed;\n        left: 0px;\n        top: 0px;\n        height: 100vh;\n        width: 100vw;\n        background: rgba(0, 0, 0, .5);\n        z-index: 999;")];
                        case 1:
                            e.sent(),
                            null === (t = document.getElementById("aliyun_captcha_dom_close_id")) || void 0 === t || t.addEventListener("click", this.handleOnCancel),
                            e.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.clearMask = function() {
                var t = document.getElementById("aliyun_captcha_dom_wrapper_id");
                t && setTimeout((function() {
                    document.body.removeChild(t)
                }
                ), 600)
            }
            ,
            e.prototype.show = function() {
                this.initNCCaptcha(At)
            }
            ,
            e.prototype.get_ticket = function(t) {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return [2, b.dispatch_request({
                            url: c.CHECK_AND_GET_ALIYUN_TICKET,
                            method: "post",
                            data: h({
                                appKey: At.appkey,
                                scene: At.scene
                            }, t)
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            e.create = function(t, n) {
                var r = t.dom_id
                  , o = t.success_callback
                  , i = t.fail_callback
                  , c = t.close_callback;
                return new e({
                    product_id: t.product_id || n.appid,
                    dom_id: r,
                    success_callback: o,
                    fail_callback: i,
                    close_callback: c
                })
            }
            ,
            e
        }(st)
          , It = function() {
            function t(t) {
                this.pid = t.pid
            }
            return t.prototype.get_rule_from_server = function(t, e) {
                return void 0 === e && (e = ""),
                p(this, void 0, void 0, (function() {
                    var n, r;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, z(at.FINGER_PRINT_2, "finger-print", 10)];
                        case 1:
                            return o.sent(),
                            [4, p(void 0, void 0, void 0, (function() {
                                return l(this, (function(t) {
                                    return [2, new Promise((function(t) {
                                        var e = function() {
                                            "undefined" !== typeof Fingerprint2 ? Fingerprint2.get((function(e) {
                                                var n = e.map((function(t) {
                                                    return t.value
                                                }
                                                ));
                                                t(Fingerprint2.x64hash128(n.join(""), 31))
                                            }
                                            )) : t("")
                                        };
                                        window.requestIdleCallback ? window.requestIdleCallback(e) : setTimeout(e, 500)
                                    }
                                    ))]
                                }
                                ))
                            }
                            ))];
                        case 2:
                            return n = o.sent(),
                            r = "" + (new Date).getTime() / 1e3,
                            [4, b.dispatch_request({
                                url: c.GET_RULE,
                                method: "post",
                                data: {
                                    identity: t,
                                    scene: e,
                                    pid: m().pid || this.pid,
                                    deviceId: n,
                                    timestamp: parseInt(r, 10)
                                }
                            })];
                        case 3:
                            return [2, o.sent().data]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.get_captcha = function(t) {
                var e;
                return p(this, void 0, void 0, (function() {
                    var n, r, o, i, c, s, a, u, _;
                    return l(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            return n = t.identity,
                            r = t.scene,
                            o = void 0 === r ? "" : r,
                            i = t.success_callback,
                            c = t.fail_callback,
                            [4, this.get_rule_from_server(n, o)];
                        case 1:
                            if (s = d.sent()) {
                                if (a = s.rule,
                                u = s.appid,
                                _ = s.ticket,
                                !Object.keys(at).includes(a))
                                    return [2, new Ct(_,i,c)];
                                if (u)
                                    return [2, null === (e = gt(a)) || void 0 === e ? void 0 : e.create(t, {
                                        appid: u
                                    })]
                            }
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t
        }()
          , Ct = function() {
            function t(t, e, n) {
                this.ticket = t,
                this.success_callback = e,
                this.fail_callback = n
            }
            return t.prototype.init = function() {
                return p(this, void 0, void 0, (function() {
                    return l(this, (function(t) {
                        return console.log("DisableCaptcha init"),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.show = function() {
                this.ticket ? this.success_callback(this.ticket, "") : this.fail_callback && this.fail_callback()
            }
            ,
            t
        }()
          , gt = function(t) {
            switch (t) {
            case "GEETEST":
                return dt;
            case "TENCENT":
                return Et;
            case "NETEASE":
                return vt;
            case "NEXTDATA":
                return pt;
            case "ALIYUN":
                return mt;
            case "DEFAULT":
                return Ct
            }
        }
          , Ot = Object.freeze({
            __proto__: null,
            GeetestCaptcha: dt,
            SMCaptcha: pt,
            CmTencentCaptcha: Et,
            NeteaseCaptcha: vt,
            CodemaoCaptcha: It,
            DisableCaptcha: Ct
        });
        function bt(t) {
            var e = t.env
              , n = t.domain
              , r = (t.auth_version,
            t.pid,
            t.client_id,
            t.requestTimeout,
            t.host);
            e && (o[e] ? (function(t) {
                I = t
            }(o[e]),
            r && (C().host = r)) : console.warn('Unknown env "' + e + '", config has been set to default value.'));
            void 0 !== n && (C().domain = n);
            A = t
        }
    }
}]);
//# sourceMappingURL=20.7f439965.chunk.js.map
