import path from "path"
import { unpack, SetPath } from "../../core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "appcraft-about", "web", "0.1.0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "main.0ac09eb1.chunk.js"),
        path.resolve(distPath, "2.39df20f7.chunk.js")
    ],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/about",
        srcPath: "src"
    },
    bundle: {
        publicPath: "https://creation.codemao.cn/appcraft-about/web/0.1.0/",
        nodePolyfill: {
            38: "module",
            44: "global",
            56: "process"
        }
    },
    externals: [
        { key: 2, source: "react/jsx-runtime" },
        { key: 13, source: "react" },
        { key: 30, source: "classnames" },
        { key: 48, source: "react-dom" },
        { key: 71, source: "react-intl" },
        { key: 73, source: "react-intl" }
    ],
    modules: {
        13: {
            namedImported: true
        },
        71: {
            namedImported: true,
            exportsNameMap: {
                a: "useIntl"
            }
        },
        73: {
            namedImported: true,
            exportsNameMap: {
                a: "IntlProvider"
            }
        }
    },
    movedDirs: ["about"],
    setPath: SetPath.BY_DEPENDENCY
})
