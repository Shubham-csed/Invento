import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Ensure this is imported
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterModule],  // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce App';
}
