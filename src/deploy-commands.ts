import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { SlashCommandBuilder } from "@discordjs/builders";
import config from "./config";
import * as commandModules from './commands'

type Command = {
    data: SlashCommandBuilder
}

const commands = [];

for(const module of Object.values<Command>(commandModules)) {
    commands.push(module.data)
}
   

const rest = new REST({ version: '10'}).setToken(config.TOKEN)

rest.put(Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), {body: commands}).then(() => {
    console.log("Succesfully registered applications commands")
}).catch(console.error)
