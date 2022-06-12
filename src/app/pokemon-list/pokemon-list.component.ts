import { Component } from '@angular/core';
import { Pokemon } from '../../_model/pokemon';
import { Type } from '../../_model/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent  {

  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbassaur',
      types: [
        Type.Grass,
        Type.Poison
      ] 
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivyssaur',
      types: [
        Type.Grass,
        Type.Poison
      ] 
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venossaur',
      types: [
        Type.Grass,
        Type.Poison,
        Type.Fire
      ] 
    }
  ];

}
