import{_ as o,o as c,c as e,e as d}from"./app-NJfECqZf.js";const l={},n=d('<h1 id="多列" tabindex="-1"><a class="header-anchor" href="#多列" aria-hidden="true">#</a> 多列</h1><p>通过 CSS3 多列，您能够创建多个列来对文本进行布局实现像报纸那样的效果，或者实现瀑布流</p><p>多列容器可设置的属性：</p><ul><li><p><code>column-count</code>： 要分成多少列，如 <code>column-count：3</code></p></li><li><p><code>column-gap</code>: 列与列之间的距离, 如<code>column-gap: 20px</code></p></li><li><p><code>column-width</code>: 规定列的宽度, 如<code>column-width:300px</code></p><ul><li><p><code>auto</code>：自动根据浏览器决定列宽</p></li><li><p><code>Number（px）</code>：设置固定的值</p></li></ul></li><li><p><code>columns</code>: <code>column-width</code> 和 <code>column-count</code> 的合并简写，规定列的宽度和列数,如 <code>columns: 300px auto</code></p></li><li><p><code>column-rule</code>: 设置列之间的宽度、样式和颜色规则，也是 <code>column-rule-color</code> , <code>column-rule-style</code> , <code>column-rule-width</code> 的合并写法,如<code>solid 1px red</code></p></li><li><p><code>column-fill</code>: <code>balanc|auto</code> 规定如何对列进行填充,<strong>主流浏览器都不支持 <code>column-fill</code> 属性</strong></p></li></ul><p>多列内子元素可设置的属性：</p><ul><li><p><code>column-span</code>: 使元素横跨所有列, 如 <code>colunm-span: all</code></p><ul><li><p><code>1</code>: 不跨列</p></li><li><p><code>all</code>：跨整列</p></li></ul></li></ul><h2 id="注意项" tabindex="-1"><a class="header-anchor" href="#注意项" aria-hidden="true">#</a> 注意项</h2><p>如果设置了 <code>column-count</code>，则 <code>column-width</code> 应该是自动的 如果同时也设置了 <code>column-width</code> 的值，则他们会产生冲突。</p><p>原则：取大优先，谁设定的宽度值大，则谁生效，如果还有剩余空间，会均分给每列，使每列实际宽度大于设置的宽度</p>',9),u=[n];function i(p,t){return c(),e("div",null,u)}const r=o(l,[["render",i],["__file","多列.html.vue"]]);export{r as default};
