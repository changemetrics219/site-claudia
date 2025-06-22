export default function Cursos() {
  return (
    <section id="cursos">
      <div className="container">
        <h2 style={{ textAlign: "center", fontSize: "2.8em", color: "#008080", fontWeight: "bold", marginBottom: 10 }}>Formações & Cursos</h2>
        
        <div className="intro" style={{ textAlign: "center", fontSize: "1.2em", color: "#444", marginBottom: 20, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
          <p>
            Os cursos que desenvolvi foram pensados para lhe dar ferramentas práticas e aplicáveis, tanto na sua vida pessoal como profissional. Pode frequentá-los em formato presencial ou online, conforme a sua disponibilidade.
          </p>
        </div>

        <div className="intro" style={{ textAlign: "center", fontSize: "1.2em", color: "#444", marginBottom: 40, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
          <p>
            <span style={{ fontWeight: "bold", color: "#008080" }}>Como formadora</span>, dedico-me à partilha de conhecimento em três pilares fundamentais:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>💰 <strong>Finanças Pessoais:</strong> Para que possa gerir melhor o seu dinheiro e construir um futuro seguro.</li>
            <li>🚀 <strong>Empreendedorismo & Criação do Próprio Negócio:</strong> Para que transforme ideias em projetos sustentáveis e bem-sucedidos.</li>
            <li>🗣️ <strong>Atendimento, Comunicação & Vendas:</strong> Para desenvolver estratégias comerciais que impulsionem os seus resultados.</li>
          </ul>
        </div>

        <div className="lista-cursos" style={{ display: "grid", gap: "32px", maxWidth: 900, margin: "0 auto 40px auto" }}>
          <div className="curso" style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", padding: 32, borderLeft: "6px solid #008080" }}>
            <h3 style={{ color: "#008080", fontWeight: "bold", fontSize: "1.5em" }}>📘 Curso de Literacia Financeira</h3>
            <p style={{ fontStyle: "italic", color: "#444" }}>
              <strong>Gerir & Enriquecer</strong> – O Caminho para a Liberdade Financeira e um Futuro Próspero
            </p>
            <p>
              Aprenda a gerir as suas finanças, tomar decisões informadas, aumentar a sua segurança financeira e fazer os seus rendimentos crescer a cada dia.
            </p>
          </div>

          <div className="curso" style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", padding: 32, borderLeft: "6px solid #ff9800" }}>
            <h3 style={{ color: "#ff9800", fontWeight: "bold", fontSize: "1.5em" }}>🚀 Curso de Empreendedorismo e Criação do Próprio Negócio</h3>
            <p style={{ fontStyle: "italic", color: "#444" }}>
              <strong>Start & Cresça</strong> – O Caminho do Empreendedor - Construir um Negócio Sólido e Lucrativo
            </p>
            <p>
              Desde a ideia ao plano de negócio, compreenda os passos essenciais para criar e gerir o seu próprio projeto com sucesso.
            </p>
          </div>

          <div className="curso" style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", padding: 32, borderLeft: "6px solid #4caf50" }}>
            <h3 style={{ color: "#4caf50", fontWeight: "bold", fontSize: "1.5em" }}>🗣️ Curso de Atendimento, Comunicação, Vendas e Fidelização de Clientes</h3>
            <p style={{ fontStyle: "italic", color: "#444" }}>
              <strong>Comunique & Venda</strong> – O Caminho para Vendas de Sucesso e Fidelização de Clientes
            </p>
            <p>
              Desenvolva competências essenciais para construir relações duradouras com os seus clientes e aumentar as vendas.
            </p>
          </div>

          <div className="curso" style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", padding: 32, borderLeft: "6px solid #e91e63" }}>
            <h3 style={{ color: "#e91e63", fontWeight: "bold", fontSize: "1.5em" }}>🛠️ Formações à Medida</h3>
            <p style={{ fontStyle: "italic", color: "#444" }}>
              Personalizadas para empresas e profissionais que procuram soluções à medida das suas necessidades e desafios.
            </p>
          </div>
        </div>

        <div className="cta-cursos" style={{ textAlign: "center", marginTop: 40 }}>
          <h3 style={{ color: "#008080", fontWeight: "bold" }}>Porquê escolher estas formações?</h3>
          <ul style={{ display: "inline-block", textAlign: "left", fontSize: "1.1em", color: "#333", margin: "16px 0 24px 0" }}>
            <li>✔️ Aprendizagem prática e dinâmica</li>
            <li>✔️ Mais de 20 anos de experiência comprovada</li>
            <li>✔️ Flexibilidade total: online ou presencial</li>
            <li>✔️ Resultados reais e mensuráveis</li>
          </ul>
          <br />
          <a href="#contato" className="cta-button" style={{ background: "#008080", color: "#fff", padding: "14px 36px", borderRadius: 8, textDecoration: "none", fontWeight: "bold", fontSize: "1.1em", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}>
            Quero Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
}
