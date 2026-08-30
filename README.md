<h3 align="center">Komari Emerald Globe</h3>
<p align="center">
基于 Komari Emerald 二次开发，加入真实彩色地球、跨地区连接线与实时传输速率。
</p>

![preview](/docs/preview.png)

## 主要改动

- 使用 Three.js 与 Globe.gl 渲染彩色昼间/夜间地球
- 保留节点地区国旗、跨地区连接线及实时上下行速率
- 支持自动旋转、拖拽浏览、静止模式和亮色/暗色主题
- 页面不可见时暂停渲染，兼顾桌面端与移动端性能

## 使用

1. 从 [Release 页面](https://github.com/allen0039/komari-theme-emerald-globe/releases) 下载最新的 `komari-theme-emerald-globe-build-*.zip`
2. 登录 Komari Monitor，进入 `设置` -> `主题管理`
3. 点击 `上传主题`，选择下载的 ZIP 文件
4. 刷新页面

## 开发

环境要求：Node.js `^20.19.0` 或 `>=22.12.0`，Bun `>=1.2.0`。

```bash
bun install
bun run dev
bun run lint
bun run build
```

## 技术栈

Vue 3、Vite 7、Tailwind CSS 4、reka-ui、Pinia、ECharts、Three.js、Globe.gl。

## 鸣谢

- [Komari](https://github.com/komari-monitor/komari)
- [Komari Emerald](https://github.com/Tokinx/komari-theme-emerald)，本主题的上游项目
- [Komari Glassmorphism](https://github.com/sanrokamlan-prog/komari-theme-Glassmorphism)，彩色地球实现与纹理参考
- [Komari Naive](https://github.com/lyimoexiao/komari-theme-naive)，Emerald 的主题基座

## License

[MIT](./LICENSE)
