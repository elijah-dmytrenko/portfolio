import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-16 px-4">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Side - Information */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-indigo-700 dark:text-indigo-200 mb-4">
                Elijah Dmytrenko
              </h1>
              <p className="text-xl text-indigo-600 dark:text-indigo-300 mb-6 italic">
                Quantitative Developer
              </p>
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-200 mb-4 mt-10">
                Welcome to my website!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-none leading-relaxed">
                This is my canvas where I share some of my projects and hobbies with the world. My projects are mostly related to the intersection of finance and technology. I'm always looking to improve and welcome any suggestions or feedback.
              </p>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-85 h-85 lg:w-90 lg:h-90">
                <Image
                  src="/images/profile.jpeg"
                  alt="Elijah Dmytrenko"
                  fill
                  className="rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
