import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingLocationComponent } from './charging-location.component';

describe('ChargingLocationComponent', () => {
  let component: ChargingLocationComponent;
  let fixture: ComponentFixture<ChargingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
