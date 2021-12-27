import{c as n}from"./app.adb7e313.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_48-\u65CB\u8F6C\u56FE\u50CF" tabindex="-1"><a class="header-anchor" href="#_48-\u65CB\u8F6C\u56FE\u50CF" aria-hidden="true">#</a> 48.\u65CB\u8F6C\u56FE\u50CF</h2><h3 id="\u904D\u5386\u65CB\u8F6C-\u81EA\u5DF1\u505A\u7684" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u65CB\u8F6C-\u81EA\u5DF1\u505A\u7684" aria-hidden="true">#</a> \u904D\u5386\u65CB\u8F6C(\u81EA\u5DF1\u505A\u7684)</h3><p>\u601D\u8DEF\uFF1A</p><p>1\u3001\u987A\u65F6\u9488\u65CB\u8F6C90\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5C06[i,j]\u653E\u5230[j, n-i-1]\u4F4D\u7F6E</p><p>2\u3001\u6BCF\u6B21\u987A\u65F6\u9488\u65CB\u8F6C\u5B9E\u9645\u4E0A\u4F1A\u8F6C\u4E00\u4E2A\u73AF\uFF0C\u56DE\u5230\u539F\u70B9[i,j]</p><p>3\u3001\u5F53\u5904\u4E8E\u884Ci\u65F6\uFF0Cj\u53D6\u503C\u8303\u56F4\u8868\u793A\u5F53\u524D\u884C\u7684\u73AF\u6570\u91CF\uFF0Cj\u7684\u53D6\u503C\u8303\u56F4\u5FC5\u987B\u5728[i, n-i-1)\uFF0C\u4E0D\u7136\u4F1A\u548C\u5F53\u524Di\u5C42\u7684\u73AF\u6709\u91CD\u5408</p><p>4\u3001\u5F53i\u884C\u7684\u73AF\u5904\u7406\u5B8C\u6BD5\u540E\uFF0C\u9700\u8981\u5728\u5185\u5C42\u540C\u6837\u903B\u8F91\u5904\u7406\uFF0C\u7531\u4E8E\u73AF\u7684\u5BF9\u79F0\u6027\uFF0Ci\u53EA\u9700\u8981\u5904\u7406\u4E00\u534A[0,n/2+1)\uFF0C\u4E0D\u7136\u4F1A\u6709\u91CD\u5408</p><p>5\u3001\u5728\u540C\u5C42\u6216\u8005\u5185\u5916\u5C42\u4E4B\u95F4\uFF0C\u53EA\u8981\u6709\u91CD\u5408\u7ED3\u679C\u5C31\u4F1A\u88AB\u91CD\u590D\u66FF\u6362\uFF0C\u56E0\u6B64\u8981\u5B8C\u5168\u907F\u514D\u91CD\u5408</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u987A\u65F6\u9488\u65CB\u8F6C90\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5C06[i,j]\u653E\u5230[j, n-i-1]\u4F4D\u7F6E</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      
        <span class="token comment">// \u6BCF\u6B21\u987A\u65F6\u9488\u65CB\u8F6C\u5B9E\u9645\u4E0A\u4F1A\u8F6C\u4E00\u4E2A\u73AF\uFF0C\u56DE\u5230\u539F\u70B9[i,j]</span>
        <span class="token comment">// \u56E0\u6B64\uFF0C\u5F53\u5904\u4E8E\u884Ci\u65F6\uFF0Cj\u53D6\u503C\u8303\u56F4\u8868\u793A\u5F53\u524D\u884C\u7684\u73AF\u6570\u91CF\uFF0Cj\u7684\u53D6\u503C\u8303\u56F4\u5FC5\u987B\u5728[i, n-i-1)\uFF0C\u4E0D\u7136\u4F1A\u548C\u5F53\u524Di\u5C42\u7684\u73AF\u6709\u91CD\u5408</span>
        <span class="token comment">// \u5F53i\u884C\u7684\u73AF\u5904\u7406\u5B8C\u6BD5\u540E\uFF0C\u9700\u8981\u5728\u5185\u5C42\u540C\u6837\u903B\u8F91\u5904\u7406\uFF0C\u7531\u4E8E\u73AF\u7684\u5BF9\u79F0\u6027\uFF0Ci\u53EA\u9700\u8981\u5904\u7406\u4E00\u534A[0,n/2+1)\uFF0C\u4E0D\u7136\u4F1A\u6709\u91CD\u5408</span>
        <span class="token comment">// \u5728\u540C\u5C42\u6216\u8005\u5185\u5916\u5C42\u4E4B\u95F4\uFF0C\u53EA\u8981\u6709\u91CD\u5408\u7ED3\u679C\u5C31\u4F1A\u88AB\u91CD\u590D\u66FF\u6362\uFF0C\u56E0\u6B64\u8981\u907F\u514D\u91CD\u5408</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">/</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5BF9\u4E8E\u5217\u9700\u8981\u5904\u7406\u7684\u8303\u56F4\u662F\u4ECE[i, n-i-1)</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//System.out.println(&quot;i:&quot;+i+&quot;-j:&quot;+j);</span>
                <span class="token comment">// \u5B9A\u4E49\u65CB\u8F6C\u540E\u7684\u4F4D\u7F6E</span>
                <span class="token keyword">int</span> rt_i <span class="token operator">=</span> i<span class="token punctuation">,</span> rt_j <span class="token operator">=</span> j<span class="token punctuation">,</span> last_val <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

                <span class="token comment">// \u5F53\u66FF\u6362\u7684\u5143\u7D20\u7B49\u4E8E\u6574\u4E2A\u77E9\u9635\u5143\u7D20\u6570\u91CF\u65F6\u9000\u51FA</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                    <span class="token comment">//System.out.print(&quot;rt_i:&quot;+rt_i+&quot;-rt_j:&quot;+rt_j+&quot;-last_val:&quot;+last_val);</span>
                    <span class="token comment">// \u8BA1\u7B97\u65CB\u8F6C\u540E\u4F4D\u7F6E</span>
                    <span class="token keyword">int</span> temp_i <span class="token operator">=</span> rt_j<span class="token punctuation">;</span>
                    rt_j <span class="token operator">=</span> n <span class="token operator">-</span> rt_i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    rt_i <span class="token operator">=</span> temp_i<span class="token punctuation">;</span>

                    <span class="token comment">//System.out.prrt_intln(&quot;rt_i:&quot;+rt_i+&quot;-rt_j:&quot;+rt_j);</span>
                    <span class="token comment">// \u4EA4\u6362\u5230\u76EE\u6807\u4F4D\u7F6E\uFF0C\u5E76\u4FDD\u7559\u88AB\u8986\u76D6\u7684\u503C\uFF0C\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u5F85\u4EA4\u6362\u7684\u5143\u7D20</span>
                    <span class="token keyword">int</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>rt_i<span class="token punctuation">]</span><span class="token punctuation">[</span>rt_j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    matrix<span class="token punctuation">[</span>rt_i<span class="token punctuation">]</span><span class="token punctuation">[</span>rt_j<span class="token punctuation">]</span> <span class="token operator">=</span> last_val<span class="token punctuation">;</span>
                    last_val <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                    <span class="token comment">//System.out.println(&quot;----&gt;rt_i:&quot;+rt_i+&quot;-rt_j:&quot;+rt_j+&quot;-last_val:&quot;+last_val);</span>
                    
                    <span class="token comment">// \u6BCF\u66FF\u6362\u4E00\u6B21\uFF0C\u8BA1\u6570</span>
                    count<span class="token operator">++</span><span class="token punctuation">;</span>
	
                    <span class="token comment">// \u6CA1\u6267\u884C\u56DB\u4E2A\u8282\u70B9\u7684\u65CB\u8F6C\u4E4B\u540E\u90FD\u4F1A\u56DE\u5230\u8D77\u70B9\uFF0C\u56E0\u6B64\u8981\u9000\u51FA\uFF0C\u5F00\u59CB\u4E0B\u4E00\u4E2A\u8D77\u70B9\u7684\u65CB\u8F6C</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>rt_i <span class="token operator">==</span> i <span class="token operator">&amp;&amp;</span> rt_j <span class="token operator">==</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="\u904D\u5386\u65CB\u8F6C-\u5B98\u65B9\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u65CB\u8F6C-\u5B98\u65B9\u601D\u8DEF" aria-hidden="true">#</a> \u904D\u5386\u65CB\u8F6C(\u5B98\u65B9\u601D\u8DEF)</h3><p>\u5728\u5BF9\u7B2C\u4E00\u79CD\u65B9\u5F0F\u7814\u7A76\u540E\u53D1\u73B0\uFF0C\u6BCF\u6B21while\u5FAA\u73AF\u6267\u884C\u56DB\u4E2A\u8282\u70B9\u7684\u65CB\u8F6C\u4E4B\u540E\u90FD\u4F1A\u56DE\u5230\u8D77\u70B9\uFF0C\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u662F\u56DB\u4E2A\uFF0C\u5176\u5B9E\u5F88\u597D\u7406\u89E3\u4E00\u4E2A\u56DB\u8FB9\u5F62\u9010\u4E2A\u8FB9\u65CB\u8F6C\u5143\u7D20\u540E\u81EA\u7136\u4F1A\u56DE\u5230\u8D77\u70B9\uFF0C\u4E3A\u4E86\u907F\u514D\u5143\u7D20\u88AB\u8986\u76D6\u7528temp\u6765\u5B58\u50A8\u8D77\u70B9\u5143\u7D20\u7684\u503C\uFF0C\u7136\u540E\u4EE5\u9006\u65F6\u9488\u65B9\u5411\u6765\u8D4B\u503C(\u987A\u65F6\u9488\u4E5F\u53EF\u4EE5\uFF0C\u4F46\u662F\u8981\u591A\u5199\u4E00\u4E9Btemp\u53D8\u91CF\u8D4B\u503C\u7684\u4EE3\u7801)\uFF0C\u5177\u4F53\u770B\u5982\u4E0B\u516C\u5F0F\uFF1A</p><p><img src="https://user-images.githubusercontent.com/12841424/147475564-5cec11bf-73f0-486f-9549-00193d72d29c.png" alt="image"></p><p>\u5F53\u6211\u4EEC\u77E5\u9053\u4E86\u5982\u4F55\u539F\u5730\u65CB\u8F6C\u77E9\u9635\u4E4B\u540E\uFF0C\u8FD8\u6709\u4E00\u4E2A\u91CD\u8981\u7684\u95EE\u9898\u5728\u4E8E\uFF1A\u6211\u4EEC\u5E94\u8BE5\u679A\u4E3E\u54EA\u4E9B\u4F4D\u7F6E[row,col] \u8FDB\u884C\u4E0A\u8FF0\u7684\u539F\u5730\u4EA4\u6362\u64CD\u4F5C\u5462\uFF1F\u7531\u4E8E\u6BCF\u4E00\u6B21\u539F\u5730\u4EA4\u6362\u56DB\u4E2A\u4F4D\u7F6E\uFF0C\u56E0\u6B64\u4E3A\u4E86\u907F\u514D\u91CD\u590D\u65CB\u8F6C\uFF0C \u6211\u4EEC\u5E94\u8BE5\u5C06\u77E9\u9635\u5747\u5206\u4E3A\u56DB\u4EFD\uFF0C\u7136\u540E\u9488\u5BF9\u5176\u4E2D\u7684\u4E00\u4EFD\u8FDB\u884C\u8FED\u4EE3\uFF0C\u5F53\u6211\u4EEC\u8FED\u4EE3\u5C0F\u77E9\u9635\u4E2D[row,col]\u65F6\uFF0C\u90FD\u4F1A\u6309\u7167\u4E0A\u9762\u7684\u516C\u5F0F\u6620\u5C04\u5230\u53E6\u5916\u4E09\u4E2A\u5C0F\u77E9\u9635\u4E2D\u5BF9\u5E94\u7684\u5143\u7D20\uFF0C\u5F53\u4E00\u4E2A\u5C0F\u77E9\u9635\u8FED\u4EE3\u5B8C\u6BD5\uFF0C\u56DB\u4E2A\u5C0F\u77E9\u9635\u4E5F\u8DDF\u7740\u8FED\u4EE3\u5B8C\u6BD5\u4E86\uFF0C\u800C\u4E14\u6CA1\u6709\u91CD\u53E0\u533A\u57DF\u3002</p><p><strong>\u5F53n\u4E3A\u5076\u6570\u65F6</strong>\uFF0C\u6211\u4EEC\u9700\u8981\u679A\u4E3E n<sup>2</sup> / 4 = (n/2) * (n/2)\u4E2A\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u5C06\u8BE5\u56FE\u5F62\u5206\u4E3A\u56DB\u5757\uFF0C\u4EE54\xD74 \u7684\u77E9\u9635\u4E3A\u4F8B:</p><p><img src="https://user-images.githubusercontent.com/12841424/147475649-b178d062-b948-422c-be58-0a0edb52626d.png" alt="image"></p><p><strong>\u5F53n\u4E3A\u5947\u6570\u65F6</strong>\uFF0C\u7531\u4E8E\u4E2D\u5FC3\u7684\u4F4D\u7F6E\u7ECF\u8FC7\u65CB\u8F6C\u540E\u4F4D\u7F6E\u4E0D\u53D8\uFF0C\u6211\u4EEC\u9700\u8981\u679A\u4E3E (n<sup>2</sup> -1)/ 4 = ((n-1)/2) * ((n+1)/2)\u4E2A\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u5C06\u8BE5\u56FE\u5F62\u5206\u4E3A\u56DB\u5757\uFF0C\u4EE55\xD75\u7684\u77E9\u9635\u4E3A\u4F8B:</p><p><img src="https://user-images.githubusercontent.com/12841424/147475671-9721bcb6-36cc-4f0a-b847-8c5c02858f8d.png" alt="image"></p><p>\u6211\u4EEC\u53D1\u73B0\u5B50\u77E9\u9635\u7684\u884Crow\u662Fn/2\u6216\u8005(n-1)/2\uFF1B\u5217col\u662Fn/2\u6216\u8005(n+1)/2\uFF1B\u6211\u4EEC\u53D6\u8F83\u5927\u503Crow=n/2\uFF0Ccol=(n+1)/2\uFF1B\u8FD9\u6837\u65E0\u8BBAn\u662F\u5947\u6570\u8FD8\u662F\u5076\u6570\u90FD\u662F\u7B26\u5408\u4E0A\u8FF0\u63A8\u65AD\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>n<span class="token operator">-</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                matrix<span class="token punctuation">[</span>n<span class="token operator">-</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                matrix<span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6211\u4EEC\u53D1\u73B0\u540C\u6837\u662F\u65CB\u8F6C\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u7B2C\u4E00\u79CD\u81EA\u5DF1\u5B9E\u73B0\u7684\u8981\u7B80\u6D01\u7684\u591A\uFF0C\u8FD8\u9700\u8981\u52AA\u529B\u5440~</p><h3 id="\u7FFB\u8F6C\u4EE3\u66FF\u65CB\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u7FFB\u8F6C\u4EE3\u66FF\u65CB\u8F6C" aria-hidden="true">#</a> \u7FFB\u8F6C\u4EE3\u66FF\u65CB\u8F6C</h3>`,21);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
