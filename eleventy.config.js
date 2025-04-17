import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
    eleventyConfig.setServerOptions({
		// Whether the live reload snippet is used
		liveReload: true,

		// Whether DOM diffing updates are applied where possible instead of page reloads
		domDiff: true,

		// The starting port number
		port: 8080,

		// Additional files to watch that will trigger server updates
		// Accepts an Array of file paths or globs (passed to `chokidar.watch`).
		// Works great with a separate bundler writing files to your output folder.
		// e.g. `watch: ["_site/**/*.css"]`
		watch: ["./assets/", "./code/", "./data/", "./content/"],

		// Show local network IP addresses for device testing
		showAllHosts: false,

		// Use a local key/certificate to opt-in to local HTTP/2 with https
		https: {},

		// Change the default file encoding for reading/serving files
		encoding: "utf-8",

		// Show the dev server version number on the command line
		showVersion: false,

		// The default file name to show when a directory is requested.
		indexFileName: "index.html",

		// An object mapping a URLPattern pathname to a callback function
		// for on-request processing
		onRequest: {},
	});
	
	eleventyConfig.setBrowserSyncConfig({
		files: './_dist/_css/**/*.css'
	});
	eleventyConfig.setTemplateFormats([
		"html",
		"liquid",
		"njk",
		"md",
		"11ty.js"
	]);	  
    eleventyConfig.setLayoutResolution(true);

    eleventyConfig.setInputDirectory(".internal/.temp/11ty");
    eleventyConfig.setOutputDirectory("_dist");

    eleventyConfig.addPassthroughCopy({"./assets": "./_assets"});

    eleventyConfig.addPassthroughCopy({"./code/javascript": "./_javascript"});
    eleventyConfig.addPassthroughCopy({"./.internal/.temp/css": "./_css"});
	eleventyConfig.addPassthroughCopy({"./.internal/.static": "./"});

    eleventyConfig.setDataDirectory("_data");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setLayoutsDirectory("_includes/layouts");

    eleventyConfig.addWatchTarget("./assets/**/*.{png,jpg,ico,svg,css,scss,html,njk,md,json,js,cjs,txt,webmanifest}", {
        resetConfig: true
    });
};