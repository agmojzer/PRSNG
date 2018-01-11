import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SystemService } from './service/system.service';
import { LogService } from './service/log.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';

import { MenuComponent } from './core/menu/menu.component';

import { SortPipe } from './util/sort-pipe';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorService } from './service/vendor.service';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductService } from './service/product.service';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';

import { PurchaserequestService } from './service/purchaserequest.service';
import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestLinesComponent } from './feature/purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaserequestReviewListComponent } from './feature/purchaserequest/purchaserequest-review-list/purchaserequest-review-list.component';
import { PurchaserequestReviewDetailComponent } from './feature/purchaserequest/purchaserequest-review-detail/purchaserequest-review-detail.component';


import { PurchaserequestlineitemService } from './service/purchaserequestlineitem.service';
import { PurchaserequestlineitemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaserequestlineitemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaserequestlineitemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';

import { StatusService } from './service/status.service';



@NgModule({
  declarations: [
    UserLoginComponent,
    HomeComponent,
    AppComponent,
    UserListComponent,
    MenuComponent,
    SortPipe,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    PurchaserequestListComponent,
    PurchaserequestDetailComponent,
    PurchaserequestEditComponent,
    PurchaserequestCreateComponent,
    PurchaserequestlineitemDetailComponent,
    PurchaserequestLinesComponent,
    PurchaserequestlineitemCreateComponent,
    PurchaserequestlineitemEditComponent,
    PurchaserequestReviewDetailComponent,
    PurchaserequestReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [UserService, VendorService, ProductService, PurchaserequestService,
              SystemService, LogService, StatusService, PurchaserequestlineitemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
