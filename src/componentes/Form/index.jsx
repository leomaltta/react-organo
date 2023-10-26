import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import DropdownMenu from '../DropdownMenu';
import './form.css';

function Form({ aoCadastrar, times }) {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          required
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownMenu
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          required
          label="Time"
          items={times}
        />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
}

export default Form;
