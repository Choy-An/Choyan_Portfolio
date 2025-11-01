import{A as s}from"./UIcon.e8e2dfc2.js";const m=`# Svelte\r
\r
---\r
\r
[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.\r
\r
The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.\r
\r
<br/>\r
\r
Svelte is :\r
\r
- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.\r
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.\r
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.\r
\r
<br/>\r
\r
## Example\r
\r
\`\`\`ts\r
<script>\r
    let count = 1;\r
    $: doubled = count * 2;\r
<\/script>\r
\r
<p>{count} * 2 = {doubled}</p>\r
\r
<button on:click={() => count = count + 1}>Count</button>\r
\`\`\`\r
\r
### Heading 3\r
\r
#### Heading 4\r
\r
##### Heading 5\r
\r
###### Heading 6\r
\r
> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.\r
`;function d(e,...i){const a=Object.assign({},e);return Object.keys(a).forEach(r=>{i.includes(r)&&delete a[r]}),a}const t=e=>e,g=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],n=e=>{const i=d(e,"category");return e.category&&(i.category=g.find(a=>a.slug===e.category)),i},u=[n({slug:"figma",color:"purple",description:"Figma is my primary tool for UI/UX and interface design.",logo:s.Figma,name:"Figma",category:"design"}),n({slug:"illustrator",color:"orange",description:"Adobe Illustrator is my go-to tool for vector graphics and illustrations.",logo:s.Illustrator,name:"Illustrator",category:"design"}),n({slug:"photoshop",color:"blue",description:"Adobe Photoshop is used for photo editing and digital artwork.",logo:s.Photoshop,name:"Photoshop",category:"design"}),n({slug:"excel",color:"green",description:"Microsoft Excel is used for data management, charts, and calculations.",logo:s.Excel,name:"Excel",category:"productivity"}),n({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.CSS,name:"CSS",category:"markup-style"}),n({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.HTML,name:"HTML",category:"markup-style"}),n({slug:"svelte",color:"orange",description:m,logo:s.Svelte,name:"Svelte",category:"library"})],h="Skills",b=(...e)=>u.filter(i=>e.includes(i.slug)),f=e=>{const i=[],a=[];return u.forEach(r=>{if(e.trim()&&!r.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!r.category){a.push(r);return}let o=i.find(c=>{var l;return c.category.slug===((l=r.category)==null?void 0:l.slug)});o||(o={items:[],category:r.category},i.push(o)),o.items.push(r)}),a.length!==0&&i.push({category:{name:"Others",slug:"others"},items:a}),i};export{f as a,b as g,u as i,h as t};
