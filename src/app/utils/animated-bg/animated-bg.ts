import { AfterContentInit, Component } from '@angular/core';
import { AnimatedBgService } from './animated-bg-service';

@Component({
  selector: 'div [app-animated-bg]',
  imports: [],
  templateUrl: './animated-bg.html',
  styleUrl: './animated-bg.css'
})
export class AnimatedBg  implements AfterContentInit{
  
  constructor(public animatedBgService: AnimatedBgService){

  }

  ngAfterContentInit(): void {
    this.animatedBgService.createElements();
  }

}
