import avatar from '../assets/avatar1.png'

function BannerAbout() {
    return (
        <div className="banner-about">
            <div className="intro">
                <div className='title'>
                    <h1>Prazer, sou</h1>
                    <span>Vinicios!</span>
                    <p>Desenvolvedor Front-End | JavaScript | React.js</p>
                </div>
                <div className="action">
                    <a href="" download="Meu-Curriculo.pdf">Download Cv</a>
                    <a href="https://mail.google.com/mail/?view=cm&to=contato.viniciosss@gmail.com&su=Assunto do e-mail&body=Olá, quero falar com você sobre:" target='_blank' className='hi-desktop'>Entrar em contato</a>
                    <a href="mailto:contato.viniciosss@email.com?subject=Assunto do e-mail&body=Olá, quero falar com você sobre:" target='_blank' className='hi-mobile'>Entrar em contato</a>
                </div>
            </div>

            <div className="profile">
                <a href="" target="_blank">
                    <img src={avatar} alt="avatar" />
                </a>
            </div>
        </div>
    )
}

export default BannerAbout;