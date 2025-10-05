import { Component, signal } from '@angular/core';
import { SocialNetworks } from "./social-networks/social-networks";
import { VsCode } from './vs-code/vs-code';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';
import { Notepad } from './notepad/notepad';

@Component({
  selector: 'app-presentation',
  imports: [SocialNetworks, VsCode, HamburgerMenu, Notepad],
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
