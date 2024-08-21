import { SharedService } from './../../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MatButtonModule } from '@angular/material/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AddMoreProductsPopupComponent } from '../../common/add-more-products-popup/add-more-products-popup.component';
import { Products } from '../../model/Products';


@Component({
  selector: 'app-compare-products',
  standalone: true,
  imports: [NzTableModule, CommonModule, NzCardModule, MatButtonModule],
  templateUrl: './compare-products.component.html',
  styleUrl: './compare-products.component.css',
})
export class CompareProductsComponent implements OnInit {
  rows = ['Brand', 'Category', 'Warranty', 'Price', 'Discount Percentage'];
  tempObj = {
    Brand: 'brand',
    Category: 'category',
    Warranty: 'warrantyInformation',
    Price: 'price',
    'Discount Percentage': 'discountPercentage',
  };

  comparedProducts: Products[] = [];
  constructor(
    private notification: NzNotificationService,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) {
    console.log(this.sharedService.selectedProductsArr);
  }

  ngOnInit(): void {
    this.comparedProducts = this.sharedService.selectedProductsArr;
  }
  modifySelectedProducts(id: any) {
    console.log('the id is', id);
    let deletedItem = this.comparedProducts.splice(id, 1);
    this.sharedService.selectedProductsArr = this.comparedProducts;
    this.sharedService.selectedProductsObj[deletedItem[0].id] = false;
  }

  handleAddToCompare() {
    if (this.comparedProducts.length < 4) {
      this.dialog.open(AddMoreProductsPopupComponent);
    } else {
      this.notification.create(
        'error',
        '',
        'Only Four Products can be compared at a time'
      );
    }
  }
}
