import { Component } from '@angular/core';
import { Experience } from "./experience/experience";

@Component({
  selector: 'app-work-experience',
  imports: [Experience],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css'
})
export class WorkExperience {
  public present = new Date();
}
