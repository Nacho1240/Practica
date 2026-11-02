# C-MVT — Sitio web corporativo

Sitio web de **C-MVT**, empresa chilena de diseño, construcción y mantenimiento fundada en 2017. La página presenta a la empresa, sus servicios, una galería de proyectos realizados, los clientes que han confiado en ella y un formulario de contacto.

## Contenido del sitio

Es una página única (*single page*) con navegación por secciones:

| Sección | Componente | Descripción |
|---|---|---|
| Inicio | `Hero.tsx` | Portada a pantalla completa con foto de obra, contacto directo y franja con lo esencial de la empresa |
| Nosotros | `About.tsx` | Presentación, foto de obra y valores de la empresa |
| Servicios | `Services.tsx` | Oficinas y retail, hogares y condominios, centros educativos, diseño y mantención |
| Proyectos | `Gallery.tsx` | Obras realizadas (Happyland, Paletas, Metro Vicente Valdés, entre otras), con vista ampliada de cada foto |
| Clientes | `Clients.tsx` | Logos de empresas clientes |
| Testimonios | `Testimonials.tsx` | Opiniones de clientes |
| Contacto | `Contact.tsx` | Datos de contacto, WhatsApp y formulario |
| Pie de página | `Footer.tsx` | Enlaces rápidos y redes sociales |

La barra de navegación (`Navbar.tsx`) es fija, muestra el teléfono en escritorio y tiene menú desplegable en móvil.

## Diseño

Los colores son los de la empresa: **cyan como el cielo, blanco como los camiones de carga y gris como el concreto**. Están definidos en `src/styles/theme.css`:

| Nombre | Color | Uso |
|---|---|---|
| `cielo` | `#29B6F6` | Botones, franjas y bloques destacados |
| `cielo-tinta` | `#0369A1` | Textos y enlaces cyan sobre blanco |
| `concreto` | `#EEF0F1` | Fondos claros |
| `gris` | `#5C656B` | Texto secundario |
| `grafito` | `#2B3135` | Texto principal, galería y pie de página |

El cyan cielo no tiene contraste suficiente con texto blanco, por eso los botones y bloques cyan llevan texto grafito.

La tipografía es [Barlow](https://fonts.google.com/specimen/Barlow), inspirada en la señalética de carreteras: Barlow Semi Condensed en los títulos y Barlow en el texto. Está incluida en el proyecto, así que no se carga desde Google.

## Tecnologías

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) como servidor de desarrollo y empaquetador
- [Tailwind CSS 4](https://tailwindcss.com/) para estilos
- [pnpm](https://pnpm.io/) como gestor de paquetes
- Íconos de [lucide-react](https://lucide.dev/) y [react-icons](https://react-icons.github.io/react-icons/)

## Estructura del proyecto

```
├── index.html               # Punto de entrada HTML
├── pnpm-workspace.yaml      # Configuración de seguridad de pnpm
├── public/
│   ├── Logo.png             # Logo de la empresa (también usado como favicon)
│   ├── images/              # Fotos de proyectos para la galería
│   └── logos/               # Logos de clientes
└── src/
    ├── main.tsx             # Monta la aplicación
    ├── app/
    │   ├── App.tsx          # Ensambla todas las secciones de la página
    │   ├── datos.ts         # Teléfono, email, WhatsApp y redes sociales
    │   └── components/      # Secciones del sitio
    └── styles/              # Tailwind y tema de colores
```

## Cómo ejecutarlo

Requisitos: [Node.js](https://nodejs.org/) 20.19 o superior y pnpm. La forma más simple de obtener pnpm es activarlo con Corepack, que viene incluido en Node; Corepack usará automáticamente la versión indicada en `package.json`:

```bash
corepack enable
```

Luego, en la carpeta del proyecto:

```bash
pnpm install      # instala dependencias
pnpm dev          # servidor de desarrollo en http://localhost:5173
pnpm build        # genera la versión de producción en dist/
pnpm preview      # sirve localmente la versión de producción
pnpm lint         # revisa el código con ESLint
pnpm audit        # revisa vulnerabilidades conocidas en las dependencias
```

### Seguridad de dependencias

El proyecto usa pnpm en lugar de npm. En `pnpm-workspace.yaml` está configurado para:

- **No instalar versiones publicadas hace menos de 24 horas.** La mayoría de los paquetes maliciosos se detectan y retiran en ese plazo.
- **No ejecutar scripts de instalación de las dependencias** salvo autorización explícita, para que un paquete comprometido no pueda ejecutar código al instalarse.

Además, el sitio usa solo 4 dependencias de producción (`react`, `react-dom`, `lucide-react` y `react-icons`), lo que reduce la superficie de ataque. El archivo `pnpm-lock.yaml` fija las versiones exactas y debe incluirse en cada commit que cambie dependencias.

## Cómo editar el contenido

- **Proyectos de la galería:** agregar la foto en `public/images/` (de preferencia en formato WebP y de no más de 1600 px por lado) y una entrada en el arreglo `proyectos` de `src/app/components/Gallery.tsx`.
- **Clientes:** agregar el logo en `public/logos/` y una entrada en el arreglo `clientes` de `src/app/components/Clients.tsx`.
- **Datos de contacto:** `src/app/datos.ts`. Se actualizan solos en la barra, la portada, la sección de contacto y el pie de página.
- **Servicios y textos de la empresa:** `Services.tsx` y `About.tsx`.

## Estado actual y pendientes conocidos

El proyecto está en proceso de modernización y corrección de errores.

- El formulario de contacto muestra un mensaje de confirmación pero no envía los datos a ningún destino. Por decisión del cliente se mantiene así, para evitar mensajes automáticos de bots; el contacto principal es por teléfono, WhatsApp y email.

## Contacto

- Email: Felizondo@c-mvt.com
- Teléfono / WhatsApp: +56 9 4955 7975
- Instagram: [@constructoracmvt](https://www.instagram.com/constructoracmvt)
