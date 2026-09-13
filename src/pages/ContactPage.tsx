import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    toast.success('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Get in <span className="text-brand-gradient">Touch</span>
        </h1>
        <p className="text-sm text-slate-600">
          Have questions, suggestions, or want to submit a technology? Reach out to us.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5"
      >
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Message</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Send size={16} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
