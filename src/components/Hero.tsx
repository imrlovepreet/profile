import React from 'react';
import { ChevronDown, Shield, Lock, Wifi } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519397154350-533cea5b8bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <div className="flex justify-center gap-6 mb-8">
          <Shield className="w-12 h-12 text-[#00A1D6] animate-pulse" />
          <Lock className="w-12 h-12 text-[#00A1D6] animate-pulse delay-100" />
          <Wifi className="w-12 h-12 text-[#00A1D6] animate-pulse delay-200" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in">
          Securing Networks, Protecting Futures
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-[#00A1D6] mb-8 opacity-0 animate-fade-in animation-delay-300">
          Elite Network Security Engineer & Cybersecurity Expert
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in animation-delay-600">
          Fortinet NSE 7 certified professional with extensive experience in enterprise network security, 
          SD-WAN implementation, and advanced threat protection. Specializing in designing and maintaining 
          robust security architectures for mission-critical networks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-900">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00A1D6] hover:bg-[#0081AB] transition-colors duration-300"
          >
            Explore My Expertise
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-[#00A1D6] text-base font-medium rounded-md text-[#00A1D6] hover:bg-[#00A1D6] hover:text-white transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[#00A1D6]" />
      </div>
    </section>
  );
};

export default Hero;