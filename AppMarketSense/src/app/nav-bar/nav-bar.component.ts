
import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';


@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
    sidebarVisible = false;
}