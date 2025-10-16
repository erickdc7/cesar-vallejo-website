import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Search, BookOpen, X } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./ui/dialog";

export function Poemas() {
    const [selectedFilter, setSelectedFilter] = useState("todos");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPoema, setSelectedPoema] = useState(null);

    // 📚 Datos de poemas
    const poemas = [
        {
            id: 1,
            titulo: 'Los Heraldos Negros',
            libro: 'Los Heraldos Negros',
            año: 1918,
            extracto: 'Hay golpes en la vida, tan fuertes... ¡Yo no sé!',
            tema: 'existencial',
            contenido: `Hay golpes en la vida, tan fuertes... ¡Yo no sé!
Golpes como del odio de Dios; como si ante ellos,
la resaca de todo lo sufrido
se empozara en el alma... ¡Yo no sé!

Son pocos; pero son... Abren zanjas oscuras
en el rostro más fiero y en el lomo más fuerte.
Serán tal vez los potros de bárbaros atilas;
o los heraldos negros que nos manda la Muerte.

Son las caídas hondas de los Cristos del alma,
de alguna fe adorable que el Destino blasfema.
Esos golpes sangrientos son las crepitaciones
de algún pan que en la puerta del horno se nos quema.

Y el hombre... Pobre... ¡pobre! Vuelve los ojos, como
cuando por sobre el hombro nos llama una palmada;
vuelve los ojos locos, y todo lo vivido
se empoza, como charco de culpa, en la mirada.

Hay golpes en la vida, tan fuertes... ¡Yo no sé!`,
            analisis:
                'Poema emblemático que abre su primera obra. Explora el dolor existencial y los golpes inesperados de la vida.'
        },
        {
            id: 2,
            titulo: 'Piedra negra sobre una piedra blanca',
            libro: 'Poemas Humanos',
            año: 1939,
            extracto: 'Me moriré en París con aguacero...',
            tema: 'muerte',
            contenido: `Me moriré en París con aguacero,
un día del cual tengo ya el recuerdo.
Me moriré en París —y no me corro—
tal vez un jueves, como es hoy, de otoño.

Jueves será, porque hoy, jueves, que proso
estos versos, los húmeros me he puesto
a la mala y, jamás como hoy, me he vuelto,
con todo mi camino, a verme solo.

César Vallejo ha muerto, le pegaban
todos sin que él les haga nada;
le daban duro con un palo y duro

también con una soga; son testigos
los días jueves y los huesos húmeros,
la soledad, la lluvia, los caminos...`,
            analisis:
                'Poema profético que anticipa su propia muerte en París. Vallejo murió efectivamente en París un viernes lluvioso de abril.'
        },
        {
            id: 3,
            titulo: 'Masa',
            libro: 'España, aparta de mí este cáliz',
            año: 1939,
            extracto: 'Al fin de la batalla, y muerto el combatiente...',
            tema: 'guerra',
            contenido: `Al fin de la batalla,
y muerto el combatiente, vino hacia él un hombre
y le dijo: «¡No mueras, te amo tanto!»
Pero el cadáver ¡ay! siguió muriendo.

Se le acercaron dos y repitiéronle:
«¡No nos dejes! ¡Valor! ¡Vuelve a la vida!»
Pero el cadáver ¡ay! siguió muriendo.

Acudieron a él veinte, cien, mil, quinientos mil,
clamando «¡Tanto amor y no poder nada contra la muerte!»
Pero el cadáver ¡ay! siguió muriendo.

Le rodearon millones de individuos,
con un ruego común: «¡Quédate hermano!»
Pero el cadáver ¡ay! siguió muriendo.

Entonces todos los hombres de la tierra
le rodearon; les vio el cadáver triste, emocionado;
incorporóse lentamente,
abrazó al primer hombre; echóse a andar...`,
            analisis:
                'Uno de los poemas más conmovedores sobre la Guerra Civil Española. Habla del poder del amor y la solidaridad colectiva.'
        },
        {
            id: 4,
            titulo: 'Trilce I',
            libro: 'Trilce',
            año: 1922,
            extracto: 'Quién hace tanta bulla, y ni deja...',
            tema: 'vanguardia',
            contenido: `Quién hace tanta bulla, y ni deja
testar las islas que van quedando.

Un poco más de consideración
en cuanto será tarde, temprano,
y se aquilatará mejor
el guano, la simple calabrina tesórea
que brinda sin querer,
en el insular corazón,
salobre alcatraz, a cada hialóidea
grupada.

Un poco más de consideración,
y el mantillo líquido, seis de la tarde
DE LOS MÁS SOBERBIOS BEMOLES.

Y la península párase
por la espalda, abozaleada, impertérrita
en la línea mortal del equilibrio.`,
            analisis:
                'Primer poema de Trilce, obra experimental que rompió con todas las convenciones poéticas.'
        },
        {
            id: 5,
            titulo: 'Considerando en frío, imparcialmente...',
            libro: 'Poemas Humanos',
            año: 1939,
            extracto: 'Considerando en frío, imparcialmente...',
            tema: 'humanidad',
            contenido: `Considerando en frío, imparcialmente,
que el hombre es triste, tose y, sin embargo,
se complace en su pecho colorado;
que lo único que hace es componerse
de días;
que es lóbrego mamífero y se peina...

Considerando
que el hombre procede suavemente del trabajo
y repercute jefe, suena subordinado;
que el diagrama del tiempo
es constante diorama en sus medallas
y, a medio abrir, sus ojos estudiaron,
desde lejanos tiempos,
su fórmula famélica de masa...

Comprendiendo sin esfuerzo
que el hombre se queda, a veces, pensando,
como queriendo llorar,
y, sujeto a tenderse como objeto,
se hace buen carpintero, suda, mata
y luego canta, almuerza, se abotona...

Considerando también
que el hombre es en verdad un animal
y, no obstante, al voltear, me da con su tristeza en la cabeza...`,
            analisis:
                'Reflexión profunda sobre la condición humana, sus contradicciones y su dignidad.'
        },
        {
            id: 6,
            titulo: 'Los Dados Eternos',
            libro: 'Los Heraldos Negros',
            año: 1918,
            extracto: 'Dios mío, estoy llorando el ser que vivo...',
            tema: 'religioso',
            contenido: `Dios mío, estoy llorando el ser que vivo;
me pesa haber tomádote tu pan;
pero este pobre barro pensativo
no es costra fermentada en tu costado:
tú no tienes Marías que se van!

Dios mío, si tú hubieras sido hombre,
hoy supieras ser Dios;
pero tú, que estuviste siempre bien,
no sientes nada de tu creación.
Y el hombre sí te sufre: el Dios es él!

Hoy que en mis ojos brujos hay candelas,
como en un condenado,
Dios mío, prenderás todas tus velas,
y jugaremos con el viejo dado...
Tal vez ¡oh jugador! al dar la suerte
del universo todo,
surgirán las ojeras de la Muerte,
como dos ases fúnebres de lodo.

Dios mío, y esta noche sorda, oscura,
ya no podrás jugar, porque la Tierra
es un dado roído y ya redondo
a fuerza de rodar a la aventura,
que no puede parar sino en un hueco,
en el hueco de inmensa sepultura.`,
            analisis:
                'Poema que cuestiona a Dios y explora la relación entre el ser humano y lo divino.'
        }
    ];

    const libros = [
        "todos",
        "Los Heraldos Negros",
        "Trilce",
        "Poemas Humanos",
        "España, aparta de mí este cáliz",
    ];

    // 📖 Filtros
    const filteredPoemas = poemas.filter((poema) => {
        const matchesFilter =
            selectedFilter === "todos" ||
            poema.libro === selectedFilter ||
            poema.tema === selectedFilter;
        const matchesSearch =
            searchQuery === "" ||
            poema.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            poema.extracto.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 from-0% via-black/60 via-50% to-[#F5F5DC] to-100% z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('/images/poemas-hero.webp')`,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4 max-w-3xl mx-auto"
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5DC] mb-6">
                        Poemas
                    </h1>
                    <p className="text-xl text-[#D4AF37] mb-8">
                        Explora la poesía de César Vallejo
                    </p>

                    {/* Barra de búsqueda */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-10 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1a1a1a]/90 pointer-events-none z-10" />
                        <Input
                            type="text"
                            placeholder="Busca poemas por título..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 py-3 bg-white/95 backdrop-blur-sm border-[#D4AF37]/30 focus:border-[#D4AF37]"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Filtros */}
            <section className="py-8 px-4 bg-white border-b border-[#D4AF37]/20   top-20 z-30">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Button
                            onClick={() => setSelectedFilter("todos")}
                            variant={selectedFilter === "todos" ? "default" : "outline"}
                            className={
                                selectedFilter === "todos"
                                    ? "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#1a1a1a] border-2 cursor-pointer"
                                    : "border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#F5F5DC] cursor-pointer"
                            }
                        >
                            Todos
                        </Button>
                        {libros.slice(1).map((libro) => (
                            <Button
                                key={libro}
                                onClick={() => setSelectedFilter(libro)}
                                variant={selectedFilter === libro ? "default" : "outline"}
                                className={
                                    selectedFilter === libro
                                        ? "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#1a1a1a] border-2 cursor-pointer"
                                        : "border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#F5F5DC] cursor-pointer"
                                }
                            >
                                {libro}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>


            {/* Grid de poemas */}
            <section className="py-20 px-4 bg-[#F5F5DC]">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedFilter + searchQuery}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredPoemas.map((poema, index) => (
                                <motion.div
                                    key={poema.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Card
                                        onClick={() => setSelectedPoema(poema)}
                                        className="p-6 h-full   bg-white border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl flex flex-col"
                                    >
                                        <div className="flex items-start gap-3 mb-4">
                                            <BookOpen className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                                            <div className="flex-1">
                                                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                                                    {poema.titulo}
                                                </h3>
                                                <p className="text-sm text-[#D4AF37]">{poema.libro}</p>
                                            </div>
                                        </div>
                                        <p className="font-serif text-[#1a1a1a]/80 italic mb-4 flex-1">
                                            "{poema.extracto}"
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#D4AF37]/10">
                                            <span className="text-xs px-3 py-1 bg-[#D4AF37]/10 text-[#1a1a1a] rounded-full">
                                                {poema.año}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-[#D4AF37] hover:text-[#1a1a1a] hover:bg-[#D4AF37]/10 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // evita que se dispare el clic del Card
                                                    setSelectedPoema(poema); // abre el modal
                                                }}
                                            >
                                                Leer completo
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredPoemas.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-[#1a1a1a]/60">
                                No se encontraron poemas con los criterios de búsqueda.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal de poema completo */}
            <Dialog open={!!selectedPoema} onOpenChange={(open) => !open && setSelectedPoema(null)}>
                <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl lg:max-w-4xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-[#F5F5DC] border-[#D4AF37] p-4 sm:p-6 md:p-8">
                    <DialogClose asChild>
                        <button
                            className="absolute top-3 right-3 text-[#1a1a1a]/70 hover:text-[#1a1a1a]/90 text-xl transition-colors cursor-pointer"
                            aria-label="Cerrar"
                        >
                            <X className="w-4 h-4 sm:w-5 sm:h-5  " strokeWidth={2.5} />
                        </button>
                    </DialogClose>


                    {selectedPoema && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] mb-2 pr-8">
                                    {selectedPoema.titulo}
                                </DialogTitle>
                                <p className="text-[#D4AF37] text-sm sm:text-base">
                                    {selectedPoema.libro} ({selectedPoema.año})
                                </p>
                            </DialogHeader>
                            <div className="py-4 sm:py-6">
                                <div className="bg-white/50 p-4 sm:p-6 md:p-8 rounded-lg mb-4 sm:mb-6">
                                    <pre className="font-serif text-sm sm:text-base md:text-lg text-[#1a1a1a] whitespace-pre-wrap leading-relaxed">
                                        {selectedPoema.contenido}
                                    </pre>
                                </div>
                                <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg">
                                    <h4 className="text-[#D4AF37] mb-2 text-base sm:text-lg">Análisis</h4>
                                    <p className="text-[#F5F5DC]/80 text-xs sm:text-sm leading-relaxed">
                                        {selectedPoema.analisis}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>


        </div>
    );
}
