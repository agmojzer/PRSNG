import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

//user components
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

//vendor components
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

//product components
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';

//purchaserequest components
import { PurchaserequestListComponent } from 
	'./feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
	import { PurchaserequestDetailComponent } from 
	'./feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
	import { PurchaserequestEditComponent } from 
	'./feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
	import { PurchaserequestCreateComponent } from 
	'./feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
	import { PurchaserequestLinesComponent } from 
	'./feature/purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
	import { PurchaserequestReviewDetailComponent } from 
	'./feature/purchaserequest/purchaserequest-review-detail/purchaserequest-review-detail.component';
	import { PurchaserequestReviewListComponent } from 
	'./feature/purchaserequest/purchaserequest-review-list/purchaserequest-review-list.component';

//line item components
import { PurchaserequestlineitemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import {PurchaserequestlineitemCreateComponent} from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import {PurchaserequestlineitemEditComponent} from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'}, //could be changed from home to other places
{path: 'user/detail/:id', component: UserDetailComponent},
{path: 'user/edit/:id', component: UserEditComponent},
{path: 'user/create', component: UserCreateComponent},
{path: 'user/list', component: UserListComponent},
{path: 'user/login', component: UserLoginComponent},
{path: 'vendor/detail/:id', component: VendorDetailComponent},
{path: 'vendor/edit/:id', component: VendorEditComponent},
{path: 'vendor/list', component: VendorListComponent},
{path: 'vendor/create', component: VendorCreateComponent},
{path: 'product/detail/:id', component: ProductDetailComponent},
{path: 'product/edit/:id', component: ProductEditComponent},
{path: 'product/list', component: ProductListComponent},
{path: 'product/create', component: ProductCreateComponent},
{path: 'purchaserequest/detail/:id', component: PurchaserequestDetailComponent},
{path: 'purchaserequest/edit/:id', component: PurchaserequestEditComponent},
{path: 'purchaserequest/lines/:id', component: PurchaserequestLinesComponent },
{path: 'purchaserequest/review/detail/:id', component: PurchaserequestReviewDetailComponent },
{path: 'purchaserequest/review/list', component: PurchaserequestReviewListComponent },
{path: 'purchaserequest/list', component: PurchaserequestListComponent},
{path: 'purchaserequest/create', component: PurchaserequestCreateComponent},
{path: 'purchaserequestlineitem/detail/:id/:prid', component: PurchaserequestlineitemDetailComponent},
{path: 'purchaserequestlineitem/create/:prid', component: PurchaserequestlineitemCreateComponent},
{path: 'purchaserequestlineitem/edit/:id/:prid', component: PurchaserequestlineitemEditComponent},

{path: '**', component: HomeComponent}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{}