import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public data: { type: string; title: string };
  icon?: string;
  title: string;
  iconColor: string;
  titleColor: string;

  ngOnInit(): void {
    this.createBtn();
  }

  createBtn(): void {
    switch (this.data.type) {
      case 'new': {
        this.icon = 'add';
        this.title = this.data.title;
        this.iconColor = '#4289ca';
        this.titleColor = '#eaf5ff';
      }
    }
  }
}
