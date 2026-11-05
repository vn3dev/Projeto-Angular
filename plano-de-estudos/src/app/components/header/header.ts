import { Component } from '@angular/core';
import { Perfil } from '../perfil/perfil';
import { BotaoVoltar } from '../botao-voltar/botao-voltar';

@Component({
  imports: [Perfil, BotaoVoltar],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
