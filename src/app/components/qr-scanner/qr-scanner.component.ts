import {Component, OnDestroy, OnInit} from '@angular/core';
import {Html5QrcodeScanner, Html5QrcodeScanType} from "html5-qrcode";
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
  qrResultString: string | undefined;
  timestamp: string | undefined;
  html5QrCodeScanner: Html5QrcodeScanner | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.html5QrCodeScanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
      },
      false
    );
    this.html5QrCodeScanner.render(
      this.onScanSuccess.bind(this),
      this.onScanFailure.bind(this)
    );
  }

  ngOnDestroy(): void {
    if (!this.html5QrCodeScanner) return;
    this.html5QrCodeScanner.clear();
  }

  onScanSuccess(decodedText: string): void {
    this.qrResultString = decodedText;
    this.timestamp = new Date().toISOString();
    console.log(`QR Code Result: ${this.qrResultString}`);
    console.log(`Timestamp: ${this.timestamp}`);

    localStorage.setItem('qrData', this.qrResultString);
    localStorage.setItem('timestamp', this.timestamp);
    if (!this.html5QrCodeScanner) return;

    this.html5QrCodeScanner.clear();
    this.router.navigateByUrl('/main');
  }

  onScanFailure(error: any): void {
    console.warn(`QR Code scan error: ${error}`);
  }
}
