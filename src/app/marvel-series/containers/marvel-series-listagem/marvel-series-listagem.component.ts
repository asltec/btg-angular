import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelSeriesApi } from '../../api/marvel-series.api';

@Component({
  selector: 'app-marvel-series-listagem',
  templateUrl: './marvel-series-listagem.component.html',
  styleUrls: ['./marvel-series-listagem.component.scss']
})
export class MarvelSeriesListagemComponent implements OnInit {

  allSeries!: Observable<any>;

  constructor(private api: MarvelSeriesApi) { }

  ngOnInit(): void {

    this.getSeries();
  }

  private getSeries() {
    this.api.getAllSeries().subscribe(response => {
      this.allSeries = response
    })
  }

}
