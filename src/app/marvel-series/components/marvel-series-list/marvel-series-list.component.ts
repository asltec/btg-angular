import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-series-list',
  templateUrl: './marvel-series-list.component.html',
  styleUrls: ['./marvel-series-list.component.scss']
})
export class MarvelSeriesListComponent implements OnInit {

  @Input() series: any;

  constructor() { }

  ngOnInit(): void {
  }

}
