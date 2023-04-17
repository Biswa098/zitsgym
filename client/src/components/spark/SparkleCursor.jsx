import React from 'react';
import './SparkleCursor.css'; // Import CSS file for sparkle effect

const SparkleCursor = () => {
  // Event handler for mouse move
  const handleMouseMove = (e) => {
    // Get mouse cursor's position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update position of sparkle element(s)
    const sparkleElement = document.getElementById('sparkle'); // ID of the sparkle element
    sparkleElement.style.top = mouseY + 'px';
    sparkleElement.style.left = mouseX + 'px';
  };

  return (
    <div
      className="sparkle-cursor-container"
      onMouseMove={handleMouseMove}
    >
      <div id="sparkle" className="sparkle"></div>
    </div>
  );
};

export default SparkleCursor;
