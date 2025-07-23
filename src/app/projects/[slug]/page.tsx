import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectData } from "@/app/projects/projects";
import React from "react";

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  let project: ProjectData | null = null;
  try {
    // Dynamic import based on slug
    const { slug } = await params; // Not sure why I need to separate params instead of calling params.slug, but I will otherwise get an error
    project = (await import(`@/data/projects/${slug}`)).default;
  } catch (e) {
    console.error("Project import failed:", e);
    notFound();
  }

  if (!project) notFound();

  const getIconColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300",
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
      orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
      red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[white] to-[#E6DACE] dark:from-gray-500 dark:via-gray-600 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <div className="my-4">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div
                  className={`w-32 h-32 rounded-xl flex items-center justify-center ${
                    getIconColorClasses(project.iconColor).split(" ")[0]
                  } ${getIconColorClasses(project.iconColor).split(" ")[1]}`}
                >
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={project.icon} clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{project.title}</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    {project.date}
                  </span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-8">
            {/* Overview Section */}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Project</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.overview}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
