import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BuscaPokemonService } from '../busca-pokemon.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  busca: string = ""
  erroMensagem: string = ""
  email: string = "super@email.com"

  @Output()
  pokemons = new EventEmitter<any[]>()

  constructor(private buscaPokemonServ: BuscaPokemonService) { }

  pesquisa(form: any) {
    if (form.status === "INVALID") {
      this.erroMensagem = "Busca inválida. Verifique."
    } else {
      this.erroMensagem = ""
      this.buscaPokemonServ.todosPokemons().subscribe(data => {
        this.pokemons.emit(
            data.results.filter(pokemon => {
            // Qual critério? O nome!
            return pokemon.name.includes(form.value.busca)
          })
        )
      })

    }
  }

  ngOnInit(): void {
  }

}
