import React from 'react'
import { Link } from 'react-router-dom'
import  './SubmitButton.css'
import { Button } from 'react-bootstrap'



const SubmitButton = () => {
  return (
    <div className="d-flex justify-content-center border-bottom pb-2 mb-2 row">
      <Link className="homeSubmitBtnContainer" to="/add">
      <Button className="homeSubmitBtn" >SUBMIT A LINK</Button>
      </Link>
    </div>
  )
}

export default SubmitButton
