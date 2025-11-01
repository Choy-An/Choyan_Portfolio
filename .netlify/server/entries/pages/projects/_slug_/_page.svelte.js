import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
import { g as getAssetURL } from "../../../../chunks/assets.js";
import { t as title } from "../../../../chunks/projects.js";
import { C as CardLogo } from "../../../../chunks/CardLogo.js";
import { M as MainTitle } from "../../../../chunks/app.js";
import { B as Banner, M as Markdown } from "../../../../chunks/Banner.js";
import { T as TabTitle } from "../../../../chunks/TabTitle.js";
import { C as Chip } from "../../../../chunks/Chip.js";
import { U as UIcon } from "../../../../chunks/UIcon.js";
import { C as CardDivider } from "../../../../chunks/CardDivider.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".screenshots-scroll.svelte-18pep76{display:flex;flex-direction:column}.screenshot.svelte-18pep76{display:block;width:100%;height:auto;margin:0;padding:0;border-radius:0;object-fit:cover;background-color:#111;filter:blur(10px);transition:filter 0.4s ease-out, opacity 0.4s ease-out;opacity:0}.screenshot[src].svelte-18pep76{filter:blur(0);opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedTitle;
  let { data } = $$props;
  const screenshots = data.project?.screenshots ?? [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  computedTitle = data.project ? `${data.project.name} - ${title}` : title;
  return `${validate_component(TabTitle, "TabTitle").$$render($$result, { title: computedTitle }, {}, {})} <div class="pb-10 overflow-x-hidden col flex-1">${data.project === void 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-cube",
      class: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-18mwztv">Could not load project data...</p></div>` : `<div class="flex flex-col items-center overflow-x-hidden">${validate_component(Banner, "Banner").$$render($$result, { img: getAssetURL(data.project.banner) }, {}, {
    default: () => {
      return `<div class="col-center p-y-20"><div class="text-0.9em">${validate_component(MainTitle, "MainTitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.project.name)}`;
        }
      })}</div> <p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">${escape(data.project.type)}</p> <div class="w-75%">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">${each(data.project.links, (item) => {
        return `${validate_component(Chip, "Chip").$$render($$result, { href: item.to }, {}, {
          default: () => {
            return `<div class="row-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-link" }, {}, {})} <span>${escape(item.label)}</span></div> `;
          }
        })}`;
      })}</div> <div class="row-center flex-wrap m-b-2">${each(data.project.skills, (item) => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            classes: "inline-flex flex-row items-center justify-center",
            href: `${base}/skills/${item.slug}`
          },
          {},
          {
            default: () => {
              return `${validate_component(CardLogo, "CardLogo").$$render(
                $$result,
                {
                  src: getAssetURL(item.logo),
                  alt: item.name,
                  radius: "0px",
                  size: 15,
                  classes: "mr-2"
                },
                {},
                {}
              )} <span class="text-[0.9em]">${escape(item.name)}</span> `;
            }
          }
        )}`;
      })}</div></div>`;
    }
  })} <div class="pt-3 pb-1 overflow-x-hidden w-full"><div class="px-10px m-y-5">${data.project.description ? `${validate_component(Markdown, "Markdown").$$render($$result, { content: data.project.description }, {}, {})}` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-text-font",
      class: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-1ugej71">No description</p></div>`}</div> <div class="w-100% m-t-8">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> ${screenshots.length > 0 ? ` <div class="screenshots-scroll w-full svelte-18pep76">${each(screenshots, (item) => {
    return `<img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.label || "Project image", 0)} loading="lazy" decoding="async" width="1200" height="800" class="screenshot svelte-18pep76" style="background-color: #111;">`;
  })}</div>` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-image",
      class: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-s36p3y">No screenshots</p></div>`}  ${data.project.prototype ? `<div class="w-full aspect-video mt-8 mb-4 rounded-xl overflow-hidden shadow-lg"><iframe${add_attribute("src", data.project.prototype, 0)} allowfullscreen class="w-full h-full border-0" loading="lazy"></iframe></div>  <div class="text-center mt-3 mb-8"><a${add_attribute("href", data.project.prototype.replace("embed?embed_host=share&", ""), 0)} target="_blank" class="inline-block text-blue-400 hover:text-blue-300 underline transition">Open in Figma ↗</a></div>` : ``}</div></div>`} </div>`;
});
export {
  Page as default
};
