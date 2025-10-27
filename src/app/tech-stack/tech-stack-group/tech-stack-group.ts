import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tech-stack-group',
  imports: [],
  templateUrl: './tech-stack-group.html',
  styleUrl: './tech-stack-group.css',
  encapsulation: ViewEncapsulation.None
})
export class TechStackGroup {

  title = input.required<string>();
  
  


}
