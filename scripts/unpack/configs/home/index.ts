import path from "path"

import { unpack, SetPath } from "../../core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coco", "home", "dist")

unpack({
    entry: [
        path.resolve(distPath, "commons.abcbc2e5b889aff92f60.js"),
        path.resolve(distPath, "coco.68b628c42c02a09917c6.js"),
        path.resolve(distPath, "work.8bf5adc29b1d512720c7.js")
    ],
    externals: [
        {
            searchPath: /^react$/,
            replace: "react"
        }, {
            searchPath: /^react\/dom$/,
            replace: "react-dom"
        }, {
            searchPath: /^react\/redux$/,
            replace: "react-redux"
        }, {
            searchPath: /^react\/intl$/,
            replace: "react-intl"
        }, {
            searchPath: /^react\/draggable$/,
            replace: "react-draggable"
        }, {
            searchPath: /^react\/router(\/index)?$/,
            replace: "react-router"
        }, {
            searchPath: /^react\/router\/dom$/,
            replace: "react-router-dom"
        }, {
            searchPath: /^react\/loadable$/,
            replace: "react-loadable"
        }, {
            searchPath: /^react\/css\/modules$/,
            replace: "react-css-modules"
        }, {
            searchPath: /^lodash\//,
            replace: "lodash/"
        }, {
            searchPath: /^(.*\/)?ant\/design\/icons\/.*$/,
            replace: "@ant-design/icons"
        }, {
            searchPath: /^(.*\/)?ant\/design\/react\/.*$/,
            replace: "@ant-design/react-slick"
        }, {
            searchPath: /^antd(\/.*)?$/,
            replace: "antd"
        }, {
            searchPath: /^(.*\/)?babel\/runtime\//,
            replace: "@babel/runtime/"
        }, {
            searchPath: /^babel\/plugin\/react\/css\/modules\//,
            replace: "babel-plugin-react-css-modules/"
        }, {
            searchPath: /^babel\/polyfill.*$/,
            replace: "babel-polyfill"
        }, {
            searchPath: /^video\/react$/,
            replace: "video-react"
        }, {
            searchPath: /^sa\/sdk\/javascript$/,
            replace: "sa-sdk-javascript"
        }, {
            searchPath: /^intl$/,
            replace: "intl"
        }, {
            searchPath: /^axios$/,
            replace: "axios"
        }, {
            searchPath: /^shortid$/,
            replace: "shortid"
        }, {
            searchPath: /^redux$/,
            replace: "redux"
        }, {
            searchPath: /^redux\/actions$/,
            replace: "redux-actions"
        }, {
            searchPath: /^redux\/saga$/,
            replace: "redux-saga"
        }, {
            searchPath: /^redux\/saga\/effects$/,
            replace: "redux-saga/effects"
        }, {
            searchPath: /^classnames$/,
            replace: "classnames"
        }, {
            searchPath: /^build\/three\/module$/,
            replace: "three"
        }, {
            searchPath: /^three\/examples/,
            replace: "three/examples"
        }, {
            searchPath: /^invariant$/,
            replace: "invariant"
        }
    ],
    bundle: {
        publicPath: "https://creation.codemao.cn/coco/home/dist/",
        nodePolyfill: {
            "3IRH": "module",
            "f1Eh": "module",
            "DuR2": "global",
            "W2nU": "process"
        }
    },
    movedDirs: ["home"],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/home",
        srcPath: "src"
    },
    setPath: SetPath.BY_IMPORT_NAME
})
