'use client';
import React, { useState, useEffect } from 'react';

const FramerEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://accelerate-estimates.framer.website/contact"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Contact Page"
      />
    </div>
  );
};

export default FramerEmbed;