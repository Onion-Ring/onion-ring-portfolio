import { Injectable, Signal, signal } from '@angular/core';
import { AnimatedElement } from './AnimatedElement-model';

@Injectable({
  providedIn: 'root'
})
export class AnimatedBgService {


  private elementToAdd: AnimatedElement = new AnimatedElement;
  public readonly elementsToCreate: number = 60;
  public elements = signal<Array<AnimatedElement>>([]);

  randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createElements(): void {

    let circleType: number = 0;

    for (let index = 0; index < this.elementsToCreate; index++) {

      circleType = this.randomIntFromInterval(1, 3);

      if (1 === circleType) {
        this.setCircleDimensions(30, 60);
      } else if (2 === circleType) {
        this.setCircleDimensions(61, 90);
      } else {
        this.setCircleDimensions(90, 120);
      }

      this.setCirclePositioning();

      if (this.randomIntFromInterval(1, 2) == 1) {
        this.elementToAdd.reverse = true;
      }

      this.addElement(this.elementToAdd);

      this.elementToAdd = new AnimatedElement;
    }

  }

  private setCircleDimensions(min: number, max: number): void {
    this.elementToAdd.width = this.randomIntFromInterval(min, max);
    this.elementToAdd.height = this.elementToAdd.width;
  }


  private setLeftPositioning(): void {

    let leftMinimum: number = 0;
    let leftMaximum: number = 0;
    
    
    let offsetWidth = document.body.offsetWidth;

    // Positioning the 10% of the elements at the right of the web
    if (this.randomIntFromInterval(1, 10) === 1) {

      if (this.elementToAdd.width < 60 || this.elementToAdd.width < 90) {
        leftMinimum = this.randomIntFromInterval(offsetWidth * 0.7, offsetWidth * 0.8);
        leftMaximum = this.randomIntFromInterval(offsetWidth * 0.85, offsetWidth * 0.9);
      } else {
        leftMinimum = this.randomIntFromInterval(offsetWidth * 0.6, offsetWidth * 0.7);
        leftMaximum = this.randomIntFromInterval(offsetWidth * 0.75, offsetWidth * 0.8);
      }

    } else {
      leftMinimum = this.randomIntFromInterval(20, 40);
      leftMaximum = document.body.offsetWidth - 300;
    }

    // From px to % in order to have more different results
    leftMinimum = (leftMinimum / document.body.offsetWidth) * 100;
    leftMaximum = ((leftMaximum / document.body.offsetWidth) * 100);

    if(leftMaximum > 70 && leftMaximum <= 80){
      leftMaximum-=4;
    }

    this.elementToAdd.left = this.randomIntFromInterval(leftMinimum, leftMaximum);
  }

  private setTopPositioning(): void {

    let topMinimum: number = 0;
    let topMaximum: number = 0;
    let multiplier: number = 3;

    if (this.elementToAdd.left >= 75) {

      if (this.elementToAdd.width < 60) {
        topMinimum = this.randomIntFromInterval(200, 400);
        topMaximum = this.randomIntFromInterval(500, 700);
      } else if (this.elementToAdd.width < 100) {
        topMinimum = this.randomIntFromInterval(700, 900);
        topMaximum = this.randomIntFromInterval(1000, 1200);
      } else {
        topMinimum = this.randomIntFromInterval(1200, 1400);
        topMaximum = this.randomIntFromInterval(1500, 1700);
      }

    } else {

      topMinimum = this.randomIntFromInterval(1100, 1900);
      topMaximum = this.randomIntFromInterval(5000, 5700);
      multiplier = 4.2;
    }

    topMinimum = (topMinimum / document.body.offsetHeight) * 100;
    topMaximum = (topMaximum / document.body.offsetHeight) * 100;

    this.elementToAdd.top = this.randomIntFromInterval(topMinimum, topMaximum) * multiplier;

  }

  private setCirclePositioning(): void {
    this.setLeftPositioning();
    this.setTopPositioning();
  }

  addElement(newElement: AnimatedElement): void {
    this.elements.update((old) => [...old, newElement])
  }

  getElements(): Signal<AnimatedElement[]> {
    return this.elements.asReadonly();
  }

}
