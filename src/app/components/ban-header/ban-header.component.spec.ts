import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanHeaderComponent } from './ban-header.component';

describe('BanHeaderComponent', () => {
  let component: BanHeaderComponent;
  let fixture: ComponentFixture<BanHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
