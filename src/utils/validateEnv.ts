import { WebhookClient } from 'discord.js';
import { ExtendedClient } from '../interfaces/ExtendedClient';
import { logHandler } from './logHandler';

export const validateEnv = (bot: ExtendedClient) => {
  if (!process.env.DISCORD_TOKEN) {
    logHandler.log('error', 'Missing "DISCORD_TOKEN" environment variables!');
    process.exit(1);
  }
  if (!process.env.MONGODB_CONNECTION) {
    logHandler.log(
      'error',
      'Missing "MONGODB_CONNECTION" environment variables!',
    );
    process.exit(1);
  }
  if (!process.env.HOME_GUILD) {
    logHandler.log('error', 'Missing "HOME_GUILD" environment variables!');
    process.exit(1);
  }

  bot.config = {
    token: process.env.DISCORD_TOKEN,
    dbUri: process.env.MONGODB_CONNECTION,
    debugHook: process.env.DEBUG_HOOK
      ? new WebhookClient({
          url: process.env.DEBUG_HOOK,
        })
      : undefined,
    homeGuild: process.env.HOME_GUILD,
  };
};
