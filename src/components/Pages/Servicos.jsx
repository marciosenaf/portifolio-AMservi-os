import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


import Cards from "../Cards/Cards"
import front from "../../assets/imgs/front.png"
import web from "../../assets/imgs/web.png"
import ux from "../../assets/imgs/ux.png"
import './Servicos.css'

export const Servicos = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])

  
  return (
    <main className="cardsArea" id="servicos">
      <aside className="contentCards">
        <aside data-aos="fade-right" className="textos" >
            <h1> <span className="txG">Encontre o serviço ideal<span className="verde"> para você</span></span> </h1>
        </aside>
        <aside data-aos="fade-up" className="cards">
              <Cards title= "Site Profissional" 
              subtitle="✔ Loja Virtual"
              subtitle1="✔ Blog Profissional" 
              subtitle2="✔ Otimização de Pesquisa (SEO)" 
              subtitle3="✔ Aplicação de Página Única (SPA)" 
              subtitle4="✔ Website Responsivo" 
              subtitle5="✔ Manutenção Semanal"
              subtitle6="✔ Suporte Rápido"
              imagem = {front}></Cards>
              <Cards title= "Design Gráfico"
              subtitle="✔ Logotipo" 
              subtitle1="✔ Ilustrações" 
              subtitle2="✔ Mídia Social" 
              subtitle3="✔ Cartão de Visita" 
              subtitle4="✔ Identidade Visual" 
              subtitle5="✔ Design UI/UX"
              subtitle6="✔ Motion Design"
              subtitle7="✔ Twitch Elements"
              subtitle8="✔ Flyers"

              imagem = {web}></Cards>
              <Cards title= "Discord bots"
              subtitle="✔ Comandos Personalizados" 
              subtitle1="✔ Integração com APIs" 
              subtitle2="✔ Integração com WebSite" 
              subtitle3="✔ Sistemas Personalizados" 
              subtitle4="✔ Integração com Banco de Dados" 
              subtitle5="✔ Manutenção Semanal"
              subtitle6="✔ Suporte Rápido"
              imagem = {ux}></Cards>
          </aside>
      </aside>
    </main>
  );
};
