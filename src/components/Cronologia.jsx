import { motion } from "motion/react";
import { Calendar, MapPin, Book, Heart, Plane, Award, Users, Flag } from "lucide-react";

export function Cronologia() {
    const eventos = [
        {
            año: "1892",
            fecha: "16 de marzo",
            titulo: "Nacimiento",
            descripcion:
                "Nace César Abraham Vallejo Mendoza en Santiago de Chuco, pequeña ciudad andina en el norte de Perú. Es el menor de once hermanos en una familia mestiza.",
            icono: Heart,
            imagen: "/images/santiago-de-chuco.webp",
        },
        {
            año: "1910",
            fecha: "Septiembre",
            titulo: "Universidad de Trujillo",
            descripcion:
                "Ingresa a la Universidad Nacional de Trujillo para estudiar Letras y Derecho. Conoce al Grupo Norte, círculo literario que incluye a Antenor Orrego.",
            icono: Book,
            imagen: "/images/unt.webp",
        },
        {
            año: "1915",
            fecha: "Diciembre",
            titulo: "Muerte de su madre",
            descripcion:
                "Fallece su madre, María de los Santos Mendoza. Este evento lo marca profundamente y se refleja en varios de sus poemas.",
            icono: Heart,
            imagen: "/images/vallejo-muerte-madre.webp",
        },
        {
            año: "1918",
            fecha: "Agosto",
            titulo: 'Publica "Los Heraldos Negros"',
            descripcion:
                "Aparece su primer libro de poemas, donde explora el dolor existencial y la angustia. La obra recibe buenas críticas pero poca atención comercial.",
            icono: Book,
            imagen: "/images/cronologia-heraldos-negros.webp",
        },
        {
            año: "1920",
            fecha: "Agosto - Noviembre",
            titulo: "Encarcelamiento",
            descripcion:
                'Es injustamente encarcelado durante 112 días, acusado de participar en disturbios. En prisión comienza a escribir los poemas de "Trilce".',
            icono: MapPin,
            imagen: "/images/carcel-y-trilce.webp",
        },
        {
            año: "1922",
            fecha: "Octubre",
            titulo: 'Publica "Trilce"',
            descripcion:
                "Aparece su obra más experimental y vanguardista, que rompe radicalmente con las convenciones poéticas. La obra desconcierta a críticos y lectores.",
            icono: Book,
            imagen: "/images/cronologia-trilce.webp",
        },
        {
            año: "1923",
            fecha: "Junio",
            titulo: "Parte a Europa",
            descripcion:
                "Viaja a París con una beca. Decide quedarse en Europa y nunca regresará al Perú. Comienza una etapa de pobreza pero también de intensa actividad intelectual.",
            icono: Plane,
            imagen: "/images/exilio-paris.webp",
        },
        {
            año: "1927",
            fecha: "Octubre",
            titulo: "Conoce a Georgette",
            descripcion:
                "Conoce a Georgette Marie Philippart, joven francesa que se convertirá en su compañera y esposa. Ella será su apoyo constante hasta su muerte.",
            icono: Heart,
            imagen: "/images/cronologia-vallejo-y-georgette.webp",
        },
        {
            año: "1928",
            fecha: "Octubre - Diciembre",
            titulo: "Primer viaje a la URSS",
            descripcion:
                "Viaja por primera vez a la Unión Soviética. Queda impresionado por el proyecto socialista y se adhiere al marxismo.",
            icono: Flag,
            imagen: "/images/vallejo-rusia.webp",
        },
        {
            año: "1929",
            fecha: "Septiembre - Diciembre",
            titulo: "Segundo viaje a la URSS",
            descripcion:
                'Realiza su segundo viaje a Rusia. Sus crónicas sobre estos viajes se publicarán como "Rusia en 1931".',
            icono: Plane,
            imagen: "/images/vallejo-rusia.webp",
        },
        {
            año: "1931",
            fecha: "Julio",
            titulo: 'Publica "El tungsteno"',
            descripcion:
                "Aparece su novela de denuncia social sobre la explotación minera en Perú. Refleja su compromiso político con los trabajadores.",
            icono: Book,
            imagen: "/images/el-tungsteno.webp",
        },
        {
            año: "1932",
            fecha: "Año completo",
            titulo: "Expulsión de Francia",
            descripcion:
                "Es expulsado de Francia por sus actividades políticas. Pasa varios meses en España antes de poder regresar a París.",
            icono: MapPin,
            imagen: "/images/exilio-paris.webp",
        },
        {
            año: "1934",
            fecha: "Octubre",
            titulo: "Matrimonio con Georgette",
            descripcion:
                "Se casa con Georgette Philippart en una ceremonia civil. Ella será su viuda y la guardiana de su legado literario.",
            icono: Heart,
            imagen: "/images/cronologia-vallejo-y-georgette.webp",
        },
        {
            año: "1936",
            fecha: "Julio",
            titulo: "Estallido de la Guerra Civil Española",
            descripcion:
                "La Guerra Civil Española lo conmueve profundamente. Se compromete activamente con la causa republicana.",
            icono: Flag,
            imagen: "/images/cesar-vallejo-espana-guerra.webp",
        },
        {
            año: "1937",
            fecha: "Julio - Septiembre",
            titulo: "Segundo viaje a España",
            descripcion:
                'Viaja nuevamente a España en plena guerra. Escribe los poemas de "España, aparta de mí este cáliz". La experiencia debilita su salud.',
            icono: Plane,
            imagen: "/images/cesar-vallejo-espana-guerra.webp",
        },
        {
            año: "1938",
            fecha: "15 de abril",
            titulo: "Muerte en París",
            descripcion:
                'Muere en París un viernes lluvioso, cumpliendo así su profecía poética. Sus obras póstumas "Poemas Humanos" y "España, aparta de mí este cáliz" se publican al año siguiente.',
            icono: Heart,
            imagen: "/images/vallejo-muerte.webp",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 from-0% via-black/60 via-50% to-[#F5F5DC] to-100% z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/cronologia-hero.webp')`,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4"
                >
                    {/* <Calendar className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" /> */}
                    <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5DC] mb-4">Cronología</h1>
                    <p className="text-xl text-[#D4AF37]">1892 — 1938: Una vida en el tiempo</p>
                </motion.div>
            </section>








            {/* Timeline */}
            {/* Timeline */}
            {/* Timeline */}


            {/* Timeline */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {eventos.map((evento, index) => {
                            const Icon = evento.icono;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.05,
                                    }}
                                    className="relative"
                                >
                                    {/* Card principal */}
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
                                        <div className="md:flex">
                                            {/* Sección del año - lado izquierdo */}
                                            <div className="md:w-1/4 bg-gradient-to-br from-[#F5F5DC] via-[#F5F5DC] to-[#e8e8d0] relative overflow-hidden flex items-center justify-center p-8 border-[#D4AF37]">
                                                {/* Patrón decorativo de fondo */}
                                                <div className="absolute inset-0 opacity-5">
                                                    <div
                                                        className="absolute inset-0"
                                                        style={{
                                                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.1) 10px, rgba(212, 175, 55, 0.1) 20px)`,
                                                        }}
                                                    />
                                                </div>

                                                {/* Ornamentos decorativos en las esquinas */}
                                                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/40" />
                                                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/40" />
                                                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/40" />
                                                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/40" />

                                                {/* Marco interno decorativo */}
                                                <div className="absolute inset-6 border border-[#D4AF37]/20 rounded-lg" />

                                                {/* Contenido del año */}
                                                <div className="relative text-center">
                                                    {/* Icono */}
                                                    <motion.div
                                                        transition={{ duration: 0.6 }}
                                                        className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                                                    >
                                                        <Icon className="w-10 h-10 text-white" />
                                                    </motion.div>

                                                    {/* Año */}
                                                    <div className="font-serif text-5xl text-[#1a1a1a] mb-3 font-bold">
                                                        {evento.año}
                                                    </div>

                                                    {/* Línea decorativa con ornamentos */}
                                                    <div className="flex items-center justify-center gap-2 mb-2">
                                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                                                        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                                                    </div>

                                                    {/* Pequeño ornamento inferior */}
                                                    <div className="text-[#D4AF37] text-xs tracking-widest uppercase opacity-60">
                                                        • • •
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Contenido principal - lado derecho */}
                                            <div className="md:w-3/4 flex flex-col">
                                                {/* Imagen con overlay */}
                                                <div className="relative h-64 overflow-hidden">
                                                    <img
                                                        src={evento.imagen}
                                                        alt={evento.titulo}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent" />

                                                    {/* Fecha superpuesta */}
                                                    <div className="absolute bottom-4 left-8 flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                                                        <span className="text-[#D4AF37] text-sm tracking-wide uppercase font-semibold">
                                                            {evento.fecha}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Texto */}
                                                <div className="p-8 flex-1 flex flex-col bg-gradient-to-br from-white to-[#F5F5DC]/30">
                                                    {/* Título */}
                                                    <h3 className="font-serif text-3xl text-[#1a1a1a] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                                                        {evento.titulo}
                                                    </h3>

                                                    {/* Separador elegante */}
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent flex-1" />
                                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                                                        <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                                                    </div>

                                                    {/* Descripción */}
                                                    <p className="text-[#1a1a1a]/80 leading-relaxed text-base">
                                                        {evento.descripcion}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conector decorativo entre cards (excepto el último) */}
                                    {index < eventos.length - 1 && (
                                        <div className="hidden md:flex justify-center py-6">
                                            <motion.div
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: index * 0.05 + 0.3,
                                                }}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/50" />
                                                <div className="w-3 h-3 bg-[#D4AF37] rounded-full shadow-lg" />
                                                <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]/20" />
                                            </motion.div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>










            {/* Estadísticas */}
            <section className="py-20 px-4 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl text-[#F5F5DC] mb-12 text-center"
                    >
                        Una Vida en Números
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* 👆 Cambié de flex a grid */}
                        {[
                            { numero: "46", label: "Años de vida" },
                            { numero: "15", label: "Años en Europa" },
                            { numero: "4", label: "Libros de poesía" },
                            { numero: "∞", label: "Versos inmortales" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-3">
                                    {/* 👆 Cambié de text-6xl md:text-7xl a text-5xl md:text-6xl */}
                                    {stat.numero}
                                </div>
                                <div className="text-[#F5F5DC]/80">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



        </div>
    );
}
