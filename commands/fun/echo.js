const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echoes your message with a twist")
    .addStringOption((option) =>
      option.setName("text").setDescription("Text to echo").setRequired(true)
    ),

  async execute(interaction) {
    let text = interaction.options.getString("text");
    console.log(text, "Checkout");
    text = text.split("").reverse().join("");
    await interaction.reply(`Echo: **${text}**`);
  },
};
