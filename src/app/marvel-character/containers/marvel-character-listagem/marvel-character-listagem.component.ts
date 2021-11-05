import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelCharacterApi } from '../../api/marvel-character.api';

@Component({
  selector: 'app-marvel-character-listagem',
  templateUrl: './marvel-character-listagem.component.html',
  styleUrls: ['./marvel-character-listagem.component.scss']
})
export class MarvelCharacterListagemComponent implements OnInit {

  allCharacters!: Observable<any>;
  
  constructor(private api: MarvelCharacterApi) { }

  ngOnInit(): void {
    this.api.getAllCharacters().subscribe(res =>{
      this.allCharacters = res;
      console.log(res);
    })
  }

}
