import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Metas from './Metas';
import Portafolio from './Portafolio';
import Ahorro from './Ahorro';
import Tab from '../Images/Tab.png'

const Home = () => {
    return (
        <section className='home'>
            <Header/>
            <Metas/>
            <Portafolio/>
            <Ahorro/>
            <Menu />
            <div className='container_tab'>
                <img src={Tab}/>
            </div>
        </section>
    )

}

export default Home;