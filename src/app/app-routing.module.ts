import { NosotrosVisionComponent } from './components/nosotros-vision/nosotros-vision.component';
import { NosotrosMisionComponent } from './components/nosotros-mision/nosotros-mision.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'nosotros', component: NosotrosComponent,
    children: [
      { path: 'mision', component: NosotrosMisionComponent },
      { path: 'vision', component: NosotrosVisionComponent },
    ]
  },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
