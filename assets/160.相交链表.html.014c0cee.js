import{c as n}from"./app.f28702b3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_160-\u76F8\u4EA4\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_160-\u76F8\u4EA4\u94FE\u8868" aria-hidden="true">#</a> [160] \u76F8\u4EA4\u94FE\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> headA<span class="token punctuation">,</span> p2 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> b1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> b2 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token comment">// \u601D\u60F3\u662F\uFF0CA + B \u7B49\u4E8E B + A</span>
        <span class="token comment">// p1\u6309\u7167A B\u987A\u5E8F\u524D\u8FDB\uFF0Cp2\u6309\u7167B A\u987A\u5E8F\u524D\u8FDB\uFF0C\u7B2C\u4E00\u4E2A\u76F8\u7B49\u7684\u8282\u70B9\u5C31\u662F\u4EA4\u70B9</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">!=</span> p2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> b1<span class="token punctuation">)</span><span class="token punctuation">{</span>
                p1 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
                b1 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> b2<span class="token punctuation">)</span><span class="token punctuation">{</span>
                p2 <span class="token operator">=</span> headA<span class="token punctuation">;</span>
                b2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> p1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u8FD9\u79CD\u6CA1\u6709\u6DFB\u52A0\u6807\u5FD7\u4F4D\uFF0C\u4F46\u662F\u6CA1\u6709\u4EA4\u70B9\u4E5F\u4E0D\u4F1A\u91CD\u590D\u5207\u6362\uFF0C\u56E0\u4E3AA+B\u548CB+A\u5982\u679C\u6CA1\u6709\u4EA4\u70B9\u5219\u5728\u672B\u5C3Enull\u5904\u56E0\u4E3Ap1\u7B49\u4E8Ep2\u4F1A\u9000\u51FA\u5FAA\u73AF\uFF08\u5DE7\u5999\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> headA<span class="token punctuation">,</span> p2 <span class="token operator">=</span> headB<span class="token punctuation">;</span>

        <span class="token comment">// \u601D\u60F3\u662F\uFF0CA + B \u7B49\u4E8E B + A</span>
        <span class="token comment">// p1\u6309\u7167A B\u987A\u5E8F\u524D\u8FDB\uFF0Cp2\u6309\u7167B A\u987A\u5E8F\u524D\u8FDB\uFF0C\u7B2C\u4E00\u4E2A\u76F8\u7B49\u7684\u8282\u70B9\u5C31\u662F\u4EA4\u70B9</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">!=</span> p2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                p1 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                p2 <span class="token operator">=</span> headA<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> p1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
