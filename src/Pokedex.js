import React, {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'


class Pokedex extends Component{
    render(){
        const pokemons= this.props.pokemons;
        console.log(pokemons);
        return <div className='Pokedex'>
            <h2 className={'Pokedex-msg '+this.props.msgStyle}>{this.props.msg}</h2>
            {pokemons.map(p=><Pokecard pokemon={p} />)}
        </div>
    }
}

export default Pokedex;