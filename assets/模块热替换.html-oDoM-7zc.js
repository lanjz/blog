import{_ as t,r as c,o as p,c as i,b as n,d as e,a,e as o}from"./app-Ald2FT2K.js";const l={},d=o(`<h1 id="hotmoduleplacement" tabindex="-1"><a class="header-anchor" href="#hotmoduleplacement" aria-hidden="true">#</a> HotModulePlacement</h1><p><img src="https://user-gold-cdn.xitu.io/2019/9/2/16cf203824359397?imageView2/0/w/1280/h/960/ignore-error/1" alt=""></p><h2 id="服务器部分" tabindex="-1"><a class="header-anchor" href="#服务器部分" aria-hidden="true">#</a> 服务器部分</h2><ul><li><p>启动<code>webpack-dev-server</code>服务器，源代码地址<code>@webpack-dev-server/webpack-dev-server.js#L173</code></p></li><li><p>创建 Webpack 实例，源代码地址<code>@webpack-dev-server/webpack-dev-server.js#L89</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建 Server 服务器，源代码地址@webpack-dev-server/webpack-dev-server.js#L107</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>compiler <span class="token operator">=</span> compiler
  <span class="token punctuation">}</span>
  <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">port</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">服务器已经在</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">端口上启动了</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加 Webpack 的<code>done</code>事件回调，源代码地址<code>@webpack-dev-server/Server.js#L122</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sockets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> lasthash
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dev-server&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      lasthash <span class="token operator">=</span> stats<span class="token punctuation">.</span>hash
      <span class="token comment">// 每当新一个编译完成后都会向客户端发送消息</span>
      sockets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">socket</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span> stats<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token comment">// 先向客户端发送最新的hash值</span>
        socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 再向客户端发送一个ok</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Webpack 编译后提供提供了一系列钩子函数，以供插件能访问到它的各个生命周期节点，并对其打包内容做修改。<code>compiler.hooks.done</code>则是插件能修改其内容的最后一个节点。</p><p>编译完成通过 Socket 向客户端发送消息，推送每次编译产生的 <code>hash</code>。另外如果是热更新的话，还会产出二个补丁文件， 里面描述了从上一次结果到这一次结果都有哪些 chunk 和模块发生了变化。</p><p>使用<code>let sockets = []</code>数组去存放当打开了多个Tab时每个Tab的 socket实例。</p></li><li><p>创建express应用app，源代码地址<code>@webpack-dev-server/Server.js#L123</code></p><p><code>let app = new express()</code></p></li><li><p>设置文件系统为内存文件系统,源代码地址<code>@webpack-dev-middleware/fs.js#L115</code></p><p><code>let fs = new MemoryFileSystem()</code></p><p>使用<code>MemoryFileSystem</code>将<code>compiler</code>的产出文件打包到内存中</p></li><li><p>添加<code>webpack-dev-middleware</code>中间件,中间件负责返回生成的文件，源代码地址<code>@webpack-dev-server/Server.js#L125</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// /index.html   dist/index.html</span>
    <span class="token keyword">let</span> filename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path<span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> stat <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stat<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断是否存在这个文件,如果在的话直接把这个读出来发给浏览器</span>
      <span class="token keyword">let</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
      <span class="token keyword">let</span> contentType <span class="token operator">=</span> mime<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> contentType<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> res<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">200</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>middleware<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用express启动了本地开发服务后，使用中间件去为其构造一个静态服务器，并使用了内存文件系统，使读取文件后存放到内存中，提高读写效率，最终返回生成的文件</p></li><li><p>启动webpack编译,源代码地址<code>@webpack-dev-middleware/index.js#L51</code>, 编译完成向客户端发送消息<code>@webpack-dev-server/Server.js#L184</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> compiler.watch({}, err =&gt; {
    console.log(&#39;又一次编译任务成功完成了&#39;)
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以监控的模式启动一次webpack编译，当编译成功之后执行回调</p></li><li><p>创建http服务器并启动服务，源代码地址<code>@webpack-dev-server/Server.js#L135</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  constructor(compiler) {
    // ...
    this.server = require(&#39;http&#39;).createServer(app)
    // ...
  }
  listen(port) {
    this.server.listen(port, () =&gt; {
      console.log(\`服务器已经在\${port}端口上启动了\`)
    })
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用sockjs在浏览器端和服务端之间建立一个 websocket 长连接，源代码地址<code>@webpack-dev-server/Server.js#L745</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>constructor(compiler) {
    // ...
    this.server = require(&#39;http&#39;).createServer(app)
    let io = require(&#39;socket.io&#39;)(this.server)
    io.on(&#39;connection&#39;, (socket) =&gt; {
      sockets.push(socket)
      socket.emit(&#39;hash&#39;, lastHash)
      socket.emit(&#39;ok&#39;)
    })
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建socket服务器，源代码地址<code>@webpack-dev-server/SockJSServer.js#L34</code></p><p>启动一个 websocketwebpack-dev-middleware服务器，然后等待连接来到，连接到来之后存进sockets池</p><p>当有文件改动，webpack重新编译时，向客户端推送<code>hash</code>和<code>ok</code>两个事件</p></li></ul><h2 id="客户端部分" tabindex="-1"><a class="header-anchor" href="#客户端部分" aria-hidden="true">#</a> 客户端部分</h2><ul><li><p><code>webpack-dev-server/client</code>端会监听到此hash消息，源代码地址<code>@webpack-dev-server/index.js#L54</code></p><p><code>&lt;script src=&quot;/socket.io/socket.io.js&quot;&gt;&lt;/script&gt;</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span> onConnected<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onConnected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;客户端连接成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> hotCurrentHash <span class="token comment">// lastHash 上一次 hash值 </span>
<span class="token keyword">let</span> currentHash <span class="token comment">// 这一次的hash值</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">hash</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  currentHash <span class="token operator">=</span> hash
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端收到ok的消息后会执行<code>reloadApp</code>方法进行更新，源代码地址<code>index.js#L101</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>socket.on(&#39;ok&#39;, () =&gt; {
  reloadApp(true)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>reloadApp</code>中会进行判断，是否支持热更新，如果支持的话发射<code>webpackHotUpdate</code>事件，如果不支持则直接刷新浏览器，源代码地址<code>reloadApp.js#L7</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 当收到ok事件后，会重新刷新app
function reloadApp(hot) {
  if (hot) { // 如果hot为true 走热更新的逻辑
    hotEmitter.emit(&#39;webpackHotUpdate&#39;)
  } else { // 如果不支持热更新，则直接重新加载
    window.location.reload()
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>webpack/hot/dev-server.js</code>会监听<code>webpackHotUpdate</code>事件，源代码地址<code>dev-server.js#L55</code></p><p>首先需要一个发布订阅去绑定事件并在合适的时机触发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Emitter {
  constructor() {
    this.listeners = {}
  }
  on(type, listener) {
    this.listeners[type] = listener
  }
  emit(type) {
    this.listeners[type] &amp;&amp; this.listeners[type]()
  }
}
let hotEmitter = new Emitter()
hotEmitter.on(&#39;webpackHotUpdate&#39;, () =&gt; {
  if (!hotCurrentHash || hotCurrentHash == currentHash) {
    return hotCurrentHash = currentHash
  }
  hotCheck()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会判断是否为第一次进入页面和代码是否有更新。</p></li><li><p>在<code>check</code>方法里会调用<code>module.hot.check</code>方法,源代码地址<code>dev-server.js#L13</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function hotCheck() {
  hotDownloadManifest().then(update =&gt; {
    let chunkIds = Object.keys(update.c)
    chunkIds.forEach(chunkId =&gt; {
      hotDownloadUpdateChunk(chunkId)
    })
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>HotModuleReplacement.runtime</code>请求<code>Manifest</code>,源代码地址<code>HotModuleReplacement.runtime.js#L180</code></p></li><li><p>它通过调用 <code>JsonpMainTemplate.runtime</code>的<code>hotDownloadManifest</code>方法,源代码地址<code>JsonpMainTemplate.runtime.js#L23</code></p><p>上面也提到过webpack每次编译都会产生hash值、已改动模块的json文件、已改动模块代码的js文件，</p><p>此时先使用<code>ajax</code>请求<code>Manifest</code>即服务器这一次编译相对于上一次编译改变了哪些<code>module</code>和<code>chunk</code></p><p>然后再通过<code>jsonp</code>获取这些已改动的<code>module</code>和<code>chunk</code>的代码。</p></li><li><p>调用<code>JsonpMainTemplate.runtime</code>的<code>hotDownloadUpdateChunk</code>方法通过JSONP请求获取到最新的模块代码，源代码地址<code>JsonpMainTemplate.runtime.js#L14</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function hotDownloadUpdateChunk(chunkId) {
let script = document.createElement(&#39;script&#39;)
script.charset = &#39;utf-8&#39;
// /main.xxxx.hot-update.js
script.src = &#39;/&#39; + chunkId + &quot;.&quot; + hotCurrentHash + &quot;.hot-update.js&quot;
document.head.appendChild(script)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里解释下为什么使用JSONP获取而不直接利用socket获取最新代码？主要是因为JSONP获取的代码可以直接执行</p></li><li><p>补丁JS取回来后会调用<code>JsonpMainTemplate.runtime.js</code>的<code>webpackHotUpdate</code>方法，源代码地址<code>JsonpMainTemplate.runtime.js#L8</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.webpackHotUpdate = function (chunkId, moreModules) {
  // 循环新拉来的模块
  for (let moduleId in moreModules) {
    // 从模块缓存中取到老的模块定义
    let oldModule = __webpack_require__.c[moduleId]
    // parents哪些模块引用这个模块 children这个模块引用了哪些模块
    // parents=[&#39;./src/index.js&#39;]
    let {
      parents,
      children
    } = oldModule
    // 更新缓存为最新代码 缓存进行更新
    let module = __webpack_require__.c[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
      parents,
      children,
      hot: window.hotCreateModule(moduleId)
    }
    moreModules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    module.l = true // 状态变为加载就是给module.exports 赋值了
    parents.forEach(parent =&gt; {
      // parents=[&#39;./src/index.js&#39;]
      let parentModule = __webpack_require__.c[parent]
      // _acceptedDependencies={&#39;./src/title.js&#39;,render}
      parentModule &amp;&amp; parentModule.hot &amp;&amp; parentModule.hot._acceptedDependencies[moduleId] &amp;&amp; parentModule.hot._acceptedDependencies[moduleId]()
    })
    hotCurrentHash = currentHash
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后会调用<code>HotModuleReplacement.runtime.js</code>的<code>hotAddUpdateChunk</code>方法动态更新模块代码，源代码地址<code>HotModuleReplacement.runtime.js#L222</code></p></li><li><p>然后调用<code>hotApply</code>方法进行热更新，源代码地址<code>HotModuleReplacement.runtime.js#L257</code>、<code>HotModuleReplacement.runtime.js#L278</code></p></li></ul><h1 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h1><p><strong>webpack 可以将不同的模块打包成 bundle 文件或者几个 chunk 文件，但是当我通过 webpack HMR 进行开发的过程中，我并没有在我的 dist 目录中找到 webpack 打包好的文件，它们去哪呢？</strong></p><p><code>webpack-dev-server</code>使用内存文件系统,来保存打包的文件，利用了<code>memory-fs</code>模块，之所以这么做是因为访问内存中的代码比访问文件系统中的文件更快，而且也减少了代码写入文件的开销</p><p><strong>通过查看 webpack-dev-server 的 package.json 文件，我们知道其依赖于 webpack-dev-middleware 库，那么 webpack-dev-middleware 在 HMR 过程中扮演什么角色？</strong></p><p>使用中间件去为其构造一个静态服务器，并使用了内存文件系统，使读取文件后存放到内存中，提高读写效率，最终返回生成的文件</p><p><strong>使用 HMR 的过程中，通过 Chrome 开发者工具我知道浏览器是通过 websocket 和 webpack-dev-server 进行通信的，但是 websocket 的 message 中并没有发现新模块代码。打包后的新模块又是通过什么方式发送到浏览器端的呢？</strong></p><ol><li><p>编译完成通过socket向客户端发送消息，推送每次编译产生的hash</p></li><li><p>此时先使用ajax请求Manifest即服务器这一次编译相对于上一次编译改变了哪些module和chunk。</p></li><li><p>然后再通过jsonp获取这些已改动的module和chunk的代码。</p></li></ol><p><strong>为什么新的模块不通过 websocket 随消息一起发送到浏览器端呢？</strong></p><p>因为通过socket通信获取的是一串字符串需要再做处理。而通过JSONP获取的代码可以直接执行。</p><p><strong>浏览器拿到最新的模块代码，HMR 又是怎么将老的模块替换成新的模块，在替换的过程中怎样处理模块之间的依赖关系？</strong></p><ul><li><p>从缓存中删除过期的模块和依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var queue = outdatedModules.slice();
while (queue.length &gt; 0) {
    moduleId = queue.pop();
    // 从缓存中删除过期的模块
    module = installedModules[moduleId];
    // 删除过期的依赖
    delete outdatedDependencies[moduleId];
    
    // 存储了被删掉的模块id，便于更新代码
    outdatedSelfAcceptedModules.push({
        module: moduleId
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新的模块添加到 <code>modules</code> 中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>appliedUpdate[moduleId] = hotUpdate[moduleId];
for (moduleId in appliedUpdate) {
    if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
        modules[moduleId] = appliedUpdate[moduleId];
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当下次调用 <code>__webpack_require__ </code>(webpack 重写的 <code>require</code> 方法)方法的时候，就是获取到了新的模块代码了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (i = 0; i &lt; outdatedSelfAcceptedModules.length; i++) {
    var item = outdatedSelfAcceptedModules[i];
    moduleId = item.module;
    try {
        // 执行最新的代码
        __webpack_require__(moduleId);
    } catch (err) {
        // ...容错处理
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>当模块的热替换过程中，如果替换模块失败，有什么回退机制吗？</strong></p><p>如果替换失败，则 <code>window.location.reload()</code></p><p><strong>为什么编辑<code>main.js</code>时还是刷新整个页面</strong></p><p>就如上一个问题所说的。其原因当块更新，更新事件会一层一层向上传递，当传递到了最外层 <code>main.js</code> 中，如果 <code>main.js</code> 中定义的 <code>accept</code> 函数就会被 <code>accept</code> 接收然后执行我们定义的 <code>callback</code> 函数。但是如果事件一直往上拋，到了最外层都没有文件接收它，则会直接刷新页面。</p><p>那为什么我们没定义接收 CSS 的地方，可修改 CSS 文件时，并不是刷新页面，而是触发模块热更新呢？</p><p>原因在于 <code>style-loader</code> 会注入用于接收 CSS 的代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
  <span class="token keyword">import</span> <span class="token string">&#39;./main.css&#39;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AppComponent<span class="token operator">&gt;</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 只有当开启了模块热替换时，module.hot才存在</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// module.hot.accept函数的第一个参数指出当前文件接收哪些子模块的替换，这里表示只接受&#39;./AppComponent&#39;这个子模块</span>
    <span class="token comment">// 第二个参数表示模块更新时要执行的逻辑</span>
    module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./AppComponent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AppComponent<span class="token operator">&gt;</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>WDS与浏览品之间维护一个 Websocket ，当本地资源发生变化后，WDS 会向浏览器推送更新，推送更新的模块 <code>hash</code>，让客户端与现有资源做 对比。客户端对比差异后，向WDS 发起 AJAX 请求来获取更改内容（文件列表, <code>hash</code>），这样客户端就可以借助这些信息继续向 WDS 发起 <code>jsonp</code> 请求 获取该 <code>chunk</code>的增量更新</p><p>后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 <code>HotModulePlugin</code> 来完成，提供了相关 API 以供开发者针对自身场景进行处理， <code>react-hot-loader</code> 和 <code>vue-loader</code> 都是借助这些 API 实现 HMR。</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><p>在发生模块热替换时，我们会在浏览器的控制台中看到一些输出信息，其中有 <code>Updated modules：[数字]</code>的信息输出，这个 <code>[数字]</code> 表示 <code>ID</code> 为几的模块被替换了，这对开发者不是很友好，因为开发都不知道<code>ID</code> 和模块之间的对应关系，最好是模块名字代替这个 <code>ID</code> 输出。Webpack 内置的 <code>NameModulesPlugin</code> 插件可以解决这个问题，修改 <code>Webpack</code> 配置文件接入该插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> NameModeulesPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack/lib/NameModulesPlugin&#39;</span><span class="token punctuation">)</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 显示出被替换模块的名称</span>
      <span class="token keyword">new</span> <span class="token class-name">NameModeulesPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新构建后，我们就能发现输出的日志发生了变化</p><p>除此之外，模块热替换还面临和自动刷新一样的性能问题，因为它们都需要监听文件的变化和注入客户端。优化模块热替换的构建性能的思路和之前优化自动更新的思路类似：监听更少的文件，忽略 <code>node_mosules</code> 目录下的文件。</p><p>但是其中提到的关闭默认的 <code>inline</code> 模式且手动注入代理客户端的优化方法，不能用于使用模块热替换的情况，原因在于模块热替换的运行依赖在每个 <code>Chunk</code> 中都包含代理客户端的代码。</p>`,33),u={href:"https://juejin.im/post/5d6d0ee5f265da03f66ddba9",target:"_blank",rel:"noopener noreferrer"},r={href:"https://zhuanlan.zhihu.com/p/30669007",target:"_blank",rel:"noopener noreferrer"};function v(k,m){const s=c("ExternalLinkIcon");return p(),i("div",null,[d,n("p",null,[n("a",u,[e("搞懂webpack热更新原理"),a(s)])]),n("p",null,[n("a",r,[e("Webpack HMR 原理解析"),a(s)])])])}const h=t(l,[["render",v],["__file","模块热替换.html.vue"]]);export{h as default};
