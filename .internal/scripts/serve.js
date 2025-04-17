// serve.js
import { execSync } from 'child_process';
import { exec } from 'child_process';

try {
    execSync('node .internal/scripts/build.js', { stdio: 'inherit' });
}
catch (err) {
    console.error('build failed:', err);
    process.exit(1);
}


const processes = [
    'npx sass code/scss:.internal/.temp/css',
    'npx eleventy --serve --input=.internal/.temp/11ty --output=_dist',
];

processes.forEach((cmd) => {
    const proc = exec(cmd);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
});