// compose: assembles the folder from which 11ty builds
// the actual site

// imports
import fs from "fs-extra";
import path from "path";

// prepare base directory
await fs.remove("_dist");
await fs.remove("_resources/css");