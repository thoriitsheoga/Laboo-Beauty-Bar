import React from 'react';
import { useNavigate } from "react-router-dom";

const BookWig = () => {
    return(
        <>
        <h1 className='bookwig-title'> WIG SERVICES</h1>
        <li>
         <button className='bookwig-button-yellow'>Wig Customization</button>
        </li>
        <li>
            <button className='bookwig-button-gold'>
                Wig Installation
            </button>
        </li>
        <li>
            <button className='bookwig-button-yellow'>
                Wig Styling
            </button>
        </li>
        <li>
            <button className='bookwig-button-gold'>
                Wig Wash
            </button>
        </li>
        <li>
            <button className='bookwig-button-yellow'>
                Wig Treatment
            </button>
        </li>
        <li>
            <button className='bookwig-button-gold'>
                Straightening
            </button>
        </li>
        <li>
            <button className='bookwig-button-yellow'>
                Trimming
            </button>
        </li>
        </>
    )
}
export default BookWig;
