import{_ as d,r as a,o as r,c as o,b as e,d as i,a as s,e as l}from"./app-kv3zS8h1.js";const t={},c=e("h1",{id:"esbuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#esbuild","aria-hidden":"true"},"#"),i(" esbuild")],-1),u=e("p",null,"先简单了解一下 esbuild 是个啥",-1),v={href:"https://www.breword.com/evanw-esbuild/",target:"_blank",rel:"noopener noreferrer"},b=l('<p>esbuild使用golang开发，在打包的速度上非常快，vite在dev模式下就是使用 esbuild 进行打包</p><p><strong>esbuild的主要特征</strong></p><ul><li><p>在没有缓存的情况也能有极致的性能</p></li><li><p>支持ES6的Tree shaking</p></li><li><p>原生支持typescript和jsx打包</p></li><li><p>支持Source Map</p></li><li><p>代码压缩</p></li><li><p>支持定义插件</p></li><li><p>其它等等</p></li></ul><h2 id="语言优势" tabindex="-1"><a class="header-anchor" href="#语言优势" aria-hidden="true">#</a> 语言优势</h2><p>JavaScript 本质上依然是一门解释型语言，JavaScript 程序每次执行都需要先由解释器一边将源码翻译成机器语言，一边调度执行；而 Go 是一种编译型语言，在编译阶段就已经将源码转译为机器码，启动时只需要直接执行这些机器码即可。也就意味着，Go 语言编写的程序比 JavaScript 少了一个动态解释的过程</p><p>Go 天生具有多线程运行能力，而 JavaScript 本质上是一门单线程语言，直到引入 WebWorker 规范之后才有可能在浏览器、Node 中实现多线程操作</p><h2 id="集成webpack" tabindex="-1"><a class="header-anchor" href="#集成webpack" aria-hidden="true">#</a> 集成webpack</h2>',7),p={href:"https://github.com/privatenumber/esbuild-loader",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"esbuild-loader",-1),h=e("code",null,"ts-loader",-1),_=e("code",null,"babel-loader",-1),x=l(`<h3 id="将一个现有的项目迁移到esbuild" tabindex="-1"><a class="header-anchor" href="#将一个现有的项目迁移到esbuild" aria-hidden="true">#</a> 将一个现有的项目迁移到esbuild</h3><p>安装 esbuild-loader： <code>npm i -D esbuild-loader</code></p><p><code>webpack.config.js</code> 修改 <code>babel-loader</code> 的使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  module.exports = {
    module: {
      rules: [
-       {
-         test: /\\.js$/,
-         use: &#39;babel-loader&#39;,
-       },
+       {
+         test: /\\.js$/,
+         loader: &#39;esbuild-loader&#39;,
+         options: {
+           loader: &#39;jsx&#39;,  // Remove this if you&#39;re not using JSX
+           target: &#39;es2015&#39;  // Syntax to compile to (see options below for possible values)
+         }
+       },

        ...
      ],
    },
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有使用 <code>ts-loader</code> ，做如下修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  module.exports = {
    module: {
      rules: [
-       {
-         test: /\\.tsx?$/,
-         use: &#39;ts-loader&#39;
-       },
+       {
+         test: /\\.tsx?$/,
+         loader: &#39;esbuild-loader&#39;,
+         options: {
+           loader: &#39;tsx&#39;,  // Or &#39;ts&#39; if you don&#39;t need tsx
+           target: &#39;es2015&#39;
+         }
+       },

        ...
      ]
    },
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"https://juejin.cn/post/6977183266986000414",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),k={href:"https://xie.infoq.cn/article/d9c4ca69e0de8fecf176dfd20",target:"_blank",rel:"noopener noreferrer"};function w(S,j){const n=a("ExternalLinkIcon");return r(),o("div",null,[c,u,e("p",null,[e("a",v,[i("esbuild"),s(n)]),i("官方描述的作用就是：一个JavaScript的打包和和压缩工具")]),b,e("p",null,[i("有一个相对较新的项目叫"),e("a",p,[i("esbuild-loader"),s(n)]),i("。由hiroki osame开发，"),m,i(" 是一个建立在 esbuild 之上的webpack加载器。它允许用户用自己来替换 "),h,i(" 或 "),_,i(" ，这极大地提高了构建速度")]),x,e("blockquote",null,[e("p",null,[e("a",f,[i("webpack或esbuild。为什么不同时进行呢"),s(n)]),g,e("a",k,[i("webpack 或 esbuild：为什么不是两者兼而有之？"),s(n)])])])])}const N=d(t,[["render",w],["__file","index.html.vue"]]);export{N as default};
