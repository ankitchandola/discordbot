const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Shows your or another user’s avatar")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to show (default: you)")
        .setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user") || interaction.user;
    const embed = new EmbedBuilder()
      .setTitle(`${user.tag}'s Avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 256 }))
      .setColor("#00FF00");
    await interaction.reply({ embeds: [embed] });
  },
};
