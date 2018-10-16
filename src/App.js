import React, { Component } from 'react';
import Scoreboard from './components/scoreboard';
import Row from './components/row';
import Instructions from './components/instructions';
import Container from './components/container';
import Pictures from './pictures.json';
import PictureCard from './components/pictureCard';
import './App.css';

class App extends Component {

  state = {
    gameStart: false,
    pictures: Pictures
  }

  endInstructions = () => {
    this.setState({ gameStart: true });
  }

  render() {
    return (
      <div className="app-body">
        <nav className="shadow-lg navbar navbar-dark bg-dark ">
          <ul className="p-0 m-0 w-100">
            <li><span className="navbar-brand mb-0 h1">Clicky the picky!</span></li>
            <li>Timer</li>
            <Scoreboard></Scoreboard>
          </ul>
        </nav>    
        <div className="container-fluid">
          {this.state.gameStart ? 
          (<Container>
            <Row>
            {this.state.pictures.map(picture => {
              return (
                <PictureCard 
                id={picture.id}
                url={picture.url}
                />
              );
            })}
            </Row>
          </Container>) : 
          (<Row>
            <Instructions endInstructions={this.endInstructions} />
          </Row>)
          }
        </div>
      </div>
    );
  }
}

export default App;
