"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[753],{906:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3540fe80",path:"/c-array/1094.%E6%8B%BC%E8%BD%A6.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[1109] 航班预订统计",slug:"_1109-航班预订统计",children:[{level:3,title:"差分数组",slug:"差分数组",children:[]}]}],filePathRelative:"c-array/1094.拼车.md",git:{updatedTime:1638718827e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},5027:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_1109-航班预订统计" tabindex="-1"><a class="header-anchor" href="#_1109-航班预订统计" aria-hidden="true">#</a> [1109] 航班预订统计</h2><h3 id="差分数组" tabindex="-1"><a class="header-anchor" href="#差分数组" aria-hidden="true">#</a> 差分数组</h3><p>时间复杂度O(n)；空间复杂度O(n)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// 问题就是一个差分数组，最后只要判断恢复的数组每一位是否小于capacity</span>\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">carPooling</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> trips<span class="token punctuation">,</span> <span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token comment">// 获取最长行程</span>\n        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> trip <span class="token operator">:</span> trips<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            n <span class="token operator">=</span> n <span class="token operator">&gt;=</span> trip<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">?</span> n <span class="token operator">:</span> trip<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    \n        <span class="token comment">// 因为行程是从0开始算，所以这里数组为n+1</span>\n        <span class="token class-name">Diff</span> diff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Diff</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> trip <span class="token operator">:</span> trips<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            diff<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>trip<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> trip<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> trip<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token comment">// 结果每一位代表行程为i时，承载的乘客数</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> diff<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> capacity<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>作为一个内部类放入待运行的类中即可</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Diff</span><span class="token punctuation">{</span>\n        \n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> diff<span class="token punctuation">;</span>\n\n        <span class="token comment">// 构建差分数组</span>\n        <span class="token keyword">public</span> <span class="token class-name">Diff</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            diff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 从left -&gt; right 每个元素加val</span>\n        <span class="token comment">// left\\right在这里从0开始</span>\n        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            diff<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+=</span> val<span class="token punctuation">;</span>\n            <span class="token comment">// 每段行程末尾减去乘客，含义是先下车</span>\n            diff<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">-=</span> val<span class="token punctuation">;</span>\n            <span class="token comment">//System.out.println(Arrays.toString(diff));</span>\n        <span class="token punctuation">}</span>\n\n         <span class="token comment">// 返回由差分数组diff还原后的数组</span>\n        <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>diff<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> diff<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> diff<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">//System.out.println(Arrays.toString(nums));</span>\n            <span class="token keyword">return</span> nums<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>',6),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);