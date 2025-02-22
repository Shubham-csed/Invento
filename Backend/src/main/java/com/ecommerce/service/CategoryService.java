package com.ecommerce.service;

import com.ecommerce.model.Category;
import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();
    Category addCategory(Category category);
    void deleteCategory(Long id);
}
