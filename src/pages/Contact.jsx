import Footer from "../components/Footer";
import Header from "../components/Header";




function Contact() {
    return (
        <>
            <Header />
            <section class="contact-section">
                <div class="contact-text">
                    <h2>Vamos conversar?</h2>
                    <p>Tem um projeto em mente ou só quer trocar uma ideia? Preencha o formulário e vamos falar sobre desenvolvimento front-end!</p>
                </div>

                <form class="contact-form">
                    <input type="text" placeholder="Seu nome" required />
                    <input type="email" placeholder="Seu e-mail" required />
                    <textarea placeholder="Sua mensagem" rows="5" required></textarea>
                    <button type="submit">Enviar mensagem</button>
                </form>
            </section>

            <Footer />
        </>

    )
}

export default Contact;