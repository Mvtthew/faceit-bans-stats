import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BansListComponent } from './components/bans-list/bans-list.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		BansListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
