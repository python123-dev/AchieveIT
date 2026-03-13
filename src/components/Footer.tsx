import { MapPin, Phone, Clock, Instagram, Youtube, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg">
                <img src={logo} alt="AchieveIT Logo" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  ACHIEVE IT
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-1">
                  Software Training Institute
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transforming careers with industry-leading software training. Join us to learn Python, Java, Web Development, and Data Science from experts.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@achieveitsoftwaretrainingi1084" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ai.achieveit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>
                  50, 22, Cart Track Rd, Ramapuram, Secretariat Colony, Guindy,<br />
                  Chennai, Tamil Nadu 600032
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>097890 29127</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>Opens 10 am · Closes 6 pm</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <a href="mailto:ai.achieveit@gmail.com" className="hover:text-white transition-colors">ai.achieveit@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AchieveIT Software Training Institute. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
