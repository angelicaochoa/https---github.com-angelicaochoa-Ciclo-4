import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { TenisComponent } from './tenis/tenis.component';



const routes: Routes = [
  {path:'contacto',component:ContactoComponent},
  {path:'inicio',component:InicioComponent},
  {path:'producto',component:ProductoComponent},
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'tenis', component:TenisComponent},
  {path:'',component:BienvenidoComponent, pathMatch: 'full'},
  {path:'**',component:BienvenidoComponent, pathMatch: 'full'},
  {
    path: 'producto', component: ProductoComponent,
    children: [
      { path: 'tenis', component: TenisComponent }          
    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    ProductoComponent,
    BienvenidoComponent,
    TenisComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
