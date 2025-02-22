import { Category } from './category.model';

export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category?: Category | null;
    categoryId?: number;
    categoryName?: string;
    imageUrl?: string;
}
