import{_ as t,r,o as c,c as n,b as e,d as a,a as l,e as d}from"./app-NJfECqZf.js";const p={},s=d('<h1 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏" aria-hidden="true">#</a> 内存泄漏</h1><p>不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）</p><p>来看下前端容易出现的内存泄漏</p><p><strong>意外的全局变量</strong></p><p>javascript 对未声明变量会在全局最高对象上创建它的引用，（是以属性存在的，而不是变量），如果在浏览器上就是 <code>window</code> 对象，如果在 node 环境下就是<code>global</code>; 如果未声明的变量缓存大量的数据，它可能只有在页面被刷新或者被关闭的时候才会释放内存，这样就造成了内存意外泄漏</p><p><strong>console.log</strong></p><p>作为前端平时使用 <code>console.log</code> 在控制台打出相对应的信息可以说是非常常见。但如果没有去掉 <code>console.log</code> 可能会存在内存泄漏。因为在代码运行之后需要在开发工具能查看对象信息，所以传递给 <code>console.log</code> 的对象是不能被垃圾回收。</p><p><strong>闭包</strong></p><p>首先闭包是一个函数A返回一个内联的函数B，即使A函数执行完，函数B也可以访问函数A里面的变量，这就是一个简单的闭包。本质上闭包是将函数内部和外部连接起来的一座桥梁</p><p><strong>DOM泄漏</strong></p><p>为了减少DOM的操作，我们一般将常用的DOM采用变量引用的方式会将其缓存在当前环境。如果在进行一些删除、更新操作之后，可能会忘记释放已经缓存的DOM,导到内存泄漏</p><p><strong>被遗忘的定时器</strong></p><p>常用的定时器 <code>setInterval()</code>、<code>setTimeout()</code>，他们都是规定延迟一定的时间执行某个代码，而其中 <code>setInterval()</code> 和链式 <code>setTimeout()</code> 在使用完之后如果没有手动关闭，会一直存在执行占用内存，所以在不用的时候我们可以通过 <code>clearInterval()</code> 、<code>clearTimeout()</code> 来关闭其对应的定时器，释放内存</p><h2 id="内存泄漏的识别方法" tabindex="-1"><a class="header-anchor" href="#内存泄漏的识别方法" aria-hidden="true">#</a> 内存泄漏的识别方法</h2><ol><li><p>使用快捷键 F12 或者 Ctrl+Shift+J 打开 Chrome 浏览器的「开发者工具」</p></li><li><p>选择 Performance(老版为Timeline) 选项卡，在 Capture 选项中，只勾选 Memory。</p></li><li><p>设置完成后，点击最左边的 Record 按钮，然后就可以访问网页了。</p></li><li><p>在页面上进行各种操作，模拟用户的使用情况</p></li><li><p>一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况</p></li></ol>',15),i={href:"http://www.ayqy.net/blog/js%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E6%8E%92%E6%9F%A5%E6%96%B9%E6%B3%95/",target:"_blank",rel:"noopener noreferrer"};function _(h,g){const o=r("ExternalLinkIcon");return c(),n("div",null,[s,e("p",null,[e("a",i,[a("JS内存泄漏排查方法"),l(o)])])])}const f=t(p,[["render",_],["__file","内存泄漏.html.vue"]]);export{f as default};
