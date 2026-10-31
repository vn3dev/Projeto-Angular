import { Component } from '@angular/core';
import { PlantaCard } from '../planta-card/planta-card';
import type { Planta } from '../../models/planta';

@Component({
  imports: [PlantaCard],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {

  plantas: Planta[] = [
    {
      id: 1,
      nome: 'Oliver',
      luz: 577,
      umidade: 721,
      temperatura: 23.3,
      estado: 'FELIZ'
    },
    {
      id: 2,
      nome: 'Vanessa',
      luz: 95,
      umidade: 103,
      temperatura: 18.0,
      estado: 'CRITICO'
    },
    {
      id: 3,
      nome: 'Kim Jong Un',
      luz: 731,
      umidade: 159,
      temperatura: 27.5,
      estado: 'COM SEDE'
    }
  ]
}
