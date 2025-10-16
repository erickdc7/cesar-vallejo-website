import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Quote } from 'lucide-react';

export function Biografia() {
    const sections = [
        {
            titulo: 'Infancia en los Andes',
            contenido: `César Abraham Vallejo Mendoza nació el 16 de marzo de 1892 en Santiago de Chuco, un pequeño pueblo en la sierra norte del Perú, en la región de La Libertad. Fue el menor de once hermanos en una familia mestiza de origen modesto. Su madre, María de los Santos Mendoza, era descendiente de indígenas chimúes, mientras que su padre, Francisco de Paula Vallejo, tenía ascendencia española. Esta mezcla racial y cultural marcaría profundamente su identidad y su obra.`,
            imagen: '/images/infancia.webp'
        },
        {
            titulo: 'Formación y Juventud',
            contenido: `En 1910, Vallejo se trasladó a Trujillo para iniciar sus estudios universitarios en la Universidad Nacional de Trujillo. Allí estudió Letras y Derecho, aunque nunca ejercería la abogacía. Durante estos años formativos, comenzó a escribir sus primeros poemas y entró en contacto con el Grupo Norte, un círculo literario que incluía a poetas e intelectuales como Antenor Orrego, quien se convertiría en su mentor y amigo cercano.`,
            imagen: '/images/unt.webp'
        },
        {
            titulo: 'Lima y la Primera Publicación',
            contenido: `En 1918, Vallejo publicó su primer libro, "Los Heraldos Negros", una obra que, aunque aún contenía resonancias modernistas, ya mostraba la voz única del poeta. El libro fue bien recibido por la crítica, pero no tuvo gran repercusión comercial. Durante su estancia en Lima, Vallejo trabajó como maestro de escuela y frecuentó los círculos literarios de la capital.`,
            imagen: '/images/primera-publicacion-heraldos.webp'
        },
        {
            titulo: 'Prisión y Trilce',
            contenido: `En 1920, Vallejo fue injustamente encarcelado durante tres meses, acusado de participar en el incendio y saqueo de una casa durante una revuelta en Santiago de Chuco. Esta experiencia traumática lo marcó profundamente. En prisión, comenzó a escribir los poemas que conformarían "Trilce" (1922), su obra más experimental y hermética, que rompió radicalmente con las convenciones poéticas de su tiempo.`,
            imagen: '/images/carcel-y-trilce.webp'
        },
        {
            titulo: 'Exilio en París',
            contenido: `En junio de 1923, Vallejo partió hacia Europa, estableciéndose en París, donde viviría el resto de su vida. En la capital francesa, conoció a importantes figuras de la vanguardia artística y literaria, como Juan Gris, Vicente Huidobro y Gerardo Diego. A pesar de su genio poético, Vallejo vivió en condiciones de extrema pobreza, trabajando en diversos oficios para sobrevivir.`,
            imagen: '/images/exilio-paris.webp'
        },
        {
            titulo: 'Compromiso Político',
            contenido: `A finales de la década de 1920, Vallejo se acercó al marxismo y viajó dos veces a la Unión Soviética (1928 y 1929). Estos viajes transformaron su visión del mundo y lo llevaron a comprometerse activamente con las causas sociales. Su poesía adquirió entonces una dimensión política y humanista más pronunciada, sin perder su profundidad lírica.`,
            imagen: '/images/vallejo-rusia.webp'
        },
        {
            titulo: 'Georgette y el Amor',
            contenido: `En 1927, Vallejo conoció a Georgette Marie Philippart, una joven francesa que se convertiría en su compañera inseparable. Se casaron en 1934. Georgette fue su apoyo constante durante los años de privaciones en París y, tras su muerte, dedicó su vida a preservar y difundir la obra del poeta.`,
            imagen: '/images/vallejo-y-georgett.webp'
        },
        {
            titulo: 'La Guerra Civil Española',
            contenido: `El estallido de la Guerra Civil Española en 1936 conmovió profundamente a Vallejo. Viajó a España dos veces durante el conflicto y escribió algunos de sus poemas más emotivos y comprometidos, recopilados en "España, aparta de mí este cáliz". La guerra lo afectó tanto física como emocionalmente, debilitando su ya frágil salud.`,
            imagen: '/images/cesar-vallejo-espana-guerra.webp'
        },
        {
            titulo: 'Muerte en París',
            contenido: `César Vallejo murió en París el 15 de abril de 1938, un viernes santo lluvioso, cumpliendo así de manera casi profética el primer verso de su poema "Piedra negra sobre una piedra blanca": "Me moriré en París con aguacero". Tenía apenas 46 años. Las causas de su muerte nunca se establecieron con claridad, aunque se especula con una combinación de malaria no tratada y desnutrición. Fue enterrado en el cementerio de Montparnasse.`,
            imagen: '/images/vallejo-muerte.webp'
        }
    ];

    const quotes = [
        {
            texto: 'Hermano, hoy estoy en el poyo de la casa, donde nos haces una falta sin fondo.',
            fuente: 'Los Heraldos Negros'
        },
        {
            texto: 'Hay un lugar que yo me sé, en este mundo, nada menos, adonde nunca llegaremos.',
            fuente: 'Trilce'
        },
        {
            texto: 'Un hombre pasa con un pan al hombro... Y yo me digo: ¿Por qué no voy entonces a la iglesia?',
            fuente: 'Poemas Humanos'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#F5F5DC] z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/biografia-hero.webp')`
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4"
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5DC] mb-4">Biografía</h1>
                    <p className="text-xl text-[#D4AF37]">La vida de un poeta universal</p>
                </motion.div>
            </section>

            {/* Contenido Principal */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-5xl mx-auto">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex flex-col md:flex gap-8 items-center`}
                        >
                            <div className="md:w-1/2">
                                <div className="overflow-hidden rounded-lg shadow-xl">
                                    <img
                                        src={section.imagen}
                                        alt={section.titulo}
                                        className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="font-serif text-3xl text-[#1a1a1a] mb-4">{section.titulo}</h2>
                                <p className="text-[#1a1a1a]/80 leading-relaxed">{section.contenido}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Citas Destacadas */}
            <section className="py-20 px-4 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl text-[#F5F5DC] mb-12 text-center"
                    >
                        Versos de su Vida
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {quotes.map((quote, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <Card className="p-8 h-full bg-[#F5F5DC]/5 border-[#D4AF37]/30 border-2">
                                    <Quote className="w-10 h-10 text-[#D4AF37] mb-4" />
                                    <p className="font-serif text-lg text-[#F5F5DC] italic mb-4">{quote.texto}</p>
                                    <p className="text-sm text-[#D4AF37]">— {quote.fuente}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}