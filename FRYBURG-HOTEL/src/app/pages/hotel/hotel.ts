import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { Hotel as HotelDados } from '../../interfaces/hotel';

@Component({
  selector: 'app-hotel',
  imports: [RouterLink],
  templateUrl: './hotel.html',
  styleUrl: './hotel.css',
})
export class Hotel {
  private route = inject(ActivatedRoute);
  private hotelService = inject(HotelService);

  hotel: HotelDados | undefined;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.hotel = this.hotelService.buscarHotel(id);
  }
}

