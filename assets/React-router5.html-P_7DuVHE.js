import{_ as d,r as t,o as l,c as a,b as e,d as s,a as r,e as i}from"./app-kv3zS8h1.js";const o={},c=i('<h1 id="react-router使用" tabindex="-1"><a class="header-anchor" href="#react-router使用" aria-hidden="true">#</a> React-router使用</h1><h2 id="react-router-react-router-dom" tabindex="-1"><a class="header-anchor" href="#react-router-react-router-dom" aria-hidden="true">#</a> react-router/react-router-dom</h2><p><code>react-router</code> 实现了路由的核心功能, <code>react-router-dom</code> 是基于 <code>react-router</code> 的基础上加入了在浏览器运行环境下的一些功能，例如：<code>Link</code> 组件，会渲染一个 <code>a</code> 标签; <code>BrowserRouter</code> 和 <code>HashRouter</code> 组件，前者使用 <code>pushState</code> 和 <code>popState</code> 事件构建路由，后者使用 <code>window.location.hash</code> 和 <code>hashchange</code> 事件构建路由。</p><p>react-router-native: 基于react-router，类似react-router-dom，加入了react-native运行环境下的一些功能</p><p><code>react-router</code> 与 <code>react-router-dom</code></p>',5),v={href:"https://www.cnblogs.com/cckui/p/11490372.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<h1 id="路由组件" tabindex="-1"><a class="header-anchor" href="#路由组件" aria-hidden="true">#</a> 路由组件</h1><h2 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h2><p><code>Route</code> 用来控制路径对应显示的组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Route path=&#39;/about&#39; exact component={Login}&gt;&lt;/Route&gt;
&lt;Route path=&#39;/about/:id&#39; exact component={Home}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它有以下参数</p><ul><li><p><code>path</code>：指定路由跳转路径</p></li><li><p><code>exact</code>: 精确匹配路由</p><p>上面的例子如果没有<code>exact</code>属性，当访问<code>/about/1</code>时,<code>Login</code>和<code>Home</code>组件都会渲染</p></li><li><p><code>component</code>: 路由对应的组件</p></li><li><p><code>render</code>: 通过写render函数返回具体的dom</p><p><code>&lt;Route path=&#39;/about&#39; exact render={() =&gt; (&lt;div&gt;about&lt;/div&gt;)}&gt;&lt;/Route&gt;</code></p><p><code>render</code> 也可以直接返回 组件</p><p><code>&lt;Route path=&#39;/about&#39; exact render={() =&gt; &lt;About /&gt; }&gt;&lt;/Route&gt;</code></p><p><strong>使用<code>render</code>的好处是不仅可以传递 <code>props</code> 属性还可以传递自定义属性</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Route path=&#39;/about&#39; exact render={(props) =&gt; {
    return &lt;About {...props} name={&#39;cedric&#39;} /&gt;
}}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>render</code> 方法也可用来进行权限认证：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Route path=&#39;/user&#39; exact render={(props) =&gt; {
    // isLogin 从 redux 中拿到, 判断用户是否登录
    return isLogin ? &lt;User {...props} name={&#39;cedric&#39;} /&gt; : &lt;div&gt;请先登录&lt;/div&gt;
}}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>sensitive</code>：是否区分路由大小写</p></li><li><p><code>strict</code>: 是否配置路由后面的 &#39;/&#39;</p></li><li><p><code>location</code>x\`: 将 与当前历史记录位置以外的位置相匹配，则此功能在路由过渡动效中非常有用</p></li></ul><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;BrowserRouter&gt;
    &lt;Route path=&#39;/&#39; exact component={Home}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Login}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/detail/:id&#39; exact component={Detail}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Home}&gt;&lt;/Route&gt;
&lt;/BrowserRouter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面有两个<code>/about</code>路由，当访问<code>/about</code>路径时，显示的将是<code>Home</code>组件即下面那个，因为默认下匹配路径会把所有路由都比较一遍</p><p>如果希望匹配到不继续往下匹配，就需要使用<code>Switch</code>组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>imoprt { Switch } from &#39;react-router-dom&#39;
&lt;BrowserRouter&gt;
    &lt;Route path=&#39;/&#39; exact component={Home}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Login}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/detail/:id&#39; exact component={Detail}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Home}&gt;&lt;/Route&gt;
&lt;/BrowserRouter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h2><p><code>Link</code> 都可以用来指定路由跳转,它有两种使用方式：</p><ul><li><p>通过字符串执行跳转路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Link to=&#39;/login&#39;&gt;
    &lt;span&gt;登录&lt;/span&gt;
&lt;/Link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过对象指定跳转路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Link to={{
        pathname: &#39;/login&#39;,
        search: &#39;?name=cedric&#39;,
        hash: &#39;#someHash&#39;,
        state: { fromWechat: true }
    }}&gt;
    &lt;span&gt;登录&lt;/span&gt;
