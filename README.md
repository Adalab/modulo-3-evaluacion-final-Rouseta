# Evaluación final Módulo 3 React. Harry Potter

## Objetivo

Crear una **página de búsqueda de personajes de la saga de Harry Potter** usando **React, HTML y SCSS**. El ejercicio nos pedía una serie de requistos:

1. Pintar los resultados devueltos por una API dada. Para ello tenemos que crear una función que llame al Fetch y ordenar los resultados quedándonos únicamente con:

- Foto
- Nombre
- Especie
  Es importante que si algunos personajes no tienen imagen que usemos una imagen alternativa.
  En este caso hemos usado el Hook de **React** **useEffect** para llevar los datos desde el fichero api en la carpeta de servicios al fichero principal App.

2. Filtrado de personajes  
   Se ha de poder buscar a los personajes por dos vías:

- Por **nombre**: para ello hemos de crear un **input de tipo text** para que el usuario o usuaria introduzcan los datos de búsqueda
- Por **casa**: para ello hemos creado un **input de tipo select** a través del cual el usuario o usuaria pueden elegir por qué casa filtrar.  
  En esta parte del ejercicio hemos tenido que usar para la gestión de los datos en diferentes componentes, variables de estado a través del Hook **React useState** y **lifting** y **props** para pasar los datos de los componentes hijas a la madre.

Por defecto, al cargar la página ha de aparecer la casa Gryffindor.

3.  Crear componentes  
    Como estamos trabajando con react, se pide que trabajemos mínimo con los siguientes componentes:

- Componente para el filtro de nombre.
- Componente para el listado.
- Componente para la tarjeta de cada personahe del listado.
- Componente para el detalle de cada personaje.

4. Detalle de personajes  
   Al hacer click sobre la tarjeta de un personaje, su información ha de aparecer a pantalla completa, junto a la foto se ha de mostrar:

- Nombre de la casa a la que pertenece.
- Si está vivo o muerto .
- Género.
- Especie.
- Nombres alternativos si los tiene.
  Para realizar esta parte del ejercicio hemos trabajado con la gestión del Router de react a través de la librería de React **React Router Dom**.

5.  Detalles a tener en cuenta

- El campo de texto debe estar recubierto por una etiqueta.
- Impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho textose debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostra el texto que tenía anteriormente.

6. BONUS Mejoras visuales .

- En el detalle mostrar la casa con el enblema.
- Sistema de grid para pintar el listado de personajes.
- Formato responsive.

7. BONUS: URL compartible  
   Si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos
   el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
   Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
   http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje
   del tipo "El personaje que buscas no existe".

8. BONUS: Ordenación  
   Ordenar el listado alfabéticamente.
9. BONUS: Más filtros  
   Añadir, por ejemplo, un filtro de género.
10. BONUS: Botón de reset

    Con el que la página vuelva a su listado principal.

## Herramientas y programas

El ejercicio se ha realizado a través del editor de código fuente **Visual Studio Code**
Hemos instalado los paquete de react de Node Package Manager:

- **React Router Dom** librería para gestionar las rutas en un una Single-Page App.

- **React uuid** para generar ids necesarias para crear rutas dinámicas.

## Timing

El ejercicio se tenía que realizar en el plazo de dos días
