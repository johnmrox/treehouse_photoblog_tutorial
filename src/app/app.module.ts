//this is the root module of our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //never used in real life; only for eduational purposes like this coures
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';
@NgModule({
	imports: [BrowserModule, HttpModule, FormsModule, InMemoryWebApiModule.forRoot(InMemoryEntryService)], //acts as base for entire application
	providers: [EntryService],
	declarations: [AppComponent, EntryComponent, EntryListComponent, EntryCommentFormComponent], //this is where we add new components
	bootstrap: [AppComponent]
})
export class AppModule {}
