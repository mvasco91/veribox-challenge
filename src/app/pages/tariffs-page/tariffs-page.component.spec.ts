import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffsPageComponent } from './tariffs-page.component';

describe('TariffsPageComponent', () => {
  let component: TariffsPageComponent;
  let fixture: ComponentFixture<TariffsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
