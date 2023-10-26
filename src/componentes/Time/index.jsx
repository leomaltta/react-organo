import './time.css';
import Colaborador from '../Colaborador';

function Time({ time, colaboradores }) {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: 'url(/imagens/fundo.png)',
        backgroundColor: time.corSecundaria,
      }}
    >
      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={time.corPrimaria}
            key={colaborador.nome}
            colaborador={colaborador}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
}

export default Time;
