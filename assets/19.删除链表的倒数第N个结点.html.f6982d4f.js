import{c as n}from"./app.ad394294.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_19-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#_19-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9" aria-hidden="true">#</a> [19] \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u95EE\u9898\u5B9E\u9645\u8F6C\u5316\u4E3A\u627E\u5012\u6570\u7B2Cn+1\u4E2A\u8282\u70B9(\u8981\u5220\u9664\u5012\u6570\u7B2Cn\u4E2A\u5FC5\u987B\u627E\u5230\u4E0A\u4E00\u4E2A)</span>
        <span class="token comment">// \u4E3A\u4E86\u8FB9\u754C\u6761\u4EF6\u597D\u5904\u7406\uFF0C\u7528\u4E00\u4E2A\u865A\u62DF\u5934\u7ED3\u70B9</span>
        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>


        <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> dummy<span class="token punctuation">,</span> p2 <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        
        <span class="token comment">// p1\u5148\u524D\u8FDBk\uFF0C\u7136\u540E\u540C\u6B65\u524D\u8FDBp2,\u5F53p1\u5230\u672B\u5C3E\u65F6p2\u5728\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                k<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u6B64\u65F6p2\u5DF2\u5728\u5012\u6570k\u5904</span>
        p2<span class="token punctuation">.</span>next <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,2);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
