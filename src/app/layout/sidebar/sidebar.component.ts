import { Component } from '@angular/core';

import { items } from '../../data/sidebar.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  items = items;
  constructor() {}
}
