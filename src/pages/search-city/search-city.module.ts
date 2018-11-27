import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCityPage } from './search-city';

@NgModule({
  declarations: [
    SearchCityPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCityPage),
  ],
})
export class SearchCityPageModule {}
