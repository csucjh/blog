import{c as n}from"./app.3ee7e61c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_38-\u5916\u89C2\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#_38-\u5916\u89C2\u6570\u5217" aria-hidden="true">#</a> 38.\u5916\u89C2\u6570\u5217</h2><h3 id="\u9012\u5F52-\u4E00" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52-\u4E00" aria-hidden="true">#</a> \u9012\u5F52\uFF08\u4E00\uFF09</h3><p>1\u3001\u9898\u76EE\u4E2D\u7ED9\u5B9A\u7684\u9012\u5F52\u516C\u5F0F\u5B9A\u4E49\u7684\u6570\u5B57\u5B57\u7B26\u4E32\u5E8F\u5217\u5982\u4E0B\uFF1A</p><ul><li><code>countAndSay(1)</code> = &quot;1&quot;\uFF1B</li><li><code>countAndSay(n)</code> \u662F\u5BF9<code>countAndSay(n-1) </code>\u7684\u63CF\u8FF0\uFF0C\u7136\u540E\u8F6C\u6362\u6210\u53E6\u4E00\u4E2A\u6570\u5B57\u5B57\u7B26\u4E32\u3002</li></ul><p>\u6211\u4EEC\u5B9A\u4E49\u5B57\u7B26\u4E32 S[i]\u8868\u793A<code>countAndSay(i)</code>\uFF0C\u6211\u4EEC\u5982\u679C\u8981\u6C42\u5F97 S[n]\uFF0C\u5219\u6211\u4EEC\u9700\u5148\u6C42\u51FA S[n-1]</p><p>2\u3001\u6839\u636ES[n-1]\u6C42\u89E3S[n]\u5176\u5B9E\u5C31\u662F\u4ECE\u5DE6\u5230\u53F3\u4F9D\u6B21\u626B\u63CF\u5B57\u7B26\u4E32S[n-1]\u4E2D\u8FDE\u7EED\u76F8\u540C\u7684\u5B57\u7B26\u7684\u6700\u5927\u6570\u76EE</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// base case</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u9012\u5F52</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5F00\u59CB\u540E\u5E8F\u5904\u7406</span>
        <span class="token comment">// 1\u3001\u5206\u5272\u4E3A\u6700\u5C0F\u6570\u91CF\u7684\u7EC4(\u6BCF\u4E2A\u7EC4\u90FD\u7531\u8FDE\u7EED\u7684\u6700\u591A\u76F8\u540C\u5B57\u7B26\u7EC4\u6210)</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> groups <span class="token operator">=</span> <span class="token function">slice</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2\u3001\u63CF\u8FF0\u5206\u7EC4</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> grp <span class="token operator">:</span> groups<span class="token punctuation">)</span><span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>grp<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>grp<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//System.out.println(sb.toString());</span>

        <span class="token comment">// 3\u3001\u8FD4\u56DE\u5F53\u524D\u5916\u89C2\u6570\u5217</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5C06\u5B57\u7B26\u4E32\u62C6\u5206</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">slice</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> groups <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// [start, end]\u8868\u793A\u4E00\u4E2A\u5206\u7EC4</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            end<span class="token operator">++</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5F53\u51FA\u73B0\u5B57\u7B26\u4E0D\u7B49\u6216\u8005\u5B57\u7B26\u4E32\u7ED3\u675F\u65F6\u5C31\u662F\u5F53\u524D\u7EC4\u7684\u7ED3\u5C3E</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                groups<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// \u91CD\u7F6E\u8D77\u70B9</span>
                start <span class="token operator">=</span> end<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//System.out.println(groups.size()+&quot;:&quot;+groups);</span>

        <span class="token keyword">return</span> groups<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u6211\u4EEC\u53D1\u73B0slice\u51FD\u6570\u5176\u5B9E\u5B8C\u5168\u6CA1\u6709\u5FC5\u8981\uFF0C\u56E0\u4E3A\u4F7F\u7528\u4E86\u989D\u5916\u7684List\u5185\u5B58\u7A7A\u95F4\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E0D\u9700\u8981\u7684\uFF0C\u4F18\u5316\u540E\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// base case</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u9012\u5F52</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5F00\u59CB\u540E\u5E8F\u5904\u7406</span>
        <span class="token comment">// 1\u3001\u5206\u5272\u4E3A\u6700\u5C0F\u6570\u91CF\u7684\u7EC4(\u6BCF\u4E2A\u7EC4\u90FD\u7531\u8FDE\u7EED\u7684\u6700\u591A\u76F8\u540C\u5B57\u7B26\u7EC4\u6210)</span>
        <span class="token comment">// 2\u3001\u63CF\u8FF0\u5206\u7EC4</span>

        <span class="token comment">// \u7528\u4E8E\u63CF\u8FF0\u5B57\u7B26\u4E32</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// [start, i]\u8868\u793A\u4E00\u4E2A\u5206\u7EC4, len\u662Fstr\u957F\u5EA6</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5F53\u51FA\u73B0\u5B57\u7B26\u4E0D\u7B49\u6216\u8005\u5B57\u7B26\u4E32\u7ED3\u675F\u65F6\u5C31\u662F\u5F53\u524D\u7EC4\u7684\u7ED3\u5C3E</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> len<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token operator">-</span>start<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// \u91CD\u7F6E\u8D77\u70B9</span>
                start <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">//System.out.println(sb.toString());</span>

        <span class="token comment">// 3\u3001\u8FD4\u56DE\u5F53\u524D\u5916\u89C2\u6570\u5217</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,9);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
