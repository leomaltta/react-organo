import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css';

function Colaborador({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart
              size={25}
              onClick={() => aoFavoritar(colaborador.id)}
              color='#ff0000'
            />
          ) : (
            <AiOutlineHeart
              size={25}
              onClick={() => aoFavoritar(colaborador.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Colaborador;
