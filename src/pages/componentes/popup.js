import React, { useState } from 'react';


const PopupAd = ({ imageUrl, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div style={{ position: 'fixed', top: '50px', right: 0, backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', zIndex: 999 }}>
          <img src={imageUrl} alt="Popup Ad" style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }} onClick={handleClose} />
          <p style={{ textAlign: 'center', marginTop: '0px', fontSize: '14px', color: 'white', backgroundColor:'black' }}>click para cerrar anuncio!</p>
          
          <div style={{ position: 'absolute', top: '25px', right: '5px', cursor: 'pointer' }} onClick={handleClose}>
            X
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAd;
