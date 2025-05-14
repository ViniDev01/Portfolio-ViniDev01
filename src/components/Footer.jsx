import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h2>Entre em contato conosco</h2>
                <a href="https://mail.google.com/mail/?view=cm&to=contato.viniciosss@gmail.com&su=Assunto do e-mail&body=Olá, quero falar com você." target="_blank">
                    contato.viniciosss@gmail.com
                </a>

                <div className="socials">
                    <div className="logo">
                        <h1>SVinicios</h1>
                    </div>

                    <div className="container-socials">
                        <a href="https://wa.me/5511945567985?text=Olá,%20gostaria%20de%20mais%20informações." target='_blank'>11 945567985</a>
                        <div className="socials-icons">
                            <a href='https://www.instagram.com/viniidev01/' target='_blank'><Instagram /></a>
                            <a href="https://www.linkedin.com/in/vinidev01/" target='_blank'><Linkedin /></a>
                            <a href="https://wa.me/5511945567985?text=Olá,%20gostaria%20de%20mais%20informações." target='_blank'><div className='icon-whatsapp'></div></a>
                        </div>
                    </div>
                </div>
                <p>&copy; 2023 SVinicios. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;