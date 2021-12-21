import{c as n}from"./app.4cfb0e3e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_598-\u8303\u56F4\u6C42\u548Cii" tabindex="-1"><a class="header-anchor" href="#_598-\u8303\u56F4\u6C42\u548Cii" aria-hidden="true">#</a> 598.\u8303\u56F4\u6C42\u548CII</h2><h3 id="\u4EA4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u96C6" aria-hidden="true">#</a> \u4EA4\u96C6</h3><p>\u601D\u8DEF\u4E0E\u7B97\u6CD5</p><p>\u5BF9\u4E8E\u6BCF\u4E00\u6B21\u64CD\u4F5C\uFF0C\u7ED9\u5B9A (a, b)\u6211\u4EEC\u4F1A\u5C06\u77E9\u9635\u4E2D\u6240\u6709\u6EE1\u8DB3 0\u2264i&lt;a \u4EE5\u53CA 0\u2264j&lt;b \u7684\u4F4D\u7F6E (i, j)\u5168\u90E8\u52A0\u4E0A 1\u3002\u7531\u4E8E a, b\u5747\u4E3A\u6B63\u6574\u6570\uFF0C\u56E0\u6B64\u5C31\u662F\u627E\u5230\u6700\u5C0F\u7684a\u548Cb\uFF0C\u5176\u4EE3\u8868\u7684\u6700\u5C0F\u77E9\u5F62\u8303\u56F4\u5185\u7684\u5143\u7D20\u4E2A\u6570\u5C31\u662F\u9898\u76EE\u6C42\u89E3\u95EE\u9898</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ops<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> min_a <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">,</span> min_b <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ops<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> op <span class="token operator">=</span> ops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            min_a <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min_a<span class="token punctuation">,</span> op<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            min_b <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min_b<span class="token punctuation">,</span> op<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> min_a <span class="token operator">*</span> min_b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FDB\u4E00\u6B65\u4F18\u5316\uFF0Ca \u7684\u8303\u56F4\u662F [1,m]\uFF0Cb \u7684\u8303\u56F4\u662F [1,n]\uFF0C\u56E0\u6B64\u7B80\u5316\u4E00\u4E0B\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u521D\u59CB\u503C\u76F4\u63A5\u4E3Am\u3001n\uFF0C\u4EE3\u7801\u66F4\u7CBE\u7B80\u4E86</span>
        <span class="token keyword">int</span> min_a <span class="token operator">=</span> m<span class="token punctuation">,</span> min_b <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ops<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> op <span class="token operator">=</span> ops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            min_a <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min_a<span class="token punctuation">,</span> op<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            min_b <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min_b<span class="token punctuation">,</span> op<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> min_a <span class="token operator">*</span> min_b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,7);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
