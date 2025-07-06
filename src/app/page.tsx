import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-stretch justify-center pt-24 pb-12 relative overflow-x-hidden">
        {/* Split background layer */}
        <div className="absolute inset-0 w-full h-full flex z-0 select-none pointer-events-none">
          <div className="w-2/5 h-full bg-[#e6dfd8]" />
          <div className="w-3/5 h-full bg-white" />
        </div>
        {/* Foreground content */}
        <div className="relative w-full max-w-7xl mx-auto flex h-[600px] min-h-[400px] z-10">
          {/* Card, overhanging the split */}
          <div className="flex-1 flex items-center justify-end relative">
            <div className="absolute left-[38%] top-1/2 -translate-y-1/2 z-10 w-80 max-w-full bg-[#f5f0ec] rounded-xl shadow-lg p-8 flex flex-col items-center" style={{ boxShadow: '0 8px 32px 0 rgba(60,60,60,0.10)' }}>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <Image
                  src="/images/profile.jpeg"
                  alt="Elijah Dmytrenko"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="text-center mb-2">
                <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">Elijah<br />Dmytrenko</h2>
              </div>
              <div className="w-8 h-1 bg-blue-600 rounded-full mx-auto mb-2" />
              <div className="text-xs tracking-widest text-gray-500 mb-4">QUANTITATIVE DEVELOPER</div>
              {/* Social icons */}
              <div className="flex justify-center gap-4 mt-2">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg></a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg></a>
                <a href="mailto:your@email.com" className="text-gray-700 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" /></svg></a>
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="w-3/5 bg-transparent h-full flex flex-col justify-center items-start px-12 py-12">
            <h1 className="text-6xl font-extrabold text-black mb-2">Hello</h1>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Here's who I am & what I do</h2>
            <div className="flex gap-4 mb-8">
              <a href="/about" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">Resume</a>
              <a href="/projects" className="px-6 py-2 border-2 border-black text-black font-semibold rounded-full shadow hover:bg-gray-100 transition">Projects</a>
            </div>
            <p className="text-gray-700 text-base max-w-xl mb-2">
              I'm a passionate quantitative developer with a deep interest in the intersection of finance and technology. My work focuses on developing innovative solutions that bridge the gap between complex financial models and cutting-edge technology.
            </p>
            <p className="text-gray-700 text-base max-w-xl">
              I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
