import { Partner } from "../entity/Partner";
import { Service } from "typedi";
import { PartnerRepository } from "../repository/partner-repository";
import moment from "moment";
import 'moment-timezone';

@Service()
export class PartnerService {
  private partnerRepository: PartnerRepository
  /**
   *
   */
  constructor(partnerRepository: PartnerRepository) {
    this.partnerRepository = partnerRepository
  }

  public async getAll(lat:number, lng:number) {
    let partners =  await this.partnerRepository.getAll()

    partners.forEach(x => x.distance = this.haversine(lat,lng, Number(x.latidute),Number(x.longitude)))

    return partners.sort((a,b) => (a.distance > b.distance) ? 1: -1)
  }
  public async getAllSelect() {
    const partners = await this.partnerRepository.getAll()
    return partners.sort((a, b) => a.name.localeCompare(b.name))
  }

  public haversine(lat1:number, lon1:number, lat2:number, lon2:number) 
  {
    var R = 6371; // Radius of the earth in km
    var dLat = this.toRad(lat2-lat1); 
    var dLon = this.toRad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  // Converts numeric degrees to radians
  public toRad(Value:number) 
  {
      return Value * Math.PI / 180;
  }
}
  