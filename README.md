# 🚀 Alex Morgan — Portfolio

A fully custom, ultra-professional portfolio website built with **pure HTML, CSS, and vanilla JavaScript** — zero dependencies, zero frameworks.

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Entry point
├── README.md
│
├── css/
│   ├── style.css           ← Variables, reset, base, buttons, utilities
│   ├── animations.css      ← All @keyframes
│   ├── navbar.css          ← Navigation styles
│   ├── hero.css            ← Hero section + avatar
│   ├── sections.css        ← About · Skills · Projects · Contact · Footer
│   └── responsive.css      ← Breakpoints (mobile-first)
│
├── js/
│   ├── data.js             ← ✏️  Edit your skills & projects here
│   ├── render.js           ← Dynamically builds skill cards & project cards
│   ├── animations.js       ← IntersectionObserver, counters, parallax, navbar
│   ├── cursor.js           ← Custom magnetic cursor
│   └── form.js             ← Contact form validation & CV download
│
└── assets/
    └── Alex_Morgan_CV.pdf  ← ✏️  Drop your CV here
```

---

## ✏️ How to Customize

### 1. Personal Info
Open `index.html` and update:
- Your **name** in the `<h1>` and footer
- Your **role** and **description** in the Hero section
- **Contact details** (email, location, availability) in the Contact section
- **Social links** (GitHub, LinkedIn, etc.)

### 2. Skills & Projects
Open `js/data.js` — this is the only file you need to edit to change:
- Skill names, icons, and proficiency percentages
- Project titles, descriptions, tags, and links

### 3. CV Download
Drop your CV PDF into the `assets/` folder and rename it `Alex_Morgan_CV.pdf`
(or update the path in `js/form.js` → `initCVDownload()`)

### 4. Profile Photo
Replace the 👨‍💻 emoji in `index.html` (Hero + About sections) with an `<img>` tag:
```html
<img src="assets/photo.jpg" alt="Alex Morgan" style="width:100%;height:100%;object-fit:cover;border-radius:50%">
```

---

## 🚀 Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name`

---

## 🎨 Design Tokens

All colors and variables are in `css/style.css` under `:root`. Key ones:

| Variable        | Value       | Usage            |
|-----------------|-------------|------------------|
| `--accent`      | `#6c63ff`   | Primary purple   |
| `--accent2`     | `#00d4ff`   | Cyan highlight   |
| `--accent3`     | `#ff6584`   | Pink accent      |
| `--bg`          | `#050810`   | Page background  |
| `--text`        | `#e8eaf6`   | Primary text     |
| `--text-muted`  | `#8892b0`   | Secondary text   |

---

Built with ❤️ — no libraries, no CDN, just clean code.
# Portfolio
