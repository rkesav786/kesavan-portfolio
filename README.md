# Kesavan R — Developer Portfolio

React + Vite + Tailwind CSS 3 + Framer Motion + GSAP (ScrollTrigger) + Lucide icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Make it yours (all in two places)

| What | Where |
| --- | --- |
| All text, skills, experience, projects, links | `src/data/portfolio.js` |
| Profile photo | replace `public/profile.jpg` (square, 640×640 works well) |
| Resume download | replace `public/Kesavan_R_Resume.pdf` and keep `profile.resume` in `src/data/portfolio.js` pointed at it |
| Project demo / GitHub links | `demo` and `repo` fields in `src/data/portfolio.js` (empty `demo` shows "Demo coming soon") |

## Contact form

By default, submitting opens the visitor's email app with the message pre-filled (no backend needed).
To send messages straight to your inbox, create a free form at https://formspree.io and set:

```bash
cp .env.example .env
# VITE_FORMSPREE_ID=your_form_id
```

## Where the animation lives

- **GSAP**: hero intro timeline (`Hero.jsx`), skill grid stagger on every tab change (`Skills.jsx`), timeline line draw + card reveals via ScrollTrigger (`Experience.jsx`).
- **Framer Motion**: navbar active pill, mobile drawer, skill tab indicator, card hover lift, floating hero badges, project expand/collapse, form error messages.
- `prefers-reduced-motion` is respected throughout.

## Icons

Brand logos load from the Devicon CDN (pinned to v2.16.0). If one fails to load, a letter monogram is shown instead.
Dark logos (Next.js, Express, GitHub, Vercel, AWS) are recoloured with the `tone` option in the data file.

## Deploy

Works on Vercel, Netlify or GitHub Pages as a static Vite build (`dist/`).
