import { Component } from '@angular/core';
import { Project } from "./project/project";

@Component({
  selector: 'app-personal-projects',
  imports: [Project],
  templateUrl: './personal-projects.html',
  styleUrl: './personal-projects.css'
})
export class PersonalProjects {

}
