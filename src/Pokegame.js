import React, {Component} from 'react';
import Pokedex from './Pokedex';
import  './Pokegame.css';

const pokemons =
    [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
const pokemons2=[]

for (let i=0; i<4;i++){
    let pos = Math.floor(Math.random()*pokemons.length)
    pokemons2.push(pokemons.splice(pos,1)[0])
}

class Pokegame extends Component{
    render(){
        let pokemons2TotalExp = 0;
        let pokemonsTotalExp = 0;
        for (let i=0; i<4;i++){
            pokemons2TotalExp+= pokemons2[i].base_experience;
            pokemonsTotalExp+= pokemons[i].base_experience;
        }
        let msg1;
        let msg2;
        let msg1Style;
        let msg2Style;
        if (pokemons2TotalExp<pokemonsTotalExp){
            msg1 = "You're the winner!"
            msg2 = "You're the loser!"
            msg1Style = "msg-green"
            msg2Style = "msg-red"
        } else if (pokemons2TotalExp>pokemonsTotalExp){
            msg2 = "You're the winner!"
            msg1 = "You're the loser!"
            msg2Style = "msg-green"
            msg1Style = "msg-red"
        } else{
            msg1 = "It is a draw!"
            msg2 = "It is a draw!"
            msg2Style = "msg-gray"
            msg1Style = "msg-gray"
        }
        return <div>
            <h1 className='Pokegame-title'>PokeGame!</h1>
            <Pokedex msg={msg1} msgStyle={msg1Style} totalExp={pokemonsTotalExp} pokemons={pokemons}/>
            <Pokedex msg={msg2} msgStyle={msg2Style} totalExp={pokemons2TotalExp} pokemons={pokemons2}/>
        </div>
    }
}


export default Pokegame;