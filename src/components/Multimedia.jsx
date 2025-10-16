import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Play, Volume2, FileText, Image as ImageIcon, X, ExternalLink, Pause } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

export function Multimedia() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [playingAudio, setPlayingAudio] = useState(null);
    const [audioProgress, setAudioProgress] = useState(0);
    const audioRefs = useRef({});


    /* prueba1111 que desaparezca esto con control + z */

    // Aquí defines tus arrays: fotos, videos, audios, documentos
    const fotos = [
        {
            url: '/images/multimedia-vallejo-paris.webp',
            titulo: 'César Vallejo, París 1930',
            descripcion: 'Retrato del poeta durante su exilio en París'
        },
        {
            url: '/images/multimedia-vallejo-joven.webp',
            titulo: 'Vallejo joven',
            descripcion: 'Fotografía de juventud en Trujillo'
        },
        {
            url: '/images/exilio-paris.webp',
            titulo: 'París, ciudad de exilio',
            descripcion: 'La ciudad donde vivió sus últimos años'
        },
        {
            url: '/images/multimedia-manuscrito.webp',
            titulo: 'Manuscrito original',
            descripcion: 'Página de uno de sus poemas'
        },
        {
            url: '/images/santiago-de-chuco.webp',
            titulo: 'Santiago de Chuco',
            descripcion: 'Su pueblo natal en los Andes peruanos'
        },
        {
            url: '/images/multimedia-trilce.webp',
            titulo: 'Edición original de Trilce',
            descripcion: 'Primera edición de su obra más experimental'
        },
        {
            url: '/images/vallejo-y-georgett.webp',
            titulo: 'Con Georgette',
            descripcion: 'Junto a su esposa y compañera'
        },
        {
            url: '/images/cesar-vallejo-espana-guerra.webp',
            titulo: 'Guerra Civil Española',
            descripcion: 'Época que marcó sus últimos poemas'
        }
    ];

    const videos = [
        {
            titulo: 'Biografía documental',
            descripcion: 'Vida y obra de César Vallejo',
            duracion: '14:07',
            thumbnail: 'https://i.ytimg.com/an_webp/_9tWthtTcgw/mqdefault_6s.webp?du=3000&sqp=COSMu8cG&rs=AOn4CLBKS_89p9VmnM_P3DOvx6mlOKZsew',
            youtubeUrl: 'https://www.youtube.com/watch?v=_9tWthtTcgw'
        },
        {
            titulo: 'César Vallejo y la poesía documental',
            descripcion: 'Exposición: Vallejo y su relación con lo documental',
            duracion: '06:40',
            thumbnail: 'https://i.ytimg.com/an_webp/7d0A769bYOU/mqdefault_6s.webp?du=3000&sqp=CJqUu8cG&rs=AOn4CLBPgvQnTGQQ827lLwAkUZMapE9HjA',
            youtubeUrl: 'https://www.youtube.com/watch?v=7d0A769bYOU'
        },
        {
            titulo: 'Recital de poemas de César Vallejo',
            descripcion: 'Recitación organizada por la UCH en Perú',
            duracion: '08:35',
            thumbnail: 'https://i.ytimg.com/an_webp/V1Gk6VGFpTk/mqdefault_6s.webp?du=3000&sqp=CPDpuscG&rs=AOn4CLBx5NLaerraQGLEVsNjw2isqVvPNQ',
            youtubeUrl: 'https://www.youtube.com/watch?v=V1Gk6VGFpTk'
        },
        {
            titulo: '¿Qué significa Trilce? — José Cruzado',
            descripcion: 'Exploración del sentido del poemario Trilce',
            duracion: '08:00',
            thumbnail: 'https://i.ytimg.com/an_webp/jYo_WG5m0FI/mqdefault_6s.webp?du=3000&sqp=CKLvuscG&rs=AOn4CLA6z67muenro8ugyG7Subd_0wlIgw',
            youtubeUrl: 'https://www.youtube.com/watch?v=jYo_WG5m0FI'
        },
        {
            titulo: 'Poemas de César Vallejo (lectura colectiva)',
            descripcion: 'Varios poemas recitados por distintos lectores',
            duracion: '29:44',
            thumbnail: 'https://i.ytimg.com/vi/j3ZcKaUAzxU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLANKN2LYgUah8K_WlETtjjnUxj_uw',
            youtubeUrl: 'https://www.youtube.com/watch?v=j3ZcKaUAzxU'
        },
        {
            titulo: 'Biografía y obras de César Vallejo',
            descripcion: 'Resumen audiovisual de su vida y producción literaria',
            duracion: '02:41',
            thumbnail: 'https://i.ytimg.com/an_webp/4YOGBJ6exlU/mqdefault_6s.webp?du=3000&sqp=CI2Zu8cG&rs=AOn4CLA4-1CIvyskxjO2FS1RAlJVN94x1A',
            youtubeUrl: 'https://www.youtube.com/watch?v=4YOGBJ6exlU'
        }
    ];

    const audios = [
        {
            titulo: 'España, aparta de mí este cáliz',
            descripcion: 'Recitado por Fernando Carvallo. [Fuente: https://encuentratupoema.pe/poemas/]',
            duracion: '2:42',
            audioUrl: '/audios/audio-espana-aparta-de-mi-este-caliz.mp3'
        },
        {
            titulo: 'Los heraldos negros',
            descripcion: 'Recitado por Joaquín Sabina. [Fuente: https://encuentratupoema.pe/poemas/]',
            duracion: '1:18',
            audioUrl: '/audios/audio-los-heraldos-negros.mp3'
        },
        {
            titulo: 'Piedra negra sobre una piedra blanca',
            descripcion: 'Recitado por Carlos Franz. [Fuente: https://encuentratupoema.pe/poemas/]',
            duracion: '1:02',
            audioUrl: '/audios/audio-piedra-negra.mp3'
        },
        {
            titulo: 'Masa',
            descripcion: 'Recitado por Hugo Viladegut Bush. [Fuente: https://encuentratupoema.pe/poemas/]',
            duracion: '1:33',
            audioUrl: '/audios/audio-masa.mp3'
        },
        {
            titulo: 'Altura y pelos',
            descripcion: 'Recitado por Héctor Abad Faciolince. [Fuente: https://encuentratupoema.pe/poemas/]',
            duracion: '1:00',
            audioUrl: '/audios/audio-altura-y-pelos.mp3'
        },
    ];

    const documentos = [
        {
            titulo: 'Carta a Pablo Abril',
            tipo: 'Carta manuscrita',
            año: '1927',
            imagen: '/images/multimedia-carta-pablo.webp',
            descripcion: 'Correspondencia con su amigo poeta'
        },
        {
            titulo: 'Manuscrito de Trilce',
            tipo: 'Manuscrito original',
            año: '1922',
            imagen: '/images/multimedia-manuscrito.webp',
            descripcion: 'Página original de su obra vanguardista'
        },
        {
            titulo: 'Artículo periodístico',
            tipo: 'Prensa',
            año: '1930',
            imagen: '/images/multimedia-articulo-periodistico.webp',
            descripcion: 'Publicación en periódico'
        },
        {
            titulo: 'Pasaporte francés',
            tipo: 'Documento personal',
            año: '1930',
            imagen: '/images/multimedia-pasaporte.webp',
            descripcion: 'Documento de identificación'
        },
    ];

    const handlePlayAudio = (index, audioUrl) => {
        console.log('🎵 Click en audio', index);

        // Si está reproduciendo este mismo audio, PAUSAR
        if (playingAudio === index) {
            console.log('⏸️ Pausando audio');
            if (audioRefs.current[index]) {
                audioRefs.current[index].pause();
            }
            setPlayingAudio(null);
            return;
        }

        // Pausar y REINICIAR otros audios
        if (playingAudio !== null && audioRefs.current[playingAudio]) {
            console.log('⏹️ Deteniendo audio anterior');
            audioRefs.current[playingAudio].pause();
            audioRefs.current[playingAudio].currentTime = 0;
        }

        // Crear audio solo si no existe
        if (!audioRefs.current[index]) {
            console.log('📦 Creando nueva instancia');
            const newAudio = new Audio(audioUrl);

            // 👇 NUEVO: Actualizar progreso mientras reproduce
            newAudio.addEventListener('timeupdate', () => {
                if (newAudio.duration) {
                    const progress = (newAudio.currentTime / newAudio.duration) * 100;
                    setAudioProgress(progress);
                }
            });

            // Al terminar, resetear progreso
            newAudio.addEventListener('ended', () => {
                console.log('🏁 Audio terminó');
                setPlayingAudio(null);
                setAudioProgress(0); // 👈 NUEVO
            });

            audioRefs.current[index] = newAudio;
        }

        // Reproducir
        console.log('▶️ Reproduciendo');
        audioRefs.current[index].play()
            .then(() => {
                console.log('✅ Reproduciendo');
                setPlayingAudio(index);
            })
            .catch((error) => {
                console.error('❌ Error:', error);
                alert('No se pudo reproducir el audio: ' + error.message);
            });
    };

    useEffect(() => {
        return () => {
            Object.values(audioRefs.current).forEach(audio => {
                if (audio) {
                    audio.pause();
                    audio.src = '';
                }
            });
            setAudioProgress(0); // 👈 NUEVO
        };
    }, []);


    return (
        <div className="min-h-screen">


            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 from-0% via-black/60 via-50% to-[#F5F5DC] to-100% z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/multimedia-hero.webp')`,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4"
                >
                    {/* <ImageIcon className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" /> */}
                    <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5DC] mb-4">Multimedia</h1>
                    <p className="text-xl text-[#D4AF37]">Imágenes, videos, audios y documentos</p>
                </motion.div>
            </section>

            {/* Tabs de contenido */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-7xl mx-auto">
                    <Tabs defaultValue="fotos" className="w-full ">
                        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 mb-12 bg-white border-2 border-[#D4AF37]/20 p-2 h-auto">
                            <TabsTrigger value="fotos" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white flex items-center justify-center gap-2 py-3 sm:py-2">
                                <ImageIcon className="w-4 h-4" />
                                <span className="text-sm">Fotos</span>
                            </TabsTrigger>
                            <TabsTrigger value="videos" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white flex items-center justify-center gap-2 py-3 sm:py-2">
                                <Play className="w-4 h-4" />
                                <span className="text-sm">Videos</span>
                            </TabsTrigger>
                            <TabsTrigger value="audio" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white flex items-center justify-center gap-2 py-3 sm:py-2">
                                <Volume2 className="w-4 h-4" />
                                <span className="text-sm">Audio</span>
                            </TabsTrigger>
                            <TabsTrigger value="documentos" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white flex items-center justify-center gap-2 py-3 sm:py-2">
                                <FileText className="w-4 h-4" />
                                <span className="text-sm">Documentos</span>
                            </TabsTrigger>
                        </TabsList>

                        {/* Fotos */}







                        {/* Fotos */}
                        <TabsContent value="fotos">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {fotos.map((foto, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -8 }}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(foto.url)}
                                    >
                                        <Card className="overflow-hidden border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl group">
                                            <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                                                <img
                                                    src={foto.url}
                                                    alt={foto.titulo}
                                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                                />
                                                {/* Overlay con gradiente */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                                {/* Título superpuesto */}
                                                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-white mb-1 drop-shadow-lg">{foto.titulo}</h3>
                                                    <p className="text-sm text-white/80 leading-relaxed drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">{foto.descripcion}</p>
                                                </div>

                                                {/* Icono de zoom sutil */}
                                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#D4AF37]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                                                    <ImageIcon className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>


                        {/* Videos */}
                        <TabsContent value="videos">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {videos.map((video, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -8 }}
                                        className="h-full"
                                    >
                                        <a
                                            href={video.youtubeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full"
                                        >
                                            <Card className="overflow-hidden border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl cursor-pointer group h-full flex flex-col">
                                                <div className="relative aspect-video overflow-hidden bg-[#1a1a1a]">
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={video.titulo}
                                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent group-hover:from-[#1a1a1a]/95 transition-all duration-300" />

                                                    {/* Botón de play */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <motion.div
                                                            whileHover={{ scale: 1.15 }}
                                                            className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300"
                                                        >
                                                            <Play className="w-10 h-10 text-[#1a1a1a] ml-1" fill="currentColor" />
                                                        </motion.div>
                                                    </div>

                                                    {/* Duración */}
                                                    <div className="absolute bottom-3 right-3 bg-[#1a1a1a]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm border border-[#D4AF37]/30">
                                                        {video.duracion}
                                                    </div>

                                                    {/* Icono de enlace externo */}
                                                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <ExternalLink className="w-4 h-4 text-[#1a1a1a]" />
                                                    </div>
                                                </div>
                                                <div className="p-5 bg-white flex-1 flex flex-col">
                                                    <h3 className="text-[#1a1a1a] mb-2 group-hover:text-[#D4AF37] transition-colors">{video.titulo}</h3>
                                                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed flex-1">{video.descripcion}</p>

                                                    {/* Indicador decorativo - siempre abajo */}
                                                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[#D4AF37]/20">
                                                        <Play className="w-3 h-3 text-[#D4AF37]" />
                                                        <span className="text-xs text-[#D4AF37] uppercase tracking-wider">Ver en YouTube</span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>

                        {/* Audio */}


                        {/* Audio */}
                        {/* Audio */}


                        {/* Audio */}
                        <TabsContent value="audio">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3 sm:space-y-4 max-w-3xl mx-auto"
                            >
                                {audios.map((audio, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 4 }}
                                    >
                                        <Card className="p-4 sm:p-6 bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl cursor-pointer group">
                                            <div className="flex items-start sm:items-center gap-3 sm:gap-4 ">
                                                <motion.button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handlePlayAudio(index, audio.audioUrl);
                                                    }}
                                                    className={`w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${playingAudio === index
                                                        ? 'bg-white border-2 border-[#D4AF37]'
                                                        : 'bg-gradient-to-br from-[#D4AF37] to-[#C19B2F]'
                                                        }`}
                                                >
                                                    {playingAudio === index ? (
                                                        <Pause className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37]" fill="currentColor" />
                                                    ) : (
                                                        <Play className="w-5 h-5 sm:w-7 sm:h-7 text-white ml-0.5 sm:ml-1" fill="currentColor" />
                                                    )}
                                                </motion.button>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className={`mb-1 text-sm sm:text-base transition-colors truncate sm:whitespace-normal ${playingAudio === index ? 'text-[#D4AF37]' : 'text-[#1a1a1a]'}`}>
                                                        {audio.titulo}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-[#1a1a1a]/60 line-clamp-2 sm:line-clamp-1">{audio.descripcion}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2 flex-shrink-0">
                                                    <Volume2 className={`w-3 h-3 sm:w-4 sm:h-4 ${playingAudio === index ? 'text-[#D4AF37]' : 'text-[#1a1a1a]/40'}`} />
                                                    <div className={`text-xs sm:text-sm transition-colors whitespace-nowrap ${playingAudio === index ? 'text-[#D4AF37]' : 'text-[#1a1a1a]/60'}`}>
                                                        {audio.duracion}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Barra de progreso sincronizada */}
                                            {playingAudio === index && (
                                                <div className="mt-4">
                                                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C19B2F] rounded-full"
                                                            style={{ width: `${audioProgress}%` }}
                                                            transition={{ duration: 0.1 }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>





                        {/* Documentos */}



                        {/* Documentos */}

                        {/* Documentos */}
                        <TabsContent value="documentos">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {documentos.map((doc, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -8 }}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(doc.imagen)}
                                    >
                                        <Card className="overflow-hidden border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl group">
                                            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#F5F5DC] to-[#e8e8d0]">
                                                <img
                                                    src={doc.imagen}
                                                    alt={doc.titulo}
                                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 sepia group-hover:sepia-0"
                                                />
                                                {/* Overlay antiguo */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {/* Icono de documento */}
                                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#D4AF37]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                                                    <FileText className="w-5 h-5 text-white" />
                                                </div>

                                                {/* Badge del tipo */}
                                                <div className="absolute top-4 left-4 bg-[#D4AF37] px-3 py-1 rounded-full text-xs text-white shadow-lg">
                                                    {doc.año}
                                                </div>
                                            </div>
                                            <div className="p-5 bg-white">
                                                <h3 className="text-[#1a1a1a] mb-2 group-hover:text-[#D4AF37] transition-colors">{doc.titulo}</h3>
                                                <p className="text-sm text-[#D4AF37] mb-2">{doc.tipo}</p>
                                                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{doc.descripcion}</p>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Lightbox para imágenes */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="p-0 bg-transparent border-none shadow-none w-auto max-w-[95vw] max-h-[95vh] flex items-center justify-center">
                    {selectedImage && (
                        <div className="relative inline-block mx-auto">
                            {/*   <motion.button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 sm:top-2 right-2 sm:right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 z-50 group cursor-pointer"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                            </motion.button> */}

                            <motion.button
                                onClick={() => setSelectedImage(null)}

                                className="absolute top-2 sm:top-2 right-0 sm:right-0 w-8 h-8 sm:w-10 sm:h-10  transition-all duration-300 z-50 group  text-[#1a1a1a]/70 hover:text-[#1a1a1a]/90 text-xl cursor-pointer"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5  " strokeWidth={2.5} />
                            </motion.button>



                            <motion.div
                                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative inline-block"
                            >
                                <img
                                    src={selectedImage}
                                    alt="Vista ampliada"
                                    className="max-w-[90vw] max-h-[80vh] sm:max-h-[85vh] w-auto h-auto rounded-lg sm:rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                                />
                                {/* Marco decorativo */}
                                <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-[#D4AF37]/30 sm:border-2 pointer-events-none" />
                            </motion.div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>




        </div>
    );
}
