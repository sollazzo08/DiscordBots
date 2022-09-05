import { Client, GatewayIntentBits } from "discord.js";
import config from './config'
import * as commandModules from './commands';

const commands = Object(commandModules)

export const client = new Client({ intents: [GatewayIntentBits.Guilds]})

client.once('ready', () => {
    console.log("Discord bot is ready")
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) {
        return
    }
     const {commandName} = interaction
     commands[commandName].execute(interaction, client)

} )

client.login(config.TOKEN);