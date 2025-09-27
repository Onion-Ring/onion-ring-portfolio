import { Component } from '@angular/core';
import { Presentation } from "./presentation/presentation";

@Component({
  selector: 'app-root',
  imports: [Presentation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'onion-ring-portfolio';
}
