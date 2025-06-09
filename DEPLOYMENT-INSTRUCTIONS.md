# 🚀 INSTRUCCIONES DE DEPLOYMENT - VISONIXRO

## ⚡ DEPLOYMENT RÁPIDO (Solo archivos listos para producción)

Si solo quieres subir tu web sin instalar dependencias, usa los archivos de la carpeta `dist/`:

### 📂 **Carpeta `dist/` - Lista para Usar**
```
dist/
├── index.html          # Página principal
├── logo.png           # Logo VISONIXRO
└── assets/
    ├── index-[hash].js    # JavaScript optimizado
    └── index-[hash].css   # CSS optimizado
```

### 🌐 **Cómo Deployar**

#### **Opción 1: Servidor Web (Apache/Nginx)**
```bash
# 1. Comprimir carpeta dist/
zip -r visonixro-web.zip dist/

# 2. Subir al servidor y extraer en public_html/
unzip visonixro-web.zip
mv dist/* public_html/

# ¡Listo! Tu web está funcionando
```

#### **Opción 2: Hosting Compartido (cPanel)**
```bash
# 1. Acceder al File Manager de cPanel
# 2. Subir todos los archivos de la carpeta 'dist/'
# 3. Extraer en la carpeta public_html/
# 4. Verificar que index.html esté en la raíz
```

#### **Opción 3: GitHub Pages**
```bash
# 1. Crear repositorio en GitHub
# 2. Subir solo los archivos de la carpeta 'dist/'
# 3. Habilitar GitHub Pages desde Settings
# 4. Seleccionar rama main como source
```

#### **Opción 4: Netlify Drag & Drop**
```bash
# 1. Ir a https://netlify.com
# 2. Arrastrar carpeta 'dist/' completa
# 3. ¡Listo! Se genera URL automáticamente
```

#### **Opción 5: Firebase Hosting**
```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Inicializar proyecto
firebase init hosting

# 3. Configurar carpeta 'dist' como public directory
# 4. Deploy
firebase deploy
```

### ⚙️ **Configuración de Servidor Web**

#### **Apache (.htaccess)**
Crear archivo `.htaccess` en la raíz:
```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

#### **Nginx**
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /path/to/dist;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

### 🔧 **Variables de Entorno (Si usas Google Maps)**

Si planeas usar Google Maps, necesitarás configurar la API key:

1. **Obtener API Key**:
   - Ir a [Google Cloud Console](https://console.cloud.google.com/)
   - Crear proyecto y habilitar "Maps JavaScript API"
   - Generar API key

2. **Para deployment estático**: Editar `dist/index.html` y buscar:
   ```html
   <!-- Buscar esta línea y reemplazar YOUR_API_KEY -->
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
   ```

### 🌐 **Verificar Deployment**

Después del deployment, verificar que funcione:

1. ✅ **Página carga correctamente**
2. ✅ **Cambio de idioma funciona** (botón ES/EN)
3. ✅ **Formularios funcionan** (Comenzar Proyecto, Agenda una visita)
4. ✅ **Enlaces de redes sociales funcionan**
5. ✅ **Google Maps carga** (si configuraste API key)
6. ✅ **Responsive en móvil**

### 📱 **URLs de Ejemplo**

Una vez deployado, tu web estará disponible en:
- `tu-dominio.com` - Página principal
- `tu-dominio.com/#contact-form` - Formulario de contacto
- `tu-dominio.com/#appointment-form` - Formulario de citas

### 🚨 **Problemas Comunes**

#### **Página en blanco**
```bash
# 1. Verificar que index.html esté en la raíz
# 2. Verificar permisos de archivos (644 para archivos, 755 para carpetas)
# 3. Verificar consola del navegador para errores
```

#### **Enlaces no funcionan**
```bash
# 1. Configurar redirects para SPA (Single Page Application)
# 2. Usar configuración Apache/Nginx de arriba
# 3. En Netlify: crear archivo _redirects con: /* /index.html 200
```

#### **Google Maps no carga**
```bash
# 1. Verificar que API key esté configurada
# 2. Verificar que JavaScript API esté habilitada
# 3. Verificar restricciones de dominio en Google Cloud
```

### 📊 **Rendimiento**

Los archivos de producción están optimizados:
- ✅ **JavaScript minimizado** (~365 KB comprimido)
- ✅ **CSS optimizado** con Tailwind purging
- ✅ **Imágenes optimizadas**
- ✅ **Tree shaking** aplicado
- ✅ **Lazy loading** implementado

---

## 🎯 **DEPLOYMENT EXITOSO**

¡Tu web de VISONIXRO está lista para recibir clientes con todas las funcionalidades implementadas!

**Contacto de Soporte:**
- CEO: Miguel Angel Romeo Guillen
- Teléfono: +504 88632788
- Email: INFO@VISONIXRO.COM
