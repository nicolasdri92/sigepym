import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
btn_header = [
  {"image": "phone", "link": "/contactos"},
  {"image": "today", "link": "/calendario"},
  {"image": "ballot", "link": "/notas"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
