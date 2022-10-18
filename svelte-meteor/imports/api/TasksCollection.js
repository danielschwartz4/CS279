import { Mongo } from "meteor/mongo";

// Import task data from mongo db
export const TasksCollection = new Mongo.Collection("tasks");
