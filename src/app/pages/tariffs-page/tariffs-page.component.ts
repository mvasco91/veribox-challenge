import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TariffItem } from 'src/app/models/tariff-data.model';
import { TariffsDataService } from '../../services/tariffs-data.service';

@Component({
  selector: 'app-tariffs-page',
  templateUrl: './tariffs-page.component.html',
  styleUrls: ['./tariffs-page.component.scss']
})
export class TariffsPageComponent implements OnInit {
  tariffsData!: TariffItem[];
  selectedFilter!: string;
  constructor(private $tariffDataService: TariffsDataService, private cd: ChangeDetectorRef) { }

  async ngOnInit() {
    this.tariffsData = await this.$tariffDataService.getTariffsData()
  }

  filterBy(filterSelected: string) {
    switch (filterSelected) {
      case 'downloadSpeed':
        this.tariffsData = this.tariffsData.sort((one, two) => (one.downloadSpeed > two.downloadSpeed ? -1 : 1));
        this.cd.detectChanges();
        break;
      case 'uploadSpeed':
        this.tariffsData = this.tariffsData.sort((one, two) => (one.uploadSpeed > two.uploadSpeed ? -1 : 1));
        this.cd.detectChanges();
        break;
      case 'lowerPrice':
        this.tariffsData = this.tariffsData.sort((one, two) => (one.price < two.price ? -1 : 1));
        this.cd.detectChanges();
        break;
      default:
        break;
    }

  }

}
