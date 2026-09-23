<h1 align="center">Komari Emerald Globe</h1>

<p align="center">面向 Komari Monitor 的现代化监控主题，在 Emerald 的轻量节点监控基础上提供彩色交互地球、实时速率、三网质量和节点详情分析。</p>

<p align="center">
  <a href="https://github.com/allen0039/komari-theme-emerald-globe/releases/latest"><img src="https://img.shields.io/github/v/release/allen0039/komari-theme-emerald-globe?style=flat-square" alt="Latest release"></a>
  <a href="https://github.com/allen0039/komari-theme-emerald-globe/blob/main/LICENSE"><img src="https://img.shields.io/github/license/allen0039/komari-theme-emerald-globe?style=flat-square" alt="License"></a>
  <a href="https://github.com/komari-monitor/komari"><img src="https://img.shields.io/badge/Komari-Monitor-10b981?style=flat-square" alt="Komari Monitor"></a>
</p>

![Komari Emerald Globe 主题预览](docs/preview.png)

> 预览图和文档截图仅用于展示界面结构。公开发布前请确认截图中不包含真实 IP、域名、管理地址、账户信息、API 密钥或其他私有标识。

## 项目定位

`Komari Emerald Globe` 是面向 [Komari Monitor](https://github.com/komari-monitor/komari) 的普通版主题，基于 [Komari Emerald](https://github.com/Tokinx/komari-theme-emerald) 二次开发。

主题的重点是把节点状态、网络质量和全球位置放在同一屏中：顶部可以使用彩色交互地球或点状世界地图，下面使用紧凑的卡片/列表展示节点资源、实时流量、延迟和丢包情况。主题只负责前端展示和调用 Komari 已提供的公开接口，不修改探针上报方式，也不包含后台服务。

本仓库是普通版主题，不包含 `komari-pro` 中的资源趋势、成本预算、续费管理或其他 Pro 专属功能。

## 主要功能

### 彩色交互地球

- 亮色和暗色模式使用不同的地球纹理，适配当前主题色。
- 根据节点地区显示标记、国家/地区旗帜和节点连线。
- 地球标记可展示节点在线状态、实时上行和下行速率。
- 支持自转地球、静止地球、点状世界地图、仅显示汇总卡片和隐藏头部五种模式。
- 页面不可见时暂停部分地球渲染，减少后台标签页的浏览器资源消耗。

### 首页汇总与节点视图

- 汇总内存、硬盘、累计流量、实时上行和实时下行。
- 节点卡片展示在线状态、操作系统、地区、CPU、内存、硬盘、流量、速率、在线时长、费用和自定义标签。
- 支持卡片视图和列表视图，方便在视觉浏览和密集对比之间切换。
- 支持按节点名称、地区、系统、分组、标签和公开备注搜索。
- 支持按状态、系统、节点名称、CPU、内存、硬盘、流量和实时速率排序。
- 可将离线节点统一排列到列表末尾。

### 三网延迟与丢包

- 摘要模式适合快速扫读，展示最多三组网络的延迟和丢包率。
- 明细模式展示每组网络的延迟、丢包率和历史趋势条。
- 指标颜色会根据延迟、丢包和数据状态变化，悬停可以查看具体数值和时间。
- 可点击延迟或丢包区域打开节点图表，查看更长时间范围的记录。
- 可在主题设置中配置三网任务显示顺序；未配置时沿用后端返回顺序并补足可用任务。
- 对数据缺失、历史记录关闭、保留时间不足和接口能力不一致进行区分，不使用虚构数据填补结果。

### 节点详情与图表

- 节点详情页集中展示硬件、系统、存储、网络、流量和费用信息。
- 负载图表支持 CPU、内存、磁盘、网络、连接数和进程等指标。
- 延迟图表支持多任务对比，并可分别查看延迟与丢包趋势。
- 时间范围和数据内容根据 Komari 后端实际可用记录动态调整。

### 个人价值计算

- 顶部钱袋入口用于查看个人选择的服务器价值统计。
- 支持全选、清空、搜索服务器和切换显示币种。
- 个人选择只影响当前浏览器中的钱袋面板，不改变首页公开统计。
- 选择的服务器 UUID、币种和相关界面偏好保存在当前浏览器的 `localStorage` 中，不上传到作者服务器。
- 汇率按需从公开汇率接口获取，失败时使用备用接口、缓存或内置参考值兜底。

### 访客信息与主题体验

- 底部访客信息卡默认展示地区和浏览器等概要信息。
- 用户主动展开后才显示设备、完整 IP、运营商和访问时间等详细内容。
- 可在主题设置中关闭访客信息卡，关闭后不再发起访客地理信息查询。
- 支持亮色、暗色和跟随系统主题。
- 支持减弱页面过渡动画、公告、备案信息和自定义图片/视频背景。
- 在移动端保留节点搜索、视图切换、详情查看和返回顶部等核心操作。

## 界面预览

### 节点列表

![Emerald Globe 节点列表视图](docs/screenshots/list-view.png)

### 个人价值计算

![Emerald Globe 个人价值计算](docs/screenshots/personal-finance.png)

### 节点详情

![Emerald Globe 节点详情](docs/screenshots/node-detail.png)

### 性能与延迟图表

![Emerald Globe 性能与延迟图表](docs/screenshots/performance-charts.png)

### 移动端

<p align="center">
  <img src="docs/screenshots/home-mobile.png" width="390" alt="Emerald Globe 移动端视图">
</p>

## 安装

### 从 GitHub 远程导入

这是最方便的安装方式：

1. 登录 Komari 后台，进入 `设置 -> 主题管理`。
2. 选择 `导入主题 -> 导入远程主题`。
3. 填写本仓库地址：

   ```text
   https://github.com/allen0039/komari-theme-emerald-globe
   ```

4. 选择最新 Release 并完成安装。

远程导入后，后续版本可以继续通过 Komari 主题管理页面更新。

### 从 ZIP 文件导入

1. 打开 [GitHub Releases](https://github.com/allen0039/komari-theme-emerald-globe/releases/latest)。
2. 下载名称以 `komari-theme-emerald-globe-build-` 开头的 ZIP 文件。
3. 在 Komari 后台的主题管理页面上传 ZIP 并完成导入。
4. 导入后刷新页面；如果浏览器仍显示旧资源，请执行一次强制刷新。

不要上传 GitHub 自动生成的 `Source code (zip)` 或 `Source code (tar.gz)`。Komari 需要的是 Release 中由项目构建流程生成的主题包。

## 主题设置

完整配置定义位于 [`komari-theme.json`](komari-theme.json)，由 Komari 后台统一管理。

| 设置 | 默认值 | 说明 |
| --- | --- | --- |
| 数据更新间隔 | `3` 秒 | 实时数据刷新间隔，建议设置在 1-10 秒。 |
| RPC 连接模式 | `websocket` | 可切换为 `http`；当 WebSocket 不可用时使用 HTTP。 |
| 默认视图模式 | `card` | 首页默认使用卡片或列表视图。 |
| 公告 | 关闭 | 配置首页公告开关、标题和支持简单 Markdown 的内容。 |
| 头部展示模式 | `earth` | `earth` 自转地球、`earth-stop` 静止地球、`maps` 点状地图、`cards` 汇总卡片、`hide` 隐藏头部。 |
| 访客信息卡片 | 开启 | 控制底部访客地区、浏览器和设备信息卡片。 |
| 隐藏后台入口 | 关闭 | 未登录时隐藏顶部后台管理入口。 |
| 减弱过渡动画 | 关闭 | 减少页面切换和数据更新动画。 |
| 延迟节点排序 | 空 | 使用英文逗号分隔任务名称，自定义三网显示顺序。 |
| 离线节点后置 | 关闭 | 将离线节点排列到节点列表末尾。 |
| ICP 备案 | 关闭 | 配置备案号及其跳转链接。 |
| 公安备案 | 关闭 | 配置公安备案号及其可选跳转链接。 |
| 自定义背景 | 关闭 | 使用图片或视频作为亮色/暗色背景，并设置模糊和遮罩强度。 |

首页工具栏中的搜索内容、节点分组、卡片/列表视图、三网摘要/明细模式和主题模式属于当前浏览器的界面偏好，不会写入 Komari 后端。

## 数据、隐私与外部请求

主题不包含广告、统计分析或用户行为追踪代码，也不会向作者服务器上传 Komari 登录凭据、节点数据或个人价值设置。

启用相应功能时，浏览器可能访问以下公开服务：

| 功能 | 可能访问的服务 | 用途 |
| --- | --- | --- |
| 访客信息卡片 | `api.ip.sb`、`ipwho.is`、`api.ipapi.is`、`ipapi.co`、`api.vore.top` | 获取访客公网 IP、运营商和大致地区。服务商会看到完成请求所需的网络信息。 |
| 汇率换算 | `api.frankfurter.app`、`open.er-api.com` | 获取公开汇率，不发送节点价格或账单内容。 |
| 图标 | Iconify CDN | 按需加载界面图标。 |
| 点状世界地图 | jsDelivr、Fastly、Gcore 或 GitHub Raw | 下载公开的 Apache ECharts 世界地图 JSON。 |
| 自定义背景 | 站点所有者填写的图片或视频地址 | 访客浏览器直接请求配置的资源。 |

浏览器本地存储用于保存主题模式、视图偏好、节点分组、三网展示模式、个人价值选择、币种以及短期地图/趋势缓存。这些内容不会被主题上传到作者服务器。

公开部署前建议检查：

- 不需要访客定位时关闭“访客信息卡片”。即使卡片折叠，启用状态下仍可能请求地理信息服务。
- 检查 Komari 公开接口中已经暴露的节点名称、地区、公开备注、流量额度和到期信息。
- 发布截图前遮挡 IP、域名、UUID、真实节点名称、费用、账户信息和精确访问位置。
- 按站点自身隐私政策审查是否允许使用第三方 IP、汇率、图标、地图和背景资源服务。

## 兼容性

- 主题面向支持 Komari 公开 API 和 RPC2 接口的版本。
- 当前代码重点适配 Komari `1.3.x` 和 `1.4.x`；不同后端版本的指标接口、历史保留时间和权限设置可能影响图表可用范围。
- 推荐使用较新的 Chrome、Edge、Firefox 或 Safari，以获得完整的 WebGL 地球和地图效果。
- 如果服务器无法使用 WebSocket，可以在主题设置中切换为 HTTP RPC；最终可用性取决于 Komari 后端配置。
- 地球效果需要浏览器支持 WebGL；不支持 WebGL 时仍可使用节点卡片、列表和详情等非地球功能。

## 本地开发

### 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`
- Bun `>=1.2.0`

项目使用 Bun 管理依赖，不建议混用 npm、pnpm 或 yarn。

### 安装依赖并启动开发服务器

```bash
bun install
bun run dev
```

开发服务器启动后，按照终端输出的地址访问本地页面。主题运行在 Komari 页面环境中时，会从当前站点读取公开 API 和 RPC 数据。

### 代码检查与生产构建

```bash
bun run type-check
bun run lint
bun run build
```

当前仓库的根脚本包含类型检查、ESLint 自动修复和生产构建。仓库没有公开的测试脚本；`tests/` 中的测试文件不应被当作已配置的 `bun test` 流程使用。

`bun run build` 会执行类型检查和 Vite 生产构建，并在仓库根目录生成：

```text
komari-theme-emerald-globe-build-<git-hash>.zip
```

ZIP 根目录包含：

```text
komari-theme.json
preview.png
dist/
```

其中 `preview.png` 来自 `docs/preview.png`。不要修改主题包名称、清单文件名或预览图文件名，除非同步修改 [`vite.config.ts`](vite.config.ts) 中的真实打包逻辑。

### 版本与发布准备

项目提供版本准备脚本，会同步更新 `package.json` 和 `komari-theme.json` 的版本号并将两个文件加入暂存区：

```bash
bun run publish -- --version 1.0.13
```

不传版本号时，脚本会询问是否自动递增 patch 版本。版本准备完成后，执行构建，确认 ZIP 内容，再提交代码并创建对应的 GitHub Release。

## 技术栈

- Vue 3 + Composition API
- Vite 7
- TypeScript
- Tailwind CSS 4
- Pinia
- reka-ui
- ECharts + vue-echarts
- Three.js + Globe.gl
- vue-router
- vue-sonner
- Iconify

## 致谢

- [Komari Monitor](https://github.com/komari-monitor/komari)
- [Komari Emerald](https://github.com/Tokinx/komari-theme-emerald)：直接上游项目
- [Komari Glassmorphism](https://github.com/sanrokamlan-prog/komari-theme-Glassmorphism)：彩色地球、纹理和视觉实现参考
- [Komari Naive](https://github.com/lyimoexiao/komari-theme-naive)：Emerald 主题基座参考

## 许可证

本项目采用 [MIT License](LICENSE)。上游项目、图标、地图数据和第三方公共服务请同时遵守其各自许可证与使用条款。
