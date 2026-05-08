# AI Test Kitchen

A presentation about experimentation, curiosity, and the unexpected paths that lead us somewhere new.

Built as a custom React + Vite slide deck.

---

## The Story

### Slide 1 — Two Worlds

![Slide 1](docs/screenshots/slide-1.png)

I have a degree in drawing, painting, and illustration. I didn't touch a computer until I was twenty-five. These two halves — the analog creative and the digital unknown — weren't separate chapters. They were running in parallel the whole time, even when I didn't know it yet.

---

### Slide 2 — The Thing That Bugged Me

![Slide 2](docs/screenshots/slide-2.png)

The original iPhone shipped with six text tones. Six. Tri-Tone, Glass, Horn, Bell, Electronic, Anticipation — and I hated every single one. I'd just come from a Sony Ericsson with a tone I loved, and Apple's locked-down ecosystem told me "no, you get what we give you." That friction was the spark.

---

### Slide 3 — Down the Rabbit Hole

![Slide 3](docs/screenshots/slide-3.png)

So I jailbroke the phone. Tethered it to my laptop, SSH'd in as root (password: `alpine`, if you know you know), navigated deep into `/System/Library/Audio/UISounds/`, and swapped a `.caf` file. It took me five days. Friends thought I was insane — "just buy a different phone." But from one angle what looked like a waste of time was actually the first time I'd ever felt the rush of making a computer do exactly what I wanted.

---

### Slide 4 — Forget About Work. Just Play.

![Slide 4](docs/screenshots/slide-4.png)

That text tone was my first step into a career I didn't know existed yet. So what I want to implore you to do is forget about work for a minute. Find a spark. Find something that bugs you, or delights you, or just makes you curious — and run with it. Don't worry about knowing how. Just play.

---

### Slide 5 — The Experiment

![Slide 5](docs/screenshots/slide-5.png)

To practice what I preach, I fine-tuned an image model. Fine-tuning means teaching an existing AI model to recognize a new visual concept — an art style, a face, a product — so it can generate new images featuring that concept on demand. You feed training photos into a base model (FLUX) through a lightweight adapter called a LoRA, and out come images that blend what the model already knows with what you just taught it.

---

### Slide 6 — The Results

![Slide 6](docs/screenshots/slide-6.png)

Four training images of Blade Runner 2049-style painterly cyberpunk art went in. A creative prompt and the model spit out entirely new compositions in that same style — moody neon cityscapes, silhouetted figures, cinematic light. The whole thing ran on Replicate's infrastructure. No GPUs to configure, no ML expertise required.

---

### Slide 7 — Go Build Something

![Slide 7](docs/screenshots/slide-7.png)

The tool I built to do all this is called Fine Tunes — a Python CLI wrapper around Replicate's Flux LoRA fine-tuning API. It's open source. But the point isn't the tool. The point is that none of this would have happened if I hadn't spent five days changing a text tone fifteen years ago. Every big thing starts with one small, slightly obsessive step.

---

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Click right side to advance, left to go back. Arrow keys and spacebar work too.

Use `?slide=N` to jump directly to a slide (1-7).
