import { createContext, useState , useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
export const CardContext = createContext()

const CardContextProvider = (props) =>{

  const [point, setPoint] = useState(0)
  const [cards, setCards] = useState([
     {id:uuidv4(), name: "Google", linkUrl: "www.google.com", setPoint},
    // {id:uuidv4(), name: "youtube", linkUrl: "www.s.com" ,point},
    // {id:uuidv4(), name: "skype",   linkUrl: "www.q.com",point},
    // {id:uuidv4(), name: "reddit",  linkUrl: "www.x.com",point},
  ])
  
  useEffect(() => {
    const cards = localStorage.getItem('cards')
    setCards(JSON.parse(cards))
  },[])
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  })

  // .sort((a,b,c) => a.name < b.name ? -1 : 1) sorting for name parameters. Check for point. This can not working!
  // const sortedCard = cards.sort((a,b) => (a.setPoint < b.setPoint ? -1 : 1))
  //  const sortedCard = cards.sort((a,b) => (a.setPoint < b.setPoint ? -1 : 1))

  const addLink = (name, linkUrl, point) => {
    setCards([ {id:uuidv4(), name, linkUrl,setPoint}, ...cards])
  }

  

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  }


  return(
    <CardContext.Provider value={{cards, addLink, deleteCard,point,setCards, setPoint}}>
      {props.children}
    </CardContext.Provider>
  )
}

export default CardContextProvider;