&lt;/Link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>pathname</code>: 表示要链接到的路径的字符串</p></li><li><p><code>search</code>: 表示查询参数的字符串形式</p></li><li><p><code>hash</code>: 放入网址的 <code>hash</code>，例如 <code>#a-hash</code></p></li><li><p><code>state</code>: 状态持续到 <code>location</code>.通常用于隐式传参（埋点），可以用来统计页面来源.组件中通过<code>this.props.location.state</code>获取</p></li></ul></li></ul><h2 id="navlink" tabindex="-1"><a class="header-anchor" href="#navlink" aria-hidden="true">#</a> NavLink</h2><p>可以看做一个特殊版本的 Link，当它与当前 URL 匹配时，为其渲染元素添加样式属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Link to=&#39;/login&#39; activeClassName=&quot;selected&quot;&gt;
    &lt;span&gt;登录&lt;/span&gt;
&lt;/Link&gt;
---------------------------------------------
&lt;NavLink
  to=&quot;/login&quot;
  activeStyle={{
    fontWeight: &#39;bold&#39;,
    color: &#39;red&#39;
   }}
&gt;
    &lt;span&gt;登录&lt;/span&gt;
&lt;/NavLink&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>exact</code>: 如果为 <code>true</code>，则仅在位置完全匹配时才应用 <code>active 的类/样式</code></p></li><li><p><code>strict</code>: 当为 <code>true</code>，要考虑位置是否匹配当前的URL时，<code>pathname</code> 尾部的斜线要考虑在内</p></li><li><p><code>location</code> 接收一个<code>location</code>对象，当<code>url</code>满足这个对象的条件才会跳转</p></li><li><p><code>isActive</code>: 接收一个回调函数，只有当 <code>active</code> 状态变化时才能触发，如果返回false则跳转失败</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const oddEvent = (match, location) =&gt; {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) &amp;&amp; eventID % 2 === 1
}

&lt;NavLink
  to=&quot;/login&quot;
  isActive={oddEvent}
&gt;login&lt;/NavLink&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h2><p><code>Redirect</code> 将导航到一个新的地址。即重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Switch&gt; 
    &lt;Route path=&#39;/home&#39; exact component={Home}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/login&#39; exact component={Login}&gt;&lt;/Route&gt; 
    &lt;Redirect to=&quot;/home&quot; from=&#39;/&#39; exact /&gt; 
