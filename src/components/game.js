import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import ImageCard from './imageCard';
import Footer from './footer';
import characters from '../characters.json';

let score = 0;
let highScore = 0;
let response = "Click on an image to earn points, but don't click on any more than once!";

class Game extends Component {
    state = {
      characters,
      score,
      highScore,
      response
    };

    click = id => {
      console.log(id);

      const characters = this.state.characters;
      const clicked = characters.filter(character => character.id === id);

      if (clicked[0].clicked) {

        console.log ("Score: " + score);
        console.log ("High Score: " + highScore);

        score = 0;
        response = "WRONG!"

        for (let i = 0 ; i < characters.length ; i++){
            characters[i].clicked = false;
        }

        this.setState({ response });
        this.setState({ score });
        this.setState({ characters });

      } else if (highScore < 11) {

        clicked[0].clicked = true;

        score++;
        
        response = "Wubba lubba dub dub!!";

        if (score > highScore) {
            highScore = score;
            this.setState({ highScore });
        }

        characters.sort(function(a, b) {return 0.5 - Math.random()});

        this.setState({ characters });
        this.setState({ score });
        this.setState({ response });
        } else {

        clicked[0].clicked = true;

        score = 0;

        response = "Wubba lubba dub dub!! YOU WON!! I'm Pickle RIIICK!" ;
        highScore = 12;
        this.setState({ highScore });
        
        for (let i = 0 ; i < characters.length ; i++){
            characters[i].clicked = false;
        }

        characters.sort(function(a, b) {return 0.5 - Math.random()});

        this.setState({ characters });
        this.setState({ score });
        this.setState({ response });

      }
    }
    
    render() {
      return (
        <div className='wrapper'>
        <Nav
          response={this.state.response}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        <div className="container mx-auto" id="bg-main">
          {this.state.characters.map(character => (
          <ImageCard
            name={character.name}
            image={character.image}
            id={character.id}
            handleClick={this.click}
          />
        ))}
        </div>
        <Footer />
      </div>
      );
    };
  }
  
  export default Game;