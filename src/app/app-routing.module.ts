import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: MyFormComponent, },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details', component: ProductDetailsComponent }
];
  // { path: 'product-list', 
  //   children: [
  //     {path:'', component:ProductListComponent},
  //     {path:'', component:FooterComponent}
  //   ]
  // }];
  // { path: 'product-list',
  //   children : [
  //     {path:'' , component:ProductListComponent},
  //     {path:'' , component:FooterComponent}
  //   ]
  // }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
