# Invitación de boda — Fátima y Andrés

Proyecto estático hecho con [Astro](https://astro.build) + TypeScript + CSS nativo. Sin frameworks de estilos ni librerías de animación.

## Estructura

```
src/
  components/   componentes reutilizables (.astro)
  layouts/      layouts base de página
  pages/        rutas del sitio
  styles/       CSS global
public/
  images/       imágenes estáticas
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build de producción

```bash
npm run build
npm run preview
```

`npm run build` genera el sitio estático en `dist/`. `npm run preview` sirve ese resultado localmente para verificarlo antes de publicar.

## Despliegue en GitHub Pages

El repositorio incluye un workflow (`.github/workflows/deploy.yml`) que construye y publica el sitio en GitHub Pages en cada push a `main`.

Pasos para activarlo (una sola vez):

1. En GitHub, ir a **Settings → Pages**.
2. En **Build and deployment → Source**, seleccionar **GitHub Actions**.
3. Hacer push a `main`; el workflow se encarga del resto.

El sitio quedará publicado en `https://afcolmenaresb.github.io/Invitacion-boda/` (configurado en `astro.config.mjs` mediante `site` y `base`).

## Estado actual

Este es el andamiaje inicial del proyecto: solo existe una página provisional con el texto "Invitación de Fátima y Andrés". Aún no incluye diseño final, formularios, base de datos, menú, personalización ni dominio propio.
