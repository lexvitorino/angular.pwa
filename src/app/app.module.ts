import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
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
  VAPID_PUBLIC_KEY = 'BAb83-4w5RcTk4f4sqChUIxhG83zVaEJ-RGlOQaz95VXGn8wEgK-psru_ORx2CeeQnXKfGOO7wa2rrhKoOEjL5Y';

  constructor(private pushSw: SwPush, private update: SwUpdate) {
    update.available.subscribe(update => {
      console.log('Nova versão disponível');
    });

    this.SubscribeToPush();
    pushSw.messages.subscribe(msg => {
      console.log(JSON.stringify(msg));
    });
  }

  SubscribeToPush() {
    this.pushSw.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(pushSubscription => {
        console.log(JSON.stringify(pushSubscription));
      })

      .catch(err => {
        console.error('Ocorreu um erro:' + err);
      });
  }
}
