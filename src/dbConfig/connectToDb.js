import mongoose from 'mongoose';
import 'dotenv';

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'syncDB' });
    console.log('DB connected');
  } catch (error) {
    console.log('Something went wrong while connecting the DB', error);
  }
};
