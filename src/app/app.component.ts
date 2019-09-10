import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevTo';
  articles$;
  user: string = 'softchris';
  constructor(private http: HttpClient) {
    this.articles$ = this.http
      .get(`https://dev.to/api/articles?username=${this.user}`)
    // .get('data/devto-export.json')
  }

  fetchUser() {
    this.articles$ = this.http
      .get(`https://dev.to/api/articles?username=${this.user}`)
  }
}
