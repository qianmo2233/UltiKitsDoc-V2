import{_ as t,r as p,o as c,c as l,b as a,a as o,d as n,e as s}from"./app.64fac88d.js";const i={},u={id:"in-game-email-api",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#in-game-email-api","aria-hidden":"true"},"#",-1),d=n(" In-game Email API "),k=s(`<p>UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A <code>EmailUtils</code> \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD</p><p>\u6240\u6709\u65B9\u6CD5\u5747\u4E3A\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u9700\u5B9E\u4F8B\u5316</p><h2 id="\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762" aria-hidden="true">#</a> \u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762</h2><p><code>public statis void readEmails(Player player)</code></p><p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">readEmails</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192" aria-hidden="true">#</a> \u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192</h2><p><code>public static void pushToReceiver(Player receiver)</code></p><p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">pushToReceiver</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6" aria-hidden="true">#</a> \u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6</h2><p><code>public static void sendAllMessage(String message, ItemStack itemSend)</code></p><p>\u53C2\u6570\uFF1AString \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F ItemStack \u7269\u54C1\u9644\u4EF6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ItemStack</span> itemStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStack</span><span class="token punctuation">(</span><span class="token class-name">Material</span><span class="token punctuation">.</span>DIAMOND<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">pushToReceiver</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),m=a("div",{class:"custom-container tip"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"TIP"),a("p",null,"\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230")],-1),v=s(`<h2 id="\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6</h2><p><code>public static void deleteReadEmails(Player player)</code></p><p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">deleteReadEmails</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6</h2><p><code>public static void deleteHistoryEmail(Player player)</code></p><p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">deleteHistoryEmail</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6" aria-hidden="true">#</a> \u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6</h2><p><code>public static void sendMessage(Player player, OfflinePlayer receiver, String message, boolean hasContent)</code></p><p>\u53C2\u6570\uFF1A</p><ol><li>Player Bukkit\u73A9\u5BB6\u5BF9\u8C61</li><li>OfflinePlayer Bukkit(\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61</li><li>String \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F</li><li>boolean \u662F\u5426\u53D1\u9001\u9644\u4EF6</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> sender <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Player</span> receiver <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getOfflinePlayer</span><span class="token punctuation">(</span><span class="token string">&quot;p2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> <span class="token string">&quot;some message&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),h=a("div",{class:"custom-container tip"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"TIP"),a("p",null,[n("\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\uFF0C\u82E5"),a("code",null,"hasContent"),n("\u4E3A"),a("code",null,"true"),n("\uFF0C\u5219\u5C06\u73A9\u5BB6"),a("code",null,"sender"),n("\u4E3B\u624B\u4E0A\u7684\u7684\u7269\u54C1\u4F5C\u4E3A\u9644\u4EF6\u53D1\u9001")])],-1),g=s(`<h2 id="\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF" aria-hidden="true">#</a> \u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF</h2><p><code>public static Integer getUnReadEmailNum(Player player)</code></p><p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61 \u8FD4\u56DE\uFF1AInteger \u672A\u8BFB\u90AE\u4EF6\u6570\u91CF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> num <span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">getUnReadEmailNum</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8FD8\u6709 &quot;</span> <span class="token operator">+</span> num <span class="token operator">+</span> <span class="token string">&quot;\u5C01\u90AE\u4EF6\u672A\u8BFB\uFF01&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(b,f){const e=p("Badge");return c(),l("div",null,[a("h1",u,[r,d,o(e,{text:"UltiTools 5.1.2+",vertical:"middle"})]),k,m,v,h,g])}var x=t(i,[["render",y],["__file","game-email.html.vue"]]);export{x as default};
