# 编程猫 CoCo 源代码计划

![QQ-编程猫非官方技术交流群（708553284）](https://img.shields.io/badge/QQ-编程猫非官方技术交流群（708553284）-blue?style=flat-square)

还原编程猫 CoCo 编辑器、CoCo Player 等的代码。

> [!IMPORTANT]
> 停更通知：
>
> 该项目唯一的核心维护者 SLIGHTNING 由于学业繁忙，将无法维护该项目。预计将于 2026 年 6 月 17 日后恢复更新。

## 一、进度

| 模块 | 抓取 | 拆包 | 语法升级 | JSX 反向转换 | 反混淆 |
|:-:|:-:|:-:|:-:|:-:|:-:|
| CoCo Home | ✅ | 75% | ❌ | ❌ | / |
| CoCo Editor | ✅ | 50% | ❌ | ❌ | ❌ |
| CoCo Editor Player | ✅ | ❌ | ❌ | ❌ | ❌ |
| CoCo Editor ServiceWorker | ✅ | ❌ | ❌ | ❌ | ❌ |
| CoCo Player | ✅ | ❌ | ❌ | ❌ | ❌ |

过程说明：

- 抓取：把公开文件的代码放到仓库中；
- 拆包：把打包过的代码拆成模块；
- 语法升级：将降级后的语法转换成降级前的；
- JSX 反向转换：将转换后的 `React.createElement` 调用转换为 JSX；
- 反混淆：给模块名称、代码中的量的名称等重新设置一个有意义的名称。

符号说明：

- `✅`：全部完成；
- `❌`：一点没动；
- `/`：不需要；
- `xx%`：完成比例（估计值，可能不准确）。

## 二、构建和运行

### 1. 克隆仓库到本地

```sh
git clone https://github.com/glacier-studio/CoCo-Source-Code-Plan.git
# 或从 Gitee 克隆：
# git clone https://gitee.com/glacier-studio/CoCo-Source-Code-Plan.git
```

### 2. 添加 Host 解析规则

在 Host 文件中添加：

```host
127.0.0.1	coco.localhost
```

### 3. 安装依赖

```sh
$ npm install --legacy-peer-deps
```

### 4. 启动开发服务

```sh
$ npm run start
```

### 5. 在浏览器中打开

在本机浏览器中打开 <http://coco.localhost:7090/>

## 三、目录结构说明

### 1.公开文件（/public）

编程猫 CoCo 编辑器的公开代码文件（经格式化）。

不保留历史版本。

当存储的前版本为 v1.21.7。

### 2.未还原的（/unrestored）

已拆成模块但还未还原的代码。

### 3.源文件（/src）

还原过的的代码。
