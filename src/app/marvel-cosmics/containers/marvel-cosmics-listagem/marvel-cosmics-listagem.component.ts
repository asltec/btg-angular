import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelCosmicsApi } from '../../api/marvel-cosmics.api';

@Component({
  selector: 'app-marvel-cosmics-listagem',
  templateUrl: './marvel-cosmics-listagem.component.html',
  styleUrls: ['./marvel-cosmics-listagem.component.scss']
})
export class MarvelCosmicsListagemComponent implements OnInit {

  allCosmics!: Observable<any>;

  constructor(private api: MarvelCosmicsApi) { }

  ngOnInit(): void {
    this.getCosmics();
  }

  private getCosmics() {
    this.api.getAllCosmics().subscribe(response => {
      this.allCosmics = response;
    })
  }

}
