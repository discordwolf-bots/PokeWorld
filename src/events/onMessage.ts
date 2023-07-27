import { Message } from 'discord.js';
import { ExtendedClient } from '../interfaces/ExtendedClient';
import { errorHandler } from '../utils/errorHandler';

export const onMessage = async (bot: ExtendedClient, message: Message) => {
  try {
    if (message.author.bot || !message.content || !message.guild) {
      return;
    }
  } catch (error) {
    await errorHandler(bot, error, 'on message');
  }
};
