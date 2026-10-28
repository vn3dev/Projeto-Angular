import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-form-aula',
  styleUrl: './form-aula.css',
  templateUrl: './form-aula.html',
})
export class FormAula {
  @Input() titulo = '';
  nome = '';
  mensagem = '';
  idade = '';
  email='';
}