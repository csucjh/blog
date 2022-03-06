import{c as n}from"./app.4bcc0b6d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_29-\u4E24\u6570\u76F8\u9664" tabindex="-1"><a class="header-anchor" href="#_29-\u4E24\u6570\u76F8\u9664" aria-hidden="true">#</a> 29.\u4E24\u6570\u76F8\u9664</h2><h3 id="\u51CF\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u51CF\u6CD5" aria-hidden="true">#</a> \u51CF\u6CD5</h3><p>\u6574\u4F53\u601D\u8DEF\u662F\u4F7F\u7528\u51CF\u6CD5\uFF0C\u9700\u8981\u4FDD\u8BC1\u540C\u53F7</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token comment">// \u6574\u4F53\u601D\u8DEF\u662F\u4F7F\u7528\u51CF\u6CD5\uFF0C\u4FDD\u8BC1\u540C\u53F7</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">int</span> dividend<span class="token punctuation">,</span> <span class="token keyword">int</span> divisor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8D1F\u6570\u7684\u6700\u5C0F\u503C\u9664\u4EE5-1\u4F1A\u8D85\u8FC7\u6B63\u6570\u6700\u5927\u503C</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>dividend <span class="token operator">==</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MIN_VALUE <span class="token operator">&amp;&amp;</span> divisor <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u4EFB\u4F55\u6570\u9664\u4EE51\u90FD\u662F\u672C\u8EAB</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>divisor <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> dividend<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u8BB0\u5F55\u7B26\u53F7,flag=true\u8868\u793A\u6700\u540E\u7ED3\u679C\u662F\u8D1F\u6570</span>
        <span class="token comment">// dividend, divisor\u5F02\u6216, \u5982\u679C\u7ED3\u679C\u5C0F\u4E8E\u96F6\u8BF4\u660E\u5C31\u662F\u5F02\u53F7</span>
        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token punctuation">(</span>dividend <span class="token operator">^</span> divisor<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
        <span class="token comment">// \u53D8\u6210\u4E24\u4E2A\u8D1F\u6570\uFF0C\u6B63\u6570\u8981\u6EA2\u51FA</span>
        dividend <span class="token operator">=</span> dividend <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> dividend <span class="token operator">:</span> <span class="token operator">-</span>dividend<span class="token punctuation">;</span>
        divisor <span class="token operator">=</span> divisor <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> divisor <span class="token operator">:</span> <span class="token operator">-</span>divisor<span class="token punctuation">;</span>

        <span class="token comment">// \u51CF\u6CD5\u7684\u6B21\u6570\u5C31\u662F\u5546</span>
        <span class="token keyword">int</span> total_cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>dividend <span class="token operator">&lt;=</span> divisor<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u56E0\u4E3AMath.abs(dividend) &gt;= Math.abs(divisor), \u6240\u4EE5\u5546\u81F3\u5C11\u662F1</span>
            <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u6570\u8868\u793A\u7ECF\u8FC7n\u6B21\u51CF\u6CD5\u540E\uFF0C\u603B\u5171\u51CF\u53BB\u7684\u548C</span>
            <span class="token comment">// \u56E0\u4E3A\u81F3\u5C11\u51CF\u53BB\u4E00\u6B21\uFF0C\u6240\u4EE5\u521D\u59CB\u503C\u662Fdivisor</span>
            <span class="token keyword">int</span> sub_sum <span class="token operator">=</span> divisor<span class="token punctuation">;</span>

            <span class="token comment">// \u5982\u679C\u6EE1\u8DB3\u500D\u6570\u5173\u7CFB\uFF0C\u76F4\u63A5\u6BCF\u6B21\u6309\u500D\u6570\u51CF\u6CD5\uFF0C\u63D0\u5347\u6548\u7387</span>
            <span class="token comment">// \u53EA\u8981\u6709dividend &lt;= 2 * sub_sum, \u5219\u53EF\u4EE5\u6BCF\u6B21\u4EE5\u4E24\u500D\u51CF\u6CD5\u6765\u8BA1\u7B97</span>
            <span class="token comment">// \u56E0\u4E3A\u4E0D\u80FD\u7528\u4E58\u53F7\uFF0C\u6240\u4EE5\u53D8\u6210dividend - sub_sum &lt;= sub_sum</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>dividend <span class="token operator">-</span> sub_sum <span class="token operator">&lt;=</span> sub_sum<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// sub_sum&lt;&lt;1\u76F8\u5F53\u4E8E\u5728\u4E0A\u4E00\u8F6E\u7684\u57FA\u7840\u4E0Adividend\u53D8\u6210\u4E86dividend-sub_sum\u7684\u503C\uFF0C\u518D\u53C2\u4E0Ewhile\u6761\u4EF6\u5224\u65AD</span>
                sub_sum <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token comment">// cnt&lt;&lt;1\u662F\u56E0\u4E3A\u6BCF\u6B21\u5FAA\u73AF\u5B9E\u9645\u4E0A\u662F\u505A\u4E86\u4E0A\u4E00\u6B21\u4E24\u500D\u7684\u51CF\u6CD5(\u56E0\u4E3Asub_sum\u53D8\u6210\u4E24\u500D\u4E86)</span>
                cnt <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// dividend\u8981\u51CF\u53BB\u672C\u8F6E\u51CF\u53BB\u7684\u6570\uFF0C\u4FBF\u4E8E\u4E0B\u4E00\u8F6E\u8BA1\u7B97</span>
            <span class="token comment">// sub_sum\u6BCF\u8F6E\u8BA1\u7B97\u5B8C\u6BD5\u540E\u90FD\u76F8\u5F53\u4E8E\u662Fn\u6B21\u51CF\u6CD5\u51CF\u53BB\u7684\u603B\u548C</span>
            dividend <span class="token operator">-=</span> sub_sum<span class="token punctuation">;</span>
            <span class="token comment">// \u51CF\u6CD5\u603B\u6B21\u6570\u52A0\u4E0A\u672C\u8F6E\u7684\u6B21\u6570</span>
            total_cnt <span class="token operator">+=</span> cnt<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> flag <span class="token operator">?</span> <span class="token operator">-</span>total_cnt <span class="token operator">:</span> total_cnt<span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,4);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
