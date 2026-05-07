# AI Test Kitchen — Slide Deck

## What This Is

A custom React + Vite slide deck for Jordan's "AI Test Kitchen" presentation on experimentation and curiosity. Click anywhere on the right 70% to advance, left 30% to go back. Arrow keys and spacebar also work. Progress dots at the bottom.

## Dev Server

```bash
npm run dev
# Runs at http://localhost:5173
# Use ?slide=N to jump to a specific slide (1-6)
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
│   └── Slide6.jsx + Slide6.css   # Results gallery
└── assets/slides/
    ├── paintbrushes.png    # Photo of paintbrushes on colorful palette
    └── imac.png            # Photo of white iMac with keyboard
```

## Slide Animations

All CSS animations are scoped under `.active` — the parent class applied by App.jsx when a slide is in view. Animations reset when the slide leaves view (elements return to opacity: 0 / no animation state).

## Figma File

https://www.figma.com/design/FfLDR8EYPFfpEwZhP2ZBwd/Test-Kitchen

Page "AI Test Kitchen Slides" contains captured frames of each slide. Jordan has been iterating on slide designs in Figma and pulling them back into React.

**Slide 1 was redesigned in Figma** (node 2:2) — the React component needs to be updated to match. The Figma design shows:
- Gray background (#d9d9d9)
- iMac photo on the right ~72% of frame width, full height, positioned at x=565 in a 1553px frame
- Gray solid rectangle behind the paintbrushes (x=-60, width=1058.5)
- Paintbrushes photo very large (width=1753 in 1553px frame), positioned at x=-657 so only the right portion is visible — the visible crop shows brushes laid diagonally across a colorful watercolor palette
- A dark gray (#757575) angled divider bar (rotated -22°, ~20px wide) at x=991 separating the two images
- Layer order bottom-to-top: iMac → gray rect → paintbrushes → divider

The images overlap — the paintbrushes cover the left ~65% and the iMac peeks out on the right ~35%, with the angled bar as the visual separator.

## Slide Content Plan

See `PLAN.md` for the full narrative breakdown.

### Slide 1 — Opening / Hook
Art background (painting/illustration degree) vs tech world (no computer until 25). Visual: paintbrushes photo vs iMac photo with angled divider.

### Slide 2 — iPhone Text Tone Frustration
Original iPhone (2007) had only 6 text tones: Tri-Tone, Glass, Horn, Bell, Electronic, Anticipation. Visual: iPhone centered with tone icons radiating outward, each with a sad/rejection icon. Uses lucide-react icons arranged in a radial layout.

### Slide 3 — The Rabbit Hole (SSH Jailbreak)
Days spent jailbreaking to change a text tone. Visual: Green-on-black terminal with authentic SSH commands (`ssh root@192.168.1.147`, password `alpine`, navigating to `/System/Library/Audio/UISounds/sms-received*.caf`). SVG tether cable with animated data flow to an iPhone.

### Slide 4 — "Forget about work. Just play."
The pivot slide. Big bold text with word-by-word reveal animation (pause before "Just play."). "play" in Claude terracotta (#D97757) with -2deg rotation. Claude sunburst mark bottom-right with pulse animation. Floating sparkles. Warm dark background (#1A1614).

### Slide 5 — Fine-Tuning Diagram
Introduces the experiment. Three-column left-to-right flow diagram:
- LEFT: Training photos grid + "BLADED" trigger word pill (green/amber)
- CENTER: Large FLUX box with Brain icon + LoRA badge (blue/amber)
- RIGHT: Generated output frames with Sparkles (violet)
Dark slate background (#0F172A).

### Slide 6 — The Results
3×2 grid of gallery images from https://github.com/interfaceconjurer/fine-tunes (android-dream-v4 model — Blade Runner 2049-style painterly cyberpunk art). Stats: "7 training images · $1.50 · 20 minutes". Images pulled from GitHub raw URLs.

## Design System Notes

- **Icon library**: lucide-react
- **Color progression**: Slides move from neutral/cool (1) → dark+teal/coral (2) → black+green (3) → warm dark+terracotta (4) → dark slate+blue/amber/violet (5) → dark slate+vibrant art (6)
- **Typography**: Inter for headings, JetBrains Mono for code/labels
- **Dark backgrounds** on all slides except Slide 1

## GitHub

Private repo: https://github.com/interfaceconjurer/test-kitchen
