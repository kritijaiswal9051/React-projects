import { useState } from "react";
import Popup from "./Popup";
import "./popup.css";

function PopupTest() {
  const [showPopup, setShowPopup] = useState(false);
  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleToggleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="popup-btn">
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
      {showPopup && (
        <Popup
          onClose={handleToggleClosePopup}
          body={<div>Customize body</div>}
        />
      )}
    </div>
  );
}

export default PopupTest;
