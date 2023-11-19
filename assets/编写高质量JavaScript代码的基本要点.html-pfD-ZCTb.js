import{_ as n,o as s,c as a,e}from"./app-NJfECqZf.js";const p={},o=e(`<h1 id="编写高质量javascript代码的基本要点" tabindex="-1"><a class="header-anchor" href="#编写高质量javascript代码的基本要点" aria-hidden="true">#</a> 编写高质量JavaScript代码的基本要点</h1><p>可维护的代码意味着：</p><ul><li><p>可读的</p></li><li><p>一致的</p></li><li><p>可预测的</p></li><li><p>看上去就像是同一个人写的</p></li></ul><h2 id="最小全局变量-minimizing-globals" tabindex="-1"><a class="header-anchor" href="#最小全局变量-minimizing-globals" aria-hidden="true">#</a> 最小全局变量(Minimizing Globals)</h2><p>全局变量的问题在于，你的 JavaScript 应用程序和web页面上的所有代码都共享了这些全局变量，他们住在同一个全局命名空间，所以当程序的两个不同部分定义同名但不同作用的全局变量的时候，命名冲突在所难免</p><p>由于 JavaScript 的两个特征，不自觉地创建出全局变量是出乎意料的容易。首先，你可以甚至不需要声明就可以使用变量；第二，JavaScript 有隐含的全局概念，意味着你不声明的任何变量都会成为一个全局对象属性。参考下面的代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 不推荐写法: 隐式全局变量 </span>
   result <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此段代码中的 <code>result</code> 没有声明。代码照样运作正常，但在调用函数后你最后的结果就多一个全局命名空间，这可以是一个问题的根源。</p><p>所以始终使用 <code>var</code> 声明变量，正如改进版的 <code>sum()</code> 函数所演示的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> result <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个创建隐式全局变量的反例就是使用任务链进行部分 <code>var</code> 声明。下面的片段中， <code>a</code> 是本地变量但是b确实全局变量，这可能不是你希望发生的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 反例，勿使用 </span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此现象发生的原因在于这个从右到左的赋值，首先，是赋值表达式 <code>b = 0</code> ，此情况下 <code>b</code> 是未声明的。这个表达式的返回值是 <code>0</code> ，然后这个 <code>0</code> 就分配给了通过 <code>var</code> 定义的这个局部变量 <code>a</code> 。换句话说，就好比你输入了：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你已经准备好声明变量，使用链分配是比较好的做法，不会产生任何意料之外的全局变量，如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
   <span class="token comment">// ... a = b = 0; // 两个均局部变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一个避免全局变量的原因是可移植性。如果你想你的代码在不同的环境下（主机下）运行，使用全局变量如履薄冰，因为你会无意中覆盖你最初环境下不存在的主机对象</p><h3 id="忘记var导致的副作用-side-effects-when-forgetting-var" tabindex="-1"><a class="header-anchor" href="#忘记var导致的副作用-side-effects-when-forgetting-var" aria-hidden="true">#</a> 忘记<code>var</code>导致的副作用(Side Effects When Forgetting var)</h3><p>隐式全局变量和明确定义的全局变量间有些小的差异，就是通过<code>delete</code>操作符让变量未定义的能力</p><ul><li><p>通过 <code>var</code> 创建的全局变量（任何函数之外的程序中创建）是不能被删除的。</p></li><li><p>无 <code>var</code> 创建的隐式全局变量（无视是否在函数中创建）是能被删除的</p></li></ul><p>这表明，在技术上，隐式全局变量并不是真正的全局变量，但它们是全局对象的属性。属性是可以通过 <code>delete</code> 操作符删除的，而变量是不能的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义三个全局变量</span>
<span class="token keyword">var</span> global_var <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
global_novar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 反面教材</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   global_fromfunc <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 反面教材</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 试图删除</span>
<span class="token keyword">delete</span> global_var<span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">delete</span> global_novar<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">delete</span> global_fromfunc<span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 测试该删除</span>
<span class="token keyword">typeof</span> global_var<span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token keyword">typeof</span> global_novar<span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
<span class="token keyword">typeof</span> global_fromfunc<span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ES5严格模式下，未声明的变量（如在前面的代码片段中的两个反面教材）工作时会抛出一个错误。</p><h2 id="for循环-for-loops" tabindex="-1"><a class="header-anchor" href="#for循环-for-loops" aria-hidden="true">#</a> for循环(for Loops)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> myarray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 使用myarray[i]做点什么</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种形式的循环的不足在于每次循环的时候数组的长度都要去获取下。这回降低你的代码，尤其当 <code>myarray</code> 不是数组，而是一个 <code>HTMLCollection</code> 对象的时候(DOM操作一般都是比较昂贵的).</p><p>所以当你循环获取值时，缓存数组(或集合)的长度是比较好的形式，正如下面代码显示的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> myarray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 使用myarray[i]做点什么</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在这个循环过程中，你只检索了一次长度值</p><h2 id="for-in循环-for-in-loops" tabindex="-1"><a class="header-anchor" href="#for-in循环-for-in-loops" aria-hidden="true">#</a> for-in循环(for-in Loops)</h2><p><code>for-in</code> 循环应该用在非数组对象的遍历上，使用 <code>for-in</code> 进行循环也被称为“枚举”</p><p>从技术上将，你可以使用 <code>for-in</code> 循环数组（因为JavaScript中数组也是对象），但这是不推荐的。因为如果数组对象已被自定义的功能增强，就可能发生逻辑错误。另外，在 <code>for-in</code> 中，属性列表的顺序（序列）是不能保证的。所以最好数组使用正常的 <code>for</code> 循环，对象使用 <code>for-in</code> 循环</p><p>有个很重要的 <code>hasOwnProperty()</code> 方法，当遍历对象属性的时候可以过滤掉从原型链上下来的属性</p><p>思考下面一段代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象</span>
<span class="token keyword">var</span> man <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">hands</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token literal-property property">legs</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token literal-property property">heads</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在代码的某个地方</span>
<span class="token comment">// 一个方法添加给了所有对象</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>clone <span class="token operator">===</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们有一个使用对象字面量定义的名叫 <code>man</code> 的对象。在 <code>man</code> 定义完成后的某个地方，在对象原型上增加了一个很有用的名叫 <code>clone()</code> 的方法。此原型链是实时的，这就意味着所有的对象自动可以访问新的方法。为了避免枚举 <code>man</code> 的时候出现 <code>clone()</code> 方法，你需要应用 <code>hasOwnProperty()</code> 方法过滤原型属性。如果不做过滤，会导致 <code>clone()</code> 函数显示出来，在大多数情况下这是不希望出现的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.</span>
<span class="token comment">// for-in 循环</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> man<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>man<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 过滤</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> man<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 控制台显示结果
hands : 2
legs : 2
heads : 1
*/</span>
<span class="token comment">// 2.</span>
<span class="token comment">// 反面例子:</span>
<span class="token comment">// for-in loop without checking hasOwnProperty()</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> man<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> man<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
控制台显示结果
hands : 2
legs : 2
heads : 1
clone: function()
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不扩展内置原型-not-augmenting-built-in-prototypes" tabindex="-1"><a class="header-anchor" href="#不扩展内置原型-not-augmenting-built-in-prototypes" aria-hidden="true">#</a> 不扩展内置原型((Not) Augmenting Built-in Prototypes)</h2><p>扩增构造函数的 <code>prototype</code> 属性是个很强大的增加功能的方法，但有时候它太强大了。</p><p>增加内置的构造函数原型（如 <code>Object()</code> , <code>Array()</code> , 或 <code>Function()</code> ）挺诱人的，但是这严重降低了可维护性，因为它让你的代码变得难以预测。使用你代码的其他开发人员很可能更期望使用内置的 JavaScript 方法来持续不断地工作，而不是你另加的方法</p><p>另外，属性添加到原型中，可能会导致不使用 <code>hasOwnProperty</code> 属性时在循环中显示出来，这会造成混乱</p><p>因此，不增加内置原型是最好的。你可以指定一个规则，仅当下面的条件均满足时例外：</p><ul><li><p>可以预期将来的 ECMAScript 版本或是 JavaScript 实现将一直将此功能当作内置方法来实现。例如，你可以添加 ECMAScript 5 中描述的方法，一直到各个浏览器都迎头赶上。这种情况下，你只是提前定义了有用的方法</p></li><li><p>如果您检查您的自定义属性或方法已不存在——也许已经在代码的其他地方实现或已经是你支持的浏览器 JavaScript 引擎部分</p></li><li><p>你清楚地文档记录并和团队交流了变化</p></li></ul><p>如果这三个条件得到满足，你可以给原型进行自定义的添加，形式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Object<span class="token punctuation">.</span>protoype<span class="token punctuation">.</span>myMethod <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   Object<span class="token punctuation">.</span>protoype<span class="token punctuation">.</span><span class="token function-variable function">myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 实现...</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch模式-switch-pattern" tabindex="-1"><a class="header-anchor" href="#switch模式-switch-pattern" aria-hidden="true">#</a> switch模式(switch Pattern)</h2><p>你可以通过类似下面形式的 <code>switch</code> 语句增强可读性和健壮性:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> inspect_me <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>inspect_me<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
   result <span class="token operator">=</span> <span class="token string">&quot;zero&quot;</span><span class="token punctuation">;</span>
   <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
   result <span class="token operator">=</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">;</span>
   <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">default</span><span class="token operator">:</span>
   result <span class="token operator">=</span> <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个简单的例子中所遵循的风格约定如下：</p><ul><li><p>每个<code>case</code>和<code>switch</code>对齐（花括号缩进规则除外）</p></li><li><p>每个<code>case</code>中代码缩进</p></li><li><p>每个<code>case</code>以<code>break</code>清除结束</p></li><li><p>避免贯穿（故意忽略<code>break</code>）。如果你非常确信贯穿是最好的方法，务必记录此情况，因为对于有些阅读人而言，它们可能看起来是错误的</p></li><li><p>以<code>default</code>结束<code>switch</code>：确保总有健全的结果，即使无情况匹配</p></li></ul><h2 id="避免隐式类型转换-avoiding-implied-typecasting" tabindex="-1"><a class="header-anchor" href="#避免隐式类型转换-avoiding-implied-typecasting" aria-hidden="true">#</a> 避免隐式类型转换(Avoiding Implied Typecasting )</h2><p>JavaScript的变量在比较的时候会隐式类型转换。这就是为什么一些诸如：<code>false == 0</code> 或 <code>“” == 0</code> 返回的结果是 <code>true</code> 。为避免引起混乱的隐含类型转换，在你比较值和表达式类型的时候始终使用 <code>===</code> 和 <code>!==</code> 操作符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> zero <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>zero <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 不执行，因为zero为0, 而不是false</span>
<span class="token punctuation">}</span>

<span class="token comment">// 反面示例</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>zero <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 执行了...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="避免-avoiding-eval" tabindex="-1"><a class="header-anchor" href="#避免-avoiding-eval" aria-hidden="true">#</a> 避免(Avoiding) eval()</h2><p><code>eval()</code> 有安全隐患，因为被执行的代码可能已被篡改，比如盗取 <code>Cookie</code></p><p>给 <code>setInterval()</code>, <code>setTimeout()</code> 和 <code>Function()</code> 构造函数传递字符串时，与使用 <code>eval()</code> 是类似的，因此要避免使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 反面示例</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">&quot;myFunc()&quot;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">&quot;myFunc(1, 2, 3)&quot;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更好的</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>myFunc<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果必须使用 <code>eval()</code> ，可以考虑使用 <code>new Function()</code> 代替。因为在 <code>Function()</code> 中的代码是在局部函数作用域中运行，所以代码中任何通过 <code>var</code> 定义的变量都不会自动变成全局变量。另一种方法来阻止自动全局变量是封装 <code>eval()</code> 调用到一个即时函数中。</p><p>考虑下面这个例子，这里仅 <code>un</code> 作为全局变量污染了命名空间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> un<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// &quot;undefined&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> deux<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> trois<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>

<span class="token keyword">var</span> jsstring <span class="token operator">=</span> <span class="token string">&quot;var un = 1; console.log(un);&quot;</span><span class="token punctuation">;</span>
<span class="token function">eval</span><span class="token punctuation">(</span>jsstring<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;1&quot;</span>

jsstring <span class="token operator">=</span> <span class="token string">&quot;var deux = 2; console.log(deux);&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span>jsstring<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;2&quot;</span>

jsstring <span class="token operator">=</span> <span class="token string">&quot;var trois = 3; console.log(trois);&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">eval</span><span class="token punctuation">(</span>jsstring<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;3&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> un<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> deux<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> trois<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>eval()</code> 和 <code>Function</code> 还有一个不同点是 <code>eval()</code> 可以干扰作用域链，而 <code>Function()</code> 更安分守己些。不管你在哪里执行 <code>Function()</code> ，它只看到全局作用域。所以其能很好的避免本地变量污染。在下面这个例子中，<code>eval()</code> 可以访问和修改它外部作用域中的变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> local <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;local = 3; console.log(local)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;3&quot;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> local <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token function">Function</span><span class="token punctuation">(</span><span class="token string">&quot;console.log(typeof local);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parseint-下的数值转换-number-conversions-with-parseint" tabindex="-1"><a class="header-anchor" href="#parseint-下的数值转换-number-conversions-with-parseint" aria-hidden="true">#</a> parseInt()下的数值转换(Number Conversions with parseInt())</h2><p>使用 <code>parseInt()</code> 你可以从字符串中获取数值，该方法接受另一个基数参数，这经常省略，但不应该。当字符串以 <code>&quot;0&quot;</code> 开头的时候就有可能会出问题，例如时间进入表单域，在ECMAScript 3 中，开头为 <code>&quot;0&quot;</code> 的字符串被当做 8进制 处理了，但这已在 ECMAScript 5 中改变了。为了避免矛盾和意外的结果，总是指定基数参数准没错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> month <span class="token operator">=</span> <span class="token string">&quot;06&quot;</span><span class="token punctuation">,</span>
    year <span class="token operator">=</span> <span class="token string">&quot;09&quot;</span><span class="token punctuation">;</span>
month <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>month<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
year <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此例中，如果你忽略了基数参数，如 <code>parseInt(year)</code> ，返回的值将是 <code>0</code>，因为 <code>09</code> 被当做 <code>8</code> 进制（好比执行 <code>parseInt( year, 8 )）</code>，而 <code>09</code> 在 <code>8</code> 进制中不是个有效数字</p><p>替换方法是将字符串转换成数字，包括：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">+</span><span class="token string">&quot;08&quot;</span> <span class="token comment">// 结果是 8</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;08&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这些通常快于 <code>parseInt()</code> ，因为 <code>parseInt()</code> 方法，顾名思意，不是简单地解析与转换。但是，如果你想输入例如 <code>08 hello</code>， <code>parseInt()</code> 将返回数字，而其它以 <code>NaN</code> 告终</p><h2 id="编码规范-coding-conventions" tabindex="-1"><a class="header-anchor" href="#编码规范-coding-conventions" aria-hidden="true">#</a> 编码规范(Coding Conventions)</h2><h2 id="缩进-indentation" tabindex="-1"><a class="header-anchor" href="#缩进-indentation" aria-hidden="true">#</a> 缩进(Indentation)</h2><h2 id="空格-white-space" tabindex="-1"><a class="header-anchor" href="#空格-white-space" aria-hidden="true">#</a> 空格(White Space)</h2><p>空格的使用同样有助于改善代码的可读性和一致性</p><p>适合使用空格的地方包括：</p><ul><li><p><code>for</code> 循环分号分开后的的部分：如 <code>for (var i = 0; i &lt; 10; i += 1) {...}</code></p></li><li><p><code>for</code> 循环中初始化的多变量( <code>i</code> 和 <code>max</code> )：<code>for (var i = 0, max = 10; i &lt; max; i += 1) {...}</code></p></li><li><p>分隔数组项的逗号的后面：<code>var a = [1, 2, 3]</code></p></li><li><p>对象属性逗号的后面以及分隔属性名和属性值的冒号的后面：<code>var o = {a: 1, b: 2}</code></p></li><li><p>限定函数参数：<code>myFunc(a, b, c)</code></p></li><li><p>函数声明的花括号的前面：<code>function myFunc() {}</code></p></li><li><p>匿名函数表达式 <code>function</code> 的后面：<code>var myFunc = function () {}</code></p></li></ul><p>使用空格分开所有的操作符和操作对象是另一个不错的使用，这意味着在 <code>+, -, *, =, &lt;, &gt;, &lt;=, &gt;=, ===, !==, &amp;&amp;, ||, +=</code> 等前后都需要空格</p><p>最后需要注意的一个空格——花括号间距。最好使用空格：</p><ul><li><p>函数、<code>if-else</code> 语句、循环、对象字面量的左花括号的前面 <code>({)</code></p></li><li><p><code>else</code> 或 <code>while</code> 之间的右花括号 <code>(})</code></p></li></ul><p>空格使用的一点不足就是增加了文件的大小，但是压缩无此问题</p><h2 id="命名规范-naming-conventions" tabindex="-1"><a class="header-anchor" href="#命名规范-naming-conventions" aria-hidden="true">#</a> 命名规范(Naming Conventions)</h2><p><strong>以大写字母写构造函数(Capitalizing Constructors)</strong></p><p><strong>驼峰(Camel)命名法</strong></p><p>当你的变量或是函数名是由多个单词组成的时候，最好“驼峰(Camel)命名法”，就是单词小写，每个单词的首字母大写</p><p>对于构造函数，可以使用大驼峰式命名法(upper camel case)，如 <code>MyConstructor()</code> ;对于函数和方法名称，你可以使用小驼峰式命名法(lower camel case)，像是 <code>myFunction()</code> , <code>calculateArea()</code> 和 <code>getFirstName()</code></p><h2 id="其它命名形式-other-naming-patterns" tabindex="-1"><a class="header-anchor" href="#其它命名形式-other-naming-patterns" aria-hidden="true">#</a> 其它命名形式(Other Naming Patterns)</h2><p>JavaScript中没有定义常量的方法，所以开发者都采用全部单词大写的规范来命名这个程序生命周期中都不会改变的变量，如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 珍贵常数，只可远观</span>
<span class="token keyword">var</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">,</span>
    <span class="token constant">MAX_WIDTH</span> <span class="token operator">=</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释-writing-comments" tabindex="-1"><a class="header-anchor" href="#注释-writing-comments" aria-hidden="true">#</a> 注释(Writing Comments)</h2><p>你必须注释你的代码，即使不会有其他人向你一样接触它。通常，当你深入研究一个问题，你会很清楚的知道这个代码是干嘛用的，但是，当你一周之后再回来看的时候，想必也要耗掉不少脑细胞去搞明白到底怎么工作的。</p><p>很显然，注释不能走极端：每个单独变量或是单独一行。但是，你通常应该记录所有的函数，它们的参数和返回值，或是任何不寻常的技术和方法。要想到注释可以给你代码未来的阅读者以诸多提示；阅读者需要的是（不要读太多的东西）仅注释和函数属性名来理解你的代码。例如，当你有五六行程序执行特定的任务， 如果你提供了一行代码目的以及为什么在这里的描述的话，阅读者就可以直接跳过这段细节。</p>`,90),t=[o];function c(i,l){return s(),a("div",null,t)}const d=n(p,[["render",c],["__file","编写高质量JavaScript代码的基本要点.html.vue"]]);export{d as default};
