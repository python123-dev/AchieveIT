import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'muki havi',
    time: '5 months ago',
    text: 'Trainer is very knowledgeable, can train beginners to experienced person. my system knowledge is increased because of you 🙏 Goutham sir …',
    rating: 5,
  },
  {
    name: 'saranya gokulakrishnan',
    time: 'a year ago',
    text: "My trainer's passion for Python was clear and contagious, which made every class fun and engaging. His explanations were easy to follow. The hands-on exercises and real-life examples really helped solidify my understanding of the concepts.",
    rating: 5,
  },
  {
    name: 'Saravana Perumal T',
    time: '2 years ago',
    text: 'Best training institute, if you want to start learning from simple basics just join here. The task given by trainer will include all the basics, if you keep on practicing',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Student Success Stories</h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. See what our students have to say about their learning journey with AchieveIT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
