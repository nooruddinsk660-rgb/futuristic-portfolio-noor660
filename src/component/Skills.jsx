import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { useInView } from "react-intersection-observer";

function SkillBar({ skill, delay }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.6 }}
            className="space-y-2"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-neon-cyan font-bold">{skill.level}%</span>
            </div>
            <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function SkillCategory({ title, skills, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="glass p-8 rounded-2xl"
        >
            <h3 className="text-2xl font-bold mb-6 gradient-text">{title}</h3>
            <div className="space-y-6">
                {skills?.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={delay + index * 0.1} />
                ))}
            </div>
        </motion.div>
    );
}

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
                ></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-5xl font-bold mb-4"
                        >
                            <span className="gradient-text">Skills</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: 96 } : {}}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"
                        ></motion.div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        <SkillCategory title="Frontend" skills={skills?.frontend} delay={0.2} />
                        <SkillCategory title="Backend" skills={skills?.backend} delay={0.4} />
                        <SkillCategory title="Tools" skills={skills?.tools} delay={0.6} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="mt-12 text-center glass p-6 rounded-2xl max-w-3xl mx-auto"
                    >
                        <p className="text-gray-300 leading-relaxed">
                            I'm constantly learning and adapting to new technologies to stay ahead in the ever-evolving tech landscape.
                            I believe in continuous growth and am always excited to take on new challenges.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;