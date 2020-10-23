import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IStateStats } from '../stats';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.scss']
})
export class StaticFormComponent implements OnInit {

  public stateSelected = ''
  public statistics = [];
  stateList = [];
  public filterData;
  public stats: IStateStats  = {
    atleast_one_measure: '',
    immunization_measure: '',
    reportable_lab_results_measure: '',
    syndromic_surveillance_measure: '',
    registry_measure: ''
  };

  constructor(private apiService: ApiService) {
    this.stateList = [{ "region": "Select", "region_code": "" }, { "region": "Alabama", "region_code": "AL" }, { "region": "Alaska", "region_code": "AK" },
    { "region": "Arizona", "region_code": "AZ" }, { "region": "Arkansas", "region_code": "AR" }, { "region": "California", "region_code": "CA" },
    { "region": "Colorado", "region_code": "CO" }, { "region": "Connecticut", "region_code": "CT" }, { "region": "Delaware", "region_code": "DE" },
    { "region": "District Of Columbia", "region_code": "DC" }, { "region": "Florida", "region_code": "FL" }, { "region": "Georgia", "region_code": "GA" },
    { "region": "Hawaii", "region_code": "HI" }, { "region": "Idaho", "region_code": "ID" }, { "region": "Illinois", "region_code": "IL" },
    { "region": "Indiana", "region_code": "IN" }, { "region": "Iowa", "region_code": "IA" }, { "region": "Kansas", "region_code": "KS" },
    { "region": "Kentucky", "region_code": "KY" }, { "region": "Louisiana", "region_code": "LA" }, { "region": "Maine", "region_code": "ME" },
    { "region": "Maryland", "region_code": "MD" }, { "region": "Massachusetts", "region_code": "MA" }, { "region": "Michigan", "region_code": "MI" },
    { "region": "Minnesota", "region_code": "MN" }, { "region": "Mississippi", "region_code": "MS" }, { "region": "Missouri", "region_code": "MO" },
    { "region": "Montana", "region_code": "MT" }, { "region": "National", "region_code": "US" }, { "region": "Nebraska", "region_code": "NE" },
    { "region": "Nevada", "region_code": "NV" }, { "region": "New Hampshire", "region_code": "NH" }, { "region": "New Jersey", "region_code": "NJ" },
    { "region": "New Mexico", "region_code": "NM" }, { "region": "New York", "region_code": "NY" }, { "region": "North Carolina", "region_code": "NC" },
    { "region": "North Dakota", "region_code": "ND" }, { "region": "Ohio", "region_code": "OH" }, { "region": "Oklahoma", "region_code": "OK" },
    { "region": "Oregon", "region_code": "OR" }, { "region": "Pennsylvania", "region_code": "PA" }, { "region": "Rhode Island", "region_code": "RI" },
    { "region": "South Carolina", "region_code": "SC" }, { "region": "South Dakota", "region_code": "SD" }, { "region": "Tennessee", "region_code": "TN" },
    { "region": "Texas", "region_code": "TX" }, { "region": "Utah", "region_code": "UT" }, { "region": "Vermont", "region_code": "VT" },
    { "region": "Virginia", "region_code": "VA" }, { "region": "Washington", "region_code": "WA" }, { "region": "West Virginia", "region_code": "WV" },
    { "region": "Wisconsin", "region_code": "WI" }, { "region": "Wyoming", "region_code": "WY" }]
  }

  ngOnInit(): void {
    this.fetchStatistics()
  }

  fetchStatistics() {
    this.apiService.getStatistics().subscribe(result => {
      this.statistics = result;
      this.filterData = this.statistics.filter((obj) => obj.period == 2015);
    })

  }

  stateSeleted(state) {
    this.stateSelected = state.region
    let filterData = this.filterData.filter((data) => data.region_code == state.region_code);
    this.stats = filterData[0]
    console.log('this.stats', this.stats);
  }

}
