import { Component, OnInit } from '@angular/core';
import { PartnerType } from 'src/app/_enum/partner-type.enum';
import { SearchPartnerService } from './search-partner.service';

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.scss']
})
export class SearchPartnerComponent implements OnInit {

  lat
  lng
  partners

  constructor(
    private searchPartnerService: SearchPartnerService
  ) { }

  ngOnInit(): void {
    this.getLocation()
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.searchPartnerService.getPartners(this.lat, this.lng).subscribe((data: any) => {
            this.partners = data
            console.log(data)
            this.partners.forEach(element => {
              element.type = this.getEnumKeyByEnumValue(PartnerType, element.type)
            });
            console.log(data)
          });
        }
      },
        (error: GeolocationPositionError ) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
    let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : '';
  }
}
