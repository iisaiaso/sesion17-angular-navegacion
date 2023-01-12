import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormContacComponent } from './form-contac/form-contac.component';
import { NosotrosMisionComponent } from './nosotros-mision/nosotros-mision.component';
import { NosotrosVisionComponent } from './nosotros-vision/nosotros-vision.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FormContacComponent,
    NosotrosMisionComponent,
    NosotrosVisionComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    FormContacComponent,
    NosotrosMisionComponent,
    NosotrosVisionComponent
  ]
})
export class ComponentsModule { }
