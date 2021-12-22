import{c as n}from"./app.c9580d20.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_142-\u73AF\u5F62\u94FE\u8868-ii" tabindex="-1"><a class="header-anchor" href="#_142-\u73AF\u5F62\u94FE\u8868-ii" aria-hidden="true">#</a> [142] \u73AF\u5F62\u94FE\u8868 II</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>

        <span class="token comment">// \u8F6C\u5316\u4E3A\u5224\u65AD\u73AF\u5F62\u94FE\u8868</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token comment">// \u5F53\u76F8\u9047\u7684\u90A3\u4E00\u523B\uFF0C\u5C06slow\u548Cfast\u4EFB\u610F\u4E00\u4E2A\u6307\u5411head\uFF0C\u7136\u540E\u540C\u901F\u524D\u8FDB\uFF0C\u76F8\u9047\u70B9\u5C31\u662F\u73AF\u7684\u8D77\u70B9</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span><span class="token punctuation">{</span>
                slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>slow <span class="token operator">!=</span> fast<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> fast<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
