/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-10
 */

import * as React from "react"

import { Ve } from "../../../../../unrestored/shared/1571/2636/index__part-9"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import { getAccountSettingUrl } from "../../../../shared/tools"
import { asyncSetUserInfoAction, openSignInDialogAction } from "../../../redux/common/actions"
import { Dropdown, Menu, MenuItem, SubMenuItem } from "../../../../shared/ui/components"
import { useIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import styles from "../../../../../unrestored/shared/1571/2636/1051"

enum EMenuValue {
  LOGOUT = "LOGOUT",
  ACCOUNT_SETTING = "ACCOUNT_SETTING",
  USER_AGREEMENT = "USER_AGREEMENT"
}

const serviceAgreementList = [
  {
    label: "用户协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_userserviceProtocol.html"
  }, {
    label: "隐私协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_privacyProtocol.html"
  }, {
    label: "儿童隐私保护协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_childrenPrivacyProtectProtocol.html"
  }, {
    label: "个人信息保护政策摘要",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationProtectionPolicySummary.html"
  }, {
    label: "个人信息收集清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationCollectionList.html"
  }, {
    label: "个人信息共享清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationSharingList.html"
  }
]

export const UserInfo = React.memo((__props) => {

  const { formatMessage } = useIntl()
  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.common.userInfo)

  async function handleClickMenu(value: EMenuValue) {
    switch (value) {
      case EMenuValue.LOGOUT:
        try {
          await Ve()
          await dispatch(asyncSetUserInfoAction(null))
        } catch (error) {
          console.error(error)
        }
        break
      case EMenuValue.ACCOUNT_SETTING:
        window.open(getAccountSettingUrl(), "_blank")
        break
    }
  }

  const serviceAgreementMenu = <Menu>
    {serviceAgreementList.map((service, index) => (
      <MenuItem key={index}>
        <div onClick={() => window.open(service.link, "_blank")}>{service.label}</div>
      </MenuItem>
    ))}
  </Menu>

  return userInfo ? (
    <div className={styles.wrapper}>
      <Dropdown overlay={
        <Menu onClick={handleClickMenu}>
          <MenuItem value={EMenuValue.ACCOUNT_SETTING}>
            <div>{formatMessage({ id: "accountSetting" })}</div>
          </MenuItem>
          <SubMenuItem subMenu={serviceAgreementMenu}>
            <div>{formatMessage({ id: "serviceAgreement" })}</div>
          </SubMenuItem>
          <MenuItem value={EMenuValue.LOGOUT}>
            <div>{formatMessage({ id: "logout" })}</div>
          </MenuItem>
        </Menu>
      }>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${userInfo.avatar_url})` }}
        />
      </Dropdown>
    </div>
  ) : (
    <div
      className={styles.loginButton}
      onClick={function () {
        dispatch(openSignInDialogAction())
        Module_141.a("LoginButtonClick")
      }}
    >{formatMessage({ id: "login" })}</div>
  )
})
