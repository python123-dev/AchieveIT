import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Monitor } from 'lucide-react';

export default function BookingForm() {
  const [mode, setMode] = useState<'classroom' | 'online'>('classroom');

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
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Your email"
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Enter Your Mobile No."
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <select 
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled>Select Course</option>
            <option value="python">Python Programming</option>
            <option value="java">Java Full Stack</option>
            <option value="web">Web Development</option>
            <option value="data">Data Science</option>
          </select>
        </div>
        <div>
          <select 
            className="w-full px-4 py-3 rounded bg-white border-0 text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled>Select Your City</option>
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="pt-4 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-[#007bff] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-colors w-full sm:w-auto"
          >
            Get Quotes
          </motion.button>
        </div>
      </form>
    </div>
  );
}
