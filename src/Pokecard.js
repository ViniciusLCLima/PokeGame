import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component{
    render(){
        const pokeProps = this.props.pokemon;
        return <div className='Pokecard'>
        <img className='Pokecard-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeProps.id}.png`} alt={"Image of "+ pokeProps.name+"."} />
        <h3 className='Pokecard-title'>{pokeProps.name}</h3>
        <p className='Pokecard-text'>Type: <span>{pokeProps.type}</span></p>
        <p className='Pokecard-text'>Exp: <span>{pokeProps.base_experience}</span></p>
        </div>
    }
}

export default Pokecard;