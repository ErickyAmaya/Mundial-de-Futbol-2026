# ⚽ Mundial 2026 — Tracker & Simulación Monte Carlo

PWA para seguir y predecir el FIFA World Cup 2026.  
Modelo Elo adaptado + Distribución de Poisson + 10,000 simulaciones Monte Carlo.

## Archivos

```
├── index.html      → App completa (React + Babel standalone, ~54KB)
├── manifest.json   → Configuración PWA
├── sw.js           → Service Worker (caché offline)
├── icon-192.png    → Ícono 192×192
├── icon-512.png    → Ícono 512×512
└── README.md       → Este archivo
```

## Opción 1: GitHub Pages (recomendado — gratis + HTTPS + PWA completa)

1. Crea un repositorio en github.com (público o privado)
2. Sube todos los archivos a la rama `main`
3. Ve a **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. En 2 minutos tendrás: `https://tu-usuario.github.io/nombre-repo/`
5. Abre esa URL en Chrome/Safari → botón "Añadir a pantalla de inicio" ✓

## Opción 2: Netlify Drop (más fácil, 30 segundos)

1. Ve a **netlify.com/drop**
2. Arrastra la carpeta completa al navegador
3. Obtienes una URL HTTPS automática → instala como PWA

## Opción 3: Local (sin PWA, solo para pruebas)

```bash
# Python (cualquier versión)
cd wc2026-pwa && python3 -m http.server 8080
# Abre http://localhost:8080
# ⚠️ El Service Worker no funciona en localhost sin HTTPS
```

## Instalar como PWA

### Android (Chrome)
- Abre la URL → menú ⋮ → "Añadir a pantalla de inicio"

### iPhone/iPad (Safari)
- Abre la URL → botón compartir → "Añadir a pantalla de inicio"

### PC (Chrome/Edge)
- Abre la URL → ícono ⊕ en la barra de direcciones

## Características

- ⚡ Simulación Monte Carlo 10,000 iteraciones en ~3s
- 📊 Ratings Elo calibrados contra Opta (España 16.1%)
- ✏️ Edita resultados reales y ve la precisión en tiempo real
- 📶 Funciona offline (Service Worker cachea todo)
- 📱 Instalable en iOS y Android
- 💾 Estado se mantiene en la sesión (recarga = reinicia)

## Nota sobre persistencia

El estado actual se mantiene en memoria React.  
Para persistencia entre sesiones, editar el código y añadir:
```js
// Al cargar: localStorage.getItem('wc2026_state')
// Al guardar: localStorage.setItem('wc2026_state', JSON.stringify(state))
```
