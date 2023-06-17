import {Component} from '@angular/core';
import {ApiService} from "./utils/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private apiService: ApiService) {
    this.apiService.addFavorite({input: ["MyFavorite"]})
    this.apiService.getFavorites();
    this.apiService.getFavorites().subscribe((res) => {
      console.log(res);
    });
  }
}
