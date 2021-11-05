import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterListComponent } from './marvel-character-list.component';

describe('MarvelCharacterListComponent', () => {
  let component: MarvelCharacterListComponent;
  let fixture: ComponentFixture<MarvelCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCharacterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
