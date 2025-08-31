# PostHub - Aplicación de Publicaciones y Comentarios

Una aplicación moderna de React para explorar publicaciones y comentarios con funcionalidades avanzadas de búsqueda, filtrado y paginación.

![PostHub Demo](https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## 🚀 Características

- **Lista Paginada**: Navegación fluida entre páginas de publicaciones
- **Búsqueda en Tiempo Real**: Filtra publicaciones por título o contenido
- **Filtro por Usuario**: Muestra publicaciones de usuarios específicos
- **Vista Detallada**: Visualiza publicaciones completas con sus comentarios
- **Diseño Responsivo**: Adaptado para móvil, tablet y desktop
- **Componentes Reutilizables**: Arquitectura modular y mantenible

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores cuidadosamente seleccionada:

- **Blanco Principal**: `#FFFFFF` - Color predominante para fondos limpios
- **Rosa Suave**: `#EDAFB8` - Acentos y elementos decorativos
- **Durazno**: `#F7E1D7` - Gradientes y fondos suaves
- **Salvia**: `#DEDBD2` - Bordes y elementos secundarios
- **Menta**: `#B0C4B1` - Botones principales y elementos interactivos
- **Carbón**: `#4A5759` - Texto principal y elementos de alta jerarquía

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 16.0.0 o superior)
- npm (viene incluido con Node.js)

### Pasos de Instalación

1. **Clona o descarga el proyecto**
   ```bash
   # Si tienes acceso al repositorio
   git clone [URL_DEL_REPOSITORIO]
   cd posthub-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre la aplicación**
   - El servidor se ejecutará en `http://localhost:5173`
   - La aplicación se abrirá automáticamente en tu navegador

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── PostCard.tsx     # Tarjeta individual de publicación
│   ├── PostList.tsx     # Lista de publicaciones
│   ├── CommentCard.tsx  # Tarjeta individual de comentario
│   ├── CommentList.tsx  # Lista de comentarios
│   ├── SearchInput.tsx  # Campo de búsqueda
│   ├── UserFilter.tsx   # Filtro por usuario
│   ├── Pagination.tsx   # Controles de paginación
│   ├── LoadingSpinner.tsx # Indicador de carga
│   ├── EmptyState.tsx   # Estado vacío
│   └── Header.tsx       # Cabecera de la aplicación
├── pages/               # Páginas principales
│   ├── HomePage.tsx     # Página principal con lista de posts
│   └── PostDetailPage.tsx # Página de detalle de publicación
├── hooks/               # Hooks personalizados
│   ├── usePosts.ts      # Hook para manejo de publicaciones
│   └── usePostDetail.ts # Hook para detalles de publicación
├── services/            # Servicios de API
│   └── api.ts           # Servicio para JSONPlaceholder API
├── types/               # Definiciones de tipos TypeScript
│   └── index.ts         # Interfaces principales
├── App.tsx              # Componente raíz con routing
├── main.tsx             # Punto de entrada de la aplicación
└── index.css            # Estilos globales con Tailwind
```

## 🧩 Componentes Principales

### 1. **PostCard**
Componente reutilizable para mostrar información básica de una publicación:
- Título y contenido resumido
- Información del autor
- Efectos hover y animaciones
- Click handler para navegación

### 2. **PostList**
Contenedor que renderiza múltiples PostCard con:
- Grid responsivo (1 columna móvil, 2 tablet, 3 desktop)
- Animaciones escalonadas
- Gestión de datos de usuarios

### 3. **SearchInput**
Campo de búsqueda con:
- Icono de lupa integrado
- Placeholder personalizable
- Estilos consistentes con el tema
- Búsqueda en tiempo real

### 4. **UserFilter**
Selector de usuario que incluye:
- Dropdown con lista de usuarios
- Indicador visual del usuario seleccionado
- Opción para limpiar filtro
- Estado visual del filtro activo

### 5. **Pagination**
Controles de navegación con:
- Botones anterior/siguiente
- Números de página clickeables
- Estados deshabilitados
- Scroll automático al cambiar página

### 6. **CommentCard & CommentList**
Sistema de comentarios que muestra:
- Información del comentarista
- Contenido del comentario
- Animaciones de entrada
- Contador de comentarios

## 🔄 Funcionalidades

### Navegación
- **Página Principal** (`/`): Lista de publicaciones con filtros
- **Detalle de Publicación** (`/post/:id`): Vista completa con comentarios

### Búsqueda y Filtrado
- **Búsqueda por Texto**: Busca en títulos y contenido de publicaciones
- **Filtro por Usuario**: Muestra solo publicaciones de un usuario específico
- **Combinación de Filtros**: Los filtros funcionan en conjunto

### Paginación
- **6 publicaciones por página** para optimizar el rendimiento
- **Navegación intuitiva** con botones y números de página
- **Información de contexto** sobre página actual y total

### Experiencia de Usuario
- **Animaciones Suaves**: Transiciones y efectos hover
- **Estados de Carga**: Spinners y mensajes informativos
- **Estados Vacíos**: Mensajes cuando no hay resultados
- **Responsive Design**: Funciona perfectamente en todos los dispositivos

## 🔌 API

La aplicación utiliza [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como fuente de datos:

- **Posts**: `/posts` - Lista de publicaciones
- **Comments**: `/posts/{id}/comments` - Comentarios por publicación
- **Users**: `/users` - Información de usuarios

## 🎯 Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **React Router** - Navegación y rutas
- **Tailwind CSS** - Framework de estilos
- **Vite** - Bundler y servidor de desarrollo
- **Lucide React** - Iconografía moderna
- **Custom Hooks** - Lógica reutilizable

## 🚧 Desarrollo

### Estructura de Hooks

**usePosts**: Maneja toda la lógica de la página principal:
- Carga de datos desde la API
- Filtrado por búsqueda y usuario
- Paginación y navegación
- Estados de carga

**usePostDetail**: Gestiona la vista de detalle:
- Carga de publicación específica
- Carga de comentarios relacionados
- Información del autor
- Manejo de errores

### Principios de Diseño

1. **Modularity**: Cada componente tiene una responsabilidad específica
2. **Reusabilidad**: Los componentes se pueden usar en diferentes contextos
3. **Consistencia**: Patrones de diseño unificados en toda la aplicación
4. **Performance**: Carga eficiente y paginación para manejar grandes datasets
5. **Accessibility**: Elementos semánticos y navegación por teclado

---

¡Disfruta explorando publicaciones y comentarios con PostHub! 🎉