/* eslint-disable jsx-a11y/label-has-associated-control */
import './campo-texto.css';

function CampoTexto({ aoAlterado, label, valor, required, placeholder }) {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CampoTexto;
