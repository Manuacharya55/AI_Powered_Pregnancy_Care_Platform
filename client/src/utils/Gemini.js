import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const ChatWithAI = async (state,message) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-1.5-flash",
      history: state,
      config: {
        systemInstruction: "You are a doctor",
      },
    });
  
    const result = await chat.sendMessage({message : `${message} generate response in text without highlighting anything and dont use *** to higlight instead use <b> instead of /n use <br/>`});
    const text = result.text;

    return text;
} catch (error) {
    console.log(error)
  }
};
