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

    

  }

  private setCircleDimensions(min: number, max: number): void {
    
  }


  private setLeftPositioning(): void {

    
  }

  private setTopPositioning(): void {

    

  }

  private setCirclePositioning(): void {
    
  }

  addElement(newElement: AnimatedElement): void {
    this.elements.update((old) => [...old, newElement])
  }

  getElements(): Signal<AnimatedElement[]> {
    return this.elements.asReadonly();
  }

}
