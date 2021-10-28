(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{885:function(e,a,t){"use strict";t.r(a);var r=t(63),l=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"requestidlecallback和requestanimationframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback和requestanimationframe"}},[e._v("#")]),e._v(" requestIdleCallback和requestAnimationFrame")]),e._v(" "),t("p",[e._v("页面是一帧一帧绘制出来的，当每秒绘制的帧数（FPS）达到 60 时，页面是流畅的，小于这个值时，用户会感觉到卡顿。")]),e._v(" "),t("p",[e._v("1s 60帧，所以每一帧分到的时间是 1000/60 ≈ 16 ms")]),e._v(" "),t("p",[e._v("一帧内需要完成如下六个步骤的任务：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("处理用户的交互")])]),e._v(" "),t("li",[t("p",[e._v("JS 解析执行")])]),e._v(" "),t("li",[t("p",[e._v("帧开始。窗口尺寸变更，页面滚去等的处理")])]),e._v(" "),t("li",[t("p",[e._v("requestAnimationFrame")])]),e._v(" "),t("li",[t("p",[e._v("布局")])]),e._v(" "),t("li",[t("p",[e._v("绘制")])])]),e._v(" "),t("h2",{attrs:{id:"requestanimationframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("window.requestAnimationFrame()")]),e._v(" 告诉浏览器希望执行一个动画，并且要求浏览器在下次重排重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行")]),e._v(" "),t("h2",{attrs:{id:"requestidlecallback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestIdleCallback"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("上文说到页面一帧（16ms）需要大致执行六个步骤，当上面六个步骤完成后没超过 16 ms，说明时间有富余，此时就会执行 "),t("code",[e._v("requestIdleCallback")]),e._v(" 里注册的任务")]),e._v(" "),t("p",[t("code",[e._v("window.requestIdleCallback()")]),e._v(" 方法将在浏览器的空闲时段内调用的函数排队")])])}),[],!1,null,null,null);a.default=l.exports}}]);