import { AfterContentInit, Component } from '@angular/core';
import { Presentation } from "./presentation/presentation";
import { EducationList } from "./education-list/education-list";
import { AnimatedBg } from './utils/animated-bg/animated-bg';
import { TechStack } from "./tech-stack/tech-stack";
import { PersonalProjects } from "./personal-projects/personal-projects";
import { Certifications } from "./certifications/certifications";
import { WorkExperience } from "./work-experience/work-experience";

@Component({
  selector: 'app-root',
  imports: [Presentation, EducationList, AnimatedBg, TechStack, PersonalProjects, Certifications, WorkExperience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'onion-ring-portfolio';
}
