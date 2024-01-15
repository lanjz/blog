import{_ as n,o as s,c as a,e as p}from"./app-p5-cwF4Z.js";const t={},e=p(`<h1 id="记录一下碰到的算法题" tabindex="-1"><a class="header-anchor" href="#记录一下碰到的算法题" aria-hidden="true">#</a> 记录一下碰到的算法题</h1><h2 id="不可变数组未和" tabindex="-1"><a class="header-anchor" href="#不可变数组未和" aria-hidden="true">#</a> 不可变数组未和</h2><p>假设有固定数组<code>[1,2,3,4,....,10000]</code>，任意给起始位置n和m，求n和m之间的和(不含n、包含m)</p><p>如果使用变通循环的话有以下问题：</p><ul><li>循环成本大，如果计算频繁的话，非常影响性能</li></ul><p>比较好的思路是加入缓存，对计算过的不再进行重复计算，这里需要注意的是，我们要缓存不是n到m之间和，而是<code>0-n</code> 和 <code>0-m</code>这样的和</p><p>因为求 <code>n-m</code> 之间和，我们可以拆解为 <code>0-m</code> 减 <code>0-n</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> catchSum <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sumN <span class="token operator">=</span> catchSum<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">?</span> catchSum<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token function">getSumInArr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">const</span> sumM <span class="token operator">=</span> catchSum<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">?</span> catchSum<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token function">getSumInArr</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sumM <span class="token operator">-</span> sumN
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">getSumInArr</span><span class="token punctuation">(</span><span class="token parameter">end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> end<span class="token punctuation">;</span> i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      total <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    catchSum<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> total
    <span class="token keyword">return</span> total
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将扁平对象转换为树形结构" tabindex="-1"><a class="header-anchor" href="#将扁平对象转换为树形结构" aria-hidden="true">#</a> 将扁平对象转换为树形结构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">h3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;经理(市场)&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;公司机构&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h7</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h6&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;经理(总务)&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h4</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;销售&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h0</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;总经理&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h8</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;财务&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h6</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;仓管&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;代表&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换成如下结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;h1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;公司机构&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;h2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;总经理&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;h3&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;经理(市场)&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;h4&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h3&#39;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;销售&#39;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;h6&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;仓管&#39;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&#39;h7&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h6&#39;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;经理(总务)&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;h5&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;代表&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;h8&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;财务&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toTree</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> parent <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>parent
      <span class="token keyword">if</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用了对象存储是引用的特点</p><h2 id="从一个无序-不相等的数组中-选取n个数-使其和为m实现算法" tabindex="-1"><a class="header-anchor" href="#从一个无序-不相等的数组中-选取n个数-使其和为m实现算法" aria-hidden="true">#</a> 从一个无序，不相等的数组中，选取N个数，使其和为M实现算法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  function sum(curArr, total, start = 0) {
    const arr = curArr.slice(start)
    if(arr.indexOf(total) &gt; -1) {
      return [arr.indexOf(total) + start]
    }
    if(arr.length &lt; 2) {
      return false
    }
    const getSum = arr.reduce((el1,el2) =&gt; el1 +el2)
    if(total &gt; getSum) {
      return false
    }
    let tmp = 0
    for(let i=0; i &lt; arr.length; i++) {
      tmp = i
      const findResult = sum(curArr, total-arr[i], start + i+1)
      if(findResult){
        return [start+i, ...findResult]
      }
    }
    return false
  }
  const test = [1,3,4,6]
  console.log(sum(test, 14))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function r(l,c){return s(),a("div",null,o)}const u=n(t,[["render",r],["__file","小题.html.vue"]]);export{u as default};
