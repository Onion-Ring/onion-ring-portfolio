import { Component } from '@angular/core';
import { TechStackGroup } from './tech-stack-group/tech-stack-group';

@Component({
  selector: 'app-tech-stack',
  imports: [TechStackGroup],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStack {

}
