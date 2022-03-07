import React, { createElement } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

const url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default function App() {

  return (
    <Container>
      <Router>
        <div>

          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to="/Me">Me</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/friends">Friends</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/hobbies">Hobbies</Link>
            </Button>
          </ButtonGroup>

          <Switch>
            <Route path= '/hobbies'>
              <Hobbies actions={['Video Games', 'Working Out', 'Artist']} />
            </Route>
            <Route path= '/friends'>
              <Friends names={['Charlie', 'Pim', 'Alan', 'Glep']} />
            </Route>
            <Route path= '/me'>
              <Home name={['Jaden LaBrosse']} />
            </Route>
          </Switch>

        </div>
      </Router>
    </Container>
  );
};

function Home(props) {
  const { name } = props;

  return (
    <div className='App'>
      <ul>
        <h2>Who Am I</h2>
        {name.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <img src="/images/RusselUp.png" height={400} width={800}></img>
    </div>
  )
}

function Friends(props) {
  const { names } = props;
  

  return (
    <div className='App'>
      <ul>
        <h2>My Friends</h2>
        {names.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <img src="/images/smiling_friends.png" height={400} width={800}></img>
    </div>
  )
}

function Hobbies(props) {
  const { actions } = props;

  return (
    <div className='App'>
      <ul>
        <h2>My Hobbies</h2>
        {actions.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <img src="/images/fisher_price_controller.png" height={400} width={700}></img>
    </div>
  )
}