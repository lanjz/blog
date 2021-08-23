(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{750:function(v,_,t){"use strict";t.r(_);var e=t(55),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[v._v("#")]),v._v(" CDN")]),v._v(" "),t("p",[v._v("CDN（Content Delivery Network，内容分发网络）是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。")]),v._v(" "),t("p",[v._v("典型的CDN系统由下面三个部分组成：")]),v._v(" "),t("p",[t("strong",[v._v("分发服务系统：")]),v._v(" 最基本的工作单元就是Cache设备，cache（边缘cache）负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时cache还负责与源站点进行内容同步，把更新的内容以及本地没有的内容从源站点获取并保存在本地。Cache设备的数量、规模、总服务能力是衡量一个CDN系统服务能力的最基本的指标")]),v._v(" "),t("p",[t("strong",[v._v("负载均衡系统：")]),v._v(" 主要功能是负责对所有发起服务请求的用户进行访问调度，确定提供给用户的最终实际访问地址。两级调度体系分为全局负载均衡（GSLB）和本地负载均衡（SLB）。全局负载均衡主要根据用户就近性原则，通过对每个服务节点进行“最优”判断，确定向用户提供服务的cache的物理位置。本地负载均衡主要负责节点内部的设备负载均衡")]),v._v(" "),t("p",[t("strong",[v._v("运营管理系统：")]),v._v(" 运营管理系统分为运营管理和网络管理子系统，负责处理业务层面的与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。")]),v._v(" "),t("h2",{attrs:{id:"cdn-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn-的作用"}},[v._v("#")]),v._v(" CDN 的作用")]),v._v(" "),t("p",[v._v("CDN一般会用来托管Web资源（包括文本、图片和脚本等），可供下载的资源（媒体文件、软件、文档等），应用程序（门户网站等）。使用CDN来加速这些资源的访问。")]),v._v(" "),t("p",[v._v("（1）在性能方面，引入CDN的作用在于：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("用户收到的内容来自最近的数据中心，延迟更低，内容加载更快")])]),v._v(" "),t("li",[t("p",[v._v("部分资源请求分配给了CDN，减少了服务器的负载")])]),v._v(" "),t("li",[t("p",[v._v("突破浏览对相同域名的访问限制。浏览器在同一时间下对于同一域名的请求是有限制，如果使用CDN，那么这些获取资源的域名就不一样，就可以加快资源的获取")])])]),v._v(" "),t("p",[v._v("（2）在安全方面，CDN有助于防御DDoS、MITM等网络攻击：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("针对DDoS：通过监控分析异常流量，限制其请求频率")])]),v._v(" "),t("li",[t("p",[v._v("针对MITM：从源服务器到 CDN 节点到 ISP（Internet Service Provider），全链路 HTTPS 通信")])]),v._v(" "),t("li",[t("p",[v._v("为了异地备援")]),v._v(" "),t("p",[v._v("当某个服务器发生意外故障时，系统将会调用其他临近的健康服务器节点进行服务，进而提供接近100%的可靠性，这就让你的网站可以做到永不宕机。")])])]),v._v(" "),t("p",[v._v("除此之外，CDN作为一种基础的云服务，同样具有资源托管、按需扩展（能够应对流量高峰）等方面的优势")]),v._v(" "),t("h2",{attrs:{id:"cdn的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn的原理"}},[v._v("#")]),v._v(" CDN的原理")]),v._v(" "),t("p",[t("strong",[v._v("用户未使用CDN缓存资源的过程：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器通过DNS对域名进行解析（就是上面的DNS解析过程），依次得到此域名对应的IP地址")])]),v._v(" "),t("li",[t("p",[v._v("浏览器根据得到的IP地址，向域名的服务主机发送数据请求")])]),v._v(" "),t("li",[t("p",[v._v("服务器向浏览器返回响应数据")])])]),v._v(" "),t("p",[t("strong",[v._v("用户使用CDN缓存资源的过程：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("对于点击的数据的URL，经过本地DNS系统的解析，发现该URL对应的是一个CDN专用的DNS服务器，DNS系统就会将域名解析权交给CNAME指向的CDN专用的DNS服务器。")])]),v._v(" "),t("li",[t("p",[v._v("CND专用DNS服务器将CND的全局负载均衡设备IP地址返回给用户")])]),v._v(" "),t("li",[t("p",[v._v("CDN的全局负载均衡设备根据用户的IP地址，以及用户请求的内容URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求")])]),v._v(" "),t("li",[t("p",[v._v("区域负载均衡设备选择一台合适的缓存服务器来提供服务，将该缓存服务器的IP地址返回给全局负载均衡设备")])]),v._v(" "),t("li",[t("p",[v._v("全局负载均衡设备把服务器的IP地址返回给用户")])]),v._v(" "),t("li",[t("p",[v._v("用户向该缓存服务器发起请求，缓存服务器响应用户的请求，将用户所需内容发送至用户终端。")])])]),v._v(" "),t("p",[v._v("如果缓存服务器没有用户想要的内容，那么缓存服务器就会向它的上一级缓存服务器请求内容，以此类推，直到获取到需要的资源。最后如果还是没有，就会回到自己的服务器去获取资源")]),v._v(" "),t("h2",{attrs:{id:"q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[v._v("#")]),v._v(" Q&A")]),v._v(" "),t("p",[v._v("现在宽带这么发达，为何还需要 CDN? 主要有两方面的原因，第一个是带宽，第二个是延迟")]),v._v(" "),t("p",[t("strong",[v._v("带宽")])]),v._v(" "),t("p",[v._v("有人会说，我们家是500兆的光纤，还怕带宽不够么？事实上，这个500兆，是你家跟运营商的带宽，而不是你跟服务器的。举个例子，假如中国跟美国之间有一条万兆光纤，苹果公司发布了新款的iPhone手机，并在他们的服务器上传了新iPhone手机的照片，因为没有CDN，所以所有的人都要通过这条光纤去获取这张最近的图片，假如有10万个人同时去拉取这张图片，那么每个人能够分享到的就这有0.1兆了。")]),v._v(" "),t("p",[t("strong",[v._v("延迟")])]),v._v(" "),t("p",[v._v("你买一瓶可乐，如果是从美国发货，即便是坐超音速飞机，也要几个小时才能送过来。网络也是如此，网络传输是有速度的，从北京到硅谷，无论你是光纤、铜线、4G还是5G都最少也许要60毫秒才能一个来回。这就意味着，你在北京的服务器上传一张国庆举国欢庆的图片，你在美国的朋友，最少也要60毫秒后才能看到。这是建立在理想情况下，真实的情况是网络环境非常复杂，各种运营商，各种交换机，再加上TCP的慢启动，中间各种网络的丢包重试，可能需要好几秒才能够看到。")]),v._v(" "),t("p",[v._v("所以就像卖可乐一样，我们把可乐从美国运到中国，运输到中国各个省份，各个城市，甚至是你楼下的小卖部。那么你就可以非常方便的买到一瓶可乐。CDN也是如此，CDN的公司在全球各个地方都有机房，就好比你你楼下的全家，711。就可以非常迅速地获取到对应的资源了。")])])}),[],!1,null,null,null);_.default=a.exports}}]);