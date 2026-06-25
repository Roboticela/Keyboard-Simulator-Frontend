/**
 * Generate web app icons from a source SVG for Next.js.
 * Outputs to public/: favicon.ico, favicon-32x32.png, apple-touch-icon.png
 * Usage: node scripts/icons-generate.js [input-path]
 * Default input: public/favicon.svg
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const defaultInput = path.join(root, "public", "favicon.svg");
const inputPath = process.argv[2]
  ? path.isAbsolute(process.argv[2])
    ? process.argv[2]
    : path.join(root, process.argv[2])
  : defaultInput;

const publicDir = path.join(root, "public");

if (!fs.existsSync(inputPath)) {
  console.error(`Input not found: ${inputPath}`);
  process.exit(1);
}

async function main() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error("Missing dependency. Run: npm install --save-dev sharp");
    process.exit(1);
  }

  console.log(`Generating icons from: ${inputPath}\n`);

  const sizes = [
    { size: 16, name: "favicon-16x16.png" },
    { size: 32, name: "favicon-32x32.png" },
    { size: 128, name: "apple-touch-icon.png" },
  ];

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const buffers = {};
  const density = 300;

  for (const { size, name } of sizes) {
    const outPath = path.join(publicDir, name);
    await sharp(inputPath, { density })
      .resize(size, size)
      .png()
      .toFile(outPath);
    buffers[size] = fs.readFileSync(outPath);
    console.log(`   ${name} (${size}×${size})`);
  }

  // favicon.ico (multi-size) using to-ico if available
  try {
    const toIco = require("to-ico");
    const icoBuffer = await toIco([buffers[16], buffers[32]]);
    fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
    console.log("   favicon.ico (16×16, 32×32)");
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND") throw e;
    console.log("   (Skip favicon.ico; install to-ico for .ico: npm install --save-dev to-ico)");
  }

  console.log("\n✅ Web icons generated in public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
