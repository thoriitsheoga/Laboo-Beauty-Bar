import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import PlainNails from "./assets/plainnails.png";
import FrenchNails from "./assets/frenchnails.png";
import MarbleNails from "./assets/marbleNails.jpg";
import OmbreNails from "./assets/OmbreNails.jpeg";


const nailDeco = [
  { name: 'Plain', img: PlainNails },
  { name: 'French', img: FrenchNails },
  { name: 'Marble', img: MarbleNails },
  { name: 'Ombre', img: OmbreNails }
];

const NailDecoration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    selectedShape, 
    selectedOption, 
    shapePrice 
  } = location.state || {};
  
  const [selectedDecoration, setSelectedDecoration] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [nailArtCount, setNailArtCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(shapePrice || 0);

  const handleSelect = (deco) => {
    setSelectedDecoration(deco);
    setShowOptions(true);
    setTotalPrice(shapePrice || 0);
    setNailArtCount(0);
  };

  const handleNailArtCountChange = (e) => {
    let count = parseInt(e.target.value) || 0;
    count = Math.max(0, Math.min(count, 10));
    setNailArtCount(count);
    setTotalPrice((shapePrice || 0) + (count * 15));
  };

  const handleSubmit = () => {
    navigate('/confirm', {
      state: {
        shape: selectedShape,
        shapeOption: selectedOption,
        shapePrice: shapePrice,
        decoration: selectedDecoration?.name,
        nailArtCount: nailArtCount,
        nailArtPrice: nailArtCount * 15,
        totalPrice: totalPrice
      }
    });
  };

  return (
    <div className="nail-decoration-container">
      <h1 className="naildeco-title">
        NAIL DECORATION 
      </h1>

      <div className="naildeco-options-container">
        {nailDeco.map((deco) => (
          <div 
            key={deco.name}
            className={`naildeco-card ${selectedDecoration?.name === deco.name ? 'selected' : ''}`}
            onClick={() => handleSelect(deco)}
          >
            <img src={deco.img} className="naildeco-image" alt={`${deco.name} nails`} />
            <p className="naildeco-label">{deco.name}</p>
          </div>
        ))}
      </div>

      {showOptions && selectedDecoration && (
        <div className="options-panel">
          <div className="selection-summary">
            <h3>Your Current Selection</h3>
            <div className="selection-details">
              <div className="selection-row">
                <span>Base Shape:</span>
                <span>{selectedShape} {selectedOption} (R{shapePrice})</span>
              </div>
              <div className="selection-row">
                <span>Decoration:</span>
                <span>{selectedDecoration.name}</span>
              </div>
            </div>

            <div className="nail-art-options">
              <h4>Add Nail Art (R15 per nail)</h4>
              <div className="nail-art-controls">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={nailArtCount}
                  onChange={handleNailArtCountChange}
                  placeholder="0"
                />
                <span className="art-price">R{nailArtCount * 15}</span>
              </div>
            </div>

            <div className="total-section">
              <div className="total-row">
                <span>Total:</span>
                <span className="total-price">R{totalPrice}</span>
              </div>
            </div>

            <button 
              className="submit-button"
              onClick={handleSubmit}
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NailDecoration;