import React from 'react'
import imgjose from '../../assets/imgjose.png'
export const Componentjose = () => {
  return (
     <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={imgjose}
        alt="Foto de Jose david marin"
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>Jose david marin</h2>
      <p>Salón: 703</p>
      <p>Programa: Desarrollo de Software</p>
    </div>
  )
}