# BiblioApp React

Aplicación web SPA desarrollada en React para una biblioteca comunitaria. Permite visualizar un catálogo digital de libros, consultar su información principal y filtrar los libros según su estado.

## Contexto del proyecto

Una biblioteca comunitaria busca reemplazar su fichero impreso por un catálogo digital interactivo para que los visitantes puedan consultar los libros desde un tótem en la entrada.

La aplicación no requiere base de datos ni conexión a internet, ya que los datos provienen de un archivo local.

## Objetivo

Desarrollar una aplicación web simple, ordenada y segura que permita:

* Visualizar el catálogo de libros.
* Identificar el estado de cada libro.
* Filtrar los libros por estado.
* Mostrar la información de cada libro mediante componentes reutilizables.

## Tecnologías utilizadas

* React
* JavaScript
* HTML
* CSS
* Node.js
* Vite

## Funcionalidades

* Visualización de libros mediante tarjetas.
* Componentes reutilizables.
* Renderizado de listas utilizando `.map()`.
* Uso de `key` con el `id` de cada libro.
* Filtro por estado:

  * Todos
  * Disponible
  * Prestado
  * Reservado
* Uso de `useState` para administrar el filtro seleccionado.
* Renderizado condicional cuando no existen libros que coincidan con el filtro.
* Colores para identificar el estado de cada libro:

  * 🟢 Disponible
  * 🔴 Prestado
  * 🟡 Reservado

## Estructura del proyecto

```text
src/
├── components/
│   ├── LibroCard.jsx
│   └── ListaLibros.jsx
├── data/
│   └── libros.js
├── App.jsx
├── App.css
└── main.jsx
```

## Instalación y ejecución

1. Instalar las dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```


