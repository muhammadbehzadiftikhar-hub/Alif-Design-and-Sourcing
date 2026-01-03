
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">Contact Us</h1>
          <p className="text-accent font-bold tracking-widest uppercase text-sm">Let's Build Something Together</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form Side */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tighter">Reach Out to Discuss Your Project</h2>
              
              {isSubmitted ? (
                <div className="bg-gray-50 border border-accent/20 p-10 text-center rounded-sm">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-2">Message Sent Successfully</h3>
                  <p className="text-gray-600 mb-6">Our sourcing specialists will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-bold uppercase tracking-widest text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border border-gray-100 px-4 py-4 rounded-sm focus:outline-none focus:border-accent transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Brand Name"
                        className="w-full bg-gray-50 border border-gray-100 px-4 py-4 rounded-sm focus:outline-none focus:border-accent transition-colors" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-100 px-4 py-4 rounded-sm focus:outline-none focus:border-accent transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 (000) 000-0000"
                        className="w-full bg-gray-50 border border-gray-100 px-4 py-4 rounded-sm focus:outline-none focus:border-accent transition-colors" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-4 rounded-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-accent text-white py-5 rounded-sm font-extrabold tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        'SUBMIT REQUEST'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-8">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-sm text-accent">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">USA Headquarters</h4>
                      <p className="text-gray-500 text-sm">200 YALE ST ROSLYN HEIGHTS NY 11577 U.S.A.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-sm text-accent">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-gray-500 text-sm">+1 (212) 555-0198</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-sm text-accent">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-gray-500 text-sm">contact@alifdesignusa.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Google Map Embed for Roslyn Heights */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-6">Our Location</h3>
                <div className="h-[350px] w-full bg-gray-100 rounded-sm border border-gray-100 overflow-hidden shadow-sm">
                  <iframe 
                    title="Alif Design HQ Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.893605697274!2d-73.64283182341355!3d40.78635843306019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2890526019623%3A0xe67c006806e257b!2s200%20Yale%20St%2C%20Roslyn%20Heights%2C%20NY%2011577!5e0!3m2!1sen!2sus!4v1716212453625!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;