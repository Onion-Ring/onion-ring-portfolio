import { Component, input } from '@angular/core';

@Component({
  selector: 'app-notepad',
  imports: [],
  templateUrl: './notepad.html',
  styleUrl: './notepad.css'
})
export class Notepad {

  width = input.required<number>();
  height = input.required<number>();
  content = input.required<string>();


}
