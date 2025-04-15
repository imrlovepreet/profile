import React from 'react';
import { Shield, Server, Globe, Cloud, PenTool as Tool, Lock, Code, Smartphone, Network } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Networking',
      icon: <Network className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'LAN/WAN Design',
        'IPsec/SSL VPN',
        'OSPF & BGP',
        'SD-WAN',
        'NAT/PAT',
        'GEO IP',
        'Firewall Mastery'
      ],
      proficiency: 95
    },
    {
      category: 'Network Devices',
      icon: <Server className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'FortiGate',
        'FortiAP',
        'FortiSwitch',
        'FortiClient EMS',
        'Routers',
        'Switches',
        'Access Points'
      ],
      proficiency: 90
    },
    {
      category: 'Operating Systems',
      icon: <Globe className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'Windows 10/11',
        'Linux',
        'FreeBSD',
        'OpenBSD'
      ],
      proficiency: 85
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'Azure',
        'AWS',
        'GCP',
        'Virtual Firewalls',
        'Advanced Networking'
      ],
      proficiency: 88
    },
    {
      category: 'Security Tools',
      icon: <Tool className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'Wireshark',
        'ServiceNow',
        'VMware ESXi',
        'GNS3',
        'FortiManager',
        'FortiAnalyzer',
        'Ivanti Neurons',
        'Netlify CLI'
      ],
      proficiency: 92
    },
    {
      category: 'Security Standards',
      icon: <Shield className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'IPS/IDS',
        'Web/DNS Filtering',
        'Radius/LDAP/SAML',
        'NIST',
        'ISO 27001',
        'OWASP',
        'JWT Authentication',
        'Disaster Recovery'
      ],
      proficiency: 94
    },
    {
      category: 'Development',
      icon: <Code className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'React.js',
        'Node.js',
        'HTML5 & CSS3',
        'Netlify',
        'Stripe API',
        'RESTful APIs',
        'MongoDB',
        'SQLite',
        'SendGrid'
      ],
      proficiency: 82
    },
    {
      category: 'Mobile Security',
      icon: <Smartphone className="w-8 h-8 text-[#00A1D6]" />,
      items: [
        'iOS Security',
        'Android Security',
        'Mobile Optimization',
        'Device Management'
      ],
      proficiency: 85
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-xl text-[#00A1D6]">Unmatched Expertise Across Domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="bg-[#2A2A2A] rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300 border border-[#333] hover:border-[#00A1D6] group"
            >
              <div className="flex items-center gap-4 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold text-[#00A1D6] group-hover:text-white transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[#333] rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-[#00A1D6] rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                  style={{ 
                    width: `${skillGroup.proficiency}%`,
                    animation: 'progressAnimation 1.5s ease-out'
                  }}
                ></div>
              </div>

              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#00A1D6] rounded-full group-hover:animate-pulse"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progressAnimation {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Skills;