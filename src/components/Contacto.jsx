export default function Contato() {
  return (
    <section id="contato">
      <div className="container">
        <h2>Contato</h2>
        <p>Tem alguma dúvida ou quer agendar uma consultoria? Entre em contacto comigo!</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="nome" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
          <button type="submit" className="cta-button">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
