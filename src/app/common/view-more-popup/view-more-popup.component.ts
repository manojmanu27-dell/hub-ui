import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-more-popup',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './view-more-popup.component.html',
  styleUrl: './view-more-popup.component.css',
})
export class ViewMorePopupComponent {
  constructor(
    private dialogRef: MatDialogRef<ViewMorePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog() {}
}
