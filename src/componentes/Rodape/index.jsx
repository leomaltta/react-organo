import './Rodape.css';

function Rodape() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="Facebook Logo" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="Twitter Logo" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="Instagram Logo" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Organo Logo" />
      </section>
      <section>
        <p>Desenvolvido por Leonardo Malta</p>
      </section>
    </footer>
  );
}

export default Rodape;
