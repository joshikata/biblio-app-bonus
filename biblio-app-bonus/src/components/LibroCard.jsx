import PropTypes from 'prop-types'
import './LibroCard.css'

const estadoClases = {
  Disponible: 'libro-card__estado--disponible',
  Prestado: 'libro-card__estado--prestado',
  Reservado: 'libro-card__estado--reservado',
}

const LibroCard = ({ titulo, editorial, anio, estado, resumen, autores }) => {
  const estadoClase = estadoClases[estado] || 'libro-card__estado--disponible'
  const autoresTexto = Array.isArray(autores) ? autores.join(', ') : autores

  return (
    <article className="libro-card">
      <div className="libro-card__hero">
        <div className="libro-card__hero-text">
          <p className="libro-card__eyebrow">Ficha del libro</p>
          <h3 className="libro-card__titulo">{titulo}</h3>
          <p className="libro-card__meta">
            <span>{editorial}</span>
            <span className="libro-card__meta-separator">·</span>
            <span>{anio}</span>
          </p>
        </div>
        <span className={`libro-card__estado ${estadoClase}`}>{estado}</span>
      </div>

      <div className="libro-card__section">
        <h4 className="libro-card__section-title">Resumen</h4>
        <p className="libro-card__resumen">{resumen}</p>
      </div>

      <div className="libro-card__section">
        <h4 className="libro-card__section-title">Autor(es)</h4>
        <p className="libro-card__autores">{autoresTexto}</p>
      </div>
    </article>
  )
}

LibroCard.propTypes = {
  titulo: PropTypes.string,
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']),
  resumen: PropTypes.string,
  autores: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
}

LibroCard.defaultProps = {
  titulo: 'Título desconocido',
  editorial: 'Editorial no disponible',
  anio: 'N/A',
  estado: 'Disponible',
  resumen: 'No hay resumen disponible.',
  autores: 'Autor desconocido',
}

export default LibroCard
