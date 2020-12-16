import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  get logo(): string {
    return `${environment.base_url}/assets/images/logo-icon.png`;
  }

}
