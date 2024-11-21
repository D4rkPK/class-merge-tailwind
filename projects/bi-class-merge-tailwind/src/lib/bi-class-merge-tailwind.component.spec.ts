import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiClassMergeTailwindComponent } from './bi-class-merge-tailwind.component';

describe('BiClassMergeTailwindComponent', () => {
  let component: BiClassMergeTailwindComponent;
  let fixture: ComponentFixture<BiClassMergeTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiClassMergeTailwindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiClassMergeTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
