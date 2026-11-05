import { Component } from '@angular/core';
import { BotaoInventario } from '../botao-inventario/botao-inventario';
import { BotaoLoja } from '../botao-loja/botao-loja';

@Component({
  imports: [BotaoInventario, BotaoLoja],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
}