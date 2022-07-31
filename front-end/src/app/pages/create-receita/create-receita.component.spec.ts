import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReceitaComponent } from './create-receita.component';

describe('CreateReceitaComponent', () => {
  let component: CreateReceitaComponent;
  let fixture: ComponentFixture<CreateReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
