"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1365],{8754:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-61e8d280",path:"/b-linkedlist/23.%E5%90%88%E5%B9%B6K%E4%B8%AA%E5%8D%87%E5%BA%8F%E9%93%BE%E8%A1%A8.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[23] 合并K个升序链表",slug:"_23-合并k个升序链表",children:[]}],filePathRelative:"b-linkedlist/23.合并K个升序链表.md",git:{updatedTime:1639236212e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},4982:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_23-合并k个升序链表" tabindex="-1"><a class="header-anchor" href="#_23-合并k个升序链表" aria-hidden="true">#</a> [23] 合并K个升序链表</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> lists<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>lists <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> lists<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">int</span> k <span class="token operator">=</span> lists<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n        <span class="token class-name">ListNode</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>\n\n        <span class="token comment">// 一个数组记录每个子序列的游标</span>\n        <span class="token class-name">ListNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 难点在于每次找到k个元素中的最小值，这里用最小堆实现</span>\n        <span class="token comment">// 第一个参数是初始容量，第二个参数是比较器，升序就是构造最小堆</span>\n        <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span>val <span class="token operator">-</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 初始化：每个子序列都放当前第一个元素进去</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">ListNode</span> n <span class="token operator">=</span> lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">continue</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            pq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            cur<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10000</span> <span class="token operator">&amp;&amp;</span> pq<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 找到k个元素中最小的</span>\n            <span class="token class-name">ListNode</span> min <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            p<span class="token punctuation">.</span>next <span class="token operator">=</span> min<span class="token punctuation">;</span>\n            p <span class="token operator">=</span> min<span class="token punctuation">;</span>\n\n            <span class="token comment">// 找出这个最小元素是哪个子序列的，然后子序列向前推进</span>\n            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">ListNode</span> n <span class="token operator">=</span> cur<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token keyword">continue</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n\n                <span class="token keyword">if</span><span class="token punctuation">(</span>min <span class="token operator">==</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    n <span class="token operator">=</span> n<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n                    <span class="token comment">// 如果某个子序列没有数据了，减少参与合并的数量</span>\n                    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                        pq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n\n                    cur<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>\n                    <span class="token keyword">break</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> lists<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>lists <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> lists<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">int</span> k <span class="token operator">=</span> lists<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n        <span class="token class-name">ListNode</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>\n\n        <span class="token comment">// 难点在于每次找到k个元素中的最小值，这里用最小堆实现</span>\n        <span class="token comment">// 第一个参数是初始容量，第二个参数是比较器，升序就是构造最小堆</span>\n        <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span>val <span class="token operator">-</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 初始化：每个子序列都放当前第一个元素进去</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> n <span class="token operator">:</span> lists<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                pq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 只要堆里还有数据说明还没取完</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 找到k个元素中最小的</span>\n            <span class="token class-name">ListNode</span> min <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            p<span class="token punctuation">.</span>next <span class="token operator">=</span> min<span class="token punctuation">;</span>\n            p <span class="token operator">=</span> min<span class="token punctuation">;</span>\n\n            <span class="token comment">// 如果当前序列还有下一个则放入下一个</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>min<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                pq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>min<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>',3),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);