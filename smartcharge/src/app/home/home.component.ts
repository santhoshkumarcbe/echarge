import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChargingLocationComponent } from '../charging-location/charging-location.component';
import { ChargingLocation } from '../charging-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ChargingLocationComponent],
  template: `
    <section>
    <form>
     <input type="text" placeholder="filter by city">
     <button class="primary" type="button">Search</button>
    </form>
    </section>
    <section class="results">

    <app-charging-location *ngFor="let chargingLocation of chargingLocationList" [chargingLocation]="chargingLocation"></app-charging-location>
    
    </section>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  chargingLocationList: ChargingLocation[] =[
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Coimbatore',
      state: 'TN',
      photo: 'https://orders.newsfilecorp.com/files/1184/63949_8569223ec4c8ea6e_001full.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Trichy',
      state: 'TN',
      photo: 'https://krpproperties.com/wp-content/uploads/Blog_photos/Blog-EV-Charging-Stations-Feature-20181017.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Chennai',
      state: 'TN',
      photo: 'https://i1.wp.com/audiclubna.org/wp-content/uploads/Electrify-America-The-Future-of-EV-Charging-Stations-5.jpg?w=1600&ssl=1',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Hosur',
      state: 'TN',
      photo: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2017/09/Sortimo-EV-Charging-Station-1020x610.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Coimbatore',
      state: 'TN',
      photo: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2017/09/Sortimo-EV-Charging-Station-Germany-1020x610.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Salem',
      state: 'TN',
      photo: 'https://evup-4634.kxcdn.com/img/containers/main/evup-carpark.jpg/d21a162082cdd1a4678e57cb6e3168af.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://d21buns5ku92am.cloudfront.net/69264/images/366602-Large-EVBox%20Iqon-f7cb78-original-1601650655.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 7,
      name: 'Clips charging Solutions',
      city: 'Krishnagiri',
      state: 'Tamil Nadu',
      photo: 'https://rednews.com/wp-content/uploads/ELECTRIC-CHARGING-STATION.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 8,
      name: 'Tata Towns',
      city: 'Chennai',
      state: 'Tamil Nadu',
      photo: 'https://www.rushlane.com/wp-content/uploads/2020/01/tata-nexon-electric-launch-price-14.jpg',
      availableBrands: ["ola"],
      reservedTime:[["ola"],["9:00 AM - 10:00 AM"]]
    },
    {
      id: 9,
      name: 'Ioniq chargers',
      city: 'Ooty',
      state: 'Tamil Nadu',
      photo: 'https://images.hgmsites.net/hug/2022-hyundai-ioniq-5-at-electrify-america-dc-fast-charging-station_100793064_h.jpg',
      availableBrands: ["hyundai ioniq"],
      reservedTime:[["ioniq"],["9:00 AM - 10:00 AM"]]
    }
  ];
}
