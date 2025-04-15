import React from 'react';
import { Link, Shield, Terminal, BarChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Blockchain Technology in Financial Services',
      description: 'Authored a globally cited research paper on blockchain\'s transformative power in banking security.',
      icon: <Link className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80',
      tags: ['Blockchain', 'Banking Security', 'Research'],
      link: 'https://www.amazon.ca/Auditors-Guide-Blockchain-Technology-Architecture/dp/1032078251/ref=sr_1_4?crid=823SQB2W47HE&dib=eyJ2IjoiMSJ9.U6s3KQalN7yvkF8DxeP2HQY0PWpRrUSwUWKBaavTA7uqy7GRJxkMhBHlv_2Z9sTbcWJOfS2rWqCmD2e8tuOvin98uLQndi7QX7W93HUNaLk.EAnIgrXwvgM8iXYslvcxVKARPzZIhvQpRvOL1M94sEY&dib_tag=se&keywords=shaun+aghili&qid=1744227011&sprefix=shaun+aghili%2Caps%2C58&sr=8-4'
    },
    {
      title: 'Windows 7 Vulnerability Exploitation',
      description: 'Simulated cyber-attacks in VMware, mastering Metasploit to expose and patch vulnerabilities.',
      icon: <Shield className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
      tags: ['MSB-MS17-010', 'Metasploit', 'VMware', 'Security']
    },
    {
      title: 'Royal Bank of Canada Security Risk Assessment',
      description: 'Conducted elite vulnerability assessments with ISO 31000/27005, delivering bulletproof mitigation plans.',
      icon: <BarChart className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
      tags: ['Risk Assessment', 'ISO 31000', 'ISO 27005']
    },
    {
      title: 'Advanced Network Security Configuration',
      description: 'Designed impenetrable networks with IPsec VPN and adaptive firewalls for enterprise-grade protection.',
      icon: <Terminal className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      tags: ['IPsec VPN', 'Firewall', 'Network Security']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Signature Works</h2>
          <p className="text-xl text-[#00A1D6]">Pioneering Solutions in Cybersecurity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#333] hover:border-[#00A1D6] transition-all duration-300"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#1A1A1A] rounded-lg text-[#00A1D6] group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#00A1D6] group-hover:text-white transition-colors">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#1A1A1A] text-[#00A1D6] rounded-full border border-[#333] group-hover:border-[#00A1D6] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-[#00A1D6] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;