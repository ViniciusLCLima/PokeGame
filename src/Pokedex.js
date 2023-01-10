import React, {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'


class Pokedex extends Component{
    render(){
        const pokemons= this.props.pokemons;
        console.log(pokemons);
        return <div className='Pokedex'>
            <h2 className={'Pokedex-msg '+this.props.msgStyle}>{this.props.msg}</h2>
            <p className="Pokedex-totalExp">Total exp:{this.props.totalExp}</p>
            <div className='Pokedex-pokemons'>
                {pokemons.map(p=><Pokecard pokemon={p} />)}
            </div>
        </div>
    }
}

export default Pokedex;