import { c as create_ssr_component, v as validate_component, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import { A as Assets, g as getAssetURL } from "../../../chunks/assets.js";
import { a as computeExactDuration } from "../../../chunks/app.js";
import { C as CardDivider } from "../../../chunks/CardDivider.js";
const items = [
  {
    degree: "Aswanth C",
    description: "",
    location: "Thalassery, Kerala",
    logo: Assets.AswanthC,
    name: "",
    organization: "Information Designer, Urban Planner",
    period: { from: new Date(2e3, 11, 11), to: new Date() },
    shortDescription: "",
    slug: "dummy-education-item",
    subjects: ["Reading", "Football", "Volleyball", "Creative Coding", "Cooking", "Cycling", "Driving"]
  },
  {
    degree: "M.Des in Information Design",
    description: "",
    location: "Bangalore, Karnataka",
    logo: Assets.NID,
    name: "",
    organization: "National Institute of Design, Bangalore",
    period: { from: new Date(2024, 6, 1), to: new Date() },
    shortDescription: "",
    slug: "dummy-education-item-2",
    subjects: ["Data Visualization", "Information Visualization", "UI/UX", "Information Architecture", "Wireframing", "Prototyping", "Service Design", "Human Centric Design"]
  },
  {
    degree: "Bachelor of Planning",
    description: "",
    location: "Bhopal, Madhya Pradesh",
    logo: Assets.SPA,
    name: "",
    organization: "School of Planning and Architecture, Bhopal",
    period: { from: new Date(2019, 6, 1), to: new Date(2023, 5, 30) },
    shortDescription: "",
    slug: "dummy-education-item-3",
    subjects: ["Data Collection and Analysis", "Urban Planning", "Cartography", "Urban Visualisations", "Sustainable Design", "3D Modeling"]
  },
  {
    degree: "High School",
    description: "",
    location: "Mahe, Kerala",
    logo: Assets.JNV,
    name: "",
    organization: "Jawahar Navodaya Vidyalaya, Mahe",
    period: { from: new Date(2011, 11, 1), to: new Date(2018, 4, 1) },
    shortDescription: "",
    slug: "dummy-education-item-4",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
  }
];
const title = "Hello";
let search = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result = items;
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title, search }, {}, {
    default: () => {
      return `<div class="col items-center relative mt-10 flex-1">${result.length === 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-development",
          classes: "text-3.5em"
        },
        {},
        {}
      )} <p class="font-300" data-svelte-h="svelte-1jyyf6v">Could not find anything...</p></div>` : `<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"></div> ${each(result, (education, index) => {
        return `<div${add_attribute("class", `flex ${index % 2 !== 0 ? "flex-row" : "flex-row-reverse"} relative items-center w-full my-[10px]`, 0)}><div class="flex-1 hidden lg:flex"></div> <div class="hidden lg:inline p-15px bg-[var(--main)] rounded">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-condition-point" }, {}, {})}</div> <div class="col flex-1 items-stretch">${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="flex-1 col gap-2 items-stretch"><img${add_attribute("src", getAssetURL(education.logo), 0)}${add_attribute("alt", education.organization, 0)} height="50" width="50" class="mb-5"> <div class="text-[1.3em]">${escape(education.degree)}</div> <div>${escape(education.organization)}</div> <div class="col text-[0.9em]">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-location" }, {}, {})} ${escape(education.location)}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-time" }, {}, {})} ${escape(computeExactDuration(education.period.from, education.period.to))}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row flex-wrap gap-1">${each(education.subjects, (subject) => {
              return `${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(subject)}`;
                }
              })}`;
            })} </div></div> `;
          }
        })}</div> </div>`;
      })}`}</div>`;
    }
  })}`;
});
export {
  Page as default
};
