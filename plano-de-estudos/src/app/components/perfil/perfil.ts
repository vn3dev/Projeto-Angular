import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {
  @Input() imagem: string = '';
}
