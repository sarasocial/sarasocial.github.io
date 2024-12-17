
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};

export const config = {
	pathPrefix: "/sarasoci.al/",
}