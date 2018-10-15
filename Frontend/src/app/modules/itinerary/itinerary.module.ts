import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventComponent } from '../../components/itinerary/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { ItineraryComponent } from '../../components/itinerary/itinerary.component';
import { ItineraryService } from '../../services/itinerary-service/itinerary.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    EventComponent,
    ItineraryComponent
  ],
  exports:[
    EventComponent,
    ItineraryComponent
  ],
  providers:[
    ItineraryService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
     { provide: MatDialogRef, useValue: {} }
  ],
  entryComponents:[EventComponent]
})
export class ItineraryModule { }