# 🌟 VISONIXRO - Web Empresarial Completa

> **Desarrollado por:** Agente IA MiniMax  
> **Empresa:** VISONIXRO - Innovación Visual Avanzada  
> **CEO:** Miguel Angel Romeo Guillen  
> **Versión:** 2.0 - Completa con Formularios Dinámicos  

## 📋 Descripción

Web empresarial moderna y completamente funcional para VISONIXRO, empresa líder en innovación tecnológica. Incluye diseño responsive, sistema multiidioma, formularios dinámicos, integración con Google Maps y redes sociales.

## ✨ Características Principales

### 🌐 **Funcionalidades Web**
- ✅ **Diseño 100% Responsive** - Móvil, tablet y desktop
- ✅ **Sistema Multiidioma** - Español e Inglés
- ✅ **Google Maps Integrado** - Ubicación exacta (16.351817, -86.464353)
- ✅ **Animaciones Dinámicas** - +15 efectos CSS personalizados
- ✅ **SEO Optimizado** - Meta tags y estructura semántica

### 📝 **Formularios Dinámicos**
- ✅ **Formulario de Contacto** - Transformación digital
- ✅ **Formulario de Citas** - Con fecha y hora
- ✅ **Validación en Tiempo Real** - Todos los campos
- ✅ **Integración WhatsApp** - Envío automático de datos

### 🌐 **Redes Sociales**
- ✅ **Botón Flotante** - Acceso rápido a redes sociales
- ✅ **Enlaces Directos** - Twitter, Facebook, Instagram, WhatsApp
- ✅ **Footer Actualizado** - Enlaces corregidos

### 🏢 **Servicios Específicos**
1. **Creación de Aplicaciones y Sistemas Empresariales**
2. **Creación de Páginas Web**
3. **Manejo de Redes Sociales**

## 🛠️ Tecnologías Utilizadas

- **React 18** + TypeScript
- **Tailwind CSS** - Estilos y responsividad
- **Lucide React** - Iconografía
- **Google Maps API** - Mapas interactivos
- **Vite** - Build tool y servidor de desarrollo

## 📦 Instalación

### 1. **Requisitos Previos**
```bash
# Instalar Node.js (versión 16+)
# Descargar desde: https://nodejs.org/

# Verificar instalación
node --version
npm --version
```

### 2. **Instalar Dependencias**
```bash
# Navegar al directorio del proyecto
cd visonixro-web-completa

# Instalar dependencias con npm
npm install

# O con yarn
yarn install

# O con pnpm (recomendado)
pnpm install
```

### 3. **Configurar Google Maps (Opcional)**
```bash
# Crear archivo .env en la raíz del proyecto
touch .env

# Agregar tu API key de Google Maps
echo "VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui" >> .env
```

## 🚀 Uso

### **Desarrollo Local**
```bash
# Iniciar servidor de desarrollo
npm run dev

# La web estará disponible en:
# http://localhost:5173
```

### **Build de Producción**
```bash
# Generar build optimizado
npm run build

# Los archivos se crearán en la carpeta 'dist/'
# Estos archivos están listos para deployment
```

### **Vista Previa del Build**
```bash
# Previsualizar el build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
visonixro-web-completa/
├── 📂 public/
│   ├── logo.png               # Logo VISONIXRO
│   └── logo-original.png      # Logo original proporcionado
├── 📂 src/
│   ├── 📂 components/
│   │   ├── MainApp.tsx        # Componente principal con routing
│   │   ├── Navbar.tsx         # Navegación responsive
│   │   ├── Hero.tsx           # Sección principal
│   │   ├── About.tsx          # Acerca de (visión, misión, CEO)
│   │   ├── Services.tsx       # Servicios específicos
│   │   ├── LocationImproved.tsx # Ubicación con Google Maps
│   │   ├── Footer.tsx         # Footer con redes sociales
│   │   ├── FloatingSocialButton.tsx # Botón flotante
│   │   ├── ContactFormPage.tsx # Formulario de contacto
│   │   └── AppointmentFormPage.tsx # Formulario de citas
│   ├── 📂 contexts/
│   │   ├── LanguageContext.tsx # Sistema multiidioma
│   │   └── RouterContext.tsx   # Sistema de routing
│   ├── 📂 hooks/
│   │   └── useScrollAnimations.ts # Hook de animaciones
│   ├── animations.css         # Animaciones personalizadas
│   ├── App.tsx               # Componente raíz
│   └── main.tsx              # Punto de entrada
├── 📂 dist/                  # Build de producción (listo para deployment)
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración Tailwind
├── vite.config.ts           # Configuración Vite
└── README.md                # Este archivo
```

