import{c as n}from"./app.26c0e7b8.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_92-\u53CD\u8F6C\u94FE\u8868-ii" tabindex="-1"><a class="header-anchor" href="#_92-\u53CD\u8F6C\u94FE\u8868-ii" aria-hidden="true">#</a> [92] \u53CD\u8F6C\u94FE\u8868 II</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// base case</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">reverseN</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u524D\u8FDB\u5230\u53CD\u8F6C\u7684\u8D77\u70B9\u89E6\u53D1 base case</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u540E\u9A71\u8282\u70B9</span>
    <span class="token class-name">ListNode</span> successor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> 

    <span class="token comment">// \u53CD\u8F6C\u4EE5 head \u4E3A\u8D77\u70B9\u7684 n \u4E2A\u8282\u70B9\uFF0C\u8FD4\u56DE\u65B0\u7684\u5934\u7ED3\u70B9</span>
    <span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">reverseN</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BB0\u5F55\u7B2C n + 1 \u4E2A\u8282\u70B9</span>
            successor <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u4EE5 head.next \u4E3A\u8D77\u70B9\uFF0C\u9700\u8981\u53CD\u8F6C\u524D n - 1 \u4E2A\u8282\u70B9</span>
        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> <span class="token function">reverseN</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// \u8BA9\u53CD\u8F6C\u4E4B\u540E\u7684 head \u8282\u70B9\u548C\u540E\u9762\u7684\u8282\u70B9\u8FDE\u8D77\u6765</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> successor<span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 3\u3001\u9000\u51FA\u6761\u4EF6\u2014\u2014\u5F53left\u4E3A1\uFF0C\u4E0D\u518D\u662F\u5F53\u524D\u9012\u5F52\u51FD\u6570\u7684\u542B\u4E49</span>
            <span class="token comment">// \u6F14\u53D8\u6210\u4E86\u53CD\u8F6C\u94FE\u8868\u7684\u524DTopN\u8282\u70B9</span>
            <span class="token keyword">return</span> <span class="token function">reverseTopN</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 1\u3001\u660E\u786E\u9012\u5F52\u51FD\u6570\u542B\u4E49</span>
        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2\u3001\u5C06head\u6307\u5411\u53CD\u8F6C\u540E\u7684newHead</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> newHead<span class="token punctuation">;</span>

        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseTopN</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 6\u3001\u660E\u786E\u9000\u51FA\u6761\u4EF6\u2014\u2014\u5F53n\u4E3A1\uFF0C\u4E0D\u9700\u8981\u53CD\u8F6C\u4E86\uFF0Chead\u76F4\u63A5\u8FD4\u56DE</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 4\u3001\u65B0\u9012\u5F52\u516C\u5F0F\u542B\u4E49\u2014\u2014\u53CD\u8F6C\u524Dn\u4E2A\u8282\u70B9\u5E76\u8FD4\u56DE\u65B0\u7684\u5934\u7ED3\u70B9</span>
        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseTopN</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5\u3001\u628A\u5F53\u524Dhead\u6302\u5230\u53CD\u8F6C\u94FE\u4E0A\uFF0C\u7136\u540E\u5C06head\u6307\u5411\u7B2Cn+1\u4E2A\u8282\u70B9(\u8FD9\u6837\u53CD\u8F6C\u94FE\u624D\u5B8C\u6574)</span>
        <span class="token class-name">ListNode</span> successor <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> successor<span class="token punctuation">;</span>

        <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,3);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
