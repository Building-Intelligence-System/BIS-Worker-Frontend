import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Html5Qrcode} from "html5-qrcode";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss'
})
export class QrScannerComponent implements OnInit, OnDestroy {
  @ViewChild('reader') reader: ElementRef | undefined;
  private html5QrCode: Html5Qrcode | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.html5QrCode = new Html5Qrcode("reader");
  }

  startScanner(): void {
    if (!this.html5QrCode) return;
    this.html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250
      },
      qrCodeMessage => {
        this.router.navigateByUrl("main");
        console.log(qrCodeMessage);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    ).catch(err => {
      console.log(err);
    });
  }

  stopScanner(): void {
    if (!this.html5QrCode) return;
    this.html5QrCode.stop().then(ignore => {
      console.log("Остановилась");
    })
  }

  ngOnDestroy(): void {
    if (!this.html5QrCode) return;
    this.html5QrCode.stop().catch(err => {
      console.log(err);
    });
  }
}
