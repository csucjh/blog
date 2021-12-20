import{c as n}from"./app.ee0296c5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" aria-hidden="true">#</a> [25] K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 4\u3001\u9000\u51FA\u6761\u4EF6\uFF0C\u6CA1\u6709\u4E0B\u4E00\u5206\u6BB5\u65F6\u8FD4\u56DEnull</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> k<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">--</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 4\u3001\u9000\u51FA\u6761\u4EF6\uFF0C\u5F53\u524D\u5206\u6BB5\u4E0D\u8DB3k\u4E2A\u65F6\u8FD4\u56DE\u5F53\u524D\u5206\u6BB5\u5934\u8282\u70B9\uFF0C\u4E0D\u53CD\u8F6C</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>last<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> head<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
     
        <span class="token comment">// 4\u3001\u9000\u51FA\u6761\u4EF6\uFF0Ck==1\u5219\u6BCF\u4E2A\u5206\u6BB5\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\uFF0C\u4E0D\u9700\u8981\u53CD\u8F6C</span>
        <span class="token comment">// \u8FD9\u4E00\u4E2A\u9000\u51FA\u6761\u4EF6\u4E0D\u8981\u4E5F\u884C\uFF0C\u4F46\u662F\u4F1A\u7A7A\u8DD1\u4E00\u904D\u9012\u5F52\u6808\uFF0C\u5EFA\u8BAE\u4FDD\u7559</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>last <span class="token operator">==</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 1\u3001\u662F\u4E00\u4E2A\u9012\u5F52\u6027\u8D28\u95EE\u9898\uFF0C\u6BCF\u4E00\u4E2A\u5B50\u95EE\u9898\u90FD\u662F\u53CD\u8F6C\u94FE\u8868\u524Dk\u4E2A\u8282\u70B9\uFF0C\u8FD4\u56DE\u65B0\u5934\u7ED3\u70B9</span>
        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>last<span class="token punctuation">.</span>next<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2\u3001\u5C06\u5F53\u524D\u5206\u6BB5\u7684\u5C3E\u7ED3\u70B9\u6307\u5411\u5B50\u95EE\u9898\u8FD4\u56DE\u7684\u65B0\u5934\u8282\u70B9</span>
        last<span class="token punctuation">.</span>next <span class="token operator">=</span> newHead<span class="token punctuation">;</span>

        <span class="token comment">// 3\u3001\u53CD\u8F6C\u5F53\u524D\u94FE\u8868\u7684\u5934n\u4E2A\u8282\u70B9</span>
        <span class="token keyword">return</span> <span class="token function">reverseTopK</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseTopK</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 3\u3001\u660E\u786E\u9000\u51FA\u6761\u4EF6\u2014\u2014\u5F53k\u4E3A1\uFF0C\u4E0D\u9700\u8981\u53CD\u8F6C\u4E86\uFF0Chead\u76F4\u63A5\u8FD4\u56DE</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 1\u3001\u65B0\u9012\u5F52\u516C\u5F0F\u542B\u4E49\u2014\u2014\u53CD\u8F6C\u524Dk\u4E2A\u8282\u70B9\u5E76\u8FD4\u56DE\u65B0\u7684\u5934\u7ED3\u70B9</span>
        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseTopK</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2\u3001\u628A\u5F53\u524Dhead\u6302\u5230\u53CD\u8F6C\u94FE\u4E0A\uFF0C\u7136\u540E\u5C06head\u6307\u5411\u7B2Cn+1\u4E2A\u8282\u70B9(\u8FD9\u6837\u53CD\u8F6C\u94FE\u624D\u5B8C\u6574)</span>
        <span class="token class-name">ListNode</span> successor <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> successor<span class="token punctuation">;</span>

        <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,2);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
