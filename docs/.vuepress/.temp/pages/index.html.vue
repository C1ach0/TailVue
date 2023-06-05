<template><div><h1 id="tailvue-tailwindcss-vue3" tabindex="-1"><a class="header-anchor" href="#tailvue-tailwindcss-vue3" aria-hidden="true">#</a> TailVue - TailwindCss &amp; Vue3</h1>
<p>A simple module adding several features and components integrating Tailwindcss and Vue3. This module does not add thousands of components but simply something to create faster with a kind of template.</p>
<blockquote>
<p>Version : <code v-pre>0.0.1</code></p>
</blockquote>
<blockquote>
<p>Repository : <a href="https://github.com/C1ach0/tailvue" target="_blank" rel="noopener noreferrer">@c1ach0/tailvue<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> _Summary</h1>
<ul>
<li><a href="#installation">Installation</a></li>
<li><a href="#body">Body</a></li>
<li><a href="#navbar">Navbar</a></li>
<li><a href="#hero-banner">Hero Banner</a></li>
<li><a href="#contents">Contents</a></li>
<li><a href="#footer">Footer</a></li>
<li><a href="#others">Others</a></li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>In the terminal :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @c1ach0/tailvue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the ./app/main.js file add following before the new Vue instance:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> tailvue <span class="token keyword">from</span> <span class="token string">"@c1ach0/tailvue"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>tailvue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h2>
<p><code v-pre>The body includes the navigation bar and the footer, you can add your HTML code inside.</code></p>
<h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> Navbar</h2>
<h2 id="hero-banner" tabindex="-1"><a class="header-anchor" href="#hero-banner" aria-hidden="true">#</a> hero banner</h2>
<h2 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h2>
<h2 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h2>
<ul>
<li><strong>Badge</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>badge</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Word<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>badge</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>red - pink - blue - green - yellow - gray - indigo - purple</em></p>
<!-- # _Contributions

[C1ach0](https://github.com/c1ach0) --></div></template>


