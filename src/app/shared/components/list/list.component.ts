import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() header: any;
  @Input() data: any;

  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

  get result() {
    if (!this.data) {
      return;
    }

    const r = [];
    const keys = Object.keys(this.data);
    keys.forEach((element: string) => {
      if (element !== 'link') {
        r.push({
          element,
          key: !!this.header ? this.header[element] : element,
          value: this.data[element],
          link: ''
        });
      } else {
        r.map(u => {
          if (u.element === this.data[element].field) {
            u.link = this.data[element].url;
          }
          return u;
        });
      }
    });
    return r;
  }
}
