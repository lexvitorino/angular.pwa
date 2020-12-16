import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDoorOpen, faHome, faUndo, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  iconUser = faUser;
  iconUndo = faUndo;
  iconHome = faHome;
  iconDoorOpen = faDoorOpen;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  get isMenu(): boolean {
    return this.router.url === '/pages/menu';
  }

  get username(): string {
    return 'DEMONSTRAÇÃO';
  }

  logout() {
    this.router.navigate(['login']);
  }

}
