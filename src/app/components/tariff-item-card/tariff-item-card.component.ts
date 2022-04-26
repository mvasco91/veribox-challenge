import { Component, Input, OnInit } from '@angular/core';
import { TariffItem } from '../../models/tariff-data.model';

@Component({
  selector: 'app-tariff-item-card',
  templateUrl: './tariff-item-card.component.html',
  styleUrls: ['./tariff-item-card.component.scss']
})
export class TariffItemCardComponent implements OnInit {
  @Input() tariffItem!: TariffItem;

  constructor() { }

  ngOnInit(): void {
  }

}
