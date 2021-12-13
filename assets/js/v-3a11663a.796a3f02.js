"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2725],{1963:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3a11663a",path:"/a-tree/297.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[297] 二叉树的序列化与反序列化",slug:"_297-二叉树的序列化与反序列化",children:[{level:3,title:"前序遍历",slug:"前序遍历",children:[]},{level:3,title:"中序遍历",slug:"中序遍历",children:[]},{level:3,title:"后序遍历",slug:"后序遍历",children:[]},{level:3,title:"层序遍历",slug:"层序遍历",children:[]}]}],filePathRelative:"a-tree/297.二叉树的序列化与反序列化.md",git:{updatedTime:1639371705e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},4193:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_297-二叉树的序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#_297-二叉树的序列化与反序列化" aria-hidden="true">#</a> [297] 二叉树的序列化与反序列化</h2><h3 id="前序遍历" tabindex="-1"><a class="header-anchor" href="#前序遍历" aria-hidden="true">#</a> 前序遍历</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Codec</span> <span class="token punctuation">{</span>\n\n    <span class="token class-name">String</span> SEP <span class="token operator">=</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> NULL <span class="token operator">=</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Encodes a tree to a single string.</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// Decodes your encoded data to tree.</span>\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nodes <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span> sb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> NULL<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nodes<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 前序遍历，第一个是根节点</span>\n        <span class="token class-name">String</span> rootVal <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>NULL<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n\t\t<span class="token comment">// 序列化是[根-&gt;左-&gt;右]，反序列化是按照相同序处理[根-&gt;左-&gt;右]，因为要先构造根节点</span>\n        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h3><p>先说结论，中序遍历的方式行不通，因为无法实现反序列化方法 <code>deserialize</code></p><p>要想实现反序列方法，首先要构造 <code>root</code> 节点。前序遍历得到的 <code>nodes</code> 列表中，第一个元素是 <code>root</code> 节点的值；后序遍历得到的 <code>nodes</code> 列表中，最后一个元素是 <code>root</code> 节点的值。中序遍历的代码，<code>root</code> 的值被夹在两棵子树的中间，也就是在 <code>nodes</code> 列表的中间，我们不知道确切的索引位置，所以无法找到 <code>root</code> 节点，也就无法进行反序列化。</p><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Codec</span> <span class="token punctuation">{</span>\n\n    <span class="token class-name">String</span> SEP <span class="token operator">=</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> NULL <span class="token operator">=</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Encodes a tree to a single string.</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// Decodes your encoded data to tree.</span>\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nodes <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span> sb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> NULL<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nodes<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token class-name">String</span> rootVal <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">pollLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>NULL<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 先构造右子树，后构造左子树</span>\n        <span class="token comment">// 序列化是[左-&gt;右-&gt;根]，反序列化是按照反序处理[根-&gt;右-&gt;左]，因为要先构造根节点</span>\n        <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="层序遍历" tabindex="-1"><a class="header-anchor" href="#层序遍历" aria-hidden="true">#</a> 层序遍历</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>待补充\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',10),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);