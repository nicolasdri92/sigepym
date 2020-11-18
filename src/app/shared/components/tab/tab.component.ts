import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() tabList;
  @Input() tabSelected: any;

  isSelected(tab) {
    this.tabSelected === tab;
  }
}