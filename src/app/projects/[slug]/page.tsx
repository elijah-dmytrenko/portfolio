import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectData, ProjectData } from '@/lib/projects';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }

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
    <div className="min-h-screen bg-gradient-to-b from-[white] to-[#E6DACE] dark:from-gray-500 dark:via-gray-600 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 rounded-xl flex items-center justify-center ${getIconColorClasses(project.iconColor).split(' ')[0]} ${getIconColorClasses(project.iconColor).split(' ')[1]}`}>
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={project.icon} clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    {project.date}
                  </span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
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
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Project Overview</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Technical Implementation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Frontend Technologies</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {project.technicalDetails.frontend.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <strong>{tech.name}:</strong> {tech.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Key Features</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {project.technicalDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <strong>{feature.name}:</strong> {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Development Process</h2>
              <div className="space-y-6">
                {project.developmentProcess.map((step, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Challenge: {challenge.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {challenge.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Solution:</strong> {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Enhancements */}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Future Enhancements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Planned Features</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {project.futureEnhancements.planned.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technical Improvements</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {project.futureEnhancements.technical.map((improvement, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Interested in this project or want to discuss similar work?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
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