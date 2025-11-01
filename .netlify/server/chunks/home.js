import { g as getSkills } from "./skills.js";
var Platform = /* @__PURE__ */ ((Platform2) => {
  Platform2["GitHub"] = "github";
  Platform2["StackOverflow"] = "stackoverflow";
  Platform2["Twitter"] = "twitter";
  Platform2["Linkedin"] = "linkedin";
  Platform2["Email"] = "email";
  Platform2["Facebook"] = "facebook";
  Platform2["Youtube"] = "youtube";
  return Platform2;
})(Platform || {});
const title = "Home";
const name = "Aswanth";
const lastName = "Choyan";
const description = "Hi, I’m a designer and creative thinker passionate about blending culture, design, and technology to craft meaningful experiences.I love turning ideas into visuals that communicate clearly and inspire the viewer.";
const links = [
  {
    platform: Platform.GitHub,
    link: "https://github.com/Choy-An"
  },
  {
    platform: Platform.Linkedin,
    link: "https://www.linkedin.com/in/aswanthchoyan"
  },
  {
    platform: Platform.Email,
    link: "aswanthchoyan@gmail.com"
  }
];
const skills = getSkills("figma", "illustrator", "photoshop", "excel", "html", "css", "js");
export {
  Platform as P,
  links as a,
  description as d,
  lastName as l,
  name as n,
  skills as s,
  title as t
};
