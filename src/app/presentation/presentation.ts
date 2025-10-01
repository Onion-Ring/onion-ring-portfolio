import { Component, signal } from '@angular/core';
import { SocialNetworks } from "./social-networks/social-networks";
import { VsCode } from './vs-code/vs-code';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';

@Component({
  selector: 'app-presentation',
  imports: [SocialNetworks,VsCode,HamburgerMenu],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export class Presentation {

  public isHamburgerMenuOpen = signal<boolean>(false);



  onOpenHamburgerMenu(): void{
    this.isHamburgerMenuOpen.set(true);
  }

  onCloseHamburgerMenu():void{
    this.isHamburgerMenuOpen.set(false);
  }

}
