import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-certification',
  imports: [],
  templateUrl: './certification.html',
  styleUrl: './certification.css',
  encapsulation: ViewEncapsulation.None
})
export class Certification {
  
  title = input.required<string>();
  issued = input.required<string>();
  credentialId = input.required<string>();
  learningPlatform = input.required<string>();

}
