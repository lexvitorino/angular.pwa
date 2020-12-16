import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Dialog, DialogLeft } from './../../shared/components/dialog/dialog.model';
import { DialogService } from './../../shared/components/dialog/dialog.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = new Login();

  constructor(
    public router: Router,
    public dialog: DialogService
  ) { }

  ngOnInit() {
  }

  get logo(): string {
    return `${environment.base_url}/assets/images/logo-icon.png`;
  }

  public onSubmit(form): void {
    this.router.navigate(['pages/menu']);
  }

  openModal(title: string, message: string, showFooter: boolean = true) {
    this.dialog.setConfig({ title: title, message: message, showFooter: showFooter } as Dialog);
    this.dialog.setBtnLeft({ class: 'btn-success', text: 'OK!' } as DialogLeft);
    this.dialog.show();
  }

}
