import {bootstrapApplication} from '@angular/platform-browser';
import { ROUTES } from './app/app-routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(ROUTES))
  ],
})
