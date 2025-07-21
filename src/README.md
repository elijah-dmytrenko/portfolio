# Portfolio Source Code Guide

Welcome! This guide is designed for beginners who want to understand how this portfolio project works. It covers the basics of TypeScript, React, Next.js, Tailwind CSS, and how all the pieces fit together in this codebase.

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [How Next.js Routing Works](#how-nextjs-routing-works)
3. [React Components](#react-components)
4. [TypeScript Basics](#typescript-basics)
5. [Tailwind CSS](#tailwind-css)
6. [Data Flow: Projects as JSON](#data-flow-projects-as-json)
7. [Key Files and Their Roles](#key-files-and-their-roles)
8. [How to Explore and Learn](#how-to-explore-and-learn)

---

## 1. Project Structure

```
src/
├── app/           # Main app directory (pages, routing, layout)
│   ├── about/     # About page and story
│   ├── hobbies/   # Hobbies page
│   ├── projects/  # Projects list and dynamic project pages
│   ├── layout.tsx # Root layout (fonts, global styles)
│   ├── globals.css# Tailwind and global styles
├── components/    # Reusable UI components (Navbar, Footer)
├── data/          # Project data as JSON files
│   └── projects/  # Each project = one JSON file
├── lib/           # Utility functions (e.g., project data loader)
```

---

## 2. How Next.js Routing Works
- **Next.js** uses the `app/` directory for routing. Each folder inside `app/` (like `about/`, `projects/`, `hobbies/`) becomes a route (URL path).
- `page.tsx` inside a folder is the main file for that route. For example, `app/about/page.tsx` is the About page at `/about`.
- Dynamic routes use square brackets: `projects/[slug]/page.tsx` means `/projects/my-project` will show the project with slug `my-project`.
- `layout.tsx` wraps all pages and is used for things like fonts and global styles.

---

## 3. React Components
- **React** lets you build UI using components (reusable pieces of UI).
- Each `.tsx` file exports a function (e.g., `function Navbar()`) that returns JSX (HTML-like code).
- Components can use **props** (inputs) and **state** (internal data that can change).
- Example: `Navbar.tsx` is used at the top of every page for navigation.

---

## 4. TypeScript Basics
- **TypeScript** is JavaScript with types. It helps catch errors and makes code easier to understand.
- Example: `const x: number = 5;` means `x` must be a number.
- In this project, most files are `.tsx` (TypeScript + JSX for React).
- Interfaces (like `ProjectData` in `lib/projects.ts`) define the shape of data objects.

---

## 5. Tailwind CSS
- **Tailwind CSS** is a utility-first CSS framework. You style elements by adding classes directly in your JSX.
- Example: `<div className="bg-blue-600 text-white p-4 rounded-lg">Hello</div>`
- Classes are short and composable: `bg-blue-600` (background), `text-white` (text color), `p-4` (padding), `rounded-lg` (rounded corners).
- Dark mode is supported with `dark:` prefix (e.g., `dark:bg-gray-900`).

---

## 6. Data Flow: Projects as JSON
- All project data is stored as JSON files in `data/projects/`.
- Each file describes a project (title, description, icon, etc.).
- The loader in `lib/projects.ts` reads these files and provides the data to the React components.
- When you visit `/projects`, it loads all JSON files and displays them. Clicking a project loads its details using the slug.

---

## 7. Key Files and Their Roles
- **app/layout.tsx**: Sets up fonts and wraps all pages.
- **app/page.tsx**: The home page.
- **app/about/page.tsx**: The About page (bio, experience, education).
- **app/projects/page.tsx**: Lists all projects.
- **app/projects/[slug]/page.tsx**: Shows details for a single project.
- **components/Navbar.tsx**: The navigation bar at the top of every page. Includes a popup contact card.
- **components/Footer.tsx**: The footer with social links.
- **lib/projects.ts**: Loads project data from JSON files and defines the `ProjectData` type.
- **data/projects/**: Where you add new projects as JSON files.
- **globals.css**: Tailwind and global CSS styles.

---

## 8. How to Explore and Learn
- **Start with the Home page** (`app/page.tsx`) and see how it uses components.
- **Open the Navbar** (`components/Navbar.tsx`) to see how navigation and the contact popup work.
- **Look at a project JSON file** in `data/projects/` and see how it appears on the Projects page.
- **Try editing a project** or adding a new one to see how the UI updates.
- **Experiment with Tailwind classes** in any component to see how styles change.
- **Read the comments** in code files for extra explanations.

---

## More Resources
- [React Docs](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---
