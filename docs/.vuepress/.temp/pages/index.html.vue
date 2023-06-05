<template><div><h1 id="tailvue-tailwindcss-vue3" tabindex="-1"><a class="header-anchor" href="#tailvue-tailwindcss-vue3" aria-hidden="true">#</a> TailVue - TailwindCss &amp; Vue3</h1>
<blockquote>
<p><code v-pre>A simple module adding several features and components integrating Tailwindcss</code></p>
</blockquote>
<hr>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>In the terminal :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token variable">$npm</span> i @c1ach0/tailvue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the ./app/main.js file add following before the new Vue instance:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> tailvue <span class="token keyword">from</span> <span class="token string">"@c1ach0/tailvue"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>tailvue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h2>
<ul>
<li><strong>Badge</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>badge</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Texte<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>badge</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>red - pink - blue - green - yellow - gray - indigo - purple</em></p>
<h4 id="color-generator" tabindex="-1"><a class="header-anchor" href="#color-generator" aria-hidden="true">#</a> Color Generator :</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"pink"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
        <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"yellow"</span><span class="token punctuation">,</span> <span class="token string">"gray"</span><span class="token punctuation">,</span>
        <span class="token string">"indigo"</span><span class="token punctuation">,</span> <span class="token string">"purple"</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> colors<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> colors<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ul>
<li></li>
</ul>
</div></template>


