import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ListComponent } from './components/list/list.component';
import { MapLocationComponent } from './components/map-location/map-location.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SignaturePadModule } from 'ngx-signaturepad';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    ZXingScannerModule,
    FormsModule,
    SignaturePadModule
  ],
  declarations: [
    BreadcrumbComponent,
    DialogComponent,
    ListComponent,
    ScannerComponent,
    MapLocationComponent,
    SpinnerComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    ZXingScannerModule,
    FormsModule,
    SignaturePadModule,
    BreadcrumbComponent,
    DialogComponent,
    ListComponent,
    ScannerComponent,
    MapLocationComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
