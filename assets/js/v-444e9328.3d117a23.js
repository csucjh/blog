"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4074],{9164:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-444e9328",path:"/a-tree/701.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%8F%92%E5%85%A5%E6%93%8D%E4%BD%9C.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"701. 二叉搜索树中的插入操作",slug:"_701-二叉搜索树中的插入操作",children:[{level:3,title:"递归+无辅助函数",slug:"递归-无辅助函数",children:[]},{level:3,title:"递归+辅助函数",slug:"递归-辅助函数",children:[]}]}],filePathRelative:"a-tree/701.二叉搜索树中的插入操作.md",git:{updatedTime:1639371705e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},7384:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_701-二叉搜索树中的插入操作" tabindex="-1"><a class="header-anchor" href="#_701-二叉搜索树中的插入操作" aria-hidden="true">#</a> 701. 二叉搜索树中的插入操作</h2><h3 id="递归-无辅助函数" tabindex="-1"><a class="header-anchor" href="#递归-无辅助函数" aria-hidden="true">#</a> 递归+无辅助函数</h3><p>题目前提是BST，然后插入的值是不等于树中任意节点的值，所以只需要递归比较根节点，找到最后那个根节点为null的位置就是目标位置</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// 前提是BST，所以插入新节点就是比较与根节点的大小然后找到插入位置</span>\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    root<span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    root<span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="递归-辅助函数" tabindex="-1"><a class="header-anchor" href="#递归-辅助函数" aria-hidden="true">#</a> 递归+辅助函数</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// 前提是BST，所以插入新节点就是比较与根节点的大小然后找到插入位置</span>\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 辅助函数增加了根节点的父节点，用于挂载新插入的节点</span>\n    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> parent<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">// 注意要返回根节点</span>\n            <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token comment">// 将新节点挂到父节点上</span>\n        <span class="token class-name">TreeNode</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>parent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;</span> parent<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                parent<span class="token punctuation">.</span>left <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                parent<span class="token punctuation">.</span>right <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>',6),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);