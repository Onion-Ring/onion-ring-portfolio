import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.css'
})
export class HamburgerMenu {


  hamburgerMenuClose = output<void>();


  onCloseHamburgerMenu() {
    this.hamburgerMenuClose.emit();
  }

}
