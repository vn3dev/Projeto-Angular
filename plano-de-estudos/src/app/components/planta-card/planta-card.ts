import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-planta-card',
  styleUrl: './planta-card.css',
  templateUrl: './planta-card.html',
})

export class PlantaCard {
  @Input() nome: string = '';
  @Input() luz: number = 0;
  @Input() umidade: number = 0;
  @Input() temperatura: number = 0;
  @Input() estado: string = '';  
}
