import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Award, Globe, BookOpen, Users, Quote, TrendingUp, Music, Film, Palette, Theater } from 'lucide-react';

export function Legado() {
    const influencias = [
        {
            nombre: 'Pablo Neruda',
            pais: 'Chile',
            cita: '"Vallejo es el más grande poeta del siglo XX, en cualquier idioma."',
            imagen: '/images/pablo-neruda.webp'
        },
        {
            nombre: 'Octavio Paz',
            pais: 'México',
            cita: '"Con Vallejo muere, y nace, una edad de la poesía hispanoamericana."',
            imagen: '/images/octavio-paz.webp'
        },
        {
            nombre: 'Roberto Bolaño',
            pais: 'Chile',
            cita: '"Vallejo es el poeta de América, el más grande que ha dado este continente."',
            imagen: '/images/roberto-bolano.webp'
        },
        {
            nombre: 'Mario Vargas Llosa',
            pais: 'Perú',
            cita: '"Vallejo renovó la poesía en español de manera radical."',
            imagen: '/images/mario-vargas-llosa.webp'
        },
        {
            nombre: 'Juan Gelman',
            pais: 'Argentina',
            cita: '"Vallejo nos enseñó que la poesía puede ser absolutamente nueva."',
            imagen: '/images/juan-gelman.webp'
        },
        {
            nombre: 'José Emilio Pacheco',
            pais: 'México',
            cita: '"Trilce es uno de los libros más importantes de la poesía del siglo XX."',
            imagen: '/images/jose-emilio-pacheco.webp'
        }
    ];

    const reconocimientos = [
        'Considerado uno de los máximos exponentes de la vanguardia poética latinoamericana',
        'Su obra ha sido traducida a más de 30 idiomas',
        'Numerosos premios literarios llevan su nombre en Perú y América Latina',
        'Cátedras y centros de estudios dedicados a su obra en universidades de todo el mundo',
        'Conmemoraciones anuales en Santiago de Chuco y París',
        'Casa Museo César Vallejo en su ciudad natal'
    ];

    const paises = [
        'España', 'Francia', 'Italia', 'Alemania', 'Reino Unido', 'Estados Unidos',
        'Brasil', 'Argentina', 'Chile', 'México', 'Colombia', 'Venezuela',
        'Rusia', 'China', 'Japón', 'Corea', 'Turquía', 'Polonia'
    ];

    const cultura = [
        { tipo: 'Música', ejemplos: 'Composiciones sinfónicas y canciones inspiradas en sus poemas', icono: Music },
        { tipo: 'Teatro', ejemplos: 'Obras teatrales basadas en su vida y poesía', icono: Theater },
        { tipo: 'Cine', ejemplos: 'Documentales y películas sobre su vida', icono: Film },
        { tipo: 'Artes Visuales', ejemplos: 'Exposiciones y obras plásticas inspiradas en su poesía', icono: Palette }
    ];

    const estadisticas = [
        { titulo: 'Libros publicados', valor: '1000+', descripcion: 'Ediciones de su obra en todo el mundo' },
        { titulo: 'Tesis académicas', valor: '500+', descripcion: 'Estudios dedicados a su obra' },
        { titulo: 'Poemas más citados', valor: '50+', descripcion: 'En antologías de poesía universal' },
        { titulo: 'Idiomas', valor: '30+', descripcion: 'Traducciones de su obra' }
    ];

    const citasContemporaneas = [
        { autor: 'Raúl Zurita', texto: '"Vallejo es el poeta de los sin voz, quien dignificó el sufrimiento humano."', año: '2018' },
        { autor: 'Eduardo Chirinos', texto: '"Trilce sigue siendo un libro del futuro, cada generación lo descubre de nuevo."', año: '2015' },
        { autor: 'Carmen Ollé', texto: '"Vallejo es la conciencia poética de América Latina."', año: '2020' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#F5F5DC] z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:`url('/images/legado-hero.webp')`,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4"
                >
                    {/* <Award className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" /> */}
                    <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5DC] mb-4">Legado e Influencia</h1>
                    <p className="text-xl text-[#D4AF37]">Un poeta para la eternidad</p>
                </motion.div>
            </section>

            {/* Influencia Literaria */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <Users className="w-10 h-10 text-[#D4AF37]" />
                        <h2 className="font-serif text-4xl text-[#1a1a1a]">Influencia Literaria</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {influencias.map((poeta, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="p-8 h-full bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl group">
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-lg group-hover:scale-105 transition-all duration-300">
                                                <img
                                                    src={poeta.imagen}
                                                    alt={poeta.nombre}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                                                <Quote className="w-5 h-5 text-[#1a1a1a]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mb-4">
                                        <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">{poeta.nombre}</h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                                            <p className="text-sm text-[#D4AF37]">{poeta.pais}</p>
                                            <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                                        </div>
                                    </div>

                                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />

                                    <p className="text-sm text-[#1a1a1a]/70 italic text-center leading-relaxed">
                                        {poeta.cita}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- puedes mantener el resto igual al diseño original --- */}


  {/* Reconocimientos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">Reconocimientos</h2>
            <p className="text-[#1a1a1a]/60 mt-4 max-w-2xl mx-auto">
              Honores y distinciones que celebran la trascendencia de su obra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reconocimientos.map((reconocimiento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-[#F5F5DC] to-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl group relative overflow-hidden flex flex-col">
                  {/* Fondo decorativo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative flex-1 flex flex-col">
                    {/* Número decorativo */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-serif text-2xl text-[#1a1a1a]">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
                    </div>
                    
                    {/* Contenido */}
                    <p className="text-[#1a1a1a] leading-relaxed flex-1">
                      {reconocimiento}
                    </p>
                    
                    {/* Ícono decorativo - siempre abajo derecha */}
                    <div className="mt-4 flex justify-end">
                      <Award className="w-5 h-5 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-300" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



{/* Traducciones */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12 justify-center"
          >
            <Globe className="w-10 h-10 text-[#D4AF37]" />
            <h2 className="font-serif text-4xl text-[#F5F5DC]">Un Poeta Universal</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[#F5F5DC]/80 mb-12 max-w-3xl mx-auto"
          >
            La obra de César Vallejo ha sido traducida a más de 30 idiomas, alcanzando lectores en
            todos los continentes. Su poesía trasciende fronteras lingüísticas y culturales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {paises.map((pais, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 bg-[#D4AF37]/20 text-[#F5F5DC] rounded-full text-sm border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-all duration-300 cursor-default"
              >
                {pais}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* En la Cultura */}
      <section className="py-20 px-4 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BookOpen className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">Vallejo en la Cultura</h2>
            <p className="text-[#1a1a1a]/60 mt-4 max-w-2xl mx-auto">
              Su influencia trasciende la literatura y se manifiesta en todas las artes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultura.map((item, index) => {
              const IconComponent = item.icono;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="p-8 h-full bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl text-center group relative overflow-hidden flex flex-col">
                    {/* Fondo decorativo animado */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex-1 flex flex-col">
                      {/* Ícono en blanco y negro */}
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#F5F5DC] to-white rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37]">
                          <IconComponent className="w-12 h-12 text-[#1a1a1a] group-hover:text-[#D4AF37] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      {/* Separador decorativo */}
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
                      
                      {/* Título */}
                      <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 group-hover:text-[#D4AF37] transition-colors">
                        {item.tipo}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="text-sm text-[#1a1a1a]/70 leading-relaxed flex-1">
                        {item.ejemplos}
                      </p>
                      
                      {/* Elemento decorativo inferior - siempre abajo centrado */}
                      <div className="mt-6 flex justify-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors delay-75" />
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors delay-150" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estudios Académicos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TrendingUp className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">Impacto Académico</h2>
            <p className="text-[#1a1a1a]/60 mt-4 max-w-2xl mx-auto">
              Cifras que demuestran la vigencia y relevancia de su obra en el mundo académico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl overflow-hidden group relative flex flex-col">
                  {/* Fondo decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 text-center flex-1 flex flex-col">
                    {/* Icono decorativo superior */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37]/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Número destacado */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center min-w-32 h-28 px-4 bg-gradient-to-br from-[#F5F5DC] to-white border-2 border-[#D4AF37]/30 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                        <span className="font-serif text-4xl text-[#D4AF37] whitespace-nowrap">{stat.valor}</span>
                      </div>
                    </div>
                    
                    {/* Separador decorativo */}
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
                    
                    {/* Título */}
                    <h3 className="text-[#1a1a1a] mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {stat.titulo}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed flex-1">
                      {stat.descripcion}
                    </p>
                    
                    {/* Elemento decorativo inferior - siempre abajo centrado */}
                    <div className="mt-6 flex justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors delay-75" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors delay-150" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




 {/* Vallejo Hoy */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-[#F5F5DC] mb-12 text-center"
          >
            Vallejo Hoy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {citasContemporaneas.map((cita, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-[#F5F5DC]/5 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 flex flex-col">
                  <Quote className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <p className="font-serif text-lg text-[#F5F5DC] italic mb-4 flex-1">{cita.texto}</p>
                  <div className="flex justify-between items-center mt-auto pt-2 border-t border-[#D4AF37]/20">
                    <p className="text-sm text-[#D4AF37]">— {cita.autor}</p>
                    <p className="text-xs text-[#F5F5DC]/60">{cita.año}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[#F5F5DC]/80 max-w-3xl mx-auto leading-relaxed">
              A más de 85 años de su muerte, César Vallejo sigue siendo una presencia viva en la
              poesía contemporánea. Su obra continúa siendo estudiada, traducida, leída y admirada
              por nuevas generaciones de lectores en todo el mundo. Su voz única sigue resonando con
              la misma fuerza, recordándonos la capacidad de la poesía para dignificar el
              sufrimiento humano y celebrar nuestra humanidad compartida.
            </p>
          </motion.div>
        </div>
      </section>





        </div>
    );
}
