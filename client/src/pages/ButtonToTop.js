import React from 'react';
import './css/ButtonToTop.css';

function ButtonToTop() {
  return (
    <div>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ▲
        </button>
    </div>
  )
}

export default ButtonToTop
