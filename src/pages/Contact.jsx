import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const fields = [
    { name: 'name', label: 'Full Name', icon: User, type: 'text', placeholder: 'Your distinguished name' },
    { name: 'email', label: 'Email', icon: Mail, type: 'email', placeholder: 'your@email.com' },
    { name: 'phone', label: 'Phone', icon: Phone, type: 'tel', placeholder: '+1 (000) 000-0000' },
  ];

  return (
    <PageTransition>
      <section className="relative min-h-screen bg-midnight-violet pt-32 pb-24 px-6">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-deep-plum/15 blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-rose-gold/5 blur-[100px]" />

        <div className="max-w-3xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-4">Exclusive Inquiries</p>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">VIP Contact</h1>
            <p className="text-white/35 max-w-lg mx-auto leading-relaxed">
              Connect with our private concierge team for a bespoke experience tailored to your desires.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 glow-rose relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-deep-plum/15 blur-[60px]" />

            <div className="relative space-y-8">
              {fields.map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <label className="flex items-center gap-2 text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                    <field.icon size={14} className="text-rose-gold/60" />
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full glass-input py-3 text-white text-sm font-light"
                  />
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                <label className="flex items-center gap-2 text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                  <MessageSquare size={14} className="text-rose-gold/60" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream Lamborghini experience..."
                  rows={4}
                  required
                  className="w-full glass-input py-3 text-white text-sm font-light resize-none"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-full glass glow-rose hover:glow-rose-intense transition-all duration-500 flex items-center justify-center gap-3 text-rose-gold text-sm tracking-[0.2em] uppercase font-light"
                >
                  {submitted ? (
                    <span className="text-emerald-400">✓ Inquiry Sent Successfully</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit VIP Inquiry
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.form>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {[
              { title: 'Showroom', value: 'Sant\'Agata Bolognese, Italy' },
              { title: 'Concierge', value: '+39 051 681 7611' },
              { title: 'Email', value: 'vip@lamborghini.com' },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <p className="text-rose-gold text-xs tracking-[0.2em] uppercase mb-2">{info.title}</p>
                <p className="text-white/50 text-sm">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
