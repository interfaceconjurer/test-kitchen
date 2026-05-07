# AI Test Kitchen — Presentation Plan

**Forum:** AI Test Kitchen
**Theme:** Experimentation & Curiosity
**Core message:** Approaching a new skill is overwhelming, but you just have to focus on one step at a time.

---

## Slide 1 — Opening / Hook

This slide will be about my background. how I started out. I have a degree in drawing and painting, illustration, and representational art. I didn't have a computer until I was twenty-five. Towards the end of my college career, I started to get into more computer classes, just tinkering around with it. But at the age of twenty-five I had almost zero technical background.

## Slide 2 — The Backstory (iPhone text tone)

Around twenty-six years old, I got an iPhone. The iPhone had three text tones on it, and I hated all three of them. I really liked the tone my Sony Ericsson had on it, and I wanted to make that the sound for my phone. That took me down a path of having to jailbreak my phone, tether to it, and connect with a terminal, running scripts, and essentially took me down the path of tinkering with this device for several days just to change a single MP3 file.

## Slide 3 — The Rabbit Hole (jailbreaking, days of tinkering)

On the surface, it probably looked like I was wasting a lot of time. I remember friends didn't understand why I was obsessed with trying to change the text tone on a file. They were like you've spent five days messing with this thing, you could have just bought another phone that you liked the tone of. But what from one angle looked like a waste of time was actually nurturing the spark that would lead to me being able to be hired professionally as a developer. That text tone was my first step.

## Slide 4 — Reframe ("wasting time" vs. building the spark)

So what I want to implore you to do is forget about work for a minute and just play with the technology. Find an interest, find a spark for your curiosity, and just run with it. Don't worry about knowing how to do any of it. Just talk to Claude about it. So now I want to take you through a project that I did with claude. Without knowing really anything about the content.

## Slide 5 — My Experiment

So I created a Python script that would fine-tune an image model on Replicate.

**What is fine-tuning?**
Fine-tuning means teaching an existing AI image model to recognize a new concept — your face, your product, your art style — so it can generate new images featuring that concept on demand. You're not building a model from scratch; you're customizing one that already understands how images work.

**How the small model sits on top of the big one:**
Think of FLUX (the base model) as a massive, general-purpose artist that knows how to draw anything. A LoRA (Low-Rank Adaptation) is a tiny set of adjustment weights — like a small instruction sheet you clip onto that artist saying "here's what my subject looks like." The base model stays unchanged; the LoRA just nudges its output in your direction. It's lightweight (megabytes, not gigabytes) and fast to train.

## Slide 6 — The Lesson (one step at a time)

## Slide 7 — Closing / Call to Action

---

## Notes

- **The workflow:**

1. Gather 10–20 diverse photos of your subject or style.
2. Upload them to Replicate (via web UI or API — no ML expertise required).
3. Pick a trigger word (e.g., "TOK") that activates your concept in prompts.
4. Replicate trains your LoRA on their GPUs. Takes roughly 2–20 minutes, costs under $2.
5. You now have a trained model. Write a prompt including your trigger word, and the system generates new images of your subject in any scene you describe.

**Why it's accessible:**
Replicate handles all the infrastructure — GPUs, model hosting, scaling. You never touch hardware configuration. It turns what used to require an ML engineering team into something anyone can do with a zip file of photos and a credit card.
