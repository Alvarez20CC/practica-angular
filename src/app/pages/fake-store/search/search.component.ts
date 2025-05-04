import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule aquí
  template: `
  <div class="d-flex justify-content-center my-4">
    <div class="input-group mb-3" style="max-width: 600px; width: 100%;">
      <input 
        type="text" 
        class="form-control"
        placeholder="Escribe el nombre del producto" 
        aria-label="Escribe el nombre del producto" 
        aria-describedby="button-addon2"
        [(ngModel)]="searchTerm"
        (input)="onInput()"> <!-- Llama al método cada vez que el usuario escribe -->
    </div>
  </div>
  `,
  styles: []
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = ''; // Variable para almacenar el valor del campo de entrada

  onInput(): void {
    const trimmedTerm = this.searchTerm.trim(); // Elimina espacios en blanco
    this.search.emit(trimmedTerm); // Emite el término de búsqueda en tiempo real
  }
}
