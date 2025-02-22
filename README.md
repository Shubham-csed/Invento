# E-Commerce Web Application

## Overview

Invento: E-Commerce Inventory & Category Management

A web-based e-commerce application for efficient product and category management. Built with Angular (frontend), Spring Boot (backend), and PostgreSQL (database), it enables users to add, update, delete, and categorize products, as well as filter and view products by category for an optimized browsing experience.

## Features

### **Product Management**

- Add, edit, and delete products.
- Assign categories to products.
- Upload and display product images.
- Filter products by category.

### **Category Management**

- Create, edit, and delete categories.
- Display categories in a dropdown for product selection.

## Tech Stack

### **Frontend**

- **Framework:** Angular 19 (Standalone Components)
- **State Management:** Angular Services
- **UI Styling:** Bootstrap
- **HTTP Client:** Angular HttpClient

### **Backend**

- **Framework:** Spring Boot (Microservices Architecture)
- **Database Access:** Spring Data JPA (Hibernate)

### **Database**

- **Primary Database:** PostgreSQL
- **ORM:** Hibernate + JPA

## Installation & Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/Shubham-csed/Invento.git
cd Invento
```

### **2. Backend Setup (Spring Boot)**

```sh
cd Backend
mvn clean install
mvn spring-boot:run
```

- Update `application.properties` with your PostgreSQL credentials.

### **3. Frontend Setup (Angular)**

```sh
cd Frontend_Angular
npm install
ng serve
```

- Open the app in your browser: `http://localhost:4200`

## API Endpoints

### **Product APIs**

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/products`      | Get all products  |
| GET    | `/api/products/{id}` | Get product by ID |
| POST   | `/api/products`      | Add a new product |
| PUT    | `/api/products/{id}` | Update product    |
| DELETE | `/api/products/{id}` | Delete product    |

### **Category APIs**

| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/categories`      | Get all categories |
| POST   | `/api/categories`      | Add a new category |
| PUT    | `/api/categories/{id}` | Update category    |
| DELETE | `/api/categories/{id}` | Delete category    |

## Future Enhancements

- User Authentication & Authorization(JWT-based authentication and Role-based access control)
- Shopping Cart & Orders(Process payments via Stripe/PayPal)
- Wishlist & Favorites Feature
- Payment Gateway Integration (Stripe/PayPal)
- Email Notifications for Order Confirmation
- Multi-Vendor Support
- Admin Dashboard(Manage users, products, and orders)

## Contributors

- **[Kumar Shubham]** - Full Stack Developer

