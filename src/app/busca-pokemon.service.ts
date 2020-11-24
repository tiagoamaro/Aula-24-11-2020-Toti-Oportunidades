import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const POKEMON_URL: string = "https://pokeapi.co/api/v2/pokemon?limit=150"

// Capitalized CamelCase
// camelCase
// snake_case

@Injectable({
  providedIn: 'root'
})
export class BuscaPokemonService {

  constructor(private http: HttpClient) { }

  todosPokemons() {
    // Temos que pegar...POKEMONS!
    // ...
    // Lazy loading, tipo Snorlax.
    return this.http.get<{results: any[]}>(POKEMON_URL)
  }
}
