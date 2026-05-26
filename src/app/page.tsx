import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-stretch justify-center pt-24 pb-12 relative overflow-x-hidden">
        {/* Split background layer */}
        <div className="absolute inset-0 w-full h-full flex z-0 select-none pointer-events-none">
          <div className="w-3/10 h-full bg-[#E6DACE] dark:bg-gray-900/80" />
          <div className="w-7/10 h-full bg-white dark:bg-gray-500" />
        </div>
        {/* Foreground content */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row h-auto lg:h-[600px] min-h-[400px] z-10">
          <div className="flex-1 flex items-center justify-center lg:justify-end relative">
            {/* Card, overhanging the split */}

            <div className="relative lg:absolute lg:left-[5%] lg:top-1/2 lg:-translate-y-1/2 z-10 w-80 max-w-full bg-[#F4ECE6]/90 dark:bg-gray-900/80 shadow-lg flex flex-col items-center overflow-hidden">
              {/* Main content area */}
              <div className="p-5 flex flex-col items-center flex-grow">
                <div className="w-50 h-50 rounded-full overflow-hidden border-2 border-[#f5f1ed] shadow-md mb-4">
                  <Image
                    src="/images/profile.webp"
                    alt="Elijah Dmytrenko"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="text-center mb-2">
                  <h2 className="text-2xl font-extrabold text-gray-900 leading-tight dark:text-gray-100">
                    Elijah
                    <br />
                    Dmytrenko
                  </h2>
                </div>
                <div className="w-15 h-0.5 bg-blue-600 rounded-full mx-auto" />
                <div className="text-s tracking-widest text-gray-500 mt-4 dark:text-gray-300">
                  QUANTITATIVE DEVELOPER
                </div>
              </div>
              {/* Social icons at bottom */}
              <div className="bg-white dark:bg-gray-500/80 w-full py-4 px-6">
                <div className="flex justify-center gap-4 mt-2">
                  <Link
                    href="https://github.com/elijah-dmytrenko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/elijah-dmytrenko-b9bb60105/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                    </svg>
                  </Link>
                  <Link
                    href="mailto:elijah.dmytrenko@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="w-full lg:w-7/10 bg-transparent h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-12 py-12">
            <h1 className="text-6xl font-extrabold text-black mb-2">Hello</h1>
            <h2 className="text-2xl font-medium text-gray-800 text-shadow-xs mb-6 text-center lg:text-left">
              Here&apos;s who I am & what I do
            </h2>
            <div className="flex gap-4 mb-8">
              <Link
                href="/about"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="px-6 py-2 border-2 border-black text-black font-semibold rounded-full shadow hover:bg-gray-100 transition"
              >
                Projects
              </Link>
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-base max-w-2xl max-auto mb-2 text-left lg:text-left">
              <p>
                I&apos;m a passionate quantitative developer with a deep interest in the intersection of finance and
                technology. My work focuses on developing innovative solutions that bridge the gap between complex
                financial models and cutting-edge technology.
              </p>
              <br />
              <p>
                I built this website to learn more about front-end development as well as have a place to showcase
                things that interest me. I&apos;m still learning and so if you have any feedback (or wish to get in
                touch for other reasons), please do reach out!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
