import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 状态：idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // 清空表单
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white mb-8 shadow-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h3 className="text-4xl font-display font-black uppercase tracking-tight mb-4 text-brand-dark">
          TRANSMISSION<br />SUCCESSFUL.
        </h3>
        <p className="body-text max-w-md">
          Thank you for reaching out. Your message has been securely routed to my database. I will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:text-brand-red hover:opacity-100 transition-all"
        >
          Send Another Message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 max-w-2xl w-full">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col group">
          <SectionLabel text="Your_Name" className="opacity-40 group-focus-within:text-brand-red transition-colors mb-2" />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 body-text focus:outline-none focus:border-brand-red transition-all"
            placeholder="Jane Doe"
          />
        </div>
        <div className="flex-1 flex flex-col group">
          <SectionLabel text="Email_Address" className="opacity-40 group-focus-within:text-brand-red transition-colors mb-2" />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 body-text focus:outline-none focus:border-brand-red transition-all"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col group">
        <SectionLabel text="Message_Log" className="opacity-40 group-focus-within:text-brand-red transition-colors mb-2" />
        <textarea
          name="message"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 body-text focus:outline-none focus:border-brand-red transition-all resize-none"
          placeholder="Tell me about your project, timeline, and vision..."
        ></textarea>
      </div>

      <div className="flex items-center gap-6 mt-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-[16px] font-display font-bold text-[12px] uppercase tracking-[0.15em] hover:bg-brand-red transition-all duration-300 shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
        </button>
        {status === 'error' && (
          <span className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-widest animate-pulse">
            [ ERROR: Connection Failed ]
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;