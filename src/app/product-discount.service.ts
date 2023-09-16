import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDiscountService {
  private data = new BehaviorSubject("");
  currentData = this.data.asObservable();

  constructor() { }

  setData(data: any){
    this.data.next(data);

  }
}
