import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchCityPage } from '../search-city/search-city';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToSearchCity(){
    this.navCtrl.push(SearchCityPage);
  }  
}

