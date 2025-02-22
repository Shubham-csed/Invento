package com.ecommerce.controller;

import com.ecommerce.model.Product;
import com.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/{categoryId}")
    public Product addProduct(@RequestBody Product product, @PathVariable Long categoryId) {
        return productService.addProduct(product, categoryId);
    }

    @PutMapping("/{id}/{categoryId}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product, @PathVariable Long categoryId) {
        System.out.println("L1 "+id+" "+product+" "+categoryId);
        System.out.println("L2 "+product.getDescription() + product.getName() + product.getPrice() + product.getQuantity());
    	return productService.updateProduct(id, product, categoryId);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
