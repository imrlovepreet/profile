import React from 'react';
import { Award, CheckCircle, Shield, Network, Laptop, Workflow, BookOpen, Cpu, MessagesSquare, Cog, FileCode } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Fortinet SD-WAN 7.0 Architect',
      date: '2024',
      icon: <Network className="w-8 h-8" />,
      category: 'Network Architecture'
    },
    {
      title: 'Fortinet Certified Solution Specialist – Network Security',
      date: '2023',
      icon: <Shield className="w-8 h-8" />,
      category: 'Network Security'
    },
    {
      title: 'Fortinet FortiGate 7.4 Operator',
      date: '2023',
      icon: <Cog className="w-8 h-8" />,
      category: 'Network Operations'
    },
    {
      title: 'Fortinet FortiGate 7.4 Administrator',
      date: '2023',
      icon: <FileCode className="w-8 h-8" />,
      category: 'Network Administration'
    },
    {
      title: 'Fortinet Certified Professional – Network Security (NSE1-NSE7)',
      date: '2023',
      icon: <Award className="w-8 h-8" />,
      category: 'Network Security'
    },
    {
      title: 'Fortinet FortiClient EMS 7.2 Administrator',
      date: '2023',
      icon: <Laptop className="w-8 h-8" />,
      category: 'Endpoint Security'
    },
    {
      title: 'Fortinet Certified Associate – Cybersecurity',
      date: '2023',
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity'
    },
    {
      title: 'Fortinet Certified Fundamentals – Cybersecurity',
      date: '2023',
      icon: <BookOpen className="w-8 h-8" />,
      category: 'Cybersecurity'
    },
    {
      title: 'Communication Post-Sales Level 2 – Communication Skills',
      date: '2023',
      icon: <MessagesSquare className="w-8 h-8" />,
      category: 'Professional Skills'
    },
    {
      title: 'CompTIA A+ (PC Hardware, Software, and Troubleshooting)',
      date: '2022',
      icon: <Cpu className="w-8 h-8" />,
      category: 'IT Fundamentals'
    },
    {
      title: 'ITIL v3/v4 Framework (IT Service Management)',
      date: '2022',
      icon: <Workflow className="w-8 h-8" />,
      category: 'IT Service Management'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-[#252525]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Elite Credentials</h2>
          <p className="text-gray-400">Comprehensive expertise validated through industry-recognized certifications</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#00A1D6] opacity-30"></div>

          {/* Certification cards */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#00A1D6] rounded-full z-10">
                  <div className="absolute inset-0 bg-[#00A1D6] rounded-full animate-ping opacity-25"></div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  <div className="bg-[#2A2A2A] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-[#333] hover:border-[#00A1D6] hover:shadow-lg hover:shadow-[#00A1D6]/10">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#1A1A1A] rounded-lg text-[#00A1D6]">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#00A1D6] mb-2">{cert.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <Award className="w-4 h-4" />
                          <span>{cert.category}</span>
                          <span className="mx-2">•</span>
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;