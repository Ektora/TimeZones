import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timezones',
  templateUrl: './timezones.component.html',
  styleUrls: ['./timezones.component.css']
})
export class TimezonesComponent implements OnInit {
  @Input() melyikIdoZona : string | undefined;
  @Input() aktualisIdoZona : boolean = false;
  @Output() aktualisIdoZonaValtozas = new EventEmitter<boolean>();
  pontosIdo: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.melyikIdoZona) {
      this.aktualisIdo();
    }
  }

 aktualisIdo() {
    if(this.melyikIdoZona!='')
      this.pontosIdo = new Date().toLocaleDateString("en-US", {timeZone : this.melyikIdoZona, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: 'numeric', minute: 'numeric', second: 'numeric'});
  }

  aktualisnakJelol(){
      this.aktualisIdo();
      this.aktualisIdoZona = !this.aktualisIdoZona;
      this.aktualisIdoZonaValtozas.emit(this.aktualisIdoZona);
      
  }

}


