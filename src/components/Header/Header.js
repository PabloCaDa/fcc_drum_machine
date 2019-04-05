import React from 'react'

const headerStyle = {
    backgroundColor: 'var(--main-secondary-color)',
    color: 'var(--main-title-text-color)',
    padding: '10px 20px',
    textAlign: 'center',
    height:'10vh',
}

const Header = () => {
  return (
    <nav style={headerStyle}>
        <h1>Drum Machine</h1>
    </nav>
  )
}

export default Header
