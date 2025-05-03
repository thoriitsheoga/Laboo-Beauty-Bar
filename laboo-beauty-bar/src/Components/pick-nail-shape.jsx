import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import AlmondNails from './assets/almond-nails.jpg';
import SquareNails from './assets/sqaure-nails.jpg';
import StilletoNails from './assets/stilleto-nails.jpg';
import CoffinNails from './assets/coffin-nails.jpg';
import LipstickNails from './assets/lipstick-nails.jpg';
import DuckNails from './assets/duck-nails.jpg';
import Pedicure from './assets/pedicure.png';
import NaturalNails from './assets/natural-nails.jpg';

const nailShapes = [
  { name: 'Almond', img: AlmondNails },
  { name: 'Square', img: SquareNails },
  { name: 'Stiletto', img: StilletoNails },
  { name: 'Coffin', img: CoffinNails },
  { name: 'Lipstick', img: LipstickNails },
  { name: 'Duck', img: DuckNails },
  { name: 'Natural', img: NaturalNails },
  { name: 'Pedicure', img: Pedicure }
];

const NailShape = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selection, setSelection] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSelectOption = (shape, option) => {
    setSelection((prev) => ({ ...prev, [shape]: option }));
    setOpenDropdown(null);
    console.log(`Selected: ${shape} - ${option}`);
    
    // Navigate to /nail-deco after selection
    navigate('/nail-deco');
  };

  return (
    <>
      <h1 className='nailshape-title'>PICK A NAIL SHAPE</h1>
      <div className='nailshape-menu'>
        <div className='nailshape-grid'>
          {nailShapes.map(({ name, img }) => (
            <div
              key={name}
              className='nailshape-image-container'
              onClick={() => handleClick(name)}
              style={{ position: 'relative' }}
            >
              <img src={img} className='nailshape-image' alt={`${name} Nails`} />
              <p className="nailshape-label">{name} Nails</p>

              {openDropdown === name && (
                <div className='dropdown'>
                  {name === "Pedicure" ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectOption(name, "Plain Pedi (R200)");
                        }}
                      >
                        Plain Pedi (R200)
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectOption(name, "French Pedi (R280)");
                        }}
                      >
                        French Pedi (R280)
                      </button>
                    </>
                  ) : (
                    ['Short (R200.00)', 'Medium (R250.00)', 'Long (R300.00)'].map((length) => (
                      <button
                        key={length}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectOption(name, length);
                        }}
                      >
                        {length}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NailShape;