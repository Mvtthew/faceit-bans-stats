import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BansStatsComponent } from './bans-stats.component';

describe('BansStatsComponent', () => {
  let component: BansStatsComponent;
  let fixture: ComponentFixture<BansStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BansStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BansStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
