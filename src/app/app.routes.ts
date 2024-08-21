import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CompareProductsComponent } from './pages/compare-products/compare-products.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product-details' },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'compare-products', component: CompareProductsComponent },
];
