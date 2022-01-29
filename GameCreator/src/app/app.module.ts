import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { MatRippleModule } from '@angular/material/core';
import { ItemOverviewComponent } from './items/ui/item-overview/item-overview.component';
import { ItemCardComponent } from './items/ui/item-card/item-card.component';
import { MatCardModule } from '@angular/material/card';
import { CharacterModule } from './character/character.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemOverviewComponent,
    HomeComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgbModule,
    MatTableModule,
    MatRippleModule,
    MatCardModule,
    CharacterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
