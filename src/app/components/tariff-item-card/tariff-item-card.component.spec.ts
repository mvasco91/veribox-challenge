import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffItemCardComponent } from './tariff-item-card.component';

describe('TariffItemCardComponent', () => {
  let component: TariffItemCardComponent;
  let fixture: ComponentFixture<TariffItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
