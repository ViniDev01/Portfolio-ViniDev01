import React from 'react';
import { Link } from "react-router-dom";
//import MinhaFoto from "../assets/minhafoto.png";
import MinhaFoto from "../assets/minha-foto2.png";

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <h2>Que tal me conhecer melhor?</h2>

                <p>Sou um desenvolvedor front-end apaixonado por criar interfaces incríveis e funcionais. 
                Com experiência em HTML, CSS, JavaScript e react estou sempre em busca de novos desafios e aprendizados.</p>

                <Link to="/sobre" className="btn-about btn">Saiba mais </Link>
            </div>

            <div className="about-right">
                <div className='image-container'>
                    <img src={MinhaFoto} alt="Minha Foto" className="minha-foto" />
                </div>
                
            </div>
        </div>
    )
}

export default About;