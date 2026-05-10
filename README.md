Done in collaboration with [@lindsaylee](https://github.com/lindsaylee) on an AI Test Kitchen series. Exploring tips, tricks and ways to get started using AI for designers.

![Test Kitchen](docs/Test%20Kitchen%205_7_26_%20Jordan%20Wright%20-%20Curiosity%20%26%20Experimentation-1.png)

![Test Kitchen](docs/Test%20Kitchen%205_7_26_%20Jordan%20Wright%20-%20Curiosity%20%26%20Experimentation-2.png)

A presentation about experimentation, curiosity, and the unexpected paths that lead us somewhere new.

Built as a custom React + Vite slide deck.

---

## The Story

### Two Worlds

![Slide 1](docs/screenshots/slide-1.png)

My degree was in drawing, painting, and representational art. I didn't own a computer until I was twenty-five.

---

### The Thing That Bugged Me

![Slide 2](docs/screenshots/slide-2.png)

The original iPhone came out. I hated every single sound it made. Then I discovered my iPhone needed to be "jailbroken." I bought the phone, why is it in jail? That kicked me off trying to get root access just to swap one MP3 file.

---

### Down the Rabbit Hole

![Slide 3](docs/screenshots/slide-3.png)

So here I am, phone tethered to the iMac, SSHing into root. Trying to figure out what SSH even is, what the numbers on the other side of the @ mean, how to get to where I can swap out one file. I spent days trying different angles until I finally got through.

---

### Forget About Work. Just Play.

![Slide 4](docs/screenshots/slide-4.png)

The text tone itself was insignificant compared to the journey of exploration it opened up. Find that spark. Something that makes you curious, delights you, or feels like it needs to be fixed. And run with it. Don't worry about knowing how. Just explore and create.

---

### The Experiment

![Slide 5](docs/screenshots/slide-5.png)

A recent experiment for me was fine-tuning an image model on Replicate. You teach an existing model to recognize a new visual concept, like an art style, by feeding training photos through a lightweight adapter called a LoRA. Out come images that blend what the model already knows with what you just taught it.

---

### The Results

![Slide 6](docs/screenshots/slide-6.png)

10 training images of Blade Runner 2049-style concept art, a creative prompt, and the model spit out entirely new compositions in that same style. Moody neon cityscapes, silhouetted figures, cinematic light. The whole thing ran on Replicate's infrastructure. No GPUs to configure, no ML expertise required.

---

### Go Build Something

![Slide 7](docs/screenshots/slide-7.png)

I created a Python CLI app where anyone can pull it down, give it training images, and generate a fine-tune. Least friction possible, so people can find their own spark.

---

### The Model: Android Dream v4

**[View on Replicate](https://replicate.com/interfaceconjurer/android-dream-v4)** · **[Source Code](https://github.com/interfaceconjurer/fine-tunes)**

A custom Flux LoRA trained on painterly illustrated poster art inspired by Blade Runner 2049. The style features atmospheric cyberpunk cityscapes with dramatic scale: tiny silhouetted figures dwarfed by massive holographic projections and towering brutalist architecture. Bold warm-vs-cool color palettes (orange and red ground planes against blue-teal structures), heavy atmospheric perspective, soft diffused edges, and moody god rays cutting through fog.

![Android Dream v4 Cover](https://raw.githubusercontent.com/interfaceconjurer/fine-tunes/main/docs/android-dream-v4-cover.webp)

| Property        | Value              |
| --------------- | ------------------ |
| Trigger Word    | `BLADED`           |
| Training Steps  | 2000               |
| Training Images | 7 captioned images |
| Cost            | ~$1.50             |
| Training Time   | ~20 minutes        |

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
