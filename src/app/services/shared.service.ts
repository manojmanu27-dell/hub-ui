import { Injectable } from '@angular/core';
import { Products } from '../model/Products';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public isCollapsed: boolean;
  public selectedProductsObj: any = {}
  public selectedProductsArr: Products[] = [];
  productsList: Products[];
  constructor() {}
}
