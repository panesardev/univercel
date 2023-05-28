import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app/app.config';
import { provideServerRendering } from '@angular/platform-server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
