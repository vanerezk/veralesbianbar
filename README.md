# VERA — Bar lésbico en Málaga

VERA es una web responsive de una sola página para un bar lésbico en Huelin, Málaga. Presenta la identidad del bar, la carta de comida y bebida, los próximos eventos, la información de apertura y la ubicación mediante una interfaz visual de estilo editorial.

## Funcionalidades

- Diseño responsive para pantallas de escritorio y dispositivos móviles.
- Sección principal con la identidad de VERA, llamadas a la acción y cuenta atrás para la apertura.
- Sección de eventos destacados con detalles y previsualización de carteles.
- Carta de vermut dividida entre clásicos de barra y combinaciones propias de VERA.
- Tarjetas interactivas de bebidas con imágenes y ventanas modales de detalle.
- Galería de gildas con imágenes y descripciones.
- Carta filtrable por categorías:
  - Picoteo
  - Gildas
  - Vermut
  - Cervezas
  - Vinos
  - Copitas
  - Combinados
- Sección especial para la gilda del mes.
- Sección de Instagram preparada para añadir el enlace al perfil social.
- Sección de ubicación con información de apertura, dirección y mapa de Google integrado.
- Menú de navegación móvil y llamada a la acción fija para visitar VERA.
- Elementos interactivos accesibles, con soporte de teclado para las tarjetas de eventos y cierre de ventanas modales mediante la tecla Escape.

## Tecnologías

- React 18
- TypeScript
- Vite
- CSS

## Cómo empezar

### Requisitos

- Node.js y npm

### Instalar las dependencias

Desde el directorio del proyecto, ejecuta:

```bash
npm install
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará la URL local en la terminal, normalmente `http://localhost:5173`.

### Crear una compilación de producción

```bash
npm run build
```

Los archivos optimizados se generan en el directorio `dist/`.

### Previsualizar la compilación de producción

```bash
npm run preview
```

## Estructura del proyecto

```text
├── public/images/     # Imágenes utilizadas en la web
├── src/App.tsx        # Página principal y componentes interactivos
├── src/data.ts        # Contenido de la carta, eventos y local
├── src/main.tsx       # Punto de entrada de React
├── src/styles.css     # Estilos y diseños responsive
├── index.html         # Metadatos HTML e información SEO
└── vite.config.ts     # Configuración de Vite
```

## Configuración del contenido

Los datos del local, el horario, la URL del mapa, el enlace a redes sociales, las cartas y los eventos están definidos en `src/data.ts`. Sustituye valores provisionales como `INSTAGRAM_URL` y `PHONE` cuando estén disponibles los datos definitivos del negocio.
