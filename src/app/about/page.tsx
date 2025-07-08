import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[white] to-[#E6DACE] dark:from-gray-500 dark:via-gray-600 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
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
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  My Story
                </h2>
                <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        I'm a passionate Quantitative Developer with a deep interest in the intersection of finance and technology. 
                        My work focuses on developing innovative solutions that bridge the gap between complex financial models 
                        and cutting-edge technology. The following summarizes my jouney to getting here.
                    </p>
                    <br/>
                    <p className='font-bold'>
                        Beginning
                    </p>
                    <p>
                        My journey to becoming a Quantitative Developer, started in 2018. I was fresh out of undergrad and had just started my career as a Performance Analyst.
                        As a Performance Analyst, my job was to calculate many of the ex-post metrics we reported to clients as well as to the investment team for their post-mortem reviews. 
                        To my surprise, this was a rather tedius and manual process with many bottle-knecks. 
                        Luckily for me, my ECON 482 (Econometrics Theory) class introduced me to my first programming language, R. 
                        I knew that I could use R to systematize many of our processes. 
                        So I got to work and within weeks, we were seeing exponential improvements in efficiency as well as significant reduction in manual errors.
                    </p>
                    <br/>
                    <p>
                        Building what ended up being such powerful scripts for our team felt like magic and I was immediately hooked. 
                        I was so excited to learn about programming as knew I was just scratching the surface of what technology could do. 
                        And so energized by this excitement (and naivity), I jumped into the deep-end and set out to conquer programming (whatever that meant).
                        
                    </p>
                    <br/>
                    <p className='font-bold'>
                        Quant
                    </p>
                    <p>
                        I knew I needed to change roles if I wanted to get closer to building the technology. 
                        Luckily for me, my previous work was noticed (and I'd like to think admired) by those in power at the firm. 
                        So long-story short, in 2020 I was given the opportunity to become a 'Quant'.
                    </p>
                    <br/>
                    <p>
                        As a Quant, I began to transition from a 'spaghetti-coder' to building smarter more effective tools and programs. 
                        I was given a project to work on an MS SQL Server database--from which, I learned SQL. 
                        I was also given a project to systematize more processes--from which, I decided to make the switch from R and began learning Python 
                            (more was happening in the Python community and I wanted to ride the bigger wave).
                        I was writing smarter, learning about design patterns, managing environments, object oriented programming, and more. 
                    </p>
                    <br/>
                    <p>
                        But after a couple years of this continuous growth, I felt I was starting to hit a ceiling and plateau. 
                        This scared me. I was way too early in my career to be slowing down.
                        So I began working with and gravitating towards Research projects as this is where I believed the smartest work was happening. 
                        From which, I made the conclusion: if I could surround myself with these incredibly brilliant people, I would naturally learn the most (by way of osmosis or something like that).
                        And if nothing else, the work they were doing was simply more interesting than anything else I was exposed to. 
                    </p>
                    <br/>
                    <p className='font-bold'>
                        Proper Engineer
                    </p>
                    <p>
                        In 2022, I was given the dream opportunity I could not turn down. 
                        I joined a Systematic Multi-Asset Research Team as an Engineer. 
                        I also got to move away from Seattle and enjoy a sunny winter for once in beautiful San Francisco--cherry on top!
                    </p>
                    <br/>
                    <p>
                        As a Research Engineer, my job was mainly to maintain and build the infrastructure that made our business 'Systematic'. This required working with a lot of different technologies:
                        <ul className="list-disc marker:text-blue-600 hanging-indent pl-5">
                            <li>
                                I got to work with many different database technologies (SQL Server, ClickHouse, Mongo, ArcticDb) and was responsible for designing various schemas. 
                                From which I learned about compressing, normalizing, and serializing. 
                            </li>
                            <li>
                                I got to work on designing APIs to put an engine behind an idea (Python, Matlab, R).
                                From which I continued to learn how to write better code (linting, testing, versioning).
                            </li>
                            <li>
                                I got to build interactive dashboards to bring to life our ideas and their required monitoring for the PMs and trading teams (streamlit, JS, CSS, HTML).
                                From which I learned about front-end development and the client-server relationship.
                            </li>
                            <li>
                                And with all of this, I got to build out orchestration and manage environments to support everything. 
                                I learned about about Windows, Linux, Docker, Docker-Compose, CI/CD, and much more. 
                            </li>
                        </ul>
                        In this role, everything clicked and I became a full-stack engineer. 
                    </p>
                    <br/>
                    <p>
                        To top it off, we were building something very exciting and new for the industry. 
                        We were building a scalable, fully customable multi-asset platform where clients could come and choose their 'alpha blocks' (think legos) to fit their unique needs.
                    </p>
                    <br/>
                    <p>
                        However, in May 2025 and to my great dissapointment, this all came to an end. We were shutdown by the Bank's relatively new Exec Team. 
                        I'm guessing the Execs decided we were the ugly step-child in the brand (as we were the only systematic team). 
                        But that's just my guess as I actually don't why--the rationale was never communicated.
                    </p>
                    <br/>

                    <p className='font-bold'>
                        What's Next?
                    </p>
                    <p>
                        I'm not sure what exactly lies ahead. But I'm excited. 
                        Right now is one of the most exciting times in tech with AI. 
                        Never before has a developer been so empowered to create and be productive. 
                        I'm reminded of the same feeling of magic back when I first started coding in 2018.
                        And just like back then, I'll be jumping into the deep-end and conquering the power of AI (whatever that means).
                    </p>

                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium">
                    SQL
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium">
                    Postgres
                  </span>    
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium">
                    ClickHouse
                  </span>                                                     
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium">
                    React
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Background Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-200 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
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
              </ul>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-200 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Bachelor's in Economics</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">University of Washington</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Machine Learning Specialization</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">DeepLearning.AI</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Philosophy Section */}
          {/*
          <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-200 mb-6 text-center">
              Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Innovation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Constantly exploring new technologies and approaches to solve complex problems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Precision</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Attention to detail and rigorous testing to ensure reliable, accurate solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Collaboration</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Working with teams to create solutions that exceed expectations
                </p>
              </div>
            </div>
          </div>
          */}

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Interested in learning more about my projects?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium rounded-lg transition-colors"
              >
                Projects
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
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