import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from "./ssr.js";
import { c as countMonths, a as computeExactDuration, g as getMonthName } from "./app.js";
import { C as Chip } from "./Chip.js";
import { C as Card } from "./Card.js";
import { C as CardTitle, a as ChipIcon } from "./ChipIcon.js";
import { U as UIcon } from "./UIcon.js";
import { C as CardDivider } from "./CardDivider.js";
import { g as getAssetURL } from "./assets.js";
import { b as base } from "./paths.js";
const CardLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-link.svelte-18qy750:hover{border-color:var(--border-hover)}.card-link.svelte-18qy750:hover:after{content:attr(data-help);display:inline-block;position:absolute;width:max-content;background-color:var(--secondary);padding:5px 10px;right:40%;top:calc(100% + 5px);border:1px solid var(--border);border-radius:15px;z-index:10}",
  map: null
};
const CardLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { to } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  $$result.css.add(css$1);
  return `<a class="card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"${add_attribute("href", to, 0)}${add_attribute("title", label, 0)} target="_blank" rel="noreferrer"${add_attribute("data-help", label, 0)}>${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-link",
      classes: "text-[var(--secondary-text)]"
    },
    {},
    {}
  )} </a>`;
});
const CardBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "" } = $$props;
  let { height = "140px" } = $$props;
  let { radius = "0" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  return `<div style="${"width: 100%; overflow: hidden; border-radius: " + escape(radius, true) + ";"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} style="${"width: 100%; height: " + escape(height, true) + "; object-fit: cover; display: block;"}"></div>`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".status-overlay.svelte-1ucz3z{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.6);color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:1.2em;border-radius:8px;pointer-events:none;text-align:center;z-index:10}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let period;
  let from;
  let to;
  let isWip;
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  countMonths(project.period.from, project.period.to);
  period = computeExactDuration(project.period.from, project.period.to);
  from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
  to = project.period.to ? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}` : "now";
  isWip = project.status && project.status !== "live";
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      color: project.color,
      href: isWip ? void 0 : `${base}/projects/${project.slug}`,
      class: "relative"
    },
    {},
    {
      default: () => {
        return `${isWip ? `<div class="status-overlay svelte-1ucz3z">${escape(project.status === "wip" ? "Work in Progress" : "Coming Soon")}</div>` : ``} ${validate_component(CardBanner, "CardBanner").$$render(
          $$result,
          {
            src: getAssetURL(project.banner ?? project.logo),
            alt: project.name,
            height: "140px"
          },
          {},
          {}
        )} <div class="m-t-20px row justify-between items-center">${validate_component(CardTitle, "CardTitle").$$render($$result, { title: project.name }, {}, {})} <div class="row">${each(project.links, (link) => {
          return `${validate_component(CardLink, "CardLink").$$render($$result, { label: link.label ?? "", to: link.to }, {}, {})}`;
        })}</div></div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em"><div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render(
          $$result,
          {
            icon: "i-carbon-assembly-cluster",
            classes: "text-1.25em"
          },
          {},
          {}
        )} <p>${escape(project.type)}</p></div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render(
          $$result,
          {
            icon: "i-carbon-time",
            classes: "text-1.25em"
          },
          {},
          {}
        )} <p>${escape(period)}</p></div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="col sm:h-100px md:h-160px"><p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">${escape(project.shortDescription)}</p></div> <div class="row justify-between text-0.8em font-400">${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(from)}`;
          }
        })} ${from !== to ? `${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(to)}`;
          }
        })}` : ``}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row flex-wrap">${each(project.skills, (tech) => {
          return `${validate_component(ChipIcon, "ChipIcon").$$render(
            $$result,
            {
              logo: getAssetURL(tech.logo),
              name: tech.name,
              href: `${base}/skills/${tech.slug}`
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
export {
  ProjectCard as P
};
