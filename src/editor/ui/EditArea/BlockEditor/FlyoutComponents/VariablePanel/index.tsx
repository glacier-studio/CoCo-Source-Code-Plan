import { Sg } from "../../../../../../../unrestored/shared/1571/2636/index__part-79"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../../../../../../../unrestored/shared/1571/2636/64"
import { Blink } from "../../../../../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../../../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../../unrestored/shared/1571/2636/18"
import * as CommonActions from "../../../../../redux/common/actions"
import { showCreateDynamicDataDialogAction } from "../../../../../redux/common/actions"
import * as Components from /* 13 */"../../../../../../shared/ui/components/index"
import { IconFont, Input } from "../../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../../../unrestored/shared/1571/2636/25/index"
import classNames from /* 8 */"classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Shared_ui_language from /* 23 */"../../../../../../shared/ui/language"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import styles from /* 236 */"./styles.module.css"

interface VariablePanelProps {
  variableType: /* TODO */ string
  labelType: /* TODO */ string
}

export const VariablePanel = memo((props: VariablePanelProps) => {

  const{ variableType } = props
  const { formatMessage } = useIntl()
  const [hasVariable, setHasVariable] = useState(true)
  const [l, u] = useState("")
  const [m, g] = useState("")
  const [y, E] = useState("")
  const [isFold, setIsFold] = useState(false)
  const [currentScreenPrimitiveVariables, setCurrentScreenPrimitiveVariables] = useState([])
  const [currentScreenArrayVariables, setCurrentScreenArrayVariables] = useState([])
  const [currentScreenObjectVariables, setCurrentScreenObjectVariables] = useState([])
  const dispatch = useDispatch()
  const currentScreen = Module_238.d()
  const language = useSelector((state) => state.common.language)
  const globalVariableList = useSelector((state) => state.project.globalVariableList)
  const globalArrayList = useSelector((state) => state.project.globalArrayList)
  const globalObjectList = useSelector((state) => state.project.globalObjectList)
  const screens = useSelector((state) => state.project.screens)

  useEffect(() => {
    if (currentScreen) {
      setCurrentScreenPrimitiveVariables(currentScreen.primitiveVariables)
      setCurrentScreenArrayVariables(currentScreen.arrayVariables)
      setCurrentScreenObjectVariables(currentScreen.objectVariables)
      if (
        (
          variableType === Module_18.b.PRIMITIVE &&
          currentScreen.primitiveVariables.length === 0 &&
          globalVariableList.length === 0
        ) || (
          variableType === Module_18.b.ARRAY &&
          currentScreen.arrayVariables.length === 0 &&
          globalArrayList.length === 0
        ) || (
          variableType === Module_18.b.OBJECT &&
          currentScreen.objectVariables.length === 0 &&
          globalObjectList.length === 0
        )
      ) {
        setHasVariable(false)
      } else {
        setHasVariable(true)
      }
    }
  }, [currentScreen, variableType, globalVariableList, globalArrayList, globalObjectList])

  useEffect(() => {
    const toolbox = Blink.mainWorkspace && Module_26.g.getToolbox()
    if (toolbox) {
      const selectedName = toolbox.get_selected()?.get_name()
      if (
        selectedName === "toolbox-primitive" ||
        selectedName === "toolbox-array" ||
        selectedName === "toolbox-object"
      ) {
        Module_26.g.getToolbox()?.refresh_selection()
      }
    }
  }, [hasVariable, currentScreenArrayVariables, currentScreenPrimitiveVariables, currentScreenObjectVariables, isFold, y, globalVariableList, globalArrayList, globalObjectList, l])

  function addVariable() {
    if (currentScreen) {
      if (variableType === Module_18.b.PRIMITIVE) {
        var e = Module_64.a("VARIABLE")
        dispatch(showCreateDynamicDataDialogAction({
          title: "addPrimitiveVariableName",
          placeholder: formatMessage({ id: "addPrimitiveVariableNamePlaceholder" }),
          onConfirm(t, n) {
            dispatch(CommonActions.uf(n, e, t, 0, currentScreen.id, 0))
          },
          validators: [
            {
              validator(e, t) {
                var n = currentScreen.primitiveVariables.concat(globalVariableList)
                if (t === Module_18.i.GLOBAL) {
                  screens.forEach(function (e) {
                    n = n.concat(e.primitiveVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: formatMessage({ id: "primitiveVariableNameRepeat" })
            },
            ...Sg(formatMessage)
          ]
        }))
      } else if (variableType === Module_18.b.ARRAY) {
        var r = Module_64.a("ARRAY")
        dispatch(showCreateDynamicDataDialogAction({
          title: "addArrayVariableName",
          placeholder: formatMessage({ id: "addArrayVariableNamePlaceholder" }),
          onConfirm(e, t) {
            dispatch(CommonActions.of(t, r, e, [], currentScreen.id, 0))
          },
          validators: [
            {
              validator(e, t) {
                var n = currentScreen.arrayVariables.concat(globalArrayList)
                if (t === Module_18.i.GLOBAL) {
                  screens.forEach(function (e) {
                    n = n.concat(e.arrayVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: formatMessage({ id: "arrayVariableNameRepeat" })
            },
            ...Sg(formatMessage)
          ]
        }))
      } else if (variableType === Module_18.b.OBJECT) {
        var o = Module_64.a("OBJECT")
        dispatch(showCreateDynamicDataDialogAction({
          title: "object.createNewObject",
          placeholder: formatMessage({ id: "object.createNewObjectNamePlaceholder" }),
          onConfirm(e, t) {
            dispatch(CommonActions.tf({
              scopeType: t,
              id: o,
              name: e,
              defaultValue: {},
              screenId: currentScreen.id,
              index: 0
            }))
          },
          validators: [
            {
              validator(e, t) {
                var n = currentScreen.objectVariables.concat(globalObjectList)
                if (t === Module_18.i.GLOBAL) {
                  screens.forEach(function (e) {
                    n = n.concat(e.objectVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: formatMessage({ id: "object.nameRepeat" })
            },
            ...Sg(formatMessage)
          ]
        }))
      }
    }
  }

  var ne = function (e, n) {
    var r
    var o
    if (variableType === Module_18.b.PRIMITIVE) {
      u(l !== e ? e : "")
    }
    if (variableType === Module_18.b.ARRAY && (currentScreen || globalArrayList.length > 0)) {
      if (r = n === Module_18.i.GLOBAL ? globalArrayList.find(function (t) {
        return t.id === e
      }) : currentScreenArrayVariables.find(function (t) {
        return t.id === e
      })) {
        dispatch(CommonActions.qj({
          array: r,
          arrayType: n
        }))
      }
    }
    if (variableType === Module_18.b.OBJECT) {
      if (o = n === Module_18.i.GLOBAL ? globalObjectList.find(function (t) {
        return t.id === e
      }) : currentScreenObjectVariables.find(function (t) {
        return t.id === e
      })) {
        dispatch(CommonActions.rj({
          variable: o,
          scopeType: n
        }))
      }
    }
  }

  var re = function (e, n, r, o) {
    if (currentScreen) {
      var /* [auto-meaningful-name] */e$name = e.name
      g("")
      if (r !== e$name) {
        if (!Shared_tools_index.j(r)) {
          if ("" !== r && r[0].match(/[0-9_]/)) {
            dispatch(CommonActions.mj({
              message: Shared_ui_language.c(language, "invalidVariableFirstChar")
            }))
          }
          return void dispatch(CommonActions.mj({
            message: Shared_ui_language.c(language, "invalidVariableName")
          }))
        }
        if (function (e, n) {
          if (variableType === Module_18.b.PRIMITIVE) {
            var r = currentScreenPrimitiveVariables.concat(globalVariableList)
            if (n === Module_18.i.GLOBAL) {
              screens.forEach(function (e) {
                r = r.concat(e.primitiveVariables)
              })
            }
            return r.some(function (t) {
              return t.name === e
            })
          }
          if (variableType === Module_18.b.ARRAY) {
            var o = currentScreenArrayVariables.concat(globalArrayList)
            if (n === Module_18.i.GLOBAL) {
              screens.forEach(function (e) {
                o = o.concat(e.arrayVariables)
              })
            }
            return o.some(function (t) {
              return t.name === e
            })
          }
          if (variableType === Module_18.b.OBJECT) {
            var i = currentScreenObjectVariables.concat(globalObjectList)
            if (n === Module_18.i.GLOBAL) {
              screens.forEach(function (e) {
                i = i.concat(e.objectVariables)
              })
            }
            return i.some(function (t) {
              return t.name === e
            })
          }
          return false
        }(r, n)) {
          var a
          switch (variableType) {
            case Module_18.b.PRIMITIVE:
              a = "primitiveVariableNameRepeat"
              break
            case Module_18.b.ARRAY:
              a = "arrayVariableNameRepeat"
              break
            case Module_18.b.OBJECT:
              a = "object.nameRepeat"
              break
            default:
              throw Error("Unreachable branch")
          }
          dispatch(CommonActions.mj({
            message: Shared_ui_language.c(language, a)
          }))
          return void o.target.focus()
        }
        if (variableType === Module_18.b.PRIMITIVE) {
          CommonActions.Nf(dispatch, CommonActions.Hg(n, e.id, "name", r, currentScreen.id))
        } else {
          if (variableType === Module_18.b.ARRAY) {
            CommonActions.Nf(dispatch, CommonActions.yg(n, e.id, "name", r, currentScreen.id))
          } else {
            if (variableType === Module_18.b.OBJECT) {
              dispatch(CommonActions.Gg({
                scopeType: n,
                id: e.id,
                key: "name",
                value: r,
                screenId: currentScreen.id
              }))
            }
          }
        }
      }
    }
  }

  var oe = function (e, t) {
    return <Input
      type="text"
      className={styles.valueInput}
      maxLength={20}
      defaultValue={e.defaultValue}
      onFocus={function (e) {
        return e.target.select()
      }}
      onBlur={function (n) {
        !function (e, t, n) {
          if (currentScreen) {
            var r = e
            if (r) {
              r = Shared_tools_index.mb(r)
            }
            dispatch(CommonActions.Hg(n, t.id, "defaultValue", r, currentScreen.id))
          }
        }(n, e, t)
      }}
      onKeyDown={ie}
    />
  }

  var ie = function (e) {
    if (13 === e.keyCode) {
      e.currentTarget.blur()
    }
  }

  var ae = function (e) {
    g(e)
  }

  useEffect(function () {
    if (m) {
      var e = document.querySelector(".".concat("VARIABLE_ID_" + m, " input"))
      if (e && e instanceof HTMLInputElement) {
        e.focus()
      }
    }
  }, [m])

  var se = function (e, n) {
    if (currentScreen) {
      if (variableType === Module_18.b.PRIMITIVE) {
        CommonActions.Nf(dispatch, CommonActions.Lf(n, e.id, currentScreen.id))
      } else {
        if (variableType === Module_18.b.ARRAY) {
          CommonActions.Nf(dispatch, CommonActions.If(n, e.id, currentScreen.id))
        } else {
          if (variableType === Module_18.b.OBJECT) {
            dispatch(CommonActions.Kf(n, e.id, currentScreen.id))
          }
        }
      }
    }
  }

  var ce = function (e) {
    var /* [auto-meaningful-name] */e$item = e.item
    var /* [auto-meaningful-name] */e$type = e.type
    if (!currentScreen) {
      return <div />
    }
    return <div
      className={classNames(styles.itemWrap, y === e$item.id && styles.select)}
      id={e$item.id}
      key={e$item.id}
      onClick={() => {
        E(e$item.id)
        Module_49.oTHelper.customEvent?.emit?.focusItem("dynamicData", e$item.id)
      }}
    >
      <div className={styles.item}>
        <div className={classNames(styles.name)}>
          {m === e$item.id ? <Input
            type="text"
            className={classNames(styles.nameInput, "".concat("VARIABLE_ID_" + e$item.id))}
            maxLength={20}
            defaultValue={e$item.name}
            onBlur={re.bind(null, e$item, e$type)}
            onKeyDown={ie}
          /> : <div
            className={classNames(styles.nameInputWrapper)}
          >
            {<div
              onClick={ae.bind(null, e$item.id)}
              className={classNames(styles.noEditing)}
            >
              {e$item.name}
            </div>}
            {<div
              className={classNames(styles.itemBtn, styles.delete)}
              onClick={se.bind(null, e$item, e$type)}
            >
              {<Components.j
                type="icon-close"
              />}
            </div>}
            {<Module_748.a
              placement="bottom"
              trigger={["hover", "click"]}
              title={formatMessage({
                id: variableType === Module_18.b.PRIMITIVE ? "editDefaultValue" : "edit"
              })}
            >
              {<div
                className={styles.itemBtn}
                onClick={ne.bind(null, e$item.id, e$type)}
              >
                {variableType === Module_18.b.PRIMITIVE && <Components.j
                  type="icon-fold-left"
                  className={classNames(styles.itemExpand, l === e$item.id && styles.active)}
                />}
                {variableType === Module_18.b.ARRAY && <Components.j
                  type="icon-list"
                />}
                {variableType === Module_18.b.OBJECT && <Components.j
                  type="icon-list"
                />}
              </div>}
            </Module_748.a>}
          </div>}
        </div>
      </div>
      {variableType === Module_18.b.PRIMITIVE && y === e$item.id && l === e$item.id && <div
        className={styles.detail}
      >
        {formatMessage({
          id: "initValue"
        })}
        {oe(e$item, e$type)}
      </div>}
    </div>
  }

  return <div id={props.labelType} className={styles.wrapper}>
    {function () {
      let id
      switch (variableType) {
        case Module_18.b.PRIMITIVE:
          id = "variable"
          break
        case Module_18.b.OBJECT:
          id = "object"
          break
        case Module_18.b.ARRAY:
          id = "list"
      }
      return <div className={styles.addBtn} onClick={addVariable}>
        <IconFont type="icon-add" className={styles.addIcon} />{formatMessage({ id: id })}
      </div>
    }()}
    {!hasVariable && <div className={styles.line} />}
    {!isFold && (variableType === Module_18.b.PRIMITIVE ? <div className={styles.content}>
      {globalVariableList.length ? <div className={styles.variableTitle}>
        {formatMessage({ id: "globalVariable" })}
      </div> : null}
      {globalVariableList.map(function (e) {
        return React.createElement(ce, {
          item: e,
          key: e.id,
          type: Module_18.i.GLOBAL
        })
      })}
      {currentScreenPrimitiveVariables.length > 0 ? <div className={styles.variableTitle}>
        {formatMessage({ id: "screenVariable" })}
      </div> : null}
      {currentScreenPrimitiveVariables.map(function (e) {
        return React.createElement(ce, {
          item: e,
          key: e.id,
          type: Module_18.i.SCREEN
        })
      })}
    </div> : variableType === Module_18.b.ARRAY ? <div className={styles.content}>
      {globalArrayList.length > 0 ? <div className={styles.variableTitle}>
        {formatMessage({ id: "globalArray" })}
      </div> : null}
      {globalArrayList.map(function (e) {
        return React.createElement(ce, {
          item: e,
          key: e.id,
          type: Module_18.i.GLOBAL
        })
      })}
      {currentScreenArrayVariables.length > 0 ? <div
        className={styles.variableTitle}
      >
        {formatMessage({
          id: "screenArray"
        })}
      </div> : null}
      {currentScreenArrayVariables.map(function (e) {
        return React.createElement(ce, {
          item: e,
          key: e.id,
          type: Module_18.i.SCREEN
        })
      })}
    </div> : variableType === Module_18.b.OBJECT ? <div
      className={styles.content}
    >
      {globalObjectList.length > 0 ? <div
        className={styles.variableTitle}
      >
        {formatMessage({
          id: "object.globalObject"
        })}
      </div> : null}
      {globalObjectList.map(function (e) {
        return React.createElement(ce, {
          item: e,
          key: e.id,
          type: Module_18.i.GLOBAL
        })
      })}
      {currentScreenObjectVariables.length > 0 ? <div
        className={styles.variableTitle}
      >
        {formatMessage({
          id: "object.screenObject"
        })}
      </div> : null}
      {currentScreenObjectVariables.map(function (e) {
        return React.createElement(ce, {
          item: e,
          key: e.id,
          type: Module_18.i.SCREEN
        })
      })}
    </div> : undefined)}
    {hasVariable && <div className={styles.footer}>
      {isFold && <div className={styles.ellipse}>...</div>}
      <div className={styles.expand}>
        <div className={styles.foldBtn} onClick={() => setIsFold(!isFold)}>
          <IconFont type="icon-fold" className={isFold ? styles.expandIcon : styles.foldIcon} />
        </div>
      </div>
    </div>}
  </div>
})
