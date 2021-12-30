import { ObjectId } from "mongodb";

export default class Attendance {
  constructor(
    createdAt: Date,
    partnerId: String,
    partnerName: String,
    partnerlongitude: String,
    partnerLatitude: String,
    partnerType: String,
    userId: String,
    userName: String,
    userDocument: String,
    userAge: String,
    userInsuranceId: String,
    userInsuranceCardNumber: String,
    public id?: ObjectId) {}
}