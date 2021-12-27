import * as mongoDB from "mongodb";

export const collections: { attendances?: mongoDB.Collection } = {}

export async function connectToDatabase () {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb+srv://cassio:1234@boasaude.r5r6y.mongodb.net/test');
          
  await client.connect();
      
  const db: mongoDB.Db = client.db('boasaude');
 
  const attendancesCollection: mongoDB.Collection = db.collection('attendance');

collections.attendances = attendancesCollection;
     
       console.log(`Successfully connected to database: ${db.databaseName} and collection: ${attendancesCollection.collectionName}`);
}