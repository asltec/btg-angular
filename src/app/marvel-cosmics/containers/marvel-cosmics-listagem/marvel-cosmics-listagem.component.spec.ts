import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCosmicsListagemComponent } from './marvel-cosmics-listagem.component';

describe('MarvelCosmicsListagemComponent', () => {
  let component: MarvelCosmicsListagemComponent;
  let fixture: ComponentFixture<MarvelCosmicsListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCosmicsListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCosmicsListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
