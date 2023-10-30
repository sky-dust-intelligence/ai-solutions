const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function isValidNpmPackageName(name) {
  // A simple regex to validate package names
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    name
  );
}

function readFilesRecursively(dir, fileCallback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      readFilesRecursively(filePath, fileCallback);
    } else if (filePath.endsWith('.js')) {
      fileCallback(filePath);
    }
  });
}

const yarnOutput = execSync('yarn install', { encoding: 'utf8' });
const missingDeps = yarnOutput
  .split('\n')
  .filter((line) => line.startsWith('➤ YN0002'))
  .map((line) => line.split(' ')[6])
  .filter(Boolean)
  .filter(isValidNpmPackageName);

const requiredDeps = [];
readFilesRecursively('.', (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const requires = fileContent.match(/require\(['"]([^'"]+)['"]\)/g);
  if (requires) {
    requires.forEach((req) => {
      const dep = req.match(/['"]([^'"]+)['"]/)[1];
      if (isValidNpmPackageName(dep) && !requiredDeps.includes(dep)) {
        requiredDeps.push(dep);
      }
    });
  }
});

const allDeps = Array.from(new Set([...missingDeps, ...requiredDeps]));
allDeps.forEach((dep) => {
  try {
    execSync(`yarn add ${dep}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to install ${dep}: ${error}`);
  }
});
