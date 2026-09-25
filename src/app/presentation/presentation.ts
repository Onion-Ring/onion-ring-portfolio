import { Component, signal } from '@angular/core';
import { VsCode } from './vs-code/vs-code';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';
import { Notepad } from './notepad/notepad';
import { ISourceOptions } from '@tsparticles/engine';

@Component({
  selector: 'app-presentation',
  imports: [VsCode, HamburgerMenu, Notepad],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export class Presentation {

  public isHamburgerMenuOpen = signal<boolean>(false);    
  public activeFile = signal<string>("");


  public notepadContents : string[] = [];

  constructor(){
    this.notepadContents.push("Hello! My name is Antonio, I'm a software developer always eager to learn about new technologies as well as to grow both personally and professionally.");
    this.notepadContents.push("I have over three years of experience developing and maintaining .NET applications and working with SQL Server databases. My main responsibilities include developing new features and maintaining legacy code.\n\nI also have experience mentoring interns, working with teams from different countries and working under pressure.");
    this.notepadContents.push("On this page, I'll briefly introduce the personal projects I'm working on and the technologies I have experience with.");
  }

  onOpenHamburgerMenu(): void {
    // Disable  scrolling
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    this.isHamburgerMenuOpen.set(true);
  }

  onCloseHamburgerMenu(): void {    
    this.isHamburgerMenuOpen.set(false);
  }

  onNotepadClick(file: string): void {
    this.activeFile.set(file);
  }



}
