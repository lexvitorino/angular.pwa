import { HttpClientModule } from '@angular/common/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private readonly publicKey = 'BM9M9-VlY5VY47K_pdCzIx90JruMqIVY5NeKN1n0eBctXJZ5QU17VYdMTPXRh3GtQZyff6Mql4AbMvTvVlSZsdk';

  constructor(
    private swUpdate: SwUpdate,
    private appRef: ApplicationRef,
    private swPush: SwPush
  ) {
    this.updateClient();
    this.checkUpdate();
    this.pushSubscription();
    this.getNotifications();
    this.clickNotifications();
  }

  updateClient() {
    if (!this.swUpdate.isEnabled) {
      console.log(`Sw Update :: isEnabled`, `Not Enabled`);
      return;
    }

    this.swUpdate.available.subscribe((event) => {
      console.log(`Sw Update :: available`, `current`, event.current, `available`, event.available);
      if (confirm('update available for the app please confirm')) {
        this.swUpdate.activateUpdate().then(() => location.reload());
      }
    });

    this.swUpdate.activated.subscribe((event) => {
      console.log(`Sw Update :: activated`, `previous`, event.previous, `available`, event.current);
    });
  }

  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if (isStable) {
        const timeInterval = interval(8 * 60 * 60 * 1000);
        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => console.log('checked'));
          console.log('update checked');
        });
      }
    })
  }

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log(`Sw Push :: isEnabled`, `Not Enabled`);
      return;
    }

    this.swPush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
      .then((sub) => {
        console.log(JSON.stringify(sub));
      })
      .catch((err) => console.log(err));
  }

  getNotifications() {
    this.swPush.messages.subscribe((message: any) => {
      console.log(message)
    });
  }

  clickNotifications() {
    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      window.open(notification.data.url);
    });
  }
}
