import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function Projects() {
  const projects = getAllProjects();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[white] to-[#E6DACE] dark:from-gray-500 dark:via-gray-600 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-700 dark:text-blue-200 mb-4">
              Projects
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-300 italic">
              A collection of my work and experiments
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => {
              const getIconColorClasses = (color: string) => {
                const colorMap: Record<string, string> = {
                  indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300',
                  green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
                  blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
                  purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
                  orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
                  red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300'
                };
                return colorMap[color] || colorMap.blue;
              };

              return (
                <div key={project.slug} className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 rounded-xl flex items-center justify-center ${getIconColorClasses(project.iconColor)}`}>
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d={project.icon} clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {project.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Want to collaborate on a project or learn more about my work?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
              <Link
                href="/hobbies"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
              >
                Check Out Hobbies
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 