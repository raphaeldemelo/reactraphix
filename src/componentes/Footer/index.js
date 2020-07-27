import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por <a style={{ textDecoration: 'none', color:'#076B92' }}  href='https://www.linkedin.com/in/raphaeldemelo/'><b>Raphael de Melo</b></a> durante a
        {' '}
        <a href="https://www.alura.com.br/" style={{ textDecoration: 'none', color:'#076B92' }}><b>Imersão React da Alura</b></a>
      </p>
    </FooterBase>
  );
}

export default Footer;
