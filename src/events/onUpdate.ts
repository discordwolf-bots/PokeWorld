import { Message, PartialMessage } from 'discord.js';
import { ExtendedClient } from '../interfaces/ExtendedClient';
import { errorHandler } from '../utils/errorHandler';

export const onUpdate = async (
  bot: ExtendedClient,
  oldMessage: Message | PartialMessage,
  newMessage: Message | PartialMessage,
) => {
  if (newMessage.partial) {
    try {
      newMessage = await newMessage.fetch();
    } catch (error) {
      return await errorHandler(bot, error, 'fetching partial message');
    }
  }

  if (newMessage.author.bot || !newMessage.content || !newMessage.guild) {
    return;
  }
};
