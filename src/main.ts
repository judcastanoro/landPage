/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

@Component({
  selector: 'ngx-app-root',
  standalone: true,
  template: `
    <h1>Hello from the otter side</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class AppComponent {
  name = 'Angular';
 }



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
