import { Mongo } from "meteor/mongo";

// Import task data from mongo
export const TasksCollection = new Mongo.Collection("tasks");
