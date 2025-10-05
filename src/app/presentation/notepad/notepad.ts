import { Component, HostListener, input } from '@angular/core';

@Component({
  selector: 'app-notepad',
  imports: [],
  templateUrl: './notepad.html',
  styleUrl: './notepad.css'
})



export class Notepad {

  // Window properties
  width = input.required<number>();
  height = input.required<number>();
  content = input.required<string>();
  filename = input.required<string>();

  // Positioning
  top = input<number>(0);
  left = input<number>(0);
  bottom = input<number>(0);
  right = input<number>(0);


}
