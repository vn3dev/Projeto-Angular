import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cliente-card',
  styleUrl: './cliente-card.css',
  templateUrl: './cliente-card.html',
})

export class ClienteCard {
  @Input() nome: string = '';
}
