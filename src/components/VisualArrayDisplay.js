import React from 'react';

const VisualArrayDisplay = ({ visualArray, result }) => {
  return (
    <div style={{ maxHeight: '200px', display: 'flex', flexWrap: 'wrap' }}>
      {visualArray.map((element, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #000',
            padding: '8px',
            margin: '4px',
            backgroundColor: index === result ? 'yellow' : 'white',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: result !== -1 && index !== result ? 0.5 : 1,
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default VisualArrayDisplay;
