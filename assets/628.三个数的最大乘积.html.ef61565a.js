import{c as n}from"./app.006116ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_628-\u4E09\u4E2A\u6570\u7684\u6700\u5927\u4E58\u79EF" tabindex="-1"><a class="header-anchor" href="#_628-\u4E09\u4E2A\u6570\u7684\u6700\u5927\u4E58\u79EF" aria-hidden="true">#</a> 628.\u4E09\u4E2A\u6570\u7684\u6700\u5927\u4E58\u79EF</h2><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u5982\u679C\u5168\u6B63\u6216\u8005\u5168\u8D1F\uFF0C\u90FD\u662F\u53D6\u6700\u5927\u7684\u4E09\u4E2A\u6570\u76F8\u4E58 \u6709\u6B63\u6709\u8D1F\uFF0C\u6700\u5C0F\u7684\u53EF\u80FD\u662F\u4E24\u4E2A\u8D1F\u6570\u76F8\u4E58\u540E\u662F\u6B63\u6570\uFF0C\u8FD9\u65F6\u53EA\u80FD\u518D\u4E58\u4E00\u4E2A\u6700\u5927\u7684\u6B63\u6570 \u6240\u4EE5\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u6700\u5927\u7684\u4E09\u4E2A\u6570\u548C\u6700\u5C0F\u7684\u4E24\u4E2A\u6570\uFF0C\u7136\u540E\u6BD4\u8F83[\u6700\u5927\u4E09\u4E2A\u6570\u7684\u4E58\u79EF]\u4E0E[\u6700\u5C0F\u4E24\u4E2A\u6570\u4E0E\u6700\u5927\u7684\u6570]\u4E58\u79EF\u5373\u53EF</p><h3 id="\u56DE\u6EAF" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6EAF" aria-hidden="true">#</a> \u56DE\u6EAF</h3><p>\u867D\u7136\u4F7F\u7528\u56DE\u6EAF\u66B4\u529B\u6C42\u89E3\u4F1A\u8D85\u51FA\u65F6\u95F4\u9650\u5236\uFF0C\u4F46\u662F\u601D\u8DEF\u662F\u5BF9\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token class-name">Integer</span> max <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maximumProduct</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">LinkedList</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span> <span class="token class-name">LinkedList</span><span class="token operator">::</span><span class="token function">offer</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">track</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> max <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u56DE\u6EAF\u51FD\u6570\uFF0Cnums\u662F\u9009\u62E9\uFF0Ctracks\u662F\u8DEF\u5F84</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> nums<span class="token punctuation">,</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> tracks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tracks<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> mul <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> track <span class="token operator">:</span> tracks<span class="token punctuation">)</span><span class="token punctuation">{</span>
                mul <span class="token operator">*=</span> track<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            max <span class="token operator">=</span> max <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> mul <span class="token operator">:</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> mul<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u6BCF\u6B21\u505A\u5B8C\u9009\u62E9\u9700\u8981\u66F4\u65B0\u5269\u4F59\u9009\u62E9nums\u5217\u8868</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            tracks<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5F00\u59CB\u4E0B\u4E00\u4E2A\u51B3\u7B56</span>
            <span class="token function">track</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token punctuation">,</span>tracks<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5F00\u59CB\u64A4\u9500\u9009\u62E9\uFF0C\u5E76\u8FD8\u539F\u539F\u59CB\u9009\u62E9\u5217\u8868</span>
            tracks<span class="token punctuation">.</span><span class="token function">pollLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maximumProduct</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> max_first <span class="token operator">=</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> max_second <span class="token operator">=</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> max_third <span class="token operator">=</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> min_first <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> min_second <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max_first <span class="token operator">*</span> max_second <span class="token operator">*</span> max_third<span class="token punctuation">,</span> min_first <span class="token operator">*</span> min_second <span class="token operator">*</span> max_first<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="o-n" tabindex="-1"><a class="header-anchor" href="#o-n" aria-hidden="true">#</a> O(n)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// \u5982\u679C\u5168\u6B63\u6216\u8005\u5168\u8D1F\uFF0C\u90FD\u662F\u53D6\u6700\u5927\u7684\u4E09\u4E2A\u6570\u76F8\u4E58</span>
    <span class="token comment">// \u6709\u6B63\u6709\u8D1F\uFF0C\u6700\u5C0F\u7684\u53EF\u80FD\u662F\u4E24\u4E2A\u8D1F\u6570\u76F8\u4E58\u540E\u662F\u6B63\u6570\uFF0C\u8FD9\u65F6\u53EA\u80FD\u518D\u4E58\u4E00\u4E2A\u6700\u5927\u7684\u6B63\u6570</span>
    <span class="token comment">// \u6240\u4EE5\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u6700\u5927\u7684\u4E09\u4E2A\u6570\u548C\u6700\u5C0F\u7684\u4E24\u4E2A\u6570\uFF0C\u7136\u540E\u6BD4\u8F83[\u6700\u5927\u4E09\u4E2A\u6570\u7684\u4E58\u79EF]\u4E0E[\u6700\u5C0F\u4E24\u4E2A\u6570\u4E0E\u6700\u5927\u7684\u6570]\u4E58\u79EF\u5373\u53EF</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maximumProduct</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> max_first <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MIN_VALUE<span class="token punctuation">,</span> max_second <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MIN_VALUE<span class="token punctuation">,</span> max_third <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MIN_VALUE<span class="token punctuation">;</span>
        <span class="token keyword">int</span> min_first <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">,</span> min_second <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5F97\u5230\u6700\u5927\u7684\u4E09\u4E2A\u6570</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&gt;=</span> max_first<span class="token punctuation">)</span><span class="token punctuation">{</span>
                max_third <span class="token operator">=</span> max_second<span class="token punctuation">;</span>
                max_second <span class="token operator">=</span> max_first<span class="token punctuation">;</span>
                max_first <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&gt;=</span> max_second <span class="token operator">&amp;&amp;</span> val <span class="token operator">&lt;</span> max_first<span class="token punctuation">)</span><span class="token punctuation">{</span>
                max_third <span class="token operator">=</span> max_second<span class="token punctuation">;</span>
                max_second <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&gt;=</span> max_third <span class="token operator">&amp;&amp;</span> val <span class="token operator">&lt;</span> max_second<span class="token punctuation">)</span><span class="token punctuation">{</span>
                max_third <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// \u5F97\u5230\u6700\u5C0F\u7684\u4E24\u4E2A\u6570</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;=</span> min_first<span class="token punctuation">)</span><span class="token punctuation">{</span>
                min_second <span class="token operator">=</span> min_first<span class="token punctuation">;</span>
                min_first <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;=</span> min_second <span class="token operator">&amp;&amp;</span> val <span class="token operator">&gt;</span> min_first<span class="token punctuation">)</span><span class="token punctuation">{</span>
                min_second <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max_first <span class="token operator">*</span> max_second <span class="token operator">*</span> max_third<span class="token punctuation">,</span> min_first <span class="token operator">*</span> min_second <span class="token operator">*</span> max_first<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,10);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
