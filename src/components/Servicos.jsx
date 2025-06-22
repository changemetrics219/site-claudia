export default function Servicos() {
  return (
    <section id="servicos">
      <div className="container">
        <h2>Serviços</h2>

        <div className="servico">
          <h3>Consultoria</h3>
          <p>Receba apoio na preparação e entrega da sua declaração de IRS, maximização de deduções fiscais e esclarecimento de dúvidas.</p>
          <a href="#contato" className="cta-button">Agende uma Consultoria</a>
        </div>

        <div className="servico">
          <h3>Consultoria em Contabilidade Básica</h3>
          <p>Apoio para gestão de contabilidade básica para pequenos empresários e indivíduos. Organize as suas finanças de forma eficiente.</p>
          <a href="#contato" className="cta-button">Agende uma Consultoria</a>
        </div>

        <div className="servico">
          <h3>Cursos Online</h3>
          <p>Curso online sobre como preencher o seu IRS, e outros cursos de contabilidade básica. Aprenda no seu ritmo.</p>
          <a href="#contato" className="cta-button">Saiba Mais</a>
        </div>
      </div>
    </section>
  );
}
