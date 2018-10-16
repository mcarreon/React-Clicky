import React, { Component } from 'react';
import Row from './components/row';
import Instructions from './components/instructions';
import Container from './components/container';
import Pictures from './pictures.json';
import PictureCard from './components/pictureCard';
import './App.css';

class App extends Component {

  state = {
    gameStart: false,
    pictures: Pictures,
    clickedPictures: [],
    score: 0,
    topScore: 0,
    correctGuess: 3
  }

  endInstructions = () => {
    this.setState({ gameStart: true });
  }

  handlePicClick = id => {
    const pics = this.state.pictures;
    const shuffleArray = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
    const shuffledPics = shuffleArray(pics);

    if (this.state.clickedPictures.length === 0 ) {
      const newClickedPics = this.state.clickedPictures;
      newClickedPics.push(id);
      this.setState({clickedPictures: newClickedPics, score: this.state.score + 1, pictures: shuffledPics, correctGuess: 1});
    }
    else {
      const pastClicks = this.state.clickedPictures.filter(ids => ids == id);
      if (pastClicks.length === 0) {
        const newClickedPics = this.state.clickedPictures;
        newClickedPics.push(id);
        this.setState({clickedPictures: newClickedPics, score: this.state.score + 1, pictures: shuffledPics, correctGuess: 1});
      }
      else {
        console.log("You lose :(");
        this.state.score > this.state.topScore ? this.setState({topScore: this.state.score, score: 0}) : this.setState({score: 0});
        this.setState({clickedPictures: [], pictures: shuffledPics, correctGuess: 0});   
      }
    }
  }

  render() {
    return (
      <div className="app-body">
        <nav className="shadow-lg navbar navbar-dark bg-dark ">
          <ul className="p-0 m-0 w-100">
            <li><span className="navbar-brand mb-0 h1">Clicky the picky!</span></li>
            {this.state.correctGuess === 1 ? (<li className="correct">You guessed correctly!</li>) : this.state.correctGuess === 3 ? ((<li className="spin">:^{")"}</li>)) : (<li className="wrong">You guessed incorrectly!</li>)}
            <li>
              Score: <span>{ this.state.score }</span> | Top Score: <span>{ this.state.topScore }</span>
            </li>
          </ul>
        </nav>    
        <div className="container-fluid">
          {this.state.gameStart ? 
          (<Container>
            <Row>
            {this.state.pictures.map(picture => {
              return (
                <PictureCard 
                value={picture.id}
                key={picture.id}
                url={picture.url}
                handlePicClick={this.handlePicClick}
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
