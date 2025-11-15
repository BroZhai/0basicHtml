const OpenAI = require("openai");

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: "嗯? 这里的地方好像要保密哦",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();