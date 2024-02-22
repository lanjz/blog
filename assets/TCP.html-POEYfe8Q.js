import{_ as p,r as l,o as i,c as a,b as e,d as c,a as d,e as n}from"./app-quQJY7jk.js";const s="/lanjz/assets/tcp_1-twaxiZ-j.png",t="/lanjz/assets/tcp_2-X2SlJVYs.png",r="/lanjz/assets/tcp_3-B7Cxzbxb.png",C="/lanjz/assets/tcp_5-4OIzkJP5.png",T={},P=n('<h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h1><p>TCP（Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的<strong>传输层</strong>通信协议</p><h2 id="tcp特性" tabindex="-1"><a class="header-anchor" href="#tcp特性" aria-hidden="true">#</a> TCP特性</h2><ul><li><p>TCP是对面连接、可靠的字节流服务</p></li><li><p>在一次TCP连接中，仅有两方进行通信。广播和多播不能用TCP</p></li><li><p>TCP使用校验和，确认和重传机制来保证可靠传输</p></li><li><p>TCP给数据分节进行排序，并使用累积确认保证数据的顺序不变和非重复</p></li><li><p>TCP使用滑动窗口机制来实现流量控制，通过动态改变窗口的大小进行拥塞控制</p></li></ul><p>需要注意的是：TPC并不能保证数据一定能百分百传输成功，TCP能做的只是，如果有可能就把数据传递给对方，否则就（通过放弃重传且中断连接的方式）通过用户。因此准确的说TCP不是百分百可靠的协议，它所能提供是数据的可靠传送或故障的通知</p><h2 id="三次握手与四次挥手" tabindex="-1"><a class="header-anchor" href="#三次握手与四次挥手" aria-hidden="true">#</a> 三次握手与四次挥手</h2><p>每次主动建立一次TCP连接，客户端和服务端需要共交换三个数据包，即三次握手</p><p>每次主动断开一次TCP连接，客户端和服务端需要共交换四个数据包，即四次挥手</p><p>TCT报文中有6种标志位：</p><ul><li><p>SYN：建立连接</p></li><li><p>ACK：是对收到的数据包的确认，值是<code>Acknowledge number</code></p></li><li><p>PSH：发送</p></li><li><p>FIN：结束</p></li><li><p>RST：重置</p></li><li><p>URG：紧急</p></li><li><p>Sequence number：序列号，为了建立连接以后传送数据的位置</p></li><li><p>Acknowledge number：表示期望对方（接收方）的下一次<code>sequence number</code>是多少</p></li></ul><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><p>三次握手的目的是连接服务器的指定端口，建立TCP连接，并同步双方的序列号和确认号交换TCP窗口大小信息,在Socket编程中客户端执行<code>connect()</code>时，将触发三次握手。</p><ul><li><p>第一次握手: <code>SYN(同步序列编号)=1</code>;<code>seq(序号)=x</code></p><ul><li><p><code>SYN=1</code>: 告诉服务器，这是一个希望建立连接请求</p></li><li><p><code>seq=x</code>: 一个随机的初始顺列号</p></li></ul><p>发送完毕后，客户端进入<code>SYN_SEND</code>状态。</p></li><li><p>第二次握手: <code>ACK=1</code>; <code>ACKnum=x+1</code>; <code>seq=y</code>; <code>SYN=1</code></p><ul><li><p><code>ACK=1</code>：用来确认收到客户端的SYN包</p></li><li><p><code>ACKnum=x+1</code>：准备接收序列号为<code>x+1</code>的包</p></li><li><p><code>SYN=1</code>：表明服务端也希望建立TCP连接</p></li><li><p><code>seq=y</code>: 发送自己的初始顺列号</p></li></ul><p>发送完毕后，服务器端进入<code>SYN_RCVD</code>状态</p></li><li><p>第三次握手: <code>ACK=1</code>; <code>ACKnum=y+1</code>；<code>seq=x+1</code></p><ul><li><p><code>ACK=1</code>：用来确认收到服务端的包</p></li><li><p><code>seq=x+1</code>: 此时序列号为<code>x+1</code>(对应上一步上的<code>ACKnum=x+1</code>)</p></li><li><p><code>ACKnum=y+1</code>：表示客户端准备接收服务端序列号为<code>y+1</code>的数据包</p></li></ul><p>发送完毕后，客户端和服务端都进入<code>ESTABLISEND</code>状态，TCP握手结束。</p></li></ul><p>三次握手图示：</p><p><img src="'+s+'" alt=""></p><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h3><p>TCP的连接的解除需要发送四个包，因此称为四次挥手。客户端和服务端均可以主动发起挥手动作，在<code>socket</code>编程中，任何一方执行<code>close()</code>操作即可产生挥手操作。</p><ul><li><p>第一次挥手: <code>FIN=1</code>; <code>seq=x</code></p><p>以客户端想要关闭连接为例</p><ul><li><p><code>FIN_WAIT_1</code>:表示自己已经没有数据可以发送了(但是仍然可以接受数据)</p></li><li><p><code>seq=x</code>: 序列号</p></li></ul><p>发送完毕后，客户端<code>FIN_WAIT_1</code>状态</p></li><li><p>第二次挥手: <code>ACK=1</code>; <code>ACKnum=x+1</code>; <code>seq=y</code></p><ul><li><p>ACK=1：确认收到包（但还没有准备好关闭连接）</p></li><li><p>ACKnum=x+1：准备接收<code>x+1</code>位置的包</p></li><li><p>seq=y： 发送自己报文的顺列号，这个ACK报文在服务器到客户端方向上数据传输流中的序列号。它标识了当前报文段发送的数据的起始字节位置</p></li></ul></li></ul><p>发送完毕后，服务器进入<code>CLOSE_WAIT</code>状态，客户端接收到这个确认包之后，进入<code>FIN_WAIT2</code>状态，等待服务器关闭连接</p><ul><li><p>第三次挥手：<code>FIN=1</code>; <code>ACK=1</code>; <code>seq=z</code>; <code>ACKnumber=x+1</code></p><ul><li><p><code>FIN=1</code>: 服务器端准备好关闭连接了</p></li><li><p><code>ACK=1</code>: 服务器端确认可以关闭连接了</p></li><li><p><code>seq=z</code>：是服务器发送的序列号，表示这个FIN报文序列号的位置</p></li><li><p><code>ACKnumber=x+1</code>：准备接收<code>x+1</code>位置的包</p></li></ul><p>发送完毕后，服务器进入<code>LAST_ACK</code>状态，等待来自客户端的最后一个ACK</p></li><li><p>第四次挥手：<code>ACK=1</code>; <code>seq=x+1</code>; <code>ACKnum=z+1</code></p><ul><li><p><code>ACK=1</code>: 确认收到包</p></li><li><p><code>seq=x+1</code>：包的位置（对应上面的<code>ACKnumber=x+1</code>）</p></li><li><p><code>ACKnum=z+1</code>: 准备接收<code>z+1</code>的位置的包</p></li></ul></li></ul><p>客户端接收来自服务器端的关闭请求，发送一个确认包，并进入<code>TIME_WAIT</code>状态，等待可能出现的要求重传的<code>ACK包</code></p><p>服务器端接收到这个确认包之后，关闭连接，进入<code>close</code>状态</p><p>客户端等待了某个固定时间之后，没有收到服务器端的<code>ACK</code>，认为服务器端已经正常关闭连接，于是自己也关闭连接，进入<code>CLOSED</code>状态。</p><p>四次挥手的示意图如下：</p><p><img src="'+t+'" alt=""></p><h3 id="seq和acknum" tabindex="-1"><a class="header-anchor" href="#seq和acknum" aria-hidden="true">#</a> Seq和ACKnum</h3><ul><li><p><code>seq</code>:表示当前要传输的数据在包中的位置</p></li><li><p><code>ACKnum</code>: 表示希望下次对方传数据过来时，数据在包中的位置</p></li></ul><p>拿下完整的TCP连接-HTTP请求-TCP断开列子来理解一下</p><p><strong>ACK仅仅表示确认的意思，下面图中的ACK表示的是 ACKnum</strong></p><p><img src="'+r+'" alt=""></p><ol><li><p>=》包1：TCP会话的任何一端开始的序列号可能是随机也有可能是上一个该端口的序列号+1，这里假设从 0 开始（<code>seq=0,SYN=1</code>）</p></li><li><p>《= 包2：服务端收到客户端的请求，并在响应中标记<code>ACK_N=0+1</code>告诉客户端下次数据从<code>1</code>位置开始传输，同时标记<code>seq=0</code>表示自己当前序列位置</p></li><li><p>=》包3：收到服务端的响应后，客户端继续做出回应，此时标记<code>seq=1</code>（对应包2中的<code>ACK_N=0+1</code>），同时标记<code>ACK_N=1</code>(对应包2的<code>seq=0+1</code>)，表示希望服务端下次传数据从<code>1</code>位置开始</p></li></ol><p>此时TCP握手成功</p><ol start="4"><li><p>=》包4：客户端开始发送HTTP请求，此时请求包标记<code>seq=1</code>，之所以仍为 1 是因为目前还没发送过数据，位置不需要改变，同时也对应包2的<code>ACK_N=1</code>；<code>ACK_N</code>也还是<code>1</code>（因为没收到服务端任何数据，维持包3的位置），除了这些标记还传送了 725 字节长度的数据</p></li><li><p>《= 包5：服务端收到请求了，当前标记<code>seq=1</code>（因为目前服务端没传送过任何数据，不需要改变位置，同时对应包4中的<code>ACK_N=1</code>），<code>ACK_N=725+1</code>(因为客户端发送了<code>725</code>字节的数据)，那么下次希望客户端从<code>726</code>位置开始传送数据</p></li><li><p>《= 包6：紧接着服务端发送<code>1448</code>字节长度的数据，此时标记<code>seq=1</code>（因为在这之前没传送过任何数据，不需要改变位置，同时也对应包4的<code>ACK_N=1</code>），<code>ACK_N=725+1</code>(同包5，因为客户端发送了<code>725</code>字节的数据)，那么下次希望客户端从<code>726</code>位置开始传送数据</p></li><li><p>=》包7：此时客户端<code>seq=726</code>（对应包6中的<code>ACK_N=725+1</code>），<code>ACK_N</code>是<code>1448+1</code>（因为目前包6中服务端发送了<code>1448</code>字节长度的数据），告诉服端希望下次从<code>1449</code>位置开始传输数据</p></li><li><p>《= 包8：服务端再次发送<code>1448</code>字节长度的数据，此时标记<code>seq=1449</code>（对应客户端的<code>ACK_N=1449</code>），<code>ACK_N=726</code>(因为目前为客户端共发送了<code>725</code>字节的数据)，那么下次希望客户端从<code>726</code>位置开始传送数据</p></li><li><p>=》包9：客户端<code>seq=726</code>(对应包8中的<code>ACK_N=726</code>)，<code>ACK_N=1448+1448+1=2896</code>(服务传过的两次数据的长度+1)，表示下次服端应从<code>2896</code>位置开始传输数据</p></li><li><p>《= 包10：<code>seq=2896</code>(对应包9中的<code>ACK_N=2896</code>)，<code>ACK_N=726</code>（因为目前为客户端共发送了<code>725</code>字节的数据），同时发送<code>1448</code>字节的数据</p></li><li><p>=》包11：<code>seq=726</code>(对应包10中的<code>ACK_N=726</code>),<code>ACK_N=1448+1448+1448+1=4345</code>(共发送了4344的字节长度+1)</p></li></ol><p>以此类推</p><p>接下来断开连接</p><ol start="12"><li><p>=》 包12： <code>seq=627</code>（还是之前的值），<code>ACK_N=4345</code>(还是之前的值,即使要断开也要通知一下，如果万一你还有数据过来，请放在这个位置),<code>FIN=1</code>表示要断开连接了</p></li><li><p>《= 包13：<code>seq=4345</code>（对应包12的<code>ACK_N=4345</code>）<code>ACK_N=627+1=628</code></p></li><li><p>《= 包13：<code>seq=4345</code>（保持之前包13的）<code>ACK_N=628</code>（保持之前包13的）,<code>FIN=1</code>表示要断开连接了</p></li><li><p>=&gt; 包14：客户端发送<code>ACK=1</code>,<code>seq=628</code>,<code>ACK_N=4345</code>，结束</p></li></ol><h3 id="syn攻击" tabindex="-1"><a class="header-anchor" href="#syn攻击" aria-hidden="true">#</a> SYN攻击</h3><p>什么是 SYN 攻击（SYN Flood）？</p><p>在三次握手过程中，服务器发送 SYN-ACK 之后，收到客户端的 ACK 之前的 TCP 连接称为半连接(half-open connect)。此时服务器处于 SYN_RCVD 状态。当收到 ACK 后，服务器才能转入 ESTABLISHED 状态.</p><p>SYN 攻击指的是，攻击客户端在短时间内伪造大量不存在的IP地址，向服务器不断地发送SYN包，服务器回复确认包，并等待客户的确认。由于源地址是不存在的，服务器需要不断的重发直至超时，这些伪造的SYN包将长时间占用未连接队列，正常的SYN请求被丢弃，导致目标系统运行缓慢，严重者会引起网络堵塞甚至系统瘫痪。</p><p>SYN 攻击是一种典型的 DoS/DDoS 攻击</p><p><strong>如何检测 SYN 攻击？</strong></p><p>检测 SYN 攻击非常的方便，当你在服务器上看到大量的半连接状态时，特别是源IP地址是随机的，基本上可以断定这是一次SYN攻击。在 Linux/Unix 上可以使用系统自带的 netstats 命令来检测 SYN 攻击</p><p><strong>如何防御 SYN 攻击？</strong></p><p>SYN攻击不能完全被阻止，除非将TCP协议重新设计。我们所做的是尽可能的减轻SYN攻击的危害，常见的防御 SYN 攻击的方法有如下几种：</p><ul><li><p>缩短超时（SYN Timeout）时间</p></li><li><p>增加最大半连接数</p></li><li><p>过滤网关防护</p></li><li><p>SYN cookies技术</p></li></ul><h2 id="tcp-keepalive" tabindex="-1"><a class="header-anchor" href="#tcp-keepalive" aria-hidden="true">#</a> TCP KeepAlive</h2><p>TCP 的连接，实际上是一种纯软件层面的概念，在物理层面并没有“连接”这种概念。TCP 通信双方建立交互的连接，但是并不是一直存在数据交互，有些连接会在数据交互完毕后，主动释放连接，而有些不会。在长时间无数据交互的时间段内，交互双方都有可能出现掉电、死机、异常重启等各种意外，当这些意外发生之后，这些 TCP 连接并未来得及正常释放，在软件层面上，连接的另一方并不知道对端的情况，它会一直维护这个连接，长时间的积累会导致非常多的半打开连接，造成端系统资源的消耗和浪费，为了解决这个问题，在传输层可以利用 TCP 的 KeepAlive 机制实现来实现。主流的操作系统基本都在内核里支持了这个特性。</p><p>TCP KeepAlive 的基本原理是，隔一段时间给连接对端发送一个探测包，如果收到对方回应的 ACK，则认为连接还是存活的，在超过一定重试次数之后还是没有收到对方的回应，则丢弃该 TCP 连接。</p><h3 id="tcp-keepalive-的局限" tabindex="-1"><a class="header-anchor" href="#tcp-keepalive-的局限" aria-hidden="true">#</a> TCP KeepAlive 的局限</h3><p>首先 TCP KeepAlive 监测的方式是发送一个 probe 包，会给网络带来额外的流量，另外 TCP KeepAlive 只能在内核层级监测连接的存活与否，而连接的存活不一定代表服务的可用。例如当一个服务器 CPU 进程服务器占用达到 100%，已经卡死不能响应请求了，此时 TCP KeepAlive 依然会认为连接是存活的。因此 TCP KeepAlive 对于应用层程序的价值是相对较小的。需要做连接保活的应用层程序，例如 QQ，往往会在应用层实现自己的心跳功能。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TCP KeepAlive和HTTP KeepAlive是两个东西！</p></div><h2 id="队头阻塞" tabindex="-1"><a class="header-anchor" href="#队头阻塞" aria-hidden="true">#</a> 队头阻塞</h2><p>TCP传输过程中会把数据拆分为一个个按照顺序排列的数据包，这些数据包通过网络传输到了接收端，接收端再按照顺序将这些数据包组合成原始数据，这样就完成了数据传输。</p><p>但是如果其中的某一个数据包没有按照顺序到达，接收端会一直保持连接等待数据包返回，这时候就会阻塞后续请求。这就发生了TCP队头阻塞</p><p><strong>HTTP的队头阻塞</strong></p><p>HTTP和TCP都存在队头阻塞，虽然HTTP2的多路复用解决了HTTP的队头阻塞问题，但是TCP的队头阻塞仍然存在</p><p>同时要注意到 HTTP/1.1 中规定一个域名可以有6个TCP连接。而HTTP/2中，同一个域名只是用一个TCP连接。</p><p>所以，在HTTP/2中，TCP队头阻塞造成的影响会更大，因为HTTP/2的多路复用技术使得多个请求其实是基于同一个TCP连接的，那如果某一个请求造成了TCP队头阻塞，那么多个请求都会受到影响</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TCP 和HTTP 各自都存在队头阻塞！</p></div><h2 id="tcp握手时长" tabindex="-1"><a class="header-anchor" href="#tcp握手时长" aria-hidden="true">#</a> TCP握手时长</h2><p>一提到TCP协议，大家最先想到的一定是他的三次握手与四次关闭的特性。</p><p>因为TCP是一种可靠通信协议，而这种可靠就是靠三次握手实现的，通过三次握手，TCP在传输过程中可以保证接收方收到的数据是完整，有序，无差错的。</p><p>但是，问题是三次握手是需要消耗时间的，这里插播一个关于网络延迟的概念。</p><p>网络延迟又称为 RTT(Round Trip Time)。他是指一个请求从客户端浏览器发送一个请求数据包到服务器，再从服务器得到响应数据包的这段时间。RTT 是反映网络性能的一个重要指标。</p><p><img src="'+C+'" alt=""></p><p>我们知道，TCP三次握手的过程客户端和服务器之间需要交互三次，那么也就是说需要消耗1.5 RTT</p><p>另外，如果使用的是安全的HTTPS协议，就还需要使用TLS协议进行安全数据传输，这个过程又要消耗一个RTT(TLS不同版本的握手机制不同，这里按照最小的消耗来算)</p><p>那么也就是说，一个纯HTTP/2的连接，需要消耗1.5个RTT，如果是一个HTTPS连接，就需要消耗3-4个RTT。</p><p>而具体消耗的时长根据服务器和客户端之间的距离则不尽相同，如果比较近的话，消耗在100ms以内，对于用来说可能没什么感知，但是如果一个RTT的耗时达到300-400ms，那么，一次连接建立过程总耗时可能要达到一秒钟左右，这时候，用户就会明显的感知到网页加载很慢</p><h2 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h2><p>上文先上TCP是面向连接的协议，也就是说，在收发数据前，必须和对方建立可靠的连接。 一个TCP连接必须要经过三次“对话”才能建立起来</p><p>UDP是一个非连接的协议，传输数据之前源端和终端不建立连接， 发送端尽可能快的将数据扔到网络上，接收端从消息队列中读取消息段 在发送端，UDP传送数据的速度仅仅是受应用程序生成数据的速度、 计算机的能力和传输带宽的限制<br> 在接收端，UDP把每个消息段放在队列中，应用程序每次从队列中读一个消息段。</p><p>和 TCP 相比，UDP 有以下几个特性：</p><ul><li><p>由于传输数据不建立连接，因此也就不需要维护连接状态，包括收发状态等， 因此一台服务机可同时向多个客户机传输相同的消息</p></li><li><p>UDP信息包的标题很短，只有8个字节，相对于TCP的20个字节信息包的额外开销很小</p></li><li><p>吞吐量不受拥挤控制算法的调节，只受应用软件生成数据的速率、传输带宽、 源端和终端主机性能的限制</p></li><li><p>UDP使用尽最大努力交付，即不保证可靠交付， 因此主机不需要维持复杂的链接状态表（这里面有许多参数）</p></li><li><p>TCP协议面向字节流，将应用层报文看成一串无结构的字节流，分解为多个TCP报文段传输后，在目的站重新装配; UDP是面向报文的。不拆分应用层报文，只保留报文边界，一次发送一个报文，接收方去除报文首部后，原封不动将报文交给上层应用</p></li><li><p>TCP只能点对点全双工通信;UDP支持一对一、一对多、多对一和多堆垛的交互通信</p></li></ul><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h2><p><strong>为什么建立连接需要三次握手，关闭连接需要四次握手</strong></p><p>因为关闭连接时，在收到对方的<code>FIN报文</code>通知时，仅仅表示没有数据要发送给你了，但未必你所有的数据都全部发送给对方了，也就是说你可能还会发送一份数据给对方之后，再发<code>·FIN报文</code>对对方表示同意关闭连接，所以它这里的<code>ACK报文</code>和<code>FIN报文</code>是分开发送</p><p><strong>为什么需要三次握手，而非两次</strong></p><ol><li><p>第二次握手可以确认服务器到客户端的通信是正常的</p></li><li><p>第三次握手可以确认客户端到服务器的通信也是正常的</p></li><li><p>为了防止已经失效的连接请求报文段突然又传到服务端，因而产生错误。</p></li></ol><p>假设客户端发送的SYN报文段在网络中延迟了（比如因为网络拥堵），并且在延迟到达服务器之前，客户端因为某种原因取消了连接请求。如果这个延迟的SYN报文段最终到达服务器，服务器会认为这是一个新的连接请求，于是准备建立连接,但实际上，由于这是一个旧的或者已经被客户端视为无效的连接请求，结果是服务器端会为一个实际上不存在的连接分配资源导致服务器的性能和资源利用</p><p>简而言之，三次握手是一个设计上的折衷，保证连接的可靠性</p><p><strong>TCP第四次挥手为什么要等待2MSL</strong></p><p>最主要是因为两个理由:</p><ol><li><p>为了保证客户端发送的最后一个<code>ACK报文段</code>能够到达服务器。因为这个<code>ACK</code>有可能丢失，从而导致处在<code>LAST-ACK</code>状态的服务器收不到对<code>FIN-ACK</code>的确认报文。服务器会超时重传这个<code>FIN-ACK</code>，接着客户端再重传一次确认，重新启动时间等待计时器。最后客户端和服务器都能正常的关闭。假设客户端不等待<code>2MSL</code>，而是在发送完<code>ACK</code>之后直接释放关闭，一但这个<code>ACK</code>丢失的话，服务器就无法正常的进入关闭连接状态</p></li><li><p>客户端在发送<code>ACK</code>后，再等待<code>2MSL</code>时间，可以使本次连接所产生的数据段从网络中消失，从而保证下次建立连接后不会产生数据冲突</p></li></ol><p><strong>seq是随机选择某个数么</strong></p><p>不是完全随机的，<code>seq</code>一般是基于时间，利用散列函数（这个函数一定时间也会轮换）计算而成的，目的是防止被猜测序列号从而被伪造攻击。同时因为是基于时间的，所以几乎不会与最近断开的或正在等待中的序列号相同</p>',87),A={href:"https://blog.csdn.net/a19881029/article/details/38091243",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hit-alibaba.github.io/interview/basic/network/TCP.html",target:"_blank",rel:"noopener noreferrer"};function u(K,N){const o=l("ExternalLinkIcon");return i(),a("div",null,[P,e("blockquote",null,[e("p",null,[e("a",A,[c("理解TCP序列号（Sequence Number）和确认号（Acknowledgment Number)"),d(o)])])]),e("blockquote",null,[e("p",null,[e("a",h,[c("TCP特性"),d(o)])])])])}const S=p(T,[["render",u],["__file","TCP.html.vue"]]);export{S as default};
