# Anas Mahmud — Portfolio Website

A dark, cinematic personal portfolio for a video editor. Built with plain HTML / CSS / JS — no frameworks, no build tools required.

---

## Quick Start

1. Open `index.html` in a browser **or** serve it locally:
   ```
   # Python (any modern version)
   python -m http.server 8080
   # then open http://localhost:8080
   ```
2. Customise the variables in `css/style.css` (see below).
3. Drop your real assets into `assets/images/` and `assets/videos/`.

---

## Folder Structure

```
anas-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/          ← drop your JPG/PNG/WebP here
│   └── videos/          ← drop your MP4 clips here
├── generate-placeholders.ps1   ← one-time placeholder generator
└── README.md
```

---

## Personalisation Checklist

### 1. Accent colour
In `css/style.css`, change `--accent` (default: `#C9A84C` warm gold):
```css
:root {
  --accent:   #C9A84C;   /* ← your colour here */
  --accent-d: #a8843a;   /* ← a slightly darker shade for hover */
}
```

### 2. Hero reel video
Replace `assets/videos/hero-reel.mp4` with your best reel clip.
- Recommended: ≤ 20 MB, H.264, 1920×1080.
- Also replace `assets/images/hero-poster.jpg` (shown before video loads).

### 3. Your photo
Replace `assets/images/anas-photo.jpg` with a 600×800 px (3:4 ratio) portrait.

### 4. Story project images
Replace the four story images with stills from each project:
| File | Project |
|------|---------|
| `story-01.jpg` | Commercial |
| `story-02.jpg` | Music Video |
| `story-03.jpg` | Short Film |
| `story-04.jpg` | Social |

Recommended size: **960 × 600 px** (16:10).

### 5. Gallery thumbnails & preview clips
| Image | Video | Project |
|-------|-------|---------|
| `thumb-01.jpg` | `preview-01.mp4` | Neon Nights |
| `thumb-02.jpg` | `preview-02.mp4` | Drift |
| `thumb-03.jpg` | `preview-03.mp4` | Ember |
| `thumb-04.jpg` | `preview-04.mp4` | Pulse |
| `thumb-05.jpg` | `preview-05.mp4` | Veil |
| `thumb-06.jpg` | `preview-06.mp4` | Solstice |

Preview clips are lazy-loaded (only download on hover) so the page stays fast.
Recommended clip length: **5–10 seconds**, muted, looping.

### 6. Project details
Edit project names, categories, and descriptions directly in `index.html`.
Search for `story-category`, `story-title`, and `story-desc` classes.

### 7. Bio & skills
In `index.html`, find the `#about` section and update:
- The `<p class="about-bio">` paragraphs with your real bio text.
- The `<ul>` inside `.skill-group` lists.
- The `.stat-num` numbers (years, projects, clients).

### 8. Social links
In `index.html`, find the `#contact` section and update the `href` values:
- `mailto:hello@anasmahmud.com`
- Instagram, Vimeo, YouTube, LinkedIn URLs

### 9. Contact form backend
The form currently simulates a send. To make it real, pick one option
and follow the comment in `js/main.js` near the `TODO`:

**Option A — Formspree (easiest, free tier):**
1. Sign up at https://formspree.io and create a form.
2. Replace the `await new Promise(...)` mock with:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Accept': 'application/json' },
  body: new FormData(form)
});
if (res.ok) { /* success */ }
```

**Option B — EmailJS (no server needed):**
Add the EmailJS SDK and call `emailjs.send(...)`.

**Option C — Netlify Forms:**
Add `netlify` attribute to `<form>` and deploy to Netlify.

---

## Performance Tips

- Use **WebP** images instead of JPEG where possible (smaller files, same quality).
- Keep the hero reel **≤ 15 MB** (trim it to 20–30 seconds max).
- Preview clips should be **≤ 3 MB** each (10 s @ 480p is fine for hover previews).
- Run images through **Squoosh** (https://squoosh.app) before uploading.

---

## Deployment

| Host | Cost | How |
|------|------|-----|
| **Netlify** | Free | Drag-and-drop the folder at app.netlify.com |
| **Vercel** | Free | `npx vercel` in the folder |
| **GitHub Pages** | Free | Push to a repo, enable Pages |
| **Shared hosting** | Varies | Upload via FTP/cPanel |

---

Built with ❤️ for **Anas Mahmud** — From concept to creation.
