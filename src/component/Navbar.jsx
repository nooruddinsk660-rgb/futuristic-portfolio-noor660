import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#Home' },
        { name: 'About', href: '#About' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Skills', href: '#Skills' },
        { name: 'Contact', href: '#Contact' },
    ];

    return (
        <motion.nav
            initial={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'glass shadow-lg shadow-neon-blue/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#Home"
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        &lt;Noor.dev /&gt;
                    </motion.a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-grey-300 hover:text-neon-blue transition-colors relative group"
                                whileHover={{ scale: 1.1 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                        <motion.a
                            href="#Contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold neon-glow hover:from-neon-purple/50 transition-all"
                        >
                            Hire Me
                        </motion.a>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-neon-blue"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 glass rounded-lg p-4 space-y-3"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-grey-300 hover:text-neon-blue transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#Contact"
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-center bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold"
                            >
                                Hire Me
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;