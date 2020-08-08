import React from 'react';
import Forums from './components/Forums.js'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import NewForumForm from './components/NewForumForm.js';
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
   
      <div className="App">
        <Header />
        <Button variant="primary" onClick={() => setModalShow(true)}>
           New Forum
        </Button>

        <NewForumForm
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Forums />
      </div>
    
  );
}

export default App;
