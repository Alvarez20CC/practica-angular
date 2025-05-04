import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pag',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './pag.component.html',
  styleUrl: './pag.component.css'
})
export class PagComponent {

}
