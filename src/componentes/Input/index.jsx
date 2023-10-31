/* eslint-disable jsx-a11y/label-has-associated-control */
import './input.css';

function Input({
  type = 'text',
  aoAlterado,
  label,
  valor,
  required,
  placeholder,
}) {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
