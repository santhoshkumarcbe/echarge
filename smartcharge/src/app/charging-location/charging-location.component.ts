import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { ChargingLocation } from '../charging-location';

@Component({
  selector: 'app-charging-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
   <img class="listing-photo" 
   [src]="chargingLocation.photo" 
    alt="Exterior photo of {{chargingLocation.name}}">
   <h2 class="listing-heading">{{chargingLocation.name}}</h2>
   <p class="listing location">{{chargingLocation.city}}, {{chargingLocation.state}}</p>
   </section>
  `,
  styleUrl: './charging-location.component.scss'
})
export class ChargingLocationComponent {
 @Input() chargingLocation!:ChargingLocation;
}
