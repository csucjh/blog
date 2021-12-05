"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[613],{8856:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-bd1f6fdc",path:"/other/%E6%A0%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"树",slug:"树",children:[{level:3,title:"二叉树",slug:"二叉树",children:[]}]}],filePathRelative:"other/树.md",git:{updatedTime:1638718483e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},1125:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});const e=(0,a(6252).uE)('<h2 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h2><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><p>二叉树（binary tree）是指树中节点的度不大于2的有序树，它是一种最简单且最重要的树。二叉树的递归定义为：二叉树是一棵空树，或者是一棵由一个根节点和两棵互不相交的，分别称作根的左子树和右子树组成的非空树；左子树和右子树又同样都是二叉树。</p><h4 id="基本形态" tabindex="-1"><a class="header-anchor" href="#基本形态" aria-hidden="true">#</a> 基本形态</h4><p>二叉树是递归定义的，其结点有左右子树之分，逻辑上二叉树有五种基本形态： [3]</p><p>1、空二叉树——如图1（a）；</p><p>2、只有一个根结点的二叉树——如图1（b）；</p><p>3、只有左子树——如图1（c）；</p><p>4、只有右子树——如图1（d）；</p><p>5、完全二叉树——如图1（e）。</p><p><img src="https://user-images.githubusercontent.com/12841424/144752981-bb4c0271-9587-44d1-a887-729570dbbb41.png" alt="image"></p><h4 id="相关术语" tabindex="-1"><a class="header-anchor" href="#相关术语" aria-hidden="true">#</a> 相关术语</h4><p>①<strong>结点</strong>：包含一个数据元素及若干指向子树分支的信息。</p><p>②<strong>结点的度</strong>：一个结点拥有子树的数目称为结点的度。</p><p>③<strong>叶子结点</strong>：也称为终端结点，没有子树的结点或者度为零的结点。</p><p>④<strong>分支结点</strong>：也称为非终端结点，度不为零的结点称为非终端结点。</p><p>⑤<strong>树的度</strong>：树中所有结点的度的最大值。</p><p>⑥<strong>结点的层次</strong>：从根结点开始，假设根结点为第1层，根结点的子节点为第2层，依此类推，如果某一个结点位于第L层，则其子节点位于第L+1层。</p><p>⑦<strong>树的深度</strong>：也称为树的高度，树中所有结点的层次最大值称为树的深度。</p><p>⑧<strong>有序树</strong>：如果树中各棵子树的次序是有先后次序，则称该树为有序树。</p><p>⑨<strong>无序树</strong>：如果树中各棵子树的次序没有先后次序，则称该树为无序树。</p><p>⑩<strong>森林</strong>：由m（m≥0）棵互不相交的树构成一片森林。如果把一棵非空的树的根结点删除，则该树就变成了一片森林，森林中的树由原来根结点的各棵子树构成。</p><h4 id="特殊类型" tabindex="-1"><a class="header-anchor" href="#特殊类型" aria-hidden="true">#</a> 特殊类型</h4><h5 id="_1、满二叉树-full-binary-tree" tabindex="-1"><a class="header-anchor" href="#_1、满二叉树-full-binary-tree" aria-hidden="true">#</a> 1、<strong>满二叉树(Full Binary Tree)</strong></h5><p>如果一棵二叉树只有度为0的结点和度为2的结点，并且度为0的结点在同一层上，则这棵二叉树为满二叉树。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>一个二叉树，如果每一个层的结点数都达到最大值，则这个二叉树就是满二叉树。也就是说，如果一个二叉树的层数为<span class="token class-name">K</span>，且结点总数\n是<span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span>k<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span> ，则它就是满二叉树。一颗树深度为h，最大层数为k，深度与最大层数相同，k<span class="token operator">=</span>h<span class="token punctuation">;</span>\n它的叶子数是： <span class="token number">2</span><span class="token operator">^</span>h　　第k层的结点数是： <span class="token number">2</span><span class="token operator">^</span><span class="token punctuation">(</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>　　总结点数是： <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span>k<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">(</span><span class="token number">2</span>的k次方减一<span class="token punctuation">)</span>　　总节点数一定是奇数。\n\n                                             <span class="token number">0</span>\n                                     <span class="token operator">/</span>               \\\n                                  <span class="token number">1</span>                   <span class="token number">2</span>\n                              <span class="token operator">/</span>      \\            <span class="token operator">/</span>       \\\n                            <span class="token number">3</span>        <span class="token number">4</span>         <span class="token number">5</span>           <span class="token number">6</span>\n                          <span class="token operator">/</span>  \\    <span class="token operator">/</span>   \\     <span class="token operator">/</span>    \\       <span class="token operator">/</span>   \\\n                        <span class="token number">7</span>    <span class="token number">8</span>  <span class="token number">9</span>     <span class="token number">10</span>  <span class="token number">11</span>     <span class="token number">12</span>    <span class="token number">13</span>     <span class="token number">14</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h5 id="_2、完全二叉树-complete-binary-tree" tabindex="-1"><a class="header-anchor" href="#_2、完全二叉树-complete-binary-tree" aria-hidden="true">#</a> 2、<strong>完全二叉树</strong>(Complete Binary Tree)</h5><p>深度为k，有n个结点的二叉树当且仅当其每一个结点都与深度为k的满二叉树中编号从1到n的结点一一对应时，称为完全二叉树。</p><p>完全二叉树的特点是叶子结点只可能出现在层序最大的两层上，并且某个结点的左分支下子孙的最大层序与右分支下子孙的最大层序相等或大1 。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>完全二叉树：完全二叉树的节点数是任意的，从形式上讲它是个缺失的的三角形，但所缺失的部分一定是右下角某个连续的部分，最后\n那一行可能不是完整的，对于k层的完全二叉树，节点数的范围2^ (k - 1) -1 &lt; N&lt; 2^k - 1;\n\n设二叉树的深度为h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边，这就\n是完全二叉树。\n\n                                              0\n                                     /               \\\n                                  1                   2\n                              /      \\            /       \\\n                            3        4         5           6\n                          /  \\    /   \\     /    \n                        7    8  9     10  11\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="https://user-images.githubusercontent.com/12841424/144737477-5aa5b8b1-951f-4b05-85ae-cc1f3c7f923b.png" alt="image"></p><p>完全二叉树的概念是大于满二叉树的，也就是说满二叉树一定是完全二叉树，但完全二叉树不一定是满二叉树。</p>',33),p={},r=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);