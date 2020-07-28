import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/imagens/raphix.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink/index';

export default function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Raphix' />
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Adicionar
            </Button>
        </nav>
        
    );
}