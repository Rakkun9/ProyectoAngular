import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pelicritica';
}
