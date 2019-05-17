import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAccordionComponent } from './bio-accordion.component';

describe('BioAccordionComponent', () => {
  let component: BioAccordionComponent;
  let fixture: ComponentFixture<BioAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
