import React,{ useContext } from 'react'
import { CardContext } from '../contexts/CardContext'
import { Form, Button,  } from 'react-bootstrap'

const DeleteCard = () => {

  const { deleteCard } = useContext(CardContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteCard()
  }

  
  return (
    <div>


      <Form onSubmit={handleSubmit}>
        <Button onClick={deleteCard} variant="danger" type="submit" block>
        Delete Card
      </Button>
      </Form>
    </div>
  )
}

export default DeleteCard
