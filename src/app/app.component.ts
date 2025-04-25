import { Component } from '@angular/core';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet  , NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'practica-angular';
}
