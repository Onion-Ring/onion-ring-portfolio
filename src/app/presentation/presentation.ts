import { Component } from '@angular/core';
import { SocialNetworks } from "./social-networks/social-networks";
import { VsCode } from './vs-code/vs-code';

@Component({
  selector: 'app-presentation',
  imports: [SocialNetworks,VsCode],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export class Presentation {

}