&lt;/Switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面，当访问路由<code>/</code>时，会直接重定向到<code>/home</code></p><p><code>Redirect</code> 常在用户是否登录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Center extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                &lt;div&gt;个人中心&lt;/div&gt;
            )
        } else {
            return &lt;Redirect to=&#39;/login&#39; /&gt;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可使用对象形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Redirect
  to={{
    pathname: &quot;/login&quot;,
    search: &quot;?utm=your+face&quot;,
    state: { referrer: currentLocation }
  }}
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withrouter" tabindex="-1"><a class="header-anchor" href="#withrouter" aria-hidden="true">#</a> withRouter</h2><p><code>withRouter</code> 可以将一个非路由组件包裹为路由组件，使这个非路由组件也能访问到当前路由的<code>match</code>, <code>location</code>, <code>history</code>对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { withRouter } from &#39;react-router-dom&#39;;
class Detail extends Component {
    render() {
        ··· ···
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="路由对象" tabindex="-1"><a class="header-anchor" href="#路由对象" aria-hidden="true">#</a> 路由对象</h1><p>路由组件中在<code>props</code>中可以取到路由对象</p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><p><code>history</code> 对象通常会具有以下属性和方法：</p><ul><li><p><code>length</code>: <code>history</code> 堆栈的条目数</p></li><li><p><code>action</code>: 当前的操作(<code>PUSH</code>, <code>REPLACE</code>, <code>POP</code>)</p></li><li><p><code>location</code>: 当前的路径信息。<code>location</code> 会具有以下属性</p><ul><li><p><code>pathname</code> : URL 路径</p></li><li><p><code>search</code>: URL 中的查询字符串</p></li><li><p><code>hash</code>: URL 的哈希片段</p></li><li><p><code>state</code>: 获取<code>history.push(&#39;/about&#39;, {abc: 23})</code>的第二个参数，<code>history.location.state // {abc: 23}</code></p></li></ul></li><li><p><code>push(path, [state])</code>: 在 <code>history</code> 堆栈添加一个路由记录,并将路由至<code>path</code></p></li><li><p><code>replace(path, [state])</code>: 替换 <code>history</code> 当前路由记录,并将路由至<code>path</code></p></li><li><p><code>go(n)</code>: 直接将路转至 <code>history</code> 某个记录，如<code>history.go(-1)// 返回上一页</code></p></li><li><p><code>goBack()</code>: 等同于 <code>go(-1)</code></p></li><li><p><code>goForward()</code>: 等同于 <code>go(1)</code></p></li><li><p><code>block(prompt)</code>: 允许您监听<code>location</code>并触发<code>window.confirm</code>提示信息呈现给用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 或者在需要时使用返回消息的函数。
history.block((location, action) =&gt; {
  //location和action参数指示我们要转换到的位置以及如何到达那里。

  //一个常见的用例是防止用户在有表单尚未提交时离开页面。
  if (input.value !== &#39;&#39;) return &#39;Are you sure you want to leave this page?&#39;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要使用自定义弹层提示，需要重写此行为，则在创建历史对象时提供<code>getUserConfirmation</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const history = createHistory({
  getUserConfirmation(message, callback) {
    // 向用户显示一些自定义对话框并调用callback（true）继续传输，或调用callback（false）中止传输。
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>只有通过 Route 组件渲染的组件，才能在 <code>this.props</code> 上找到 <code>history</code> 对象</strong></p><h1 id="路由过渡动画" tabindex="-1"><a class="header-anchor" href="#路由过渡动画" aria-hidden="true">#</a> 路由过渡动画</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { TransitionGroup, CSSTransition } from &quot;react-transition-group&quot;;

class App extends Component {

  render() {
    return (
      &lt;Provider store={store}&gt;
        &lt;Fragment&gt; 
          &lt;BrowserRouter&gt;
            &lt;div&gt;
              &lt;Header /&gt;
              
              {/* 最外部的&lt;Route&gt;&lt;/Route&gt;不进行任何路由匹配，仅仅是用来传递 location */}
              
              &lt;Route render={({location}) =&gt; {
                console.log(location);
                return (
                  &lt;TransitionGroup&gt;
                    &lt;CSSTransition
                      key={location.key}
                      classNames=&#39;fade&#39;
                      timeout={300}
                    &gt;
                      &lt;Switch&gt;
                        &lt;Redirect exact from=&#39;/&#39; to=&#39;/home&#39; /&gt;
                        &lt;Route path=&#39;/home&#39; exact component={Home}&gt;&lt;/Route&gt;
                        &lt;Route path=&#39;/login&#39; exact component={Login}&gt;&lt;/Route&gt;
                        &lt;Route path=&#39;/write&#39; exact component={Write}&gt;&lt;/Route&gt;
                        &lt;Route path=&#39;/detail/:id&#39; exact component={Detail}&gt;&lt;/Route&gt;
                        &lt;Route render={() =&gt; &lt;div&gt;Not Found&lt;/div&gt;} /&gt;
                      &lt;/Switch&gt;
                    &lt;/CSSTransition&gt;
                  &lt;/TransitionGroup&gt;
                )
              }}&gt;
              &lt;/Route&gt;
            &lt;/div&gt;
          &lt;/BrowserRouter&gt;
        &lt;/Fragment&gt;
      &lt;/Provider&gt;
    )
  }
}
--------------------------------------------------------
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="createbrowserhistory" tabindex="-1"><a class="header-anchor" href="#createbrowserhistory" aria-hidden="true">#</a> createBrowserHistory</h1><p>上文有提到过，只有路由组件的<code>props</code>中才有<code>history</code>方法，对于非路由组件如果要有<code>history</code>属性，有两个种方法：</p><ul><li><p>使用<code>withRouter</code>包装组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { withRouter } from &#39;react-router-dom&#39;;
class Detail extends Component {
    render() {
        ··· ···
    } 
}
export default withRouter(Detail)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>createBrowserHistory</code>方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createBrowserHistory } from &#39;history&#39;
function About() {
    console.log(createBrowserHistory())
    return &lt;h1&gt;Hello, About&lt;/h1&gt;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="集中配置式路由" tabindex="-1"><a class="header-anchor" href="#集中配置式路由" aria-hidden="true">#</a> 集中配置式路由</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;
import { BrowserRouter } from &#39;react-router-dom&#39;;
import {renderRoutes} from &#39;react-router-config&#39;

function About() {
    return &lt;h1&gt;Hello, About&lt;/h1&gt;;
}
function Inbox() {
    return &lt;h1&gt;Hello, Inbox&lt;/h1&gt;;
}
function App() {
    return &lt;h1&gt;App&lt;/h1&gt;;
}
const routerConfig = [
    {
        path: &#39;/&#39;,
        component: App,
        name: &#39;App&#39;,
        childRouter: [
            { path: &#39;/about&#39;, component: About, name: &#39;About&#39; },
            { path: &#39;inbox&#39;, component: Inbox, name: &#39;Inbox&#39;}

        ]
    },
]
function App() {
    return (
        &lt;&gt;
            &lt;BrowserRouter&gt;
                {renderRoutes(routeConfig)}
            &lt;/BrowserRouter&gt;
        &lt;/&gt;
    )
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function m(p,b){const n=t("ExternalLinkIcon");return l(),a("div",null,[c,e("p",null,[e("a",v,[s("路径匹配组件"),r(n)])]),u])}const h=d(o,[["render",m],["__file","React-router5.html.vue"]]);export{h as default};
