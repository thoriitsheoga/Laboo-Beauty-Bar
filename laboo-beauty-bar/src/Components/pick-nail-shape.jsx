import React from 'react';
import AlmondNails from './assets/almond-nails.jpg';
import SquareNails from './assets/sqaure-nails.jpg';
import StilletoNails from './assets/stilleto-nails.jpg';
import CoffinNails from './assets/coffin-nails.jpg';
import LipstickNails from './assets/lipstick-nails.jpg';
import DuckNails from './assets/natural-nails.jpg';
import Pedicure from './assets/pedicure.png';
import NaturalNails from './assets/natural-nails.jpg';

const NailShape = () =>{
    return(
        <>
        <h1 className='nailshape-title'>PICK A NAIL SHAPE</h1>
        <div className='nailshape-menu'>
        <div className='first-row-nail-shape'>
            <div className='nailshape-image-container'>
                <img src={AlmondNails} className='nailshape-image'/>
                <p>Almond Nails</p>

            </div>
            <div className='nailshape-image-container'>
                <img src={SquareNails} className='nailshape-image'/>
                <p> Square Nails</p>

            </div>
    
            <div className='nailshape-image-container'>
                <img src={StilletoNails} className='nailshape-image'/>
            </div>
            <div className='nailshape-image-container'>
                <img src={CoffinNails} className='nailshape-image'/>
                <p> Coffin Nails</p>

            </div>
        </div>
        <div className='second-row-nail-shape'>
            <div className='nailshape-image-container'>
                <img src={LipstickNails} className='nailshape-image'/>
                <p>Lipstick Nails</p>

            </div>
            <div className='nailshape-image-container'>
                <img src={DuckNails} className='nailshape-image'/>
                <p> Duck Nails</p>

            </div>
            <div className='nailshape-image-container'>
                <img src={NaturalNails} className='nailshape-image'/>
                <p> Natural Nails</p>

            </div>
            <div className='nailshape-image-container'>
                <img src={Pedicure} className='nailshape-image'/>
                <p> Pedicure</p>

            </div>
        </div>
        </div>
        </>
    )

}

export default NailShape;