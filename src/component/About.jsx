import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Zap, Award } from 'lucide-react';
import { about, Achievements } from '../data/portfolioData';

function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };
    const highlights = [
        { icon: Code2, 
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code following best practices and design patterns.'
        },
        { icon: Rocket,
            title: 'Fast Delivery',
            description: 'Agile development with rapid prototyping and iterative improvements.'
        },
        { icon: Zap,
            title: 'Performance Optimization',
            description: 'Optimizing applications for speed and efficiency using modern techniques.'
        },
        { icon: Award,
            title: 'Quality Assurance',
            description: 'Thorough testing and code reviews to ensure high-quality deliverables.'
        },
        ];
        return (
            <section id="about" className="py-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <h2 className="text-5xl font-bold gradient-text mb-4">
                                <span className="gradient-text">About Me</span>
                            </h2>
                            <div className='w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full'></div>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-12 item-start">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="glass p-8 rounded-2xl">
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {about.intro}
                                    </p>
                                    <div className="space-y-3">
                                        {about.highlights.map((highlight, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: 0.5 + index * 0.1}}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="w-2 h-2 bg-neon-cyan mt-2 rounded-full"></div>
                                                <span className="text-gray-300">{highlight}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <motion.div variants={itemVariants} >
                                    <div className="grid grid-cols-2 gap-4">
                                        {highlights.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.3)' }}
                                                className="glass p-6 rounded-2xl text-center cursor-pointer"
                                            >
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center"
                                                >
                                                    <item.icon size={32} className="text-white" />
                                                </motion.div>
                                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-400">{item.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {Achievements.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{scale: 1.05}}
                                            className="glass p-6 rounded-2xl text-center cursor-pointer"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={inView ? { scale: 1 } : {}}
                                                transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                                                className="text-4xl font-bold gradient-text mb-2"
                                            >
                                                {stat.number}
                                            </motion.div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }
export default About;
