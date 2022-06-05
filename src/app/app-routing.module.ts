import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './component/blogs/api/api.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactComponent } from './component/contact/contact.component';
import { FaqComponent } from './component/faq/faq.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { NewsComponent } from './component/news/news.component';
import { ProductsComponent } from './component/products/products.component';
import { TeamComponent } from './component/team/team.component';





const routes: Routes = [{ path: '', loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{path:'api',component:ApiComponent},
{path:'contact',component:ContactComponent},
{path:'products',component:ProductsComponent},
{path:'news',component:NewsComponent},
{path:'blogs',component:BlogsComponent},
{path:'team',component:TeamComponent},
{path:'feedback',component:FeedbackComponent},
{path:'faq',component:FaqComponent},
{ path: 'cart', component: CartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
