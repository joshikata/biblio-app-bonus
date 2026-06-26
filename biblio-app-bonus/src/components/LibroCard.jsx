import PropTypes from 'prop-types'
import './LibroCard.css'

const estadoClases = {
  Disponible: 'libro-card__estado--disponible',
  Prestado: 'libro-card__estado--prestado',
  Reservado: 'libro-card__estado--reservado',
}

const LibroCard = ({ titulo, editorial, anio, estado, resumen, autores, esNovedad }) => {
  const estadoClase = estadoClases[estado] || 'libro-card__estado--disponible'
  const autoresTexto = Array.isArray(autores) ? autores.join(', ') : autores

  return (
    <article className="libro-card">
      {esNovedad && <span className="libro-card__novedad">NOVEDAD</span>}

      <div className="libro-card__hero">
        <div className="libro-card__cover">
          <div className="libro-card__cover-art">
            <span />
            <span />
            <span />
          </div>
        </div>

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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
}

LibroCard.defaultProps = {
  esNovedad: false,
}

export default LibroCard
