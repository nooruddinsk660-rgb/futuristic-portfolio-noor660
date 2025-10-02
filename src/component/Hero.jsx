import { motion } from "framer-motion";
import { TypeAnimation } from "./TypeAnimation";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { PersonalInfo } from "../data/PersonalInfo";

function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-neon-cyan text-lg"
                        >
                            Hi, my name is
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl md:text-7xl font-bold gradient-text"
                        >
                            {PersonalInfo.name}
                        </motion.h1>
                        <div className="text-4xl md:text-4xl font-bold text-gray-300">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Mern Stack Expert',
                                    2000,
                                    'UI/UX Enthusiast',
                                    2000,
                                    'Problem Solver',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl text-gray-400 max-w-xl"
                        >
                            {PersonalInfo.tagline}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full font-semibold neon-glow"
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href={PersonalInfo.resumeLink}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 glass rounded-full font-semibold border border-neon-blue hover:bg-neon-blue/10 transition all"
                            >
                                Download Resume
                            </motion.a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 pt-4"
                        >
                            {[
                                { icon: Github, link: PersonalInfo.github },
                                { icon: Linkedin, link: PersonalInfo.linkedin },
                                { icon: Mail, link: `mailto:${PersonalInfo.email}` },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0 }}
                                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-neon-cyan hover:text-neon-blue transition all"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute -inset-0 rounded-full border-2 border-dashed border-neon-blue/30"
                                style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
                            ></motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-72 h-72 md:w-96 md:h-96"
                            >
                                <img
                                    src={PersonalInfo.profileImage}
                                    alt={PersonalInfo.name}
                                    className="relative w-full h-full rounded-full object-cover border-4 border-neon-blue/30 shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col items-center text-neon-cyan gap-2 cursor-pointer"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="text-sm">Scroll Down</span>
                    <ArrowDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}
export default Hero;
