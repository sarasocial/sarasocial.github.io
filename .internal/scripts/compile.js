// compose: assembles the folder from which 11ty builds
// the actual site

// imports
import fs from "fs-extra";
import path from "path";

// prepare base directory
await fs.remove("_dist");
await fs.remove(".internal/.temp");
await fs.ensureDir("_dist")

// COPY & MOVE DATA, CODE, TEMPLATES -> _INCLUDES
await fs.copy("data", ".internal/.temp/11ty/_data");
await fs.copy("code/templates", ".internal/.temp/11ty/_includes");

// COPY & MOVE SITE CONTENT
await fs.copy("content", ".internal/.temp/11ty/content");
await fs.move(".internal/.temp/11ty/content/index.md", ".internal/.temp/11ty/index.md");