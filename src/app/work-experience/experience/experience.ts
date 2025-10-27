import { AfterContentChecked, Component, input, signal, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [DatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  encapsulation: ViewEncapsulation.None
})
export class Experience implements AfterContentChecked{
  title = input.required<string>();
  companyName = input.required<string>();
  employmentType = input.required<string>();
  intervalDates = input.required<string>();
  modality = input.required<string>();  
  companyLink = input.required<string>();
  today = new Date();
  startDate :string = "";
  endDate: string = "";

  ngAfterContentChecked(): void {
    this.startDate = this.intervalDates!().split("-")[0]; 
    this.endDate =  this.intervalDates!().split("-")[1];  
  }
}
