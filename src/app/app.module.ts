import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';






@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ProductListComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: MyFormComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: 'product-details', component: ProductDetailsComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
