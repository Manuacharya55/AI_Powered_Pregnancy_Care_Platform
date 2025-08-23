import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generate(name,description) {

const prompt = `You are an expert pregnancy wellness coach with deep knowledge of yoga, prenatal health, meditation, and nutrition.

I am building a program that lasts 34 weeks.

The program name is: ${name}

The in-depth description is: [${description}]

I need you to generate a JSON array with 34 objects, each object representing one week of the program.

The JSON format must strictly follow:

{
  "weekNumber": <number>,
  "details": "<paragraph>"
}

Rules for "details":
- Write ONE VERY LONG, IN-DEPTH PARAGRAPH for each week (minimum 250 words per week).
- The paragraph must feel like a personal coaching guide.
- Include specific yoga poses, breathing techniques, meditation practices, or lifestyle adjustments.
- For each activity, explain:
  - What the activity is
  - Why it is recommended in this specific stage of pregnancy
  - Detailed physical, emotional, and mental benefits for mother and baby
- Add extra context such as precautions, how to perform slowly/safely, and tips for building a routine.
- The tone must be supportive, encouraging, and friendly.
- Avoid repetition across weeks; build up complexity and variety as pregnancy progresses.
- Do NOT include any markdown, explanations, or text outside of the JSON.
- The output must be ONLY a valid JSON array with 34 objects.

Example for week 3 (shortened here for illustration, but your output must be much longer):

{
  "weekNumber": 3,
  "details": "This week focuses on gentle Surya Namaskar with very slow movements. Practicing just 3–4 rounds in the morning helps improve flexibility, reduce stiffness, and keep the spine active. Adding deep breathing with each movement enhances oxygen supply, calming the mother and supporting the baby’s growth. Morning sunlight during practice provides natural vitamin D, which is vital for bone development. If Surya Namaskar feels heavy, simply practicing Tadasana (Mountain Pose) with deep breaths for 5 minutes can bring balance and reduce early pregnancy fatigue."
}`

  const response = await client.responses.create({
    model: "openai/gpt-oss-20b",
    input: prompt,
  });

  const data = JSON.parse(response.output_text);
  return data;
}
