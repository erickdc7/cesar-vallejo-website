import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, FileText, Theater, Newspaper } from "lucide-react";

export function Obra() {
    const poemarios = [
        {
            titulo: "Los Heraldos Negros",
            año: "1918",
            descripcion:
                "Primera obra poética de Vallejo, donde explora el dolor existencial, la angustia familiar y la búsqueda espiritual. Aunque aún conserva resonancias modernistas, ya muestra la voz única del poeta.",
            imagen:
                "/images/los-heraldos-negros.webp",
            temas: ["Dolor existencial", "Familia", "Muerte", "Religión"],
        },
        {
            titulo: "Trilce",
            año: "1922",
            descripcion:
                "Obra revolucionaria y hermética que rompió todas las convenciones poéticas de su tiempo. Escrita en parte durante su encarcelamiento, representa la máxima expresión de la vanguardia en lengua española.",
            imagen:
                "/images/trilce.webp",
            temas: ["Experimentación", "Prisión", "Tiempo", "Vanguardia"],
        },
        {
            titulo: "Poemas Humanos",
            año: "1939",
            descripcion:
                "Publicado póstumamente, es un canto profundo a la condición humana. Combina el compromiso social con una reflexión filosófica sobre la existencia, el sufrimiento y la solidaridad.",
            imagen:
                "/images/poemas-humanos.webp",
            temas: ["Humanismo", "Solidaridad", "Existencia", "Compromiso social"],
        },
        {
            titulo: "España, aparta de mí este cáliz",
            año: "1939",
            descripcion:
                "Conjunto de poemas sobre la Guerra Civil Española, considerado una de las mejores obras poéticas sobre la guerra. Publicado póstumamente, es un testimonio conmovedor del compromiso político del poeta.",
            imagen:
                "/images/espana-aparta-de-mi-este-caliz.webp",
            temas: ["Guerra", "España", "Compromiso político", "Solidaridad"],
        },
    ];

    const prosa = [
        {
            titulo: "Escalas melografiadas",
            año: "1923",
            descripcion:
                "Libro de estampas y relatos breves que mezcla autobiografía y ficción. Muestra el interés de Vallejo por la experimentación en prosa.",
            tipo: "Relatos",
        },
        {
            titulo: "Fabla salvaje",
            año: "1923",
            descripcion:
                "Novela corta de carácter expresionista que narra una historia de amor y violencia en los Andes peruanos.",
            tipo: "Novela corta",
        },
        {
            titulo: "El tungsteno",
            año: "1931",
            descripcion:
                "Novela de denuncia social que retrata la explotación de los trabajadores mineros en el Perú. Refleja su compromiso con las causas sociales.",
            tipo: "Novela",
        },
        {
            titulo: "Rusia en 1931",
            año: "1931",
            descripcion:
                "Crónicas de sus viajes a la Unión Soviética, donde describe con entusiasmo el proyecto socialista.",
            tipo: "Crónicas",
        },
    ];

    const teatro = [
        {
            titulo: "Lock-Out",
            año: "1930",
            descripcion:
                "Drama social sobre conflictos laborales y lucha de clases. Explora las tensiones entre trabajadores y empresarios en el contexto de huelgas y protestas obreras, reflejando el compromiso político de Vallejo con las causas sociales.",
        },
        {
            titulo: "Entre las dos orillas corre el río",
            año: "1930",
            descripcion:
                "Obra teatral inédita en vida del autor que aborda las contradicciones entre el mundo andino y occidental. Un texto profundo que cuestiona la identidad cultural y las tensiones sociales de su época.",
        },
        {
            titulo: "La piedra cansada",
            año: "1937",
            descripcion:
                "Drama que mezcla elementos de la cultura andina con preocupaciones sociales contemporáneas. Basada en una leyenda inca, la obra fusiona mitología ancestral con crítica social, creando un puente entre tradición y modernidad.",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#F5F5DC] z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/obra-hero.webp')`,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4"
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5DC] mb-4">
                        Obra Literaria
                    </h1>
                    <p className="text-xl text-[#D4AF37]">
                        El legado escrito de César Vallejo
                    </p>
                </motion.div>
            </section>

            {/* Poemarios */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <BookOpen className="w-10 h-10 text-[#D4AF37]" />
                        <h2 className="font-serif text-4xl text-[#1a1a1a]">Poemarios</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {poemarios.map((obra, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Card className="overflow-hidden h-full border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row">
                                    {/* Imagen */}
                                    <div className="md:w-1/3 h-64 md:h-auto">
                                        <img
                                            src={obra.imagen}
                                            alt={obra.titulo}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Contenido */}
                                    <div className="md:w-2/3 p-6 bg-white flex flex-col">
                                        <div className="flex-1">
                                            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">{obra.titulo}</h3>
                                            <p className="text-[#D4AF37] mb-4">{obra.año}</p>
                                            <p className="text-[#1a1a1a]/80 mb-3 leading-relaxed">{obra.descripcion}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {obra.temas.map((tema, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-3 py-1 bg-[#D4AF37]/10 text-[#1a1a1a] rounded-full"
                                                    >
                                                        {tema}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a href="/poemas" className="mt-6">
                                            <Button
                                                variant="outline"
                                                className="border-[#D4AF37] hover:text-white border bg-background text-foreground hover:bg-accent dark:bg-input/30 dark:border-input dark:hover:bg-input/50 has-[>svg]:px-3 cursor-pointer w-full"
                                            >
                                                Ver Poemas
                                            </Button>
                                        </a>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Prosa */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <FileText className="w-10 h-10 text-[#D4AF37]" />
                        <h2 className="font-serif text-4xl text-[#1a1a1a]">Prosa</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {prosa.map((obra, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="h-full bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                                    <div className="relative bg-gradient-to-br from-[#F5F5DC] to-[#F5F5DC]/80 p-6 border-b border-[#D4AF37]/20">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full -mr-12 -mt-12" />
                                        <div className="relative flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-5 h-5 text-[#D4AF37]" />
                                                <span className="text-sm text-[#1a1a1a]/70">
                                                    {obra.tipo}
                                                </span>
                                            </div>
                                            <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                                                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-serif text-xl text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors">
                                            {obra.titulo}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                                            <p className="text-sm text-[#D4AF37]">{obra.año}</p>
                                        </div>
                                        <div className="w-12 h-0.5 bg-[#D4AF37] mb-4" />
                                        <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                                            {obra.descripcion}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teatro */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <Theater className="w-10 h-10 text-[#D4AF37]" />
                        <h2 className="font-serif text-4xl text-[#1a1a1a]">Teatro</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teatro.map((obra, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl overflow-hidden group relative flex flex-col">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative p-8 border-b-2 border-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors h-[240px] flex flex-col">
                                        <div className="mb-4 relative">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#F5F5DC] to-white border-2 border-[#D4AF37]/30 rounded-2xl flex items-center justify-center group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-300 shadow-lg">
                                                <Theater
                                                    className="w-8 h-8 text-[#D4AF37]"
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37]/20 rounded-full group-hover:scale-150 transition-transform duration-500" />
                                        </div>

                                        <div className="flex-1 flex items-center">
                                            <h3 className="font-serif text-2xl text-[#1a1a1a] leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                                                {obra.titulo}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                                            <span className="text-sm text-[#D4AF37] font-serif">
                                                {obra.año}
                                            </span>
                                            <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37] to-transparent" />
                                        </div>
                                    </div>

                                    <div className="relative p-8 flex-1 flex flex-col">
                                        <p className="text-sm text-[#1a1a1a]/70 leading-relaxed flex-1">
                                            {obra.descripcion}
                                        </p>
                                        <div className="mt-6 flex justify-end gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-colors duration-300 delay-75" />
                                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-colors duration-300 delay-150" />
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Periodismo */}
            <section className="py-20 px-4 bg-[#1a1a1a]">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Newspaper className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
                        <h2 className="font-serif text-4xl text-[#F5F5DC] mb-6">
                            Periodismo y Ensayo
                        </h2>
                        <p className="text-[#F5F5DC]/80 leading-relaxed mb-8">
                            Además de su obra poética y narrativa, César Vallejo fue un
                            prolífico periodista y ensayista. Escribió cientos de artículos
                            sobre literatura, arte, política y sociedad para diversos
                            periódicos y revistas de Europa y América Latina. Sus crónicas
                            desde París y sus reflexiones sobre la situación política
                            internacional constituyen un testimonio valioso de su época.
                        </p>
                        <p className="text-[#F5F5DC]/80 leading-relaxed">
                            Entre sus trabajos periodísticos destacan sus crónicas sobre la
                            Rusia soviética, sus artículos sobre la Guerra Civil Española, y
                            sus reflexiones sobre el arte y la literatura contemporáneos.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
