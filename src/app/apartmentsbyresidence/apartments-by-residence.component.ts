import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {
  residenceId!: number;
  apartments = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: true, category: 'Luxury', ResidenceId: 1 },
    { apartNum: 102, floorNum: 1, surface: 45, terrace: false, category: 'Standard', ResidenceId: 1 },
    { apartNum: 201, floorNum: 2, surface: 60, terrace: true, category: 'Luxury', ResidenceId: 2 },
  ];
  filteredApartments: any[] = [];
}
