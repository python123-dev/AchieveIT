import { motion } from 'motion/react';
import BookingForm from './BookingForm';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Master Software Skills with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AchieveIT</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Join Chennai's premier software training institute. We transform beginners into industry-ready professionals with hands-on training, expert guidance, and real-world projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
              {[
                'Expert trainers',
                'Hands-on exercises',
                'From basics to advanced',
                'Classroom & Online'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-left">
                <p className="font-semibold text-slate-900">Join 500+ students</p>
                <p className="text-slate-500">who have accelerated their careers</p>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Content - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto"
          >
            <BookingForm />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
