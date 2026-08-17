/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2619
 */

"use strict"

var r = require(/* 1 */"regenerator-runtime")
var o = this && this.__awaiter || function (e, t, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        i(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        i(t)
      }
    }
    function c(e) {
      if (e.done) {
        o(e.value)
      } else {
        (function (e) {
          return e instanceof n ? e : new n(function (t) {
            t(e)
          })
        })(e.value).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createWxJsIframeApi = d
exports.createWxJsParentApi = function (e, t) {
  return (0, a.createIframeApi)(u, e, t)
}
exports.autoCreateWxJsIframeApi = function (e, t) {
  var n = this
  return d({
    captureImage: function () {
      return o(n, undefined, undefined, r.mark(function t() {
        var n = this
        return r.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return t.abrupt("return", new Promise(function (t) {
                  e.chooseImage({
                    count: 1,
                    sizeType: ["compressed"],
                    sourceType: ["camera"],
                    success: function (i) {
                      return o(n, undefined, undefined, r.mark(function n() {
                        var o
                        return r.wrap(function (n) {
                          for (;;) {
                            switch (n.prev = n.next) {
                              case 0:
                                if (!(o = i.localIds[0])) {
                                  n.next = 4
                                  break
                                }
                                e.getLocalImgData({
                                  localId: o,
                                  success: function (e) {
                                    var /* [auto-meaningful-name] */e$localData = e.localData
                                    t({
                                      status: s.Status.Success,
                                      body: {
                                        dataURL: e$localData.startsWith("data:image") ? e$localData : "data:image/jpeg;base64,".concat(e$localData)
                                      }
                                    })
                                  },
                                  fail: function () {
                                    t({
                                      status: s.Status.Failed,
                                      body: {
                                        message: "[JsSdkApi:getLocalImgData:Fail]获取本地图片失败"
                                      }
                                    })
                                  }
                                })
                                return n.abrupt("return")
                              case 4:
                                t({
                                  status: s.Status.Failed,
                                  body: {
                                    message: "[JsSdkApi:getLocalImgData:Fail]localId no value"
                                  }
                                })
                              case 5:
                              case "end":
                                return n.stop()
                            }
                          }
                        }, n)
                      }))
                    },
                    cancel: function () {
                      t({
                        status: s.Status.Canceled,
                        body: {
                          message: "[JsSdkApi:chooseImage:Cancel]取消拍照"
                        }
                      })
                    },
                    fail: function () {
                      t({
                        status: s.Status.Failed,
                        body: {
                          message: "[JsSdkApi:chooseImage:Fail]拍照失败"
                        }
                      })
                    }
                  })
                }))
              case 1:
              case "end":
                return t.stop()
            }
          }
        }, t)
      }))
    },
    startRecord: function () {
      return new Promise(function (t) {
        e.startRecord({
          success: function () {
            t({
              status: s.Status.Success
            })
          },
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:startRecord:Fail]录音失败"
              }
            })
          }
        })
      })
    },
    stopRecord: function () {
      return new Promise(function (t) {
        e.stopRecord({
          success: function (e) {
            t({
              status: s.Status.Success,
              body: {
                localId: e.localId
              }
            })
          },
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:StopRecord:Fail]获取录音资源失败"
              }
            })
          }
        })
      })
    },
    startRecordLimitedOneMin: function () {
      return new Promise(function (t) {
        e.startRecord({
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:startRecord:Fail]录音失败"
              }
            })
          }
        })
        e.onVoiceRecordEnd({
          complete: function (e) {
            t({
              status: s.Status.Success,
              body: {
                localId: e.localId
              }
            })
          },
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:onVoiceRecordEnd:Fail]获取录音资源失败"
              }
            })
          }
        })
      })
    },
    playVoice: function (t) {
      var /* [auto-meaningful-name] */t$localId = t.localId
      return new Promise(function (t) {
        e.playVoice({
          localId: t$localId,
          success: function () {
            e.onVoicePlayEnd({
              success: function (e) {
                if (e.localId === t$localId) {
                  t({
                    status: s.Status.Success,
                    body: {
                      isComplete: true
                    }
                  })
                }
              },
              fail: function () {
                t({
                  status: s.Status.Failed,
                  body: {
                    message: "[JsSdkApi:onVoicePlayEnd:Fail]播放录音失败"
                  }
                })
              }
            })
          },
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:playVoice:Fail]播放录音失败"
              }
            })
          }
        })
      })
    },
    pauseVoice: function (t) {
      var /* [auto-meaningful-name] */t$localId = t.localId
      e.pauseVoice({
        localId: t$localId
      })
    },
    stopVoice: function (t) {
      var /* [auto-meaningful-name] */t$localId = t.localId
      e.stopVoice({
        localId: t$localId
      })
    },
    uploadVoice: function (i) {
      var /* [auto-meaningful-name] */i$localId = i.localId
      var /* [auto-meaningful-name] */i$isShowProgressTips = i.isShowProgressTips
      var u = undefined === i$isShowProgressTips ? 1 : i$isShowProgressTips
      return new Promise(function (i) {
        e.uploadVoice({
          localId: i$localId,
          isShowProgressTips: u,
          success: function (e) {
            return o(n, undefined, undefined, r.mark(function n() {
              var o
              var /* [auto-meaningful-name] */n$sent
              var l
              var /* [auto-meaningful-name] */n$sent1
              return r.wrap(function (n) {
                for (;;) {
                  switch (n.prev = n.next) {
                    case 0:
                      n.prev = 0
                      n.next = 3
                      return null === (o = null === t || undefined === t ? undefined : t.getTemporaryMaterials) || undefined === o ? undefined : o.call(t, {
                        mediaId: e.serverId
                      })
                    case 3:
                      if (!((null === (n$sent = n.sent) || undefined === n$sent ? undefined : n$sent.data) instanceof Blob)) {
                        n.next = 20
                        break
                      }
                      if (!n$sent.data.type.startsWith("audio/")) {
                        n.next = 8
                        break
                      }
                      i({
                        status: s.Status.Success,
                        body: {
                          serverId: e.serverId,
                          blob: n$sent.data
                        }
                      })
                      return n.abrupt("return")
                    case 8:
                      n.prev = 8
                      n.next = 11
                      return (0, c.blobToJson)(n$sent.data)
                    case 11:
                      n$sent1 = n.sent
                      l = null === n$sent1 || undefined === n$sent1 ? undefined : n$sent1.errmsg
                      n.next = 18
                      break
                    case 15:
                      n.prev = 15
                      n.t0 = n.catch(8)
                      l = n.t0.message
                    case 18:
                      n.next = 21
                      break
                    case 20:
                      l = "返回数据类型错误"
                    case 21:
                      i({
                        status: s.Status.Failed,
                        body: {
                          message: "[JsSdkApi:uploadVoice:Fail]获取临时素材失败".concat(l ? ", ".concat(l) : ""),
                          content: "serverId::".concat(e.serverId)
                        }
                      })
                      n.next = 27
                      break
                    case 24:
                      n.prev = 24
                      n.t1 = n.catch(0)
                      i({
                        status: s.Status.Failed,
                        body: {
                          message: "[JsSdkApi:uploadVoice:Fail]获取临时素材失败",
                          content: "serverId::".concat(e.serverId)
                        }
                      })
                    case 27:
                    case "end":
                      return n.stop()
                  }
                }
              }, n, null, [[0, 24], [8, 15]])
            }))
          },
          fail: function () {
            i({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:uploadVoice:Fail]上传录音失败"
              }
            })
          }
        })
      })
    },
    downloadVoice: function (t) {
      var /* [auto-meaningful-name] */t$serverId = t.serverId
      var /* [auto-meaningful-name] */t$isShowProgressTips = t.isShowProgressTips
      var o = undefined === t$isShowProgressTips ? 1 : t$isShowProgressTips
      return new Promise(function (t) {
        e.downloadVoice({
          serverId: t$serverId,
          isShowProgressTips: o,
          success: function (e) {
            t({
              status: s.Status.Success,
              body: {
                localId: e.localId
              }
            })
          },
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:downloadVoice:Fail]下载录音失败"
              }
            })
          }
        })
      })
    },
    checkJsApi: function (t) {
      var /* [auto-meaningful-name] */t$jsApiList = t.jsApiList
      return new Promise(function (t) {
        e.checkJsApi({
          jsApiList: t$jsApiList,
          success: function (e) {
            t({
              status: s.Status.Success,
              body: {
                checkResult: e.checkResult
              }
            })
          },
          fail: function () {
            t({
              status: s.Status.Failed,
              body: {
                message: "[JsSdkApi:checkJsApi:Fail]获取接口权限失败"
              }
            })
          }
        })
      })
    }
  }, t)
}
var i = require(/* 772 */"./772")
var a = require(/* 773 */"./773/index")
var s = require(/* 1185 */"./1185")
var c = require(/* 885 */"./2620/885")
var l = new i.ApiSpec("wxjs", {})
var u = new i.ApiSpec(l.namespace, {
  captureImage: new i.MethodType(),
  startRecord: new i.MethodType(),
  stopRecord: new i.MethodType(),
  startRecordLimitedOneMin: new i.MethodType(),
  playVoice: new i.MethodType(),
  pauseVoice: new i.MethodType(),
  stopVoice: new i.MethodType(),
  uploadVoice: new i.MethodType(),
  downloadVoice: new i.MethodType(),
  checkJsApi: new i.MethodType()
})
function d(e, t) {
  return (0, a.createIframeApi)(l, e, t)
}
