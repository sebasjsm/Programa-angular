import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramaComponent } from './create-programa.component';

describe('CreateProgramaComponent', () => {
  let component: CreateProgramaComponent;
  let fixture: ComponentFixture<CreateProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProgramaComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
