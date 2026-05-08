# AI Test Kitchen — Slide Deck

## What This Is

A custom React + Vite slide deck for Jordan's "AI Test Kitchen" presentation on experimentation and curiosity. Click anywhere on the right 70% to advance, left 30% to go back. Arrow keys and spacebar also work. Progress dots at the bottom.

## Dev Server

```bash
npm run dev
# Runs at http://localhost:5173
# Use ?slide=N to jump to a specific slide (1-7)
```

## Project Structure

```
src/
├── App.jsx          # Slide deck shell — handles navigation, animations
├── App.css          # Slide transition animations (enter/exit left/right)
├── index.css        # Global reset
├── slides/
│   ├── Slide1.jsx + Slide1.css   # Art vs Tech split
│   ├── Slide2.jsx + Slide2.css   # iPhone text tone frustration
│   ├── Slide3.jsx + Slide3.css   # Terminal SSH jailbreak
│   ├── Slide4.jsx + Slide4.css   # "Forget about work. Just play."
│   ├── Slide5.jsx + Slide5.css   # Fine-tuning diagram
│   ├── Slide6.jsx + Slide6.css   # Results (training + generated images)
│   └── Slide7.jsx + Slide7.css   # Fine Tunes logo / CTA
└── assets/slides/
    ├── paintbrushes.png
    ├── imac.png
    ├── og-iphone.png
    ├── claude-icon.svg
    ├── treining-images/    # Training data for the fine-tune
    └── results/            # Generated gallery images
scripts/
└── screenshots.mjs    # Playwright — captures all slides for README
docs/
└── screenshots/       # Output PNGs from the script
```

## Screenshot Tooling

`node scripts/screenshots.mjs` spins up Vite on port 5174, navigates each slide with `?slide=N`, waits for CSS animations to finish, and saves PNGs to `docs/screenshots/`. Per-slide viewport sizes:
- Slides 2 & 3: 1600x900 (tall content needs extra room)
- All others: 1280x720

## Slide Animations

All CSS animations are scoped under `.active` — the parent class applied by App.jsx when a slide is in view. Animations reset when the slide leaves view (elements return to opacity: 0 / no animation state). Transition between slides is 500ms.

## Figma File

https://www.figma.com/design/FfLDR8EYPFfpEwZhP2ZBwd/Test-Kitchen

Page "AI Test Kitchen Slides" contains captured frames of each slide. Jordan iterates on slide designs in Figma and pulls them back into React.

## Slide Content Plan

See `PLAN.md` for the full narrative breakdown.

### Slide 1 — Opening / Hook
Art background (painting/illustration degree) vs tech world (no computer until 25). Visual: paintbrushes photo vs iMac photo with angled divider.

### Slide 2 — iPhone Text Tone Frustration
Original iPhone (2007) had only 6 text tones: Tri-Tone, Glass, Horn, Bell, Electronic, Anticipation. Visual: iPhone centered with tone icons radiating outward, each with a sad/rejection icon. Uses lucide-react icons arranged in a radial layout.

### Slide 3 — The Rabbit Hole (SSH Jailbreak)
Days spent jailbreaking to change a text tone. Visual: Green-on-black terminal with authentic SSH commands (`ssh root@192.168.1.147`, password `alpine`, navigating to `/System/Library/Audio/UISounds/sms-received*.caf`). SVG tether cable with animated data flow to an iPhone.

### Slide 4 — "Forget about work. Just play."
The pivot slide. Big bold text with word-by-word reveal animation (pause before "Just play."). "play" in Claude terracotta (#D97757). Claude sunburst mark with pulse animation. Floating sparkles. Warm dark background (#1A1614).

### Slide 5 — Fine-Tuning Diagram
Three-column left-to-right flow: Training Photos → FLUX (Base Model) with LoRA badge → Generated Images. Curved dashed arrow shows the feedback loop. Dark slate background (#0F172A).

### Slide 6 — The Results
Side-by-side layout: Training Data (4 images) + Creative Prompt = Resulting Images from Fine Tune (4 images). Images imported from `assets/slides/treining-images/` and `assets/slides/results/`.

### Slide 7 — Fine Tunes CTA
Fine Tunes ASCII art logo (loaded from GitHub raw SVG), tagline, and GitHub icon. Black background.

## Design System Notes

- **Icon library**: lucide-react
- **Color progression**: Slides move from neutral/cool (1) → dark+teal/coral (2) → black+green (3) → warm dark+terracotta (4) → dark slate+blue/amber/violet (5) → dark slate+vibrant art (6) → black (7)
- **Typography**: Inter for headings, JetBrains Mono for code/labels
- **Dark backgrounds** on all slides except Slide 1

## GitHub

Private repo: https://github.com/interfaceconjurer/test-kitchen
