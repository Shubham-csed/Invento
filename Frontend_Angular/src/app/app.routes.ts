import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },          // Default route to product list
    { path: 'add', component: ProductFormComponent },      // Route for adding new product
    { path: 'edit/:id', component: ProductFormComponent }, // Route for editing a product
    { path: 'categories', component: CategoryListComponent }, // Route for category list
    { path: '**', redirectTo: '', pathMatch: 'full' }      // Wildcard route to redirect unmatched paths
];
