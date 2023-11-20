import{_ as p,r as o,o as c,c as l,b as n,d as s,a as t,e}from"./app-WhMj9h_6.js";const i="/lanjz/assets/lujingzonghedemo1-OR-Z2_DD.jpg",u={},r=n("h1",{id:"字节前端算法题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字节前端算法题","aria-hidden":"true"},"#"),s(" 字节前端算法题")],-1),d={id:"合并两个有序数组-简单",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#合并两个有序数组-简单","aria-hidden":"true"},"#",-1),v={href:"https://leetcode-cn.com/problems/merge-sorted-array/",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>给你两个有序整数数组 <code>nums1</code> 和 <code>nums2</code>，请你将 nums2 合并到 <code>nums1</code> 中，使 <code>nums1</code> 成为一个有序数组。</p><p>初始化 <code>nums1</code> 和 <code>nums2</code> 的元素数量分别为 <code>m</code> 和 <code>n</code> 。你可以假设 <code>nums1</code> 的空间大小等于 <code>m + n</code>，这样它就有足够的空间保存来自 <code>nums2</code> 的元素。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- nums1.length == m + n

- nums2.length == n

- 0 &lt;= m, n &lt;= 200

- 1 &lt;= m + n &lt;= 200

- -109 &lt;= nums1[i], nums2[i] &lt;= 109
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思路：</p><ul><li><p>创建两个指针，一个从 <code>num1</code> 开始，一个从 <code>num2</code> 开始，</p></li><li><p>判断两个指针指向的值的大小，进行交换</p></li><li><p><strong>但是要注意不从前往后开始遍历</strong>，因为如果从前往后遍历的话，在交换位置，还需要考虑被交换的元素与其它元素的大小于情况</p></li><li><p>所以需要从后往前遍历，将满足的元素直接从后往前插入，将可以一步到位</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> start1 <span class="token operator">=</span> m<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> start2 <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> m<span class="token operator">+</span>n<span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>start1 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> start2 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>start1<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums2<span class="token punctuation">[</span>start2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nums1<span class="token punctuation">[</span>total<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>start2<span class="token punctuation">]</span>
            start2<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            nums1<span class="token punctuation">[</span>total<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>start1<span class="token punctuation">]</span>
            start1<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        total<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>start2 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        nums1<span class="token punctuation">[</span>start2<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>start2<span class="token punctuation">]</span>
        start2<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums1
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),b={id:"长度最小的子数组-中等",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#长度最小的子数组-中等","aria-hidden":"true"},"#",-1),f={href:"https://leetcode-cn.com/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://leetcode-cn.com/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"},w=e(`<p>给定一个含有 <code>n</code>个正整数的数组和一个正整数 <code>target</code></p><p>找出该数组中满足其和 <code>≥ target</code> 的长度最小的 连续子数组 <code>[numsl, numsl+1, ..., numsr-1, numsr]</code> ，并返回其长度。如果不存在符合条件的子数组，返回 0</p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：target = 4, nums = [1,4,4]
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>思路：</p><ul><li><p>创建<code>start</code>, <code>end</code> 两个指针,分别指向最开始的位置</p></li><li><p>计算 <code>start</code> 和 <code>end</code> 之间的和</p></li><li><p>不满足条件时，则保持 <code>start</code> 不动，<code>end</code> 不断右移，直到和满足条件为止</p></li><li><p>当上一步满足条件时，尝试移除最左侧的元素，看剩下的元素加起来是否也条件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1,2,3,4 的和大于 7
但此时 2,3,4 和 3,4也是可以大于7的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minSubArrayLen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 结果</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>end <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result <span class="token operator">=</span> result <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> end<span class="token operator">-</span>start<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> end<span class="token operator">-</span>start<span class="token operator">+</span><span class="token number">1</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">break</span> <span class="token comment">// 如果没1，最小值长度了，直接返回</span>
            count <span class="token operator">-=</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token comment">// 长度大于1时， 减掉最左边的值，看下是否还能满足条件</span>
            start<span class="token operator">++</span> <span class="token comment">// 右移 start 指针</span>
            <span class="token keyword">continue</span> <span class="token comment">// 直接进入判断当前count是否满足值</span>
        <span class="token punctuation">}</span>
        end <span class="token operator">++</span>
        count <span class="token operator">+=</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),y={id:"路径总和-简单",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#路径总和-简单","aria-hidden":"true"},"#",-1),x={href:"https://leetcode-cn.com/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"},j=e('<p>给你二叉树的根节点 <code>root</code> 和一个表示目标和的整数 <code>targetSum</code> ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和<code>targetSum</code></p><p>叶子节点 是指没有子节点的节点。</p><p>示例：</p><p><img src="'+i+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解一：使用深度优先遍历的方式计算每个分支的合，可以使用递归</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">===</span> targetSum<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 如果没有节点，且满足条件了则直接返回</span>
    <span class="token keyword">return</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 递归调用</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解一：使用广度优先遍历的方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> cur <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span> <span class="token keyword">continue</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">.</span>left<span class="token operator">&amp;&amp;</span><span class="token operator">!</span>cur<span class="token punctuation">.</span>right<span class="token operator">&amp;&amp;</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">+=</span> cur<span class="token punctuation">.</span>val <span class="token comment">// 添加上一节点的值</span>
        <span class="token punctuation">}</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
          cur<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">+=</span> cur<span class="token punctuation">.</span>val <span class="token comment">// 添加上一节点的值</span>
        <span class="token punctuation">}</span>
         stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),S={id:"数组中的第k个最大元素-中等",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#数组中的第k个最大元素-中等","aria-hidden":"true"},"#",-1),T={href:"https://leetcode-cn.com/problems/kth-largest-element-in-an-array/",target:"_blank",rel:"noopener noreferrer"},D=e(`<p>在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。</p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p><p>你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。</p><p>解法一：</p><p>排序后，直接取 k 位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findKthLargest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">&gt;=</span>b <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法二：</p><p>其实不是全部排序后才能得到 K 位置，只在 K 位置之前是排好序就可以了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">findKthLargest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findMin</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span><span class="token punctuation">{</span>
            left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> mid
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> k<span class="token operator">-</span>right<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">findMin</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
        min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> min
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),L={id:"字符串相加",tabindex:"-1"},K=n("a",{class:"header-anchor",href:"#字符串相加","aria-hidden":"true"},"#",-1),I={href:"https://leetcode-cn.com/problems/add-strings/",target:"_blank",rel:"noopener noreferrer"},z=e(`<p>给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和</p><p>提示：</p><ul><li><p>num1 和num2 的长度都小于 5100</p></li><li><p>num1 和num2 都只包含数字0-9</p></li><li><p>num1 和num2 都不包含任何前导零</p></li><li><p>你不能使用任何內建 BigInteger 库，也不能直接将输入的字符串转换为整数形式</p></li></ul><p>题解：模块加法运算</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> add <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num1<span class="token punctuation">.</span>length <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token punctuation">(</span>num2<span class="token punctuation">.</span>length <span class="token operator">-</span>start<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> n1 <span class="token operator">=</span> num1<span class="token punctuation">[</span>num1<span class="token punctuation">.</span>length <span class="token operator">-</span> start<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">let</span> n2 <span class="token operator">=</span> num2<span class="token punctuation">[</span>num2<span class="token punctuation">.</span>length <span class="token operator">-</span> start<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token operator">+</span>n1 <span class="token operator">+</span> <span class="token operator">+</span>n2 <span class="token operator">+</span> add
        result <span class="token operator">=</span> count<span class="token operator">%</span><span class="token number">10</span> <span class="token operator">+</span> result
        add <span class="token operator">=</span> count<span class="token operator">/</span><span class="token number">10</span> <span class="token operator">|</span> <span class="token number">0</span>
        start<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>add <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      result <span class="token operator">=</span> add <span class="token operator">+</span> result
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),B={id:"翻转二叉树",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#翻转二叉树","aria-hidden":"true"},"#",-1),M={href:"https://leetcode-cn.com/problems/invert-binary-tree/",target:"_blank",rel:"noopener noreferrer"},P=e(`<p>翻转一棵二叉树</p><p>示例：</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     4
   /   \\
  2     7
 / \\   / \\
1   3 6   9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     4
   /   \\
  7     2
 / \\   / \\
9   6 3   1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法一：使用递归</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> tem <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> tem
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法二：迭代法,利用每个节点都引用类型的特性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">swap</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        node<span class="token punctuation">.</span>left<span class="token operator">&amp;&amp;</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">swap</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span>
        node<span class="token punctuation">.</span>right<span class="token operator">&amp;&amp;</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">swap</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> tem <span class="token operator">=</span> node<span class="token punctuation">.</span>left
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">.</span>right
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> tem
        <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),V={id:"求根到叶子节点数字之和",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#求根到叶子节点数字之和","aria-hidden":"true"},"#",-1),C={href:"https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/",target:"_blank",rel:"noopener noreferrer"},O=e(`<p>给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。</p><p>例如，从根到叶子节点路径 1-&gt;2-&gt;3 代表数字 123。</p><p>计算从根到叶子节点生成的所有数字之和。</p><p>说明: 叶子节点是指没有子节点的节点。</p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,2,3]
    1
   / \\
  2   3
输出: 25
解释:
从根到叶子节点路径 1-&gt;2 代表数字 12.
从根到叶子节点路径 1-&gt;3 代表数字 13.
因此，数字总和 = 12 + 13 = 25.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [4,9,0,5,1]
    4
   / \\
  9   0
 / \\
5   1
输出: 1026
解释:
从根到叶子节点路径 4-&gt;9-&gt;5 代表数字 495.
从根到叶子节点路径 4-&gt;9-&gt;1 代表数字 491.
从根到叶子节点路径 4-&gt;0 代表数字 40.
因此，数字总和 = 495 + 491 + 40 = 1026.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法一：深度优先遍历</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> count</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> s <span class="token operator">=</span> count <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> node<span class="token punctuation">.</span>val
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result <span class="token operator">=</span> result <span class="token operator">+</span> s
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>left<span class="token operator">&amp;&amp;</span><span class="token function">sum</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
            node<span class="token punctuation">.</span>right<span class="token operator">&amp;&amp;</span><span class="token function">sum</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">sum</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法二：深度优先遍历</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token operator">*</span><span class="token number">10</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token operator">*</span><span class="token number">10</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),R={id:"路径总和-ii",tabindex:"-1"},Z=n("a",{class:"header-anchor",href:"#路径总和-ii","aria-hidden":"true"},"#",-1),q={href:"https://leetcode-cn.com/problems/path-sum-ii/",target:"_blank",rel:"noopener noreferrer"},F=e(`<p>给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。</p><p>说明: 叶子节点是指没有子节点的节点。</p><p>示例: 给定如下二叉树，以及目标和 sum = 22，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>              5
             / \\
            4   8
           /   / \\
          11  13  4
         /  \\    / \\
        7    2  5   1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
   [5,4,11,2],
   [5,8,4,5]
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>题解：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">wakl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> count<span class="token punctuation">,</span> stack</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        count <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left<span class="token operator">&amp;&amp;</span><span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token operator">&amp;&amp;</span>count <span class="token operator">===</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">wakl</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> count<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>stack<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> 
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">wakl</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> count<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>stack<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">wakl</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码最主要的问题在于递归 <code>wakl</code> 方法时，总是要复制一次数组，这一步造成了额外的空间消耗。所以使用回逆方法做下优化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">wakl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> count<span class="token punctuation">,</span> stack</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        count <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left<span class="token operator">&amp;&amp;</span><span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token operator">&amp;&amp;</span>count <span class="token operator">===</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 复制结果，这样不受下面 \`pop()\` 的影响</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">wakl</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> count<span class="token punctuation">,</span> stack<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> 
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">wakl</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> count<span class="token punctuation">,</span> stack<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 回逆</span>
    <span class="token punctuation">}</span>
    <span class="token function">wakl</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),G={id:"两数之和",tabindex:"-1"},H=n("a",{class:"header-anchor",href:"#两数之和","aria-hidden":"true"},"#",-1),J={href:"https://leetcode-cn.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},Q=e(`<p><strong>解法一</strong></p><p>遍历多次，略</p><p><strong>解法二：两遍哈希表</strong></p><p>使用 <code>map</code> 结构可以更有效的方法来检查数组中是否存在目标元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> tar <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tar <span class="token keyword">in</span> map <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">[</span>tar<span class="token punctuation">]</span> <span class="token operator">!==</span>i <span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> map<span class="token punctuation">[</span>tar<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法三：一遍哈希表</strong></p><p>方法二的优化，将两次遍历完合成一次遍历</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> tar <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tar <span class="token keyword">in</span> map <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">[</span>tar<span class="token punctuation">]</span> <span class="token operator">!==</span>i <span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> map<span class="token punctuation">[</span>tar<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：</p><ul><li><p><code>for(let i = nums.length-1; i &gt;=0 ; i--)</code> 比 <code> for(let i = 0; i &lt; nums.length ; i++)</code> 效率高，节省 <code> nums.length</code> 的计算次数</p></li><li><p><code>for</code> 循环比 <code>forEacth</code> 效率高</p></li><li><p>下面代码额外多了 <code>result</code> 变量，会多点用点内存</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">let</span> tar <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>tar <span class="token keyword">in</span> map <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">[</span>tar<span class="token punctuation">]</span> <span class="token operator">!==</span>i <span class="token punctuation">)</span><span class="token punctuation">{</span>
               result <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> map<span class="token punctuation">[</span>tar<span class="token punctuation">]</span><span class="token punctuation">]</span>
               <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
          map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>https://github.com/afatcoder/LeetcodeTop/blob/master/bytedance/frontend.md</p><p>https://leetcode-cn.com/explore/interview/card/bytedance/</p>`,12);function U(W,X){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("h2",d,[k,s(),n("a",v,[s("合并两个有序数组(简单)"),t(a)])]),m,n("h2",b,[g,s(),n("a",f,[s("长度最小的子数组(中等)"),t(a)])]),n("p",null,[n("a",h,[s("原题"),t(a)])]),w,n("h2",y,[_,s(),n("a",x,[s("路径总和(简单)"),t(a)])]),j,n("h2",S,[N,s(),n("a",T,[s("数组中的第K个最大元素(中等)"),t(a)])]),D,n("h2",L,[K,s(),n("a",I,[s("字符串相加"),t(a)])]),z,n("h2",B,[E,s(),n("a",M,[s("翻转二叉树"),t(a)])]),P,n("h2",V,[A,s(),n("a",C,[s("求根到叶子节点数字之和"),t(a)])]),O,n("h2",R,[Z,s(),n("a",q,[s("路径总和 II"),t(a)])]),F,n("h2",G,[H,s(),n("a",J,[s("两数之和"),t(a)])]),Q])}const $=p(u,[["render",U],["__file","字节前端.html.vue"]]);export{$ as default};
