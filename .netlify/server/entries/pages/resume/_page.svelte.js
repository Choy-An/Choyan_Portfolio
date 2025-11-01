import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { C as CommonPage } from "../../../chunks/CommonPage.js";
const data = "resume.pdf";
const title = "Resumé";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".resume.svelte-1er6m58.svelte-1er6m58{display:flex;justify-content:center;margin-top:20px}.resume.svelte-1er6m58>a.svelte-1er6m58{color:inherit}.pdf-viewer.svelte-1er6m58.svelte-1er6m58{width:100%;margin-top:2rem;border:1px solid var(--border-color, #e5e5e5);border-radius:8px;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(CommonPage, "CommonPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="resume svelte-1er6m58">${`<a${add_attribute("href", data, 0)} download class="svelte-1er6m58">${validate_component(Chip, "Chip").$$render($$result, { size: "1.25em" }, {}, {
        default: () => {
          return `Download`;
        }
      })}</a>`}</div>  ${`<div class="pdf-viewer svelte-1er6m58" data-svelte-h="svelte-12151si"><iframe${add_attribute("src", data, 0)} width="100%" height="800px"></iframe></div>`}`;
    }
  })}`;
});
export {
  Page as default
};
