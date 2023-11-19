import{_ as a,r as c,o as h,c as d,a as i,e as n}from"./app-NJfECqZf.js";const p={},o=n('<h2 id="webpack5-新特性" tabindex="-1"><a class="header-anchor" href="#webpack5-新特性" aria-hidden="true">#</a> Webpack5 新特性</h2><p>Webpack5 整体的方向性变化有以下几点：</p><ul><li><p>通过持久化硬盘缓存能力来提升构建性能</p></li><li><p>通过更好的算法来改进长期缓存（降低产物资源的缓存失效率）</p></li><li><p>添加了 Federation 新特性</p></li><li><p>通过更好的 Tree Shaking 能力和代码的生成逻辑来优化产物的大小</p></li><li><p>改善 web 平台的兼容性能力</p></li><li><p>清除了内部结构中，在 Webpack4 没有重大更新而引入一些新特性时所遗留下来的一些奇怪的 state</p></li><li><p>通过引入一些重大的变更为未来的一些特性做准备，使得能够长期的稳定在 Webpack5 版本上</p></li></ul><h3 id="提升细节" tabindex="-1"><a class="header-anchor" href="#提升细节" aria-hidden="true">#</a> 提升细节</h3><h3 id="hash-设置优化" tabindex="-1"><a class="header-anchor" href="#hash-设置优化" aria-hidden="true">#</a> hash 设置优化</h3><p>webpack4 是根据代码的结构生成 chunkhash，添加了空白行或注释，会引起 chunkhash 的变化</p><p>webpack5 是根据内容生成 chunkhash，改了注释或者变量不会引起 chunkhash 的变化，浏览器可以继续使用缓存</p><h3 id="缓存效率" tabindex="-1"><a class="header-anchor" href="#缓存效率" aria-hidden="true">#</a> 缓存效率</h3><p>在webpack4 中，chunkId 与 moduleId 都是自增 id。只要我们新增一个模块，那么代码中 module 的数量就会发生变化，从而导致 moduleId 发生变化，于是文件内容就发生了变化。<br> chunkId 也是如此，新增一个入口的时候，chunk 数量的变化造成了 chunkId 的变化，导致了文件内容变化。所以对实际未改变的 chunk 文件不能有效利用</p><p>webpack5采用新的算法来计算确定性的chunkId和moduleId。可以有效利用缓存。在production模式下，<code>optimization.chunkIds</code> 和 <code>optimization.moduleIds</code> 默认会设为 <code>deterministic</code></p><p>新增了可以将缓存写入磁盘的配置项, 在命令行终止当前构建任务，再次启动构建时，可以复用上一次写入硬盘的缓存，加快构建过程</p>',11);function r(t,l){const e=c("NavSvg");return h(),d("div",null,[i(e),o])}const u=a(p,[["render",r],["__file","index.html.vue"]]);export{u as default};
