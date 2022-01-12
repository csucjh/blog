import{c as n}from"./app.ad394294.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_389-\u627E\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_389-\u627E\u4E0D\u540C" aria-hidden="true">#</a> 389.\u627E\u4E0D\u540C</h2><h3 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h3><p>\u4E3B\u8981\u601D\u8DEF\u5C31\u662F\u6392\u5E8F\u540E\u6328\u4E2A\u5B57\u7B26\u6BD4\u5BF9\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u4E00\u6837\u7684\u5B57\u7B26\u5C31\u662F\u7B54\u6848</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">findTheDifference</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6392\u5E8F\u540E\u6BD4\u8F83</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s_arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> t_arr <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>s_arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>t_arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> n <span class="token operator">=</span> s_arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        
        <span class="token comment">// \u4EE5s\u4E3A\u8FED\u4EE3\u76EE\u6807\uFF0C\u5F53s[i]!=t[i]\u65F6\uFF0C\u90A3t[i]\u4E00\u5B9A\u662F\u65B0\u52A0\u7684</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>s_arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> t_arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> t_arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u5982\u679C\u662F\u6700\u540E\u4E00\u4E2A\u5B57\u7B26</span>
        <span class="token keyword">return</span> t_arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><p>\u4E3B\u8981\u601D\u8DEF\u662F\u5148\u904D\u5386s\uFF0C\u7528map\u6765\u8BB0\u5F55\u6BCF\u4E2A\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570\uFF0C\u7136\u540E\u904D\u5386t\u6765\u9012\u51CF\u6B21\u6570\uFF0C\u6700\u540Emap\u4E2D\u6CA1\u6709\u51FA\u73B0\u7684\u5B57\u7B26\u6216\u8005\u6B21\u6570\u4E3A-1\u7684\u5B57\u7B26\u5C31\u662F\u76EE\u6807</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">findTheDifference</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// key: \u5B57\u7B26, value: \u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u904D\u5386s\u8BA1\u7B97\u5B57\u7B26\u4E32\u6B21\u6570</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> newValue <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">computeIfPresent</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token operator">++</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//System.out.println(map);</span>
        
        <span class="token comment">// \u904D\u5386t\u9012\u51CF\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> newValue <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">computeIfPresent</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token operator">--</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u51FA\u73B0\u4E86s\u4E2D\u4E0D\u5B58\u5728\u7684\u5B57\u7B26\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
                <span class="token keyword">return</span> t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// System.out.println(map);</span>

        <span class="token comment">// \u5982\u679C\u662F\u91CD\u590D\u5B57\u7B26</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><p>\u5728map\u7684\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u901A\u8FC7\u4F7F\u7528\u3010\u5C0F\u5199\u5B57\u7B26 - &#39;a&#39;\u3011\u8F6C\u5316\u6210\u6570\u7EC4\u7D22\u5F15\uFF0C\u5C06map\u7B80\u5316\u4E3A\u6570\u7EC4</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">findTheDifference</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EA\u670926\u4E2A\u5B57\u7B26</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// \u904D\u5386s\u8BA1\u7B97\u5B57\u7B26\u4E32\u6B21\u6570</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5C0F\u5199\u5B57\u6BCD-&#39;a&#39;\u53D8\u6210[0, 25]\u7684\u6570\u5B57</span>
            <span class="token keyword">int</span> idx <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//System.out.println(map);</span>

        <span class="token comment">// \u904D\u5386t\u9012\u51CF\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5C0F\u5199\u5B57\u6BCD-&#39;a&#39;\u53D8\u6210[0, 25]\u7684\u6570\u5B57</span>
            <span class="token keyword">int</span> idx <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(map);</span>

        <span class="token comment">// \u5982\u679C\u662F\u91CD\u590D\u5B57\u7B26</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,10);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
