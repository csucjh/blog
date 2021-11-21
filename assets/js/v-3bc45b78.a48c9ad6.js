"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[671],{1959:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3bc45b78",path:"/%E9%93%BE%E8%A1%A8/19.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%AC%20N%20%E4%B8%AA%E7%BB%93%E7%82%B9.html",title:"[19] 删除链表的倒数第 N 个结点",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"链表/19.删除链表的倒数第 N 个结点.md",git:{updatedTime:1637508007e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},8389:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="_19-删除链表的倒数第-n-个结点" tabindex="-1"><a class="header-anchor" href="#_19-删除链表的倒数第-n-个结点" aria-hidden="true">#</a> [19] 删除链表的倒数第 N 个结点</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 问题实际转化为找倒数第n+1个节点(要删除倒数第n个必须找到上一个)</span>\n        <span class="token comment">// 为了边界条件好处理，用一个虚拟头结点</span>\n        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>\n\n\n        <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> dummy<span class="token punctuation">,</span> p2 <span class="token operator">=</span> dummy<span class="token punctuation">;</span>\n        <span class="token keyword">int</span> k <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        \n        <span class="token comment">// p1先前进k，然后同步前进p2,当p1到末尾时p2在倒数第k个节点</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                k<span class="token operator">--</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 此时p2已在倒数k处</span>\n        p2<span class="token punctuation">.</span>next <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',2),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);