import React,{useContext, useState,useEffect} from "react";
import {CardContext} from '../../contexts/CardContext'
import { FcUp } from "react-icons/fc";
import { FcDown } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import './Card.css'
import {
  Button,
  Modal,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'

const Card = ({card}) => {


  const { deleteCard, setPoint,} = useContext(CardContext)


  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

 
  const [cardPoint, setCardPoint] = useState(0)
  const incrementCount = () => {
    setCardPoint(cardPoint+1);
    setPoint(cardPoint+1)
  }
  const decrementCount = () => {
    setCardPoint(cardPoint-1);
  }

  return (
    <>

    <div>
      <ListGroup>
      <ListGroupItem>
        <div className="row mainCard" style={{position: "relative"}}>
        <div className="col-3">
          <div className="btn btn-secondary">Pointer
            <h2>{cardPoint}</h2>
          </div>
        </div>
        <div className="col-3 flex" >
          <button className="btnArrow" onClick={incrementCount} type="button" ><FcUp/></button>
          <button className="btnArrow"  onClick={decrementCount} type="button" ><FcDown/></button>
        </div>
        <div className="col-4 cardNameLink">
          <h4><strong>{card.name}</strong></h4>
          <small>({card.linkUrl})</small>
        </div>
        <div className="col-2 trash">
          <Button onClick={handleShow} style={{backgroundColor:"#FFFFFF", paddingRight: "2px"}}><FcEmptyTrash/></Button>
        </div>
        </div>
      </ListGroupItem>
    </ListGroup>
    </div>


    <Modal  show={show} onHide={handleClose} centered>
        <Modal.Header className="modal-header modalHeader" closeButton>
          <Modal.Title>
            Remove Link
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h5>Do you want to remove <strong>{card.name}</strong> </h5>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button onClick={() => deleteCard(card.id)} type="submit" variant="danger">DELETE</Button>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  

    </>
  )
}

export default Card
