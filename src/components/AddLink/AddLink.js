import React, { useContext, useState, useEffect } from "react";
import "./AddLink.css";
import { CardContext } from "../../contexts/CardContext";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import {
  Form,
  Toast,
  FormGroup,
  Button,
  FormControl,
} from "react-bootstrap";

const AddLink = ({cards}) => {
  const { addLink } = useContext(CardContext);
  
  const [newCard,setNewCard] = useState({name:"",linkUrl:""})
  
  const onInputChange = (e) =>{
    setNewCard({...newCard, [e.target.name]: e.target.value})
  }

  const {name, linkUrl} = newCard;

  const handleSubmit = (e) => {
    e.preventDefault();
    addLink(name,linkUrl)
    return ()  => {
    }
    
  }
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    return () => {
      setShowToast()
    }
 }, [cards])

  return (
    <>
    
      <Link to="/" className="returnLink">
        <p className="linkText">
          <TiArrowLeftThick /> Return to List
        </p>
      </Link>
      <div className="pageTitle">
          <h1>Add New Link</h1>
        </div>
      <Form onSubmit={handleSubmit}>  
      <Toast variant="info" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
    <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">New Message</strong>
          </Toast.Header>
          <Toast.Body> Added new card </Toast.Body>
        </Toast>     
        <FormGroup>
          <label>Link Name:</label>
              <FormControl
                  style={{marginBottom:"15px"}}
                  className="linkName"
                  type="text"
                  placeholder="e.g Alphabet"
                  name="name"
                  value={name}
                  onChange={ (e) => onInputChange(e) }
                  ></FormControl>
        </FormGroup>

        <FormGroup>  
        <label>Link Url:</label>             
          <FormControl
                  className="linkUrl"
                  type="url"
                  placeholder="e.g https://abc.xyz"
                  name="linkUrl"
                  value={linkUrl}
                  onChange={ (e) => onInputChange(e) }
          ></FormControl>
        </FormGroup>
        <FormGroup>
        <Button type="submit" onClick={ () => setShowToast(true) } className="submitBtn">
          SUBMIT
        </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddLink;
