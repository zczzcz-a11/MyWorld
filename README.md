# 基于Vue3+TypeScript+Vite构建的MyWorld pc端音乐流媒体网站

## 主要技术栈
+ Vue3: 用于快速构建web用户界面的框架.
+ naive-ui: 基于Vue3的组件库,可自定义主题,支持夜间模式
+ Vite: 下一代的前端构建工具,支持HRM,TypeScript,JSX,开箱即用.
+ axios: 是用于浏览器和node.js的基于Promise的http库,用于请求Api
+ dayjs: 轻量级,用于处理时间相关格式化问题的库
+ color.js: 用于不可变颜色的转换和操作的JavaScript库.
+ eslint: 基于AST模式的JavaScript代码风格检查工具.
+ lodash: 实用JavaScript工具函数库,提供了类似防抖节流,深拷贝开箱即用的函数
+ nanoid: 小型的安全的,用于生成唯一字符串id的JavaScript库.
+ normalize.css: 一个用于现代化的重置css的库,用于磨平各个浏览器之间不同样式的兼容问题.
+ pinia: 基于Proxy使用TypeScript编写的灵活的且类型安全的下一代Vue状态管理库.
+ qs: 安全的用于字符串序列化的库,通常用于处理请求参数.
+ rgbaster: 基于Promise的JavaScript库,用于从图像中提取主色.
+ vue-router4: 基于Vue3路由管理库
+ vue-virtual-scroller: 基于Vue的虚拟滚动JavaScript库
+ xgplayer: 西瓜播放器(HTML5),带解析器,能节省流量 提供开箱即用的HTML5视频播放器库
+ tailwindcss: 基于原子化css的实用程序优先的css框架,用于快速构建自定义用户界面.
+ PostCSS PostCSS是一个开源css处理器，它可以基于CSS规范自动处理、检查和编译CSS文件

## 主要功能
+ 自定义封装歌曲进度条,可点击拖拽切换到指定播放时间, 添加buffer加载进度显示.
+ 歌词自动同步滚动高亮,滚动选择歌词切换播放时间.
+ 歌曲播放或暂停时cd旋转或停止旋转.
+ 兼容夜间模式,骨架屏加载显示.
+ 歌单内部搜索歌曲,收藏歌单,编辑歌单,新建歌单.
+ 自定义图片懒加载,缓冲loading显示.
+ 扫码登录,编辑用户信息,签到.退出登录.
+ 记忆当前滚动位置.刷新页面时更新滚动位置.
+ 搜索歌曲或歌单,提供搜索建议.搜索历史记录缓存.

## 项目运行
```
npm install
npm run dev