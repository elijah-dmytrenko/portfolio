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
          <div className="w-3/10 h-full bg-[#E6DACE]" />
            <div className="w-7/10 h-full bg-white" />
        </div>
        {/* Foreground content */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row h-auto lg:h-[600px] min-h-[400px] z-10">
          <div className="flex-1 flex items-center justify-center lg:justify-end relative">
            {/* Card, overhanging the split */}
            
            <div className="relative lg:absolute lg:left-[5%] lg:top-1/2 lg:-translate-y-1/2 z-10 w-80 max-w-full bg-[#F4ECE6] shadow-lg flex flex-col items-center overflow-hidden">
              {/* Main content area */}
              <div className="p-5 flex flex-col items-center flex-grow">
                <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
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
                <div className="w-15 h-0.5 bg-blue-600 rounded-full mx-auto" />
                <div className="text-s tracking-widest text-gray-500 mt-4">QUANTITATIVE DEVELOPER</div>
              </div>
              {/* Social icons at bottom */}
              <div className="bg-white w-full py-4 px-6">
                <div className="flex justify-center gap-4 mt-2">
                    <a href="https://gitlab.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg></a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg></a>
                    <a href="mailto:your@email.com" className="text-gray-700 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" /></svg></a>
                </div>

              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="w-full lg:w-7/10 bg-transparent h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-12 py-12">
            <h1 className="text-6xl font-extrabold text-black mb-2">Hello</h1>
            <h2 className="text-2xl font-medium text-gray-800 mb-6 text-center lg:text-left">Here's who I am & what I do</h2>
            <div className="flex gap-4 mb-8">
              <a href="/about" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">Resume</a>
              <a href="/projects" className="px-6 py-2 border-2 border-black text-black font-semibold rounded-full shadow hover:bg-gray-100 transition">Projects</a>
            </div>
            <p className="text-gray-700 text-base max-w-xl mb-2 text-center lg:text-left">
              I'm a passionate quantitative developer with a deep interest in the intersection of finance and technology. 
              My work focuses on developing innovative solutions that bridge the gap between complex financial models and cutting-edge technology.
            </p>
            <p className="text-gray-700 text-base max-w-xl text-center lg:text-left">
              I built this website to learn more about front-end development as well as have a place to showcase what I have been up to. 
              I'm still learning and so if you have any feedback or wish to get in touch, please don't hesitate to get in touch.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
