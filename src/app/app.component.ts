import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-timezones';

  idoZona1 : string = 'America/Chicago';
  aktualisIdoZona1 : boolean = true;
  idoZona2 : string = 'Europe/Budapest';
  aktualisIdoZona2 : boolean = false;

  aktualisIdoZonaValtozott(aktualis : boolean){
    this.aktualisIdoZona1=!this.aktualisIdoZona1;
    this.aktualisIdoZona2=!this.aktualisIdoZona2;
  }
}
