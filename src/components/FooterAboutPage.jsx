import { Mail, Linkedin, Github } from 'lucide-react';
import Whatsapp from '../assets/whatsapp-hover.png'

function FooterAboutPage() {
    return (
        <div className="footer-contato">
            <h2>contato</h2>

            <div className="icons">
                <div className="icon">
                    <a href="">
                        <Mail />
                        <span>E-mail</span>
                        <span>contato.viniciosss@gmail.com</span>
                    </a>
                </div>
                <div className="icon">
                    <a href="www.linkedin.com/in/vinidev01">
                        <Linkedin />
                        <span>Linkedin</span>
                        <span>@vinicios</span>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/ViniDev01">
                        <Github />
                        <span>Github</span>
                        <span>@ViniDev01</span>
                    </a>
                </div>
                <div className="icon">
                    <a href="">
                        <img src={Whatsapp} alt='Whatsapp' />
                        <span>Whatsapp</span>
                        <span>11 945567985</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterAboutPage;