/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-8
 */

import { CreateProject } from "./CreateProject"
import { MyProject } from "./MyProject"
import styles from /* 525 */"./styles.module.css"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import { closeProjectDialogAction, openProjectDialogAction } from "../../../redux/common/actions"
import { IconFont } from "../../../../shared/ui/components"
import { Dialog } from "../../../../shared/ui/components"
import classNames from "classnames"
import { useIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import React, { memo } from "react"

export const ProjectDialog = memo(({ importProjectJson }) => {

  const { formatMessage } = useIntl()
  const dispatch = useDispatch()

  const { visible, selected } = useSelector((state) => state.common.projectDialog)
  function setSelected(selected) {
    dispatch(openProjectDialogAction(selected))
  }

  return visible ? <Dialog
    visible={visible}
    className={styles.container}
    onClose={() => { dispatch(closeProjectDialogAction()) }}
  >
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div
          className={classNames(styles.tabItem, {
            [styles.selected]: selected === Module_18.f.CREATE_PROJECT
          })}
          onClick={() => { setSelected(Module_18.f.CREATE_PROJECT) }}
        >
          <IconFont type="icon-new-project" className={styles.icon} />
          {formatMessage({ id: "projectDialog.newProject" })}
        </div>
        <div
          className={classNames(styles.tabItem, {
            [styles.selected]: selected === Module_18.f.MY_PROJECT
          })}
          onClick={() => { setSelected(Module_18.f.MY_PROJECT) }}
        >
          <IconFont type="icon-my-project" className={styles.icon} />
          {formatMessage({ id: "projectDialog.myProject" })}
        </div>
      </header>
      <div className={styles.content}>
        <CreateProject
          visible={selected === Module_18.f.CREATE_PROJECT}
          importProjectJson={importProjectJson}
        />
        <MyProject
          visible={selected === Module_18.f.MY_PROJECT}
          importProjectJson={importProjectJson}
        />
      </div>
    </div>
  </Dialog> : null
})
