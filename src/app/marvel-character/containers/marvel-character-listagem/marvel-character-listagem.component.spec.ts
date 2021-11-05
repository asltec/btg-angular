import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterListagemComponent } from './marvel-character-listagem.component';

describe('MarvelCharacterListagemComponent', () => {
  let component: MarvelCharacterListagemComponent;
  let fixture: ComponentFixture<MarvelCharacterListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCharacterListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
