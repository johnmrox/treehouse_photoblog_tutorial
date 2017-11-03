// Import global stylesheet
import './styles/main.css';
//bootstraps our app. use dynamic for development, but platformBrowser for production
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
//boostrap AppModule and attach to webpage
platformBrowserDynamic().bootstrapModule(AppModule);
