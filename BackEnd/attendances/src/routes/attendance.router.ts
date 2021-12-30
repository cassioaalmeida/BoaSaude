import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../config/mongo"
import Attendance from "../models/attendance";
import moment from "moment";
import 'moment-timezone';

export const attendanceRouter = express.Router();

attendanceRouter.use(express.json());

attendanceRouter.post("/", async (req: Request, res: Response) => {
  try {
      const obj = req.body;
      obj.createdAt = moment(new Date()).tz('America/Sao_Paulo').format()
      const result = await collections.attendances.insertOne(obj);

      result
          ? res.status(201).send()
          : res.status(500).send("Failed to create new Attendance");
  } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
  }
});

attendanceRouter.get("/", async (req: Request, res: Response) => {
  try {
      const result = await collections.attendances.find({}).toArray()

      result
          ? res.status(200).send(result)
          : res.status(500).send("Failed to return attendances");
  } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
  }
});