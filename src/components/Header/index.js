import './header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import api from '../../services/api';

function Header(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // 🔍 Fechar resultados ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🔍 Buscar filmes na API
  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const searchFilmes = async () => {
      try {
        const response = await api.get('/search/movie', {
          params: {
            api_key: 'e42927b0097dec5ab37664bf19721ab9',
            language: 'pt-BR',
            query: searchTerm,
            page: 1
          }
        });
        setSearchResults(response.data.results.slice(0, 5));
        setShowResults(true);
      } catch (error) {
        console.error('Erro na busca:', error);
        setSearchResults([]);
      }
    };

    const delayDebounce = setTimeout(() => {
      searchFilmes();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return(
    <header>
      <Link className="logo" to="/">
        <img 
          src="/images/logo.png" 
          alt="Prime Flix" 
          className="logo-imagem"
        />
      </Link>

      <Link className="favoritos" to="/favoritos">
        <span>Meus Filmes</span>
      </Link>

      <div className="search-container" ref={searchRef}>
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="🔍 Pesquisar filmes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((filme) => (
                <Link 
                  key={filme.id} 
                  to={`/filme/${filme.id}`}
                  className="search-result-item"
                  onClick={() => {
                    setShowResults(false);
                    setSearchTerm('');
                  }}
                >
                  <span>{filme.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;