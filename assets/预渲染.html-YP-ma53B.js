import{_ as p,r as t,o,c,b as n,d as s,a as e,e as l}from"./app-ly5YjvTc.js";const i={},r=n("h1",{id:"预渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#预渲染","aria-hidden":"true"},"#"),s(" 预渲染")],-1),u={href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"PrerenderSPAPlugin",-1),k=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 首先，这是插件的入口</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> PrerenderSPAPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;prerender-spa-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Renderer <span class="token operator">=</span> PrerenderSPAPlugin<span class="token punctuation">.</span>PuppeteerRenderer

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">PrerenderSPAPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 必需 - webpack 打包输出路径</span>
        <span class="token literal-property property">staticDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 可选 - 渲染后输出的目录位置，默认就是 staticDir 目录</span>
        <span class="token literal-property property">outputDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;prerendered&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 可选 - 启动的主页</span>
        <span class="token comment">// 默认就是 打包输入路径里的 \`index.html\`</span>
        <span class="token literal-property property">indexPath</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 必需 - 要预渲染哪些页面</span>
        <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/some/deep/nested/route&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 可选 - 允许在内容在最终写入到文件之前进行定义的修改，postProcess 提供一个参数 renderedRoute</span>
        <span class="token comment">// renderedRoute 应该是与当前渲染内容相关的信息，通过修改它还修改最终输出的内容</span>
        <span class="token comment">// renderedRoute 包含的属性:</span>
        <span class="token comment">// {</span>
        <span class="token comment">//   route: String, // Where the output file will end up (relative to outputDir)？</span>
        <span class="token comment">//   originalRoute: String, // The route that was passed into the renderer, before redirects.</span>
        <span class="token comment">//   html: String, // 当前路径下的 HTML</span>
        <span class="token comment">//   outputPath: String // 当路由页面的输出路径</span>
        <span class="token comment">// }</span>
        <span class="token function">postProcess</span> <span class="token punctuation">(</span><span class="token parameter">renderedRoute</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 忽略任何重定向</span>
          renderedRoute<span class="token punctuation">.</span>route <span class="token operator">=</span> renderedRoute<span class="token punctuation">.</span>originalRoute
          <span class="token comment">// 删除空格. (Don&#39;t use this in production)</span>
          renderedRoute<span class="token punctuation">.</span>html <span class="token operator">=</span> renderedRoute<span class="token punctuation">.</span>html<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&gt;[\\s]+&lt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gmi</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&lt;&#39;</span><span class="token punctuation">)</span>
          <span class="token comment">// 如果目录名以.html文件扩展名结尾，则从输出路径中删除/index.html.</span>
          <span class="token comment">// 例如: /dist/dir/special.html/index.html -&gt; /dist/dir/special.html</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>renderedRoute<span class="token punctuation">.</span>route<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            renderedRoute<span class="token punctuation">.</span>outputPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> renderedRoute<span class="token punctuation">.</span>route<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> renderedRoute
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 可选 - Uses html-minifier (https://github.com/kangax/html-minifier)</span>
        <span class="token comment">// 输出渲染结果的优化配置.</span>
        <span class="token comment">// Option reference: https://github.com/kangax/html-minifier#options-quick-reference</span>
        <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">collapseBooleanAttributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">decodeEntities</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">keepClosingSlash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sortAttributes</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token comment">// Server configuration options.</span>
        <span class="token comment">// server 属性在最终输出的纯静态的页面中是不起作用的，他的作用仅限于你项目中有数据请求是从接口哪里拿到的</span>
        <span class="token comment">// 防止插件运行过程中因为数据拿不到导致报错，渲染失败情况</span>
        <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// Normally a free port is autodetected, but feel free to set this if needed.</span>
          <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8001</span><span class="token punctuation">,</span>
          <span class="token comment">// proxy 接口代理，与vue的devServer相同</span>
          <span class="token literal-property property">proxy</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">&#39;http://www.lanjz.com&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否跨域</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 实际使用的渲染器</span>
        <span class="token comment">// Available renderers: https://github.com/Tribex/prerenderer/tree/master/renderers</span>
        <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Renderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 可选 - 要注入到全局环境的中变量名，这个变量名的值为下面 inject 配置内容</span>
          <span class="token literal-property property">injectProperty</span><span class="token operator">:</span> <span class="token string">&#39;__PRERENDER_INJECTED&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 可选 - __PRERENDER_INJECTED 的值.</span>
          <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          
          <span class="token comment">// 可选 - 默认为0，没有限制</span>
          <span class="token comment">// 异步渲染路由.</span>
          <span class="token comment">// 使用它来限制并行渲染的路由数量</span>
          <span class="token literal-property property">maxConcurrentRoutes</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          
          <span class="token comment">// 可选 - 在特定的事件触发后再开始渲染</span>
          <span class="token comment">// 如：当前配置表示执行 document.dispatchEvent(new Event(&#39;custom-render-trigger&#39;)) 事件后再显示内容</span>
          <span class="token literal-property property">renderAfterDocumentEvent</span><span class="token operator">:</span> <span class="token string">&#39;custom-render-trigger&#39;</span><span class="token punctuation">,</span>
          
          <span class="token comment">// 可选 - 检测到特别元素时再呈现内容。 使用 \`document.querySelector\`</span>
          <span class="token literal-property property">renderAfterElementExists</span><span class="token operator">:</span> <span class="token string">&#39;my-app-element&#39;</span><span class="token punctuation">,</span>
          
          <span class="token comment">// 可选 - 等待多久时间后再渲染</span>
          <span class="token comment">// 不推荐使用</span>
          <span class="token literal-property property">renderAfterTime</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// Wait 5 seconds.</span>
          
          <span class="token comment">// Other puppeteer options.</span>
          <span class="token comment">// (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)</span>
          <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// Display the browser window when rendering. Useful for debugging.</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作方式" tabindex="-1"><a class="header-anchor" href="#工作方式" aria-hidden="true">#</a> 工作方式</h3><p>PrerenderSPAPlugin 插件另启动一个 <code>webpack-dev-server</code> 服务，将完整的项目运行在无头浏览器中，再使用 <code>puppeteer</code> 把对应路由的页面爬取下来</p><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><p><strong>添加 Webpack 配置</strong></p><p>以 <code>vue.config.js</code> 为例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> PrerenderSPAPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;prerender-spa-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Renderer <span class="token operator">=</span> PrerenderSPAPlugin<span class="token punctuation">.</span>PuppeteerRenderer

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 微应用的包名，这里与主应用中注册的微应用名称一致</span>
      <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&quot;VueMicroApp&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 将你的 library 暴露为所有的模块定义下都可运行的方式</span>
      <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可</span>
      <span class="token literal-property property">jsonpFunction</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">webpackJsonp_VueMicroApp</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">PrerenderSPAPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">staticDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。</span>
        <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/vue/home&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 因为该系统操作都是基于登录后的，所以只做登录页面的预渲染就行了</span>
        <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Renderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// 在 main.js 中 document.dispatchEvent(new Event(&#39;render-event&#39;))，两者的事件名称要对应上。</span>
          <span class="token literal-property property">renderAfterDocumentEvent</span><span class="token operator">:</span> <span class="token string">&#39;render-event&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面插件配置中，添加了配置项 <code>enderAfterDocumentEvent: &#39;render-event&#39;</code>，表示在页面触发 <code>render-event</code> 后再开始渲染。为了正确抓取到完整的页面应该在页面加载完再开始预渲染，所以需要在页面加载完成后再触发对应的事件</p><p><strong>在应用中添加开始预渲染的事件</strong></p><p>在入口 <code>App.vue</code> 的 <code>mounted</code> 钩子中添加事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;render-event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常的话重新打包就可以生预渲染页面</p><p>如果需要添加对应的 <code>keywords</code>, <code>description</code> 等信息，可以配置 <code>vue-meta-info</code> 配置使用</p><p><strong>添加 <a href="%5Bhttps://www.npmjs.com/package/vue-meta-info">vue-meta-info</a></strong></p><p><code>yarn add vue-meta-info</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> MetaInfo <span class="token keyword">from</span> <span class="token string">&#39;vue-meta-info&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MetaInfo<span class="token punctuation">)</span>

<span class="token comment">// 需要添加 meta 的组件添加钩子</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">metaInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;My Example App&#39;</span><span class="token punctuation">,</span> <span class="token comment">// set a title</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>                 <span class="token comment">// set meta</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;keyWords&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;My Example App&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预渲染和服务端渲染" tabindex="-1"><a class="header-anchor" href="#预渲染和服务端渲染" aria-hidden="true">#</a> 预渲染和服务端渲染</h2><p>预渲染我理解的话很像静态网站生成器的，所以如果页面基本静态且涉及的接口数据少的话挺合适的。</p><p>本质相当于为打包出的 <code>html</code> 页面在挂载元素中添加了 DOM 内容，这样渲染的时候就可以马上呈现出容，之后加载 JS 脚本后，挂载元素再被 <code>vue</code> 动态渲染的内容所代替</p><p><strong>服务端渲染</strong></p><p>服务端渲染时页面的内容渲染是在服务端进行的，客户端加载后不会重新加载 DOM 元素，这一点应该就是最主要的区别了</p>`,21),v={href:"https://blog.csdn.net/qq_37564189/article/details/106090414",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const a=t("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[s("Vue 官方提供了 "),n("a",u,[d,e(a)]),s(" 插件来实现预渲染。使用方式如下：")]),k,n("blockquote",null,[n("p",null,[n("a",v,[s("vue-cli+prerender-spa-plugin配置SEO"),e(a)])])])])}const h=p(i,[["render",m],["__file","预渲染.html.vue"]]);export{h as default};
