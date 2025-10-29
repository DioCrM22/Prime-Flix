import { useEffect, useState, useRef } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: 'e42927b0097dec5ab37664bf19721ab9',
          language: 'pt-BR',
          page: 1,
        },
      });
      setFilmes(response.data.results);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container">
      <section className="carousel-section">
        <h2 className="section-title">Em Destaque</h2>

        <div className="carousel-wrapper">
          <button className="arrow left" onClick={() => scroll(-400)}>&lt;</button>

          <div className="carousel" ref={carouselRef}>
            {filmes.slice(0, 12).map((filme, index) => (
              <Link 
                to={`/filme/${filme.id}`} 
                className="carousel-item" 
                key={filme.id}
                style={{ '--item-index': index }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
                  alt={filme.title}
                />
                <div className="carousel-info">
                  <h3>{filme.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <button className="arrow right" onClick={() => scroll(400)}>&gt;</button>
        </div>
      </section>

      {/* 🔹 LISTA DE FILMES */}
      <section className="lista-section">
        <h2 className="section-title">Mais Filmes</h2>
        <div className="lista-filmes">
          {filmes.slice(8, 20).map((filme) => (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
