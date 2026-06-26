import { useState } from 'react'
import PropTypes from 'prop-types'
import LibroCard from './LibroCard'
import FiltroEstado from './FiltroEstado'

const ListaLibros = ({ libros }) => {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('Todos')

  if (!Array.isArray(libros) || libros.length === 0) {
    return (
      <section className="lista-libros">
        <p className="lista-libros__empty">No hay libros disponibles para mostrar.</p>
      </section>
    )
  }

  const librosNovedades = libros.filter((libro) => libro.esNovedad)
  const librosFiltrados =
    filtroSeleccionado === 'Todos'
      ? libros
      : libros.filter((libro) => libro.estado === filtroSeleccionado)

  const mostrarMensajeVacio = librosFiltrados.length === 0
  const totalLibros = libros.length

  return (
    <section className="lista-libros">
      <div className="lista-libros__header">
        <h2 className="lista-libros__title">Catálogo de libros</h2>
        <div className="lista-libros__meta">
          <div className="lista-libros__novedad-badge">
            <strong>{librosNovedades.length}</strong>
            <span>novedades</span>
          </div>
          <FiltroEstado
            filtroActual={filtroSeleccionado}
            onFiltroChange={setFiltroSeleccionado}
          />
        </div>
      </div>

      {mostrarMensajeVacio ? (
        <p className="lista-libros__empty">
          No hay libros con estado "{filtroSeleccionado}" disponibles en este momento.
        </p>
      ) : (
        <div className="lista-libros__grid">
          {librosFiltrados.map((libro) => (
            <LibroCard key={libro.id} {...libro} />
          ))}
        </div>
      )}

      <p className="lista-libros__count">
        Mostrando {librosFiltrados.length} de {libros.length} libros
      </p>
    </section>
  )
}

ListaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      titulo: PropTypes.string.isRequired,
      editorial: PropTypes.string.isRequired,
      anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']).isRequired,
      resumen: PropTypes.string.isRequired,
      autores: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
      ]).isRequired,
      esNovedad: PropTypes.bool,
    })
  ),
}

ListaLibros.defaultProps = {
  libros: [],
}

export default ListaLibros
