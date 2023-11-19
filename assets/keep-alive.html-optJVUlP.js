import{_ as n,r as s,o as p,c as o,b as e,d as t,a as c,e as l}from"./app-NJfECqZf.js";const r={},i=l(`<h1 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> keep-alive</h1><p>HTTP <code>keep-alive</code> 也称为 HTTP 长连接, 是一个通用消息头。它通过重用一个 TCP 连接来发送/接收多个 HTTP请求，来减少创建/关闭多个 TCP 连接的开销。</p><p>在 Http 1.0 中，Keep-Alive是没有官方支持的，但是也有一些 Server 端支持</p><p>Http1.1 以后，Keep-Alive 已经默认支持并开启</p><h2 id="使用keep-alive" tabindex="-1"><a class="header-anchor" href="#使用keep-alive" aria-hidden="true">#</a> 使用<code>keep-alive</code></h2><p>客户端（包括但不限于浏览器）发送请求时会在 Header 中增加一个请求头 <code>Connection: Keep-Alive</code>，当服务器收到附带有 <code>Connection: Keep-Alive</code> 的请求时，也会在响应头中添加 <code>Keep-Alive</code>, 这样一来，客户端和服务器之间的 HTTP 连接就会被保持，不会断开（断开方式下面介绍），当客户端发送另外一个请求时，就可以复用已建立的连接。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">200</span> <span class="token constant">OK</span>
<span class="token literal-property property">Connection</span><span class="token operator">:</span> Keep<span class="token operator">-</span>Alive
Content<span class="token operator">-</span>Encoding<span class="token operator">:</span> gzip
Content<span class="token operator">-</span>Type<span class="token operator">:</span> text<span class="token operator">/</span>html<span class="token punctuation">;</span> charset<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span>
<span class="token literal-property property">Date</span><span class="token operator">:</span> Thu<span class="token punctuation">,</span> <span class="token number">11</span> Aug <span class="token number">2016</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">23</span><span class="token operator">:</span><span class="token number">13</span> <span class="token constant">GMT</span>
Keep<span class="token operator">-</span>Alive<span class="token operator">:</span> timeout<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> max<span class="token operator">=</span><span class="token number">1000</span>
Last<span class="token operator">-</span>Modified<span class="token operator">:</span> Mon<span class="token punctuation">,</span> <span class="token number">25</span> Jul <span class="token number">2016</span> <span class="token number">04</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">39</span> <span class="token constant">GMT</span>
<span class="token literal-property property">Server</span><span class="token operator">:</span> <span class="token function">Apache</span>

<span class="token punctuation">(</span>body<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>timeout</code>: 空闲时保持打开状态的最小时长（以秒为单位）</p></li><li><p><code>max</code>: 在连接关闭之前，在此连接可以发送的请求的最大值</p></li></ul><h2 id="keep-alive不足之处" tabindex="-1"><a class="header-anchor" href="#keep-alive不足之处" aria-hidden="true">#</a> <code>keep-alive</code>不足之处</h2><p>保持连接是比较浪费资源的，可能会非常影响性能，因为它在文件被请求之后还保持了不必要的连接很长时间，额外占用了服务端的连接数</p><h2 id="http-连接复用后怎样断开连接" tabindex="-1"><a class="header-anchor" href="#http-连接复用后怎样断开连接" aria-hidden="true">#</a> Http 连接复用后怎样断开连接</h2><p>Http 协议规定了两种关闭复用连接的方式：</p><p><strong>通过 Keep-Alive Timeout 标识</strong></p><p>如果服务端 Response Header 设置了 <code>Keep-Alive:timeout={timeout}</code>，客户端会就会保持此连接 <code>timeout</code>（单位秒）时间，超时之后关闭连接。</p><p><code>Keep-Alive: timeout=5, max=1000</code></p><p><strong>Connection close</strong></p><p>客户端发送Header头：<code>Connection: close</code></p><h2 id="服务端开启keep-alive" tabindex="-1"><a class="header-anchor" href="#服务端开启keep-alive" aria-hidden="true">#</a> 服务端开启keep-alive</h2><p>Httpd 守护进程，一般都提供了 <code>keep-alive timeout</code> 时间设置参数, <code>nginx</code> 本身仅支持一个<code> keepalive_timeout</code> 指令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>location <span class="token operator">/</span>cqjt<span class="token operator">/</span> <span class="token punctuation">{</span>   
    alias <span class="token operator">/</span>url<span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span><span class="token punctuation">;</span>   
    keepalive_timeout  <span class="token number">75</span><span class="token punctuation">;</span>   
    expires 5m<span class="token punctuation">;</span>   
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcp-keep-alive" tabindex="-1"><a class="header-anchor" href="#tcp-keep-alive" aria-hidden="true">#</a> tcp keep-alive</h2><p><code>tcp keep-alive</code> 与 <code>http keep-alive</code>，不是同一回事</p><p><code>tcp keep-alive</code> 是TCP的一种检测TCP[连接]状况的保鲜机制,定时发送一个空的 TCP Segment，来监测连接是否存活</p><p><strong>如何设置它?</strong></p><p>KeepAlive都支持哪些设置项</p><ul><li><p><code>tcp_keepalive_time: KeepAlive</code> 的空闲时长，或者说每次正常发送心跳的周期，默认值为<code>7200s（2小时）</code></p></li><li><p><code>tcp_keepalive_intvl</code>: KeepAlive探测包的发送间隔，默认值为75s</p></li><li><p><code>tcp_keepalive_probes</code>: 在<code>tcp_keepalive_time</code>之后，没有接收到对方确认，继续发送保活探测包次数，默认值为9（次）</p></li></ul>`,26),d={href:"https://zhuanlan.zhihu.com/p/28894266",target:"_blank",rel:"noopener noreferrer"};function k(u,v){const a=s("ExternalLinkIcon");return p(),o("div",null,[i,e("p",null,[e("a",d,[t("聊聊 TCP 中的 KeepAlive 机制"),c(a)])])])}const h=n(r,[["render",k],["__file","keep-alive.html.vue"]]);export{h as default};
