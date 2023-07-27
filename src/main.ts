import { Client, Partials } from 'discord.js';
import { IntentOptions } from './config/IntentOptions';
import { ExtendedClient } from './interfaces/ExtendedClient';
import { validateEnv } from './utils/validateEnv';
import { loadCommands } from './utils/loadCommands';
import { handleEvents } from './events/_handleEvents';
import { connectDb } from './database/connectDb';
import { errorHandler } from './utils/errorHandler';
import { registerCommands } from './utils/registerCommands';

(async () => {
  const bot = new Client({
    intents: IntentOptions,
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
  }) as ExtendedClient;
  validateEnv(bot);
  bot.cache = {};
  bot.commands = await loadCommands(bot);

  handleEvents(bot);

  await connectDb(bot);

  await bot
    .login(process.env.DISCORD_TOKEN)
    .catch((err) => errorHandler(bot, err, 'login'));
  await registerCommands(bot);
})();
