import{c as n}from"./app.a357479f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" aria-hidden="true">#</a> [21] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u865A\u62DF\u5934\u7ED3\u70B9</span>
        <span class="token class-name">ListNode</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6E38\u6807</span>
        <span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
        
        <span class="token comment">//  \u6BD4\u8F83l1\u548Cl2,\u53EA\u6709\u6709\u591A\u4E2A\u624D\u9700\u8981\u5BF9\u6BD4</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                p<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
                l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                p<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
                l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u5982\u679C\u67D0\u4E2A\u94FE\u8868\u8FD8\u6709\u5269\u4F59\u7684\uFF0C\u5C31\u4E00\u5B9A\u662F\u6700\u5927\u7684\u90E8\u5206</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            p<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            p<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,2);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
