import React from 'react'
import './HomePage.css';
import SignatureCanvas from '../../components/SignatureCanvas/SignatureCanvas';
const Homepage = () => {
  return (
    <div>
      <h1>Signature app Canvas</h1>
      <SignatureCanvas/>
    </div>
  )
}

export default Homepage