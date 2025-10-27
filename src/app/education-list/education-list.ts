import { Component, signal } from '@angular/core';
import { Education } from "./education/education";

@Component({
  selector: 'app-education-list',
  imports: [Education],
  templateUrl: './education-list.html',
  styleUrl: './education-list.css'
})
export class EducationList {
  public isHovering = signal<boolean>(false);
}
