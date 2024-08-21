import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';

import {
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { Products } from '../../model/Products';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewMorePopupComponent } from '../../common/view-more-popup/view-more-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from '../../services/shared.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<any> | null;
  sortDirections: NzTableSortOrder[];
}
@Component({
  selector: 'app-add-more-products-popup',
  standalone: true,
  imports: [
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    CommonModule,
    NzCardModule,
    MatButtonModule,
  ],
  templateUrl: './add-more-products-popup.component.html',
  styleUrl: './add-more-products-popup.component.css',
})
export class AddMoreProductsPopupComponent {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Title',
      sortOrder: null,
      sortFn: (a: Products, b: Products) => a.title.localeCompare(b.title),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Description',
      sortOrder: null,
      sortFn: (a: Products, b: Products) =>
        a.description.localeCompare(b.description),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Price',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Products, b: Products) => a.price - b.price,
    },
    {
      name: 'Discount Percentage',
      sortOrder: null,
      sortFn: (a: Products, b: Products) =>
        a.discountPercentage - b.discountPercentage,
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Brand',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Products, b: Products) => a.brand?.localeCompare(b.brand),
    },
    {
      name: 'Category',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Products, b: Products) =>
        a.category.localeCompare(b.category),
    },
    {
      name: 'Image',
      sortOrder: null,
      sortDirections: [],
      sortFn: () => 0,
    },
    {
      name: 'compare',
      sortOrder: null,
      sortDirections: [],
      sortFn: () => 0,
    },
  ];
  listOfData: Products[] = [];
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddMoreProductsPopupComponent>,
    public sharedService: SharedService,
    private notification: NzNotificationService
  ) {
    this.listOfData = this.sharedService.productsList;
  }

  hanldeText(description: string) {
    this.dialog.open(ViewMorePopupComponent, { data: description });
  }

  handleCompare(obj: Products) {
    this.dialogRef.close();
    if (this.sharedService.selectedProductsArr.length < 4) {
      this.sharedService.selectedProductsObj[obj.id] = this.sharedService
        .selectedProductsObj[obj.id]
        ? !this.sharedService.selectedProductsObj[obj.id]
        : true;
      this.sharedService.selectedProductsArr.push(obj);
    } else {
      this.notification.create(
        'error',
        '',
        'Only Four Products can be compared at a time'
      );
    }
  }
}
