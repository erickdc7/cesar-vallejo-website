# César Vallejo - Sitio Web Conmemorativo

Sitio web dedicado a la vida y obra de César Vallejo, uno de los más grandes poetas del siglo XX y máximo exponente de las letras peruanas.

## 🌟 Características

- **Biografía completa** - Recorrido por la vida del poeta desde su nacimiento en Santiago de Chuco hasta su muerte en París
- **Cronología interactiva** - Línea de tiempo visual con los momentos más importantes de su vida
- **Colección de poemas** - Acceso a sus obras más emblemáticas
- **Multimedia** - Galería de fotos, videos, audios de poemas recitados y documentos históricos
- **Diseño elegante** - Interfaz moderna con animaciones suaves y diseño responsive
- **Transiciones fluidas** - Navegación tipo SPA sin recargas de página

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework principal
- **[React](https://react.dev/)** - Componentes interactivos
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos y diseño
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones
- **[Lucide React](https://lucide.dev/)** - Iconos

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o pnpm

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/erickdc7/cesar-vallejo-website.git
cd cesar-vallejo-website
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Previsualiza el build de producción |

## 📄 Páginas del Sitio

### Inicio
Página principal con introducción al poeta, sus obras principales, poema destacado y citas célebres.

### Biografía
Recorrido completo por la vida de Vallejo:
- Infancia en los Andes
- Formación y juventud
- Lima y primera publicación
- Prisión y Trilce
- Exilio en París
- Compromiso político
- Georgette y el amor
- Guerra Civil Española
- Muerte en París

### Cronología
Línea de tiempo interactiva con:
- Timeline vertical con eventos ilustrados
- Iconos representativos para cada evento
- Imágenes históricas
- Conectores decorativos animados
- Sección "Una Vida en Números"

### Multimedia
Galería multimedia organizada en tabs:
- **Fotos** - Galería de imágenes históricas con lightbox
- **Videos** - Enlaces a documentales y recitales en YouTube
- **Audio** - Reproductor de poemas recitados con barra de progreso
- **Documentos** - Cartas, manuscritos y documentos históricos

## 🌐 Características Técnicas

### Transiciones Suaves
Utiliza `ClientRouter` de Astro para navegación tipo SPA sin recargas:
```astro
import { ClientRouter } from 'astro:transitions';
<ClientRouter />
```

### Componentes Interactivos
- Navegación responsive con menú móvil animado
- Reproductor de audio con control de reproducción/pausa
- Barra de progreso sincronizada con duración del audio
- Galería de imágenes con modal de vista ampliada
- Timeline animado con scroll reveal

### Responsive Design
Diseño completamente adaptable:
- Mobile first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Grid layouts adaptables
- Menú hamburguesa en móviles

## 🎯 Optimizaciones

- **Lazy loading** de imágenes
- **Componentes React** con `client:load` solo donde se necesita interactividad
- **Transiciones CSS** optimizadas
- **Tipografías web** optimizadas (Playfair Display e Inter)

## 👨‍💻 Autor

Desarrollado con ❤️ como homenaje a César Vallejo

---

**"Hay golpes en la vida, tan fuertes... ¡Yo no sé!"**  
*— César Vallejo*
