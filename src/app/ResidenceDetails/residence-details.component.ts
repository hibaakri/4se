import { Component } from '@angular/core';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {

  viewNextResidence() {
    const nextId = this.residence.id + 1; // Exemple, à adapter selon la logique
    this.router.navigate(['/residence', nextId]);
  }
  router:any;
  residence: any; 
}
