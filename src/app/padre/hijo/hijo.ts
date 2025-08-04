import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
    //!: operador non-null assertion
    // confie en que esta propiedad va a ser inicializada
    // Se inicializa desde el componente Padre
    @Input() mensajeHijo!: string;
    mensajePadre: any;
      
}
