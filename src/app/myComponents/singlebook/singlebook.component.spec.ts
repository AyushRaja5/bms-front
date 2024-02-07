import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebookComponent } from './singlebook.component';

describe('SinglebookComponent', () => {
  let component: SinglebookComponent;
  let fixture: ComponentFixture<SinglebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
