import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Building2, Monitor, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BookingForm() {
  const [mode, setMode] = useState<'classroom' | 'online'>('classroom');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Read the access key from environment variables and clean it up
    const rawAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
    // Strip everything except alphanumeric characters and dashes to ensure it's a valid UUID
    const accessKey = rawAccessKey.replace(/[^a-zA-Z0-9-]/g, '');
    
    // If it's empty or the placeholder (stripped of underscores)
    if (!accessKey || accessKey === 'YOURWEB3FORMSACCESSKEY') {
      alert("Form submission is not configured yet. Please add your Web3Forms access key to the environment variables.");
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', accessKey);
    formData.append('subject', `New Training Inquiry - ${mode === 'classroom' ? 'Class Room' : 'Online'}`);
    formData.append('from_name', 'AchieveIT Website');
    formData.append('Training Mode', mode === 'classroom' ? 'Class Room' : 'Online');

    // Convert FormData to JSON for better reliability
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Add a 15-second timeout to prevent infinite loading
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (response.status === 200 && data.success) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong submitting the form.');
      }
    } catch (error: any) {
      console.error("Submission Exception:", error);
      setStatus('error');
      if (error.name === 'AbortError') {
        setErrorMessage('Request timed out. Please check your internet connection.');
      } else {
        setErrorMessage(error.message || 'Failed to submit form. Please try again.');
      }
    }
  };

  return (
    <div className="bg-[#e5e7eb] rounded-xl p-8 shadow-2xl shadow-slate-900/10 border border-white/20 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-slate-600 font-medium text-lg">Request for</h3>
        <h2 className="text-slate-700 font-semibold text-xl">Class Room & Online Training Quotation</h2>
      </div>

      {/* Toggle */}
      <div className="flex bg-blue-500 rounded-full p-1 mb-6 relative">
        <div className="flex-1 relative z-10">
          <button
            type="button"
            onClick={() => setMode('classroom')}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
              mode === 'classroom' ? 'bg-white text-slate-800 shadow-sm' : 'text-white hover:bg-white/10'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Class Room
          </button>
        </div>
        <div className="flex-1 relative z-10">
          <button
            type="button"
            onClick={() => setMode('online')}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
              mode === 'online' ? 'bg-white text-slate-800 shadow-sm' : 'text-white hover:bg-white/10'
            }`}
          >
            <Monitor className="w-4 h-4" />
            Online
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your email"
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile No."
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <select 
            name="course"
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled>Select Course</option>
            <option value="Python Programming">Python Programming</option>
            <option value="Java Full Stack">Java Full Stack</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
        <div>
          <select 
            name="city"
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled>Select Your City</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {status === 'success' && (
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Thank you! We'll contact you shortly.
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </div>
        )}

        <div className="pt-4 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'submitting'}
            className="bg-[#007bff] hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 mx-auto"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Get Quotes'
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
