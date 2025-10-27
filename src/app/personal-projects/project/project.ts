import { Component, input, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
  encapsulation: ViewEncapsulation.None
})
export class Project {

  title = input.required<string>();
  imgFileName = input.required<string>();
  repositoryLink = input.required<string>();

  public dropDownClicked = signal<boolean>(false);
  public alreadyClicked = signal<boolean>(false);

  onDropDownClicked(){
    this.alreadyClicked.set(true);
    this.dropDownClicked.set(!this.dropDownClicked());
  }

}
