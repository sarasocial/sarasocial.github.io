const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // necessary to automatically prepend the prefix to internal links
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  return {
    // prefix used by GitHub Pages, usually your project name
    pathPrefix: "/sarasoci.al/"
  }
};