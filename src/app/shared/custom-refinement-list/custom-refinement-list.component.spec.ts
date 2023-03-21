import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRefinementListComponent } from './custom-refinement-list.component';

describe('CustomRefinementListComponent', () => {
  let component: CustomRefinementListComponent;
  let fixture: ComponentFixture<CustomRefinementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRefinementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRefinementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
