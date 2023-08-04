import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 @Input() prd:Product;
 constructor(private service:ProductService,private router:Router){
  this.prd=new Product();
 }
  addProduct(){
    this.service.saveProduct(this.prd).subscribe();
    alert('product added')
  }
}
