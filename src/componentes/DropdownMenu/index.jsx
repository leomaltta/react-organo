/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './DropdownMenu.css';

function DropdownMenu({ label, aoAlterado, required, valor, itens }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value="" />

        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
