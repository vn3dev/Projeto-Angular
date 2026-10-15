import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  novoCliente: string = '';
  clientes: string[] = ['Ana', 'Lucas', 'Maiki', 'Kain'];

  limpar(): void {
    this.clientes = [];
  }

  adicionar(): void {
    const nome = this.novoCliente.trim();
    if (nome === '') return;
    this.clientes.push(nome);
    this.novoCliente = '';
  }
}
