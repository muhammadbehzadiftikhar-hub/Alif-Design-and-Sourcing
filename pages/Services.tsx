
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">Our Services</h1>
          <p className="text-accent font-bold tracking-widest uppercase text-sm">Apparel Solutions Under One Roof</p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="inline-block p-4 bg-accent/10 rounded-sm text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase tracking-tighter">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description} We specialize in managing the complex nuances of this phase, ensuring every technical specification and creative requirement is met with precision and scalability in mind.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Technical Design Assistance',
                    'Ethical Factory Audits',
                    'Sustainable Fabric Innovation',
                    'Comprehensive QC Inspections'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-wide">
                      <ChevronRight className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">Our Seamless Process</h2>
          <p className="text-gray-400 font-light">From initial concept to your warehouse.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-accent/30 -z-10"></div>
            
            {[
              { step: '01', title: 'Design' },
              { step: '02', title: 'Sampling' },
              { step: '03', title: 'Production' },
              { step: '04', title: 'Quality Control' },
              { step: '05', title: 'Delivery' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gray-900 px-6">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl mb-4 border-4 border-gray-800">
                  {item.step}
                </div>
                <h4 className="font-bold uppercase tracking-widest text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
