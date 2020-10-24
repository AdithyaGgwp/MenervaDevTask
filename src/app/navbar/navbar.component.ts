import { Component, OnInit } from '@angular/core';

//bootstrap navbar to navigate between upload and gallery using [routerLink]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
