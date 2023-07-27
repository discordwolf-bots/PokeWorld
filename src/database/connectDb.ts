import { connect, connection } from 'mongoose';
import { ExtendedClient } from '../interfaces/ExtendedClient';
import { errorHandler } from '../utils/errorHandler';

export const connectDb = async (bot: ExtendedClient) => {
  try {
    await connect(bot.config.dbUri);
    if (connection) console.log('Connected to Mongoose');
  } catch (err) {
    await errorHandler(bot, err, 'database connection');
  }
};
