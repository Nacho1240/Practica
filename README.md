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

- **Proyectos de la galería:** agregar la foto en `public/images/` y una entrada en el arreglo `projects` de `src/app/components/Gallery.tsx`.
- **Clientes:** agregar el logo en `public/logos/` y una entrada en el arreglo `clients` de `src/app/components/Clients.tsx`.
- **Datos de contacto:** `src/app/components/Contact.tsx` y `src/app/components/Footer.tsx`.
- **Servicios y textos de la empresa:** `Services.tsx`, `About.tsx` y `Stats.tsx`.

## Estado actual y pendientes conocidos

El proyecto está en proceso de modernización y corrección de errores. Algunos puntos detectados:

- El formulario de contacto muestra un mensaje de confirmación pero no envía los datos a ningún destino.
- Hay tres logos en `public/logos/` que no se muestran en la sección de clientes (`cantabria.jpg`, `fournil.jpg`, `emporio-la-rosa.png`).

## Contacto

- Email: Felizondo@c-mvt.com
- Teléfono / WhatsApp: +56 9 4955 7975
- Instagram: [@constructoracmvt](https://www.instagram.com/constructoracmvt)
