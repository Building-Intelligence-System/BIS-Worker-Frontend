import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.035804, 39.018066],
      zoom: 18,
      zoomControl: false
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const myIcon = L.icon({
      iconUrl: 'assets/icons/marker.svg',
    })
    const myIcon1 = L.icon({
      iconUrl: 'assets/icons/marker-task-out.svg',
    })
    const myIcon2 = L.icon({
      iconUrl: 'assets/icons/marker-task-over.svg',
    })
    const myIcon3 = L.icon({
      iconUrl: 'assets/icons/marker-task-progress.svg',
    })

    tiles.addTo(this.map);
    L.marker([45.035804, 39.017066], {icon: myIcon})
      .addTo(this.map)
    L.marker([45.035905, 39.016066], {icon: myIcon1})
      .bindPopup('Уборка территории')
      .addTo(this.map)
    L.marker([45.035906, 39.018066], {icon: myIcon2})
      .bindPopup('Заливка фундамента')
      .addTo(this.map)
    L.marker([45.035608, 39.017066], {icon: myIcon3})
      .bindPopup('Ограждение территории')
      .addTo(this.map)

    const circle = L.circle([45.035915, 39.016176], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
    }).addTo(this.map);

    const polygon = L.polygon([
      [45.036906, 39.018066],
      [45.035906, 39.018576],
      [45.035806, 39.018166],
      [45.036006, 39.017066]
    ]).addTo(this.map);

    const circle1 = L.circle([45.035608, 39.017066], {
      color: '#2ba266',
      fillColor: '#2ba266',
      fillOpacity: 0.5,
      radius: 10
    }).addTo(this.map);

  }


}
