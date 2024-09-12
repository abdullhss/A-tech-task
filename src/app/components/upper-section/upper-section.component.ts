import { Component } from '@angular/core';
import {TicketComponent} from "../ticket/ticket.component"
import {GraphComponent} from "../graph/graph.component"
@Component({
  selector: 'app-upper-section',
  standalone: true,
  imports: [TicketComponent , GraphComponent],
  templateUrl: './upper-section.component.html',
  styleUrl: './upper-section.component.css'
  
})
export class UpperSectionComponent {

}
