import { Component } from '@angular/core';
import { Router, NavigationEnd, Routes, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showImage: boolean = false;


  
  
  
  constructor(private router: Router) { 
  }
  
  obterPathsDasRotas(): string[] {
    const routes: Routes = this.router.config;
    const paths: string[] = routes
      .filter(route => route.path !== undefined && route.path !== '')
      .map(route => `/${route.path}`);
  
    return paths;
  }
  

  ngOnInit() {

    this.router.events.subscribe((event) => {
      const rotas = this.obterPathsDasRotas();
      if (event instanceof NavigationEnd || event instanceof NavigationStart) {
        const currentRoute = this.router.url;
        
        this.showImage = !rotas.includes(currentRoute);
      }
    });
  }
  

}
