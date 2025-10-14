import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      {/* Full Page Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                  Free For Charity
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                Technology<br />
                Monastery
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl">
                A project of freeforcharity.org: we run the systems your charity needs so you don't have to. All for the price of FREE!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 uppercase text-sm tracking-wide">
                  <span className="relative z-10">Join The Technology Monastery For Free Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                </button>
                <button className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all backdrop-blur-sm hover:bg-white/10 uppercase text-sm tracking-wide">
                  Free Demo
                </button>
              </div>
            </div>

            {/* Right - Brain Image */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative">
                {/* Glow effect behind brain */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-full blur-3xl"></div>
                
                {/* Brain image */}
                <img 
                  src="https://technologymonastery.org/wp-content/uploads/2023/11/brain-1-980x982.png" 
                  alt="Technology Monastery Brain" 
                  className="relative z-10 w-full max-w-lg h-auto animate-float"
                />
                
                {/* Additional decorative glowing orbs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-full blur-2xl opacity-40 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">100+</div>
              <div className="text-gray-400">Supported Charities</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">Free</div>
              <div className="text-gray-400">All Services</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-semibold tracking-wide uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What amazing charity missions<br />will you support with new technology?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide the needed software to support your mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Microsoft 365 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 hover:border-purple-400/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Microsoft 365 (with email setup)</h3>
              <p className="text-gray-300 mb-4">
                We directly apply for the Microsoft Grant and establish your charity email addresses, MS teams for meetings, and all the other features of the Microsoft 365 Suite for nonprofits.
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm uppercase tracking-wide transition">
                Learn More →
              </button>
            </div>

            {/* WordPress Hosting */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 hover:border-purple-400/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WordPress Website Hosting</h3>
              <p className="text-gray-300 mb-4">
                We provide, Managed Wordpress Hosting with DWI drag-and-Drop' Design tools and Whitelabel Plugins all for free!
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm uppercase tracking-wide transition">
                Learn More →
              </button>
            </div>

            {/* AI Tools */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 hover:border-purple-400/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI FAQ Chatbot and Other Modern AI Tools</h3>
              <p className="text-gray-300 mb-4">
                We help you decide if FAQ chatbots are right for your charity and help you setup one of our AI tools using your modern charity management stack today.
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm uppercase tracking-wide transition">
                Learn More →
              </button>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 hover:border-purple-400/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Management</h3>
              <p className="text-gray-300 mb-4">
                We provide the tools in MY SOCRATES. Multi-channel manager for your social media posts! Scheduling posts to all social includes the powerful AI image generation and Post creation features.
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm uppercase tracking-wide transition">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 100+ Charities Section */}
      <section className="py-20 bg-[#0f0a1e] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                It All Starts With A Free Business Plan
              </h2>
              <p className="text-gray-300 mb-8">
                Join us for a 1 hour consulting session where you and our team talk through what you have today, what you need to be successful going forward. We use Livvplan.com to build this plan or push work supported by us at course.
              </p>
              <div className="mb-8">
                <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4">
                  100+
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Supported<br />Charities
                </h3>
                <p className="text-gray-400 mb-6">
                  Since Free for Charity was started we have had over 100 charities supported by our systems. We say small and focused to ensure we can support the charities we have in the systems and can support them all for free.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-orange-500/50">
                  FREE DEMO
                </button>
              </div>
            </div>
            
            {/* Eye Image */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
                
                {/* The eye image */}
                <img 
                  src="https://technologymonastery.org/wp-content/uploads/2023/11/eye-480x464.png" 
                  alt="Technology Monastery Eye" 
                  className="relative z-10 w-full max-w-2xl lg:max-w-4xl h-auto animate-float"
                />
                
                {/* Additional decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse delay-300"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-40 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Tech Visualization Left */}
            <div className="relative h-96 order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Large glowing orb */}
                <div className="relative">
                  <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-400 rounded-full animate-float shadow-2xl shadow-purple-500/50"></div>
                </div>
                
                {/* Vertical bars */}
                <div className="absolute bottom-10 left-10 flex gap-2 items-end opacity-40">
                  <div className="w-4 h-16 bg-gradient-to-t from-purple-500 to-transparent"></div>
                  <div className="w-4 h-24 bg-gradient-to-t from-purple-500 to-transparent"></div>
                  <div className="w-4 h-12 bg-gradient-to-t from-cyan-500 to-transparent"></div>
                  <div className="w-4 h-20 bg-gradient-to-t from-purple-500 to-transparent"></div>
                </div>
                
                {/* Glow effects */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse delay-300"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unlock The Rest Of<br />Our Services
              </h2>
              <p className="text-gray-300 mb-8">
                We run a tight tech-bridge track focused on the main features listed above. Once we are set up and running with us at the basic service level, we expand into even more charity support systems.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-purple-500/50 uppercase text-sm tracking-wide">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Check out how people are using Technology
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Quis blandit erit. Donec blandit libero non metus lobortis consequat in vel metus. Sed non augue id felis placerat. Fermentum nulla non quasi mauris, amet rutrum ut ipsum commodo eget elit. Velit vehicula ipsum consequat et ac sollicitudin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              '"In non pulvinar purus. Curabitur odio blandit et elit at, suscipit pharetra efficitur elit."',
              '"Quisque aliquet velit sit amet sem interdum faucibus. In feugiat aliquet mollis etiam tincidunt ligula."',
              '"Quisque aliquet velit sit amet sem interdum faucibus. In feugiat aliquet mollis etiam tincidunt ligula."',
              '"Technology Monastery transformed our nonprofit\'s operations. The free Microsoft 365 setup was seamless and professional."',
              '"Outstanding support and expertise. They helped us modernize our systems without breaking our budget."',
              '"The team\'s dedication to nonprofits is remarkable. Our volunteers can now collaborate effectively with the tools provided."'
            ].map((quote, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/10 rounded-lg p-6">
                <p className="text-gray-300 italic mb-4">{quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold text-sm">Charity Name</p>
                    <p className="text-gray-400 text-xs">Executive Director</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a nonprofit looking for technology support or a professional wanting to 
            make a difference, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-white font-semibold rounded-full transition-all backdrop-blur-sm hover:bg-purple-900/20">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
