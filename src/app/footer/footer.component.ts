import { Component } from '@angular/core';
import { ProductDiscountService } from '../product-discount.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private productDiscountService: ProductDiscountService) { }

  data:any;

  ngOnInit() {
    this.productDiscountService.currentData.subscribe(data => {
      this.data=data;
    });
}
  
}
