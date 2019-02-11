import { Component, OnInit } from "@angular/core";
import StationsFile from "../../assets/data/stations.json";

export interface Station {
  title: string;
  station: number;
  isOpen: boolean;
}

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"]
})
export class RadioComponent implements OnInit {
  constructor() {}

  stations: Station[];
  stationSelected: string = undefined;

  ngOnInit() {
    this.mountListStations();
  }

  mountListStations() {
    let fileStations = StationsFile;
    if (!this.stations) {
      this.stations = [];
    }
    for (let obj of fileStations) {
      this.stations.push({
        title: obj.title,
        station: obj.station,
        isOpen: false
      });
    }
  }

  selectStation(station) {
    station.isOpen = !station.isOpen;
    this.stationSelected = station;
    this.stopStations(station);
  }

  turnUp() {
    console.log("Turn up");
  }
  turnDown() {
    console.log("Turn down");
  }

  stopStations(station) {
    for (let obj of this.stations) {
      if (obj.title !== station.title) {
        obj.isOpen = false;
      }
    }
  }
}
