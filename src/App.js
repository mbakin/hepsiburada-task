import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardContextProvider from "./contexts/CardContext";
import Home from "./components/Home";
import AddLink from './components/AddLink/AddLink';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return ( 
    <>
    <div style={{margin: "50px 220px",maxWidth: "100%"}}>
      <img src="/images/banner.png" alt="task-header" />
    </div>
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <CardContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/add" component={AddLink} />
        </Switch>
      </Router>
      </CardContextProvider>
    </div>
    </>
  );
}

export default App;