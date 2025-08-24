import React, { useState } from "react";

const Accordion = ({ weekNumber, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion background"  onClick={() => setIsOpen(!isOpen)}>

        <span>Week - {weekNumber} {isOpen ? "▲" : "▼"}</span>

      {isOpen && (
        <div>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
