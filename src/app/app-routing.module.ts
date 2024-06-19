import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { NgIfdirectiveComponent } from './ng-ifdirective/ng-ifdirective.component';
import { HomeComponent } from './home/home.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{path:'AttributeBinding',
  component:AttributeBindingComponent
},
{path:'userslist',
  component:UserslistComponent
},
{
  path:'userdetails/:id',
  component:UserdetailsComponent
},
{
  path:'products',component:ProductsComponent
},
{
  path:'ClassBinding',
  component:ClassbindingComponent
},
{
  path:'EventBinding',
  component:EventbindingComponent
},{
  path:'NgIfDirective',
  component:NgIfdirectiveComponent
},{
  path:'NgSwitchDirective',
  component:NgIfdirectiveComponent
},
{
  path:'home',
  component:HomeComponent,
  children:[
    {
      path:'childone',
      component:ChildoneComponent
    },
    
    {
      path:'childtwo',
      component:ChildtwoComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
