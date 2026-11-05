import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produto-card',
  styleUrl: './produto-card.css',
  templateUrl: './produto-card.html',
})

export class ProdutoCard {
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() valor: number = 0;
}