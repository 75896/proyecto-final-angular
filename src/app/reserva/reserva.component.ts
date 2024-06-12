import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {

   onSubmit(): void {
    alert('¡Reserva de videojuego realizada!');
    console.log('Formulario enviado');
  }

  onCancel(): void {
    console.log('Cancelando reserva');
  }
}
