"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[291],{2547:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-35494b9c",path:"/%E9%93%BE%E8%A1%A8/%E5%89%91%E6%8C%87%20Offer%2022.%20%E9%93%BE%E8%A1%A8%E4%B8%AD%E5%80%92%E6%95%B0%E7%AC%ACk%E4%B8%AA%E8%8A%82%E7%82%B9.html",title:"剑指 Offer 22. 链表中倒数第k个节点",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"链表/剑指 Offer 22. 链表中倒数第k个节点.md",git:{updatedTime:1637746101e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},4301:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="剑指-offer-22-链表中倒数第k个节点" tabindex="-1"><a class="header-anchor" href="#剑指-offer-22-链表中倒数第k个节点" aria-hidden="true">#</a> 剑指 Offer 22. 链表中倒数第k个节点</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getKthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 定义两个指针</span>\n        <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> head<span class="token punctuation">,</span> p2 <span class="token operator">=</span> head<span class="token punctuation">;</span>\n\n        <span class="token comment">// p1先前进k个，剩下n-k，然后p1,p2同时前进，当p1到末尾时p2刚好走了n-k</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 因为循环退出条件是p1.next,这里k大于1就要开始让p2同步进行，否则最后p2会少走了一步</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>        \n                k<span class="token operator">--</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> p2<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',2),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);