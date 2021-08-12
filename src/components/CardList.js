import React,{ useContext,useEffect, useState } from "react";
import { CardContext } from "../contexts/CardContext";
import Card from './Card/Card'
import Pagination from './Pagination/Pagination'
import { Toast } from "react-bootstrap";


const CardList = () => {

  const {cards} = useContext(CardContext)

  const [showToast, setShowToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5)

 
  useEffect(() => {
    return () => {
      setShowToast()
    }
 }, [cards])

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPagesNum = Math.ceil(cards.length/ cardsPerPage)

  return (
    <>
    
    <Toast style={{margin:"auto"}} variant="info" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
    <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">New Message</strong>
          </Toast.Header>
          <Toast.Body>Updated list</Toast.Body>
        </Toast>
    <div className="container-xl">
      <div className="col-12 cardList">
      {
          //
          currentCards.map(card => (
          <div className="my-2" key={card.id}>
            <Card  card={card} >
            </Card>
          </div>

        ))
      }    
      </div>
    </div>
      <Pagination 
      pages={totalPagesNum} 
      setCurrentPage={setCurrentPage}
      currentCards={currentCards}
      cards={cards}
      />
    </>
  );
};

export default CardList;
