import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-incio',
  templateUrl: './incio.page.html',
  styleUrls: ['./incio.page.scss'],
})
export class IncioPage implements OnInit {

  componentes: Componente[] = [
    {
    icon: 'american-football-outline',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
    },
    {
    icon: 'logo-apple-appstore',
    name: 'Alert',
    redirectTo: '/alert'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
