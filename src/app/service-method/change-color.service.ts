import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeColorService {

  private colorSource = new BehaviorSubject('#ffffff');
  currentColor = this.colorSource.asObservable();

  constructor() { }

  changeColor(color: string) {
    this.colorSource.next(color)
  }

  
}
