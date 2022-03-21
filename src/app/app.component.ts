import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-timezones';
  maximum : boolean = false;
  idoZonak = [
    {idoZona : 'America/Chicago', aktualisIdoZona: true},
    {idoZona : 'Europe/Budapest', aktualisIdoZona: false},
  ]
  
  ujIdoZonaHozzaAdasa(){
    this.idoZonak.push({idoZona: '', aktualisIdoZona: false});
    if(this.idoZonak.length == 5)
      this.maximum = true;
  }

  aktualisIdoZonaValtozott(aktualis : boolean, index : number){
    for(let i = 0; i<this.idoZonak.length; i++)
    {
      if(index==i){
        this.idoZonak[i].aktualisIdoZona=true;
      }
      else{
        this.idoZonak[i].aktualisIdoZona=false;
      }
    }
  }
}
