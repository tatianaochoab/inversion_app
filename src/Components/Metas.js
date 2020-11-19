import React from 'react';
import '../Styles/metas.scss';
import { MdAddCircleOutline } from "react-icons/md";
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import donut1 from '../Images/donut1.png';
import donut2 from '../Images/donut2.png';

const Metas = () => {
    return (
        <section className='container_metas'>
            <article className='title_metas'>
                <h2>Tus metas</h2>
                <span className='icon_add'>
                    <MdAddCircleOutline />
                </span>
            </article>
            <article className='card_meta'>
                <div className='meta'>
                    <div className='info_meta'>
                        <div>
                            <img src={img2} />
                        </div>
                        <span>
                            <p>Viajes a las islas canarias</p>
                        </span>
                    </div>
                    <div className='info_value'>
                        <div>
                            <img src={donut1} />
                        </div>
                        <span>
                            <p className='value_ahorro'>$1.630.000</p>
                            <p>$8.000.000</p>
                        </span>
                    </div>
                </div>
                <div className='meta'>
                    <div className='info_meta'>
                        <div>
                            <img src={img3} />
                        </div>
                        <span>
                            <p>Macbook Pro</p>
                        </span>
                    </div>
                    <div className='info_value'>
                        <div>
                        <img src={donut2} />
                        </div>
                        <span>
                            <p className='value_ahorro'>$0</p>
                            <p>$7.000.000</p>
                        </span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Metas;