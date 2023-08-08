import{_ as e,v as a,b as t,R as o}from"./chunks/framework.ac6683e9.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Vue/index.md","filePath":"Vue/index.md"}'),r={name:"Vue/index.md"},i=o('<h2 id="vue-为什么要在列表组件中写-key-其作用是什么" tabindex="-1">Vue 为什么要在列表组件中写 key，其作用是什么？ <a class="header-anchor" href="#vue-为什么要在列表组件中写-key-其作用是什么" aria-label="Permalink to &quot;Vue 为什么要在列表组件中写 key，其作用是什么？&quot;">​</a></h2><p>可以有效避免 vue 为了性能，<strong>就地复用</strong> 的机制，更快，更准确地拿到 Vnode节点。</p><h2 id="v-if-和-v-show-的区别是什么" tabindex="-1">v-if 和 v-show 的区别是什么？ <a class="header-anchor" href="#v-if-和-v-show-的区别是什么" aria-label="Permalink to &quot;v-if 和 v-show 的区别是什么？&quot;">​</a></h2><p>v-show 其实就是 <code>display:none</code> 的切换。而 v-if 是是否渲染该内容。</p><p>一般将频繁显隐的元素用 v-show ，反之则 v-if 。</p><p>并且，由于 v-if=&quot;false&quot; 时，内部组件是不会渲染的，所以可以将不重要的内容设置 false 。</p><p>需要时（或异步，比如 $nextTick）再设置为 true，这样可以优先渲染重要的其它内容，合理利用，可以进行性能优化。</p><h2 id="计算属性和侦听器的区别" tabindex="-1">计算属性和侦听器的区别？ <a class="header-anchor" href="#计算属性和侦听器的区别" aria-label="Permalink to &quot;计算属性和侦听器的区别？&quot;">​</a></h2><p>计算属性是通过某些变量，得到一个新的值，并且它相比侦听器，它有缓存，性能更好。</p><p>watch 侦听器是监听某个变量发生了改变之后，执行某些回调。</p><p>所以，只是需要动态值，那就用计算属性；需要知道值的改变后执行业务逻辑，才用 watch，用反或混用虽然可行，但都是不正确的用法。</p><h2 id="组件中-data-为什么是函数-而-new-vue-实例里-data-可以直接是一个对象" tabindex="-1">组件中 data 为什么是函数？而 new Vue 实例里，data 可以直接是一个对象？ <a class="header-anchor" href="#组件中-data-为什么是函数-而-new-vue-实例里-data-可以直接是一个对象" aria-label="Permalink to &quot;组件中 data 为什么是函数？而 new Vue 实例里，data 可以直接是一个对象？&quot;">​</a></h2><p>首先，因为 Vue 是 <code>SPA</code> ,所以，组件都是复用的。对象是引用关系，没有作用域隔离，所以，需要函数作用域来隔离。</p><p>而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。</p><h2 id="说一说你对于-keep-alive-的理解" tabindex="-1">说一说你对于 keep-alive 的理解？ <a class="header-anchor" href="#说一说你对于-keep-alive-的理解" aria-label="Permalink to &quot;说一说你对于 keep-alive 的理解？&quot;">​</a></h2><p><a href="https://juejin.cn/post/6844904084479164424" target="_blank" rel="noreferrer">浅析Vue系列之(一)详解keep-alive</a></p><h2 id="v-for-和-v-if-不能同时书写-怎么解决" tabindex="-1">v-for 和 v-if 不能同时书写，怎么解决？ <a class="header-anchor" href="#v-for-和-v-if-不能同时书写-怎么解决" aria-label="Permalink to &quot;v-for 和 v-if 不能同时书写，怎么解决？&quot;">​</a></h2><p>首先， v-for 的优先级高于 v-if ，也就是说，假设总计50条数据，即使经过v-if以后，只剩下25条显示，但是v-for早就循环了一遍50条数据。</p><p>为了提高性能，解决办法就是用一个计算属性先将数据过滤了以后，v-for循环过滤了之后的数据。</p>',19),n=[i];function s(d,h,p,l,v,f){return a(),t("div",null,n)}const k=e(r,[["render",s]]);export{c as __pageData,k as default};