"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2352],{9238:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7b0d4966",path:"/a-tree/450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"450.删除二叉搜索树中的节点",slug:"_450-删除二叉搜索树中的节点",children:[]}],filePathRelative:"a-tree/450.删除二叉搜索树中的节点.md",git:{updatedTime:1639398825e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},8343:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_450-删除二叉搜索树中的节点" tabindex="-1"><a class="header-anchor" href="#_450-删除二叉搜索树中的节点" aria-hidden="true">#</a> 450.删除二叉搜索树中的节点</h2><p>主要思路，针对待删除节点，主要包含一下几种情况</p><p>1、如果没有子节点，直接删除(其实包含在第二种情况)</p><p>2、如果有一个子节点，则直接顶上去</p><p>3、如果有两个子节点，则要么返回左子树中最大节点，要么返回右子树最小节点</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 未找到要删除的节点，返回原树</span>\n            <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">==</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 1、如果没有子节点，直接删除(其实包含在第二种情况)</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">// 2、如果有一个子节点，则直接顶上去</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">// 3、如果有两个子节点，则要么返回左子树中最大节点，要么返回右子树最小节点</span>\n            <span class="token comment">// 查找左子树最大节点</span>\n            <span class="token class-name">TreeNode</span> p <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>\n            <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                p <span class="token operator">=</span> p<span class="token punctuation">.</span>right<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">// 从原左子树中删除该节点(因为要去替换被删除节点)，并将新左子树挂到新根节点</span>\n            p<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token comment">// 原根节点的右子树挂到新根节点</span>\n            p<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>\n\n            <span class="token comment">// 将左子树最大节点作为根节点返回</span>\n            <span class="token keyword">return</span> p<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>',6),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);