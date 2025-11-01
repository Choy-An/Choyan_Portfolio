import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { i as items$1, t as title } from "../../../chunks/projects.js";
import { i as items } from "../../../chunks/skills.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-list.svelte-f4z73x{display:grid;grid-template-columns:repeat(3, 1fr);gap:20px}@media(max-width: 1350px){.projects-list.svelte-f4z73x{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 850px){.projects-list.svelte-f4z73x{grid-template-columns:repeat(1, 1fr)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filters = items.filter((it) => {
    return items$1.some((project) => project.skills.some((skill) => skill.slug === it.slug));
  });
  let search = "";
  let displayed = [];
  $$result.css.add(css);
  {
    {
      displayed = items$1.filter((project) => {
        const isFiltered = filters.every((item) => !item.isSelected) || project.skills.some((tech) => filters.some((filter) => filter.isSelected && filter.slug === tech.slug));
        const isSearched = search.trim().length === 0 || project.name.trim().toLowerCase().includes(search.trim().toLowerCase());
        return isFiltered && isSearched;
      });
    }
  }
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="projects-filters">${each(filters, (tech) => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            active: tech.isSelected,
            classes: "text-0.8em"
          },
          {},
          {
            default: () => {
              return `${escape(tech.name)}`;
            }
          }
        )}`;
      })}</div> ${displayed.length === 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-cube",
          classes: "text-3.5em"
        },
        {},
        {}
      )} <p class="font-300" data-svelte-h="svelte-1jyyf6v">Could not find anything...</p></div>` : `<div class="projects-list mt-5 svelte-f4z73x">${each(displayed, (project) => {
        return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`;
      })}</div>`}`;
    }
  })}`;
});
export {
  Page as default
};
