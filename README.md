# Elijah Dmytrenko Portfolio

A modern portfolio website built with [Next.js](https://nextjs.org/), React, TypeScript, and Tailwind CSS. This site showcases projects, experience, and personal information in a clean, responsive design.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🗂️ Project Structure

```
portfolio/
├── public/                # Static assets (images, SVGs, logos)
│   └── images/logos/      # Logos
├── src/
│   ├── app/               # Next.js app directory (routing, pages, layout)
│   │   ├── about/         # About page and MyStory component
│   │   ├── hobbies/       # Hobbies page
│   │   ├── projects/      # Projects list and dynamic project pages
│   │   ├── layout.tsx     # Root layout (fonts, global styles)
│   │   ├── globals.css    # Global styles (Tailwind)
│   ├── components/        # Shared UI components (Navbar, Footer)
│   ├── data/
│   │   └── projects/      # Project data as JSON files
│   ├── lib/               # Utility functions (project data loader)
├── package.json           # Project metadata and scripts
├── README.md              # This file
└── ...
```

---

## 🧩 How It Works

### Routing & Pages
- **Home:** `/` — Introduction and links to About/Projects.
- **About:** `/about` — Bio, experience, education, and "My Story".
- **Projects:** `/projects` — List of all projects (from JSON data).
- **Project Details:** `/projects/[slug]` — Dynamic page for each project.
- **Hobbies:** `/hobbies` — Personal interests and hobbies.

### Data-Driven Projects
- All project data is stored as individual JSON files in `src/data/projects/`.
- Each file must follow the required schema (see example below).
- Projects are loaded and rendered dynamically; add a new file and it appears automatically.

### Components
- **Navbar:** Fixed header with navigation and a "Contact" popup (business card style).
- **Footer:** Social links and copyright.
- **MyStory:** Personal story component on the About page.

### Theming & Styling
- Uses Tailwind CSS for all styling and responsive design.
- Dark mode is supported via Tailwind's `dark:` classes.
- Fonts are loaded using Next.js font optimization.

### Logos & Images
- Place company/school logos in `public/images/logos/` as SVG or PNG.
- Profile image is in `public/images/profile.jpeg`.

---

## 📝 Adding a New Project

1. **Create a new JSON file** in `src/data/projects/` (e.g., `my-cool-project.json`).
2. **Use this template:**
   ```json
   {
     "slug": "my-cool-project",
     "title": "My Cool Project",
     "date": "Month Year",
     "description": "Short summary.",
     "technologies": ["Tech1", "Tech2"],
     "overview": "Detailed overview...",
     "technicalDetails": {
       "frontend": [{ "name": "React", "description": "UI library" }],
       "features": [{ "name": "Feature", "description": "What it does" }]
     },
     "developmentProcess": [{ "title": "Phase", "description": "Details" }],
     "challenges": [{ "title": "Challenge", "description": "Problem", "solution": "How you solved it" }],
     "futureEnhancements": {
       "planned": ["Feature 1"],
       "technical": ["Improvement 1"]
     },
     "icon": "SVG path data",
     "iconColor": "blue"
   }
   ```
3. **Choose an icon:** Use SVG path data (e.g., from [Heroicons](https://heroicons.com/)).
4. **Set `iconColor`:** One of: `indigo`, `green`, `blue`, `purple`, `orange`, `red`.

---

## 🛠️ Customization
- **Navigation:** Edit `src/components/Navbar.tsx` to change links or contact info.
- **Styling:** Tweak Tailwind classes in any component for custom look.
- **Logos:** Add or update SVG/PNG logos in `public/images/logos/`.

---

## 📦 Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code with ESLint

---

## 🤝 Credits
- Built by Elijah Dmytrenko
- Powered by Next.js, React, TypeScript, and Tailwind CSS
- Icons from [Heroicons](https://heroicons.com/)

---

## 📄 License
This project is for personal/portfolio use. Feel free to fork and adapt for your own portfolio!
