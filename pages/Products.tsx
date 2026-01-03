
import React from 'react';
import { PRODUCTS_DATA, CAPABILITIES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">Products & Capabilities</h1>
          <p className="text-accent font-bold tracking-widest uppercase text-sm">High Quality, Versatile, Customizable</p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div key={product.id} className="group relative overflow-hidden h-[500px]">
              <img src={product.image} alt={product.category} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-white text-3xl font-extrabold uppercase tracking-tighter mb-4">{product.category}</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-xs">{product.description}</p>
                <div className="flex gap-4">
                  <span className="text-[10px] border border-accent text-accent px-2 py-1 uppercase font-bold tracking-tighter">Custom Trims</span>
                  <span className="text-[10px] border border-accent text-accent px-2 py-1 uppercase font-bold tracking-tighter">Bulk Orders</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tighter">Core Manufacturing Capabilities</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our facilities are equipped with state-of-the-art machinery and skilled artisans capable of handling high-volume production without compromising on the artisanal quality required for luxury and premium retail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 tracking-tight">{cap}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1520004434532-668416a08753?auto=format&fit=crop&q=80&w=800" alt="Fabric Quality Inspection" className="rounded-sm grayscale h-64 w-full object-cover border border-gray-200 shadow-sm" />
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=600" alt="Garment Finishing" className="rounded-sm grayscale h-48 w-full object-cover border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" alt="Precision Pattern Design" className="rounded-sm grayscale h-48 w-full object-cover border border-gray-200 shadow-sm" />
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Active Production Line" className="rounded-sm grayscale h-64 w-full object-cover border border-gray-200 shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Expertise Strip */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Material Expertise</h4>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-24 opacity-60">
          {['Cotton', 'Polyester', 'Linen', 'Sustainable Blends', 'Performance Fabrics', 'Knits'].map((fabric, i) => (
            <span key={i} className="text-2xl font-extrabold uppercase tracking-tighter text-gray-900">{fabric}</span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 uppercase tracking-tighter">Looking for a Reliable Sourcing Partner?</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-sm font-bold tracking-widest hover:bg-white hover:text-gray-900 transition-all"
          >
            REQUEST A QUOTE <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
