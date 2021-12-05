"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[610],{1778:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-09307713",path:"/c-array/560.%E5%92%8C%E4%B8%BAK%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[560] 和为 K 的子数组",slug:"_560-和为-k-的子数组",children:[{level:3,title:"前缀和+迭代",slug:"前缀和-迭代",children:[]},{level:3,title:"前缀和",slug:"前缀和",children:[]}]}],filePathRelative:"c-array/560.和为K的子数组.md",git:{updatedTime:1638718827e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},7066:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_560-和为-k-的子数组" tabindex="-1"><a class="header-anchor" href="#_560-和为-k-的子数组" aria-hidden="true">#</a> [560] 和为 K 的子数组</h2><h3 id="前缀和-迭代" tabindex="-1"><a class="header-anchor" href="#前缀和-迭代" aria-hidden="true">#</a> 前缀和+迭代</h3><p>时间复杂度O(n<sup>2</sup>)；空间复杂度O(n)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">subarraySum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preNums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preNums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            preNums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> preNums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">//System.out.println(Arrays.toString(preNums));</span>\n        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 计算当前i的前缀和与k的差值</span>\n            <span class="token keyword">int</span> sub <span class="token operator">=</span> preNums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> k<span class="token punctuation">;</span>\n            <span class="token comment">// 将差值在0...i的前缀和里面找，出现一次累计一次</span>\n            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>preNums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> sub<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    count<span class="token operator">++</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="前缀和" tabindex="-1"><a class="header-anchor" href="#前缀和" aria-hidden="true">#</a> 前缀和</h3><p>从第一种解法看出，第二层for循环实际就是在查找某个前缀和<code>(preNums[i+1] - k)</code>出现的次数，因为本题并是返回次数并不是通过前缀和来求区域和，所以并不需要保留前缀和数组<code>preSums</code>，只需要保留<code>preMap</code>用来存储前缀和出现的次数</p><p>时间复杂度O(n)；空间复杂度O(n)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">subarraySum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> preMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n        preMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">int</span> preSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            preSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n            <span class="token comment">// 求差值</span>\n            <span class="token keyword">int</span> sub <span class="token operator">=</span> preSum <span class="token operator">-</span> k<span class="token punctuation">;</span>\n\n            <span class="token comment">// 这里一定是在当前前缀和放到map之前计数</span>\n            count <span class="token operator">+=</span> preMap<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>sub<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            preMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>preSum<span class="token punctuation">,</span> preMap<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>preSum<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',8),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);