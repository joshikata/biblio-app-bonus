import PropTypes from 'prop-types'
import LibroCard from './LibroCard'

const ListaLibros = ({ libros }) => {
  if (!Array.isArray(libros) || libros.length === 0) {
    return (
      <section className="lista-libros">
        <p className="lista-libros__empty">No hay libros disponibles para mostrar.</p>
      </section>
    )
  }

  return (
    <section className="lista-libros">
      <h2 className="lista-libros__title">Catálogo de libros</h2>
      <div className="lista-libros__grid">
        {libros.map((libro) => (
          <LibroCard key={libro.id} {...libro} />
        ))}
      </div>
    </section>
  )
}

ListaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      titulo: PropTypes.string,
      editorial: PropTypes.string,
      anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']),
      resumen: PropTypes.string,
      autores: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
      ]),
    })
  ),
}

ListaLibros.defaultProps = {
  libros: [],
}

export default ListaLibros
