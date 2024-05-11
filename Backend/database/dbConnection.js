import mongoose from "mongoose";
import 'dotenv/config'

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://sachinmdhs3:IJDqzWNaISjTWMp6@cluster0.ejiphzz.mongodb.net/?retryWrites=true", {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
