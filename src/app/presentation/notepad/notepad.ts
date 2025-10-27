import { Component, computed, HostListener, Input, input, output, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notepad',
  imports: [],
  templateUrl: './notepad.html',
  styleUrl: './notepad.css'
})



export class Notepad {

  clicked = output<string>();
  keyDown = output<{position:number,fileName:string,columnChange:boolean}>();

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

  zIndex = input.required<number>();

  @Input({ required: true }) line : number = 0;
  @Input({ required: true }) column : number = 0;

  onNotepadClick() {
    this.clicked.emit(this.filename());
  }

  static fromJSON(json: any): Notepad {
    return Object.assign(new Notepad(), json);
  }
  
}
