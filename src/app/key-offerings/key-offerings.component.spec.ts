import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyOfferingsComponent } from './key-offerings.component';

describe('KeyOfferingsComponent', () => {
  let component: KeyOfferingsComponent;
  let fixture: ComponentFixture<KeyOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyOfferingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
