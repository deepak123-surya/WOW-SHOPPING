import React, { useState } from 'react';
import './ApplianceHighlightKitchen.css';

const ApplianceHighlightKitchen = () => {
  const [hoveredAppliance, setHoveredAppliance] = useState(null);

  // Kitchen appliances data with positions and dimensions
  const appliances = [
    {
      id: 1,
      name: "Refrigerator",
      position: { top: '15%', left: '5%' },
      size: { width: '120px', height: '200px' },
      description: "Double door refrigerator with ice maker"
    },
    {
      id: 2,
      name: "Oven",
      position: { top: '55%', left: '25%' },
      size: { width: '80px', height: '60px' },
      description: "Built-in electric oven with convection"
    },
    {
      id: 3,
      name: "Dishwasher",
      position: { top: '65%', left: '75%' },
      size: { width: '100px', height: '80px' },
      description: "Energy efficient dishwasher"
    },
    {
      id: 4,
      name: "Cooktop",
      position: { top: '45%', left: '40%' },
      size: { width: '150px', height: '40px' },
      description: "Glass induction cooktop"
    },
    {
      id: 5,
      name: "Microwave",
      position: { top: '25%', left: '70%' },
      size: { width: '80px', height: '50px' },
      description: "Over-the-range microwave"
    },
    {
      id: 6,
      name: "Coffee Maker",
      position: { top: '35%', left: '85%' },
      size: { width: '60px', height: '40px' },
      description: "Espresso coffee machine"
    },
    {
      id: 7,
      name: "Blender",
      position: { top: '75%', left: '15%' },
      size: { width: '50px', height: '60px' },
      description: "High-speed blender"
    },
    {
      id: 8,
      name: "Toaster",
      position: { top: '30%', left: '55%' },
      size: { width: '40px', height: '30px' },
      description: "4-slice toaster"
    }
  ];

  const handleApplianceHover = (appliance) => {
    setHoveredAppliance(appliance);
  };

  const handleApplianceLeave = () => {
    setHoveredAppliance(null);
  };

  return (
    <div className="appliance-kitchen-container">
      <div className="kitchen-header">
        <h1>Interactive Kitchen Design</h1>
        <p>Hover over appliances to see details</p>
      </div>

      <div className="kitchen-display">
        {/* Kitchen Background Image */}
        <div className={`kitchen-background ${hoveredAppliance ? 'blurred' : ''}`}>
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&h=800&q=80" 
            alt="Modern Kitchen"
            className="kitchen-image"
          />
        </div>

        {/* Interactive Appliance Overlays */}
        {appliances.map((appliance) => (
          <div
            key={appliance.id}
            className={`appliance-overlay ${hoveredAppliance?.id === appliance.id ? 'highlighted' : ''}`}
            style={{
              top: appliance.position.top,
              left: appliance.position.left,
              width: appliance.size.width,
              height: appliance.size.height,
            }}
            onMouseEnter={() => handleApplianceHover(appliance)}
            onMouseLeave={handleApplianceLeave}
          >
            <div className="appliance-hotspot">
              {hoveredAppliance?.id === appliance.id && (
                <div className="appliance-tooltip">
                  <h3>{appliance.name}</h3>
                  <p>{appliance.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Appliance Info Panel */}
        {hoveredAppliance && (
          <div className="appliance-info-panel">
            <div className="info-content">
              <h2>{hoveredAppliance.name}</h2>
              <p>{hoveredAppliance.description}</p>
              <div className="appliance-features">
                <span className="feature-tag">Smart Home</span>
                <span className="feature-tag">Energy Efficient</span>
                <span className="feature-tag">Stainless Steel</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Appliances List */}
      <div className="appliances-list">
        <h3>Kitchen Appliances</h3>
        <div className="appliances-grid">
          {appliances.map((appliance) => (
            <div
              key={appliance.id}
              className={`appliance-card ${hoveredAppliance?.id === appliance.id ? 'active' : ''}`}
              onMouseEnter={() => handleApplianceHover(appliance)}
              onMouseLeave={handleApplianceLeave}
            >
              <div className="appliance-icon">⚡</div>
              <span>{appliance.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplianceHighlightKitchen;