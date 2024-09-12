import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-lower-section',
  standalone: true,
  imports: [TableModule, PaginatorModule ],
  templateUrl: './lower-section.component.html',
  styleUrls: ['./lower-section.component.css']
})
export class LowerSectionComponent {
  constructor(private fileSaverService: FileSaverService) {}

  saveFile() {
    const blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    this.fileSaverService.save(blob, 'example.txt');
  }
  parseCost(cost : string) {
    return parseFloat(cost.replace('$', ''));
  }
  toggle :boolean = false ;
  sortData(){
    this.toggle = !this.toggle ;
    if(this.toggle == false){
      this.tickets = this.tickets.sort((a, b) => ( this.parseCost(a.cost) - this.parseCost(b.cost) ) ) ;
    }
    else{
      this.tickets = this.tickets.sort((a, b) => ( -this.parseCost(a.cost) + this.parseCost(b.cost) ) ) ;
    }
  }
  tickets = [
    {
      ticketNumber: 'C-101',
      userName: 'محمد مجدي',
      userAvatar: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
      numberOfPeople: 1,
      visits: 'مرة واحدة',
      details: 'سينما مصر، مول العرب، ',
      cost: '$40',
      ticketLink: '',
      ticketno: 'تذكرة رقم'
    },
    {
      ticketNumber: 'C-102',
      userName: 'ضياء محمد',
      userAvatar: 'https://th.bing.com/th/id/R.96454dd560e5715da3402abef4b4fbfb?rik=KUxXdEstFihxQg&pid=ImgRaw&r=0',
      numberOfPeople: 1,
      visits: 'مرة واحدة',
      details: 'سينما مصر، مول ',
      cost: '$30',
      ticketLink: ''
    },
    {
      ticketNumber: 'C-101',
      userName: 'محمد مجدي',
      userAvatar: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
      numberOfPeople: 1,
      visits: 'مرة واحدة',
      details: 'سينما مصر، مول العرب، ',
      cost: '$40',
      ticketLink: ''
    },
    {
      ticketNumber: 'C-102',
      userName: 'ضياء محمد',
      userAvatar: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
      numberOfPeople: 1,
      visits: 'مرة واحدة',
      details: 'سينما مصر، مول ',
      cost: '$30',
      ticketLink: ''
    },{
      ticketNumber: 'C-101',
      userName: 'محمد مجدي',
      userAvatar: 'img link',
      numberOfPeople: 1,
      visits: 'مرة واحدة',
      details: 'سينما مصر، مول العرب، ',
      cost: '$40',
      ticketLink: ''
    },
    {
      ticketNumber: 'C-102',
      userName: 'ضياء محمد',
      userAvatar: 'path',
      numberOfPeople: 1,
      visits: 'مرة واحدة',
      details: 'سينما مصر، مول ',
      cost: '$30',
      ticketLink: ''
    },
  ]
  totalRecords = this.tickets.length;
}
