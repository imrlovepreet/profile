import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              As a seasoned Network Security Engineer with over 5 years of experience, I specialize in 
              designing and implementing robust security architectures for enterprise networks. My expertise 
              spans across Fortinet technologies, SD-WAN solutions, and advanced threat protection systems.
            </p>
            <p className="text-lg text-gray-300">
              I hold multiple industry certifications including Fortinet NSE 1-7, CEH, demonstrating 
              my commitment to maintaining cutting-edge knowledge in cybersecurity. My approach combines 
              proactive security measures with incident response capabilities to ensure comprehensive 
              network protection.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-sm text-[#00A1D6] border border-[#333]">
                Network Security
              </span>
              <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-sm text-[#00A1D6] border border-[#333]">
                Fortinet Expert
              </span>
              <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-sm text-[#00A1D6] border border-[#333]">
                SD-WAN
              </span>
              <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-sm text-[#00A1D6] border border-[#333]">
                Threat Analysis
              </span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1594915440248-1e419eba6611?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=90"
              alt="Network security operations center"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;