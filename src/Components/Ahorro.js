import React from 'react';
import '../Styles/ahorro.scss';
import { GoPrimitiveDot } from "react-icons/go";
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';
import img7 from '../Images/img7.png';


const Ahorro = () => {
    return (
        <section className='container_ahorro'>
            <article className='title_ahorro'>
                <h2>Los P*t@s del ahorro</h2>
            </article>
            <article className='content_ahorro'>
                <div className='corousel_ahorro'>
                    <div className='container_img4'>
                        <img src={img4} />
                    </div>
                    <div className='dots_icon'>
                        <GoPrimitiveDot className='dot_icon_color' />
                        <GoPrimitiveDot />
                        <GoPrimitiveDot />
                    </div>
                </div>
                <div className='info_ahorro'>
                    <div className='info_ahorro_description'>
                        <div className='text'>
                            <p className='text1'>10 gastos que debes evitar</p>
                            <p className='text2'>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                        </div>
                        <div>
                            <img src={img5} />
                        </div>
                    </div>
                    <div className='info_ahorro_description'>
                        <div className='text'>
                            <p className='text1'>10 gastos que debes evitar</p>
                            <p className='text2'>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                        </div>
                        <div>
                            <img src={img6} />
                        </div>
                    </div>
                    <div className='info_ahorro_description'>
                        <div className='text_end'>
                            <p className='text1'>10 gastos que debes evitar</p>
                            <p className='text2'>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                        </div>
                        <div>
                            <img src={img7} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Ahorro;