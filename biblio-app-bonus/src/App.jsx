import LibroCard from './components/LibroCard'
import ListaLibros from './components/ListaLibros'
import { libros } from './data/libros'
import './App.css'

function App() {
  const featuredBooks = libros.slice(0, 4)

  return (
    <main className="app-shell">
      <section className="landing-hero">
        <div className="landing-hero__copy">
          <span className="landing-hero__eyebrow">Colección del estante</span>
          <h1 className="landing-hero__title">
            Diseña tu lectura en una biblioteca cálida, ordenada y fácil de explorar.
          </h1>
          <p className="landing-hero__description">
            Navega entre libros con estado claro, portadas inspiradoras y una presentación que recuerda los mejores rincones de lectura.
          </p>

          <div className="landing-hero__stats">
            <div>
              <strong>{libros.length}</strong>
              <span>títulos disponibles</span>
            </div>
            <div>
              <strong>3</strong>
              <span>colecciones temáticas</span>
            </div>
            <div>
              <strong>{featuredBooks.length}</strong>
              <span>selecciones destacadas</span>
            </div>
          </div>
        </div>

        <div className="landing-hero__visual">
          <img
            
            alt="Estantería de biblioteca con libros bien organizados"
            className="landing-hero__photo"
          />

          <div className="landing-hero__gallery">
            {featuredBooks.map((book) => (
              <article key={book.id} className="landing-hero__cover">
                <div className="landing-hero__cover-photo" />
                <div className="landing-hero__cover-info">
                  <p>{book.titulo}</p>
                  <span>{book.autores.join(', ')}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-collections">
        <div className="landing-collections__header">
          <p className="landing-collections__eyebrow">Espacios de lectura</p>
          <h2>Diseño inspirado en estantes, luz cálida y navegación ordenada</h2>
        </div>

        <div className="landing-collections__panels">
          <div className="landing-collections__panel">
            <h3>Lecturas recomendadas</h3>
            <p>Selecciona libros con alto interés y estados visibles para elegir con confianza.</p>
          </div>
          <div className="landing-collections__panel">
            <h3>Novedades</h3>
            <p>Descubre los lanzamientos recientes y los títulos más frescos del catálogo.</p>
          </div>
          <div className="landing-collections__panel">
            <h3>Clásicos esenciales</h3>
            <p>Encuentra historias que han marcado generaciones y siguen presentes en la biblioteca.</p>
          </div>
        </div>
      </section>

      <ListaLibros libros={libros} />

      <div className="ticks" />
    </main>
  )
}

export default App
