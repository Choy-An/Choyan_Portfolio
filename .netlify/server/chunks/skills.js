import { A as Assets } from "./assets.js";
import { omit } from "@riadh-adrani/utils";
const svelte = "# Svelte\r\n\r\n---\r\n\r\n[`Svelte`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.\r\n\r\nThe compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.\r\n\r\n<br/>\r\n\r\nSvelte is :\r\n\r\n- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.\r\n- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.\r\n- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.\r\n\r\n<br/>\r\n\r\n## Example\r\n\r\n```ts\r\n<script>\r\n    let count = 1;\r\n    $: doubled = count * 2;\r\n<\/script>\r\n\r\n<p>{count} * 2 = {doubled}</p>\r\n\r\n<button on:click={() => count = count + 1}>Count</button>\r\n```\r\n\r\n### Heading 3\r\n\r\n#### Heading 4\r\n\r\n##### Heading 5\r\n\r\n###### Heading 6\r\n\r\n> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.\r\n";
const defineSkillCategory = (data) => data;
const categories = [
  defineSkillCategory({ name: "Programming Languages", slug: "pro-lang" }),
  defineSkillCategory({ name: "Frameworks", slug: "framework" }),
  defineSkillCategory({ name: "Libraries", slug: "library" }),
  defineSkillCategory({ name: "Langauges", slug: "lang" }),
  defineSkillCategory({ name: "Databases", slug: "db" }),
  defineSkillCategory({ name: "ORMs", slug: "orm" }),
  defineSkillCategory({ name: "DevOps", slug: "devops" }),
  defineSkillCategory({ name: "Testing", slug: "test" }),
  defineSkillCategory({ name: "Dev Tools", slug: "devtools" }),
  defineSkillCategory({ name: "Markup & Style", slug: "markup-style" }),
  defineSkillCategory({ name: "Design", slug: "design" }),
  defineSkillCategory({ name: "Soft Skills", slug: "soft" })
];
const defineSkill = (skill) => {
  const out = omit(skill, "category");
  if (skill.category) {
    out.category = categories.find((it) => it.slug === skill.category);
  }
  return out;
};
const items = [
  defineSkill({
    slug: "figma",
    color: "purple",
    description: "Figma is my primary tool for UI/UX and interface design.",
    logo: Assets.Figma,
    name: "Figma",
    category: "design"
  }),
  defineSkill({
    slug: "illustrator",
    color: "orange",
    description: "Adobe Illustrator is my go-to tool for vector graphics and illustrations.",
    logo: Assets.Illustrator,
    name: "Illustrator",
    category: "design"
  }),
  defineSkill({
    slug: "photoshop",
    color: "blue",
    description: "Adobe Photoshop is used for photo editing and digital artwork.",
    logo: Assets.Photoshop,
    name: "Photoshop",
    category: "design"
  }),
  defineSkill({
    slug: "excel",
    color: "green",
    description: "Microsoft Excel is used for data management, charts, and calculations.",
    logo: Assets.Excel,
    name: "Excel",
    category: "productivity"
  }),
  defineSkill({
    slug: "css",
    color: "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.CSS,
    name: "CSS",
    category: "markup-style"
  }),
  defineSkill({
    slug: "html",
    color: "orange",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.HTML,
    name: "HTML",
    category: "markup-style"
  }),
  defineSkill({
    slug: "svelte",
    color: "orange",
    description: svelte,
    logo: Assets.Svelte,
    name: "Svelte",
    category: "library"
  })
];
const title = "Skills";
const getSkills = (...slugs) => items.filter((it) => slugs.includes(it.slug));
const groupByCategory = (query) => {
  const out = [];
  const others = [];
  items.forEach((item) => {
    if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase()))
      return;
    if (!item.category) {
      others.push(item);
      return;
    }
    let category = out.find((it) => it.category.slug === item.category?.slug);
    if (!category) {
      category = { items: [], category: item.category };
      out.push(category);
    }
    category.items.push(item);
  });
  if (others.length !== 0) {
    out.push({ category: { name: "Others", slug: "others" }, items: others });
  }
  return out;
};
export {
  groupByCategory as a,
  getSkills as g,
  items as i,
  title as t
};
