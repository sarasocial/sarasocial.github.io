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
		watch: ["./_resources/assets/", "./_resources/scss/", "./_resources/css", "./_resources/javascript"],

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

    eleventyConfig.setTemplateFormats("html,liquid,njk,md,11ty.js");
    eleventyConfig.setLayoutResolution(true);

    eleventyConfig.setInputDirectory("_site");
    eleventyConfig.setOutputDirectory("_dist");

    eleventyConfig.setDataDirectory("_data");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setLayoutsDirectory("_includes/layouts");

    eleventyConfig.addPassthroughCopy({"./CNAME": "./CNAME"});
    eleventyConfig.addPassthroughCopy({"./_resources/assets": "./_assets"});
    eleventyConfig.addPassthroughCopy({"./_resources/javascript": "./_javascript"});
    eleventyConfig.addPassthroughCopy({"./_resources/.well-known": "./.well-known"});

    eleventyConfig.addWatchTarget("./_resources/**/*.(png|jpg|ico|svg|css|scss|html|njk|md|json|js|cjs|txt|webmanifest|scss)", {
        resetConfig: true
    });
};