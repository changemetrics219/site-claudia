export default function Sobre() {
  return (
    <section id="sobre">
      <div className="sobre-claudia">
        <div className="foto-claudia">
          <img src="/claudia.png" alt="Foto de Cláudia Carreira" className="foto" />
        </div>
        <div className="texto-sobre">
          <h2>Sobre Mim</h2>
          <p>
            <strong>Sou Cláudia Carreira</strong>, contabilista certificada, especialista em finanças pessoais e empreendedorismo, com <strong>24 anos de experiência</strong> na área bancária.
            <br />
            <span className="missao">
              A minha missão é ajudar pessoas e empresas a alcançar o sucesso financeiro e profissional, através de <strong>formações dinâmicas e transformadoras</strong>.
            </span>
          </p>

          

          <div className="cta-final">
            <p>
              <strong>Dê o Primeiro Passo para o Seu Sucesso!</strong><br />
              Junte-se a mim nesta jornada de conhecimento e crescimento.<br />
              <span className="destaque">
                Invista em si, no seu futuro e no seu negócio!
              </span><br />
              <em>Para mais informações ou inscrições, entre em contacto e descubra a formação ideal para si ou para a sua empresa!</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
