import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexedDBComponent } from './indexed-db/indexed-db.component';
import { MapaComponent } from './mapa/mapa.component';
import { MenuComponent } from './menu/menu.component';
import { PagesComponent } from './pages.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'qrcode', component: QrcodeComponent },
      { path: 'signature', component: SignatureComponent },
      { path: 'indexedDB', component: IndexedDBComponent },
      { path: '', pathMatch: 'full', redirectTo: 'menu' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
