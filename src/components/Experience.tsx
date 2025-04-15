import React from 'react';
import { Briefcase, Calendar, ChevronRight, Award, Target, Shield } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Support Engineer',
      company: 'Fortinet',
      location: 'Canada',
      period: 'Feb 2022 – Present',
      icon: <Shield className="w-6 h-6" />,
      achievements: [
        'Spearheaded support for Fortinet\'s cutting-edge products (FortiGate, FortiAP, FortiSwitch, FortiAnalyzer, FortiManager, FortiClient EMS), resolving mission-critical issues with a record-breaking 98% first-call resolution rate.',
        'Masterminded IPsec VPN, SSL VPN, OSPF, BGP, and SD-WAN configurations, slashing downtime by 30%.',
        'Integrated Radius, LDAP, SAML, and Windows servers with FortiGate, fortifying authentication for global clients.',
        'Leveraged Wireshark to decode traffic mysteries, boosting network performance by 25%.',
        'Administered FortiGate 7.4 and FortiClient EMS 7.2, securing endpoints across Azure, AWS, and GCP.'
      ]
    },
    {
      title: 'Network Engineer',
      company: 'S.U.S. Govt. College',
      location: 'Sunam, India',
      period: 'Jun 2018 – Nov 2019',
      icon: <Target className="w-6 h-6" />,
      achievements: [
        'Architected robust LAN, WAN, and wireless networks, achieving 99.9% uptime for academic operations.',
        'Deployed routers, switches, and firewalls, enhancing security and bandwidth efficiency by 20%.',
        'Engineered disaster recovery plans, ensuring zero data loss during critical outages.'
      ]
    },
    {
      title: 'Cybersecurity & IT Solutions Developer',
      company: 'SafeWall.net',
      location: 'Freelance',
      period: '2024 – Present',
      icon: <Award className="w-6 h-6" />,
      achievements: [
        'Crafted a world-class cybersecurity platform using React.js, HTML5, CSS3, and Netlify, integrating RESTful APIs and SQLite for dynamic, secure client services.',
        'Hardened security with HTTPS and OWASP standards, slashing vulnerabilities by 35%.',
        'Optimized deployments with Netlify CLI, cutting build times by 30%.'
      ]
    },
    {
      title: 'Web Application Developer',
      company: 'LoveCarWash.netlify.app',
      location: 'Freelance',
      period: '2024 – Present',
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        'Developed a revolutionary car wash subscription app with React.js, Node.js, and Stripe API, featuring MongoDB and JWT authentication.',
        'Achieved 99.99% uptime with CI/CD on Netlify and boosted mobile usability by 25% with responsive design.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-[#252525]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Professional Milestones</h2>
          <p className="text-xl text-[#00A1D6]">A Legacy of Excellence</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="bg-[#2A2A2A] rounded-lg p-6 border border-[#333] hover:border-[#00A1D6] transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left side - Company info */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#1A1A1A] rounded-lg text-[#00A1D6] group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#00A1D6]">{exp.title}</h3>
                  </div>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Achievements */}
                <div className="md:w-2/3">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <ChevronRight className="w-5 h-5 text-[#00A1D6] mt-1 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;