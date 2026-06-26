Componente: en la app, creando filtro, librocard y lista libros. Ayuda a poder dividir el codigo utilizando la herencia como principal ayuda para no repetir codigo.
JSX: se usa en todo el codigo, ayuda con la creacion del codigo de manera mas facil y amigable pareciendose a html.
Props: en librocard recibiendo los datos de titulo, anio, etc. Ayuda a que el componente hijo no se sature de informacion y asi la tenga el padre para luego solo llamar mediante funciones.
Estado: en filtroestado para guardar la info del estado del libro y no estar cambiandolo manualmente cuando cambie el filtro.
Renderizado: recorre el arreglo de libros, ayuda con las listas y a identificar cada elemento.
Renderizado condicional: ayuda cuando los input quedan vacios y asi no tire error por ejemplo, funciona mediante una condicion. Si el input esta vacio no se mostrarán los libros sino que un mensaje que diga ..... y asi se puede hacer en otros componentes.

1. ¿Qué ventaja tiene dividir el catálogo en componentes en lugar de escribir todo en un solo archivo?
Ayuda a tener el codigo mas limpio y organizado, reutilizando partes como se menciono anteriormente a traves de los componentes padres e hijos. Sumandole que a cualquier error o modificacion que exista no es necesario cambiar todo el codigo sino que solo el componente en especifico.

2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno.
se usan los props, ya que librocard utiliza esto recibiendo el titulo, anio, autor, etc.
y el usestate ayuda con el cambio constante de una variable. por ej el filtro que puede cambiar de disponible a prestado y esta se actualiza automaticamente cuando llamo solo a los libros que esten prestados.