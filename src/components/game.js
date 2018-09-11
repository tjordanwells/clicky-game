import React, { Component } from 'react';
import characters from '../characters.json';
import ImageCard from './imageCard';


class Game extends Component {
    state  = {
        characters
    };

    render() {
        return (
            <div className="container mx-auto">
              {this.state.characters.map(character => (
                <ImageCard
                  name={character.name}
                  image={character.image}
                />
              ))}
            </div>
        );
    };
    
}

export default Game;