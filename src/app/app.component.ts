import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'CorporateMobile';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getFakeList().subscribe(resp => console.log(resp));
  }

}
