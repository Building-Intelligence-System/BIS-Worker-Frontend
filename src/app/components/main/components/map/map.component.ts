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
      center: [45.07099372740487, 38.9067694661253],
      zoom: 18,
      zoomControl: false,
      attributionControl: false
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
    L.marker([45.07099372740487, 38.9067694661253], {icon: myIcon})
      .addTo(this.map)
    L.marker([45.071783051535334, 38.907345329798716], {icon: myIcon1})
      .bindPopup('Уборка территории')
      .addTo(this.map)
    L.marker([45.0711530257453, 38.90655583163377], {icon: myIcon2})
      .bindPopup('Заливка фундамента')
      .addTo(this.map)
    L.marker([45.07119954671788, 38.90696576512127], {icon: myIcon3})
      .bindPopup('Ограждение территории')
      .addTo(this.map)

    const polygon = L.polygon([
        [
          45.0711530257453,
          38.90655583163377

        ],
        [
          45.07099372740487,
          38.9067694661253

        ],
        [
          45.071141865887114,
          38.90688167479627

        ],
        [
          45.07119954671788,
          38.90696576512127

        ],
        [
          45.071783051535334,
          38.907345329798716

        ],
        [
          45.071866595821746,
          38.9070969720689
        ],
        [
          45.07184406402541,
          38.90701084373319
        ],
        [
          45.0711530257453,
          38.90655583163377
        ]
    ]).addTo(this.map);

    const polygon2 = L.polygon([
      [
        45.07097257996085,
        38.906801336438264

      ],
      [
        45.07075780581053,
        38.90709892132418

      ],
      [
        45.07169620996055,
        38.90765779755051

      ],
      [
        45.071776758955195,
        38.907384062255176

      ],
      [
        45.071171998840725,
        38.906990671064676

      ],
      [
        45.0711074465315,
        38.90689600255732

      ],
      [
        45.07097257996085,
        38.906801336438264

      ]
    ]).addTo(this.map);
    polygon2.setStyle({fillColor: '#e2e5274d', color: 'yellow'});
  }
}
