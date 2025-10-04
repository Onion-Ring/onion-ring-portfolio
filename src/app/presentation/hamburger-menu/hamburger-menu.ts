import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.css'
})
export class HamburgerMenu {

  public fadeOutMenu = signal<boolean>(false);
  public hamburgerMenuClose = output<void>();


  onCloseHamburgerMenu() {
    this.fadeOutMenu.set(true); 
    new Promise(resolve => setTimeout(resolve, 850)).then(() => { this.hamburgerMenuClose.emit(); });        
  }

}
