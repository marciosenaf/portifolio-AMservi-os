/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css'
import React from 'react'


import Item1 from '../../assets/imgs/projetos/item1.png'
import Item2 from '../../assets/imgs/projetos/item2.png'
import Item3 from '../../assets/imgs/projetos/item3.png'
import Item4 from '../../assets/imgs/projetos/item4.png'


import Button from '../Buttons/Button';
import {contCarousel, Item, Imagem, ProjectContent, TitleProject, SecondTitle,  Subtitle, ButtonsArea, ToolsIcons, Icons} from './Item';


export default props => {
    const breakPoints = [
        { width: 850, itemsToShow: 3, pagination: false },
        { width: 1, itemsToShow: 1, itemsToScroll: 2, pagination: false },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3, pagination: false },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
        { width: 1450, itemsToShow: 5, pagination: false },
        { width: 2000, itemsToShow: 4, pagination: false }
    ] 

    return (
        <div className="contCarousel">   
            <div className="carousel-wrapper">
                <Carousel isLTR breakPoints={breakPoints}>
                    <Item>
                        <Imagem src={Item1}></Imagem>
                        <ProjectContent>
                            <TitleProject>Página de <SecondTitle>Captura</SecondTitle></TitleProject>
                            <ButtonsArea>
                                <Button link="https://mindsetmilitar.com/cadastro/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                            </ButtonsArea>
                            <ToolsIcons>
                            </ToolsIcons> 
                        </ProjectContent>
                    </Item>
                    <Item>
                        <Imagem src={Item2}></Imagem>
                        <ProjectContent>
                            <TitleProject>loja de <SecondTitle>Brinquedos</SecondTitle></TitleProject>
                            <ButtonsArea>
                                <Button link="https://www.japanbrinquedos.com.br/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                            </ButtonsArea>
                        </ProjectContent>
                    </Item>
                    <Item>
                        <Imagem src={Item3}></Imagem>
                        <ProjectContent>
                            <TitleProject>Página de <SecondTitle>Vendas de curso</SecondTitle></TitleProject>
                            <ButtonsArea>
                                <Button link="https://brunovivas.com/psicanalise-na-vida-cotidiana/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                            </ButtonsArea>
                        </ProjectContent>
                    </Item>
                    <Item>
                        <Imagem src={Item4}></Imagem>
                        <ProjectContent>
                            <TitleProject>loja de<SecondTitle>Refrigeração</SecondTitle></TitleProject>
                            <ButtonsArea>
                                <Button link="https://climatche.com.br/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                            </ButtonsArea>
                        </ProjectContent>
                    </Item>
                                        
                </Carousel>
            </div>

        </div>
    )
}