import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';

import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CadastraProdutoComponent,
    SideBarComponent,
    ListarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
