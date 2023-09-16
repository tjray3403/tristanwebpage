import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

import vdg from '../images/pix_vdg.png';
import agg from '../images/pix_agg.png';
import mec from '../images/pix_mec.png';
import tsq from '../images/pix_tsq.png';



function Cards() {
    return(
        <div className='cards'>
            <h1>Portfolio</h1>
            <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={vdg}
              text='Goated Gaming'
              label='HTML/CSS'
              path='https://github.com/tjray3403/GoatedGaming'
            />

            <CardItem
              src={agg}
              text='Aggieland Pets with a Purpose'
              label='HTML/CSS/JS'
              path='https://github.com/tjray3403/Pet-Website'
            />

            <CardItem
              src={mec}
              text='Mecano Tech, Inc.'
              label='HTML/CSS/JS/PHP'
              path='https://www.mecano-tech.com/'
            />

            <CardItem
              src={tsq}
              text='Queues & Stacks'
              label='C++'
              path='https://replit.com/@Tj3403/TempStackQueue?v=1'
            />
            
            </ul>
            </div>
            </div>
        </div>
    )
    
}

export default Cards;
