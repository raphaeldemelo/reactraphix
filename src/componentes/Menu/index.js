import React from 'react';
import Logo from '../../assets/imagens/raphix.png';
import './Menu.css';

import Button from '../Button';
//import ButtonLink from '../ButtonLink/index';

export default function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Raphix' />
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                Adicionar
            </Button>
        </nav>
    )
}