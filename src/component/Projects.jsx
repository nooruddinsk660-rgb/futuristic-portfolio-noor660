import { motion } from "framer-motion";
import { Tilt } from "react-parallax-tilt";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

function ProjectCard({ project }) {
    return (
        <Tilt
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.05}
    transitionSpeed={500}
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareColor="white"
    glarePosition="all"
    className="w-full"
>
    <div className="glass rounded-2xl overflow-hidden group h-full">
        <div className="relative h-56 overflow-hidden">
            <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-multiply`}
            ></div>

            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-dark-900/90 opacity-0 group-hover:opacity-100 transition-transform duration-300 flex items-center justify-center gap-4">
                <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center neon-glow"
                >
                    <ExternalLink size={20} />
                </motion.a>

                <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-grey-700 transition-colors"
                >
                    <Github size={20} />
                </motion.a>
            </div>
        </div>

        <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
                {project.techstack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs bg-dark-800 text-neon-cyan rounded-full border border-neon-cyan/30"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="space-y-2 pt-2">
                {project.features.slice(0, 3).map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-400"
                    >
                        <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</Tilt>
    );
}
function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section id="projects" className="py-20 relative hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 reltive z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0}}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6}}
                    >
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.2}}
                                className="text-5xl font-bold mb-4 text-white"
                            >
                                <span className="gradient-text">Featured Projects</span>
                            </motion.h2>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={inView ? { width: 96} : {}}
                                transition={{ delay: 0.4, duration: 0.6}}
                                className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"
                            ></motion.div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6}}
                                className="text-gray-400 mt-4 max-w-2xl mx-auto"
                            >
                                Here are some of my recent projects that showcase my skills in full-stack development, problem-solving, and creating engaging user experiences.
                            </motion.p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ProjectCard key={projects.id} project={projects} index={index} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="text-center mt-12"
                        >
                            <motion.a
                                href="https://github.com/nooruddinsk660-rgb"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full font-semibold border border-neon-blue hover:bg-neon-blue/10 transition-all"
                            >
                                <Github size={20} />
                                View More on GitHub
                            </motion.a>
                        </motion.div>
                        </motion.div>
            </div>
            </section>
    );
}
export default Projects;