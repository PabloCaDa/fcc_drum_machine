import React from 'react'

const footerStyle = {
    backgroundColor: 'var(--main-secondary-color)',
    color: 'var(--main-title-text-color)',
    padding: '10px 20px',
    textAlign: 'center',
    height:'10vh'
}

const Footer = () => {
  return (
    <div style={footerStyle}>
      <h4>Created by <i className="far fa-copyright"></i> Pablo Cabrera Darias</h4>
    </div>
  )
}

export default Footer
