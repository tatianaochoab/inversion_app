import React from 'react';
import '../Styles/menu.scss';
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";
import { BiUserCircle, BiDotsHorizontalRounded } from "react-icons/bi";


const Menu = () => {
    return (
        <section className='container_menu'>
            <article className='eclipse'>
                <div className='add_icon'>
                    <AiOutlinePlus />
                </div>
            </article>
            <article className='navbar'>
                <div className='navbar_icon'>
                    <VscHome className='home_icon'/>
                    <span className='info_icon_home'>Inicio</span>
                </div>
                <div className='navbar_icon'>
                    <AiOutlineUnorderedList/>
                    <span className='info_icon'>Historial</span>
                </div>
                <div className='navbar_icon'>
                <BiDotsHorizontalRounded/>
                    <span className='info_icon'>Ahorrar</span>
                </div>
                <div className='navbar_icon'>
                    <BiUserCircle/>
                    <span className='info_icon'>Mi perfil</span>
                </div>
                <div className='navbar_icon'>
                    <BiDotsHorizontalRounded/>
                    <span className='info_icon'>Más</span>
                </div>
            </article>
        </section>
    )
}

export default Menu;