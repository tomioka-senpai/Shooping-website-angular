import { Component,OnInit } from '@angular/core';
import { GetDataServiceService } from '../get-data-service.service';
import { MatCard } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { ProductDiscountService } from '../product-discount.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  
})
export class ProductListComponent implements OnInit{
  // products: any[] = [
  //   { title:'apple', price:'1000', discount:'10%'},
  //   { title:'lava', price:'2000', discount:'15%'},
  //   { title:'nokia', price:'3000', discount:'12%'},
  //   { title:'samsung', price:'4000', discount:'11%'},
  //   { title:'oppo', price:'5000', discount:'14%'},
  // ];

  products: any[] = [];
  

  constructor(private getDataServiceService: GetDataServiceService, private router:Router, private productDiscountService: ProductDiscountService) {}

  ngOnInit(): void {
    
    this.getDataServiceService.getData().subscribe((data:any) => {
      this.products = data['products'];
    });
  }


  onClick(product:any) {
    // this.router.navigate(['/product-details']);
    this.productDiscountService.setData([product['title'],product['description'],product['price']])
  }

  displayFooter = false;

  showFooter(product:any) {
    this.displayFooter = true;
    this.productDiscountService.setData(product['price'] - 0.01*product['discountPercentage']*product['price'])
  }
  
}
