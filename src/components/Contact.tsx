import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.us2.make.com/bszcbh7i1nf1c71x2vet1npg8utqgytz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#252525]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            {isSubmitted && (
              <div className="bg-green-500/10 border border-green-500 text-green-400 p-4 rounded-md flex items-center gap-2 animate-fade-in">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-[#1A1A1A] border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A1D6] focus:border-transparent transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-[#1A1A1A] border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A1D6] focus:border-transparent transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 bg-[#1A1A1A] border ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A1D6] focus:border-transparent transition-colors`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 bg-[#00A1D6] text-white rounded-md 
                  ${!isSubmitting && 'hover:bg-[#0081AB]'} transition-colors relative
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
            <div className="space-y-6">
              <a
                href="mailto:imrlovepreet@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#00A1D6] transition-colors p-4 rounded-lg hover:bg-[#1A1A1A] group"
              >
                <Mail className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/imrlovepreet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#00A1D6] transition-colors p-4 rounded-lg hover:bg-[#1A1A1A] group"
              >
                <Github className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/imrlovepreet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#00A1D6] transition-colors p-4 rounded-lg hover:bg-[#1A1A1A] group"
              >
                <Linkedin className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;