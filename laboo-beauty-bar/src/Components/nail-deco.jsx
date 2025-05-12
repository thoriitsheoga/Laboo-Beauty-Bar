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
    selectedShape = '',
    selectedOption = '',
    shapePrice = 0,
    shapeImage = null
  } = location.state || {};

  const [selectedDecoration, setSelectedDecoration] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [nailArtCount, setNailArtCount] = useState(0);

  const basePrice = parseFloat(shapePrice) || 0;
  const nailArtPrice = nailArtCount * 15;
  const totalPrice = basePrice + nailArtPrice;

  const handleSelect = (deco) => {
    setSelectedDecoration(deco);
    setShowOptions(true);
    setNailArtCount(0); // reset art count
  };

  const handleNailArtCountChange = (e) => {
    const count = Math.max(0, Math.min(10, parseInt(e.target.value) || 0));
    setNailArtCount(count);
  };

  const handleSubmit = () => {
    navigate('/confirm', {
      state: {
        shape: selectedShape,
        shapeOption: selectedOption,
        shapePrice: basePrice,
        decoration: selectedDecoration?.name,
        nailArtCount,
        nailArtPrice,
        totalPrice
      }
    });
  };

  return (
    <div className="nail-decoration-container">
      <h1 className="naildeco-title">NAIL DECORATION</h1>

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
          <h3>Your Current Selection</h3>

          <div className="selection-details">
            <div><strong>Base Shape:</strong> {selectedShape} ({selectedOption})</div>
            <div><strong>Base Price:</strong> R{basePrice}</div>
            <div><strong>Decoration:</strong> {selectedDecoration.name}</div>
          </div>

         

          <div className="nail-art-options">
            <h4>Add Nail Art (R15 per nail)</h4>
            <input
              type="number"
              min="0"
              max="10"
              value={nailArtCount}
              onChange={handleNailArtCountChange}
              placeholder="0"
            />
            <span>Art Price: R{nailArtPrice}</span>
          </div>

          <div className="total-section">
            <strong>Total: R{totalPrice}</strong>
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            Continue to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default NailDecoration;
