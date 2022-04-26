import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffsPageComponent } from './tariffs-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TariffItemCardComponent } from '../../components/tariff-item-card/tariff-item-card.component';

describe('TariffsPageComponent', () => {
  let component: TariffsPageComponent;
  let fixture: ComponentFixture<TariffsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TariffsPageComponent, TariffItemCardComponent],
    imports: [MatIconModule, MatCardModule, MatSelectModule, BrowserAnimationsModule, FormsModule ],
    teardown: { destroyAfterEach: false }
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

  it(' getTariffDataService should return a Objects array', () => {
    expect(component.tariffsData.length).toBe(4);
  });

  it('filterBy fuction should sort data by DownloadSpeed', () => {
    component.filterBy('downloadSpeed')
    expect(component.tariffsData[0].downloadSpeed).toBe(400);
  });

  it('filterBy fuction should sort data by UploadSpeed', () => {
    component.filterBy('uploadSpeed')
    expect(component.tariffsData[0].uploadSpeed).toBe(100);
  });

  it('filterBy fuction should sort data by lowerPrice', () => {
    component.filterBy('lowerPrice')
    expect(component.tariffsData[0].price).toBe(120.45);
  });

});
