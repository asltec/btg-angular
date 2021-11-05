import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-cosmics-list',
  templateUrl: './marvel-cosmics-list.component.html',
  styleUrls: ['./marvel-cosmics-list.component.scss']
})
export class MarvelCosmicsListComponent implements OnInit {

  @Input() cosmics: any;

  constructor() { }

  ngOnInit(): void {
  }

}
