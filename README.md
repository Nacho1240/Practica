# C-MVT — Sitio web corporativo

Sitio web de **C-MVT**, empresa chilena de diseño, construcción y mantenimiento fundada en 2017. La página presenta a la empresa, sus servicios, una galería de proyectos realizados, los clientes que han confiado en ella y un formulario de contacto.

## Contenido del sitio

Es una página única (*single page*) con navegación por secciones:

| Sección | Componente | Descripción |
|---|---|---|
| Inicio | `Hero.tsx` | Portada con mensaje principal y botones a cotización y proyectos |
| Nosotros | `About.tsx` | Historia, equipo y valores de la empresa |
| Servicios | `Services.tsx` | Oficinas y retail, hogares y condominios, centros educativos, diseño y mantenimiento |
| Cifras | `Stats.tsx` | Indicadores destacados de la empresa |
| Galería | `Gallery.tsx` | Proyectos realizados (Metro Vicente Valdés, Le Fournil, Happyland, Paletas, entre otros) |
| Clientes | `Clients.tsx` | Logos de empresas clientes |
| Testimonios | `Testimonials.tsx` | Opiniones de clientes |
| Contacto | `Contact.tsx` | Datos de contacto, WhatsApp y formulario |
| Pie de página | `Footer.tsx` | Enlaces rápidos y redes sociales |

La barra de navegación (`Navbar.tsx`) es fija y tiene menú desplegable en móvil.

## Tecnologías

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) como servidor de desarrollo y empaquetador
- [Tailwind CSS 4](https://tailwindcss.com/) para estilos
- Componentes de UI basados en [Radix UI](https://www.radix-ui.com/) (estilo shadcn/ui) en `src/app/components/ui/`
- Íconos de [lucide-react](https://lucide.dev/) y [react-icons](https://react-icons.github.io/react-icons/)

## Estructura del proyecto

```
├── index.html               # Punto de entrada HTML
├── public/
│   ├── Logo.png             # Logo de la empresa (también usado como favicon)
│   ├── images/              # Fotos de proyectos para la galería
│   └── logos/               # Logos de clientes
└── src/
    ├── main.tsx             # Monta la aplicación
    ├── app/
    │   ├── App.tsx          # Ensambla todas las secciones de la página
    │   └── components/      # Secciones del sitio + componentes de UI
    └── styles/              # Tailwind, tema, fuentes y estilos globales
```

## Cómo ejecutarlo

Requisitos: [Node.js](https://nodejs.org/) 20 o superior.

```bash
npm install       # instala dependencias
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve localmente la versión de producción
npm run lint      # revisa el código con ESLint
```

## Cómo editar el contenido

- **Proyectos de la galería:** agregar la foto en `public/images/` y una entrada en el arreglo `projects` de `src/app/components/Gallery.tsx`.
- **Clientes:** agregar el logo en `public/logos/` y una entrada en el arreglo `clients` de `src/app/components/Clients.tsx`.
- **Datos de contacto:** `src/app/components/Contact.tsx` y `src/app/components/Footer.tsx`.
- **Servicios y textos de la empresa:** `Services.tsx`, `About.tsx` y `Stats.tsx`.

## Estado actual y pendientes conocidos

El proyecto está en proceso de modernización y corrección de errores. Algunos puntos detectados:

- La carpeta `node_modules/` está versionada en el repositorio aunque figura en `.gitignore`; debería eliminarse del control de versiones.
- El formulario de contacto muestra un mensaje de confirmación pero no envía los datos a ningún destino.
- Quedan archivos de la plantilla inicial de Vite sin uso (`src/App.tsx`, `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png`).
- `package.json` incluye dependencias que no parecen usarse (`lucide-react-native`, `native`, `source`, `lucide`).

