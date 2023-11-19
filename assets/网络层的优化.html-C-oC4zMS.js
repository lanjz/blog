import{_ as e,o as a,c as i,e as d}from"./app-NJfECqZf.js";const n={},s=d(`<h1 id="前端优化之-http-相关优化总结" tabindex="-1"><a class="header-anchor" href="#前端优化之-http-相关优化总结" aria-hidden="true">#</a> 前端优化之 Http 相关优化总结</h1><h2 id="减少静态资源文件大小" tabindex="-1"><a class="header-anchor" href="#减少静态资源文件大小" aria-hidden="true">#</a> 减少静态资源文件大小</h2><p>代码层次</p><ul><li>代码分割</li></ul><p>网络传输方面</p><ul><li><p>Http 启用压缩传输方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Content-Encoding: gzip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>合并请求</p></li></ul><h2 id="preload-预加载" tabindex="-1"><a class="header-anchor" href="#preload-预加载" aria-hidden="true">#</a> Preload 预加载</h2><p>使用 <code>link</code> 标签创建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 使用 link 标签静态标记需要预加载的资源--&gt;
&lt;link rel=&quot;preload&quot; href=&quot;/path/to/style.css&quot; as=&quot;style&quot;&gt;

&lt;!-- 或使用脚本动态创建一个 link 标签后插入到 head 头部--&gt;
&lt;script&gt;
const link = document.createElement(&#39;link&#39;);
link.rel = &#39;preload&#39;;
link.as = &#39;style&#39;;
link.href = &#39;/path/to/style.css&#39;;
document.head.appendChild(link);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 HTTP 响应头的 Link 字段创建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Link: &lt;https://example.com/other/styles.css&gt;; rel=preload; as=style
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 preload 场景示例：</p><p>如果需要，你可以完全以脚本化的方式来执行这些预加载操作。例如，我们在这里创建一个HTMLLinkElement 实例，然后将他们附加到 DOM 上：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var preloadLink = document.createElement(&quot;link&quot;);
preloadLink.href = &quot;myscript.js&quot;;
preloadLink.rel = &quot;preload&quot;;
preloadLink.as = &quot;script&quot;;
document.head.appendChild(preloadLink);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着浏览器将预加载这个JavaScript文件，但并不实际执行它。</p><p>如果要对其加以执行，在需要的时候，你可以执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var preloadedScript = document.createElement(&quot;script&quot;);
preloadedScript.src = &quot;myscript.js&quot;;
document.body.appendChild(preloadedScript);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载" aria-hidden="true">#</a> 懒加载</h2><h2 id="利用缓存" tabindex="-1"><a class="header-anchor" href="#利用缓存" aria-hidden="true">#</a> 利用缓存</h2><h2 id="http2-0" tabindex="-1"><a class="header-anchor" href="#http2-0" aria-hidden="true">#</a> HTTP2.0</h2><h2 id="使用cdn" tabindex="-1"><a class="header-anchor" href="#使用cdn" aria-hidden="true">#</a> 使用CDN</h2><h2 id="小图片使用base64" tabindex="-1"><a class="header-anchor" href="#小图片使用base64" aria-hidden="true">#</a> 小图片使用base64</h2><h2 id="图片合并" tabindex="-1"><a class="header-anchor" href="#图片合并" aria-hidden="true">#</a> 图片合并</h2><h2 id="样式表放顶-脚本放在底部" tabindex="-1"><a class="header-anchor" href="#样式表放顶-脚本放在底部" aria-hidden="true">#</a> 样式表放顶，脚本放在底部</h2><h2 id="传输内容压缩" tabindex="-1"><a class="header-anchor" href="#传输内容压缩" aria-hidden="true">#</a> 传输内容压缩</h2><p>开启压缩：</p><p>客户端设置：浏览器发送一个请求头，告诉服务器接受压缩版本的文件（<code>GZIP</code> 和 <code>Deflate</code> 是两种压缩算法）<code>Accept-Encoding: GZIP, Deflate</code></p><p>服务端开启:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;);
const app = express();
 
//express框架，前边肯定都是必要的，也就是只需安装compression组件，然后添加一下两句代码就好
const compression = require(&#39;compression&#39;);
app.use(compression());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),t=[s];function r(l,c){return a(),i("div",null,t)}const u=e(n,[["render",r],["__file","网络层的优化.html.vue"]]);export{u as default};
