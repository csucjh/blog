import{c as n}from"./app.8bfe1516.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_165-\u6BD4\u8F83\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#_165-\u6BD4\u8F83\u7248\u672C\u53F7" aria-hidden="true">#</a> 165.\u6BD4\u8F83\u7248\u672C\u53F7</h2><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><p>1\u3001\u4F7F\u7528\u4E00\u4E2A\u8F85\u52A9\u7C7B<code>Version</code>\u5C01\u88C5\u5B57\u7B26\u4E32<code>version1</code>\u548C<code>version2</code>\u7684[start, end)\u533A\u95F4\u8303\u56F4\uFF0C\u5B57\u7B26\u4E32\u957F\u5EA6n\uFF0C\u5F85\u6BD4\u5BF9\u4FEE\u8BA2\u53F7v</p><p>2\u3001\u5B9A\u4E49\u4E00\u4E2A\u516C\u5171<code>calVersion</code>\u51FD\u6570\u7528\u6765\u8BA1\u7B97\u5B57\u7B26\u4E32\u7684\u4FEE\u8BA2\u7248\u672C\u53F7</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareVersion</span><span class="token punctuation">(</span><span class="token class-name">String</span> version1<span class="token punctuation">,</span> <span class="token class-name">String</span> version2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u521D\u59CB\u5316\u957F\u5EA6</span>
        <span class="token class-name">Version</span> v1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Version</span><span class="token punctuation">(</span>version1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Version</span> v2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Version</span><span class="token punctuation">(</span>version2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//System.out.println(&quot;n1:&quot;+v1.n+&quot;-n2:&quot;+v2.n);</span>
  
        <span class="token comment">// \u76F4\u5230\u4E24\u4E2A\u5B57\u7B26\u4E32\u90FD\u5BF9\u6BD4\u5B8C\u6BD5\u9000\u51FA</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>v2<span class="token punctuation">.</span>n <span class="token operator">&gt;=</span> v2<span class="token punctuation">.</span>start  <span class="token operator">||</span> v1<span class="token punctuation">.</span>n <span class="token operator">&gt;=</span> v1<span class="token punctuation">.</span>start<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u8BA1\u7B97\u7248\u672C\u53F7</span>
            <span class="token function">calVersion</span><span class="token punctuation">(</span>v2<span class="token punctuation">,</span> version2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">calVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> version1<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5F53\u4E24\u4E2A\u5B57\u7B26\u4E32\u90FD\u80FD\u627E\u5230\u4FEE\u8BA2\u53F7\uFF0C\u6216\u8005\u5176\u4E2D\u4E00\u4E2A\u7ED3\u675F</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>end <span class="token operator">&gt;</span> v1<span class="token punctuation">.</span>start <span class="token operator">&amp;&amp;</span> v2<span class="token punctuation">.</span>end <span class="token operator">&gt;</span> v2<span class="token punctuation">.</span>start <span class="token operator">||</span> v1<span class="token punctuation">.</span>n <span class="token operator">&lt;</span> v1<span class="token punctuation">.</span>start <span class="token operator">||</span> v2<span class="token punctuation">.</span>n <span class="token operator">&lt;</span> v2<span class="token punctuation">.</span>start<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//System.out.println(&quot;v1:&quot;+v1.v+&quot;-v2:&quot;+v2.v);</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>v <span class="token operator">&lt;</span> v2<span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>v <span class="token operator">&gt;</span> v2<span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// start\u524D\u8FDB</span>
                v1<span class="token punctuation">.</span>start <span class="token operator">=</span> v1<span class="token punctuation">.</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                v2<span class="token punctuation">.</span>start <span class="token operator">=</span> v2<span class="token punctuation">.</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u7528\u4E8E\u67E5\u627E\u5B57\u7B26\u4E32\u7684\u4E0B\u4E00\u4E2A\u5F85\u5BF9\u6BD4\u7684\u4FEE\u8BA2\u53F7</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">calVersion</span><span class="token punctuation">(</span><span class="token class-name">Version</span> v<span class="token punctuation">,</span> <span class="token class-name">String</span> version<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>n <span class="token operator">&lt;</span> v<span class="token punctuation">.</span>start<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5B57\u7B26\u4E32start\u6BD4n\u5927\u8BF4\u660E\u5F53\u524D\u5B57\u7B26\u4E32\u5DF2\u7ECF\u7ED3\u675F\u4E86\uFF0C\u7248\u672C\u53F7\u76F4\u63A5\u662F0</span>
            v<span class="token punctuation">.</span>v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             <span class="token comment">// \u6BCF\u5BF9\u6BD4\u4E00\u6B21\uFF0Cstart\u90FD\u4F1A\u66F4\u65B0\u4E3Aend+1\uFF0C\u6240\u4EE5end&lt;=start\u5C31\u662F\u5DF2\u7ECF\u5BF9\u6BD4\u8FC7\u4E86\uFF0C\u9700\u8981\u67E5\u627E\u4E0B\u4E00\u4E2A\u4FEE\u8BA2\u53F7</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>end <span class="token operator">&lt;=</span> v<span class="token punctuation">.</span>start<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> idx <span class="token operator">=</span> version<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// -1\u5C31\u662F\u5DF2\u7ECF\u627E\u5230\u6700\u540E\u4E86</span>
                v<span class="token punctuation">.</span>end <span class="token operator">=</span> idx <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> v<span class="token punctuation">.</span>n <span class="token operator">:</span> idx<span class="token punctuation">;</span>

                <span class="token comment">// \u622A\u53D6[start, end)\u8303\u56F4\u5185\u5B57\u7B26\uFF0C\u89E3\u6790\u6210\u5F53\u524D\u4FEE\u8BA2\u7248\u672C\u53F7</span>
                v<span class="token punctuation">.</span>v <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>version<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>start<span class="token punctuation">,</span> v<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F85\u52A9\u7C7B\u4FBF\u4E8E\u5904\u7406</span>
<span class="token keyword">class</span> <span class="token class-name">Version</span><span class="token punctuation">{</span>

    <span class="token comment">// [start, end)\u8868\u793A\u4E00\u4E2A\u4FEE\u8BA2\u53F7\u7684\u533A\u95F4\u8303\u56F4</span>
    <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> end <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8868\u793A\u5F53\u524D\u5BF9\u6BD4\u7684\u4FEE\u8BA2\u53F7</span>
    <span class="token keyword">int</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5B57\u7B26\u4E32\u957F\u5EA6</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Version</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>n <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,5);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
