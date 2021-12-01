import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../config/mongo"
import Attendance from "../models/attendance";

export const attendanceRouter = express.Router();

attendanceRouter.use(express.json());

attendanceRouter.post("/", async (req: Request, res: Response) => {
  try {
      const obj = req.body as Attendance;
      const result = await collections.attendances.insertOne(obj);

      result
          ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
          : res.status(500).send("Failed to create a new game.");
  } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
  }
});