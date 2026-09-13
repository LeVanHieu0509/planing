#!/usr/bin/env node
/**
 * Build VSIX manually (zip format)
 * Dùng khi vsce không tương thích Node version
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const VSIX = path.join(ROOT, 'viet-translate-1.0.0.vsix');
const TMP = path.join(ROOT, '.vsix-build');

// Clean up
if (fs.existsSync(TMP)) execSync(`rm -rf "${TMP}"`);
fs.mkdirSync(TMP, { recursive: true });
fs.mkdirSync(path.join(TMP, 'extension'), { recursive: true });

// Files to include
const includes = [
  { src: 'package.json', dest: 'extension/package.json' },
  { src: 'README.md', dest: 'extension/README.md' },
  { src: 'images/icon.png', dest: 'extension/images/icon.png' },
];

// Include all compiled JS files from out/
function addDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(path.join(TMP, destDir), { recursive: true });
  const items = fs.readdirSync(srcDir);
  for (const item of items) {
    const srcPath = path.join(srcDir, item);
    const destPath = destDir + '/' + item;
    if (fs.statSync(srcPath).isDirectory()) {
      addDir(srcPath, destPath);
    } else {
      includes.push({ src: srcPath, dest: destPath, abs: true });
    }
  }
}

addDir(path.join(ROOT, 'out'), 'extension/out');

// Copy files to temp
for (const file of includes) {
  const src = file.abs ? file.src : path.join(ROOT, file.src);
  const dest = path.join(TMP, file.dest);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✅ ${file.dest}`);
  } else {
    console.warn(`  ⚠️  SKIP (not found): ${src}`);
  }
}

// Create [Content_Types].xml (required for VSIX)
const contentTypes = `<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension=".json" ContentType="application/json"/>
  <Default Extension=".js" ContentType="application/javascript"/>
  <Default Extension=".md" ContentType="text/x-markdown"/>
  <Default Extension=".png" ContentType="image/png"/>
  <Default Extension=".map" ContentType="application/json"/>
  <Override PartName="/extension.vsixmanifest" ContentType="text/xml"/>
</Types>`;

fs.writeFileSync(path.join(TMP, '[Content_Types].xml'), contentTypes);

// Read package.json to build manifest
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));

// Create extension.vsixmanifest
const manifest = `<?xml version="1.0" encoding="utf-8"?>
<PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011" xmlns:d="http://schemas.microsoft.com/developer/vsx-schema-design/2011">
  <Metadata>
    <Identity Language="en-US" Id="${pkg.name}" Version="${pkg.version}" Publisher="${pkg.publisher}"/>
    <DisplayName>${pkg.displayName}</DisplayName>
    <Description xml:space="preserve">${pkg.description}</Description>
    <Tags>${(pkg.keywords || []).join(',')}</Tags>
    <Categories>${(pkg.categories || ['Other']).join(',')}</Categories>
    <GalleryFlags>Public</GalleryFlags>
    <Assets>
      <Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true"/>
      <Asset Type="Microsoft.VisualStudio.Services.Icons.Default" Path="extension/images/icon.png" Addressable="true"/>
      <Asset Type="Microsoft.VisualStudio.Services.Content.Details" Path="extension/README.md" Addressable="true"/>
    </Assets>
  </Metadata>
  <Installation>
    <InstallationTarget Id="Microsoft.VisualStudio.Code"/>
  </Installation>
  <Dependencies/>
  <Assets>
    <Asset Type="Microsoft.VisualStudio.Code.Manifest" d:Source="File" Path="extension/package.json" Addressable="true"/>
    <Asset Type="Microsoft.VisualStudio.Services.Icons.Default" d:Source="File" Path="extension/images/icon.png" Addressable="true"/>
    <Asset Type="Microsoft.VisualStudio.Services.Content.Details" d:Source="File" Path="extension/README.md" Addressable="true"/>
  </Assets>
</PackageManifest>`;

fs.writeFileSync(path.join(TMP, 'extension.vsixmanifest'), manifest);

// Zip everything into .vsix
if (fs.existsSync(VSIX)) fs.unlinkSync(VSIX);

try {
  execSync(`cd "${TMP}" && zip -r "${VSIX}" . -x "*.DS_Store"`, { stdio: 'inherit' });
  console.log(`\n🎉 VSIX created: ${VSIX}`);
  const size = (fs.statSync(VSIX).size / 1024).toFixed(1);
  console.log(`📦 Size: ${size} KB`);
} catch (e) {
  console.error('❌ zip failed:', e.message);
}

// Clean up temp
execSync(`rm -rf "${TMP}"`);
console.log('\n✅ Build complete!');
