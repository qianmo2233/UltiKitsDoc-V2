import{_ as n,o as e,c as s,b as a,d,e as t}from"./app.64fac88d.js";const i={},o=a("h1",{id:"database-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#database-api","aria-hidden":"true"},"#"),d(" Database API")],-1),p=a("p",null,"UltiKits \u652F\u6301\u4F7F\u7528MySQL\u6570\u636E\u5E93\u6765\u50A8\u5B58\u6570\u636E\uFF0C\u5E76\u4E14\u5C01\u88C5\u4E86\u4E00\u7CFB\u5217\u7684\u65B9\u6CD5",-1),l=a("div",{class:"custom-container warning"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8v4"}),a("path",{d:"M12 16h.01"})])]),a("p",{class:"custom-container-title"},"\u8BE5\u529F\u80FD\u5C06\u88AB\u5F03\u7528"),a("p",null,"\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u529F\u80FD\u5DF2\u4E0D\u518D\u9002\u7528\u548C\u652F\u6301")],-1),r=t(`<h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><h3 id="\u83B7\u53D6core-api\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6core-api\u5B9E\u4F8B" aria-hidden="true">#</a> \u83B7\u53D6Core API\u5B9E\u4F8B</h3><p>\u6570\u636E\u5E93\u529F\u80FD\u4F9D\u8D56\u4E8EUltiCoreAPI\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5148\u83B7\u53D6UltiCoreAPI\u5B9E\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">UltiCoreAPI</span> ultiCoreAPI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UltiCoreAPI</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h3><p>\u5148\u8C03\u7528 <code>setUpDatabase()</code> \u65B9\u6CD5\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F</p><p>\u7136\u540E\u5B9E\u4F8B\u5316 <code>DatabaseUtils</code> \u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ultiCoreAPI<span class="token punctuation">.</span><span class="token function">setUpDatabase</span><span class="token punctuation">(</span>database<span class="token punctuation">,</span> ip<span class="token punctuation">,</span> port<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
databaseUtils <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseUtils</span><span class="token punctuation">(</span>ultiCoreAPI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F97\u5230\u7684 <code>databaseUtils</code> \u5B9E\u4F8B\u4FBF\u53EF\u4EE5\u8FDB\u884C\u5404\u79CD\u6570\u636E\u5E93\u64CD\u4F5C\u4E86</p><h2 id="crud\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#crud\u64CD\u4F5C" aria-hidden="true">#</a> CRUD\u64CD\u4F5C</h2><h3 id="\u521B\u5EFA\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u8868</h3><p>\u8C03\u7528 <code>createTable()</code> \u65B9\u6CD5\u6765\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u8868</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">,</span> fields<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</span>
<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">,</span> fields<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>fields</td><td>String[]</td><td>\u5B57\u6BB5</td></tr><tr><td>autoCommit</td><td>boolean</td><td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td></tr></tbody></table><p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p><h3 id="\u5224\u65AD\u5217" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5217" aria-hidden="true">#</a> \u5224\u65AD\u5217</h3><p>\u8C03\u7528 <code>isColumnExists()</code> \u53EF\u4EE5\u5224\u65AD\u6307\u5B9A\u6570\u636E\u8868\u662F\u5426\u5B58\u5728\u6307\u5B9A\u5217</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">isColumnExists</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;columnName&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>columnName</td><td>String</td><td>\u5217\u540D\u79F0</td></tr></tbody></table><p>\u5B58\u5728\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse</p><h3 id="\u6DFB\u52A0\u5217" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5217" aria-hidden="true">#</a> \u6DFB\u52A0\u5217</h3><p>\u8C03\u7528 <code>addColumn()</code> \u6765\u6DFB\u52A0\u4E00\u4E2A\u5217</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">addColumn</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;columnName&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>columnName</td><td>String</td><td>\u5217\u540D\u79F0</td></tr></tbody></table><p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><p>\u8C03\u7528 <code>getData()</code> \u6765\u67E5\u8BE2\u6570\u636E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">getData</span><span class="token punctuation">(</span>primaryIDField<span class="token punctuation">,</span> id<span class="token punctuation">,</span> tableName<span class="token punctuation">,</span> fieldName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>primaryIDField</td><td>String</td><td>\u4E3B\u952E\u5B57\u6BB5\u540D</td></tr><tr><td>id</td><td>String</td><td>\u67E5\u8BE2\u6570\u636E</td></tr><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>fieldName</td><td>String</td><td>\u5217\u540D\u79F0</td></tr></tbody></table><p>\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u7ED3\u679C\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull</p><h3 id="\u67E5\u8BE2\u5217" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5217" aria-hidden="true">#</a> \u67E5\u8BE2\u5217</h3><p>\u8C03\u7528 <code>getKeys()</code> \u67E5\u8BE2\u4E00\u4E2A\u5217\u7684\u5168\u90E8\u6570\u636E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">String</span> tableName<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>fieldName</td><td>String</td><td>\u5217\u540D\u79F0</td></tr></tbody></table><p>\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull</p><h3 id="\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E</h3><p>\u8C03\u7528 <code>insertData()</code> \u6765\u63D2\u5165\u4E00\u6761\u6570\u636E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">,</span> dataMap<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</span>
<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">,</span> dataMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>DataMap</td><td>Map&lt;String, String&gt;</td><td>\u6570\u636E</td></tr><tr><td>autoCommit</td><td>boolean</td><td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td></tr></tbody></table>`,45),c=a("div",{class:"custom-container info"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"INFO"),a("ul",null,[a("li",null,"\u5173\u4E8EdataMap")]),a("p",null,"Key\u4E3A\u6570\u636E\u5B57\u6BB5\uFF0CValue\u4E3A\u5BF9\u5E94\u7684\u503C")],-1),u=t(`<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><p>\u8C03\u7528 <code>updateData()</code> \u6765\u66F4\u65B0\u4E00\u6761\u6570\u636E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">updateData</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> fieldName<span class="token punctuation">,</span> primaryIDField<span class="token punctuation">,</span> id<span class="token punctuation">,</span> value<span class="token punctuation">,</span> autoCommit<span class="token punctuation">,</span> otherStatements<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>primaryIDField</td><td>String</td><td>\u4E3B\u952E\u5B57\u6BB5\u540D</td></tr><tr><td>id</td><td>String</td><td>\u67E5\u8BE2\u6570\u636E</td></tr><tr><td>tableName</td><td>String</td><td>\u8868\u540D\u79F0</td></tr><tr><td>fieldName</td><td>String</td><td>\u76EE\u6807\u5217</td></tr><tr><td>key</td><td>String</td><td>\u65B0\u6570\u636E</td></tr><tr><td>autoCommit</td><td>boolean</td><td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td></tr><tr><td>otherStatements</td><td>List&lt;PreparedStatement&gt;</td><td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4null)\u9644\u52A0\u67E5\u8BE2\u8BED\u53E5</td></tr></tbody></table><p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,8),h=[o,p,l,r,c,u];function m(b,v){return e(),s("div",null,h)}var g=n(i,[["render",m],["__file","database.html.vue"]]);export{g as default};
