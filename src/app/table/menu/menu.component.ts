import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
}
}