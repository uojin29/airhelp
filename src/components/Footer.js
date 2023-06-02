import React from 'react';

function Footer() {
  const containerStyle = {
    position: 'fixed',
    bottom: '-10px',
    left: '0px',
    height: '50px',
    width: '100%',
    backgroundColor: '#62679b',
    opacity: '0.8',
    color: 'white',
    textAlign: 'center',
    fontSize: '10px',

    margin: 'auto 0px',

  };

  return (
    <p style={containerStyle}>
      <br/>
      <span>©2023 All Rights Reserved</span><br/>
      <span>Made by 병와리</span>
    </p>
  );
}

export default Footer;
