import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-character-list',
  templateUrl: './marvel-character-list.component.html',
  styleUrls: ['./marvel-character-list.component.scss']
})
export class MarvelCharacterListComponent implements OnInit {

  @Input() characters: any;

  constructor() { }

  ngOnInit(): void {
  }

}
