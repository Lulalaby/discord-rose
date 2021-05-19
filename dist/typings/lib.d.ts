import { CommandContext as ctx } from '../structures/CommandContext';
import { Worker as worker } from '../clustering/worker/Worker';
import { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types';
import { SlashCommandContext } from '../structures/SlashCommandContext';
declare namespace DiscordRose {
    type CommandType = string | RegExp;
    interface CommandOptions {
        /**
         * Command to check for (string or RegExp)
         */
        command: CommandType;
        /**
         * Array of extra commands to check
         */
        aliases?: CommandType[];
        /**
         * Slash command interaction data that posts on startup
         */
        interaction?: RESTPostAPIApplicationCommandsJSONBody;
        /**
         * Execute function
         */
        exec: (ctx: CommandContext) => void | Promise<void>;
    }
    interface CommandContext extends ctx {
    }
    type Worker = worker;
    type CTX = DiscordRose.CommandContext | SlashCommandContext;
}
export = DiscordRose;
