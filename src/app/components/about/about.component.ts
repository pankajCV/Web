import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  experience;

  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    let joiningDate = new Date('2018-04-17');
    let year = today.getFullYear() - joiningDate.getFullYear();
    var m = today.getMonth() - joiningDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < joiningDate.getDate())) {
       year--;
    }
    this.experience = year + '.'+m 
  }

}
