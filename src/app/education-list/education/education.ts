import { Component, input, output, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'div [app-education]',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
  encapsulation:ViewEncapsulation.None
})
export class Education {

  public title = input.required<string>();
  public imagePath = input.required<string>();
  public titleObtained = input.required<string>();
  public wasHovered = signal<boolean>(false);
  public isHovering = signal<boolean>(false);


  onMouseEnter(){
    this.isHovering.set(true);

    if(!this.wasHovered()){
      this.wasHovered.set(true);
    }      
  }

  onMouseLeave(){
    this.isHovering.set(false);
  }

}
