import React from 'react';
import Menu from './componentes/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';

export default function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O jogo se passa logo após os fatos do segundo, em que Geralt já é um temido e conhecido guerreiro na terra de Nilfgaard. Neste cenário, ele é perseguido pela Wild Hunt, uma ordem de cavaleiros fantasmagóricos, que farão de tudo para abater o lendário Witcher. Para escapar desta ameaça, o jogador deve buscar aliados e conseguir novos poderes ao longo de sua jornada em um gigantesco mundo para ser explorado."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
};
