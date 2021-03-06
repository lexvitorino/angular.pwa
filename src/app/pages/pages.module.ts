import { NgModule } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { IndexedDBComponent } from './indexed-db/indexed-db.component';
import { MapaComponent } from './mapa/mapa.component';
import { MenuComponent } from './menu/menu.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MapaComponent,
    QrcodeComponent,
    SignatureComponent,
    IndexedDBComponent
  ]
})
export class PagesModule { }
