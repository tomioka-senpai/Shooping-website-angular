import { Component } from '@angular/core';
import { DetailsService } from '../details.service';
import { ProductDiscountService } from '../product-discount.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  

  constructor(private detailsService:ProductDiscountService){}
  data:any;

  ngOnInit() {
    this.detailsService.currentData.subscribe(data => {
      this.data=data;
    });
}


}
