const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// The RZ favicon SVG content
const svgContent = `<svg width="512" height="512" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#0D1117"/>
  <rect x="1" y="1" width="30" height="30" rx="7" stroke="url(#neon-grad)" stroke-width="1.5" stroke-opacity="0.85"/>
  <path d="M 6.5 11.5 L 3.5 16 L 6.5 20.5" stroke="#00D4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="15" y="19.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="10" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.5px">RZ</text>
  <path d="M 22.5 20.5 L 25 11.5" stroke="#00FF88" stroke-width="2" stroke-linecap="round"/>
  <path d="M 26 11.5 L 29 16 L 26 20.5" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="neon-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00FF88"/>
      <stop offset="50%" stop-color="#00D4FF"/>
      <stop offset="100%" stop-color="#B44AFF"/>
    </linearGradient>
  </defs>
</svg>`;

const svgBuffer = Buffer.from(svgContent);
const publicDir = path.join(process.cwd(), 'public');
const appDir = path.join(process.cwd(), 'app');

async function generate() {
  // 32x32 — favicon.ico equivalent
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32.png'));

  // 192x192 — Android Chrome / Google Search favicon
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'favicon-192.png'));

  // 512x512 — PWA / high-res
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'favicon-512.png'));

  // app/icon.png — Next.js App Router favicon (used by browsers in tab)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // app/apple-icon.png — iOS home screen
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  console.log('All favicon PNGs generated successfully!');
}

generate().catch(console.error);
