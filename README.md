# GeoVS — Landing Page

Landing page de GeoVS, juego web multijugador competitivo en tiempo real
(estilo Geometry Dash). Construida con Next.js (App Router) + TypeScript +
Tailwind CSS, con captura de leads de early access guardados en Neon
(Postgres serverless) vía Prisma.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** para estilos
- **Prisma** + **Neon** (Postgres serverless) para la tabla `waitlist`
- Deploy pensado para **Vercel**

## 1. Configurar Neon (base de datos)

1. Crea una cuenta gratuita en [neon.tech](https://neon.tech) y un proyecto
   nuevo (puedes llamarlo `geovs`).
2. En el dashboard del proyecto, entra a **Connection Details** y copia:
   - La connection string **pooled** (host con sufijo `-pooler`).
   - La connection string **directa / unpooled** (host sin `-pooler`).
3. Copia `.env.example` a `.env` y pega ambas:

   ```bash
   cp .env.example .env
   ```

   ```env
   DATABASE_URL="postgresql://usuario:password@ep-xxxx-pooler.region.aws.neon.tech/neondb?sslmode=require"
   DATABASE_URL_UNPOOLED="postgresql://usuario:password@ep-xxxx.region.aws.neon.tech/neondb?sslmode=require"
   ```

   - `DATABASE_URL` (pooled) la usa la app en runtime (recomendado para
     entornos serverless como Vercel).
   - `DATABASE_URL_UNPOOLED` (directa) la usa Prisma para correr migraciones.

4. Crea la tabla `waitlist` corriendo la migración de Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

   Esto crea la tabla en Neon según `prisma/schema.prisma`:

   ```prisma
   model Waitlist {
     id        String   @id @default(cuid())
     name      String
     email     String   @unique
     createdAt DateTime @default(now())

     @@map("waitlist")
   }
   ```

   Si prefieres solo sincronizar el schema sin generar un archivo de
   migración (útil para prototipar rápido), puedes usar en su lugar:

   ```bash
   npx prisma db push
   ```

## 2. Correr el proyecto localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

El endpoint `POST /api/waitlist` valida `name`/`email`, inserta el registro
en la tabla `waitlist` y responde:

- `201` con `{ success: true }` si se guardó correctamente.
- `409` si el email ya estaba registrado.
- `400` si faltan campos o el email/nombre son inválidos.
- `500` ante cualquier otro error.

## 3. Deploy a Vercel

1. Sube este repo a GitHub/GitLab/Bitbucket.
2. En [vercel.com](https://vercel.com), **Add New Project** e importa el
   repositorio.
3. En **Environment Variables**, agrega las mismas variables de tu `.env`:
   - `DATABASE_URL`
   - `DATABASE_URL_UNPOOLED`
4. Despliega. Vercel detecta Next.js automáticamente (no requiere
   configuración adicional); el script `postinstall` corre
   `prisma generate` en cada build.
5. Si aún no corriste la migración contra la base de producción, ejecútala
   una vez localmente apuntando al `.env` de producción, o corre
   `npx prisma migrate deploy` desde tu pipeline de CI.

## Estructura del proyecto

```
src/
  app/
    layout.tsx          Layout raíz, fuentes y metadata
    page.tsx             Composición de la landing
    globals.css
    api/waitlist/route.ts   Endpoint POST para el waitlist
  components/
    Hero.tsx
    VideoSection.tsx
    HowToPlay.tsx
    Features.tsx
    WaitlistForm.tsx
    Footer.tsx
    Reveal.tsx            Animación fade-up al hacer scroll
  lib/
    prisma.ts             Cliente Prisma singleton
prisma/
  schema.prisma
public/
  imagen/logo_geovs.png
  videos/geovs-gameplay.mp4
```
