import React from 'react';
import '../Styles/portafolio.scss';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import donut3 from '../Images/donut3.png';
import img8 from '../Images/img8.png';

const Portafolio = () => {
    return (
        <section className='container_portafolio'>
            <article className='title_portafolio'>
                <h2>Conoce tu portafolio</h2>
                <span className='btn_estratega'>
                    Estratega
                </span>
            </article>
            <article className='content_portafolio'>
                <div className='card_portafolio'>
                    <div className='principal_card'>
                        <div className='container_donut3'>
                            <img src={donut3} />
                        </div>
                        <div className='container_logo'>
                            <img src={img8} />
                            <div className='navigation_logo'>
                                <MdNavigateBefore />
                                <MdNavigateNext />
                            </div>
                        </div>
                    </div>
                    <div className='second_card'>
                        <p className='info_second_card'>Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Portafolio;