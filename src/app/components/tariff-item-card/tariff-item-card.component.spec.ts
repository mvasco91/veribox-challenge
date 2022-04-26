import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffItemCardComponent } from './tariff-item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TariffItemCardComponent', () => {
  let component: TariffItemCardComponent;
  let fixture: ComponentFixture<TariffItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TariffItemCardComponent],
    imports: [MatIconModule, MatCardModule, MatSelectModule, BrowserAnimationsModule, FormsModule],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffItemCardComponent);
    component = fixture.componentInstance;
    component.tariffItem = {
      name: 'DSL-VERGLEICH',
      downloadSpeed: 100,
      uploadSpeed: 30,
      benefits: ['Kostenlos Tarife vergleichen', 'Bis zu 650 € sparen', 'Günstige Tarif-Schnäppchen'],
      price: 120.45
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
