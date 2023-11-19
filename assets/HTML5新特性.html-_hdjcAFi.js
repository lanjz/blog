import{_ as t,r as o,o as p,c,b as n,d as s,a as l,e as a}from"./app-NJfECqZf.js";const i={},u=a(`<h1 id="html5新特性" tabindex="-1"><a class="header-anchor" href="#html5新特性" aria-hidden="true">#</a> HTML5新特性</h1><ul><li><p>Web Worker</p></li><li><p>WebSocket</p></li><li><p><code>Geolocation</code> - 定位用户的位置</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">pos</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//定位成功的回调</span>
　　　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;用户定位数据获取成功&#39;</span><span class="token punctuation">)</span>
　　　　<span class="token comment">//console.log(arguments);</span>
　　　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;定位时间：&#39;</span><span class="token punctuation">,</span>pos<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span>
　　　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;经度：&#39;</span><span class="token punctuation">,</span>pos<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span>
　　　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;纬度：&#39;</span><span class="token punctuation">,</span>pos<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span>
　　　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;海拔：&#39;</span><span class="token punctuation">,</span>pos<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>altitude<span class="token punctuation">)</span>
　　　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;速度：&#39;</span><span class="token punctuation">,</span>pos<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>speed<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>   
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//定位失败的回调</span>
　　  　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;用户定位数据获取失败&#39;</span><span class="token punctuation">)</span>
　  　　　<span class="token comment">//console.log(arguments);</span>
    <span class="token punctuation">}</span>  
  <span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>拖放API</p><p>拖放是一种常见的特性，即抓取对象以后拖到另一个位置。在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。</p></li></ul><p>拖放的过程分为源对象和目标对象。源对象是指你即将拖动元素，而目标对象则是指拖动之后要放置的目标位置。</p><p>源对象(可能发生移动的)可以触发的事件:</p><ul><li><p><code>dragstart</code>：拖动开始</p></li><li><p><code>drag</code>：拖动中</p></li><li><p><code>dragend</code>：拖动结束</p></li></ul><p>拖放的目标对象(不会发生移动)可以触发的事件:</p><ul><li><p><code>dragenter</code>：拖动者进入</p></li><li><p><code>dragover</code>：拖动者悬停</p></li><li><p><code>dragleave</code>：拖动者离开</p></li><li><p><code>drop</code>：释放</p></li></ul><p>拖动传递数据</p><ul><li><p>在拖动源对象事件中使用 <code>e.dataTransfer</code> 属性保存数据：<code>e.dataTransfer.setData( k, v )</code></p></li><li><p>在拖动目标对象事件中使用 <code>e.dataTransfer</code> 属性读取数据: <code>var value = e.dataTransfer.getData( k )</code></p></li><li><p>Canvas 绘图</p></li><li><p>SVG</p></li><li><p>更多语义化的标签</p><ul><li><p><code>hrader</code> - 定义了文档的头部区域</p></li><li><p><code>footer</code> - 定义了文档的尾部区域</p></li><li><p><code>nav</code> - 定义文档的导航</p></li><li><p><code>section</code> - 定义文档中的节（section、区段）</p></li><li><p><code>article</code> - 定义页面独立的内容区域</p></li><li><p><code>aside</code> - 定义页面的侧边栏内容</p></li><li><p><code>detailes</code> - 用于描述文档或文档某个部分的细节</p></li><li><p><code>summary</code> - 标签包含 details 元素的标题</p></li><li><p><code>dialog</code> - 定义对话框，比如提示框</p></li></ul></li><li><p>视频和音频</p><ul><li><p><code>audio</code> - 播放音频文件的标准</p></li><li><p><code>video</code> - 播放视频文件的标准</p></li></ul></li><li><p>增强型表单</p><p>HTML5 拥有多个新的表单 <code>input</code> 输入类型。这些新特性提供了更好的输入控制和验证,具体略</p></li></ul><h2 id="web-storage" tabindex="-1"><a class="header-anchor" href="#web-storage" aria-hidden="true">#</a> Web Storage</h2>`,12),r={id:"localstorage",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#localstorage","aria-hidden":"true"},"#",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API",target:"_blank",rel:"noopener noreferrer"},g=a(`<p><code>localstorage</code> 允许将数据长期保留在计算机中，以键值对我形式进行存储</p><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><ul><li><p>设置值：<code>localStorage.setItem(&#39;myCat&#39;, &#39;Tom&#39;)</code></p></li><li><p>读取值：<code>localStorage.getItem(&#39;myCat&#39;)</code></p></li><li><p>移除值：<code>localStorage.removeItem(&#39;myCat&#39;)</code></p></li><li><p>移除所有的 <code>localStorage</code> 项: <code>localStorage.clear()</code></p></li></ul><p>注意点：</p><ul><li><p>只可访问当前源的本地空间的<code>localstorage</code>对象</p></li><li><p>存储的类型会自动转化为字符串类型</p></li></ul><h3 id="监听localstorage变化" tabindex="-1"><a class="header-anchor" href="#监听localstorage变化" aria-hidden="true">#</a> 监听localStorage变化</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;storage&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.my-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.my-old&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> e<span class="token punctuation">.</span>oldValue<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.my-new&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> e<span class="token punctuation">.</span>newValue<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.my-url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> e<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.my-storage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> e<span class="token punctuation">.</span>storageArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong></p><ul><li><p>重复设置相同的键值不会触发该事件</p></li><li><p><code>Storage.clear()</code> 方法至多触发一次该事件</p></li><li><p>在同一个页面内发生的改变不会起作用</p></li><li><p>在相同域名下的其他页面（如一个新标签或 iframe）发生的改变才会起作用</p></li><li><p>在其他域名下的页面不能访问相同的 Storage 对象</p></li></ul><p><strong>如何在同一页面中监听 <code>localStorage</code> 的变化？</strong></p><p>通过重写 <code>localStorage</code> 的 <code>setItem</code> 方法实现监听 <code>localStorage</code> 的变化，思路如下：</p><ul><li><p>新建一个事件，并且监这个事件</p></li><li><p>在<code>localStorage.setItem</code>方法中使用<code>window.dispatchEvent</code>触发事件</p></li></ul><p>完整例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> orignalSetItem <span class="token operator">=</span> localStorage<span class="token punctuation">.</span>setItem<span class="token punctuation">;</span>
    localStorage<span class="token punctuation">.</span><span class="token function-variable function">setItem</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>newValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> setItemEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;setItemEvent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        setItemEvent<span class="token punctuation">.</span>newValue <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
        window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>setItemEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">orignalSetItem</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;setItemEvent&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h2><p><code>sessionStorage</code> 和 <code>localstorage</code> 类似，区别在于 <code>sessionStorage</code> 存在周期仅限于会话期间且<strong>只有在同一浏览器的同一窗口下才能够共享</strong></p><h3 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1" aria-hidden="true">#</a> 用法</h3><ul><li><p>设置值：<code>sessionStorage.setItem(&#39;myCat&#39;, &#39;Tom&#39;)</code></p></li><li><p>读取值：<code>sessionStorage.getItem(&#39;myCat&#39;)</code></p></li><li><p>移除值：<code>sessionStorage.removeItem(&#39;myCat&#39;)</code></p></li><li><p>移除所有的 <code>sessionStorage</code> 项: <code>sessionStorage.clear()</code></p></li></ul><h2 id="indexeddb" tabindex="-1"><a class="header-anchor" href="#indexeddb" aria-hidden="true">#</a> IndexedDB</h2><p>IndexedDB 具有以下特点：</p><p><strong>键值对储存</strong></p><p>IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以&quot;键值对&quot;的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误</p><p><strong>异步</strong></p><p>IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现</p><p><strong>支持事务</strong></p><p>IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。</p><p><strong>同源限制</strong></p><p>IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。</p><p><strong>储存空间大</strong></p><p>IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限</p><p><strong>支持二进制储存</strong></p><p>IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。</p><h2 id="前端储存方式小结" tabindex="-1"><a class="header-anchor" href="#前端储存方式小结" aria-hidden="true">#</a> 前端储存方式小结</h2><p><strong>cookies：</strong> 在HTML5标准前本地储存的主要⽅式，优点是兼容性好，请求头⾃带 cookie ⽅便，缺点是⼤⼩只有 4k，⾃动请求头加⼊ cookie 浪费流量，每个 domain 限制20个cookie，使⽤起来麻烦，需要⾃⾏封装；</p><p><strong>localStorage</strong>：HTML5加⼊的以键值对(Key-Value)为标准的⽅式，优点是操作⽅便，永久性储存（除⾮⼿动删除），⼤⼩为5M，兼容IE8+ ；</p><p><strong>sessionStorage：</strong> 与localStorage基本类似，区别是sessionStorage当⻚⾯关闭后会被清理，⽽且与cookie、localStorage不同，他不能在所有同源窗⼝中共享，是会话级别的储存⽅式；</p><p><strong>IndexedDB：</strong> 是被正式纳⼊HTML5标准的数据库储存⽅案，它是NoSQL数据库，⽤键值对进⾏储存，可以进⾏快速读取操作，⾮常适合web场景，同时⽤JavaScript进⾏操作会⾮常便。</p>`,37);function m(v,h){const e=o("ExternalLinkIcon");return p(),c("div",null,[u,n("h3",r,[d,s(),n("a",k,[s("localstorage"),l(e)])]),g])}const f=t(i,[["render",m],["__file","HTML5新特性.html.vue"]]);export{f as default};
