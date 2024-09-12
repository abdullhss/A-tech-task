import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  qrData = "https://atechnologies.info/";
  isCopied: boolean = false;


  copyText() {
    const textToCopy = document.getElementById('copyText')?.textContent || '';
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    window.alert("copied")
  }

}
