import React from 'react';
import '../Styles/header.scss';
import { AiOutlineBell, AiFillSignal } from "react-icons/ai";
import { FaWifi, } from "react-icons/fa";
import { BsBatteryFull } from "react-icons/bs";
import img1 from '../Images/img1.png';


const Header = () => {
    return (
        <section className='container_header'>
            <article className='info_phone'>
                <span>
                    9:41
                </span>
                <div className='icons_phone'>
                    <AiFillSignal />
                    <FaWifi />
                    <BsBatteryFull />
                </div>
            </article>
            <article className='info_name'>
                <h2>Hola, Camila</h2>
                <span className='icon_bell'>
                    <AiOutlineBell />
                </span>
            </article>
            <article className='info_content'>
                <div className='card_blue'>
                    <div className='title_card'>
                        <span>
                            <h2>Eres estratega</h2>
                        </span>
                        <div className='container_img1'>
                            <img src={img1} />
                        </div>
                    </div>
                    <span className='valuetotal_card'>
                        <p className='saldo'>Tu saldo</p>
                        <p className='saldo_number'>$1.570.000</p>
                    </span>
                </div>
                <div className='card_values'>
                    <span className='values_content'>
                        <p className='inversion'>Inversión</p>
                        <p className='inversion value_number'>$1.600.000</p>
                    </span>
                    <span className='values_content'>
                        <p className='rendimiento'>Rendimiento</p>
                        <p className='rendimiento value_number'>-$30.000</p>
                    </span>
                </div>
            </article>
        </section>
    )
}

export default Header;