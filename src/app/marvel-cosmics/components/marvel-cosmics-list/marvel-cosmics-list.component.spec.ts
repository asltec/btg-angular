import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCosmicsListComponent } from './marvel-cosmics-list.component';

describe('MarvelCosmicsListComponent', () => {
  let component: MarvelCosmicsListComponent;
  let fixture: ComponentFixture<MarvelCosmicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCosmicsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCosmicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
