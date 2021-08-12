import React, { useState ,useEffect} from 'react'
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import './Pagination.css'

const Pagination = ({pages, setCurrentPage,currentCards, cards}) => {


  const numOfPages = [];

  for(let i=1; i <= pages; i++){
    numOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1)

  useEffect(() =>{
    setCurrentPage(currentButton)
  },[currentButton, setCurrentPage])

  return (
    <div className="container-xl paginationContainer">
      <div className="clearfix">
				<div className="hint-text">Showing <b>{currentCards.length}</b> out of <b>{cards.length}</b> entries</div>
				<ul className="pagination paginationList">
					<li className={`${currentButton === 1 ? 'page-item disabled':'page-item'}`}><a href="#!" className="page-link"
            onClick={ () => setCurrentButton((prev) => prev === 1 ? prev : prev-1 )}
          ><BiChevronLeft/></a></li>
          {
            numOfPages.map((page, index) => {
              return(
                <li key={index} className={`${currentButton === page ? 'page-item active': 'page-item'}`} ><a href="#!" class="page-link"
                  onClick={() => setCurrentButton(page)}
                >{page}</a></li>
              )
            })

          }
          <li className={`${currentButton === numOfPages.length ? 'page-item disabled':'page-item'}`}><a href="#!" className="page-link"
            onClick={ () => setCurrentButton((next) => next === numOfPages.length ? next : next+1 )}
          ><BiChevronRight/></a></li>
					
				</ul>
			</div>
    </div>
  )
}

export default Pagination
