import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Libros', url: '/login', icon: 'book' },
    { title: 'Computador', url: '/folder/Outbox', icon: 'laptop' },
    { title: 'Ambiente', url: '/folder/Favorites', icon: 'home' },
    { title: 'Proyector', url: '/folder/Archived', icon: 'eye' },
  ];
  public labels = ['Family'];
  constructor() {}
}
