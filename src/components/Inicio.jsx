import { motion } from 'motion/react';
import { ArrowRight, Book, Quote, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function Inicio() {
    const obras = [
        {
            titulo: 'Los Heraldos Negros',
            año: '1918',
            descripcion: 'Su primera obra publicada, donde explora el dolor existencial.',
            imagen: '/images/los-heraldos-negros.webp'
        },
        {
            titulo: 'Trilce',
            año: '1922',
            descripcion: 'Obra vanguardista que revolucionó la poesía en español.',
            imagen: '/images/trilce.webp'
        },
        {
            titulo: 'Poemas Humanos',
            año: '1939',
            descripcion: 'Publicado póstumamente, canto a la condición humana.',
            imagen: '/images/poemas-humanos.webp'
        },
        {
            titulo: 'España, aparta de mí este cáliz',
            año: '1939',
            descripcion: 'Poemas sobre la Guerra Civil Española, obra maestra del compromiso.',
            imagen: '/images/espana-aparta-de-mi-este-caliz.webp'
        }
    ];

    const citas = [
        '"Me moriré en París con aguacero, un día del cual tengo ya el recuerdo."',
        '"Hay golpes en la vida, tan fuertes... ¡Yo no sé!"',
        '"Hasta el día en que vuelva, de esta piedra nacerá mi talón definitivo."'
    ];

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#F5F5DC] z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/cesar-vallejo-hero.webp')`
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-20 text-center px-4 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5DC] mb-4">
                            CÉSAR VALLEJO
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-[#D4AF37] mb-2">1892 — 1938</p>
                        <p className="text-lg sm:text-xl text-[#F5F5DC]/90 italic">
                            El Poeta del Dolor Universal
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-[#F5F5DC] text-lg sm:text-xl md:text-2xl font-serif italic max-w-3xl mx-auto"
                    >
                        "Hay golpes en la vida, tan fuertes... ¡Yo no sé!"
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2">
                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Quién fue */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8 text-center">
                            ¿Quién fue César Vallejo?
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />

                        </h2>
                        <div className="space-y-6 text-[#1a1a1a]/80 leading-relaxed">
                            <p>
                                César Abraham Vallejo Mendoza nació el 16 de marzo de 1892 en Santiago de Chuco, una
                                pequeña ciudad andina en el norte del Perú. Poeta, escritor, periodista y ensayista,
                                Vallejo es considerado uno de los más grandes innovadores de la poesía del siglo XX
                                y el máximo exponente de las letras peruanas.
                            </p>
                            <p>
                                Su obra se caracteriza por una profunda experimentación formal y un intenso compromiso
                                con el sufrimiento humano. Desde la angustia existencial de "Los Heraldos Negros"
                                hasta la revolución lingüística de "Trilce", y el humanismo solidario de "Poemas
                                Humanos", Vallejo exploró las dimensiones más profundas de la experiencia humana.
                            </p>
                            <p>
                                Exiliado en Europa desde 1923, vivió principalmente en París, donde conoció a figuras
                                clave de la vanguardia artística y literaria. Su compromiso político con las causas
                                sociales, especialmente durante la Guerra Civil Española, marcó profundamente su
                                última etapa creativa. Murió en París el 15 de abril de 1938, dejando un legado
                                poético que continúa resonando en el mundo entero.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Obras Principales */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-12 text-center"
                    >
                        Obras Principales
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {obras.map((obra, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="h-full"
                            >
                                <Card className="overflow-hidden flex flex-col h-full border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl border-2">
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={obra.imagen}
                                            alt={obra.titulo}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6 bg-[#F5F5DC] flex-grow">
                                        <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{obra.titulo}</h3>
                                        <p className="text-sm text-[#D4AF37] mb-3">{obra.año}</p>
                                        <p className="text-sm text-[#1a1a1a]/70">{obra.descripcion}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Poema Destacado */}
            <section className="py-20 px-4 bg-[#1a1a1a] texture-paper relative overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Quote className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
                        <h2 className="font-serif text-4xl md:text-5xl text-[#D4AF37] mb-3">Poema Destacado</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-[#F5F5DC]/10 to-[#F5F5DC]/5 backdrop-blur-lg border-2 border-[#D4AF37]/40 rounded-2xl p-8 md:p-12 shadow-2xl">
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-2xl" />
                            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-2xl" />
                            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-2xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-2xl" />

                            <div className="relative">
                                <div className="text-center mb-8">
                                    <h3 className="font-serif text-3xl md:text-4xl text-[#D4AF37] mb-3">
                                        Los Heraldos Negros
                                    </h3>
                                    <p className="text-[#F5F5DC]/60 text-sm">De: Los Heraldos Negros (1918)</p>
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
                                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
                                </div>

                                <div className="font-serif text-lg md:text-xl text-[#F5F5DC] leading-relaxed space-y-5 max-w-3xl mx-auto text-center">
                                    <div className="relative">
                                        <p className="italic">Hay golpes en la vida, tan fuertes... ¡Yo no sé!</p>
                                        <p className="italic">Golpes como del odio de Dios; como si ante ellos,</p>
                                        <p className="italic">la resaca de todo lo sufrido</p>
                                        <p className="italic">se empozara en el alma... ¡Yo no sé!</p>
                                    </div>
                                    <div className="relative">
                                        <p className="italic">Son pocos; pero son... Abren zanjas oscuras</p>
                                        <p className="italic">en el rostro más fiero y en el lomo más fuerte.</p>
                                        <p className="italic">Serán tal vez los potros de bárbaros atilas;</p>
                                        <p className="italic">o los heraldos negros que nos manda la Muerte.</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 text-center">
                                    <p className="text-[#F5F5DC]/70 text-sm italic">
                                        Primer poema de su obra homónima, considerado uno de los textos fundamentales de la poesía moderna
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Citas Célebres */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl text-[#1a1a1a] mb-12 text-center"
                    >
                        Citas Célebres
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {citas.map((cita, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-8 h-full border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg bg-[#F5F5DC] border-2">
                                    <Quote className="w-12 h-12 text-[#D4AF37] mb-4" />
                                    <p className="font-serif text-lg text-[#1a1a1a] italic">{cita}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="py-20 px-4 bg-[#1a1a1a]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl text-[#F5F5DC] mb-8"
                    >
                        Explora su Legado
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        {/* 🔗 Enlace a Poemas */}
                        <a href="/poemas" className="w-fit">
                            <Button className="px-8 py-6 text-lg group cursor-pointer">
                                <Book className="w-5 h-5 mr-2" />
                                Explorar sus Poemas
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>

                        {/* 🔗 Enlace a Biografía */}
                        <a href="/biografia" className="w-fit">
                            <Button variant="outline" className="px-8 py-6 text-lg group cursor-pointer">
                                <BookOpen className="w-5 h-5 mr-2 transition-transform" />
                                Conocer su Biografía
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}