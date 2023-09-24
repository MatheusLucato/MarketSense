import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UsuarioModule } from './usuario/usuario.module';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutoModule } from './produto/produto.module';
import { DialogModule } from 'primeng/dialog';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    LoginCadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    UsuarioModule,
    ProdutoModule,
    DialogModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
