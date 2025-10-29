import './BotaoFlutuante.css';
import { Link } from 'react-router-dom';

function BotaoFlutuante({ 
    to = "/",
    icon = "🏠", 
    title = "Voltar para Home",
    tipo = "home"
}) {

    return(
        <Link to={to} className={`btn-flutuante btn-flutuante--${tipo}`} title={title}>
            <span className="btn-flutuante__icon">{icon}</span> </Link>
    )
}

export default BotaoFlutuante;