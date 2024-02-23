import{_ as n,o as s,c as a,e as t}from"./app-VicZdUS9.js";const p={},e=t(`<h1 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> Extend</h1><p>使用 <code>Vue.extend</code> 方法使用创建一个“子类”。参数是一个包含组件选项的对象</p><p><code>data</code> 选项是特例，需要注意 - 在 <code>Vue.extend()</code> 中它必须是函数</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mount-point<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建构造器</span>
<span class="token keyword">var</span> Profile <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;{{firstName}} {{lastName}} aka {{alias}}&lt;/p&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Walter&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;White&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;Heisenberg&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建 Profile 实例，并挂载到一个元素上。</span>
<span class="token keyword">new</span> <span class="token class-name">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#mount-point&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Walter White aka Heisenberg<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>平时会使用 <code>Vue.extend</code> 制作 Vue 公共插件</p><p>下面通过两个组件示例来了解一下用法</p><h2 id="例子一-toast组件" tabindex="-1"><a class="header-anchor" href="#例子一-toast组件" aria-hidden="true">#</a> 例子一-Toast组件</h2><p>首先实现一个 <code>Toast</code> 组件</p><p>先实现 Toast 组件部分</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// Toast.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token comment">/*transform: translateX(-50%);*/</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.fade-enter-active, .fade-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> .3s ease-out<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  .fade-enter<span class="token punctuation">,</span> .fade-leave-to <span class="token comment">/* .fade-leave-active below version 2.1.8 */</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">/*  .fade-enter-to, fade-leave{
    opacity: 1;
    transform: translateY(50px);
  }*/</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>vue.extend</code> 生成 <code>toast</code> 组件实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// toast.js</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 这里就是我们刚刚创建的那个静态组件</span>
<span class="token keyword">import</span> toastComponent <span class="token keyword">from</span> <span class="token string">&#39;./Toast.vue&#39;</span>

<span class="token keyword">let</span> instance

<span class="token comment">// 返回一个 扩展实例构造器</span>
<span class="token keyword">const</span> ToastConstructor <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>toastComponent<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">initInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 生成 toast 组件实例</span>
  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ToastConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 获者 instance = new ToastConstructor().$mount(document.createElement(&#39;div&#39;))</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过 vue 实例就可以设置和获取实例中的属性和方法了</span>
<span class="token keyword">function</span> <span class="token function">initToast</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> options<span class="token punctuation">[</span>item<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将这个 vue 插入到 DOM 中</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 显示这个 toast</span>
  instance<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// 过一定时间后隐藏这个组件</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>duration<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注册为全局组件的函数</span>
<span class="token keyword">function</span> <span class="token function">registryToast</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;[object Object]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">initToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>defaultOptions<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> registryToast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再组装成插件，将方法保存到 <code>Vue.prototype</code> 中，这样就可以在作用所有组件中使用这个 <code>toast</code> 方法了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ./index.js</span>
<span class="token keyword">import</span> toast <span class="token keyword">from</span> <span class="token string">&#39;./toast.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$toast <span class="token operator">=</span> toast
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装这个插件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> toast <span class="token keyword">from</span> <span class="token string">&#39;../components/toast/index&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>toast<span class="token punctuation">)</span>

<span class="token comment">// 在组件中使用这个组件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;成功显示了&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子二-alert" tabindex="-1"><a class="header-anchor" href="#例子二-alert" aria-hidden="true">#</a> 例子二-Alert</h2><p>这个组件相比之前的 Toast 组件它多了一个回调方法</p><p>先实现组件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// MeaasgeBox.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-message-box-bg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-message-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-des<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === &#39;test&#39; &amp;&amp; content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{content}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-des<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === &#39;html&#39; &amp;&amp; content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-btn-operate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-btn cancel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showCancel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancel(false)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{cancelText}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-btn confirm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancel(true)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{confirmText}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">confirmText</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cancelText</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showCancel</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.hello-message-box-bg</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 999<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-message-box</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px 1px #c7c7c7<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-message-box .hello-title</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-content</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-des</span><span class="token punctuation">{</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-btn-operate</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> solid 1px #c7c7c7<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-btn-operate .hello-btn</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-btn-operate .confirm</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> dodgerblue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-btn-operate .hello-btn.cancel</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.hello-btn:not(:last-child)</span> <span class="token punctuation">{</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> solid 1px #c7c7c7<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.hello-message-box-bg</span><span class="token punctuation">{</span>
    <span class="token selector">img</span><span class="token punctuation">{</span>
      <span class="token property">max-width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">max-height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>vue.extend</code> 创建 <code>MeaasgeBox</code> 组件实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 这里就是我们刚刚创建的那个静态组件</span>
<span class="token keyword">import</span> toastComponent <span class="token keyword">from</span> <span class="token string">&#39;./MessageBox.vue&#39;</span>

<span class="token keyword">let</span> instance<span class="token punctuation">,</span> tempPro<span class="token punctuation">;</span>

<span class="token keyword">const</span> MessageBoxConstructor <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>toastComponent<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">defaultCallback</span> <span class="token operator">=</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token function">tempPro</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token comment">// 执行回调</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">initInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageBoxConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  instance<span class="token punctuation">.</span>callback <span class="token operator">=</span> defaultCallback <span class="token comment">// 接收组件回调</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">showNextMsg</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">initInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> options<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token comment">// 属性赋值</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  instance<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    tempPro <span class="token operator">=</span> resolve <span class="token comment">// 将\`resolve\`保存到全局</span>
    <span class="token function">showNextMsg</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &#39;confirm&#39;,  &#39;warn&#39;</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">confirmText</span><span class="token operator">:</span> <span class="token string">&#39;确定&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancelText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showCancel</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用 Alert 后返回一个 Promise, 所以 MessageBox 也需要返回一个 Promise</span>
<span class="token keyword">function</span> <span class="token function">helloAlert</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;[object Object]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>defaultOptions<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> helloAlert

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">helloAlert</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Extend.html.vue"]]);export{r as default};
