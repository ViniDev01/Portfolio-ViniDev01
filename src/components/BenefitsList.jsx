
import React from 'react';
import { ScrollText, Check } from 'lucide-react';

function BenefitsList() {
    return (
        <div className="benefits-list">
            <h2>Benefícios do Projeto <ScrollText /></h2>

            <ul>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Design Responsivo
                    </h3>

                    <p>
                        Seu site funcionará perfeitamente em <strong>computadores, tablets e celulares</strong>.
                    </p>
                </li>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Interface Moderna e Intuitiva
                    </h3>

                    <p>
                        <strong>Layouts limpos</strong>, agradáveis e fáceis de navegar, seguindo as últimas tendências de <strong>UI/UX</strong>.
                    </p>
                </li>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Performance Otimizada
                    </h3>

                    <p>
                        Carregamento rápido com boas práticas de desempenho e <strong>SEO básico</strong>.
                    </p>
                </li>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Código Limpo e Escalável
                    </h3>

                    <p>
                        Escrito com boas práticas, facilitando manutenção e futuras melhorias.
                    </p>
                </li>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Integração com APIs
                    </h3>

                    <p>
                        Seu projeto pode se comunicar com <strong>bancos de dados</strong>, <strong>serviços externos</strong>, ou <strong>sistemas personalizados</strong>.
                    </p>
                </li>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Funcionalidades Interativas
                    </h3>

                    <p>
                        Animações, sliders, menus dinâmicos, formulários funcionais e muito mais com <strong>JavaScript</strong> e <strong>React</strong>.
                    </p>
                </li>
                <li className="benefits-list__item">
                    <h3>
                        <Check />
                        Documentação e Suporte Inicial
                    </h3>

                    <p>
                        Entrega com instruções básicas de uso e suporte para os primeiros ajustes.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default BenefitsList;