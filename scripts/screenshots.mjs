import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { mkdir } from 'fs/promises';
import path from 'path';

const SLIDES = 7;
const PORT = 5174;
const OUTPUT_DIR = path.resolve('docs/screenshots');

const WAIT_MS = [
  2000, // Slide 1: images + divider
  5500, // Slide 2: iPhone pop (1s) + tone emerge (1.4s delay + 0.5s) + strike/sad (3.5s + 0.3s)
  4000, // Slide 3: terminal lines (7 * 0.4s delay) + typing
  3000, // Slide 4: word reveal (1.2s delay + 0.6s) + sparkles
  2500, // Slide 5: diagram columns pop in (0.6s delay + 0.5s) + curved arrow
  2500, // Slide 6: funnel images (0.5 + 4*0.1 delay) + fade
  2000, // Slide 7: logo/title appear
];

async function run() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const vite = spawn('npx', ['vite', '--port', String(PORT)], {
    cwd: path.resolve('.'),
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  await new Promise((resolve) => {
    vite.stdout.on('data', (data) => {
      if (data.toString().includes('Local:')) resolve();
    });
  });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  for (let i = 0; i < SLIDES; i++) {
    await page.goto(`http://localhost:${PORT}/?slide=${i + 1}`);
    await page.waitForTimeout(WAIT_MS[i]);
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `slide-${i + 1}.png`),
      fullPage: false,
    });
    console.log(`Captured slide ${i + 1}`);
  }

  await browser.close();
  vite.kill();
  console.log('Done — screenshots saved to docs/screenshots/');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
