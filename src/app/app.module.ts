import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './component/blogs/api/api.component';
import { ContactComponent } from './component/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './component/products/products.component';
import { NewsComponent } from './component/news/news.component';
import { CustomDirective } from './custom.directive';
import { BlogsComponent } from './component/blogs/blogs.component';
import { TeamComponent } from './component/team/team.component';
import { FaqComponent } from './component/faq/faq.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ApiService } from './component/service/api.service';
import { CartComponent } from './component/cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    ContactComponent,
    ProductsComponent,
    NewsComponent,
    CustomDirective,
    BlogsComponent,
    TeamComponent,
    FaqComponent,
    FeedbackComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
