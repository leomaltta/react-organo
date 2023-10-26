import './Botao.css';

function Botao({ children }) {
  return (
    <button type="submit" className="botao">
      {children}
    </button>
  );
}

export default Botao;
