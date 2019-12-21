import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GridComponent,
    ListComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
