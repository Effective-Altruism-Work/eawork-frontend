import { defineNuxtPlugin } from "#app";
import { addIcons } from "oh-vue-icons";
import { BiGithub, HiSolidExternalLink, RiExternalLinkLine } from "oh-vue-icons/icons";

export default defineNuxtPlugin((nuxtApp) => {
  addIcons(
    BiGithub,
    HiSolidExternalLink,
    RiExternalLinkLine,
  );
});
