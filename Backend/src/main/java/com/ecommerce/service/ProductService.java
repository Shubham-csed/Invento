package com.ecommerce.service;

import com.ecommerce.model.Product;
import java.util.List;

public interface ProductService {
    Product addProduct(Product product, Long categoryId);
    Product updateProduct(Long id, Product product, Long categoryId);
    void deleteProduct(Long id);
    Product getProductById(Long id);
    List<Product> getAllProducts();
}
