import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable(
    {providedIn:'root'}
)
export class ProductService{
    constructor(private http:HttpClient,private router:Router){
         
    }
    getAll():Observable<any>{
      return this.http.get('http://localhost:9090/product/all');
    }
}