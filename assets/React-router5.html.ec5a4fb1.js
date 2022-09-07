import{_ as d,o as t,c as l,b as e,a,d as i,e as s,r}from"./app.cd435b6b.js";const o={},c=i('<h1 id="react-router\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#react-router\u4F7F\u7528" aria-hidden="true">#</a> React-router\u4F7F\u7528</h1><h2 id="react-router-react-router-dom" tabindex="-1"><a class="header-anchor" href="#react-router-react-router-dom" aria-hidden="true">#</a> react-router/react-router-dom</h2><p><code>react-router</code> \u5B9E\u73B0\u4E86\u8DEF\u7531\u7684\u6838\u5FC3\u529F\u80FD, <code>react-router-dom</code> \u662F\u57FA\u4E8E <code>react-router</code> \u7684\u57FA\u7840\u4E0A\u52A0\u5165\u4E86\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u73AF\u5883\u4E0B\u7684\u4E00\u4E9B\u529F\u80FD\uFF0C\u4F8B\u5982\uFF1A<code>Link</code> \u7EC4\u4EF6\uFF0C\u4F1A\u6E32\u67D3\u4E00\u4E2A <code>a</code> \u6807\u7B7E; <code>BrowserRouter</code> \u548C <code>HashRouter</code> \u7EC4\u4EF6\uFF0C\u524D\u8005\u4F7F\u7528 <code>pushState</code> \u548C <code>popState</code> \u4E8B\u4EF6\u6784\u5EFA\u8DEF\u7531\uFF0C\u540E\u8005\u4F7F\u7528 <code>window.location.hash</code> \u548C <code>hashchange</code> \u4E8B\u4EF6\u6784\u5EFA\u8DEF\u7531\u3002</p><p>react-router-native: \u57FA\u4E8Ereact-router\uFF0C\u7C7B\u4F3Creact-router-dom\uFF0C\u52A0\u5165\u4E86react-native\u8FD0\u884C\u73AF\u5883\u4E0B\u7684\u4E00\u4E9B\u529F\u80FD</p><p><code>react-router</code> \u4E0E <code>react-router-dom</code></p>',5),v={href:"https://www.cnblogs.com/cckui/p/11490372.html",target:"_blank",rel:"noopener noreferrer"},u=s("\u8DEF\u5F84\u5339\u914D\u7EC4\u4EF6"),m=i(`<h1 id="\u8DEF\u7531\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u7EC4\u4EF6" aria-hidden="true">#</a> \u8DEF\u7531\u7EC4\u4EF6</h1><h2 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h2><p><code>Route</code> \u7528\u6765\u63A7\u5236\u8DEF\u5F84\u5BF9\u5E94\u663E\u793A\u7684\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Route path=&#39;/about&#39; exact component={Login}&gt;&lt;/Route&gt;
&lt;Route path=&#39;/about/:id&#39; exact component={Home}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u6709\u4EE5\u4E0B\u53C2\u6570</p><ul><li><p><code>path</code>\uFF1A\u6307\u5B9A\u8DEF\u7531\u8DF3\u8F6C\u8DEF\u5F84</p></li><li><p><code>exact</code>: \u7CBE\u786E\u5339\u914D\u8DEF\u7531</p><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u5982\u679C\u6CA1\u6709<code>exact</code>\u5C5E\u6027\uFF0C\u5F53\u8BBF\u95EE<code>/about/1</code>\u65F6,<code>Login</code>\u548C<code>Home</code>\u7EC4\u4EF6\u90FD\u4F1A\u6E32\u67D3</p></li><li><p><code>component</code>: \u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6</p></li><li><p><code>render</code>: \u901A\u8FC7\u5199render\u51FD\u6570\u8FD4\u56DE\u5177\u4F53\u7684dom</p><p><code>&lt;Route path=&#39;/about&#39; exact render={() =&gt; (&lt;div&gt;about&lt;/div&gt;)}&gt;&lt;/Route&gt;</code></p><p><code>render</code> \u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE \u7EC4\u4EF6</p><p><code>&lt;Route path=&#39;/about&#39; exact render={() =&gt; &lt;About /&gt; }&gt;&lt;/Route&gt;</code></p><p><strong>\u4F7F\u7528<code>render</code>\u7684\u597D\u5904\u662F\u4E0D\u4EC5\u53EF\u4EE5\u4F20\u9012 <code>props</code> \u5C5E\u6027\u8FD8\u53EF\u4EE5\u4F20\u9012\u81EA\u5B9A\u4E49\u5C5E\u6027</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Route path=&#39;/about&#39; exact render={(props) =&gt; {
    return &lt;About {...props} name={&#39;cedric&#39;} /&gt;
}}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>render</code> \u65B9\u6CD5\u4E5F\u53EF\u7528\u6765\u8FDB\u884C\u6743\u9650\u8BA4\u8BC1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Route path=&#39;/user&#39; exact render={(props) =&gt; {
    // isLogin \u4ECE redux \u4E2D\u62FF\u5230, \u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55
    return isLogin ? &lt;User {...props} name={&#39;cedric&#39;} /&gt; : &lt;div&gt;\u8BF7\u5148\u767B\u5F55&lt;/div&gt;
}}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>sensitive</code>\uFF1A\u662F\u5426\u533A\u5206\u8DEF\u7531\u5927\u5C0F\u5199</p></li><li><p><code>strict</code>: \u662F\u5426\u914D\u7F6E\u8DEF\u7531\u540E\u9762\u7684 &#39;/&#39;</p></li><li><p><code>location</code>x\`: \u5C06 \u4E0E\u5F53\u524D\u5386\u53F2\u8BB0\u5F55\u4F4D\u7F6E\u4EE5\u5916\u7684\u4F4D\u7F6E\u76F8\u5339\u914D\uFF0C\u5219\u6B64\u529F\u80FD\u5728\u8DEF\u7531\u8FC7\u6E21\u52A8\u6548\u4E2D\u975E\u5E38\u6709\u7528</p></li></ul><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;BrowserRouter&gt;
    &lt;Route path=&#39;/&#39; exact component={Home}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Login}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/detail/:id&#39; exact component={Detail}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Home}&gt;&lt;/Route&gt;
&lt;/BrowserRouter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6709\u4E24\u4E2A<code>/about</code>\u8DEF\u7531\uFF0C\u5F53\u8BBF\u95EE<code>/about</code>\u8DEF\u5F84\u65F6\uFF0C\u663E\u793A\u7684\u5C06\u662F<code>Home</code>\u7EC4\u4EF6\u5373\u4E0B\u9762\u90A3\u4E2A\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u4E0B\u5339\u914D\u8DEF\u5F84\u4F1A\u628A\u6240\u6709\u8DEF\u7531\u90FD\u6BD4\u8F83\u4E00\u904D</p><p>\u5982\u679C\u5E0C\u671B\u5339\u914D\u5230\u4E0D\u7EE7\u7EED\u5F80\u4E0B\u5339\u914D\uFF0C\u5C31\u9700\u8981\u4F7F\u7528<code>Switch</code>\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>imoprt { Switch } from &#39;react-router-dom&#39;
&lt;BrowserRouter&gt;
    &lt;Route path=&#39;/&#39; exact component={Home}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Login}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/detail/:id&#39; exact component={Detail}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/about&#39; exact component={Home}&gt;&lt;/Route&gt;
&lt;/BrowserRouter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h2><p><code>Link</code> \u90FD\u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u8DEF\u7531\u8DF3\u8F6C,\u5B83\u6709\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><ul><li><p>\u901A\u8FC7\u5B57\u7B26\u4E32\u6267\u884C\u8DF3\u8F6C\u8DEF\u7531</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Link to=&#39;/login&#39;&gt;
    &lt;span&gt;\u767B\u5F55&lt;/span&gt;
&lt;/Link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u901A\u8FC7\u5BF9\u8C61\u6307\u5B9A\u8DF3\u8F6C\u8DEF\u7531</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Link to={{
        pathname: &#39;/login&#39;,
        search: &#39;?name=cedric&#39;,
        hash: &#39;#someHash&#39;,
        state: { fromWechat: true }
    }}&gt;
    &lt;span&gt;\u767B\u5F55&lt;/span&gt;
&lt;/Link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>pathname</code>: \u8868\u793A\u8981\u94FE\u63A5\u5230\u7684\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32</p></li><li><p><code>search</code>: \u8868\u793A\u67E5\u8BE2\u53C2\u6570\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F</p></li><li><p><code>hash</code>: \u653E\u5165\u7F51\u5740\u7684 <code>hash</code>\uFF0C\u4F8B\u5982 <code>#a-hash</code></p></li><li><p><code>state</code>: \u72B6\u6001\u6301\u7EED\u5230 <code>location</code>.\u901A\u5E38\u7528\u4E8E\u9690\u5F0F\u4F20\u53C2\uFF08\u57CB\u70B9\uFF09\uFF0C\u53EF\u4EE5\u7528\u6765\u7EDF\u8BA1\u9875\u9762\u6765\u6E90.\u7EC4\u4EF6\u4E2D\u901A\u8FC7<code>this.props.location.state</code>\u83B7\u53D6</p></li></ul></li></ul><h2 id="navlink" tabindex="-1"><a class="header-anchor" href="#navlink" aria-hidden="true">#</a> NavLink</h2><p>\u53EF\u4EE5\u770B\u505A\u4E00\u4E2A\u7279\u6B8A\u7248\u672C\u7684 Link\uFF0C\u5F53\u5B83\u4E0E\u5F53\u524D URL \u5339\u914D\u65F6\uFF0C\u4E3A\u5176\u6E32\u67D3\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Link to=&#39;/login&#39; activeClassName=&quot;selected&quot;&gt;
    &lt;span&gt;\u767B\u5F55&lt;/span&gt;
&lt;/Link&gt;
---------------------------------------------
&lt;NavLink
  to=&quot;/login&quot;
  activeStyle={{
    fontWeight: &#39;bold&#39;,
    color: &#39;red&#39;
   }}
&gt;
    &lt;span&gt;\u767B\u5F55&lt;/span&gt;
&lt;/NavLink&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>exact</code>: \u5982\u679C\u4E3A <code>true</code>\uFF0C\u5219\u4EC5\u5728\u4F4D\u7F6E\u5B8C\u5168\u5339\u914D\u65F6\u624D\u5E94\u7528 <code>active \u7684\u7C7B/\u6837\u5F0F</code></p></li><li><p><code>strict</code>: \u5F53\u4E3A <code>true</code>\uFF0C\u8981\u8003\u8651\u4F4D\u7F6E\u662F\u5426\u5339\u914D\u5F53\u524D\u7684URL\u65F6\uFF0C<code>pathname</code> \u5C3E\u90E8\u7684\u659C\u7EBF\u8981\u8003\u8651\u5728\u5185</p></li><li><p><code>location</code> \u63A5\u6536\u4E00\u4E2A<code>location</code>\u5BF9\u8C61\uFF0C\u5F53<code>url</code>\u6EE1\u8DB3\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6761\u4EF6\u624D\u4F1A\u8DF3\u8F6C</p></li><li><p><code>isActive</code>: \u63A5\u6536\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u53EA\u6709\u5F53 <code>active</code> \u72B6\u6001\u53D8\u5316\u65F6\u624D\u80FD\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DEfalse\u5219\u8DF3\u8F6C\u5931\u8D25</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const oddEvent = (match, location) =&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h2><p><code>Redirect</code> \u5C06\u5BFC\u822A\u5230\u4E00\u4E2A\u65B0\u7684\u5730\u5740\u3002\u5373\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Switch&gt; 
    &lt;Route path=&#39;/home&#39; exact component={Home}&gt;&lt;/Route&gt;
    &lt;Route path=&#39;/login&#39; exact component={Login}&gt;&lt;/Route&gt; 
    &lt;Redirect to=&quot;/home&quot; from=&#39;/&#39; exact /&gt; 
&lt;/Switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\uFF0C\u5F53\u8BBF\u95EE\u8DEF\u7531<code>/</code>\u65F6\uFF0C\u4F1A\u76F4\u63A5\u91CD\u5B9A\u5411\u5230<code>/home</code></p><p><code>Redirect</code> \u5E38\u5728\u7528\u6237\u662F\u5426\u767B\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Center extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                &lt;div&gt;\u4E2A\u4EBA\u4E2D\u5FC3&lt;/div&gt;
            )
        } else {
            return &lt;Redirect to=&#39;/login&#39; /&gt;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4F7F\u7528\u5BF9\u8C61\u5F62\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Redirect
  to={{
    pathname: &quot;/login&quot;,
    search: &quot;?utm=your+face&quot;,
    state: { referrer: currentLocation }
  }}
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withrouter" tabindex="-1"><a class="header-anchor" href="#withrouter" aria-hidden="true">#</a> withRouter</h2><p><code>withRouter</code> \u53EF\u4EE5\u5C06\u4E00\u4E2A\u975E\u8DEF\u7531\u7EC4\u4EF6\u5305\u88F9\u4E3A\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u4F7F\u8FD9\u4E2A\u975E\u8DEF\u7531\u7EC4\u4EF6\u4E5F\u80FD\u8BBF\u95EE\u5230\u5F53\u524D\u8DEF\u7531\u7684<code>match</code>, <code>location</code>, <code>history</code>\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { withRouter } from &#39;react-router-dom&#39;;
class Detail extends Component {
    render() {
        \xB7\xB7\xB7 \xB7\xB7\xB7
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u8DEF\u7531\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5BF9\u8C61" aria-hidden="true">#</a> \u8DEF\u7531\u5BF9\u8C61</h1><p>\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u5728<code>props</code>\u4E2D\u53EF\u4EE5\u53D6\u5230\u8DEF\u7531\u5BF9\u8C61</p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><p><code>history</code> \u5BF9\u8C61\u901A\u5E38\u4F1A\u5177\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A</p><ul><li><p><code>length</code>: <code>history</code> \u5806\u6808\u7684\u6761\u76EE\u6570</p></li><li><p><code>action</code>: \u5F53\u524D\u7684\u64CD\u4F5C(<code>PUSH</code>, <code>REPLACE</code>, <code>POP</code>)</p></li><li><p><code>location</code>: \u5F53\u524D\u7684\u8DEF\u5F84\u4FE1\u606F\u3002<code>location</code> \u4F1A\u5177\u6709\u4EE5\u4E0B\u5C5E\u6027</p><ul><li><p><code>pathname</code> : URL \u8DEF\u5F84</p></li><li><p><code>search</code>: URL \u4E2D\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32</p></li><li><p><code>hash</code>: URL \u7684\u54C8\u5E0C\u7247\u6BB5</p></li><li><p><code>state</code>: \u83B7\u53D6<code>history.push(&#39;/about&#39;, {abc: 23})</code>\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C<code>history.location.state // {abc: 23}</code></p></li></ul></li><li><p><code>push(path, [state])</code>: \u5728 <code>history</code> \u5806\u6808\u6DFB\u52A0\u4E00\u4E2A\u8DEF\u7531\u8BB0\u5F55,\u5E76\u5C06\u8DEF\u7531\u81F3<code>path</code></p></li><li><p><code>replace(path, [state])</code>: \u66FF\u6362 <code>history</code> \u5F53\u524D\u8DEF\u7531\u8BB0\u5F55,\u5E76\u5C06\u8DEF\u7531\u81F3<code>path</code></p></li><li><p><code>go(n)</code>: \u76F4\u63A5\u5C06\u8DEF\u8F6C\u81F3 <code>history</code> \u67D0\u4E2A\u8BB0\u5F55\uFF0C\u5982<code>history.go(-1)// \u8FD4\u56DE\u4E0A\u4E00\u9875</code></p></li><li><p><code>goBack()</code>: \u7B49\u540C\u4E8E <code>go(-1)</code></p></li><li><p><code>goForward()</code>: \u7B49\u540C\u4E8E <code>go(1)</code></p></li><li><p><code>block(prompt)</code>: \u5141\u8BB8\u60A8\u76D1\u542C<code>location</code>\u5E76\u89E6\u53D1<code>window.confirm</code>\u63D0\u793A\u4FE1\u606F\u5448\u73B0\u7ED9\u7528\u6237</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6216\u8005\u5728\u9700\u8981\u65F6\u4F7F\u7528\u8FD4\u56DE\u6D88\u606F\u7684\u51FD\u6570\u3002
history.block((location, action) =&gt; {
  //location\u548Caction\u53C2\u6570\u6307\u793A\u6211\u4EEC\u8981\u8F6C\u6362\u5230\u7684\u4F4D\u7F6E\u4EE5\u53CA\u5982\u4F55\u5230\u8FBE\u90A3\u91CC\u3002

  //\u4E00\u4E2A\u5E38\u89C1\u7684\u7528\u4F8B\u662F\u9632\u6B62\u7528\u6237\u5728\u6709\u8868\u5355\u5C1A\u672A\u63D0\u4EA4\u65F6\u79BB\u5F00\u9875\u9762\u3002
  if (input.value !== &#39;&#39;) return &#39;Are you sure you want to leave this page?&#39;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u4F7F\u7528\u81EA\u5B9A\u4E49\u5F39\u5C42\u63D0\u793A\uFF0C\u9700\u8981\u91CD\u5199\u6B64\u884C\u4E3A\uFF0C\u5219\u5728\u521B\u5EFA\u5386\u53F2\u5BF9\u8C61\u65F6\u63D0\u4F9B<code>getUserConfirmation</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const history = createHistory({
  getUserConfirmation(message, callback) {
    // \u5411\u7528\u6237\u663E\u793A\u4E00\u4E9B\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u5E76\u8C03\u7528callback\uFF08true\uFF09\u7EE7\u7EED\u4F20\u8F93\uFF0C\u6216\u8C03\u7528callback\uFF08false\uFF09\u4E2D\u6B62\u4F20\u8F93\u3002
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>\u53EA\u6709\u901A\u8FC7 Route \u7EC4\u4EF6\u6E32\u67D3\u7684\u7EC4\u4EF6\uFF0C\u624D\u80FD\u5728 <code>this.props</code> \u4E0A\u627E\u5230 <code>history</code> \u5BF9\u8C61</strong></p><h1 id="\u8DEF\u7531\u8FC7\u6E21\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u8FC7\u6E21\u52A8\u753B" aria-hidden="true">#</a> \u8DEF\u7531\u8FC7\u6E21\u52A8\u753B</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { TransitionGroup, CSSTransition } from &quot;react-transition-group&quot;;

class App extends Component {

  render() {
    return (
      &lt;Provider store={store}&gt;
        &lt;Fragment&gt; 
          &lt;BrowserRouter&gt;
            &lt;div&gt;
              &lt;Header /&gt;
              
              {/* \u6700\u5916\u90E8\u7684&lt;Route&gt;&lt;/Route&gt;\u4E0D\u8FDB\u884C\u4EFB\u4F55\u8DEF\u7531\u5339\u914D\uFF0C\u4EC5\u4EC5\u662F\u7528\u6765\u4F20\u9012 location */}
              
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="createbrowserhistory" tabindex="-1"><a class="header-anchor" href="#createbrowserhistory" aria-hidden="true">#</a> createBrowserHistory</h1><p>\u4E0A\u6587\u6709\u63D0\u5230\u8FC7\uFF0C\u53EA\u6709\u8DEF\u7531\u7EC4\u4EF6\u7684<code>props</code>\u4E2D\u624D\u6709<code>history</code>\u65B9\u6CD5\uFF0C\u5BF9\u4E8E\u975E\u8DEF\u7531\u7EC4\u4EF6\u5982\u679C\u8981\u6709<code>history</code>\u5C5E\u6027\uFF0C\u6709\u4E24\u4E2A\u79CD\u65B9\u6CD5\uFF1A</p><ul><li><p>\u4F7F\u7528<code>withRouter</code>\u5305\u88C5\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { withRouter } from &#39;react-router-dom&#39;;
class Detail extends Component {
    render() {
        \xB7\xB7\xB7 \xB7\xB7\xB7
    } 
}
export default withRouter(Detail)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528<code>createBrowserHistory</code>\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createBrowserHistory } from &#39;history&#39;
function About() {
    console.log(createBrowserHistory())
    return &lt;h1&gt;Hello, About&lt;/h1&gt;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="\u96C6\u4E2D\u914D\u7F6E\u5F0F\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u96C6\u4E2D\u914D\u7F6E\u5F0F\u8DEF\u7531" aria-hidden="true">#</a> \u96C6\u4E2D\u914D\u7F6E\u5F0F\u8DEF\u7531</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React from &#39;react&#39;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function p(b,g){const n=r("ExternalLinkIcon");return t(),l("div",null,[c,e("p",null,[e("a",v,[u,a(n)])]),m])}var x=d(o,[["render",p],["__file","React-router5.html.vue"]]);export{x as default};
