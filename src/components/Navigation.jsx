import { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('inicio');

    const navItems = [
        { id: 'inicio', label: 'Inicio', href: '/' },
        { id: 'biografia', label: 'Biografía', href: '/biografia' },
        { id: 'obra', label: 'Obra', href: '/obra' },
        { id: 'poemas', label: 'Poemas', href: '/poemas' },
        { id: 'cronologia', label: 'Cronología', href: '/cronologia' },
        { id: 'legado', label: 'Legado', href: '/legado' },
        { id: 'multimedia', label: 'Multimedia', href: '/multimedia' }
    ];

    useEffect(() => {
        // Detectar página actual
        const path = window.location.pathname;
        if (path === '/') {
            setCurrentPage('inicio');
        } else if (path === '/biografia') {
            setCurrentPage('biografia');
        } else if (path === '/obra') {
            setCurrentPage('obra');
        } else if (path === '/poemas') {
            setCurrentPage('poemas');
        } else if (path === '/cronologia') {
            setCurrentPage('cronologia');
        } else if (path === '/legado') {
            setCurrentPage('legado');
        } else if (path === '/multimedia') {
            setCurrentPage('multimedia');
        }

        // Ajustar threshold del scroll
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.2;
            setIsScrolled(window.scrollY > heroHeight);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a]/50 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className="font-serif text-2xl lg:text-3xl tracking-wider text-[#D4AF37] hover:text-[#F5F5DC] transition-colors duration-300"
                    >
                        VALLEJO
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`relative text-sm tracking-wide transition-colors duration-300 ${currentPage === item.id
                                    ? 'text-[#D4AF37] font-medium'
                                    : 'text-[#D4AF37]/80 hover:text-[#D4AF37] font-medium'
                                    }`}
                            >
                                {item.label}
                                {currentPage === item.id && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        animate={{ scaleX: 1, opacity: 1 }}
                                        exit={{ scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6 " />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#1a1a1a] border-t border-[#D4AF37]/20"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block w-full text-left py-2 transition-colors duration-300 ${currentPage === item.id
                                        ? 'text-[#D4AF37] font-semibold'
                                        : 'text-[#F5F5DC] hover:text-[#D4AF37]'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}