const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Tells a random joke"),
  async execute(interaction) {
    await interaction.deferReply();
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Dark?type=single"
      );
      const joke = response.data.joke;
      await interaction.editReply(joke);
    } catch (error) {
      await interaction.editReply(
        "Couldn&apos;t fetch a joke—blame the internet!"
      );
    }
  },
};
