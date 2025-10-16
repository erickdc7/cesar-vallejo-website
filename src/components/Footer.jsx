import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
    const navLinks = [
        { id: 'inicio', label: 'Inicio', href: '/' },
        { id: 'biografia', label: 'Biografía', href: '/biografia' },
        { id: 'obra', label: 'Obra', href: '/obra' },
        { id: 'poemas', label: 'Poemas', href: '/poemas' },
        { id: 'cronologia', label: 'Cronología', href: '/cronologia' },
        { id: 'legado', label: 'Legado', href: '/legado' },
        { id: 'multimedia', label: 'Multimedia', href: '/multimedia' }
    ];

    return (
        <footer className="bg-[#1a1a1a] text-[#F5F5DC] border-t border-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo y descripción */}
                    <div>
                        <h3 className="font-serif text-3xl text-[#D4AF37] mb-4">VALLEJO</h3>
                        <p className="text-sm text-[#F5F5DC]/70 leading-relaxed">
                            César Abraham Vallejo Mendoza (1892-1938), uno de los más grandes poetas
                            del siglo XX y máximo exponente de las letras peruanas.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="font-semibold mb-4 text-[#D4AF37]">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[#F5F5DC]/70 hover:text-[#D4AF37] transition-colors duration-300 block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div>
                        <h4 className="font-semibold mb-4 text-[#D4AF37]">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 flex items-center justify-center bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1a1a1a] rounded-full transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 flex items-center justify-center bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1a1a1a] rounded-full transition-all duration-300"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 flex items-center justify-center bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1a1a1a] rounded-full transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Email"
                                className="w-10 h-10 flex items-center justify-center bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1a1a1a] rounded-full transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-sm text-[#F5F5DC]/70 mt-6 italic font-serif">
                            "Hay golpes en la vida, tan fuertes... ¡Yo no sé!"
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#D4AF37]/20 mt-12 pt-8 text-center">
                    <p className="text-sm text-[#F5F5DC]/50">
                        © {new Date().getFullYear()} César Vallejo. Sitio web conmemorativo. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}