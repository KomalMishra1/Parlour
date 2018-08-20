import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


imagePath1='../../assets/images/makeup.jpg';
imagePath2='../../assets/images/salon.jpg';
imagePath3='../../assets/images/wash.jpg';

  constructor() { }

  ngOnInit() {

    }


}
