import React from "react";

export interface ProjectData {
  slug: string;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  overview: React.ReactNode;
  icon: string;
  iconColor: string;
}
