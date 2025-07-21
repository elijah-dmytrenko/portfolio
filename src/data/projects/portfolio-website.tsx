import { ProjectData } from "@/lib/projects";
import React from "react";

const project: ProjectData = {
  slug: "portfolio-website",
  title: "Portfolio Website",
  date: "July 2025",
  description:
    "A place to showcase some of my hobby projects as I learn more about front-end development.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
  overview: (
    <>
      <p>
        This is a <strong>portfolio website</strong> built to showcase my work
        and learn modern web development.
      </p>
      <ul>
        <li>Dynamic project pages</li>
        <li>Responsive design</li>
        <li>Dark mode support</li>
      </ul>
    </>
  ),
  icon: "M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 0114 0H3z",
  iconColor: "blue",
};

export default project;
