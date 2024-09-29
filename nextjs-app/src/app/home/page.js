import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './homepage.css';

const FramerEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://accelerate-estimates.framer.website/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Framer Page"
      />
    </div>
  );
};

export default FramerEmbed;