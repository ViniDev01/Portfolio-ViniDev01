import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h2>Entre em contato conosco</h2>
                <a href="" className='email-footer'>contato.viniciosss@gmail.com</a>

                <div className="socials">
                    <div className="logo">
                        <h1>SVinicios</h1>
                    </div>

                    <div className="container-socials">
                        <a href="">11 945567985</a>
                        <div className="socials-icons">
                            <a href=''><Instagram /></a>
                            <a href=''><Linkedin /></a>
                            <a href=''><div className='icon-whatsapp'></div></a>
                        </div>
                    </div>
                </div>
                <p>&copy; 2023 SVinicios. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;