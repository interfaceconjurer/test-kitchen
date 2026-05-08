This work was done in collaboration with [@lindsaylee](https://github.com/lindsaylee) on an AI Test Kitchen series. Exploring tips and tricks and ways to get started using AI for designers.

![Test Kitchen](docs/Test%20Kitchen%205_7_26_%20Jordan%20Wright%20-%20Curiosity%20%26%20Experimentation-1.png)

![Test Kitchen](docs/Test%20Kitchen%205_7_26_%20Jordan%20Wright%20-%20Curiosity%20%26%20Experimentation-2.png)

A presentation about experimentation, curiosity, and the unexpected paths that lead us somewhere new.

Built as a custom React + Vite slide deck.

---

## The Story

### Two Worlds

![Slide 1](docs/screenshots/slide-1.png)

At this point in my career, I've worked as both a designer and a developer professionally — hired at different places under different disciplines, always doing both roles interchangeably. But if we rewind to college, I had zero technical understanding. My full background and degree was in drawing, painting, and representational art. I didn't touch a computer growing up. I never had one, and I didn't buy my own until I was twenty-five. In college I had to take a couple of introductory graphic design classes where I was exposed to the computer for the first time — started creating vector illustrations and experimenting. Around twenty-five I got my own machine to see what I could do with it. But before that, zero technical ability.

---

### The Thing That Bugged Me

![Slide 2](docs/screenshots/slide-2.png)

I'd started testing the bounds of this new computer thing and what I could do with it, and about a year later the original iPhone came out. I hated every single sound it made. I'd had previous phones where I really liked some of the sound effects, and I wanted to put those on this new device. I thought — I can easily change those files on my computer, how hard could it be to change them on the phone? Then I discovered my iPhone needed to be "jailbroken." I was confused — I bought the phone. Why is it in jail? That kicked me off on the journey of trying to get root access to this device so I could simply change one MP3 file. How difficult could this actually be?

---

### Down the Rabbit Hole

![Slide 3](docs/screenshots/slide-3.png)

So here I am trying to crack this phone. I've got it tethered to the iMac. I'm SSHing into the root of the phone — trying to figure out what the hell SSH even is, what the numbers on the other side of the @ mean, how to get to the root level where I can simply swap out one file. But in the midst of all that, I was mystified with how the technology actually worked. It was a super intriguing puzzle. I spent days doing this — investigating, researching, trying different angles — until I finally got through to the other side. People around me at the time thought I was crazy, wasting my time. On the surface it could have looked like that. But in actuality, the thread I was pulling on was the spark that led to me being hired professionally as a developer later in life.

---

### Forget About Work. Just Play.

![Slide 4](docs/screenshots/slide-4.png)

That text tone was my first step into a career I didn't know existed yet. So what I want to implore you to do is forget about work for a minute. Find a spark. Find something that bugs you, or delights you, or just makes you curious — and run with it. Don't worry about knowing how. Just play.

---

### The Experiment

![Slide 5](docs/screenshots/slide-5.png)

To practice what I preach, I fine-tuned an image model. Fine-tuning means teaching an existing AI model to recognize a new visual concept — an art style, a face, a product — so it can generate new images featuring that concept on demand. You feed training photos into a base model (FLUX) through a lightweight adapter called a LoRA, and out come images that blend what the model already knows with what you just taught it.

---

### The Results

![Slide 6](docs/screenshots/slide-6.png)

Four training images of Blade Runner 2049-style painterly cyberpunk art went in. A creative prompt and the model spit out entirely new compositions in that same style — moody neon cityscapes, silhouetted figures, cinematic light. The whole thing ran on Replicate's infrastructure. No GPUs to configure, no ML expertise required.

---

### Go Build Something

![Slide 7](docs/screenshots/slide-7.png)

The tool I built to do all this is called Fine Tunes — a Python CLI wrapper around Replicate's Flux LoRA fine-tuning API. It's open source. But the point isn't the tool. The point is that none of this would have happened if I hadn't spent five days changing a text tone fifteen years ago. Every big thing starts with one small, slightly obsessive step.

---

### The Model: Android Dream v4

**[View on Replicate](https://replicate.com/interfaceconjurer/android-dream-v4)** · **[Source Code](https://github.com/interfaceconjurer/fine-tunes)**

A custom Flux LoRA trained on painterly illustrated poster art inspired by Blade Runner 2049. The style features atmospheric cyberpunk cityscapes with dramatic scale — tiny silhouetted figures dwarfed by massive holographic projections and towering brutalist architecture. Bold warm-vs-cool color palettes (orange and red ground planes against blue-teal structures), heavy atmospheric perspective, soft diffused edges, and moody god rays cutting through fog.

| Property | Value |
|----------|-------|
| Trigger Word | `BLADED` |
| Training Steps | 2000 |
| Training Images | 7 captioned images |
| Cost | ~$1.50 |
| Training Time | ~20 minutes |

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/gallery-1.png" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/gallery-2.png" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/gallery-3.png" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/gallery-4.png" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/gallery-5.png" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/gallery-6.png" width="100%"></td>
  </tr>
</table>

---

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Click right side to advance, left to go back. Arrow keys and spacebar work too.

Use `?slide=N` to jump directly to a slide (1-7).
