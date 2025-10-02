import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, Phone, MapPin,Github, Linkedin } from "lucide-react";
import { PersonalInfo } from "../data/portfolioData";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState({type: "", message: ""});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
        setStatus({ type: "success", message: "Message sent successfully! I\'ll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);

        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }, 2000);
};
    const contactInfo = [
        { icon: Mail, label: "Email", value: PersonalInfo.email, link: `mailto:${PersonalInfo.email}` },
        { icon: MapPin, label: "Location", value: PersonalInfo.location, link: `https://www.google.com/maps/search/${encodeURIComponent(PersonalInfo.location)}` },
        { icon: Phone, label: "Phone", value: PersonalInfo.phone, link: `tel:${PersonalInfo.phone}` },
    ]
    const socialLinks = [
        { icon: Github, label: "GitHub", link: PersonalInfo.github },
        { icon: Linkedin, label: "LinkedIn", link: PersonalInfo.linkedin },
    ]
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    >
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.2}}
                                className="text-5xl font-bold mb-4"
                            >
                                <span className="gradient-text">Get in Touch</span>
                            </motion.h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: 96} : {}}
                                transition={{ delay: 0.4, duration: 0.6}}
                                className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"
                            ></motion.div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4}}
                                className="text-gray-400 mt-4 max-w-2xl mx-auto"
                            >
                                Have a project in mind or just want to say hi? Feel free to reach out!. I'm always open to discussing new opportunities, creative ideas, or collaborations, or just having a chat about tech!
                            </motion.p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <motion.div
                               initial={{ opacity: 0, x: -50 }}
                                 animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-8"
                            >
                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            whileHover={{ scale: 1.05, x: 10 }}
                                            className="glass p-6 rounded-2xl flex items-center gap-4 group cursor-pointer"
                                            onClick={() => item.link && window.open(item.link, "_self")}
                                        >
                                        <div className="w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <item.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{item.label}</p>
                                            <p className="text-white font-semibold group-hover:text-neon-cyan transition-colors">{item.value}</p>
                                        </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 }}
                                    className="glass p-8 rounded-2xl"
                                >
                                    <h3 className="text-xl font-bold mb-6 gradient-text">Connect with me</h3>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.2 , rotate: 5, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)"}}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center"
                                                aria-label="social.label"
                                            >
                                                <social.icon size={28} className="text-white" />
                                                </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div
                                  initial={{opacity: 0 }}
                                  animate={inView ? {opacity:1} : {}}
                                  transition={{ delay: 0.8 }}
                className="glass p-6 rounded-2xl flex items-center gap-4"
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <div>
                  <p className="text-white font-semibold">Available for Freelance</p>
                  <p className="text-sm text-gray-400">Open to new opportunities</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Collaboration"
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
                  ></motion.textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-neon-blue to-neon-purple neon-glow hover:shadow-neon-purple/50'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      ></motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-green-500/20 border border-green-500 text-green-400'
                        : 'bg-red-500/20 border border-red-500 text-red-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact