"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[863],{1680:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-d35044e0",path:"/b-linkedlist/25.K%E4%B8%AA%E4%B8%80%E7%BB%84%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[25] K 个一组翻转链表",slug:"_25-k-个一组翻转链表",children:[]}],filePathRelative:"b-linkedlist/25.K个一组翻转链表.md",git:{updatedTime:1638718827e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},8681:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="_25-k-个一组翻转链表" tabindex="-1"><a class="header-anchor" href="#_25-k-个一组翻转链表" aria-hidden="true">#</a> [25] K 个一组翻转链表</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 4、退出条件，没有下一分段时返回null</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> head<span class="token punctuation">;</span>\n        <span class="token keyword">int</span> n <span class="token operator">=</span> k<span class="token punctuation">;</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">--</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 4、退出条件，当前分段不足k个时返回当前分段头节点，不反转</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>last<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n     \n        <span class="token comment">// 4、退出条件，k==1则每个分段只有一个节点，不需要反转</span>\n        <span class="token comment">// 这一个退出条件不要也行，但是会空跑一遍递归栈，建议保留</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>last <span class="token operator">==</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 1、是一个递归性质问题，每一个子问题都是反转链表前k个节点，返回新头结点</span>\n        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>last<span class="token punctuation">.</span>next<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 2、将当前分段的尾结点指向子问题返回的新头节点</span>\n        last<span class="token punctuation">.</span>next <span class="token operator">=</span> newHead<span class="token punctuation">;</span>\n\n        <span class="token comment">// 3、反转当前链表的头n个节点</span>\n        <span class="token keyword">return</span> <span class="token function">reverseTopK</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseTopK</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 3、明确退出条件——当k为1，不需要反转了，head直接返回</span>\n            <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 1、新递归公式含义——反转前k个节点并返回新的头结点</span>\n        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseTopK</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 2、把当前head挂到反转链上，然后将head指向第n+1个节点(这样反转链才完整)</span>\n        <span class="token class-name">ListNode</span> successor <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>\n        head<span class="token punctuation">.</span>next <span class="token operator">=</span> successor<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>',2),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);