/* eslint-disable jsx-a11y/label-has-associated-control */
import "./DropdownMenu.css";

function DropdownMenu({label, aoAlterado, required, value, itens}) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={value}
      >
        {itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default DropdownMenu;
