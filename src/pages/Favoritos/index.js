import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import BotaoFlutuante from '../../components/BotaoFlutuante';

function Favoritos(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmesFavoritos(){
            try {
                // 1. Busca a lista do localStorage
                const minhaLista = localStorage.getItem("@primeflix");
                const filmesSalvos = JSON.parse(minhaLista) || [];
                
                // 2. Se não há filmes, finaliza o loading
                if(filmesSalvos.length === 0){
                    setLoading(false);
                    return;
                }

                // 3. Atualiza o estado com os filmes do localStorage
                setFilmes(filmesSalvos);
                setLoading(false);
                
            } catch (error) {
                console.error("Erro ao carregar filmes favoritos:", error);
                toast.error("Erro ao carregar filmes favoritos");
                setLoading(false);
            }
        }

        loadFilmesFavoritos();

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso");
    }

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando seus filmes...</h2>
            </div>
        )
    }
    
    return(
        <div className='meus-filmes'>
            <h1>Meus filmes favoritos</h1>
            <BotaoFlutuante />

            {filmes.length === 0 && (
                <div className="lista-vazia">
                    <span>Você não possui nenhum filme salvo :( </span>
                    <Link to="/" className="btn-explorar">🎬 Explorar filmes</Link>
                </div>
            )}

            <div className="filmes-grid">
                {filmes.map((item)=> {
                    return(
                        <div className="filme-card" key={item.id}>
                            <div className="filme-imagem">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                                    alt={item.title}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x450/333/fff?text=Imagem+Não+Encontrada';
                                    }}
                                />
                            </div>
                            <div className="filme-info">
                                <h3>{item.title}</h3>
                                <p className="filme-avaliacao">
                                    ⭐ {item.vote_average?.toFixed(1) || 'N/A'}
                                </p>
                                <p className="filme-overview">
                                    {item.overview?.substring(0, 120)}...
                                </p>
                                <div className="filme-actions">
                                    <Link to={`/filme/${item.id}`} className="btn-detalhes">
                                        Ver detalhes
                                    </Link>
                                    <button 
                                        onClick={() => excluirFilme(item.id)} 
                                        className="btn-excluir"
                                    >
                                        Excluir
                                    </button>
                                </div>                                
                            </div>                           
                        </div>                        
                    )
                })}
            </div>
        </div>
    )
}

export default Favoritos;