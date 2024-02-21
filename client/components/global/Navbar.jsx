import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
        <h2 className='nav-header'>&#127899; Chordsmith</h2>
        <div className="nav-right">
            <p className='nav-text'>Electronic melody generator</p>
            <img src='../../../assets/images/acid-smiley.svg' alt='smiley-svg'></img>
        </div>
    </nav>
  )
}

export default Navbar