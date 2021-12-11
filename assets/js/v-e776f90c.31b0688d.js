"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6124],{5775:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-e776f90c",path:"/a-tree/98.%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[98] 验证二叉搜索树",slug:"_98-验证二叉搜索树",children:[]}],filePathRelative:"a-tree/98.验证二叉搜索树.md",git:{updatedTime:1639236212e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},384:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const p=(0,a(6252).uE)('<h2 id="_98-验证二叉搜索树" tabindex="-1"><a class="header-anchor" href="#_98-验证二叉搜索树" aria-hidden="true">#</a> [98] 验证二叉搜索树</h2><p>使用Long的取值范围，是因为这里判断根节点范围时使用了闭区间，而节点的取值范围本就是int的范围，所以在加1或者减1时会超出取值范围，就要用Long</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// 不能只判断当前根节点左右子节点的大小，而是判断根节点左子树和右子树中节点的大小</span>\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">return</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">.</span>MIN_VALUE<span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// minVal和maxVal是当前root节点的取值范围</span>\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">long</span> minVal<span class="token punctuation">,</span> <span class="token keyword">long</span> maxVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 左子树必须小于其根节点的值，但是必须大于根节点的父节点的值</span>\n        <span class="token keyword">boolean</span> leftValid <span class="token operator">=</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> minVal <span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">boolean</span> rightValid <span class="token operator">=</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">,</span>maxVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">boolean</span> rootValid <span class="token operator">=</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> minVal <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> maxVal<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> rootValid <span class="token operator">&amp;&amp;</span> leftValid <span class="token operator">&amp;&amp;</span> rightValid<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>使用对象来作为取值范围实际上更优雅</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// 不能只判断当前根节点左右子节点的大小，而是判断根节点左子树和右子树中节点的大小</span>\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">return</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// minVal和maxVal是当前root节点的取值范围</span>\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> min<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 左子树必须小于其根节点的值，但是必须大于根节点的父节点的值</span>\n        <span class="token keyword">boolean</span> leftValid <span class="token operator">=</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> min <span class="token punctuation">,</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">boolean</span> rightValid <span class="token operator">=</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root <span class="token punctuation">,</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 这里对root的值限定范围变成了否定式，实际上就是(min,max)开区间范围 </span>\n        <span class="token keyword">boolean</span> rootValid <span class="token operator">=</span> <span class="token punctuation">(</span>min <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> min<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>max <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> max<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token operator">!</span>rootValid <span class="token operator">&amp;&amp;</span> leftValid <span class="token operator">&amp;&amp;</span> rightValid<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',5),t={},o=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);