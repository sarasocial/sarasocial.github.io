// build.js
import { execSync } from 'child_process';

try {
    execSync('node .internal/scripts/compile.js', { stdio: 'inherit' });
    execSync('npx sass code/scss:.internal/.temp/css', { stdio: 'inherit' });
}
catch (err) {
    console.error('build failed:', err);
    process.exit(1);
}

try {
    execSync('npx eleventy --input=.internal/.temp/11ty --output=_dist', { stdio: 'inherit' });
}
catch (err) {
    console.error('build failed:', err);
    process.exit(1);
}