import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";
import { RadioComponent } from "./radio/radio.component";

// import {
//   MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
//   MatGridListModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDialogModule,
//   MatStepperModule, MatSelectModule, MatTooltipModule, MatAutocompleteModule, MatRadioModule, MatExpansionModule
// } from '@angular/material';

@NgModule({
  declarations: [AppComponent, RadioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
