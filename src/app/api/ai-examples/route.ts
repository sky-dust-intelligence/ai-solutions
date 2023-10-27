import { OpenAIApi, Configuration } from "openai";

export async function POST(req: Request) {
  const body = await req.json();

  const { prompt, apiKey } = body;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY || apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: prompt,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const generatedContent = response.data.choices[0].message.content;

  console.log(apiKey);

  return new Response(JSON.stringify(generatedContent));
}
