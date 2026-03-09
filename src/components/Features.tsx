import { motion } from 'motion/react';
import { BookOpen, Users, Award, MonitorPlay } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: 'Comprehensive Curriculum',
    description: 'Learn from simple basics to advanced concepts. Our tasks include all the fundamentals you need.',
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: 'Expert Trainers',
    description: 'Our trainers are highly knowledgeable and passionate, capable of training beginners to experienced professionals.',
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-blue-600" />,
    title: 'Hands-on Learning',
    description: 'Engaging classes with hands-on exercises and real-life examples to solidify your understanding.',
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: 'Career Growth',
    description: 'Increase your system knowledge and prepare for the industry with our structured training programs.',
  },
];

export default function Features() {
  return (
    <section id="courses" className="py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose AchieveIT?</h2>
          <p className="text-lg text-slate-600">
            We provide top-notch software training designed to equip you with the skills demanded by today's tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
