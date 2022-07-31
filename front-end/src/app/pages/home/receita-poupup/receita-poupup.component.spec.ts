import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaPoupupComponent } from './receita-poupup.component';

describe('ReceitaPoupupComponent', () => {
  let component: ReceitaPoupupComponent;
  let fixture: ComponentFixture<ReceitaPoupupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaPoupupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaPoupupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
