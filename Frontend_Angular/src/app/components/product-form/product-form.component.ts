import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: null,
    categoryId: undefined,
    categoryName: '',
    imageUrl: ''
  };

  categories: Category[] = [];
  isEditMode = false;
  formValid = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditMode = true;
      this.loadProduct(productId);
    }
    this.checkFormValidity();
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  loadProduct(id: string): void {
    this.productService.getProductById(+id).subscribe(data => {
      this.product = data;
      this.product.categoryId = data.category?.id ?? undefined;
      this.product.categoryName = data.category?.name ?? '';
      this.product.imageUrl = data.imageUrl ?? '';
      this.checkFormValidity();
    });
  }

  checkFormValidity(): void {
    this.formValid = !!(
      this.product.name &&
      this.product.description &&
      this.product.price > 0 &&
      this.product.quantity >= 0 &&
      this.product.categoryId &&
      this.product.imageUrl
    );
  }

  saveProduct(): void {
    if (!this.formValid) return;

    if (this.isEditMode && this.product.id !== undefined) {
      this.productService.updateProduct(this.product.id, {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: this.product.quantity,
        category: null,
        categoryId: this.product.categoryId,
        categoryName: this.product.categoryName,
        imageUrl: this.product.imageUrl
      }).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      const newProduct: Product = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: this.product.quantity,
        category: null,
        categoryId: this.product.categoryId,
        categoryName: this.product.categoryName,
        imageUrl: this.product.imageUrl
      };

      this.productService.addProduct(newProduct).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
