import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
import { g as getAssetURL } from "../../../../chunks/assets.js";
import { t as title } from "../../../../chunks/experience.js";
import { b as getTimeDiff, M as MainTitle } from "../../../../chunks/app.js";
import { C as CardLogo } from "../../../../chunks/CardLogo.js";
import { B as Banner, M as Markdown } from "../../../../chunks/Banner.js";
import { T as TabTitle } from "../../../../chunks/TabTitle.js";
import { C as Chip } from "../../../../chunks/Chip.js";
import { U as UIcon } from "../../../../chunks/UIcon.js";
import { C as CardDivider } from "../../../../chunks/CardDivider.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".screenshots-scroll.svelte-1sb4s50.svelte-1sb4s50{display:flex;flex-direction:column}.screenshots-scroll.svelte-1sb4s50 img.svelte-1sb4s50{display:block;width:100%;height:auto;margin:0;padding:0;border-radius:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedTitle;
  let { data } = $$props;
  const screenshots = data.experience?.screenshots.map((s) => ({ ...s, src: getAssetURL(s.src) })) ?? [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  computedTitle = data.experience ? `${data.experience.name} - ${title}` : title;
  return `${validate_component(TabTitle, "TabTitle").$$render($$result, { title: computedTitle }, {}, {})} <div class="pb-10 overflow-x-hidden col flex-1">${data.experience === void 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-cube",
      class: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-1o82fhi">Could not load experience data...</p></div>` : `<div class="flex flex-col items-center overflow-x-hidden">${validate_component(Banner, "Banner").$$render($$result, { img: getAssetURL(data.experience.logo) }, {}, {
    default: () => {
      return `<div class="col-center p-y-20"><div class="text-0.9em">${validate_component(MainTitle, "MainTitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.experience.name)}`;
        }
      })}</div> <p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center">${escape(data.experience.company)} · ${escape(data.experience.location)} · ${escape(data.experience.type)}</p> <p class="font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center">${escape(getTimeDiff(data.experience.period.from, data.experience.period.to))}</p> <div class="w-75%">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">${each(data.experience.links, (item) => {
        return `${validate_component(Chip, "Chip").$$render($$result, { href: item.to }, {}, {
          default: () => {
            return `<div class="row-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-link" }, {}, {})} <span>${escape(item.label)}</span></div> `;
          }
        })}`;
      })}</div> <div class="row-center flex-wrap m-b-2">${each(data.experience.skills, (item) => {
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
  })} <div class="pt-3 pb-1 overflow-x-hidden w-full"><div class="px-10px m-y-5">${data.experience.description ? `${validate_component(Markdown, "Markdown").$$render($$result, { content: data.experience.description }, {}, {})}` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-text-font",
      class: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-kl0ixf">No description...</p></div>`}</div> <div class="w-100% m-t-8">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> ${screenshots.length > 0 ? ` <div class="screenshots-scroll w-full svelte-1sb4s50">${each(screenshots, (item) => {
    return `<img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.label, 0)} class="svelte-1sb4s50">`;
  })}</div>` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-image",
      class: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-s36p3y">No screenshots</p></div>`}</div></div>`} </div>`;
});
export {
  Page as default
};
