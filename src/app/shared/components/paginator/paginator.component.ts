import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() totalDocs: number;
  @Input() limit: number;
  @Input() totalPages: number;
  @Input() page: number;
  @Input() pagingCounter: number;
  @Input() hasPrevPage: boolean;
  @Input() hasNextPage: boolean;
  @Input() prevPage: number;
  @Input() nextPage: number;
  itemPerPage = [{ value: 5 }, { value: 10 }, { value: 25 }];

  getTo() {
    return this.limit - (this.limit - 1);
  }

  getFrom() {
    return this.limit * this.page;
  }

  next(){
    
  }
}
