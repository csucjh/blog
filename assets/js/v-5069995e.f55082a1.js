"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3443],{6835:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5069995e",path:"/a-tree/538.%E6%8A%8A%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E8%BD%AC%E6%8D%A2%E4%B8%BA%E7%B4%AF%E5%8A%A0%E6%A0%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[538] 把二叉搜索树转换为累加树",slug:"_538-把二叉搜索树转换为累加树",children:[{level:3,title:"后序遍历",slug:"后序遍历",children:[]}]}],filePathRelative:"a-tree/538.把二叉搜索树转换为累加树.md",git:{updatedTime:1639236212e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},7991:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h2 id="_538-把二叉搜索树转换为累加树" tabindex="-1"><a class="header-anchor" href="#_538-把二叉搜索树转换为累加树" aria-hidden="true">#</a> [538] 把二叉搜索树转换为累加树</h2><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h3><p>思路：如果要求图中节点1的累加值，实际上就是求图中红圈内的节点的和，BST的特性就是左子树小于根节点，根节点小于右子树</p><p>考虑的BST的后序遍历是[右子数—&gt;根—&gt;左子树]，所以在后序遍历时用一个临时变量记录累加和</p><p><img src="https://user-images.githubusercontent.com/12841424/144879267-72a6eecd-1118-4122-9580-6e6a7bf099f5.jpg" alt="1638806370(1)"></p><p>1、BST后序遍历</p><p>2、临时变量记录累加和</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">convertBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token function">convertBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        sum <span class="token operator">+=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>val <span class="token operator">=</span> sum<span class="token punctuation">;</span>\n        \n        <span class="token function">convertBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',8),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);