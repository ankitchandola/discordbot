const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("poll")
    .setDescription("Creates a yes/no poll")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("The question to ask")
        .setRequired(true)
    ),
  async execute(interaction) {
    const question = interaction.options.getString("question");
    const pollMessage = await interaction.reply({
      content: `📊 **Poll:** ${question}\n👍 Yes | 👎 No`,
      fetchReply: true,
    });
    await pollMessage.react("👍");
    await pollMessage.react("👎");
  },
};
