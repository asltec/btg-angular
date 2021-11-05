import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSeriesListagemComponent } from './marvel-series-listagem.component';

describe('MarvelSeriesListagemComponent', () => {
  let component: MarvelSeriesListagemComponent;
  let fixture: ComponentFixture<MarvelSeriesListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelSeriesListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelSeriesListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
