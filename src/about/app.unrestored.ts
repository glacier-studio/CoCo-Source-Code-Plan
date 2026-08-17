/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64__part-3
 */

"use strict"

import { r, b } from "./language"
import { IntlProvider } from /* 73 */"react-intl"
import /* [auto-meaningful-name] */ReactDom from /* 48 */"react-dom"
import { useIntl } from /* 71 */"react-intl"
import * as /* [auto-meaningful-name] */Classnames from /* 30 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 30 */"classnames"
import * as /* [auto-meaningful-name] */Style_styles_module_css from /* 4 */"./style/styles.module.css"
import /* [auto-meaningful-name] */Style_styles_module_css1 from /* 4 */"./style/styles.module.css"
import * as /* [auto-meaningful-name] */React_jsxRuntime from /* 2 */"react/jsx-runtime"
var x = [
  {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble1.png",
    position: "产品",
    member: "颢哥、coco鸭、momo、一凡、ss、prince、Joe、文伟、宝中健身狂"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble2.png",
    position: "开发",
    member: "锋哥、小李子、于勤Web、宇婷、最美的小鸟、乐天派GUM、gbao、ph、澄哥、cai_32、KK、格乌夜"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble3.png",
    position: "设计",
    member: "二十八度晴天、大田、桂芬、小白、楠哥、忠实干饭人、台风支柱、玲玲子"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble4.png",
    position: "测试",
    member: "乐乐鸭、神秘人、QQ、冰西瓜、老白"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble5.png",
    position: "运营",
    member: "雷电猴、活动猫、星能猫、蜘蛛侠"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble6.png",
    position: "特别鸣谢",
    member: "epeiuss、海藻酸钠、方橙"
  }
]
var h = [
  {
    time: "2021年春节后",
    desc: "第一次社区内测"
  }, {
    time: "2021年7月中旬",
    desc: "社区正式上线公测"
  }
]
var f = [
  {
    time: "2020年",
    desc: "项目启动"
  }, {
    time: "2021年6月",
    desc: "第二次社区内测"
  }, {
    time: "2021年7月29日",
    desc: "工具发布会上闪亮登场"
  }
]
var y = function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React_jsxRuntime.jsxs("div", {
    className: Style_styles_module_css1.pageWrapper,
    children: [
      React_jsxRuntime.jsxs("div", {
        className: Classnames1(Style_styles_module_css1.flexTC, Style_styles_module_css1.bannerBox),
        children: [
          React_jsxRuntime.jsx("img", {
            className: Style_styles_module_css1.bannerLeftBg,
            src: "https://static.codemao.cn/coco/image/about_page_left_banner.png",
            alt: ""
          }), React_jsxRuntime.jsx("img", {
            className: Style_styles_module_css1.bannerRightBg,
            src: "https://static.codemao.cn/coco/image/about_page_right_banner.png",
            alt: ""
          }), React_jsxRuntime.jsx("div", {
            className: Style_styles_module_css1.left
          }), React_jsxRuntime.jsxs("div", {
            className: Style_styles_module_css1.bannerContent,
            children: [
              React_jsxRuntime.jsx("div", {
                className: Style_styles_module_css1.bannerLogoBox,
                children: React_jsxRuntime.jsx("img", {
                  className: Style_styles_module_css1.bannerLogoImg,
                  src: "https://static.codemao.cn/coco/image/about_page_logo_new.png",
                  alt: "logo"
                })
              }), React_jsxRuntime.jsxs("div", {
                className: Style_styles_module_css1.bannerText,
                children: [
                  React_jsxRuntime.jsx("img", {
                    className: Style_styles_module_css1.quotesLeft,
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAuCAMAAABOIvqXAAAArlBMVEUAAAD06P/46//37P/26f/26f/27P/16f/////57f/26//37P/26//16v/27P/26f/26v/16v/26//37P/27f/////16v/26//16f/26v//8P//7P/16P/27f/37P/16v/16v/05//26//16P/16f/27P/37f/37f/57f/16P/37f/16v/36//16//17f/16v/37v/37P/27f/37P/57v/77f/z5f/06P/16v/27P8iISitAAAANnRSTlMA0CRdmcno0wIm6GH85pH33da1OxsH7rCogRQN/N/Yy8K6op6NcFcyKvTqvXhqTUxB/MGFWUeMaG9zAAABi0lEQVRIx+3Ux3qCQBSGYYNRqnRF7F0Ta5oM939jEQfjfziYjdnFs3Dh+3w4wgyVvx5taXZ+c2WxKvs6sNf9tzTd36j02B84afrBfm03McR50nn5ZQdCzqQQblpCiCQbIWweLvpXfifyNZAgMSqGqxGyC9KNLnI8Zp9DGmq2Rdi5UugJCdlkaJCy6QNnLsIL6X0BkpnVxCXVipwcclrWpWAKT67jiSILM1+OWyiddhW3hF8oe+OtktMzlZeYbiWTlr2p/kMHi5RjpUImbJFSDeDuuaScaRU6Pin9LpBJaMM2rUBua2gjpDGAHBvZ7SIpFpATshNhYLonNkOa8j2P/ETNBUsClkbIc0JNXG9LY6kHnOiEggRsxEqth1emtiW3nqVLZI+aTbZgo9EwjPppXhXJVUydK3+ebAIkT7F8N+V/a36DzZNFzCTnaQyMnqVrMNBLOivnc1oDAxZKfh6Bsa6SlCKkbDDliCmfR/pI/306vCcF5Od1WsoybatPfFTVC2Uaq2oZq7vKPfMNyVRLK/yK2/QAAAAASUVORK5CYII=",
                    alt: ""
                  }), React_jsxRuntime.jsx("img", {
                    className: Style_styles_module_css1.quotesRight,
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAuCAMAAABOIvqXAAAAwFBMVEUAAAD06P/16v/16//36v/16v/27P/26//27P/06P/16f/37P/26//27P/26//27P/26f/17f/56//////16v/26//16//06P/05v/27P/16v/36//26v/16v//7//////16P/27P/16f/37P/26//16//26//57//37P/26v/26//16v/16f/27P/37P/26//47f/67f/47v//8v/26//06P/37P/15///8///7f/y5P/z5//y5f/06f/16v/27P8NqjbUAAAAOnRSTlMAz3KIO7np5vvm0r1zGvOMU00sBu7a1NHQkIWAODIKAvzLyq2pmmI9H/fPxLSwpWZZRCQSuXhdSRUO+NM0zgAAAclJREFUSMft02lT6jAYhuHA8UCBtkBZPLLKjvt2XNOk//9fmaSJPG8j6ox+9PkG19yhUybsO2vf3H3Em/Z2r/WyrDu7XD/v4UWWxf2LMHrPYmkWnL3PM8ung6RId1IKM8X/b/20al3lpxtKB0ZsfdKcFMppABwsI7S1EDyf0WqbprcSXcYh2NBQmjoNruj7z8s3lkc7u9SWmuUqh5iWPV5OnTWsOaUHs6bPjY616WbQ0/aiplXjNbRJOOccmR7dLmnUy7HyxHCjc2DlwQhwGsakvWB0rVqq3XGvgziukfa60EYljm2T4Ja0M1bY5IwDxxOCj9y22sS42G672F5RXGK7YsXdI8+pJXx3ruh2vEfGn5UJxTme22LFrZAH1AZoQy9t4VOd7ze+8NJIszu6R22E1mfejoGP9btYVNSqarUaT3d24i5lRc8wpubfa2RSTeTXFsy+4iPHAjjl4kanGqB0Ftlbt2OStkxqvjeCaeJSyu6p1jp1J2qC1N6sP8iQlpX91WQB7cClyH4K4KXIfkrJT4Fpyj9L09/0N/1qKn40TUnKfcab45GA1Ge8r3QcUmBwESpb9euHpX8lmPp0WK+P87S8hx/YN/YK6QFo0NXHJ6QAAAAASUVORK5CYII=",
                    alt: ""
                  }), React_jsxRuntime.jsx("p", {
                    children: useIntl$formatMessage({
                      id: "about.remarks1"
                    })
                  }), React_jsxRuntime.jsx("p", {
                    children: useIntl$formatMessage({
                      id: "about.remarks2"
                    })
                  })
                ]
              }), React_jsxRuntime.jsx("div", {
                className: Style_styles_module_css1.bannerTexSpeech,
                children: "—— prince"
              })
            ]
          }), React_jsxRuntime.jsx("div", {
            className: Style_styles_module_css1.right
          })
        ]
      }), React_jsxRuntime.jsxs("div", {
        className: Classnames1(Style_styles_module_css1.flexTC, Style_styles_module_css1.courseAndFamilyBox),
        children: [
          React_jsxRuntime.jsx("div", {
            className: Style_styles_module_css1.left
          }), React_jsxRuntime.jsxs("div", {
            className: Style_styles_module_css1.courseAndFamilyContent,
            children: [
              React_jsxRuntime.jsx("h3", {
                className: Style_styles_module_css1.courseTitle,
                children: useIntl$formatMessage({
                  id: "about.toolCourse"
                })
              }), React_jsxRuntime.jsxs("div", {
                className: Style_styles_module_css1.courseList,
                children: [
                  React_jsxRuntime.jsx("div", {
                    className: Style_styles_module_css1.courseUpList,
                    children: h.map(function (e) {
                      return React_jsxRuntime.jsxs("div", {
                        className: Classnames1(Style_styles_module_css1.courseItem, Style_styles_module_css1.courseUpItem),
                        children: [
                          React_jsxRuntime.jsx("img", {
                            className: Style_styles_module_css1.courseUpImg,
                            src: "https://static.codemao.cn/coco/image/about_page_timeline_up.png",
                            alt: ""
                          }), React_jsxRuntime.jsxs("div", {
                            className: Style_styles_module_css1.courseText,
                            children: [
                              React_jsxRuntime.jsx("p", {
                                className: Style_styles_module_css1.courseItemTitle,
                                children: e.time
                              }), React_jsxRuntime.jsx("p", {
                                className: Style_styles_module_css1.courseItemDesc,
                                children: e.desc
                              })
                            ]
                          })
                        ]
                      })
                    })
                  }), React_jsxRuntime.jsx("div", {
                    className: Style_styles_module_css1.courseTimeline,
                    children: React_jsxRuntime.jsx("img", {
                      className: Style_styles_module_css1.courseTimelineImg,
                      src: "https://static.codemao.cn/coco/image/about_page_timeline.png",
                      alt: ""
                    })
                  }), React_jsxRuntime.jsx("div", {
                    className: Style_styles_module_css1.courseDownList,
                    children: f.map(function (e) {
                      return React_jsxRuntime.jsxs("div", {
                        className: Classnames1(Style_styles_module_css1.courseItem, Style_styles_module_css1.courseDownItem),
                        children: [
                          React_jsxRuntime.jsx("img", {
                            className: Style_styles_module_css1.courseDownImg,
                            src: "https://static.codemao.cn/coco/image/about_page_timeline_down.png",
                            alt: ""
                          }), React_jsxRuntime.jsxs("div", {
                            className: Style_styles_module_css1.courseText,
                            children: [
                              React_jsxRuntime.jsx("p", {
                                className: Style_styles_module_css1.courseItemTitle,
                                children: e.time
                              }), React_jsxRuntime.jsx("p", {
                                className: Style_styles_module_css1.courseItemDesc,
                                children: e.desc
                              })
                            ]
                          })
                        ]
                      })
                    })
                  })
                ]
              }), React_jsxRuntime.jsx("h3", {
                className: Style_styles_module_css1.familyTitle,
                children: useIntl$formatMessage({
                  id: "about.familyPhoto"
                })
              }), React_jsxRuntime.jsxs("div", {
                className: Style_styles_module_css1.familyBox,
                children: [
                  React_jsxRuntime.jsx("div", {
                    className: Style_styles_module_css1.familyImgBox,
                    children: React_jsxRuntime.jsx("img", {
                      className: Style_styles_module_css1.familyPhotoImg,
                      src: "https://static.codemao.cn/coco/image/about_page_family.png",
                      alt: "family"
                    })
                  }), React_jsxRuntime.jsx("div", {
                    className: Style_styles_module_css1.familyIconBox,
                    children: React_jsxRuntime.jsx("img", {
                      className: Style_styles_module_css1.familyLikeImg,
                      src: "https://static.codemao.cn/coco/image/about_page_like.png",
                      alt: "like"
                    })
                  })
                ]
              })
            ]
          }), React_jsxRuntime.jsx("div", {
            className: Style_styles_module_css1.right
          })
        ]
      }), React_jsxRuntime.jsxs("div", {
        className: Classnames1(Style_styles_module_css1.flexTC, Style_styles_module_css1.TeamBox),
        children: [
          React_jsxRuntime.jsx("div", {
            className: Style_styles_module_css1.left
          }), React_jsxRuntime.jsxs("div", {
            className: Style_styles_module_css1.teamContent,
            children: [
              React_jsxRuntime.jsx("div", {
                className: Style_styles_module_css1.thanksText,
                children: "— Thanks —"
              }), x.map(function (e) {
                return React_jsxRuntime.jsxs("div", {
                  className: Style_styles_module_css1.teamItem,
                  children: [
                    React_jsxRuntime.jsx("img", {
                      className: Style_styles_module_css1.teamIcon,
                      src: e.icon,
                      alt: ""
                    }), React_jsxRuntime.jsxs("div", {
                      className: Style_styles_module_css1.itemDetail,
                      children: [
                        React_jsxRuntime.jsx("p", {
                          className: Style_styles_module_css1.itemPosition,
                          children: e.position
                        }), React_jsxRuntime.jsx("p", {
                          className: Style_styles_module_css1.itemMember,
                          children: e.member
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }), React_jsxRuntime.jsx("div", {
            className: Style_styles_module_css1.right
          })
        ]
      })
    ]
  })
}
ReactDom.render(React_jsxRuntime.jsx(IntlProvider, {
  locale: r,
  messages: b["zh-CN"],
  children: React_jsxRuntime.jsx(y, {})
}), document.getElementById("root"))
