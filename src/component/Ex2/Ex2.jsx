import React, {useState} from "react";
import './Ex2.css' ;

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState('ON');
  
    const handleClick = () => {
      setIsToggled(!isToggled);
    };
  
    return (
      <div className="toggle-container">
        <button className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleClick}>
          <span className="on"></span>
          <div className="toggle-circle"></div>
          <span className="off"></span>
        </button>
      </div>
    );
  }
  
  export default ToggleButton;