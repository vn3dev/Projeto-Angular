import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlantaCard } from '../planta-card/planta-card';
import type { Planta } from '../../models/planta';

@Component({
  imports: [FormsModule, PlantaCard],
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

  novoCliente: string = '';
  clientes: string[] = ['Ana', 'Lucas', 'Maiki', 'Kain'];

  produtoExemplo = {
    id: 1,
    nome: 'Teclado',
    descricao: 'Compacto',
    valor: 199 
  }

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
