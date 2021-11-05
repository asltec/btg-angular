import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSeriesListComponent } from './marvel-series-list.component';

describe('MarvelSeriesListComponent', () => {
  let component: MarvelSeriesListComponent;
  let fixture: ComponentFixture<MarvelSeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelSeriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
