import hexToRgba from 'hex-to-rgba';
import './time.css';
import Colaborador from '../Colaborador';

function Time({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: 'url(/imagens/fundo.png)',
        backgroundColor: hexToRgba(time.cor, '0.6'),
      }}
    >
      <input
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
        type="color"
        value={time.cor}
        className="input-cor"
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            aoFavoritar={aoFavoritar}
            corDeFundo={time.cor}
            key={colaborador.nome}
            colaborador={colaborador}
            aoDeletar={() => aoDeletar(colaborador.id)}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
}

export default Time;
