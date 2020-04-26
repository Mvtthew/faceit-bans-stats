import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BansListComponent } from './components/bans-list/bans-list.component';
import { BanElementComponent } from './components/ban-element/ban-element.component';
import { BanHeaderComponent } from './components/ban-header/ban-header.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		BansListComponent,
		BanElementComponent,
		BanHeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
