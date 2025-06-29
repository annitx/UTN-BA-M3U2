# PetShop Patitas Felices

Este proyecto es una aplicación web para el negocio de mascotas "Patitas Felices". Está desarrollada con Node.js y Express, y permite mostrar información sobre productos, servicios, ofertas y contacto para clientes.

## Estructura del Proyecto

```
petshop-patitas-felices
├── src
│   ├── app.js                # Punto de entrada de la aplicación
│   ├── routes                # Manejadores de rutas de la app
│   │   ├── index.js          # Ruta para la página de inicio
│   │   ├── categorias.js     # Ruta para la sección de categorías
│   │   ├── servicios.js      # Ruta para la sección de servicios
│   │   ├── ofertas.js        # Ruta para la sección de ofertas
│   │   └── contacto.js       # Ruta para la sección de contacto
│   └── views                 # Vistas HTML de la aplicación
│       ├── index.html        # Página de inicio
│       ├── categorias.html   # Página de categorías
│       ├── servicios.html    # Página de servicios
│       ├── ofertas.html      # Página de ofertas
│       └── contacto.html     # Página de contacto
├── public                    # Archivos estáticos (CSS, imágenes)
│   ├── css/
│   ├── img/
│   
├── package.json              # Configuración de npm y dependencias
└── README.md                 # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

Para iniciar la aplicación, ejecuta:

```
node src/app.js
```

Luego abre tu navegador en [http://localhost:3000](http://localhost:3000).