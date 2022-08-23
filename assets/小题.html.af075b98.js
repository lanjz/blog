import{_ as n,o as s,c as a,d as p}from"./app.85c8df44.js";const t={},e=p(`<h1 id="\u8BB0\u5F55\u4E00\u4E0B\u78B0\u5230\u7684\u7B97\u6CD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55\u4E00\u4E0B\u78B0\u5230\u7684\u7B97\u6CD5\u9898" aria-hidden="true">#</a> \u8BB0\u5F55\u4E00\u4E0B\u78B0\u5230\u7684\u7B97\u6CD5\u9898</h1><h2 id="\u4E0D\u53EF\u53D8\u6570\u7EC4\u672A\u548C" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u53EF\u53D8\u6570\u7EC4\u672A\u548C" aria-hidden="true">#</a> \u4E0D\u53EF\u53D8\u6570\u7EC4\u672A\u548C</h2><p>\u5047\u8BBE\u6709\u56FA\u5B9A\u6570\u7EC4<code>[1,2,3,4,....,10000]</code>\uFF0C\u4EFB\u610F\u7ED9\u8D77\u59CB\u4F4D\u7F6En\u548Cm\uFF0C\u6C42n\u548Cm\u4E4B\u95F4\u7684\u548C(\u4E0D\u542Bn\u3001\u5305\u542Bm)</p><p>\u5982\u679C\u4F7F\u7528\u53D8\u901A\u5FAA\u73AF\u7684\u8BDD\u6709\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u5FAA\u73AF\u6210\u672C\u5927\uFF0C\u5982\u679C\u8BA1\u7B97\u9891\u7E41\u7684\u8BDD\uFF0C\u975E\u5E38\u5F71\u54CD\u6027\u80FD</li></ul><p>\u6BD4\u8F83\u597D\u7684\u601D\u8DEF\u662F\u52A0\u5165\u7F13\u5B58\uFF0C\u5BF9\u8BA1\u7B97\u8FC7\u7684\u4E0D\u518D\u8FDB\u884C\u91CD\u590D\u8BA1\u7B97\uFF0C\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u4EEC\u8981\u7F13\u5B58\u4E0D\u662Fn\u5230m\u4E4B\u95F4\u548C\uFF0C\u800C\u662F<code>0-n</code> \u548C <code>0-m</code>\u8FD9\u6837\u7684\u548C</p><p>\u56E0\u4E3A\u6C42 <code>n-m</code> \u4E4B\u95F4\u548C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u62C6\u89E3\u4E3A <code>0-m</code> \u51CF <code>0-n</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C06\u6241\u5E73\u5BF9\u8C61\u8F6C\u6362\u4E3A\u6811\u5F62\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5C06\u6241\u5E73\u5BF9\u8C61\u8F6C\u6362\u4E3A\u6811\u5F62\u7ED3\u6784" aria-hidden="true">#</a> \u5C06\u6241\u5E73\u5BF9\u8C61\u8F6C\u6362\u4E3A\u6811\u5F62\u7ED3\u6784</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">h3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u7406(\u5E02\u573A)&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u516C\u53F8\u673A\u6784&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h7</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h6&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u7406(\u603B\u52A1)&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h4</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9500\u552E&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h0</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u603B\u7ECF\u7406&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h8</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8D22\u52A1&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h6</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u4ED3\u7BA1&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u4EE3\u8868&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u6362\u6210\u5982\u4E0B\u7ED3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;h1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u516C\u53F8\u673A\u6784&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;h2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u603B\u7ECF\u7406&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;h3&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u7406(\u5E02\u573A)&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;h4&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h3&#39;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u9500\u552E&#39;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;h6&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u4ED3\u7BA1&#39;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&#39;h7&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h6&#39;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u7406(\u603B\u52A1)&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;h5&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u4EE3\u8868&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;h8&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;parent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;h0&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u8D22\u52A1&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toTree</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u4E86\u5BF9\u8C61\u5B58\u50A8\u662F\u5F15\u7528\u7684\u7279\u70B9</p><h2 id="\u4ECE\u4E00\u4E2A\u65E0\u5E8F-\u4E0D\u76F8\u7B49\u7684\u6570\u7EC4\u4E2D-\u9009\u53D6n\u4E2A\u6570-\u4F7F\u5176\u548C\u4E3Am\u5B9E\u73B0\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u4E00\u4E2A\u65E0\u5E8F-\u4E0D\u76F8\u7B49\u7684\u6570\u7EC4\u4E2D-\u9009\u53D6n\u4E2A\u6570-\u4F7F\u5176\u548C\u4E3Am\u5B9E\u73B0\u7B97\u6CD5" aria-hidden="true">#</a> \u4ECE\u4E00\u4E2A\u65E0\u5E8F\uFF0C\u4E0D\u76F8\u7B49\u7684\u6570\u7EC4\u4E2D\uFF0C\u9009\u53D6N\u4E2A\u6570\uFF0C\u4F7F\u5176\u548C\u4E3AM\u5B9E\u73B0\u7B97\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function sum(curArr, total, start = 0) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function r(l,c){return s(),a("div",null,o)}var u=n(t,[["render",r],["__file","\u5C0F\u9898.html.vue"]]);export{u as default};
