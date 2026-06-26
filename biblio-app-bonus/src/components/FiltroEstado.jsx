import PropTypes from 'prop-types'
import './FiltroEstado.css'

const FiltroEstado = ({ filtroActual, onFiltroChange }) => {
  const opciones = [
    { valor: 'Todos', etiqueta: 'Todos' },
    { valor: 'Disponible', etiqueta: 'Disponible' },
    { valor: 'Prestado', etiqueta: 'Prestado' },
    { valor: 'Reservado', etiqueta: 'Reservado' },
  ]

  return (
    <div className="filtro-estado">
      <p className="filtro-estado__label">Filtrar por estado:</p>
      <div className="filtro-estado__botones">
        {opciones.map((opcion) => (
          <button
            key={opcion.valor}
            className={`filtro-estado__boton ${
              filtroActual === opcion.valor
                ? 'filtro-estado__boton--activo'
                : ''
            }`}
            onClick={() => onFiltroChange(opcion.valor)}
            type="button"
          >
            {opcion.etiqueta}
          </button>
        ))}
      </div>
    </div>
  )
}

FiltroEstado.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  onFiltroChange: PropTypes.func.isRequired,
}

export default FiltroEstado