## 🌐 Deployment

### **Opción 1: Usar archivos del directorio `dist/`**
```bash
# Después de ejecutar 'npm run build'
# Subir todos los archivos de la carpeta 'dist/' a tu servidor web
```

### **Opción 2: Netlify**
```bash
# 1. Hacer build de producción
npm run build

# 2. Subir carpeta 'dist/' a Netlify
# 3. Configurar como SPA (Single Page Application)
```

### **Opción 3: Vercel**
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy desde la carpeta del proyecto
vercel

# Seguir las instrucciones en pantalla
```

## ⚙️ Configuración

### **Información de Contacto**
Editar `/src/contexts/LanguageContext.tsx`:
```typescript
// Actualizar información de contacto
const contactInfo = {
  phone: "+504 88632788",
  email: "INFO@VISONIXRO.COM",
  ceo: "Miguel Angel Romeo Guillen"
};
```

### **Coordenadas Google Maps**
Editar `/src/components/LocationImproved.tsx`:
```typescript
// Cambiar coordenadas si es necesario
const center = {
  lat: 16.351817,
  lng: -86.464353
};
```

### **Enlaces de Redes Sociales**
Editar `/src/components/FloatingSocialButton.tsx` y `/src/components/Footer.tsx`:
```typescript
// Actualizar enlaces de redes sociales
const socialLinks = {
  whatsapp: "https://api.whatsapp.com/send/?phone=50488632788",
  facebook: "https://www.facebook.com/people/VisonixRo/61574218733448/",
  twitter: "https://x.com/ViSonixRo?t=uu5YQRmeTqZaGKuWjp8Mzg&s=09",
  instagram: "https://www.instagram.com/visonixro?igsh=Z3hubWpwdzRpeDhm"
};
```

## 📱 Funcionalidades de Formularios

### **Formulario de Contacto**
- **Acceso:** Botón "Comenzar Proyecto" en sección de servicios
- **Campos:** Nombre, Teléfono, Correo, Tipo de negocio, Tipo de servicio
- **Acción:** Envía datos por WhatsApp y regresa al inicio

### **Formulario de Citas**
- **Acceso:** Botón "Agenda una visita" en sección de ubicación
- **Campos:** Todos los anteriores + Fecha y Hora
- **Acción:** Envía datos con fecha/hora por WhatsApp

### **Formato de Mensaje WhatsApp**
```
Hola, me interesa sus servicios:
Nombre: [nombre]
Teléfono: [teléfono]
Correo: [correo]
Tipo de negocio: [tipo_negocio]
Servicio necesitado: [servicio]
[Si es cita: Fecha: [fecha], Hora: [hora]]
```

## 🎨 Personalización

### **Colores (Tailwind)**
Los colores principales están definidos en `tailwind.config.js`:
- **Primario:** Azul (blue-500, blue-600, blue-700)
- **Secundario:** Gris (gray-600, gray-700, gray-800)
- **Acentos:** Gradientes azul-púrpura

### **Animaciones**
Las animaciones personalizadas están en `src/animations.css`:
- `float` - Elementos flotantes
- `pulse-glow` - Pulso con brillo
- `gradient-shift` - Cambio de gradiente
- Y muchas más...

## 🐛 Solución de Problemas

### **Error: "Module not found"**
```bash
# Limpiar caché e instalar de nuevo
rm -rf node_modules package-lock.json
npm install
```

### **Google Maps no carga**
```bash
# 1. Verificar que existe archivo .env
# 2. Agregar tu API key de Google Maps
# 3. Habilitar JavaScript API en Google Cloud Console
```

### **Build falla**
```bash
# Verificar errores de TypeScript
npm run build -- --verbose
```

## 📞 Soporte

**VISONIXRO - Innovación Visual Avanzada**
- **CEO:** Miguel Angel Romeo Guillen
- **Teléfono:** +504 88632788
- **Email:** INFO@VISONIXRO.COM
- **Ubicación:** Honduras, Centroamérica

## 📄 Licencia

© 2024 VISONIXRO. Todos los derechos reservados.

---

### 🚀 **¡Tu web está lista para usar!**

1. **Instalar dependencias:** `npm install`
2. **Ejecutar en desarrollo:** `npm run dev`
3. **Hacer build:** `npm run build`
4. **Deployar:** Subir carpeta `dist/` a tu servidor

**¡Éxito con tu nueva presencia digital!** 🌟
