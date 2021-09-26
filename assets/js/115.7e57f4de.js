(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{693:function(a,t,v){"use strict";v.r(t);var e=v(58),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"uni-app"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uni-app"}},[a._v("#")]),a._v(" uni-app")]),a._v(" "),v("p",[a._v("uniapp 像是一个大集成")]),a._v(" "),v("h2",{attrs:{id:"优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("使用uni-app，底层自动差量数据更新，简单而高性能")])]),a._v(" "),v("li",[v("p",[a._v("uni-app是一套可以适用多端的开源框架，一套代码可以同时生成ios，Android，H5，微信小程序，支付宝小程序，百度小程序等")])]),a._v(" "),v("li",[v("p",[a._v("uni-app对前端开发人员比较友好，学习成本比较低，首先uni-app是基于vue.js的。其次封装的组件和微信小程序的组件一模一样")])])]),a._v(" "),v("h2",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),v("h2",{attrs:{id:"优化方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化方案"}},[a._v("#")]),a._v(" 优化方案")]),a._v(" "),v("h3",{attrs:{id:"复杂页面数据区域封装成组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复杂页面数据区域封装成组件"}},[a._v("#")]),a._v(" 复杂页面数据区域封装成组件")]),a._v(" "),v("p",[a._v("对于复杂页面，更新某个区域的数据时，需要把这个区域做成组件，这样更新数据时就只更新这个组件")]),a._v(" "),v("p",[v("strong",[a._v("注：")]),a._v(" app-nvue 和 h5 不存在此问题；造成差异的原因是小程序目前只提供了组件差量更新的机制，不能自动计算所有页面差量")]),a._v(" "),v("h3",{attrs:{id:"避免使用大图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#避免使用大图"}},[a._v("#")]),a._v(" 避免使用大图")]),a._v(" "),v("p",[a._v("页面中若大量使用大图资源，会造成页面切换的卡顿，导致系统内存升高，甚至白屏崩溃；对大体积的二进制文件进行 base64 ，也非常耗费资源."),v("br"),a._v("\n所以图片请压缩后使用，避免大图，必要时可以考虑雪碧图或svg，简单代码能实现的就不要图片")]),a._v(" "),v("p",[v("strong",[a._v("注：")]),a._v(" 大图会导致客户端内存占用上升，从而触发系统回收小程序页面；除了内存问题外，大图片也会造成页面切换的卡顿")]),a._v(" "),v("h3",{attrs:{id:"分包处理pages过多问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分包处理pages过多问题"}},[a._v("#")]),a._v(" 分包处理pages过多问题")]),a._v(" "),v("p",[a._v("小程序的分包，除了联网分段下载外，还可以减轻启动时加载的js数量，可以提升启动速度")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization",target:"_blank",rel:"noopener noreferrer"}},[a._v("前往官网手册查看配置"),v("OutboundLink")],1)]),a._v(" "),v("h3",{attrs:{id:"图片懒加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[a._v("#")]),a._v(" 图片懒加载")]),a._v(" "),v("p",[a._v("此功能只对微信小程序、App、百度小程序、字节跳动小程序有效，默认开启")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://www.uviewui.com/components/image.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("前往uView手册查看配置"),v("OutboundLink")],1)]),a._v(" "),v("h3",{attrs:{id:"可在外部定义变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可在外部定义变量"}},[a._v("#")]),a._v(" 可在外部定义变量")]),a._v(" "),v("p",[a._v("在 uni-app 中，定义在 "),v("code",[a._v("data")]),a._v(" 里面的数据每次变化时都会通知视图层重新渲染页面；所以如果不是视图所需要的变量，可以不定义在 "),v("code",[a._v("data")]),a._v(" 中，可在外部定义变量或直接挂载在 vue实例 上，以避免造成资源浪费")]),a._v(" "),v("h3",{attrs:{id:"避免视图层和逻辑层频繁进行通讯"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#避免视图层和逻辑层频繁进行通讯"}},[a._v("#")]),a._v(" 避免视图层和逻辑层频繁进行通讯")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("减少 scroll-view 组件的 scroll 事件监听，当监听 scroll-view 的滚动事件时，视图层会频繁的向逻辑层发送数据")])]),a._v(" "),v("li",[v("p",[a._v("监听  scroll-view  组件的滚动事件时，不要实时的改变  scroll-top / scroll-left  属性，因为监听滚动时，视图层向逻辑层通讯，改变  scroll-top / scroll-left  时，逻辑层又向视图层通讯，这样就可能造成通讯卡顿")])]),a._v(" "),v("li",[v("p",[a._v("注意 onPageScroll 的使用， onPageScroll 进行监听时，视图层会频繁的向逻辑层发送数据")])]),a._v(" "),v("li",[v("p",[a._v("多使用 css动画 ，而不是通过js的定时器操作界面做动画")])]),a._v(" "),v("li",[v("p",[a._v("如需在 canvas 里做跟手操作， app端 建议使用 renderjs ，小程序端建议使用 web-view 组件； web-view 里的页面没有逻辑层和视图层分离的概念，自然也不会有通信折损")])])]),a._v(" "),v("h3",{attrs:{id:"善用节流和防抖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#善用节流和防抖"}},[a._v("#")]),a._v(" 善用节流和防抖")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("防抖：")]),a._v(" 等待n秒后执行某函数，若等待期间再次被触发，则等待时间重新初始化")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("节流：")]),a._v(" 触发事件n秒内只执行一次，n秒未过，再次触发无效")])])]),a._v(" "),v("h3",{attrs:{id:"优化页面切换动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化页面切换动画"}},[a._v("#")]),a._v(" 优化页面切换动画")]),a._v(" "),v("p",[a._v("页面初始化时存在大量图片或原生组件渲染和大量数据通讯，会发生新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧")]),a._v(" "),v("p",[v("strong",[a._v("优化方案：")])]),a._v(" "),v("ul",[v("li",[v("p",[a._v("建议延时 100ms~300ms 渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量")])]),a._v(" "),v("li",[v("p",[a._v("App 端动画效果可以自定义; "),v("code",[a._v("popin/popout")]),a._v(" 的双窗体联动挤压动画效果对资源的消耗更大，如果动画期间页面里在执行耗时的js，可能会造成动画掉帧;此时可以使用消耗资源更小的动画效果，比如 "),v("code",[a._v("slide-in-right / slide-out-right")])])]),a._v(" "),v("li",[v("p",[a._v("App-nvue 和 H5 ，还支持页面预载，"),v("a",{attrs:{href:"https://uniapp.dcloud.io/api/preload-page",target:"_blank",rel:"noopener noreferrer"}},[a._v("uni.preloadPage"),v("OutboundLink")],1),a._v("，可以提供更好的使用体验")])])]),a._v(" "),v("h3",{attrs:{id:"优化背景色闪白"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化背景色闪白"}},[a._v("#")]),a._v(" 优化背景色闪白")]),a._v(" "),v("p",[a._v("进入新页面时背景闪白，如果页面背景是深色，在vue页面中可能会发生新窗体刚开始动画时是灰白色背景，动画结束时才变为深色背景，造成闪屏")]),a._v(" "),v("p",[v("strong",[a._v("优化方案：")])]),a._v(" "),v("ul",[v("li",[v("p",[a._v("将样式写在  App.vue  里，可以加速页面样式渲染速度； App.vue  里面的样式是全局样式，每次新开页面会优先加载  App.vue  里面的样式，然后加载普通 vue 页面的样式")])]),a._v(" "),v("li",[v("p",[a._v("app端 还可以在 "),v("code",[a._v("pages.json")]),a._v(" 的页面的 "),v("code",[a._v("style")]),a._v(" 里单独配置页面原生背景色，比如在 "),v("code",[a._v("globalStyle->style->app-plus->background")]),a._v(" 下配置全局背景色")]),a._v(" "),v("p",[v("code",[a._v('"style": { "app-plus": { "background":"#000000" } }')])])]),a._v(" "),v("li",[v("p",[a._v("nvue页面不存在此问题，也可以更改为nvue页面")])])]),a._v(" "),v("h3",{attrs:{id:"优化启动速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化启动速度"}},[a._v("#")]),a._v(" 优化启动速度")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("工程代码越多，包括背景图和本地字体文件越大，对小程序启动速度有影响，应注意控制体积")])]),a._v(" "),v("li",[v("p",[a._v("App端的 splash 关闭有白屏检测机制，如果首页一直白屏或首页本身就是一个空的中转页面，可能会造成 splash 10秒才关闭")])]),a._v(" "),v("li",[v("p",[a._v("App端使用v3编译器，首页为 nvue页面 时，并设置为fast启动模式，此时App启动速度最快")])]),a._v(" "),v("li",[v("p",[a._v('App设置为纯 nvue项目 （manifest里设置app-plus下的renderer:"native"），这种项目的启动速度更快，2秒即可完成启动；因为它整个应用都使用原生渲染，不加载基于webview的那套框架')])])]),a._v(" "),v("h3",{attrs:{id:"优化包体积"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化包体积"}},[a._v("#")]),a._v(" 优化包体积")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("uni-app 发行到小程序时，如果使用了 es6 转 es5 、css 对齐的功能，可能会增大代码体积，可以配置这些编译功能是否开启")])]),a._v(" "),v("li",[v("p",[a._v("uni-app 的 H5端，uni-app 提供了摇树优化机制，未摇树优化前的 uni-app 整体包体积约 500k，服务器部署 gzip 后162k。开启摇树优化需在 "),v("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/manifest?id=optimization",target:"_blank",rel:"noopener noreferrer"}},[a._v("manifest配置"),v("OutboundLink")],1)])]),a._v(" "),v("li",[v("p",[a._v("uni-app 的 App端，Android 基础引擎约 9M ，App 还提供了扩展模块，比如地图、蓝牙等，打包时如不需要这些模块，可以裁剪掉，以缩小发行包；体积在 manifest.json-App 模块权限里可以选择")])]),a._v(" "),v("li",[v("p",[a._v('App端支持如果选择纯nvue项目 （manifest里设置app-plus下的renderer:"native"），包体积可以进一步减少2M左右')])]),a._v(" "),v("li",[v("p",[a._v("App端在 HBuilderX 2.7 后，App 端下掉了 非v3 的编译模式，包体积下降了3M")])])]),a._v(" "),v("h3",{attrs:{id:"禁止滥用外部js插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#禁止滥用外部js插件"}},[a._v("#")]),a._v(" 禁止滥用外部js插件")]),a._v(" "),v("p",[a._v("有官方API的就不要额外引用js插件增加项目体积")])])}),[],!1,null,null,null);t.default=s.exports}}]);