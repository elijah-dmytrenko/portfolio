import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MyStory from "./MyStory";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[white] to-[#E6DACE] dark:from-gray-500 dark:via-gray-600 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-8 mt-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Elijah Dmytrenko"
                    fill
                    className="rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-lg"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Elijah Dmytrenko</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate quantitative developer with a deep interest in the intersection of finance and
                  technology. My work focuses on developing innovative solutions that bridge the gap between complex
                  financial models and cutting-edge technology.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    SQL
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    Postgres
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    ClickHouse
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    Windows
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    Linux
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                    CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Background Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/*Experience*/}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-200 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Experience
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/images/logos/BNY.svg"
                      alt="BNY Logo"
                      width={64}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Research Engineer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">January 2022-June 2025</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/images/logos/morgan_stanley.svg"
                      alt="Morgan Stanley Logo"
                      width={64}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Quantitative Analyst</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">February 2020-December 2021</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/images/logos/morgan_stanley.svg"
                      alt="Morgan Stanley Logo"
                      width={64}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Performance Analyst</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">July 2018-January 2020</p>
                  </div>
                </li>
              </ul>
            </div>
            {/*Education*/}
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-200 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/images/logos/ai-logo.svg"
                      alt="DeepLearning.ai logo"
                      width={64}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Machine Learning Specialization</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">DeepLearning.AI (2024)</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/images/logos/stanford-logo.svg"
                      alt="Stanford University Logo"
                      width={64}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Graduate Student in Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Stanford (2023)</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/images/logos/uw-logo.svg"
                      alt="University of Washington Logo"
                      width={64}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Bachelor's in Economics</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">University of Washington (2015-2018)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* My Story Component */}
          <MyStory />
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Interested in learning more about what I've been building?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Home
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
              >
                Projects
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
