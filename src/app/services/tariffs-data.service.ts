import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TariffItem } from '../models/tariff-data.model';

@Injectable({
  providedIn: 'root'
})
export class TariffsDataService {

  tariffListData: TariffItem[] = [
    {
      name: 'DSL-VERGLEICH',
      downloadSpeed: 100,
      uploadSpeed: 30,
      benefits: ['Kostenlos Tarife vergleichen', 'Bis zu 650 € sparen', 'Günstige Tarif-Schnäppchen'],
      price: 120.45
    },
    {
      name: 'KABEL-INTERNET',
      downloadSpeed: 250,
      uploadSpeed:35,
      benefits: ['254194 Bewertungen', '96 % unserer Kunden', '100% neutrale'],
      price: 180.20
    },
    {
      name: 'LTE-VERGLEICH',
      downloadSpeed: 300,
      uploadSpeed: 32,
      benefits: ['Immer & überall online', 'Datenvolumen so viel Sie wollen', 'Neu: auch mit Surfstick & Router'],
      price: 200.45
    },
    {
      name: 'TV-VERGLEICH',
      downloadSpeed: 400,
      uploadSpeed: 100,
      benefits: ['254194 Bewertungen', '96 % unserer Kunden ', '100% neutrale '],
      price: 300.45
    }
  ]

  constructor() { }

  getTariffsData() {
    return of(this.tariffListData).toPromise()
  }
}
