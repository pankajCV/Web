import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'testimonial',component:TestimonialComponent},
  { path:'experience',component:ExperienceComponent},
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
